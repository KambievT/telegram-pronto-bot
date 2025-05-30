"use client";

import React from "react";
import { Button } from "@telegram-apps/telegram-ui";
import Image from "next/image";

const heroImage =
  "https://avatars.mds.yandex.net/get-altay/2359468/2a000001726fc0375656e88bcea1cf2f7603/XXXL";
const slogan = "Бодрое утро начинается с Pronto";

export default function FirstSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 ">
        <Image
          src={heroImage}
          alt="Pronto Cafe Hero Image"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute inset-0 bg-black/60 bg-opacity-50 backdrop-blur-[2px]"></div>
      <div className="relative z-10 text-white text-center p-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{slogan}</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            onClick={() => console.log("Посмотреть меню clicked")}
            className="bg-gray-700/50 rounded-xl py-3 px-2.5 backdrop-blur-2xl "
          >
            Посмотреть меню
          </Button>
          <Button
            onClick={() => console.log("Сделать заказ clicked")}
            className="bg-gray-700/50 rounded-xl py-3 px-2 backdrop-blur-2xl"
          >
            Сделать заказ
          </Button>
        </div>
      </div>
    </div>
  );
}
