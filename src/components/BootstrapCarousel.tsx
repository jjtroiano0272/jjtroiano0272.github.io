"use client";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

type Category =
  | "3d"
  | "programming-languages"
  | "web-dev"
  | "mobile-dev"
  | "dbms"
  | "business-analytics"
  | "game-dev"
  | "os";

type Skill = {
  name: string;
  icon: string;
  category: Category;
};

const data: Skill[] = [
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

const groupedData = data.reduce<Record<string, Skill[]>>((groups, item) => {
  if (!groups[item.category]) {
    groups[item.category] = [];
  }

  groups[item.category].push(item);

  return groups;
}, {});

function getItemScale(itemCount: number) {
  const rows = Math.ceil(itemCount / 4);
  return Math.max(0.72, 1 - Math.max(0, rows - 2) * 0.1);
}

export default function BootstrapCarousel() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <section id="experience" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className=" mb-3 text-xs font-medium text-accent tracking-widest reveal uppercase">
            Training &
          </p>

          <h2 className="font-display font-bold text-4xl text-zinc-900 reveal d1 dark:text-white md:text-5xl">
            Skills
          </h2>
        </div>

        {/* carousel */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image
                className="d-block w-100"
                src="https://picsum.photos/id/120/200/300"
                alt="First slide"
                fill
              />
            </div>
            <div className="carousel-item">
              <Image
                className="d-block w-100"
                src="https://picsum.photos/id/121/200/300"
                alt="Second slide"
                fill
              />
            </div>
            <div className="carousel-item">
              <Image
                className="d-block w-100"
                src="https://picsum.photos/id/122/200/300"
                alt="Third slide"
                fill
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
}
