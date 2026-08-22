// Source - https://stackoverflow.com/a/76724219
// Posted by Adebayo
// Retrieved 2026-08-19, License - CC BY-SA 4.0

"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quad",
      duration: 1000,
    });
  }, []);

  return null;
};
