export default function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "4rem" }}>
          <div>
            <div className="footer-logo">AURUM</div>
            <div className="footer-tagline">Fine Dining · New Delhi</div>
            <div className="footer-divider" />
            <p className="footer-about">A sanctuary of flavour in the heart of the capital, where every evening is a chapter worth remembering.</p>
          </div>
          <div>
            <div className="footer-h">Navigate</div>
            <ul className="footer-links">
              {[["about", "About"], ["menu", "Menu"], ["experience", "Experience"], ["chef", "Chef"], ["gallery", "Gallery"], ["reservation", "Reservations"]].map(([id, l]) => (
                <li key={id}><a href="#" onClick={e => { e.preventDefault(); go(id); }}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer-h">Hours</div>
            <p className="footer-cp">Tuesday – Friday</p>
            <p className="footer-cp gold">7:00 PM – 11:00 PM</p>
            <p className="footer-cp" style={{ marginTop: "1rem" }}>Saturday – Sunday</p>
            <p className="footer-cp gold">6:30 PM – 11:30 PM</p>
            <p className="footer-cp" style={{ marginTop: "1rem" }}>Monday</p>
            <p className="footer-cp">Closed</p>
          </div>
          <div>
            <div className="footer-h">Contact</div>
            <p className="footer-cp">12 Lodhi Road</p>
            <p className="footer-cp">New Delhi, 110003</p>
            <p className="footer-cp" style={{ marginTop: "1rem" }}>+91 11 4567 8900</p>
            <p className="footer-cp">hello@aurum.in</p>
            <div className="social-links">
              {["In", "Fb", "Tw", "Yt"].map(s => <a key={s} href="#" className="social-link">{s}</a>)}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2025 AURUM Fine Dining. All rights reserved.</div>
          <div style={{ display: "flex", gap: "2rem" }}>
            {["Privacy", "Terms", "Accessibility"].map(l => (
              <a key={l} href="#" style={{ fontFamily: "'Jost',sans-serif", fontWeight: 200, fontSize: ".72rem", letterSpacing: ".07em", color: "rgba(245,241,233,.18)", textDecoration: "none" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
