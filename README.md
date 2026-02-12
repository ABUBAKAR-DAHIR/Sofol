# 🎥 Sofol Landing Page

A modern, responsive **frontend-only landing page** built using **React + Vite + Tailwind CSS**.  
This project focuses on clean UI, smooth animations, and reusable components — ideal for showcasing a startup or company brand.

🔗 **Live Demo:** [sofol.netlify.app](https://sofol.netlify.app)

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
│   └── constants.ts
│
├── node_modules/
│
├── public/
│   ├── about/
│   │   ├── about_hero.png
│   │   ├── Ad.svg
│   │   ├── Arrow.svg
│   │   ├── dots.svg
│   │   ├── Lamp.svg
│   │   ├── table.svg
│   │   └── Vector.svg
│   │
│   ├── about-section/
│   │   ├── about1.png
│   │   ├── about2.png
│   │   ├── about3.png
│   │   ├── hero.png
│   │   └── footer/
│   │       ├── footer1.png
│   │       ├── footer2.png
│   │       ├── footer3.png
│   │       ├── footer4.png
│   │       ├── footer5.png
│   │       ├── footer6.png
│   │       ├── footer7.png
│   │       ├── footer8.png
│   │       └── footer9.png
│   │
│   ├── blog-section/
│   │   ├── HeroBlog.png
│   │   ├── allBlogs/
│   │   │   ├── blog3.png
│   │   │   ├── blog4.png
│   │   │   ├── blog5.png
│   │   │   ├── blog6.png
│   │   │   ├── blog7.png
│   │   │   ├── blog8.png
│   │   │   ├── blog9.png
│   │   │   ├── blog10.png
│   │   │   ├── blog11.png
│   │   │   └── blog12.png
│   │   └── recentBlogs/
│   │       ├── blog1.png
│   │       └── blog2.png
│   │
│   ├── contact/
│   │   ├── behance.svg
│   │   ├── email.svg
│   │   ├── facebook.svg
│   │   ├── linkedin.svg
│   │   ├── location.svg
│   │   ├── map.png
│   │   └── phone.svg
│   │
│   ├── footer/
│   │   ├── call-calling.svg
│   │   ├── location.svg
│   │   ├── sms.svg
│   │   └── sofol_footer.svg
│   │
│   ├── header/
│   │   ├── behance.svg
│   │   ├── call.svg
│   │   ├── email.svg
│   │   ├── facebook.svg
│   │   ├── linkedin.svg
│   │   ├── location.svg
│   │   ├── p.svg
│   │   └── time.svg
│   │
│   ├── hero/
│   │   └── hero.png
│   │
│   ├── navbar/
│   │   └── sofol.svg
│   │
│   ├── news/
│   │   ├── news1.png
│   │   ├── news2.png
│   │   └── news3.png
│   │
│   ├── pricing/
│   │   ├── check.svg
│   │   └── lock.svg
│   │
│   ├── projects-section/
│   │   ├── all-projects/
│   │   │   ├── img1.png
│   │   │   ├── img2.png
│   │   │   ├── img3.png
│   │   │   ├── img4.png
│   │   │   ├── img5.png
│   │   │   ├── img6.png
│   │   │   ├── img7.png
│   │   │   └── img8.png
│   │   │
│   │   ├── recent-projects/
│   │   │   ├── img1.png
│   │   │   ├── img2.png
│   │   │   ├── img3.png
│   │   │   └── img4.png
│   │   │
│   │   └── details/
│   │       ├── adobe-illustrator.svg
│   │       ├── figma.svg
│   │       ├── img1.png
│   │       ├── img2.png
│   │       ├── img3.png
│   │       ├── img4.png
│   │       ├── img5.png
│   │       └── main.png
│   │
│   ├── services/
│   │   ├── ads.svg
│   │   ├── backg.png
│   │   ├── brain.svg
│   │   ├── doc.svg
│   │   ├── Ellipse 6.svg
│   │   ├── line.png
│   │   └── details/
│   │       ├── hero.png
│   │       ├── icon1.svg
│   │       ├── icon2.svg
│   │       ├── project1.png
│   │       ├── project2.png
│   │       ├── project3.png
│   │       └── project4.png
│   │
│   ├── services-section/
│   │
│   ├── team/
│   │   ├── naag1.png
│   │   ├── naag2.png
│   │   └── naag3.png
│   │
│   ├── team-section/
│   │   ├── hero.png
│   │   ├── designers/
│   │   │   ├── img1.png
│   │   │   ├── img2.png
│   │   │   ├── img3.png
│   │   │   ├── img4.png
│   │   │   ├── img5.png
│   │   │   ├── img6.png
│   │   │   ├── img7.png
│   │   │   └── img8.png
│   │   │
│   │   └── products/
│   │       ├── img1.png
│   │       ├── img2.png
│   │       ├── img3.png
│   │       └── img4.png
│   │
│   ├── videos/
│   │   ├── left.svg
│   │   ├── right.svg
│   │   ├── video1.png
│   │   ├── video2.png
│   │   └── video3.png
│   │
│   ├── Hero Section.png
│   └── _redirects
│
├── src/
│   ├── components/
│   │   ├── about/
│   │   │   ├── constants/
│   │   │   ├── About_About.tsx
│   │   │   ├── About_Footer.tsx
│   │   │   ├── About_Home.tsx
│   │   │   ├── About_Services.tsx
│   │   │   ├── About_Videos.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   └── Navbar.tsx
│   │   │
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── projects/
│   │   ├── services/
│   │   ├── team/
│   │   ├── ui/
│   │   │
│   │   ├── About.tsx
│   │   ├── AboutButton.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Home.tsx
│   │   ├── Input.tsx
│   │   ├── Navbar.tsx
│   │   ├── News.tsx
│   │   ├── NofFound.tsx
│   │   ├── PricingCard.tsx
│   │   ├── Statistics.tsx
│   │   ├── Team.tsx
│   │   └── Videos.tsx
│   │
│   ├── lib/
│   │   └── utils.ts
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

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

Built as part of **[Graphicshaala](https://graphicshaala.com) Internship**.

## 📄 License

This project is intended for internal and demonstration use.
