"use client"

import * as React from "react"

interface StarBorderProps {
  as?: React.ElementType
  className?: string
  color?: string
  speed?: string
  children: React.ReactNode
}

export function StarBorder({
  as: Component = "div",
  className = "",
  color = "rgba(168, 85, 247, 0.7)",
  speed = "4s",
  children,
  ...props
}: StarBorderProps) {
  return (
    <Component className={`star-border-container star-border-glass ${className}`} {...props}>
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 70%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 70%)`,
          animationDuration: speed,
        }}
      />
      <div className="inner-content">{children}</div>
    </Component>
  )
}
