"use client";
import React from "react";
import DepthCarousel from "./DepthCarousel";
import Carousel from "./ui/carousel";

export const SkillsB = () => {
  const items = [
    { image: "https://picsum.photos/seed/a/800/1000", alt: "One" },
    { image: "https://picsum.photos/seed/b/800/1000", alt: "Two" },
    { image: "https://picsum.photos/seed/c/800/1000", alt: "Three" },
    { image: "https://picsum.photos/seed/d/800/1000", alt: "Four" },
    { image: "https://picsum.photos/seed/e/800/1000", alt: "Five" },
  ];

  return (
    <section id="skills" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-10">
        <div className="mb-14">
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
            My
          </p>
          <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
            Skills
          </h2>
        </div>

        {/* <div style={{ height: "500px", position: "relative" }}>
          <DepthCarousel
            items={items}
            depth={220}
            spread={160}
            tilt={30}
            tiltDirection="right"
            perspective={1250}
            visibleCards={4}
            falloff={0.2}
            blur={6}
            autoplay
            loop
            cardWidth={420}
            cardHeight={300}
            radius={18}
            tint="#05060a"
            duration={700}
            ease="power3.out"
            autoplayDelay={3200}
            showControls
            showIndicators
          />
        </div> */}
        {/* <div style={{ height: "600px", position: "relative" }}> */}
        <Carousel
          baseWidth={800}
          autoplay
          autoplayDelay={3000}
          pauseOnHover
          loop
          round={false}
        />
        {/* </div> */}
      </div>
    </section>
  );
};
