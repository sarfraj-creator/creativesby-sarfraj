"use client";
import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only show on devices with a fine pointer (mouse), not touch
    if (window.matchMedia("(pointer: fine)").matches) {
      setMounted(true);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    let mx = 0, my = 0, rx = 0, ry = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx + "px";
        dotRef.current.style.top = my + "px";
      }
    };

    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }
      rafId = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      if (ringRef.current) ringRef.current.style.transform = "translate(-50%,-50%) scale(1.8)";
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };
    const onLeave = () => {
      if (ringRef.current) ringRef.current.style.transform = "translate(-50%,-50%) scale(1)";
      if (dotRef.current) dotRef.current.style.opacity = "1";
    };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a,button,[role='button']").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    rafId = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      <div ref={dotRef} style={{
        position: "fixed", zIndex: 99999, pointerEvents: "none",
        width: 6, height: 6, borderRadius: "50%",
        background: "var(--gold)",
        transform: "translate(-50%,-50%)",
        top: 0, left: 0,
        transition: "opacity 0.2s",
      }}/>
      <div ref={ringRef} style={{
        position: "fixed", zIndex: 99998, pointerEvents: "none",
        width: 32, height: 32, borderRadius: "50%",
        border: "1px solid rgba(201,168,76,0.5)",
        transform: "translate(-50%,-50%)",
        top: 0, left: 0,
        transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
      }}/>
    </>
  );
}
