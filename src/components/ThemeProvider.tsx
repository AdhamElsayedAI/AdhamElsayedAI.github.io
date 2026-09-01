"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";
type ThemeContextValue = {
  theme: Theme;
  mounted: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const themeBootstrapScript = `
(function(){try{
  var stored=localStorage.getItem('adham-theme');
  var theme=stored==='light'||stored==='dark'
    ? stored
    : (window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  document.documentElement.classList.remove('light','dark');
  document.documentElement.classList.add(theme);
  document.documentElement.style.colorScheme=theme;
}catch(e){document.documentElement.classList.add('dark');}})();
`;

function applyTheme(theme: Theme) {
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);
  document.documentElement.style.colorScheme = theme;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const resolved = document.documentElement.classList.contains("light") ? "light" : "dark";
    setTheme(resolved);
    applyTheme(resolved);
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem("adham-theme", next);
      applyTheme(next);
      return next;
    });
  }, []);

  const value = useMemo(() => ({ theme, mounted, toggleTheme }), [theme, mounted, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
