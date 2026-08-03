"use client";
// LazyMotion loads only the animation features actually used (~6KB instead of 34KB).
// domAnimation includes: animations, layout, gestures, drag, whileInView — everything we use.
import { LazyMotion, domAnimation } from "framer-motion";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  );
}
