# Blockchain Developer Portfolio

A single-page React + Tailwind portfolio with a "chain of blocks" navigation
concept — every section is a block, every project is a block with a hash-like
ID, and the left-hand nav (top nav on mobile) is a literal chain connecting
them.

## 1. Run it locally

```bash
# 1. unzip / open this folder in a terminal, then:
npm install

# 2. start the dev server
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## 2. Edit your content

Everything you need to change lives at the top of `src/App.jsx`:

- `PROFILE` — your name, role, tagline, email, wallet address, social links
- `STATS` — the four numbers in the About section
- `SKILLS` — your tech stack, grouped
- `PROJECTS` — your 4 projects. Each one has:
  - `tagline` — one-line summary shown on the card
  - `overview` — shown in the "Overview" tab (what it does / preview)
  - `problem` — the problem it solves
  - `solution` — what you built to solve it
  - `tech` — the technology list
  - `stats` — two small metrics shown at the top of the modal

## 3. Add your own photo

The avatar is currently a generated placeholder graphic (an SVG "node"
illustration) inside the `Avatar` component in `src/App.jsx`, so the site
works out of the box with no missing images.

To swap in your real photo:

1. Put your photo in `public/`, e.g. `public/profile.jpg`
2. In `src/App.jsx`, replace the `Avatar` component's contents with:

```jsx
function Avatar({ size = 128 }) {
  return (
    <img
      src="/profile.jpg"
      alt="Hirusha Fernando"
      className="rounded-2xl border border-slate-700 object-cover shrink-0"
      style={{ width: size, height: size }}
    />
  );
}
```

That's it — the rest of the layout doesn't need to change.

## 4. Deploy

Any static host works since this is a plain Vite build:

```bash
npm run build
# then upload the generated dist/ folder to Vercel, Netlify, GitHub Pages, etc.
```

- **Vercel / Netlify:** connect the repo, build command `npm run build`,
  output directory `dist`.
- **GitHub Pages:** run `npm run build`, then push the `dist/` folder to a
  `gh-pages` branch (or use the `gh-pages` npm package).

## Project structure

```
portfolio/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
│   └── (put profile.jpg here if you add your own photo)
└── src/
    ├── main.jsx
    ├── index.css
    └── App.jsx        ← almost everything lives here
```
