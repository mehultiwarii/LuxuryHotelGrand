import { useState, useEffect } from "react";

export default function Loading({ onDone }: { onDone: () => void }) {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => { setGone(true); setTimeout(onDone, 850); }, 2300);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <div className={`loading-screen${gone ? " gone" : ""}`}>
      <div className="loading-logo">AURUM</div>
      <div className="loading-sub">Fine Dining · New Delhi</div>
      <div className="loading-track"><div className="loading-fill" /></div>
      <div className="loading-hint">Preparing your experience</div>
    </div>
  );
}
