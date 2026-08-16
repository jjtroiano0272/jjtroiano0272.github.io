import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { TooltipProvider } from "@/components/ui/tooltip";

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
      <head>
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
