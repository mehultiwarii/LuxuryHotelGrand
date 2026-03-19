import { experiences } from "../constants/data";

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container" style={{ marginBottom: "3rem" }}>
        <div className="section-label">The Aurum Way</div>
        <h2 className="section-title" style={{ color: "var(--offwhite)" }}>Beyond the <em style={{ color: "var(--gold-light)" }}>Plate</em></h2>
        <p className="section-body" style={{ color: "rgba(245,241,233,.4)", maxWidth: 480 }}>Every detail at AURUM is considered — from the weight of the silverware to the silence between courses.</p>
      </div>
      <div className="exp-slider">
        <div className="exp-slider-track">
          {[...experiences, ...experiences].map((e, idx) => (
            <div key={`${e.num}-${idx}`} className="exp-card">
              <div className="exp-bg" style={{ background: `url('${e.img}') center/cover no-repeat` }} />
              <div className="exp-overlay" />
              <div className="exp-card-content">
                <div className="exp-num">{e.num}</div>
                <div className="exp-title">{e.title}</div>
                <div className="exp-text">{e.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
