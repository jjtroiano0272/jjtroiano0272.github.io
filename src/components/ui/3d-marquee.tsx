import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import {
  FiBox,
  FiCode,
  FiGlobe,
  FiSmartphone,
  FiActivity,
  FiDatabase,
  FiTrendingUp,
  FiPieChart,
  FiTerminal,
} from "react-icons/fi";
import { CarouselItem } from "./carousel-other";
import {
  SiBlender,
  SiCplusplus,
  SiPhp,
  SiOpenjdk,
  SiJavascript,
  SiTypescript,
  SiR,
  SiPython,
  SiCss,
  SiHtml5,
  SiBootstrap,
  SiNodedotjs,
  SiThreedotjs,
  SiReact,
  SiMui,
  SiExpo,
  SiXcode,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiMongodb,
  SiUnity,
  SiGnubash,
  SiLinux,
  SiUbuntu,
  SiApple,
} from "react-icons/si";
import {
  TbPaint,
  TbBrandCSharp,
  TbApi,
  TbResize,
  TbTable,
  TbDatabaseSearch,
  TbBrandWindows,
} from "react-icons/tb";
import { GiGamepad } from "react-icons/gi";

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
];

const skills = [
  {
    id: 1,
    category: "3D",
    icon: <FiBox className="h-4 w-4 text-white" />,
    subItems: [
      {
        label: "Blender",
        icon: <SiBlender className="h-4 w-4 text-[#E87D0D]" />,
      },
      // No official Substance Painter mark in any checked icon set — generic stand-in.
      {
        label: "Substance Painter",
        icon: <TbPaint className="h-4 w-4 text-[#71717A]" />,
      },
    ],
  },
  {
    id: 2,
    category: "Programming Languages",
    icon: <FiCode className="h-4 w-4 text-white" />,
    subItems: [
      {
        label: "C#",
        icon: <TbBrandCSharp className="h-4 w-4 text-[#239120]" />,
      },
      {
        label: "C++",
        icon: <SiCplusplus className="h-4 w-4 text-[#00599C]" />,
      },
      { label: "PHP", icon: <SiPhp className="h-4 w-4 text-[#777BB4]" /> },
      // Simple Icons has no separate "Java" mark — OpenJDK's is the closest fit,
      // and its official color happens to be black.
      { label: "Java", icon: <SiOpenjdk className="h-4 w-4 text-[#000000]" /> },
      {
        label: "Javascript",
        icon: <SiJavascript className="h-4 w-4 text-[#F7DF1E]" />,
      },
      {
        label: "Typescript",
        icon: <SiTypescript className="h-4 w-4 text-[#3178C6]" />,
      },
      { label: "R", icon: <SiR className="h-4 w-4 text-[#276DC3]" /> },
      {
        label: "Python",
        icon: <SiPython className="h-4 w-4 text-[#3776AB]" />,
      },
    ],
  },
  {
    id: 3,
    category: "Web Development",
    icon: <FiGlobe className="h-4 w-4 text-white" />,
    subItems: [
      { label: "CSS", icon: <SiCss className="h-4 w-4 text-[#663399]" /> },
      { label: "HTML", icon: <SiHtml5 className="h-4 w-4 text-[#E34F26]" /> },
      // No dedicated "REST API" logo exists — generic stand-in.
      {
        label: "REST APIs",
        icon: <TbApi className="h-4 w-4 text-[#71717A]" />,
      },
      {
        label: "Bootstrap",
        icon: <SiBootstrap className="h-4 w-4 text-[#7952B3]" />,
      },
      {
        label: "Node.js",
        icon: <SiNodedotjs className="h-4 w-4 text-[#5FA04E]" />,
      },
      // "Responsive WebDev" isn't a product/brand — generic stand-in.
      {
        label: "Responsive WebDev",
        icon: <TbResize className="h-4 w-4 text-[#71717A]" />,
      },
      // Three.js's official mark is black.
      {
        label: "Three.js",
        icon: <SiThreedotjs className="h-4 w-4 text-[#000000]" />,
      },
      { label: "React", icon: <SiReact className="h-4 w-4 text-[#61DAFB]" /> },
      {
        label: "Material UI Design",
        icon: <SiMui className="h-4 w-4 text-[#007FFF]" />,
      },
    ],
  },
  {
    id: 4,
    category: "Mobile Development",
    icon: <FiSmartphone className="h-4 w-4 text-white" />,
    subItems: [
      // Shares React's mark, same as your source data did.
      {
        label: "React Native",
        icon: <SiReact className="h-4 w-4 text-[#61DAFB]" />,
      },
      // No dedicated Reanimated logo — generic stand-in.
      {
        label: "React Native Reanimated",
        icon: <FiActivity className="h-4 w-4 text-[#71717A]" />,
      },
      { label: "Expo", icon: <SiExpo className="h-4 w-4 text-[#1C2024]" /> },
      { label: "Xcode", icon: <SiXcode className="h-4 w-4 text-[#147EFB]" /> },
    ],
  },
  {
    id: 5,
    category: "Databases",
    icon: <FiDatabase className="h-4 w-4 text-white" />,
    subItems: [
      { label: "MySQL", icon: <SiMysql className="h-4 w-4 text-[#4479A1]" /> },
      {
        label: "Postgres",
        icon: <SiPostgresql className="h-4 w-4 text-[#4169E1]" />,
      },
      {
        label: "Firebase",
        icon: <SiFirebase className="h-4 w-4 text-[#DD2C00]" />,
      },
      {
        label: "Supabase",
        icon: <SiSupabase className="h-4 w-4 text-[#3FCF8E]" />,
      },
      {
        label: "MongoDB",
        icon: <SiMongodb className="h-4 w-4 text-[#47A248]" />,
      },
      // Your source tagged this "dbms" even though it sat in the Programming
      // section — kept it grouped by its actual category field. No dedicated
      // Power Query logo — generic stand-in.
      {
        label: "M Power Query",
        icon: <TbTable className="h-4 w-4 text-[#71717A]" />,
      },
    ],
  },
  {
    id: 6,
    category: "Business Analytics",
    icon: <FiTrendingUp className="h-4 w-4 text-white" />,
    subItems: [
      // No Power BI logo in react-icons — using its well-known brand yellow
      // on a generic chart icon instead.
      {
        label: "Microsoft Power BI",
        icon: <FiPieChart className="h-4 w-4 text-[#F2C811]" />,
      },
      // No TOAD logo exists — generic stand-in.
      {
        label: "TOAD Data Point",
        icon: <TbDatabaseSearch className="h-4 w-4 text-[#71717A]" />,
      },
    ],
  },
  {
    id: 7,
    category: "Game Development",
    icon: <GiGamepad className="h-4 w-4 text-white" />,
    subItems: [
      // Unity's official mark is white — invisible on light backgrounds.
      { label: "Unity", icon: <SiUnity className="h-4 w-4 text-[#FFFFFF]" /> },
    ],
  },
  {
    id: 8,
    category: "OS & Shell",
    icon: <FiTerminal className="h-4 w-4 text-white" />,
    subItems: [
      { label: "Bash", icon: <SiGnubash className="h-4 w-4 text-[#4EAA25]" /> },
      { label: "Linux", icon: <SiLinux className="h-4 w-4 text-[#FCC624]" /> },
      {
        label: "Ubuntu",
        icon: <SiUbuntu className="h-4 w-4 text-[#E95420]" />,
      },
      {
        label: "Windows",
        icon: <TbBrandWindows className="h-4 w-4 text-[#0078D4]" />,
      },
      // Apple's official mark is black too.
      { label: "Mac", icon: <SiApple className="h-4 w-4 text-[#000000]" /> },
    ],
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(0, reviews.length / 2);
const fourthRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
  icon,
}: {
  img?: string;
  name?: string;
  username?: string;
  body?: string;
  icon: React.ReactNode;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border p-4 sm:w-36",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* <img className="rounded-full" width="32" height="32" alt="" src={img} /> */}
        <FiBox className="h-4 w-4" />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Marquee3D() {
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

        <div
          className="relative flex h-96 w-full flex-row 
                     items-center justify-center gap-4 overflow-hidden perspective-normal"
        >
          <div
            className="flex flex-row items-center gap-4"
            style={{
              transform:
                "translateX(-60px) translateY(0px) translateZ(-60px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
            }}
          >
            {Array.from(new Set(skills.map((s) => s.category))).map(
              (cat, idx) => (
                <Marquee
                  key={cat ?? idx}
                  pauseOnHover
                  vertical
                  className="[--duration:20s]"
                >
                  {skills
                    .filter((s) => s.category === cat)
                    .flatMap((skill) =>
                      skill.subItems.map((item) => ({ skill, item })),
                    )
                    .map(({ skill, item }, i) => (
                      <ReviewCard
                        key={`${skill.id}-${i}-${idx}`}
                        name={item.label}
                        username={skill.category}
                        body={undefined}
                        icon={item.icon as unknown as React.ReactNode}
                      />
                    ))}
                </Marquee>
              ),
            )}
          </div>

          {/* <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-linear-to-b"></div> */}
          {/* <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t"></div> */}
          {/* <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div> */}
          {/* <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div> */}
        </div>
      </div>
    </section>
  );
}
