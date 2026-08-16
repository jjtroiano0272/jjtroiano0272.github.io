import { cn } from "@/lib/utils";
import { AutoCarousel } from "./auto-carousel";
import { Marquee } from "@/components/ui/marquee";

const certifications = [
  {
    name: "Amazon Web Services Certified Cloud Practitioner",
    description:
      "This credential helps organizations identify and  develop talent with critical knowledge related to implementing cloud intiatives. Earning AWS Certified Cloud Practitioner validates cloud fluency and foundational AWS knowledge.",
    icon: "/images/aws-cert.png",
  },
  {
    name: "Oracle Java SE 8 Programmer I (1Z0-808)",
    description:
      "Demonstrates: Java basics, working with data types, using operators and decision constructs, creating and using arrays, using loop constructs, working with methods, encapsulation & inheritance, handling exceptions and working with the Java APl.",
    icon: "/images/oracle-cert.png",
  },
];

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

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
        // light styles
        "border-gray-950/10 bg-gray-950/1 hover:bg-gray-950/5",
        // dark styles
        "dark:border-gray-50/10 dark:bg-gray-50/10 dark:hover:bg-gray-50/15",
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
          <figcaption className="text-md font-bold dark:text-white">
            {name}
          </figcaption>
          {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-justify">
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
        <AutoCarousel />
        {/* <SkillsMarqueeMagicUI /> */}

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
