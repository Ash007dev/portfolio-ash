"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function CustomCursor() {
  const mainCursorRef = useRef<HTMLDivElement>(null);
  const trailCursorRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  const [variant, setVariant] = useState<"default" | "hover" | "view">("default");

  const mouseRef = useRef({ x: -100, y: -100 });
  const trailRef = useRef({ x: -100, y: -100 });
  const requestRef = useRef<number>(0);

  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      if (mainCursorRef.current) {
        mainCursorRef.current.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
      }

      // Check hover targets
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor="view"]')) {
        setVariant("view");
      } else if (target.closest('[data-cursor="hover"]') || target.closest("a") || target.closest("button")) {
        setVariant("hover");
      } else {
        setVariant("default");
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    const updateTrail = () => {
      const { x: targetX, y: targetY } = mouseRef.current;
      trailRef.current.x += (targetX - trailRef.current.x) * 0.15;
      trailRef.current.y += (targetY - trailRef.current.y) * 0.15;

      if (trailCursorRef.current) {
        trailCursorRef.current.style.transform = `translate3d(${trailRef.current.x - 5}px, ${trailRef.current.y - 5}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(updateTrail);
    };

    requestRef.current = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={trailCursorRef}
        className="fixed top-0 left-0 w-[10px] h-[10px] bg-nb-black z-[99998] pointer-events-none"
      />
      <motion.div
        ref={mainCursorRef}
        className="fixed top-0 left-0 w-[20px] h-[20px] border-[2px] border-nb-black z-[99999] pointer-events-none flex items-center justify-center overflow-hidden"
        animate={
          variant === "default"
            ? { scale: 1, backgroundColor: "#ffe629" }
            : { scale: 2.5, backgroundColor: "#0057ff" }
        }
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        {variant !== "default" && (
          <span className="font-mono text-[8px] text-white font-bold leading-none select-none">
            {variant === "view" ? "VIEW" : "GO"}
          </span>
        )}
      </motion.div>
    </>
  );
}
