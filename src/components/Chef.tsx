export default function Chef() {
  return (
    <section className="section chef-section" id="chef">
      <div className="container">
        <div className="chef-grid" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "8rem", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <div className="chef-img-wrap" style={{ background: "url('/assets/chef.jpeg') center/top/cover no-repeat" }}>
            </div>
            <div className="chef-ring" />
            <div className="chef-award">
              <div style={{ fontSize: "1.4rem", fontWeight: 700, lineHeight: 1 }}>7★</div>
              <div style={{ fontSize: "0.5rem", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.2rem" }}>Award</div>
            </div>
          </div>
          <div>
            <div className="section-label">The Visionary</div>
            <h2 className="section-title">Chef <em>Arjun</em><br />Mehta</h2>
            <blockquote className="chef-quote">
              Food is not sustenance — it is the language through which I say everything I cannot speak.
            </blockquote>
            <p style={{ fontFamily: "'Jost',sans-serif", fontWeight: 300, fontSize: "0.92rem", lineHeight: 2, color: "var(--text-muted)", marginBottom: "2.5rem" }}>
              Trained at Le Cordon Bleu Paris and honed across three-Michelin-starred kitchens in Tokyo and San Sebastián, Chef Arjun returned to India with a singular mission: to elevate Indian fine dining onto the world stage.
            </p>
            <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
              {[["Le Cordon Bleu", "Paris, 2009"], ["Arzak", "San Sebastián, 2013"], ["Narisawa", "Tokyo, 2016"]].map(([inst, loc]) => (
                <div key={inst} style={{ borderTop: "1px solid rgba(201,168,76,.22)", paddingTop: "1rem" }}>
                  <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.75rem", fontWeight: 400, color: "var(--olive)", marginBottom: "0.3rem" }}>{inst}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "0.9rem", color: "var(--text-muted)" }}>{loc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
