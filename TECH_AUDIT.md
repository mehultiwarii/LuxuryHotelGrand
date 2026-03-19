# AURUM — Technical Deep-Dive Audit
### Viva Exam Preparation · Full Stack + React Concepts

---

## 1. Project Overview

**AURUM** is a luxury fine-dining restaurant web application built as a **Single Page Application (SPA)**. It is a fully client-side rendered frontend with no backend or database — it renders all content in the browser using React.

---

## 2. Tech Stack (Full Breakdown)

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| Runtime | **Node.js** | (system) | JS runtime to run build tools |
| Package Manager | **npm** | (system) | Install and manage dependencies |
| Bundler / Dev Server | **Vite** | v8 | Builds, bundles, and serves the app |
| UI Library | **React** | v19 | Building component-based UI |
| DOM Renderer | **React DOM** | v19 | Renders React to the browser DOM |
| Language | **TypeScript** | v5.9 | Typed superset of JavaScript |
| CSS Framework | **TailwindCSS** | v4 | Utility-first CSS (configured but styling mostly in GlobalStyles) |
| Linter | **ESLint** | v9 | Static code analysis / code quality |
| Type Checking | **tsc** | v5.9 | TypeScript compiler for type safety |

### Key Config Files

| File | Role |
|---|---|
| `vite.config.ts` | Registers the `@vitejs/plugin-react` plugin (enables JSX transform + HMR) |
| `tailwind.config.js` | Tells Tailwind which files to scan for class usage |
| `tsconfig.json` | TypeScript project configuration |
| `package.json` | Declares dependencies and npm scripts |
| `index.html` | The single HTML entry point — Vite injects the JS bundle here |

---

## 3. What is Vite?

> **Vite** (French for "fast") is a next-generation build tool.

**How it works:**
- In **development**: uses native ES Modules (ESM) in the browser — no bundling. Changes are served instantly via **Hot Module Replacement (HMR)**.
- In **production**: uses **Rollup** under the hood to create a minified, optimized bundle.

**Key advantage over older tools (like Webpack/CRA):** Cold starts in milliseconds because Vite doesn't bundle everything upfront — it serves files on demand.

**npm scripts in this project:**
```json
"dev":     "vite"                  // Start dev server at localhost:5173
"build":   "tsc -b && vite build"  // Type-check then build production bundle
"preview": "vite preview"          // Preview the production build locally
"lint":    "eslint ."              // Run ESLint across all files
```

---

## 4. What is React?

React is a **JavaScript library for building UIs** using a component-based architecture.

### Core Concept: The Virtual DOM
- React maintains a lightweight in-memory copy of the real DOM called the **Virtual DOM**.
- When state changes, React re-renders the virtual DOM, diffs it against the previous version, and applies **only the minimal set of real DOM changes** (reconciliation).
- This makes updates fast and efficient.

### React 19 in this project
This project uses React 19 — the latest major version. React 19 introduced improvements like the React Compiler and better concurrent features, though this project uses the standard rendering model.

---

## 5. TypeScript

TypeScript adds **static type checking** on top of JavaScript.

**Key TypeScript features used in this project:**

```tsx
// Generic type parameter on useRef
const bgRef = useRef<HTMLDivElement>(null);

// Inline type annotation on props
function Loading({ onDone }: { onDone: () => void }) { ... }

// Non-null assertion operator
document.getElementById('root')!
// The `!` tells TypeScript: "trust me, this is not null"
```

**Why TypeScript?** Catches bugs at compile time rather than runtime, provides IntelliSense autocomplete, makes refactoring safer.

---

## 6. Project Architecture

```
my-app/
├── public/
│   └── assets/           ← Static images served at /assets/...
│       ├── about.jpeg
│       ├── chef.jpeg
│       ├── cheftable.jpeg
│       ├── image1.jpeg    ← Hero background
│       ├── privatedining.jpeg
│       ├── tasting.jpeg
│       └── winecellar.jpeg
├── src/
│   ├── main.tsx           ← Entry point — mounts React app to DOM
│   ├── App.tsx            ← Root component — composes all sections
│   ├── index.css          ← Global CSS
│   ├── components/        ← All UI components (one per file)
│   │   ├── GlobalStyles.tsx
│   │   ├── Loading.tsx
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Menu.tsx
│   │   ├── Experience.tsx
│   │   ├── Chef.tsx
│   │   ├── Reservation.tsx
│   │   └── Footer.tsx
│   └── constants/
│       └── data.ts        ← All data (menu items, experience cards)
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

### How it boots:
1. Browser loads `index.html`
2. `index.html` loads `src/main.tsx` via `<script type="module">`
3. `main.tsx` calls `createRoot(...).render(<App />)`
4. React takes over and renders the entire app into the `#root` div

---

## 7. React Core Concepts Used in This Project

### 7.1 Components

A **React component** is a JavaScript function that returns JSX.

```tsx
// Function Component (modern React)
export default function Chef() {
  return <section>...</section>;
}

// Arrow Function Component
const GlobalStyles = () => <style>{`...`}</style>;
```

**Every component in this project:**

| Component | Responsibility |
|---|---|
| `GlobalStyles` | Injects all CSS via a `<style>` tag |
| `Loading` | Animated splash screen |
| `Navbar` | Fixed nav bar with scroll-aware styling |
| `Hero` | Full-viewport landing section with parallax |
| `About` | Restaurant story with stats and image |
| `Menu` | Filterable menu with tab navigation |
| `Experience` | Auto-scrolling card carousel |
| `Chef` | Chef biography with photo |
| `Reservation` | Booking form section |
| `Footer` | Links, social, copyright |

---

### 7.2 JSX (JavaScript XML)

JSX is the syntax used in React — it **looks like HTML but is JavaScript**.

```tsx
// JSX
const el = <h1 className="title">Hello</h1>;

// Compiled to:
const el = React.createElement("h1", { className: "title" }, "Hello");
```

**Key JSX rules:**
- Use `className` not `class` (JS reserved word)
- Self-closing tags: `<img />`, `<br />`
- Expressions inside `{}`: `<div>{1 + 2}</div>` renders `3`
- Return a **single root element** — use `<>...</>` Fragment if needed

**Fragment `<>...</>`** used in `App.tsx`:
```tsx
return (
  <>        {/* Doesn't create a real DOM node */}
    <Navbar />
    <Hero />
  </>
);
```

---

### 7.3 Props (Properties)

Props are **data passed from parent to child**. Read-only.

```tsx
// Parent passes onDone prop
<Loading onDone={() => setLoaded(true)} />

// Child receives it
function Loading({ onDone }: { onDone: () => void }) {
  // onDone is a function (callback prop)
}
```

---

### 7.4 State — `useState`

**State** is data that can change over time. Changing state triggers a re-render.

```tsx
// In App.tsx
const [loaded, setLoaded] = useState(false);
//     ^value  ^setter      ^initial value
```

- `loaded` starts as `false` → Loading screen shows
- `setLoaded(true)` called when loading is done → `loaded` is `true` → main content renders

**In Loading.tsx:**
```tsx
const [gone, setGone] = useState(false);
// gone: false → visible | gone: true → adds "gone" class → CSS fades it out
```

---

### 7.5 Side Effects — `useEffect`

Runs **after the component renders**. Used for: timers, event listeners, DOM manipulation, API calls.

```tsx
useEffect(() => {
  // runs after render
  return () => { /* cleanup */ };
}, [dependencies]); // re-runs only when dependencies change
```

**In Loading.tsx:**
```tsx
useEffect(() => {
  const t = setTimeout(() => {
    setGone(true);           // start CSS fade-out
    setTimeout(onDone, 850); // tell parent it's done
  }, 2300);                  // wait 2.3s
  return () => clearTimeout(t); // CLEANUP: prevents memory leak
}, [onDone]);
```

**In Hero.tsx:**
```tsx
useEffect(() => {
  const fn = () => {
    bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.05)`;
  };
  window.addEventListener("scroll", fn, { passive: true });
  return () => window.removeEventListener("scroll", fn); // CLEANUP
}, []); // [] = run only once on mount
```

> `{ passive: true }` tells the browser this listener won't block scrolling — performance optimization.

---

### 7.6 DOM References — `useRef`

Creates a **mutable reference** to a DOM element without causing re-renders.

```tsx
// In Hero.tsx
const bgRef = useRef<HTMLDivElement>(null);

// Attach to DOM element
<div className="hero-bg" ref={bgRef}>

// Directly mutate DOM style (no re-render)
bgRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
```

**Why not `useState`?** State causes a re-render on every scroll event (60fps = 60 re-renders/sec). `useRef` directly touches the DOM — zero re-renders, much better performance.

---

### 7.7 Conditional Rendering

```tsx
// In App.tsx
{loaded && (
  <>
    <Navbar />
    <Hero />
    ...
  </>
)}
```

`&&` short-circuit: if `loaded` is `false`, nothing is rendered. When it becomes `true`, everything renders.

---

### 7.8 List Rendering with `.map()`

```tsx
// In Experience.tsx
{[...experiences, ...experiences].map((e, idx) => (
  <div key={`${e.num}-${idx}`} className="exp-card">
    ...
  </div>
))}
```

- Arrays are doubled (`[...arr, ...arr]`) for the seamless infinite scroll animation
- **`key` prop** is required — React uses it to track items during reconciliation
- Without `key`, React may re-render incorrectly or show console warnings

---

### 7.9 Event Handling

```tsx
<button onClick={() =>
  document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" })
}>
  Reserve a Table
</button>
```

- `?.` = **optional chaining** — if `getElementById` returns `null`, doesn't crash
- `scrollIntoView({ behavior: "smooth" })` — native browser smooth scroll API

---

## 8. Data Architecture (`constants/data.ts`)

All content is separated from UI — **separation of concerns**.

```ts
export const menuData = {
  Starters: [...],
  "Main Course": [...],
  Desserts: [...],
};

export const experiences = [
  { num: "01", title: "The Tasting Journey", text: "...", img: "/assets/tasting.jpeg" },
  // ...
];
```

**Benefits:**
- Update content without touching UI code
- Components stay reusable
- Mimics a real API data fetch pattern

---

## 9. Styling Architecture

### 9.1 GlobalStyles Component (Primary)
All CSS written as a **CSS-in-JS string** inside a `<style>` tag component:

```tsx
const GlobalStyles = () => (
  <style>{`
    .navbar { position: fixed; ... }
  `}</style>
);
```

### 9.2 CSS Custom Properties (Design Tokens)
```css
:root {
  --beige: #F5F1E9;
  --gold: #C9A84C;
  --olive: #556B2F;
}
/* Usage: */
color: var(--gold);
```
Change one variable → all usages update instantly.

### 9.3 Inline Styles
```tsx
<div style={{ display: "grid", gap: "8rem", alignItems: "center" }}>
```
- CamelCase property names (`gridTemplateColumns` not `grid-template-columns`)
- Values are strings in quotes

### 9.4 Google Fonts
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:...');
```

| Font | Use |
|---|---|
| **Playfair Display** (serif) | Headings, logo, numbers |
| **Cormorant Garamond** (serif) | Subheadings, quotes |
| **Jost** (sans-serif) | Body text, labels, buttons |

---

## 10. Animations

### CSS `@keyframes`
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
}
.hero-h1 { animation: fadeUp 1s ease 0.55s both; }
/*                    ^name ^dur ^ease ^delay ^fill-mode */
```
`fill-mode: both` → element is hidden before animation starts, stays visible after it ends.

### Infinite Scroll (Experience Section)
```css
@keyframes expScroll {
  from { transform: translateX(0); }
  to   { transform: translateX(calc(-50% - 15px)); }
}
.exp-slider-track {
  animation: expScroll 40s linear infinite;
}
.exp-slider-track:hover { animation-play-state: paused; }
```
Cards are **doubled in JSX** so when track reaches -50%, it loops seamlessly.

### JavaScript Parallax
```tsx
// bgRef.current is the hero background div
bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.05)`;
```
Background moves at 30% of scroll speed → depth illusion.

### CSS Transitions (Hover Effects)
```css
.menu-card-bg { transition: transform .8s cubic-bezier(.25,.1,.25,1); }
.menu-card:hover .menu-card-bg { transform: scale(1.06); }
```
`cubic-bezier(.25,.1,.25,1)` = the classic **ease** curve (smooth acceleration + deceleration).

---

## 11. Responsive Design

```css
@media(max-width: 1024px) {
  .nav-links { display: none; }
  .menu-grid { grid-template-columns: repeat(2, 1fr); }
}
@media(max-width: 768px) {
  .chef-grid { grid-template-columns: 1fr !important; }
}
```

**Fluid typography with `clamp()`:**
```css
.hero-h1 { font-size: clamp(3.2rem, 7vw, 6.5rem); }
/*                          ^min    ^fluid  ^max   */
```
Font scales between 3.2rem and 6.5rem based on viewport — no breakpoints needed.

---

## 12. Entry Point Chain

```
index.html → src/main.tsx → App.tsx → all components
```

**`main.tsx` explained:**
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- **`StrictMode`**: Dev-only tool that double-invokes renders to surface bugs. Zero effect in production.
- **`createRoot`**: React 18+ concurrent mode API. Replaces old `ReactDOM.render()`.
- **`!`**: TypeScript non-null assertion — tells TS that `getElementById` won't return `null`.

---

## 13. Performance Patterns

| Pattern | Where | Why |
|---|---|---|
| `{ passive: true }` on scroll | Hero.tsx | Allows browser to scroll without waiting for JS |
| `useEffect` cleanup functions | Loading, Hero | Prevents memory leaks on component unmount |
| Deferred render with `loaded` state | App.tsx | Nothing renders until splash screen completes |
| CSS `transform` for animations | Everywhere | GPU-accelerated — no layout reflow triggered |
| Doubled array for infinite scroll | Experience.tsx | Pure CSS loop, no JS interval needed |

---

## 14. Public vs Src Assets

| Location | How used | Vite processing |
|---|---|---|
| `public/assets/` | Referenced as `/assets/chef.jpeg` in JSX/CSS | **NOT processed** — served as-is |
| `src/assets/` | Imported: `import img from './assets/chef.jpeg'` | Vite hashes the filename, optimizes |

This project uses `public/assets/` because images are referenced via strings in CSS backgrounds and `src` attributes — no import needed.

---

## 15. Likely Viva Questions & Answers

**Q: What is a SPA?**
> A Single Page Application loads one HTML file and updates content dynamically using JavaScript — no full page reloads. React manages what's shown via component state.

**Q: Difference between `state` and `props`?**
> Props are passed from parent to child and are **read-only**. State is managed inside a component and **can change**, triggering re-renders when updated via the setter.

**Q: Why do we need a `key` prop in lists?**
> React's reconciliation algorithm uses `key` to identify which list items changed, were added, or removed. Without keys, React may re-render elements unnecessarily or in the wrong order.

**Q: What is HMR?**
> Hot Module Replacement — Vite's dev server sends updated code to the browser without a full reload. Component state is preserved while code updates.

**Q: Why use `useRef` for parallax instead of `useState`?**
> `useState` triggers a re-render on every scroll event (60+ times/second) — huge performance cost. `useRef` directly mutates the DOM element's style without triggering any re-render.

**Q: What does `useEffect(() => { ... }, [])` mean?**
> The empty dependency array `[]` means the effect runs **once**, after the first render only. Equivalent to `componentDidMount` in class components.

**Q: Why do we return a cleanup function from `useEffect`?**
> It runs when the component unmounts (or before the effect re-runs). Used to cancel timers, remove event listeners — preventing **memory leaks**.

**Q: What is JSX?**
> JSX is a syntax extension that lets you write HTML-like code in JavaScript. Vite/Babel compiles it to `React.createElement()` calls at build time.

**Q: Why TypeScript over plain JavaScript?**
> TypeScript catches type errors at compile time instead of runtime, provides autocomplete/IntelliSense, and makes large codebases safer to refactor.

**Q: What is Vite's role vs React's role?**
> Vite is the **build tool** — compiles TypeScript, bundles files, serves dev server. React is the **UI library** — manages components, state, and DOM rendering. They are completely separate.

**Q: What is `StrictMode`?**
> A React development helper that double-invokes renders and effects to expose side effects. Has zero impact on production builds.

**Q: Explain the loading screen flow.**
> `App` renders `<Loading onDone={() => setLoaded(true)} />`. Inside Loading, `useEffect` sets a 2.3s timer. When it fires, `gone` becomes `true` (CSS fades it out). After 850ms, `onDone()` is called → `setLoaded(true)` in App → main content renders.

**Q: What is `cubic-bezier`?**
> A mathematical curve that defines the speed of a CSS transition/animation. `cubic-bezier(.25,.1,.25,1)` is the standard **ease** curve — starts slow, accelerates, then decelerates to a smooth stop.

**Q: What does `clamp()` do in CSS?**
> `clamp(min, preferred, max)` — returns the preferred value if it's within the min/max bounds. Used for fluid typography that scales with viewport without needing media queries.

**Q: What is the Virtual DOM?**
> React's in-memory representation of the real DOM. On state change, React computes a new virtual DOM, diffs it against the old one (reconciliation), and updates only the parts of the real DOM that changed — making updates efficient.
