# ⚡ Zentry — Awwwards-Inspired Creative Web Experience

An interactive, high-performance website inspired by Awwwards-winning designs (Zentry), focusing on fluid layout, kinetic 3D typography, interactive video portals, Bento grids, and scroll-driven animations.

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

---

## 🎯 Overview

This project explores modern creative front-end techniques: combining immersive visual storytelling with 60 FPS rendering performance and full mobile responsiveness. It features scroll-synchronized clip-path morphing, 3D perspective hover states, interactive audio, and smooth video transitions.

### ✨ Key Features
- **Interactive Hero Video Portal:** Multi-scene video switcher with 3D hover preview and expanding GSAP portal transitions.
- **Scroll-Triggered Clip-Path Morphing:** Smooth polygon clip-path animations synchronized with viewport scroll via GSAP `ScrollTrigger`.
- **3D Kinetic Typography:** Staggered 3D word-by-word title reveals (`AnimatedTitle`).
- **Interactive Bento Grid:** 3D tilt cards with radial cursor spotlight and full-bleed background videos.
- **Full Mobile & Tablet Responsiveness:** Glassmorphic mobile navigation drawer, inline mobile video playback, and adaptive layouts for all screen sizes.
- **Ambient Audio Player:** Built-in background audio loop with animated equalizer bars.

---

## 🛠 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Bundler:** [Vite](https://vite.dev/)
- **Animation:** [GSAP](https://gsap.com/) (`@gsap/react`, `ScrollTrigger`)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Code Quality:** ESLint

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (`v18.0.0` or higher recommended)
- `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hvostenko-dev/awwwards.git
   cd awwwards
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Launch development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Production Build

Compile the application with optimized minification and asset processing:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📂 Project Structure

```plaintext
├── public/
│   ├── audio/               # Background loop audio
│   ├── fonts/               # Custom WOFF2 typography (Zentry, Circular Web, General, Robert)
│   ├── img/                 # Optimized WebP images & SVG assets
│   └── videos/              # Hero & Feature MP4 video loops
├── src/
│   ├── components/
│   │   ├── About.jsx        # Scroll-pinned clip-path expansion section
│   │   ├── AnimatedTitle.jsx# 3D GSAP staggered kinetic typography
│   │   ├── Button.jsx       # Animated CTA button with text-roll hover effect
│   │   ├── Contact.jsx      # Call-to-action section with polygon-clipped artwork
│   │   ├── Features.jsx     # Interactive 3D Bento Grid with video cards
│   │   ├── Footer.jsx       # Social links & copyright footer
│   │   ├── Hero.jsx         # Hero section with video portal & scene switcher
│   │   ├── NavBar.jsx       # Floating navbar with audio equalizer & mobile drawer
│   │   ├── Story.jsx        # 3D interactive realm entrance with SVG filter mask
│   │   └── VideoPreview.jsx # 3D perspective parallax wrapper
│   ├── App.jsx              # Root application layout
│   ├── index.css            # Tailwind v4 theme, custom utilities & keyframe animations
│   └── main.jsx             # React DOM entry point
└── index.html
```

---

## 📄 License

This project is licensed under the MIT License.
