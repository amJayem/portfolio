"use client";

import { useState, useRef } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollRaf } from "@/lib/scroll-raf";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const visibleRef = useRef(false);

  useScrollRaf(() => {
    const next = window.scrollY > 400;
    if (next !== visibleRef.current) {
      visibleRef.current = next;
      setVisible(next);
    }
  });

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg",
        "hover:bg-primary/90 hover:scale-110 active:scale-95",
        "transition-all duration-300",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
