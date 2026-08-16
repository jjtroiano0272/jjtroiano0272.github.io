"use client";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import Carousel from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";
import { transform } from "next/dist/build/swc";
import { Zalando_Sans_SemiExpanded } from "next/font/google";

const data = [
  // TODO Uncategorized
  {
    name: "Blender",
    icon: "devicon-blender-original colored",
    category: "3d",
  },
  {
    name: "Substance Painter",
    icon: "devicon-powershell-plain colored",
    category: "3d",
  },

  // Programming Languages
  {
    name: "C#",
    icon: "devicon-csharp-plain colored",
    category: "programming-languages",
  },
  {
    name: "C++",
    icon: "devicon-cplusplus-plain colored",
    category: "programming-languages",
  },
  {
    name: "PHP",
    icon: "devicon-php-plain colored",
    category: "programming-languages",
  },
  {
    name: "Java",
    icon: "devicon-java-plain colored",
    category: "programming-languages",
  },
  {
    name: "M Power Query",
    icon: "devicon-powershell-plain colored",
    category: "dbms",
  },
  {
    name: "Javascript",
    icon: "devicon-javascript-plain colored",
    category: "programming-languages",
  },
  {
    name: "Typescript",
    icon: "devicon-typescript-plain colored",
    category: "programming-languages",
  },
  {
    name: "R",
    icon: "devicon-r-plain colored",
    category: "programming-languages",
  },
  {
    name: "Python",
    icon: "devicon-python-plain colored",
    category: "programming-languages",
  },

  // Web Design
  { name: "CSS", icon: "devicon-css3-plain colored", category: "web-dev" },
  {
    name: "HTML",
    icon: "devicon-html5-plain-wordmark colored",
    category: "web-dev",
  },
  {
    name: "REST APIs",
    icon: "devicon-powershell-plain colored",
    category: "web-dev",
  },
  {
    name: "Bootstrap",
    icon: "devicon-bootstrap-plain colored",
    category: "web-dev",
  },
  {
    name: "Node.js",
    icon: "devicon-nodejs-plain colored",
    category: "web-dev",
  },
  {
    name: "Responsive WebDev",
    icon: "devicon-powershell-plain colored",
    category: "web-dev",
  },
  {
    name: "Three.js",
    icon: "devicon-threejs-original colored",
    category: "web-dev",
  },
  {
    name: "React",
    icon: "devicon-react-original colored",
    category: "web-dev",
  },
  {
    name: "Material UI Design",
    icon: "devicon-materialui-plain colored",
    category: "web-dev",
  },

  // Mobile Dev
  {
    name: "React Native",
    icon: "devicon-react-original colored",
    category: "mobile-dev",
  },
  {
    name: "React Native Reanimated",
    icon: "devicon-powershell-plain colored",
    category: "mobile-dev",
  },
  {
    name: "Expo",
    icon: "devicon-powershell-plain colored",
    category: "mobile-dev",
  },
  {
    name: "Xcode",
    icon: "devicon-xcode-plain colored",
    category: "mobile-dev",
  },

  // DBMS
  { name: "MySQL", icon: "devicon-mysql-original colored", category: "dbms" },
  {
    name: "Postgres",
    icon: "devicon-postgresql-plain colored",
    category: "dbms",
  },
  {
    name: "Firebase",
    icon: "devicon-firebase-plain colored",
    category: "dbms",
  },
  {
    name: "Supabase",
    icon: "devicon-supabase-plain colored",
    category: "dbms",
  },
  {
    name: "MongoDB",
    icon: "devicon-mongodb-plain colored",
    category: "dbms",
  },

  // Business Analytics
  {
    name: "Microsoft Power BI",
    icon: "devicon-powershell-plain colored",
    category: "business-analytics",
  },
  {
    name: "TOAD Data Point",
    icon: "devicon-powershell-plain colored",
    category: "business-analytics",
  },

  // Game Dev
  { name: "Unity", icon: "devicon-unity-plain colored", category: "game-dev" },

  // OS & Shell
  { name: "Bash", icon: "devicon-bash-plain colored", category: "os" },
  { name: "Linux", icon: "devicon-linux-plain colored", category: "os" },
  { name: "Ubuntu", icon: "devicon-ubuntu-plain colored", category: "os" },
  {
    name: "Windows",
    icon: "devicon-windows11-original colored",
    category: "os",
  },
  { name: "Mac", icon: "devicon-apple-original colored", category: "os" },
];

const imgData = [
  {
    cover: "https://picsum.photos/id/27/300/300",
    title: "foo",
    artist: "Picasso",
    year: "1952",
  },
  {
    cover: "https://picsum.photos/id/28/300/300",
    title: "bar",
    artist: "Anjain",
    year: "2092",
  },
  {
    cover: "https://picsum.photos/id/29/300/300",
    title: "baz",
    artist: "Pietro",
    year: "1997",
  },
];

const CATEGORY_ORDER = [
  "programming-languages",
  "web-dev",
  "mobile-dev",
  "dbms",
  "game-dev",
  "3d",
  "business-analytics",
  "os",
];

export default function Skills() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const getTransform = (index: number) => {
    const diff = index - currentIndex;
    const absIndex = Math.abs(diff);

    if (diff === 0) {
      return {
        transform: "translateY(0px rotateY(0deg) scale(1)",
        zIndex: 10,
        opacity: 1,
      };
    } else if (diff > 0) {
      return {
        transform: `translateX(${120 + (absIndex - 1) * 80}px) rotateY(-45deg) scale(${0.8 - (absIndex - 1) * 0.1})`,
        zIndex: 10 - absIndex,
        opacity: Math.max(0.3, 1 - (absIndex - 1) * 0.3),
      };
    } else {
      return {
        transform: `translateX(-${120 + (absIndex - 1) * 80}px) rotateY(45deg) scale(${0.8 - (absIndex - 1) * 0.1})`,
        zIndex: 10 - absIndex,
        opacity: Math.max(0.3, 1 - (absIndex - 1) * 0.3),
      };
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="relative mb-8" style={{ perspective: "1200px" }}>
        <div className="flex items-center justify-center h-80 w-full">
          {imgData?.map((value, i) => {
            const style = getTransform(i);
            return (
              <div
                key={i}
                className="absolute cursor-pointer transition-all duration-500 ease-out"
                style={style}
                onClick={() => setCurrentIndex(i)}
              >
                <div className="relative group">
                  {/* TODO: Skill names will go here and w-60 will change to much larger */}
                  <div className="w-100 h-100 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                    <Image
                      src={value.cover}
                      width={300}
                      height={300}
                      alt={value.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {i === currentIndex && (
                    <div className="absolute inset-0 rounded-2xl border-4 border-white/60 pointer-events-none"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
