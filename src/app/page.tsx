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
    if (telegramId) {
      localStorage.setItem("telegramId", telegramId);
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
