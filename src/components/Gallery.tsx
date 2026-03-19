import { useState } from "react";
import { BG } from "../constants/data";

export default function Gallery() {
  const [lb, setLb] = useState<number | null>(null);
  const items = [
    { cls: "tall", idx: 0 }, { cls: "", idx: 1 }, { cls: "", idx: 2 },
    { cls: "wide", idx: 3 }, { cls: "", idx: 4 },
    { cls: "", idx: 5 }, { cls: "", idx: 6 }, { cls: "", idx: 7 },
  ];
  return (
    <section className="section gallery-section" id="gallery">
      <div className="container" style={{ marginBottom: "4rem" }}>
        <div style={{ textAlign: "center" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Visual Memoir</div>
          <h2 className="section-title" style={{ textAlign: "center" }}>Inside <em>AURUM</em></h2>
        </div>
      </div>
      <div style={{ padding: "0 4px" }}>
        <div className="gallery-grid">
          {items.map((item, i) => (
            <div key={i} className={`gallery-item${item.cls ? " " + item.cls : ""}`} onClick={() => setLb(item.idx)}>
              <div className="gallery-img" style={{ background: BG[item.idx % BG.length] }}>
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 56, height: 56, borderRadius: "50%", border: "1px solid rgba(201,168,76,.14)" }} />
              </div>
              <div className="gallery-overlay"><div className="gallery-plus">+</div></div>
            </div>
          ))}
        </div>
      </div>
      <div className={`lightbox${lb !== null ? " open" : ""}`} onClick={() => setLb(null)}>
        <button className="lb-close">✕</button>
        <div className="lb-img" style={{ background: lb !== null ? BG[lb % BG.length] : undefined }} />
      </div>
    </section>
  );
}
