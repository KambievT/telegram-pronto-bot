"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@telegram-apps/telegram-ui";

const slides = [
  {
    id: 1,
    title: "Специальное предложение",
    description: "Скидка 20% на все услуги",
    image: "https://via.placeholder.com/800x400",
  },
  {
    id: 2,
    title: "Новые услуги",
    description: "Расширенный функционал",
    image: "https://via.placeholder.com/800x400",
  },
  {
    id: 3,
    title: "Акция месяца",
    description: "Дополнительные бонусы",
    image: "https://via.placeholder.com/800x400",
  },
];

export default function FirstSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full h-full min-h-screen"
        >
          <div className="relative w-full h-full min-h-screen">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full min-h-screen object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-8">
              <h2 className="text-3xl font-bold mb-4">
                {slides[currentSlide].title}
              </h2>
              <p className="text-xl">{slides[currentSlide].description}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <Button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
