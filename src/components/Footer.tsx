export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-400">
          © <span>{new Date().getFullYear()}</span> J Troiano. All rights
          reserved.
        </p>

        {/* Center */}
        <p className="text-xs text-zinc-500">
          <a
            href="https://jonathan-troiano.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:text-accent transition-colors"
          >
            See what this site used to look like!
          </a>{" "}
        </p>

        <p className="text-xs text-zinc-500">
          Built with{" "}
          <a
            href="https://tailwindcss.com"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:text-accent transition-colors"
          >
            Tailwind CSS
          </a>{" "}
          &amp;{" "}
          <a
            href="https://nextjs.org"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:text-accent transition-colors"
          >
            Next.js
          </a>
        </p>
      </div>
    </footer>
  );
}
