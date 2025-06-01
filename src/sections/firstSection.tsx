"use client";

import React from "react";
import { Button } from "@telegram-apps/telegram-ui";
import Image from "next/image";
import { motion } from "framer-motion";

const heroImage =
  "https://avatars.mds.yandex.net/get-altay/2359468/2a000001726fc0375656e88bcea1cf2f7603/XXXL";
const slogan = "Бодрое утро начинается с Pronto";

export default function FirstSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Pronto Cafe Hero Image"
          fill={true}
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/60 bg-opacity-50 backdrop-blur-[2px]"></div>
      <div className="relative z-10 text-white text-center p-8 max-w-4xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {slogan}
        </motion.h2>
        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Button
            onClick={() => console.log("Посмотреть меню clicked")}
            className="bg-gray-700/50 hover:bg-gray-700/70 rounded-xl py-4 px-6 backdrop-blur-2xl text-lg transition-all duration-300"
          >
            Посмотреть меню
          </Button>
          <Button
            onClick={() => console.log("Сделать заказ clicked")}
            className="bg-gray-700/50 hover:bg-gray-700/70 rounded-xl py-4 px-6 backdrop-blur-2xl text-lg transition-all duration-300"
          >
            Создать заказ
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
