import { useEffect, useRef } from "react";

/**
 * Runs a scroll callback at most once per animation frame.
 * Reduces layout thrashing from multiple updates per scroll tick.
 */
export function useScrollRaf(callback: () => void) {
  const cbRef = useRef(callback);
  cbRef.current = callback;

  useEffect(() => {
    let rafId = 0;
    const onScroll = () => {
      if (rafId !== 0) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        cbRef.current();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== 0) cancelAnimationFrame(rafId);
    };
  }, []);
}
