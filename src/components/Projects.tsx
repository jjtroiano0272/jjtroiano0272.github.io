/** ===========================================================
 * == PREVIOUS ================================================
 * ============================================================
 */
// "use client";

// import { useMemo, useState } from "react";
// import Image from "next/image";
// import {
//   ChevronDown,
//   Folder,
//   ImageIcon,
//   Menu,
//   VideoIcon,
//   X,
// } from "lucide-react";
// import { FiExternalLink } from "react-icons/fi";
// import { FaGithub, FaVimeoV } from "react-icons/fa";
// import { SiArtstation } from "react-icons/si";
// import { cn } from "@/lib/utils";
// import {
//   categories as defaultCategories,
//   type BrowserCategory,
// } from "@/lib/data";

// type FileBrowserProps = {
//   categories?: BrowserCategory[];
//   className?: string;
// };

// export function Projects({
//   categories = defaultCategories,
//   className,
// }: FileBrowserProps) {
//   const allItems = useMemo(
//     () => categories.flatMap((c) => c.items),
//     [categories],
//   );

//   const [selectedId, setSelectedId] = useState<string>(allItems[0]?.id ?? "");
//   const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
//     () => Object.fromEntries(categories.map((c) => [c.id, true])),
//   );
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const selected = allItems.find((i) => i.id === selectedId) ?? allItems[0];

//   const linkIconMap = {
//     github: FaGithub,
//     live: FiExternalLink,
//     vimeo: FaVimeoV,
//     artstation: SiArtstation,
//   } as const;

//   const toggleCategory = (id: string) =>
//     setOpenCategories((prev) => ({ ...prev, [id]: !prev[id] }));

//   const handleSelect = (id: string) => {
//     setSelectedId(id);
//     setMobileOpen(false);
//   };

//   return (
//     <section id="projects" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
//       <div className="max-w-6xl mx-auto px-10">
//         <div className="mb-14">
//           <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
//             Examples of
//           </p>
//           <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
//             My Work
//           </h2>
//         </div>

//         <div
//           className={cn(
//             "flex flex-col overflow-auto rounded-xl",
//             "border border-border bg-gray-200 dark:bg-card",
//             "text-card-foreground shadow-sm",
//             "h-170 md:h-150 md:flex-row",
//             className,
//           )}
//         >
//           {/* Mobile header */}
//           <div className="flex items-center justify-between border-b border-border px-4 py-3 md:hidden">
//             <div className="flex items-center gap-2 min-w-0">
//               <ImageIcon
//                 className="size-4 shrink-0 text-muted-foreground"
//                 aria-hidden="true"
//               />
//               <span className="truncate text-sm font-medium">
//                 {selected?.title}
//               </span>
//             </div>
//             <button
//               type="button"
//               onClick={() => setMobileOpen((v) => !v)}
//               className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-medium hover:bg-accent hover:text-accent-foreground"
//               aria-expanded={mobileOpen}
//               aria-controls="file-browser-sidebar"
//             >
//               {mobileOpen ? (
//                 <X className="size-4" aria-hidden="true" />
//               ) : (
//                 <Menu className="size-4" aria-hidden="true" />
//               )}
//               {mobileOpen ? "Close" : "Browse"}
//             </button>
//           </div>

//           {/* Sidebar */}
//           <nav
//             id="file-browser-sidebar"
//             aria-label="File categories"
//             className={cn(
//               "shrink-0 overflow-y-auto border-border bg-muted/30 md:w-1/4 md:min-w-50 md:border-r",
//               mobileOpen ? "block border-b" : "hidden md:block",
//             )}
//           >
//             <div className="hidden items-center gap-2 px-4 py-4 md:flex">
//               {/* <ImageIcon
//                 className="size-4 text-muted-foreground"
//                 aria-hidden="true"
//               /> */}
//               <h2 className="text-sm font-semibold tracking-tight cursor-default">
//                 Categories
//               </h2>
//             </div>

//             <ul className="px-2 pb-3 md:px-2">
//               {categories.map((category) => {
//                 const isOpen = openCategories[category.id];
//                 return (
//                   <li key={category.id} className="mb-0.5">
//                     <button
//                       type="button"
//                       onClick={() => toggleCategory(category.id)}
//                       className="flex w-full items-center gap-2 rounded-md px-2 py-2
//                                 text-left text-sm font-medium
//                                 text-foreground/80
//                                 hover:bg-gray-300 hover:scale-105 transition-all duration-200
//                                 dark:hover:bg-background
//                                 cursor-pointer"
//                       aria-expanded={isOpen}
//                     >
//                       <ChevronDown
//                         className={cn(
//                           "size-3.5 shrink-0 text-muted-foreground transition-transform",
//                           !isOpen && "-rotate-90",
//                         )}
//                         aria-hidden="true"
//                       />
//                       <Folder
//                         className="size-4 shrink-0 text-muted-foreground"
//                         aria-hidden="true"
//                       />
//                       <span className="truncate">{category.label}</span>
//                       {/* <span className="ml-auto text-xs tabular-nums text-muted-foreground">
//                         {category.items.length}
//                       </span> */}
//                     </button>

//                     {isOpen && (
//                       <ul className="mt-0.5 space-y-0.5 pl-4">
//                         {category.items.map((item) => {
//                           const active = item.id === selected?.id;
//                           const Icon = item.image ? ImageIcon : VideoIcon;

//                           return (
//                             <li key={item.id}>
//                               <button
//                                 type="button"
//                                 onClick={() => handleSelect(item.id)}
//                                 aria-current={active ? "true" : undefined}
//                                 className={cn(
//                                   "flex w-full items-center gap-2 rounded-md py-1.5 pl-3 pr-2 text-left text-sm",
//                                   active
//                                     ? "bg-accent text-primary-foreground"
//                                     : "text-muted-foreground hover:bg-gray-300 dark:hover:bg-background hover:scale-105 transition-all duration-200",
//                                 )}
//                               >
//                                 {
//                                   <Icon
//                                     className={cn(
//                                       "size-3.5 shrink-0",
//                                       active
//                                         ? "text-primary-foreground"
//                                         : "text-muted-foreground/70",
//                                     )}
//                                     aria-hidden="true"
//                                   />
//                                 }
//                                 <span className="truncate">{item.title}</span>
//                               </button>
//                             </li>
//                           );
//                         })}
//                       </ul>
//                     )}
//                   </li>
//                 );
//               })}
//             </ul>
//           </nav>

//           {/* Detail pane */}
//           <section
//             aria-label="Item details"
//             className="flex min-h-0 flex-1 flex-col overflow-y-auto"
//           >
//             {selected ? (
//               <>
//                 <div className="relative w-full shrink-0 bg-zinc-500 h-100 overflow-hidden">
//                   {/* TODO: Feed into a helper function instead */}
//                   {selected.image ? (
//                     <Image
//                       src={selected.image || "images/placeholder.svg"}
//                       alt={selected.title}
//                       fill
//                       priority
//                       sizes="(max-width: 768px) 100vw, 80vw"
//                       className="object-cover"
//                     />
//                   ) : selected.model ? (
//                     //  TODO: Check--I'm pretty sure this isn't used
//                     // <div className="sketchfab-embed-wrapper">
//                     <iframe
//                       // frameBorder="0"
//                       // mozAllowFullScreen="true"
//                       // webkitallowfullscreen="true"
//                       // xr-spatial-tracking
//                       // execution-while-out-of-viewport
//                       // execution-while-not-rendered
//                       // web-share
//                       // allowFullScreen
//                       src={selected.model}
//                       className="absolute inset-0 h-full w-full"
//                       title={selected.title}
//                       allow="autoplay; fullscreen; xr-spatial-tracking"
//                     />
//                   ) : (
//                     <iframe
//                       src={`${selected.video}?autoplay=1&loop=1&title=0&byline=0&portrait=0`}
//                       className="absolute inset-0 h-full w-full"
//                       // allow="autoplay; fullscreen; encrypted-media; web-share"
//                       title={selected.title}
//                       style={{ border: 0 }}
//                       referrerPolicy="strict-origin-when-cross-origin"
//                     />
//                   )}
//                 </div>

//                 {/* LINKS */}
//                 {selected.links ? (
//                   <div className="mt-3 flex flex-wrap items-center gap-2 px-5">
//                     {Object.entries(selected.links)
//                       .filter(([, url]) => Boolean(url))
//                       .map(([key, url], i) => {
//                         const Icon =
//                           linkIconMap[key as keyof typeof linkIconMap];
//                         return (
//                           <a
//                             key={key}
//                             href={url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             aria-label={key}
//                             // TODO: reveal d${i} for later probably
//                             className={`inline-flex items-center justify-center rounded-full
//                                         border border-border bg-gray-300
//                                         px-2 py-2 text-xs font-medium
//                                         transition
//                                         text-gray-700
//                                         hover:bg-accent/10
//                                         hover:scale-105`}
//                           >
//                             {Icon ? <Icon className="h-4 w-4" /> : null}
//                             <span className="sr-only">{key}</span>
//                           </a>
//                         );
//                       })}
//                   </div>
//                 ) : null}

//                 <div className="flex flex-col gap-4 px-5 md:py-3 md:p-6">
//                   <div className="flex flex-col gap-1.5">
//                     <h1 className="text-balance text-xl font-semibold tracking-tight md:text-2xl">
//                       {selected.title}
//                     </h1>
//                     <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
//                       {selected.description}
//                     </p>
//                   </div>

//                   {/* horizontal line */}
//                   {/* <dl className="grid grid-cols-2 gap-3 border-t border-border pt-4 sm:grid-cols-3"> */}
//                   {/* {selected.meta.map((m) => (
//                       <div key={m.label} className="flex flex-col gap-0.5">
//                         <dt className="text-xs uppercase tracking-wide text-muted-foreground">
//                           {m.label}
//                         </dt>
//                         <dd className="text-sm font-medium tabular-nums">
//                           {m.value}
//                         </dd>
//                       </div>
//                     ))} */}
//                   {/* </dl> */}
//                 </div>
//               </>
//             ) : (
//               <div className="flex flex-1 items-center justify-center p-6 text-sm text-muted-foreground">
//                 Select an item to view its details.
//               </div>
//             )}
//           </section>
//         </div>
//       </div>
//     </section>
//   );
// }

// NEW
/** ===========================================================
 * == PREVIOUS ================================================
 * ============================================================
 */
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Folder,
  ImageIcon,
  Menu,
  VideoIcon,
  X,
} from "lucide-react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub, FaVimeoV } from "react-icons/fa";
import { SiArtstation } from "react-icons/si";
import { cn } from "@/lib/utils";
import {
  categories as defaultCategories,
  type BrowserCategory,
} from "@/lib/data";

type FileBrowserProps = {
  categories?: BrowserCategory[];
  className?: string;
};

function Marquee({
  direction,
  text,
}: {
  direction: "up" | "down";
  text: string;
}) {
  const words = Array.from({ length: 8 });

  return (
    <aside
      aria-label={`${text} marquee moving ${direction}`}
      className={`marquee-rail marquee-rail-${direction}`}
    >
      <div className={`marquee-track marquee-track-${direction}`}>
        {words.map((_, index) => (
          <span className="marquee-word" key={index} aria-hidden={index > 0}>
            {text}
          </span>
        ))}
      </div>
    </aside>
  );
}

export function Projects({
  categories = defaultCategories,
  className,
}: FileBrowserProps) {
  const allItems = useMemo(
    () => categories.flatMap((c) => c.items),
    [categories],
  );

  const [selectedId, setSelectedId] = useState<string>(allItems[0]?.id ?? "");
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    () => Object.fromEntries(categories.map((c) => [c.id, true])),
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  const selected = allItems.find((i) => i.id === selectedId) ?? allItems[0];

  const linkIconMap = {
    github: FaGithub,
    live: FiExternalLink,
    vimeo: FaVimeoV,
    artstation: SiArtstation,
  } as const;

  const toggleCategory = (id: string) =>
    setOpenCategories((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setMobileOpen(false);
  };

  return (
    <section id="projects" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-10">
        <div className="mb-14">
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
            Examples of
          </p>
          <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
            My Work
          </h2>
        </div>

        <div
          className={cn(
            "relative flex flex-col overflow-hidden rounded-xl",
            "border border-border bg-gray-200 dark:bg-card",
            "text-card-foreground shadow-sm",
            "h-170 md:h-150 md:flex-row",
            className,
          )}
        >
          {/* Mobile header */}
          <div className="flex items-center justify-between border-b border-border px-4 py-3 md:hidden">
            <div className="flex items-center gap-2 min-w-0">
              <ImageIcon
                className="size-4 shrink-0 text-muted-foreground"
                aria-hidden="true"
              />
              <span className="truncate text-sm font-medium">
                {selected?.title}
              </span>
            </div>
            {/* border border-border hover:bg-accent hover:text-zinc-100 */}
            {/* transition-all duration-200" */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex items-center 
                         px-2.5 py-1.5 gap-1.5 
                         rounded-md text-xs font-medium
                         border border-border hover:bg-accent hover:text-zinc-100
                         transition-all duration-200"
              aria-expanded={mobileOpen}
              aria-controls="file-browser-sidebar"
            >
              {/* TODO: How to animate the size when changed */}
              {mobileOpen ? (
                <X className="size-4" aria-hidden="true" />
              ) : (
                <Menu className="size-4" aria-hidden="true" />
              )}
              {mobileOpen ? "Close" : "Browse"}
            </button>
          </div>

          {/* Sidebar */}
          <nav
            id="file-browser-sidebar"
            aria-label="File categories"
            className={cn(
              "shrink-0 overflow-y-auto",
              "border-border bg-muted/30",
              "md:relative md:inset-auto md:z-auto md:w-1/4 md:min-w-50 md:border-r",
              "transition duration-300 ease-out",
              mobileOpen
                ? `absolute 
                   -translate-y-1 translate-x-1
                   -inset-x-1 top-14 bottom-0 z-20 border-b 
                   bg-zinc-100/90
                   dark:bg-zinc-800/90
                   opacity-100 backdrop-blur-xl`
                : `pointer-events-none absolute inset-x-0 top-14 bottom-0 z-20 -translate-y-3 
                   opacity-0 
                   md:pointer-events-auto md:relative md:inset-auto md:z-auto md:translate-y-0 md:border-b-0 md:opacity-100`,
            )}
          >
            <div className="hidden items-center gap-2 px-4 py-4 md:flex">
              {/* <ImageIcon
                className="size-4 text-muted-foreground"
                aria-hidden="true"
              /> */}
              <h2 className="text-sm font-semibold tracking-tight cursor-default">
                Categories
              </h2>
            </div>

            <ul className="px-2 pb-3 md:px-2">
              {categories.map((category) => {
                const isOpen = openCategories[category.id];
                return (
                  <li key={category.id} className="mb-0.5">
                    <button
                      type="button"
                      onClick={() => toggleCategory(category.id)}
                      className="flex w-full items-center gap-2 rounded-md px-2 py-2
                                text-left text-sm font-medium
                                text-foreground/80
                                hover:bg-gray-300 hover:scale-105 transition-all duration-200
                                dark:hover:bg-background
                                cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <ChevronDown
                        className={cn(
                          "size-3.5 shrink-0 text-muted-foreground transition-transform",
                          !isOpen && "-rotate-90",
                        )}
                        aria-hidden="true"
                      />
                      <Folder
                        className="size-4 shrink-0 text-muted-foreground"
                        aria-hidden="true"
                      />
                      <span className="truncate">{category.label}</span>
                      {/* <span className="ml-auto text-xs tabular-nums text-muted-foreground">
                        {category.items.length}
                      </span> */}
                    </button>

                    {isOpen && (
                      <ul className="mt-0.5 space-y-0.5 pl-4">
                        {category.items.map((item) => {
                          const active = item.id === selected?.id;
                          const Icon = item.image ? ImageIcon : VideoIcon;

                          return (
                            <li key={item.id}>
                              <button
                                type="button"
                                onClick={() => handleSelect(item.id)}
                                aria-current={active ? "true" : undefined}
                                className={cn(
                                  "flex w-full items-center gap-2 rounded-md py-1.5 pl-3 pr-2 text-left text-sm",
                                  active
                                    ? "bg-accent text-primary-foreground"
                                    : "text-muted-foreground hover:bg-gray-300 dark:hover:bg-background hover:scale-105 transition-all duration-200",
                                )}
                              >
                                {
                                  <Icon
                                    className={cn(
                                      "size-3.5 shrink-0",
                                      active
                                        ? "text-primary-foreground"
                                        : "text-muted-foreground/70",
                                    )}
                                    aria-hidden="true"
                                  />
                                }
                                <span className="truncate">{item.title}</span>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Detail pane */}
          <section
            aria-label="Item details"
            className="flex min-h-0 flex-1 flex-col overflow-y-auto"
          >
            {selected ? (
              <>
                <div className="relative w-full shrink-0 bg-purple-800/30 h-100 overflow-hidden">
                  {/* TODO: Feed into a helper function instead */}
                  {selected.image ? (
                    <Image
                      src={selected.image || "images/placeholder.svg"}
                      alt={selected.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className="object-cover"
                    />
                  ) : selected.model ? (
                    //  TODO: Check--I'm pretty sure this isn't used
                    // <div className="sketchfab-embed-wrapper">
                    <iframe
                      // frameBorder="0"
                      // mozAllowFullScreen="true"
                      // webkitallowfullscreen="true"
                      // xr-spatial-tracking
                      // execution-while-out-of-viewport
                      // execution-while-not-rendered
                      // web-share
                      // allowFullScreen
                      src={selected.model}
                      className="absolute inset-0 h-full w-full"
                      title={selected.title}
                      allow="autoplay; fullscreen; xr-spatial-tracking"
                    />
                  ) : (
                    <iframe
                      src={`${selected.video}?autoplay=1&loop=1&title=0&byline=0&portrait=0`}
                      className="absolute inset-0 h-full w-full"
                      // allow="autoplay; fullscreen; encrypted-media; web-share"
                      title={selected.title}
                      style={{ border: 0 }}
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  )}
                </div>

                {/* LINKS */}
                {selected.links ? (
                  <div
                    className="flex flex-wrap items-center 
                              gap-2 
                              md:mt-3 md:px-5 md:mb-2
                              mb-4 px-5 mt-3"
                  >
                    {Object.entries(selected.links)
                      .filter(([, url]) => Boolean(url))
                      .map(([key, url], i) => {
                        const Icon =
                          linkIconMap[key as keyof typeof linkIconMap];
                        return (
                          <a
                            key={key}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={key}
                            // TODO: reveal d${i} for later probably
                            className={`inline-flex items-center justify-center rounded-full
                                        border border-border bg-gray-300
                                        px-2 py-2 text-xs font-medium
                                        transition
                                        text-gray-700
                                        hover:bg-accent/10
                                        hover:dark:bg-orange-400
                                        hover:scale-105`}
                          >
                            {Icon ? <Icon className="h-4 w-4" /> : null}
                            <span className="sr-only">{key}</span>
                          </a>
                        );
                      })}
                  </div>
                ) : null}

                <div className="flex flex-col gap-4 px-5 md:py-3 md:p-6">
                  <div className="flex flex-col gap-1.5">
                    <h1 className="text-balance text-xl font-semibold tracking-tight md:text-2xl">
                      {selected.title}
                    </h1>
                    <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
                      {selected.description}
                    </p>
                  </div>

                  {/* horizontal line */}
                  {/* <dl className="grid grid-cols-2 gap-3 border-t border-border pt-4 sm:grid-cols-3"> */}
                  {/* {selected.meta.map((m) => (
                      <div key={m.label} className="flex flex-col gap-0.5">
                        <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                          {m.label}
                        </dt>
                        <dd className="text-sm font-medium tabular-nums">
                          {m.value}
                        </dd>
                      </div>
                    ))} */}
                  {/* </dl> */}
                </div>
              </>
            ) : (
              <div className="flex flex-1 items-center justify-center p-6 text-sm text-muted-foreground">
                Select an item to view its details.
              </div>
            )}
          </section>
        </div>
      </div>
    </section>
  );
}
