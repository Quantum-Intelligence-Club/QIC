"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button 
        className="p-2 rounded-full transition-colors duration-300"
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 group"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <i className="ri-sun-line text-lg text-yellow-500 group-hover:scale-110 transition-transform duration-300"></i>
      ) : (
        <i className="ri-moon-line text-lg text-gray-700 group-hover:scale-110 transition-transform duration-300"></i>
      )}
    </button>
  );
}
