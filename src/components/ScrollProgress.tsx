"use client";

import { useRef } from "react";
import { useScrollRaf } from "@/lib/scroll-raf";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useScrollRaf(() => {
    const el = barRef.current;
    if (!el) return;
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const p = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    el.style.width = `${p}%`;
    el.setAttribute("aria-valuenow", String(Math.round(p)));
  });

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 z-60 h-0.5 bg-primary will-change-[width]"
      style={{ width: "0%" }}
      role="progressbar"
      aria-valuenow={0}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}
