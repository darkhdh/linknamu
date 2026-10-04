"use client";

import { useState } from "react";

export default function ThemeToggle() {
  // layout.tsx의 인라인 스크립트가 먼저 html.dark를 설정하므로 초기값은 DOM에서 읽는다
  const [dark, setDark] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark"),
  );

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "밝은 화면으로 전환" : "어두운 화면으로 전환"}
      suppressHydrationWarning
      className="absolute right-4 top-4 rounded-full border border-neutral-300 px-3 py-1.5 text-sm transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
    >
      {dark ? "☀️ 라이트" : "🌙 다크"}
    </button>
  );
}
