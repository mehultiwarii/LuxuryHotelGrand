import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-logo">AURUM</div>
      <ul className="nav-links">
        {[["about", "About"], ["menu", "Menu"], ["experience", "Experience"], ["chef", "Chef"], ["gallery", "Gallery"]].map(([id, l]) => (
          <li key={id}><a href="#" onClick={e => { e.preventDefault(); go(id); }}>{l}</a></li>
        ))}
      </ul>
      <button className="nav-reserve" onClick={() => go("reservation")}>Reserve</button>
    </nav>
  );
}
