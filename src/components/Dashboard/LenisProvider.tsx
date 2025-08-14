"use client";

import { ReactNode } from "react";
import useLenis from "../../hooks/lenis";

export default function LenisProvider({ children }: { children: ReactNode }) {
  useLenis();
  return <>{children}</>;
}
