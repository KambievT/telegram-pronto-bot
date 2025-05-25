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
    const telegramId = params.get("telegramId");
    const savedTelegramId = localStorage.getItem("telegramId");

    if (telegramId) {
      if (savedTelegramId !== telegramId) {
        localStorage.removeItem("telegramId");
        localStorage.setItem("telegramId", telegramId);
      }
    } else if (savedTelegramId) {
      localStorage.removeItem("telegramId");
    }
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
