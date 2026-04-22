"use client";

import { useEffect, useRef, useCallback } from "react";

export default function WavyGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.width / dpr;
    const height = canvas.height / dpr;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const spacing = 40;
    const cols = Math.ceil(width / spacing) + 2;
    const rows = Math.ceil(height / spacing) + 2;
    const mouse = mouseRef.current;
    const influenceRadius = 180;
    const maxDisplacement = 18;
    const time = Date.now() * 0.001;

    // Precompute grid positions with displacement
    const points: { x: number; y: number }[][] = [];

    for (let row = 0; row < rows; row++) {
      points[row] = [];
      for (let col = 0; col < cols; col++) {
        const baseX = col * spacing;
        const baseY = row * spacing;

        // Distance from mouse
        const dx = baseX - mouse.x;
        const dy = baseY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let displaceX = 0;
        let displaceY = 0;

        if (dist < influenceRadius && dist > 0) {
          const factor = 1 - dist / influenceRadius;
          const wave = Math.sin(dist * 0.04 - time * 3) * factor;
          displaceX = (dx / dist) * wave * maxDisplacement;
          displaceY = (dy / dist) * wave * maxDisplacement;
        }

        // Subtle ambient wave
        const ambientX = Math.sin(time * 0.5 + row * 0.3 + col * 0.2) * 1.5;
        const ambientY = Math.cos(time * 0.4 + col * 0.3 + row * 0.2) * 1.5;

        points[row][col] = {
          x: baseX + displaceX + ambientX,
          y: baseY + displaceY + ambientY,
        };
      }
    }

    // Draw connecting lines
    ctx.lineWidth = 0.5;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const p = points[row][col];

        // Calculate opacity based on distance from mouse
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const proximityFactor = dist < influenceRadius * 1.5
          ? 0.12 + 0.15 * (1 - dist / (influenceRadius * 1.5))
          : 0.06;

        ctx.strokeStyle = `rgba(100, 100, 100, ${proximityFactor})`;

        // Horizontal line
        if (col < cols - 1) {
          const pRight = points[row][col + 1];
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(pRight.x, pRight.y);
          ctx.stroke();
        }

        // Vertical line
        if (row < rows - 1) {
          const pDown = points[row + 1][col];
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(pDown.x, pDown.y);
          ctx.stroke();
        }
      }
    }

    // Draw dots at intersections
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const p = points[row][col];
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const dotRadius = dist < influenceRadius
          ? 1.5 + 1.5 * (1 - dist / influenceRadius)
          : 1;

        const dotOpacity = dist < influenceRadius
          ? 0.3 + 0.5 * (1 - dist / influenceRadius)
          : 0.15;

        ctx.beginPath();
        ctx.arc(p.x, p.y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(130, 130, 130, ${dotOpacity})`;
        ctx.fill();
      }
    }

    animationRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}
