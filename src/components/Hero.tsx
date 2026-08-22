"use client";

import { ChevronDown, Download, Mail } from "lucide-react";
import * as FaIcons from "react-icons/fa";
import { socialLinks } from "@/lib/data";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { PixelImage } from "@/components/ui/pixel-image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-0 sm:pt-16 overflow-hidden"
    >
      <div
        className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-1/4 left-0 w-64 h-64 bg-zinc-200/50 dark:bg-zinc-800/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="reveal text-sm font-medium text-accent tracking-widest uppercase mb-4">
              Available for work
            </p>
            <h1 className="reveal d1 font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-zinc-900 dark:text-white mb-6">
              Hi, I'm <span className="text-accent">Jonathan</span>
            </h1>
            {/* v1 */}
            {/* <p className="reveal d2 text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-md mb-10">
              Freelance
              <strong className="font-medium text-zinc-700 dark:text-zinc-300">
                UI/UX Designer &amp; Frontend Developer
              </strong>
              . I design and build digital products that people love to use —
              fast, clean, and accessible.
            </p> */}
            {/* v2 */}
            <TypingAnimation
              words={[
                "Designer",
                "Software Engineer",
                "Developer",
                "Technical Artist",
                "Team Player",
              ]}
              loop
              pauseDelay={2000}
              className="reveal d2 text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-md mb-10"
            />

            <div className="reveal d3 flex flex-wrap gap-4">
              {/* TODO: Add download link */}
              <a
                href="/files/resume-14jun25.pdf"
                download
                className="shimmer inline-flex items-center gap-2 
                           font-medium px-7 py-3.5 rounded-full 
                           text-sm tracking-wide
                           text-white 
                         bg-zinc-900 
                         dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200
                         hover:bg-zinc-700  transition-colors"
              >
                Résumé
                <Download className="w-3 h-3" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 
                           border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 
                           font-medium px-7 py-3.5 rounded-full hover:bg-zinc-50 
                           dark:hover:bg-zinc-900 text-sm
                           hover:shadow-lg hover:scale-x-102 transition-all duration-300"
              >
                Get in touch <ChevronDown className="w-3 h-3" />
              </a>
            </div>
            <div className="reveal d4 flex gap-8 mt-14 pt-8 border-t border-zinc-100 dark:border-zinc-900">
              {/* TODO: Calculate based on actual data */}
              <div>
                <p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">
                  34+
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Projects done
                </p>
              </div>
              <div>
                <p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">
                  21+
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Happy clients
                </p>
              </div>
              <div>
                <p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">
                  5y
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Experience
                </p>
              </div>
            </div>
          </div>

          {/* A */}
          {/* <div className="reveal d2 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Image
                src="/images/hero-profile-separated.png"
                alt="Jonathan — Software Developer"
                loading="eager"
                className="object-cover w-full h-full rounded-xl border border-accent bg-orange-300"
                fill
              />
            </div>
          </div> */}

          {/* B */}
          <div className="reveal d2 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* A */}
              {/* <Image
                src="/images/hero-profile-separated.png"
                alt="Jonathan — Software Developer"
                loading="eager"
                className="object-cover w-full h-full rounded-xl border border-accent bg-orange-300"
                fill
              /> */}

              {/* B: MagicUI */}
              <PixelImage
                src="/images/hero-profile-img.png"
                // colorRevealDelay={600}
                // maxAnimationDelay={800}
                grid="8x8"
                // className="object-cover rounded-xl"
                // loading="eager"
                // fill
              />

              {/* <PixelReveal gridSize={24} pixelColor="#ffffff">
                <img
                  src="/images/hero-profile-separated.png"
                  alt="…"
                  className="h-full w-full object-cover"
                />
                <Image
                  src="/images/hero-profile-separated.png"
                  alt="Jonathan — Software Developer"
                  loading="eager"
                  className="object-cover w-full h-full rounded-xl border border-accent bg-orange-300"
                  fill
                />
              </PixelReveal> */}

              <div
                className="absolute left-1/2 bottom-0 z-10 -translate-x-1/2 translate-y-1/2 
                            flex items-center gap-3 px-3 py-2
                            rounded-full shadow-xl ring-1
                            bg-white/95 ring-zinc-200 
                            dark:bg-zinc-950/95 dark:ring-zinc-800 
                            hover:scale-102 transition duration-300"
              >
                {socialLinks.map((link) => {
                  const Icon = FaIcons[link.icon as keyof typeof FaIcons];
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full border 
                              border-zinc-200 bg-white text-zinc-700 shadow-sm 
                              transition duration-200
                              hover:scale-105
                              hover:border-accent hover:bg-accent/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-accent/10"
                    >
                      {Icon ? <Icon className="h-6 w-6" /> : null}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
