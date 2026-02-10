# 🎥 Sofol Landing Page

A modern, responsive **frontend-only landing page** built using **React + Vite + Tailwind CSS**.  
This project focuses on clean UI, smooth animations, and reusable components — ideal for showcasing a startup or company brand.

---

## 🚀 Tech Stack

- **React** – Component-based UI
- **Vite** – Fast development & build tool
- **Tailwind CSS** – Utility-first styling
- **JavaScript (ES6+)**
- **HTML5 & CSS3**

---

## ✨ Features

- Responsive layout (desktop-first)
- Clean and modern UI design
- Animated image carousel
- Reusable UI components
- Pricing cards with feature comparison
- Team & testimonials sections
- Optimized folder structure
- No backend (pure frontend)

---

## 📁 Folder Structure

```
sofol/
│
├── constants/
│ └── constants.ts # Centralized static data
│
├── public/ # Static assets
│ ├── about/
│ ├── footer/
│ ├── header/
│ ├── hero/
│ ├── navbar/
│ ├── news/
│ ├── pricing/
│ ├── services/
│ ├── team/
│ └── videos/
│
├── src/
│ ├── components/
│ │ ├── ui/ # Reusable UI primitives
│ │ ├── AboutButton.tsx
│ │ ├── Header.tsx
│ │ ├── Navbar.tsx
│ │ └── PricingCard.tsx
│ │
│ ├── sections/ # Page sections
│ │ ├── About.tsx
│ │ ├── Footer.tsx
│ │ ├── Hero.tsx
│ │ ├── Home.tsx
│ │ ├── News.tsx
│ │ ├── Pricing.tsx
│ │ ├── Services.tsx
│ │ ├── Statistics.tsx
│ │ ├── Team.tsx
│ │ └── Videos.tsx
│ │
│ ├── lib/ # Utilities/helpers
│ ├── App.tsx
│ ├── main.tsx
│ └── index.css
│
├── index.html
├── tailwind.config.ts
├── vite.config.ts
├── package.json
├── pnpm-lock.yaml
└── README.md
```
## 🧠 Architecture Overview

- Sections represent full-width page blocks (Hero, Services, Team, etc.)
- Components are reusable UI pieces shared across sections
- Constants store content and configuration data to keep JSX clean
- Assets are served directly from `/public` for optimal performance

This structure keeps the codebase scalable and easy to maintain.

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- pnpm (`npm install -g pnpm`)

### Installation

```bash
pnpm install

Development Server
pnpm dev


Open http://localhost:5173 in your browser.
Production Build
pnpm build

```

### 📦 Scripts

- pnpm dev – Start development server
- pnpm build – Create production build
- pnpm preview – Preview production build

### 🎨 Styling

- Tailwind CSS is used exclusively
- Custom colors and spacing are defined in tailwind.config.ts
- Responsive behavior is handled using Tailwind breakpoints

### 📌 Notes

- This project is optimized for landing pages and marketing sites
- Designed to be easily extendable with backend or CMS later
- Clean separation of concerns for maintainability

## 👤 Author

Built as part of **GraphicsHala Internship**.

## 📄 License

This project is intended for internal and demonstration use.
