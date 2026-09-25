"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number; vx: number; vy: number };

export function SignalField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    const pointer = { x: -1000, y: -1000 };
    let points: Point[] = [];
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = coarse ? 22 : Math.min(54, Math.max(30, Math.round(width / 27)));
      points = Array.from({ length: count }, (_, index) => ({ x: (index * 157.3) % width, y: (index * 83.7) % height, vx: ((index % 5) - 2) * 0.055, vy: ((index % 7) - 3) * 0.035 }));
    };
    const draw = () => {
      context.clearRect(0, 0, width, height);
      for (let index = 0; index < points.length; index += 1) {
        const point = points[index];
        if (!reduced && !coarse) {
          const dx = pointer.x - point.x;
          const dy = pointer.y - point.y;
          const distance = Math.max(Math.hypot(dx, dy), 1);
          if (distance < 180) { point.x -= (dx / distance) * 0.14; point.y -= (dy / distance) * 0.14; }
          point.x = (point.x + point.vx + width) % width;
          point.y = (point.y + point.vy + height) % height;
        }
        const accent = getComputedStyle(document.documentElement).getPropertyValue("--mint").trim() || "#69e1c1";
        context.globalAlpha = 0.34;
        context.fillStyle = accent;
        context.fillRect(point.x, point.y, 1.25, 1.25);
        context.globalAlpha = 1;
        for (let otherIndex = index + 1; otherIndex < points.length; otherIndex += 1) {
          const other = points[otherIndex];
          const distance = Math.hypot(point.x - other.x, point.y - other.y);
          if (distance < 135) {
            const accent = getComputedStyle(document.documentElement).getPropertyValue("--mint").trim() || "#69e1c1";
            context.globalAlpha = 0.065 * (1 - distance / 135);
            context.strokeStyle = accent;
            context.beginPath(); context.moveTo(point.x, point.y); context.lineTo(other.x, other.y); context.stroke();
            context.globalAlpha = 1;
          }
        }
      }
      if (!reduced && visible) frame = window.requestAnimationFrame(draw);
    };
    const onPointer = (event: PointerEvent) => { const rect = canvas.getBoundingClientRect(); pointer.x = event.clientX - rect.left; pointer.y = event.clientY - rect.top; };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !reduced && !frame) frame = window.requestAnimationFrame(draw);
      if (!visible && frame) { window.cancelAnimationFrame(frame); frame = 0; }
    });
    resize(); draw(); observer.observe(canvas);
    window.addEventListener("resize", resize); window.addEventListener("pointermove", onPointer, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", onPointer); if (frame) window.cancelAnimationFrame(frame); };
  }, []);
  return <canvas ref={canvasRef} className="cin-signal-field" aria-hidden />;
}
