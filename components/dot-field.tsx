"use client"

import * as React from "react"

interface DotFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  dotRadius?: number
  dotSpacing?: number
  cursorRadius?: number
  cursorForce?: number
  bulgeOnly?: boolean
  bulgeStrength?: number
  glowRadius?: number
  sparkle?: boolean
  waveAmplitude?: number
  gradientFrom?: string
  gradientTo?: string
  glowColor?: string
}

interface Dot {
  ax: number
  ay: number
  sx: number
  sy: number
  vx: number
  vy: number
  x: number
  y: number
}

interface DotConfig {
  dotRadius: number
  dotSpacing: number
  cursorRadius: number
  cursorForce: number
  bulgeOnly: boolean
  bulgeStrength: number
  sparkle: boolean
  waveAmplitude: number
  gradientFrom: string
  gradientTo: string
}

export function DotField({
  dotRadius = 1.5,
  dotSpacing = 14,
  cursorRadius = 500,
  cursorForce = 0.1,
  bulgeOnly = true,
  bulgeStrength = 67,
  glowRadius = 160,
  sparkle = false,
  waveAmplitude = 0,
  gradientFrom = "rgba(168, 85, 247, 0.35)",
  gradientTo = "rgba(180, 151, 207, 0.25)",
  glowColor = "#120F17",
  className = "",
  ...props
}: DotFieldProps) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)
  const svgRef = React.useRef<SVGSVGElement | null>(null)
  const circleRef = React.useRef<SVGCircleElement | null>(null)
  const dotsRef = React.useRef<Dot[]>([])
  const mouseRef = React.useRef({ x: -9999, y: -9999, prevX: -9999, prevY: -9999, speed: 0 })
  const animFrameRef = React.useRef<number | null>(null)
  const sizeRef = React.useRef({ w: 0, h: 0, offsetX: 0, offsetY: 0 })
  const circleOpacityRef = React.useRef(0)
  const speedSmoothRef = React.useRef(0)
  const confRef = React.useRef<DotConfig>({
    dotRadius,
    dotSpacing,
    cursorRadius,
    cursorForce,
    bulgeOnly,
    bulgeStrength,
    sparkle,
    waveAmplitude,
    gradientFrom,
    gradientTo,
  })
  const gradId = React.useId()

  React.useEffect(() => {
    confRef.current = {
      dotRadius,
      dotSpacing,
      cursorRadius,
      cursorForce,
      bulgeOnly,
      bulgeStrength,
      sparkle,
      waveAmplitude,
      gradientFrom,
      gradientTo,
    }
  }, [
    dotRadius,
    dotSpacing,
    cursorRadius,
    cursorForce,
    bulgeOnly,
    bulgeStrength,
    sparkle,
    waveAmplitude,
    gradientFrom,
    gradientTo,
  ])

  React.useEffect(() => {
    const canvas = canvasRef.current
    const circle = circleRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const context: CanvasRenderingContext2D = ctx
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let resizeTimer: ReturnType<typeof setTimeout> | undefined

    function handleResize() {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(initSize, 100)
    }

    function initSize() {
      if (!canvas) return
      const parent = canvas.parentElement
      if (!parent) return
      const rect = parent.getBoundingClientRect()
      const w = rect.width
      const h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      sizeRef.current = {
        w,
        h,
        offsetX: rect.left + window.scrollX,
        offsetY: rect.top + window.scrollY,
      }
      createDots(w, h)
    }

    function createDots(w: number, h: number) {
      const conf = confRef.current
      const step = conf.dotRadius + conf.dotSpacing
      const cols = Math.floor(w / step)
      const rows = Math.floor(h / step)
      const padX = (w % step) / 2
      const padY = (h % step) / 2
      const total = rows * cols
      const arr = new Array(total)
      let idx = 0
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = padX + c * step + step / 2
          const y = padY + r * step + step / 2
          arr[idx++] = {
            ax: x,
            ay: y,
            sx: x,
            sy: y,
            vx: 0,
            vy: 0,
            x,
            y,
          }
        }
      }
      dotsRef.current = arr
    }

    function trackMouseSpeed() {
      const m = mouseRef.current
      const dx = m.prevX - m.x
      const dy = m.prevY - m.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      m.speed += (dist - m.speed) * 0.5
      if (m.speed < 0.001) m.speed = 0
      m.prevX = m.x
      m.prevY = m.y
    }

    const speedInterval = setInterval(trackMouseSpeed, 20)
    let frameCount = 0
    const TWO_PI = Math.PI * 2

    function render() {
      frameCount++
      const dots = dotsRef.current
      const mouse = mouseRef.current
      const { w, h } = sizeRef.current
      const conf = confRef.current
      const len = dots.length
      const time = frameCount * 0.02
      const normSpeed = Math.min(mouse.speed / 5, 1)

      speedSmoothRef.current += (normSpeed - speedSmoothRef.current) * 0.06
      if (speedSmoothRef.current < 0.001) speedSmoothRef.current = 0
      const smoothSpeed = speedSmoothRef.current

      circleOpacityRef.current += (smoothSpeed - circleOpacityRef.current) * 0.08
      if (circle) {
        circle.setAttribute("cx", String(mouse.x))
        circle.setAttribute("cy", String(mouse.y))
        circle.style.opacity = String(circleOpacityRef.current)
      }

      context.clearRect(0, 0, w, h)
      const grad = context.createLinearGradient(0, 0, w, h)
      grad.addColorStop(0, conf.gradientFrom)
      grad.addColorStop(1, conf.gradientTo)
      context.fillStyle = grad

      const radius = conf.cursorRadius
      const rSq = radius * radius
      const halfR = conf.dotRadius / 2
      const bulge = conf.bulgeOnly

      context.beginPath()
      let active = false

      for (let i = 0; i < len; i++) {
        const dot = dots[i]
        const dx = mouse.x - dot.ax
        const dy = mouse.y - dot.ay
        const dSq = dx * dx + dy * dy

        if (dSq < rSq && smoothSpeed > 0.01) {
          active = true
          const d = Math.sqrt(dSq)
          if (bulge) {
            const factor = 1 - d / radius
            const push = factor * factor * conf.bulgeStrength * smoothSpeed
            const angle = Math.atan2(dy, dx)
            dot.sx += (dot.ax - Math.cos(angle) * push - dot.sx) * 0.15
            dot.sy += (dot.ay - Math.sin(angle) * push - dot.sy) * 0.15
          } else {
            const angle = Math.atan2(dy, dx)
            const force = (500 / d) * (mouse.speed * conf.cursorForce)
            dot.vx += Math.cos(angle) * -force
            dot.vy += Math.sin(angle) * -force
          }
        } else if (bulge && (dot.sx !== dot.ax || dot.sy !== dot.ay)) {
          active = true
          dot.sx += (dot.ax - dot.sx) * 0.1
          dot.sy += (dot.ay - dot.sy) * 0.1
          if (Math.abs(dot.sx - dot.ax) < 0.01) dot.sx = dot.ax
          if (Math.abs(dot.sy - dot.ay) < 0.01) dot.sy = dot.ay
        }

        let px = dot.sx
        let py = dot.sy

        if (conf.waveAmplitude > 0) {
          active = true
          py += Math.sin(dot.ax * 0.03 + time) * conf.waveAmplitude
          px += Math.cos(dot.ay * 0.03 + time * 0.7) * conf.waveAmplitude * 0.5
        }

        context.moveTo(px + halfR, py)
        context.arc(px, py, halfR, 0, TWO_PI)
      }

      context.fill()

      if (circleOpacityRef.current > 0.005 || smoothSpeed > 0.005) {
        active = true
      }

      if (active) {
        animFrameRef.current = requestAnimationFrame(render)
      } else {
        context.clearRect(0, 0, w, h)
        context.beginPath()
        for (let i = 0; i < len; i++) {
          const dot = dots[i]
          context.moveTo(dot.ax + halfR, dot.ay)
          context.arc(dot.ax, dot.ay, halfR, 0, TWO_PI)
        }
        context.fill()
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
      if (!animFrameRef.current) {
        animFrameRef.current = requestAnimationFrame(render)
      }
    }

    initSize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", onMouseMove)
    animFrameRef.current = requestAnimationFrame(render)

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
      clearInterval(speedInterval)
      clearTimeout(resizeTimer)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [dotRadius, dotSpacing])

  return (
    <div className={`w-full h-full relative pointer-events-none select-none ${className}`} {...props}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
      <svg
        ref={svgRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      >
        <defs>
          <radialGradient id={gradId}>
            <stop offset="0%" stopColor={glowColor} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle
          ref={circleRef}
          cx="-9999"
          cy="-9999"
          r={glowRadius}
          fill={`url(#${gradId})`}
          style={{ opacity: 0, willChange: "opacity" }}
        />
      </svg>
    </div>
  )
}
