"use client";
import React, { useState } from "react";
import { Button } from "@telegram-apps/telegram-ui";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description?: string; // Added optional description field
}

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
    <section className="py-12 px-4 relative mb-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Популярные товары / блюда
      </h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200 dark:border-gray-600"
            onClick={() => handleCardClick(product)}
            layoutId={`product-${product.id}`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-gray-900 dark:text-white">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {product.price}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-[#00000058] bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl max-w-md w-full m-4 relative text-gray-900 dark:text-white"
              layoutId={`product-${selectedProduct.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {selectedProduct.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-xl">
                  {selectedProduct.price}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {selectedProduct.description}
                </p>
                <div className="flex gap-4">
                  <Button>В корзину</Button>
                  <Button onClick={handleCloseModal} mode="outline">
                    Закрыть
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
