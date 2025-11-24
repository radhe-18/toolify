"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const isDark = () => document.documentElement.classList.contains("dark");
  const toggle = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark() ? "dark" : "light");
  };
  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:shadow"
      title="Toggle theme"
    >
      <Sun className="hidden dark:inline" size={16} />
      <Moon className="inline dark:hidden" size={16} />
      Theme
    </button>
  );
}
