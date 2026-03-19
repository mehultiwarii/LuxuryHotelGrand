import { useRef, useEffect } from "react";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fn = () => { if (bgRef.current) bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.05)`; };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg" ref={bgRef}>
        {[80, 160, 260].map((r, i) => (
          <div key={i} className="hero-circle" style={{ width: r * 2, height: r * 2, left: `calc(65% - ${r}px)`, top: `calc(45% - ${r}px)`, opacity: 0.5 - i * 0.13 }} />
        ))}
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{ position: "absolute", borderRadius: "50%", width: 2, height: 2, background: `rgba(201,168,76,.45)`, left: `${14 + i * 13}%`, top: `${22 + Math.sin(i * 1.2) * 28}%`, boxShadow: `0 0 ${8 + i * 2}px rgba(201,168,76,.3)` }} />
        ))}
      </div>
      <div className="hero-content">
        <div className="hero-tag">Est. 2018 · New Delhi</div>
        <h1 className="hero-h1">An <em>Experience</em><br />Beyond Dining</h1>
        <p className="hero-sub">Where culinary artistry meets timeless elegance</p>
        <div className="hero-ctas">
          <button className="btn-primary" onClick={() => document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" })}>
            <span>Reserve a Table</span>
          </button>
          <button className="btn-outline" onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}>
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
}
