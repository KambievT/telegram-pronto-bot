import React, { createContext, useContext, useEffect, useState } from "react";
import "@/styles/theme.css";

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        colorScheme: "light" | "dark";
        onEvent: (eventType: string, callback: () => void) => void;
      };
    };
  }
}

type ThemeContextType = {
  theme: "light" | "dark";
};

const ThemeContext = createContext<ThemeContextType>({ theme: "light" });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const newTheme = window.Telegram.WebApp.colorScheme;
      setTheme(newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);

      window.Telegram.WebApp.onEvent("themeChanged", () => {
        const updatedTheme = window.Telegram.WebApp.colorScheme;
        setTheme(updatedTheme);
        document.documentElement.setAttribute("data-theme", updatedTheme);
      });
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
