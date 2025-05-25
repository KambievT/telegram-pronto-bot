"use client";
import FirstSection from "@/sections/firstSection";
import ShortDescription from "@/sections/shortDescription";
import PopularProducts from "@/sections/popularProducts";
import Features from "@/sections/features";
import CTA from "@/sections/cta";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlTelegramId = params.get("telegramId");
    const savedTelegramId = localStorage.getItem("telegramId");

    // Проверяем валидность ID (должен быть числом)
    const isValidId = (id: string | null) => {
      if (!id) return false;
      return !isNaN(Number(id)) && Number(id) > 0;
    };

    // Если есть валидный ID в URL - используем его
    if (isValidId(urlTelegramId)) {
      localStorage.setItem("telegramId", urlTelegramId as string);
      return;
    }

    // Если нет ID в URL, но есть валидный сохраненный ID - оставляем его
    if (isValidId(savedTelegramId)) {
      return;
    }

    // Если ни один ID не валиден - очищаем хранилище
    localStorage.removeItem("telegramId");
  }, []);

  return (
    <>
      <FirstSection />
      <ShortDescription />
      <PopularProducts />
      <Features />
      <CTA />
    </>
  );
}
