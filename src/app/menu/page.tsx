"use client";
import SelectedProduct from "@/components/selected-product";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import PageTransition from "@/components/page-transition";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description?: string; // Added optional description field
}

export default function Menu() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

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
  return (
    <PageTransition>
      <section className="py-12 px-4 relative mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products?.map((product) => (
            <motion.div
              key={product.id}
              onClick={() => handleCardClick(product)}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200 dark:border-gray-600"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="relative w-full h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill={true}
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-4 text-gray-900 dark:text-white">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
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
    </PageTransition>
  );
}
