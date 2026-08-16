"use client";

import React, {
  useRef,
  useEffect,
  useCallback,
  type CSSProperties,
} from "react";
import { gsap } from "gsap";

interface PixelRevealProps {
  /** The image or element to reveal. */
  children: React.ReactNode;
  /** Number of pixels per row/column. Higher = finer grid. */
  gridSize?: number;
  /** Color of the covering pixels. Accepts any CSS color. */
  pixelColor?: string;
  /** Total time (seconds) for the pixels to dissolve away. */
  duration?: number;
  /** How much of the element must be visible before it triggers (0-1). */
  threshold?: number;
  /** Replay the animation every time it re-enters the viewport. */
  repeat?: boolean;
  className?: string;
  style?: CSSProperties;
}

const PixelReveal: React.FC<PixelRevealProps> = ({
  children,
  gridSize = 10,
  pixelColor = "#0a0a0a",
  duration = 0.6,
  threshold = 0.35,
  repeat = false,
  className = "",
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pixelGridRef = useRef<HTMLDivElement | null>(null);
  const hasPlayedRef = useRef(false);

  // Build the pixel grid overlay once (or when the grid config changes).
  useEffect(() => {
    const gridEl = pixelGridRef.current;
    if (!gridEl) return;

    gridEl.innerHTML = "";
    const size = 100 / gridSize;

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement("div");
        pixel.className = "absolute";
        pixel.style.backgroundColor = pixelColor;
        pixel.style.width = `${size}%`;
        pixel.style.height = `${size}%`;
        pixel.style.left = `${col * size}%`;
        pixel.style.top = `${row * size}%`;
        gridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  const reveal = useCallback(() => {
    const gridEl = pixelGridRef.current;
    if (!gridEl) return;
    const pixels = gridEl.querySelectorAll<HTMLDivElement>("div");
    if (!pixels.length) return;

    gsap.killTweensOf(pixels);
    gsap.set(pixels, { display: "block" });

    const staggerEach = duration / pixels.length;
    gsap.to(pixels, {
      display: "none",
      duration: 0,
      stagger: { each: staggerEach, from: "random" },
    });
  }, [duration]);

  const cover = useCallback(() => {
    const gridEl = pixelGridRef.current;
    if (!gridEl) return;
    const pixels = gridEl.querySelectorAll<HTMLDivElement>("div");
    gsap.killTweensOf(pixels);
    gsap.set(pixels, { display: "block" });
  }, []);

  // Trigger on scroll into view.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!hasPlayedRef.current || repeat) {
              hasPlayedRef.current = true;
              reveal();
            }
          } else if (repeat) {
            hasPlayedRef.current = false;
            cover();
          }
        });
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reveal, cover, repeat, threshold]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      {children}
      <div
        ref={pixelGridRef}
        className="pointer-events-none absolute inset-0 z-10"
        aria-hidden="true"
      />
    </div>
  );
};

export default PixelReveal;
