"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [x, setX] = useState(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setX((prev) => prev + (e.clientX - prev) * 0.08);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-1/2 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none z-40"
      style={{
        transform: `translateX(${x - 160}px) translateY(-50%)`,
      }}
    />
  );
}