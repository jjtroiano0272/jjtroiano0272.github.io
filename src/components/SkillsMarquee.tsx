"use client";
import React from "react";
import DepthCarousel from "./DepthCarousel";
import Carousel, { CarouselItem } from "./ui/carousel";
import { Marquee } from "./ui/nyxMarquee";
import {
  FiCircle,
  FiFileText,
  FiLayers,
  FiLayout,
  FiBox,
  FiCode,
  FiGlobe,
  FiSmartphone,
  FiDatabase,
  FiTrendingUp,
  FiTerminal,
  FiActivity,
  FiPieChart,
} from "react-icons/fi";
import { IoLogoJavascript } from "react-icons/io5";
import { GiGamepad } from "react-icons/gi";
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
  SiGnubash,
  SiLinux,
  SiUbuntu,
  SiApple,
  SiUnity,
} from "react-icons/si";
import {
  TbBrandCSharp,
  TbBrandWindows,
  TbPaint,
  TbApi,
  TbResize,
  TbTable,
  TbDatabaseSearch,
} from "react-icons/tb";

const DEFAULT_ITEMS: CarouselItem[] = [
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

export const SkillsMarqueeNyx = () => {
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

        {/* <div style={{ height: "600px", position: "relative" }}> */}
        {/* <div className="flex flex-col max-w-4xl mx-auto w-full overflow-hidden"> */}
        {/* <h1 className="text-2xl font-bold mb-10 text-center">Marquee</h1> */}

        <div className="overflow-hidden flex items-center lg:max-w-full mx-auto">
          <div className="flex flex-col max-w-4xl mx-auto w-full">
            {DEFAULT_ITEMS.map((item) => (
              <div key={item.id} className="mb-10">
                {/* Category heading */}
                <div className="flex items-center gap-2 mb-4">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {item.category}
                  </h3>
                </div>

                {/* Category marquee */}
                <div className="overflow-hidden">
                  <Marquee
                    speed={50}
                    direction="horizontal"
                    fadeEdges={true}
                    pauseOnTap={true}
                    speedOnHover={15}
                    className="h-32"
                  >
                    {item.subItems.map((subItem) => (
                      <div
                        key={subItem.label}
                        className="flex flex-col items-center justify-center gap-2 p-6 rounded-lg h-24 w-32"
                      >
                        {subItem.icon}

                        <p className="text-sm text-center text-zinc-700 dark:text-zinc-300">
                          {subItem.label}
                        </p>
                      </div>
                    ))}
                  </Marquee>
                </div>
              </div>
            ))}
          </div>
          ```
        </div>

        <p className="text-center mt-4 text-sm text-gray-500">
          Click or drag the marquee to interact with it
        </p>
        {/* </div> */}

        {/* </div> */}
      </div>
    </section>
  );
};
