"use client";
import Link from "next/link";
import React from "react";

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
  return (
    <>
      <header
        className="flex items-center justify-between p-4"
        style={{
          backgroundColor: "var(--tg-theme-bg-color)",
          color: "var(--tg-theme-text-color)",
        }}
      >
        <div className="flex items-center gap-4">
          <h1
            className="text-3xl font-bold my_cursive_font"
            style={{
              color: "var(--tg-theme-text-color)",
            }}
          >
            Pronto Cafe
          </h1>
        </div>
        <nav className="flex items-center gap-5" id="header__nav">
          <Link href="/">Главная</Link>
          <Link href="/">Меню</Link>
          <Link href="/">Корзина</Link>
          <Link href="/profile">Профиль</Link>
        </nav>
      </header>
    </>
  );
}
