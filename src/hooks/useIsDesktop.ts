// src/hooks/useIsTouch.ts
import { useEffect, useState } from "react";

export default function useIsTouch() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsTouch(("ontouchstart" in window) || navigator.maxTouchPoints > 0);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isTouch;
}
