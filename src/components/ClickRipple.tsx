"use client";

import { useEffect, useState, useCallback } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  angle: number;
  distance: number;
}

let counter = 0;

export default function ClickRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);

  const handleClick = useCallback((e: MouseEvent) => {
    const id = ++counter;
    const x = e.clientX;
    const y = e.clientY;

    // Add ripple ring
    setRipples((prev) => [...prev, { id, x, y }]);

    // Add 6 burst particles in different directions
    const newParticles: Particle[] = Array.from({ length: 6 }, (_, i) => ({
      id: id * 100 + i,
      x,
      y,
      angle: (360 / 6) * i,
      distance: 32 + Math.random() * 20,
    }));
    setParticles((prev) => [...prev, ...newParticles]);

    // Clean up after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
      setParticles((prev) => prev.filter((p) => Math.floor(p.id / 100) !== id));
    }, 700);
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [handleClick]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Ripple rings */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/60"
          style={{
            left: r.x,
            top: r.y,
            width: 8,
            height: 8,
            animation: "ripple-expand 0.6s ease-out forwards",
          }}
        />
      ))}

      {/* Burst particles */}
      {particles.map((p) => {
        const rad = (p.angle * Math.PI) / 180;
        const tx = Math.cos(rad) * p.distance;
        const ty = Math.sin(rad) * p.distance;
        return (
          <span
            key={p.id}
            className="absolute w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/70"
            style={{
              left: p.x,
              top: p.y,
              animation: `particle-burst 0.6s ease-out forwards`,
              // @ts-expect-error CSS custom property
              "--tx": `${tx}px`,
              "--ty": `${ty}px`,
            }}
          />
        );
      })}

      <style>{`
        @keyframes ripple-expand {
          0%   { width: 8px; height: 8px; opacity: 0.8; }
          100% { width: 80px; height: 80px; opacity: 0; }
        }
        @keyframes particle-burst {
          0%   { transform: translate(-50%, -50%) translate(0, 0); opacity: 1; }
          100% { transform: translate(-50%, -50%) translate(var(--tx), var(--ty)); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
