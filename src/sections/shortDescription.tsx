"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ShortDescription() {
  return (
    <section className="py-20 px-4 text-center bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Добро пожаловать в Pronto Cafe
          </h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            &quot;Pronto Cafe &mdash; это уютное место с прекрасным интерьером ,
            где можно насладиться вкусной едой.Гостям нравится пицца
            &quot;Жульен&quot; и &quot;Цезарь&quot;,а также бургеры с сочными
            котлетами и свежими овощами&quot;
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
