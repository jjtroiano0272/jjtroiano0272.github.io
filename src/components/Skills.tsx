import { cn } from "@/lib/utils";
import { AutoCarousel } from "./ui/auto-carousel";
import { Marquee } from "./ui/marquee";
import { certifications } from "@/lib/data";

const MarqueeCard = ({
  icon,
  name,
  description,
}: {
  icon: string;
  name: string;
  description: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-lg cursor-pointer overflow-hidden rounded-xl border p-4",
        "hover:scale-102 transition-all duration-300",
        "hover:border-gray-950/70",
        // light styles
        "border-gray-950/10 bg-gray-950/1 hover:bg-gray-950/5",
        // dark styles
        "dark:border-gray-50/10 dark:bg-gray-50/10 dark:hover:bg-gray-50/15",
        "aspect-3/2 shrink-0",
        "md:aspect-auto",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={icon}
        />
        <div className="flex flex-col">
          <figcaption className="text-md font-bold dark:text-white text-2xl md:text-lg">
            {name}
          </figcaption>
          {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
        </div>
      </div>
      <blockquote className="mt-2 text-2xl md:text-sm text-left">
        {description}
      </blockquote>
    </figure>
  );
};

function SkillsCarousel() {
  return (
    <section id="skills" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-10">
        <div className="mb-14">
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
            My
          </p>
          <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
            Skills <span className="text-accent">&</span> Certifications
          </h2>
        </div>

        {/* Skills */}
        {/* <SkillsMarqueeMagicUI /> */}
        <AutoCarousel />

        {/* Marquee of Certifications */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {certifications.map((c) => (
              <MarqueeCard key={c.name} {...c} />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-zinc-50 dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-zinc-50 dark:from-background"></div>
        </div>
      </div>
    </section>
  );
}

export default SkillsCarousel;
