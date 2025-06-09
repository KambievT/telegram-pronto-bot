"use client";

import React from "react";
import { Button } from "@telegram-apps/telegram-ui";
import Image from "next/image";
import { motion } from "framer-motion";

const heroImage =
  "https://avatars.mds.yandex.net/get-altay/2359468/2a000001726fc0375656e88bcea1cf2f7603/XXXL";
const slogan = "Кафе, куда хочется возвращаться";
const subSlogan = "Где каждый найдёт своё любимое блюдо.";

export default function FirstSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-200 via-yellow-100 to-orange-100">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Pronto Cafe Hero Image"
          fill={true}
          style={{ objectFit: "cover", opacity: 0.25 }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/60 via-yellow-200/40 to-white/60" />
      </div>
      {/* Декоративные элементы */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-orange-300 rounded-full blur-2xl opacity-40 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-200 rounded-full blur-2xl opacity-30 animate-pulse" />
      <div className="relative z-10 text-center p-8 max-w-3xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-orange-900 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {slogan}
        </motion.h2>
        <motion.p
          className="text-2xl md:text-3xl mb-8 text-orange-700 font-medium drop-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subSlogan}
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            onClick={() => console.log("Посмотреть меню clicked")}
            className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white rounded-xl py-4 px-8 text-lg font-bold shadow-lg transition-all duration-300"
          >
            Посмотреть меню
          </Button>
          <Button
            onClick={() => console.log("Сделать заказ clicked")}
            className="bg-white text-orange-700 border-2 border-orange-400 hover:bg-orange-50 rounded-xl py-4 px-8 text-lg font-bold shadow-lg transition-all duration-300"
          >
            Создать заказ
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
