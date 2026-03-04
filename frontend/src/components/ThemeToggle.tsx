"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button id="toggle" aria-label="Toggle theme" title="Toggle theme">
        <i id="light" className="ri-sun-fill"></i>
      </button>
    );
  }

  return (
    <button
      id="toggle"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <i id="light" className="ri-sun-fill"></i>
      <i id="dark" className="ri-moon-fill"></i>
    </button>
  );
}
