export default function About() {
  return (
    <section className="section" id="about" style={{ background: "var(--beige)" }}>
      <div className="container">
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <div className="about-img-wrap" style={{ overflow: "hidden" }}>
              <img src="/assets/about.jpeg" alt="About AURUM" loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
              <div className="about-frame" />
            </div>
            <div className="about-year">2018<span>Founded</span></div>
          </div>
          <div>
            <div className="section-label">Our Story</div>
            <h2 className="section-title">Where Every Plate<br />Tells a <em>Story</em></h2>
            <p style={{ fontFamily: "'Jost',sans-serif", fontWeight: 300, fontSize: "0.95rem", lineHeight: 2, color: "var(--text-muted)", marginBottom: "2rem", letterSpacing: "0.02em" }}>
              Born from an obsession with perfection, AURUM is not merely a restaurant — it is a living gallery of flavour, texture, and memory. We source exclusively from artisan producers whose commitment to craft mirrors our own.
            </p>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "1.2rem", fontWeight: 300, lineHeight: 1.85, color: "var(--text-mid)", marginBottom: "3rem", borderLeft: "2px solid rgba(201,168,76,.35)", paddingLeft: "1.5rem" }}>
              "Excellence is not an act, but a habit — forged night after night at the pass."
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2rem" }}>
              {[["7", "Michelin Stars"], ["180", "Seat Capacity"], ["12", "Years of Art"]].map(([n, l]) => (
                <div key={l} className="stat-item">
                  <div className="stat-num">{n}</div>
                  <div className="stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
