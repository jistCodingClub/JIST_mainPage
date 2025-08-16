"use client"; // important for hooks

import { useEffect } from "react";
import Lenis from "lenis"

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(2, -10 * t),
      smoothWheel: true,
      touchMultiplier: 2,
      orientation: "vertical",
      gestureOrientation: "vertical",
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}
