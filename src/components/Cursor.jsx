import { useState, useEffect } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div className="cursor-dot"  style={{ left: pos.x, top: pos.y }} />
      <div className="cursor-ring" style={{ left: pos.x, top: pos.y }} />
    </>
  );
}
