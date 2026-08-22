import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AOSInit } from "@/lib/aos";
import AOS from "aos";

export const metadata: Metadata = {
  title: "J. Troiano | Portfolio",
  description: "Portfolio",
  keywords: [
    // TODO: update/change
    "freelance developer",
    "UI designer",
    "portfolio",
    "Tailwind CSS",
  ],
  authors: [{ name: "Jonathan" }],
  openGraph: {
    title: "Jonathan — Software Developer",
    description: "I design and build digital products that people love to use.",
    type: "website",
    url: "https://jjtroiano0272.github.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // TODO: Might have to move these to body classname instead of html clasName
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <AOSInit />
      <head>
        {/* <!-- HTML Meta Tags --> */}
        <title>
          OpenGraph - Preview Images and Generate Open Graph Meta Tags
        </title>
        <meta
          name="description"
          content="OpenGraph.Dev: Generate and preview Open Graph meta tags for images, titles, and more, ensuring optimal display on Facebook, Twitter, LinkedIn, WhatsApp..."
        />

        {/* <!-- Open Graph Meta Tags --> */}
        <meta property="og:url" content="https://opengraph.dev" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="OpenGraph - Preview Images and Generate Open Graph Meta Tags"
        />
        <meta
          property="og:description"
          content="OpenGraph.Dev: Generate and preview Open Graph meta tags for images, titles, and more, ensuring optimal display on Facebook, Twitter, LinkedIn, WhatsApp..."
        />
        <meta property="og:image" content="https://opengraph.dev/banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="opengraph.dev" />
        <meta property="twitter:url" content="https://opengraph.dev" />
        <meta
          name="twitter:title"
          content="OpenGraph - Preview Images and Generate Open Graph Meta Tags"
        />
        <meta
          name="twitter:description"
          content="OpenGraph.Dev: Generate and preview Open Graph meta tags for images, titles, and more, ensuring optimal display on Facebook, Twitter, LinkedIn, WhatsApp..."
        />
        <meta name="twitter:image" content="https://opengraph.dev/banner.png" />

        {/* <!-- Meta Tags Generated via https://opengraph.dev --> */}

        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        {/* <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" /> */}

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              const stored = localStorage.getItem('theme');
              const dark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
              document.documentElement.classList.toggle('dark', dark);
            })();`,
          }}
        />
      </head>

      {/* <body className="min-h-full flex flex-col"> */}
      <TooltipProvider>
        <body className="bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 antialiased">
          {children}
        </body>
      </TooltipProvider>
    </html>
  );
}
