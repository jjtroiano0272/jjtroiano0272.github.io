"use client";

import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Atom,
  Boxes,
  Braces,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Container,
  Database,
  FileCode,
  GitBranch,
  Globe,
  Hexagon,
  Layers,
  Palette,
  Pause,
  Play,
  Server,
  Settings,
  Shield,
  Terminal,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type SkillSubItem = {
  label: string;
  icon: React.ReactNode;
};

export type SkillCategory = {
  id: number;
  category: string;
  icon: React.ReactNode;
  subItems: SkillSubItem[];
};

const AUTOPLAY_MS = 3500;

const DEFAULT_SKILLS: SkillCategory[] = [
  {
    id: 1,
    category: "Frontend",
    icon: <Palette />,
    subItems: [
      { label: "React", icon: <Atom /> },
      { label: "Next.js", icon: <Hexagon /> },
      { label: "TypeScript", icon: <Braces /> },
      { label: "Tailwind", icon: <Wind /> },
      { label: "HTML", icon: <FileCode /> },
      { label: "CSS", icon: <Palette /> },
      { label: "Vite", icon: <Zap /> },
      { label: "Redux", icon: <Layers /> },
    ],
  },
  {
    id: 2,
    category: "Backend",
    icon: <Server />,
    subItems: [
      { label: "Node.js", icon: <Hexagon /> },
      { label: "Postgres", icon: <Database /> },
      { label: "GraphQL", icon: <Globe /> },
      { label: "REST", icon: <Globe /> },
      { label: "Redis", icon: <Database /> },
      { label: "Prisma", icon: <Layers /> },
      { label: "Express", icon: <Server /> },
      { label: "tRPC", icon: <Braces /> },
      { label: "Auth", icon: <Shield /> },
      { label: "Queues", icon: <Layers /> },
      { label: "Cron", icon: <Settings /> },
      { label: "Webhooks", icon: <Zap /> },
    ],
  },
  {
    id: 3,
    category: "DevOps",
    icon: <Cloud />,
    subItems: [
      { label: "Docker", icon: <Container /> },
      { label: "K8s", icon: <Boxes /> },
      { label: "CI/CD", icon: <GitBranch /> },
      { label: "AWS", icon: <Cloud /> },
      { label: "Vercel", icon: <Zap /> },
      { label: "Terraform", icon: <Wrench /> },
      { label: "Bash", icon: <Terminal /> },
      { label: "Nginx", icon: <Server /> },
      { label: "Grafana", icon: <Settings /> },
      { label: "Git", icon: <GitBranch /> },
      { label: "Linux", icon: <Terminal /> },
      { label: "Monitoring", icon: <Zap /> },
      { label: "Secrets", icon: <Shield /> },
      { label: "Edge", icon: <Globe /> },
      { label: "Scripts", icon: <Code2 /> },
    ],
  },
];

export function AutoCarousel({
  skills = DEFAULT_SKILLS,
  autoplayMs = AUTOPLAY_MS,
}: {
  skills?: SkillCategory[];
  autoplayMs?: number;
}) {
  const total = skills.length;
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (total === 0) return;
      setActive((index + total) % total);
    },
    [total],
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Autoplay loop.
  useEffect(() => {
    if (!playing || paused || total <= 1) return;
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, autoplayMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [playing, paused, total, autoplayMs]);

  // Keep the active index valid if the data length changes.
  useEffect(() => {
    setActive((prev) => (total === 0 ? 0 : Math.min(prev, total - 1)));
  }, [total]);

  if (total === 0) {
    return (
      <div className="flex w-full items-center justify-center rounded-xl border border-border bg-card p-10 text-sm text-muted-foreground">
        No skills to display.
      </div>
    );
  }

  return (
    <div
      aria-label="Skill categories"
      aria-roledescription="carousel"
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        className="relative w-full overflow-hidden rounded-xl border border-border bg-card 
                 hover:border-white/30 transition-all duration-300"
      >
        {/* Track */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
          aria-live={playing && !paused ? "off" : "polite"}
        >
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${skill.category} (${index + 1} of ${total})`}
              aria-hidden={index !== active}
              className="w-full shrink-0 grow-0 basis-full p-4 sm:p-6"
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>

        {/* Prev / Next */}
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-foreground shadow-sm backdrop-blur transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-foreground shadow-sm backdrop-blur transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ChevronRight className="size-5" />
            </button>
          </>
        )}
      </div>

      {/* Controls: play/pause + dots */}
      {total > 1 && (
        <div className="mt-4 mb-24 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause autoplay" : "Start autoplay"}
            className="inline-flex items-center gap-1.5 rounded-full border 
                     border-border bg-card px-3 py-1.5 
                     text-sm font-medium text-foreground transition 
                     hover:bg-accent hover:text-accent-foreground 
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                     cursor-pointer"
          >
            {playing ? (
              <Pause className="size-4" />
            ) : (
              <Play className="size-4" />
            )}
            {/* {playing ? "Pause" : "Play"} */}
          </button>

          {/* Dots for slides */}
          <div
            className="flex items-center gap-2"
            role="tablist"
            aria-label="Choose slide"
          >
            {skills.map((skill, i) => (
              <button
                key={skill.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Go to ${skill.category}`}
                onClick={() => goTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer",
                  i === active
                    ? "w-6 bg-primary"
                    : "w-2 bg-white/50 hover:bg-white/70",
                )}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function SkillCard({ skill }: { skill: SkillCategory }) {
  const count = skill.subItems.length;

  return (
    <div>
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <h3 className="flex items-center gap-2 text-pretty text-lg font-semibold text-card-foreground">
          {/* Category Icon */}
          <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary [&>svg]:size-4">
            {skill.icon}
          </span>
          {skill.category}
        </h3>
        <span className="text-sm text-muted-foreground">
          {count} {count === 1 ? "item" : "items"}
        </span>
      </div>

      <ul
        className={cn(
          "grid gap-3",
          // Full-width responsive grid that adapts to any 8–27 item count.
          "grid-cols-4 sm:grid-cols-6 lg:grid-cols-9",
        )}
      >
        {skill.subItems.map((item, i) => (
          <li key={`${item.label}-${i}`}>
            <div
              className="flex aspect-square flex-col items-center justify-center 
                            gap-1.5 rounded-lg border 
                            border-border bg-muted/60 p-2 text-center text-muted-foreground 
                            transition hover:border-primary/50 hover:bg-accent hover:text-accent-foreground
                            cursor-pointer"
            >
              {/* Icon of Skill */}
              <span className="[&>svg]:size-8">{item.icon}</span>
              <span className="line-clamp-1 w-full text-[11px] font-medium leading-tight">
                {item.label}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
