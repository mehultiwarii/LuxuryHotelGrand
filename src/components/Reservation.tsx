import { useState } from "react";

export default function Reservation() {
  const [form, setForm] = useState({ name: "", email: "", date: "", time: "", guests: "" });
  const [done, setDone] = useState(false);
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm(f => ({ ...f, [k]: e.target.value }));
  const submit = (e: React.FormEvent) => { e.preventDefault(); setDone(true); setTimeout(() => setDone(false), 3500); };
  return (
    <section className="section reservation-section" id="reservation">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Secure Your Evening</div>
          <h2 className="section-title" style={{ color: "var(--offwhite)", textAlign: "center" }}>Make a <em style={{ color: "var(--gold-light)" }}>Reservation</em></h2>
          <p className="section-body" style={{ textAlign: "center", color: "rgba(245,241,233,.38)" }}>We look forward to curating an unforgettable evening for you.</p>
        </div>
        <div className="res-card">
          {done ? (
            <div style={{ textAlign: "center", padding: "3rem 0" }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontStyle: "italic", color: "var(--gold)", marginBottom: "1rem" }}>Thank You</div>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "1.1rem", color: "rgba(245,241,233,.45)" }}>Your reservation has been received. We shall be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="form-row">
                <div className="form-field">
                  <input className="form-input" placeholder=" " value={form.name} onChange={set("name")} required />
                  <label className="form-label">Full Name</label>
                </div>
                <div className="form-field">
                  <input className="form-input" type="email" placeholder=" " value={form.email} onChange={set("email")} required />
                  <label className="form-label">Email Address</label>
                </div>
              </div>
              <div className="form-3">
                <div className="form-field">
                  <input className="form-input" type="date" placeholder=" " value={form.date} onChange={set("date")} required style={{ colorScheme: "dark" }} />
                  <label className="form-label" style={{ top: form.date ? "0" : "1rem", fontSize: form.date ? ".56rem" : ".68rem", color: form.date ? "var(--gold)" : "rgba(245,241,233,.3)" }}>Date</label>
                </div>
                <div>
                  <label className="form-select-label">Time</label>
                  <select className="form-select" value={form.time} onChange={set("time")} required>
                    <option value="">— Select —</option>
                    {["7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"].map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="form-select-label">Guests</label>
                  <select className="form-select" value={form.guests} onChange={set("guests")} required>
                    <option value="">— Select —</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>)}
                  </select>
                </div>
              </div>
              <button type="submit" className="btn-reserve"><span>Reserve Now</span></button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
