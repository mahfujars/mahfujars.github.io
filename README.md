# Mahfujar Rahman — Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub_Pages-2094d3?logo=github)](https://mahfujars.github.io)

Personal portfolio of **Mahfujar Rahman** — Python Developer with nearly 4 years of production
data-engineering experience: distributed task pipelines, large-scale web crawlers, anti-bot
systems, and ETL.

**Live site:** [mahfujars.github.io](https://mahfujars.github.io)

## Pages

| Route | Content |
|---|---|
| `/` | Hero, animated particles, résumé download |
| `/about` | Bio, animated counters, experience/skills/awards/credentials tabs |
| `/services` | Expertise cards — backend, ETL, scraping, data quality, cloud, anti-bot |
| `/work` | Selected projects (bazarlens, Arogga, SweetChat, Sia.Ch) |
| `/testimonials` | Recommendations |
| `/contact` | Contact form (mailto), résumé link |

## Tech Stack

- **[Next.js](https://nextjs.org)** 16 (Pages Router) + React 18
- **[Tailwind CSS](https://tailwindcss.com)** 3
- **[Framer Motion](https://www.framer.com/motion/)** — page transitions & scroll animations
- **[Swiper](https://swiperjs.com)** — project & testimonial sliders
- **[tsParticles](https://particles.js.org)** — hero background
- **react-icons**, **react-countup**, **nprogress**

## Getting Started

**Prerequisites:** [Node.js](https://nodejs.org) 20.9+ (required by Next.js 16)

```bash
# install dependencies
npm install

# run the dev server
npm run dev
```

No environment variables or API keys needed — the contact form works via `mailto:` and the
site is a fully static export (no server or database involved).

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Deploy

The site is statically exported (`output: 'export'`) and deployed to **GitHub Pages** via
[GitHub Actions](.github/workflows/nextjs.yml) — every push to `main` rebuilds and deploys
automatically.

```bash
# production build → static files in ./out
npm run build
```

## Project Structure

```
├── components/     # UI components (sliders, nav, layout, avatar, …)
├── pages/          # Routes: index, about, services, work, testimonials, contact
├── public/         # Static assets (avatars, thumbnails, résumé PDF)
├── styles/         # Global styles
└── variants.js     # Shared framer-motion animation variants
```

## Contact

- **Email:** [mahfujarx@gmail.com](mailto:mahfujarx@gmail.com)
- **LinkedIn:** [linkedin.com/in/mahfujars](https://linkedin.com/in/mahfujars)
- **GitHub:** [github.com/mahfujars](https://github.com/mahfujars)
- **Résumé:** [Mahfujar_Rahman_Python_Developer.pdf](https://mahfujars.github.io/Mahfujar_Rahman_Python_Developer.pdf)
