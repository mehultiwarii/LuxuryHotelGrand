import { useState } from "react";
import { menuData, BG } from "../constants/data";

export default function Menu() {
  const [active, setActive] = useState<keyof typeof menuData>("Starters");
  return (
    <section className="section menu-section" id="menu">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Culinary Artistry</div>
          <h2 className="section-title" style={{ textAlign: "center" }}>The <em>Menu</em></h2>
          <p className="section-body" style={{ maxWidth: 500, margin: "0 auto" }}>Seasonal ingredients, elevated by technique, presented as edible poetry.</p>
        </div>
        <div className="filter-tabs">
          {(Object.keys(menuData) as Array<keyof typeof menuData>).map(c => (
            <button key={c} className={`filter-tab${active === c ? " active" : ""}`} onClick={() => setActive(c)}>{c}</button>
          ))}
        </div>
        <div className="menu-grid">
          {menuData[active].map((dish, i) => (
            <div key={dish.name} className="menu-card">
              <div className="menu-card-img">
                {(dish as any).img ? (
                  <img
                    src={(dish as any).img}
                    alt={dish.name}
                    loading="lazy"
                    decoding="async"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", position: "absolute", inset: 0 }}
                  />
                ) : (
                  <div className="menu-card-bg" style={{ background: BG[i % BG.length] }} />
                )}
                <div className="menu-overlay" />
                <div className="menu-plate" /><div className="menu-plate2" />
              </div>
              <div className="menu-card-info">
                <div className="menu-card-name">{dish.name}</div>
                <div className="menu-card-desc">{dish.desc}</div>
                <div className="menu-card-footer">
                  <div className="menu-card-price">{dish.price}</div>
                  <div className="menu-card-tag">{dish.tag}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
