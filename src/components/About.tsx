export default function About() {
  return (
    <section className="section" id="about" style={{ background: "var(--beige)" }}>
      <div className="container">
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <div className="about-img-wrap">
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 60% 40%,rgba(85,107,47,.5) 0%,transparent 60%),radial-gradient(ellipse at 20% 80%,rgba(201,168,76,.18) 0%,transparent 50%)" }} />
              <div className="about-frame" />
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 1, height: 180, background: "rgba(201,168,76,.1)" }} />
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 64, height: 64, borderRadius: "50%", border: "1px solid rgba(201,168,76,.18)" }} />
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
