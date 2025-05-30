"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = screenWidth < 750;

  const navPosition = isSmallScreen ? "50%" : "61.5%";
  const logoMargin = "0";
  const logoFontSize = isSmallScreen ? "1.5rem" : "1.875rem";
  const navDisplay = isSmallScreen ? "none" : "flex";

  return (
    <>
      <header
        className="flex items-center justify-center p-4 relative"
        style={{
          backgroundColor: "var(--tg-theme-bg-color)",
          color: "var(--tg-theme-text-color)",
        }}
      >
        <div className="flex items-center justify-center w-full relative">
          <nav
            className={`flex items-center gap-5 absolute transition-all duration-1500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              right: isVisible ? navPosition : "50%",
              transform: isVisible
                ? isSmallScreen
                  ? "translateX(50%)"
                  : "translateX(0)"
                : "translateX(50%)",
              transitionDelay: isVisible ? "800ms" : "0ms",
              display: navDisplay,
            }}
          >
            <Link
              href="/"
              className="hover:opacity-80 transition-opacity font-medium"
              style={{
                transitionDelay: isVisible ? "1000ms" : "0ms",
                opacity: isVisible ? 1 : 0,
              }}
            >
              Главная
            </Link>
            <Link
              href="/"
              className="hover:opacity-80 transition-opacity font-medium"
              style={{
                transitionDelay: isVisible ? "1200ms" : "0ms",
                opacity: isVisible ? 1 : 0,
              }}
            >
              Меню
            </Link>
          </nav>
          <h1
            className={`text-3xl font-bold my_cursive_font  transition-all duration-1500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              color: "var(--tg-theme-text-color)",
              fontSize: logoFontSize,
              margin: logoMargin,
            }}
          >
            Pronto Cafe
          </h1>
          <nav
            className={`flex items-center gap-5 absolute transition-all duration-1500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: isVisible ? navPosition : "50%",
              transform: isVisible
                ? isSmallScreen
                  ? "translateX(-50%)"
                  : "translateX(0)"
                : "translateX(-50%)",
              transitionDelay: isVisible ? "800ms" : "0ms",
              display: navDisplay,
            }}
          >
            <Link
              href="/"
              className="hover:opacity-80 transition-opacity font-medium"
              style={{
                transitionDelay: isVisible ? "1000ms" : "0ms",
                opacity: isVisible ? 1 : 0,
              }}
            >
              Корзина
            </Link>
            <Link
              href="/profile"
              className="hover:opacity-80 transition-opacity font-medium"
              style={{
                transitionDelay: isVisible ? "1200ms" : "0ms",
                opacity: isVisible ? 1 : 0,
              }}
            >
              Профиль
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
