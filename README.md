# Anderson Vilatuña — Full-Stack Engineer Portfolio

Modern personal portfolio and engineering showcase built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Supabase (PostgreSQL)**.

Designed for high performance, clean architecture, and responsive interactivity across all devices.

---

## 🚀 Live Demo & Sections

- **Inicio (`/`)**: Hero de presentación con marca personal, carrusel infinito de herramientas y stack tecnológico, proyectos destacados con tarjetas apilables (*stacking cards*), valor diferencial en ingeniería + agentes de IA y filosofía de desarrollo.
- **Proyectos (`/proyectos`)**: Galería de **Casos de Estudio Técnicos** con análisis profundo de retos, decisiones de arquitectura (modelo EAV, Groq LLMs <40ms, idempotencia en Stripe, Artillery load testing), métricas y desglose de stack por cada proyecto (NeoHW, Trackifly, Nova Salud).
- **Sobre mí (`/sobre-mi`)**: Perfil profesional, biografía editorial, línea de tiempo interactiva de experiencia laboral (Trackifly, DGIP - EPN), educación profesional (Escuela Politécnica Nacional, Henry Bootcamp), stack de tecnologías y competencias lingüísticas (Español Nativo, Inglés B2).
- **Contacto (`/contacto`)**: Página de contacto conectada directamente a base de datos PostgreSQL vía Supabase, con botones de redacción instantánea en Gmail Web y enlace directo a WhatsApp.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16.4 (App Router & Turbopack)
- **Language:** TypeScript 5
- **UI & Styling:** Tailwind CSS v4, Lucide Icons
- **Database & Backend:** Supabase (PostgreSQL, Row Level Security, pg driver)
- **Design Principles:** SOLID, Clean Architecture, Mobile-First Responsiveness

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/SoyAndersonJoel/portafolio.git
cd portafolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

Copy `.env.example` to `.env.local` and add your Supabase credentials:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-secret-key
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the portfolio.

### 5. Build for production

```bash
npm run build
```

---

## 👤 Author

**Anderson Joel Vilatuña** — Full-Stack Engineer  
- 📍 Quito, Ecuador
- 💼 [LinkedIn](https://www.linkedin.com/in/anderson-joel-vilatuña)
- 🐙 [GitHub](https://github.com/SoyAndersonJoel)
- ✉️ [joel.vilatuna123@gmail.com](mailto:joel.vilatuna123@gmail.com)

---

## 📄 License

This project is licensed under the MIT License.
