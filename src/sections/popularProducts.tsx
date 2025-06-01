"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProductCard from "@/components/product-card";
import SelectedProduct from "@/components/selected-product";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description?: string; // Added optional description field
}

//Массив популярных продуктов
const products: Product[] = [
  {
    id: 1,
    name: "Капучино",
    price: "150 ₽",
    image:
      "https://avatars.mds.yandex.net/i?id=dbafb4343d9e7d64cadab295fd22ed20f89b4d8a-10595999-images-thumbs&n=13", // Placeholder image
    description: "Классический капучино с пышной молочной пенкой.",
  },
  {
    id: 2,
    name: "Латте",
    price: "160 ₽", // Placeholder price
    image:
      "https://avatars.mds.yandex.net/i?id=dbafb4343d9e7d64cadab295fd22ed20f89b4d8a-10595999-images-thumbs&n=13", // Placeholder image
    description: "Нежный латте с большим количеством молока.",
  },
  {
    id: 3,
    name: "Печенье",
    price: "80 ₽", // Placeholder price
    image:
      "https://avatars.mds.yandex.net/i?id=dbafb4343d9e7d64cadab295fd22ed20f89b4d8a-10595999-images-thumbs&n=13", // Placeholder image
    description: "Свежее домашнее печенье в ассортименте.",
  },
  {
    id: 4,
    name: "Сэндвич",
    price: "250 ₽", // Placeholder price
    image:
      "https://avatars.mds.yandex.net/i?id=dbafb4343d9e7d64cadab295fd22ed20f89b4d8a-10595999-images-thumbs&n=13", // Placeholder image
    description: "Сытный сэндвич с курицей и овощами.",
  },
];

export default function PopularProducts() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="py-20 px-4 relative mb-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-4 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Популярные блюда
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Попробуйте наши самые популярные блюда и напитки
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard
                product={product}
                handleCardClick={handleCardClick}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <SelectedProduct
            selectedProduct={selectedProduct}
            handleCloseModal={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
