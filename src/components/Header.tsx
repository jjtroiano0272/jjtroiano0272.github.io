"use client";
import { useEffect, useState } from "react";

const SECTIONS = ["projects", "experience", "skills", "about", "contact"];

export default function Header() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));

    function onScroll() {
      setScrolled(window.scrollY > 20);

      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 60;
      if (atBottom) return setActive("contact");

      for (const id of [...SECTIONS].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActive(id);
          console.log(`scroll section: ${id}`);

          return;
        }
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      const target = event.target;
      const isEditableTarget =
        target instanceof HTMLElement &&
        target.closest(
          "input, textarea, select, [contenteditable='true'], [contenteditable=''], [role='textbox']",
        );

      if (isEditableTarget) return;

      if (event.shiftKey && event.key.toLowerCase() === "d") {
        event.preventDefault();
        toggleDark();
      }
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  function toggleDark() {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  }

  const navLink = (id: string, label: string) => (
    <a
      href={`#${id}`}
      className={`
        text-zinc-500
        transition-colors
        nl dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white
        ${active === id ? "on text-zinc-900! dark:text-white!" : ""}
      `}
    >
      {label}
    </a>
  );

  return (
    <header
      className={`
        z-50
        transition-all
        fixed inset-x-0 top-0 duration-300
        ${
          scrolled
            ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm shadow-black/5"
            : ""
        }
      `}
    >
      {/* TODO: same nav markup as the original but swap:
            [*] :class bindings => navLink(),
            [*] @click="dark=!dark" => onClick={toggleDark}
            [ ] x-show="mm" => {menuOpen && (...)},
            [ ] @click="mm=!mm" => onClick={() => setMenuOpen(!menuOpen)} */}

      <nav
        aria-label="Main navigation"
        className="
          flex
          max-w-6xl h-16
          mx-auto px-6
          items-center justify-between
        "
      >
        <a
          href="#hero"
          className="
            z-10
            font-display font-bold text-xl tracking-tight
            relative
          "
        >
          <span
            className="
              text-zinc-900
              dark:text-white
            "
          >
            J
          </span>
          <span
            className="
              text-accent
            "
          >
            T
          </span>
        </a>

        <ul
          role="list"
          className="
            hidden
            text-sm
            items-center gap-8
            md:flex
          "
        >
          {SECTIONS.map((s) => (
            <li key={s}>
              {/* <a href={`#${s}`} className={navLink(s, s)}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a> */}
              {navLink(s, s.charAt(0).toUpperCase() + s.slice(1))}
            </li>
          ))}
        </ul>

        <div
          className="
            flex
            items-center gap-3
          "
        >
          {/* Dark toggle */}
          <button
            // @click="dark=!dark"
            // :aria-label="dark?'Light mode':'Dark mode'"
            onClick={toggleDark}
            className="w-9 h-9 
                       flex items-center justify-center 
                       rounded-full 
                       border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 
                       transition-colors
                       cursor-pointer"
            aria-label={dark ? "Light mode" : "Dark mode"}
          >
            {!dark ? (
              <svg
                // x-show="!dark"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                />
              </svg>
            ) : (
              <svg
                // x-show="dark"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
                />
              </svg>
            )}
          </button>

          {/* Hire me */}
          <a
            href="#contact"
            className="
              hidden
              px-5 py-2
              text-white text-sm font-medium
              bg-accent
              rounded-full
              transition-colors
              items-center gap-2 shimmer hover:bg-accent-light
              md:inline-flex
            "
          >
            Hire me
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="
                w-3.5 h-3.5
              "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

          {/* Hamburger menu */}
          <button
            //   TODO: What's this?
            // :aria-expanded="mm"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              flex
              w-9 h-9
              rounded-full border border-zinc-200
              items-center justify-center dark:border-zinc-800
              md:hidden
            "
          >
            {!menuOpen ? (
              <svg
                // NOTE: mm is Mobile Menu
                // x-show="!mm"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="
                w-4 h-4
              "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                // x-show="mm"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="
                w-4 h-4
              "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
