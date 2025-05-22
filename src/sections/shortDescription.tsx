"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ShortDescription() {
  return (
    <section className="py-12 px-4 text-center">
      <motion.p
        className="text-xl md:text-2xl max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        "Pronto Cafe — это уютное место для любителей ароматного кофе и вкусных
        десертов."
      </motion.p>
    </section>
  );
}
