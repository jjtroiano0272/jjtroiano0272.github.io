import { useEffect, useMemo, useRef, useState } from "react";
import { motion, PanInfo, useMotionValue, useTransform } from "motion/react";
import React, { JSX } from "react";
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

export interface CarouselSubItem {
  label: string;
  icon: React.ReactNode;
}

export interface CarouselItem {
  // title: string;
  // description: string;
  // id: number;
  // icon: React.ReactNode;

  category: string;
  id: number;
  icon: React.ReactNode;
  subItems: CarouselSubItem[];
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

const DEFAULT_ITEMS: CarouselItem[] = [
  {
    id: 1,
    category: "3D",
    icon: <FiBox className="h-4 w-4" />,
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

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring" as const, stiffness: 300, damping: 30 };

interface CarouselItemProps {
  item: CarouselItem;
  index: number;
  itemWidth: number;
  round: boolean;
  trackItemOffset: number;
  x: any;
  transition: any;
}

function CarouselItem({
  item,
  index,
  itemWidth,
  round,
  trackItemOffset,
  x,
  transition,
}: CarouselItemProps) {
  const range = [
    -(index + 1) * trackItemOffset,
    -index * trackItemOffset,
    -(index - 1) * trackItemOffset,
  ];
  const outputRange = [90, 0, -90];
  const rotateY = useTransform(x, range, outputRange, { clamp: false });

  return (
    <motion.div
      key={`${item?.id ?? index}-${index}`}
      className={`relative shrink-0 flex flex-col ${
        round
          ? "items-center justify-center text-center bg-[#120F17] border-0"
          : "items-start justify-between bg-[#222] border border-[#222] rounded-xl"
      } overflow-hidden cursor-grab active:cursor-grabbing`}
      style={{
        width: itemWidth,
        height: round ? itemWidth : "100%",
        rotateY: rotateY,
        ...(round && { borderRadius: "50%" }),
      }}
      transition={transition}
    >
      <div
        className={`${round ? "p-0 m-0" : "mb-4 p-5 grid grid-cols-3 gap-4"}`}
      >
        {/* Icon for category */}
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#120F17]">
          {item.icon}
        </span>
      </div>
      <div className="p-5">
        <div className="mb-1 font-black text-lg text-white">
          {item.category}
        </div>
        {/* <p className="text-sm text-white">{item.description}</p> */}

        {/* Sub-items for this category */}
        <ul className="mt-2 flex flex-col gap-2">
          {item.subItems.map((sub) => (
            <li key={sub.label} className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2b2b2b]">
                {sub.icon}
              </span>
              <span className="text-sm text-white/85">{sub.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}: CarouselProps): JSX.Element {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;
  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState<number>(loop ? 1 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isJumping, setIsJumping] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return undefined;
    if (pauseOnHover && isHovered) return undefined;

    const timer = setInterval(() => {
      setPosition((prev) => Math.min(prev + 1, itemsForRender.length - 1));
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  useEffect(() => {
    const startingPosition = loop ? 1 : 0;
    setPosition(startingPosition);
    x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  useEffect(() => {
    if (!loop && position > itemsForRender.length - 1) {
      setPosition(Math.max(0, itemsForRender.length - 1));
    }
  }, [itemsForRender.length, loop, position]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }
    const lastCloneIndex = itemsForRender.length - 1;

    if (position === lastCloneIndex) {
      setIsJumping(true);
      const target = 1;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    if (position === 0) {
      setIsJumping(true);
      const target = items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    setIsAnimating(false);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ): void => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;

    setPosition((prev) => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
          right: 0,
        },
      };

  const activeIndex =
    items.length === 0
      ? 0
      : loop
        ? (position - 1 + items.length) % items.length
        : Math.min(position, items.length - 1);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4 ${
        round
          ? "rounded-full border border-white"
          : "rounded-3xl border border-[#222]"
      }`}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px` }),
      }}
    >
      <motion.div
        className="flex"
        drag={isAnimating ? false : "x"}
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(position * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
      >
        {itemsForRender.map((item, index) => (
          <CarouselItem
            key={`${item?.id ?? index}-${index}`}
            item={item}
            index={index}
            itemWidth={itemWidth}
            round={round}
            trackItemOffset={trackItemOffset}
            x={x}
            transition={effectiveTransition}
          />
        ))}
      </motion.div>
      <div
        className={`flex w-full justify-center ${round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : ""}`}
      >
        <div className="mt-4 flex w-37.5 justify-between px-8">
          {items.map((_, index) => (
            <motion.button
              type="button"
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeIndex === index}
              className={`h-2 w-2 rounded-full cursor-pointer border-0 p-0 appearance-none transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                activeIndex === index
                  ? round
                    ? "bg-white"
                    : "bg-[#333333]"
                  : round
                    ? "bg-[#555]"
                    : "bg-[rgba(51,51,51,0.4)]"
              }`}
              animate={{
                scale: activeIndex === index ? 1.2 : 1,
              }}
              onClick={() => setPosition(loop ? index + 1 : index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
