"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProductCard from "@/components/product-card";
import SelectedProduct from "@/components/selected-product";
import { motion } from "framer-motion";
import { Button } from "@telegram-apps/telegram-ui";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description?: string; // Added optional description field
}

const products: Product[] = [
  {
    id: 1,
    name: "Гиро с курицей",
    description:
      "Гиро с курицей — это неповторимое гастрономическое произведение,которое погружает в атмосферу традиционного арабского блюда.",
    image:
      "https://avatars.mds.yandex.net/get-sprav-products/1521147/2a00000191dc54204fcba1a76cff4a9339cd/orig",
    price: "225 ₽",
    category: "Шаурма",
  },
  {
    id: 2,
    name: "Классический бургер",
    description:
      "Булка, котлета говяжья, лук красный, сыр чеддер, томаты, салат, соус песто",
    image:
      "https://avatars.mds.yandex.net/get-sprav-products/13672565/2a00000191e5ea9400c534d4276d4951f5aa/orig",
    price: "190 ₽",
    category: "Бургеры",
  },
  {
    id: 3,
    name: "Пицца Цезарь 30 и 35 см",
    description:
      "Соус цезарь, филе цыпленка, салат, пармезан, моцарелла, томаты",
    image:
      "https://avatars.mds.yandex.net/get-sprav-products/1424222/2a000001920a0622ab76d6fe95829d4bc09a/orig",
    price: "270 ₽",
    category: "Пицца",
  },
  {
    id: 4,
    name: "Таше с курицей",
    description:
      "В мире фастфуда таше с курицей занимает особое место. Это блюдо, которое создается из курицы, которая приобретает золотистую корочку, зажаренную на гриле.",
    image:
      "https://avatars.mds.yandex.net/get-sprav-products/2413620/2a00000191dc5fb80618bfd729cbc7b3e4ca/orig",
    price: "229 ₽",
    category: "Шаурма",
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
    <section className="py-20 px-4 relative mb-10 bg-gradient-to-br from-orange-50 via-yellow-50 to-white overflow-x-hidden">
      <ToastContainer />
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-orange-900 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Популярные блюда
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl text-orange-700 text-center mb-12 max-w-2xl mx-auto font-medium drop-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Попробуйте наши самые популярные блюда и напитки
        </motion.p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:overflow-visible overflow-x-auto pb-4 md:pb-0"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="min-w-[270px] md:min-w-0"
              style={{ scrollSnapAlign: "start" }}
            >
              <ProductCard
                product={product}
                handleCardClick={handleCardClick}
              />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/menu">
            <Button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white p-3 rounded-2xl font-bold shadow-lg hover:from-orange-600 hover:to-yellow-500 transition-all">
              Смотреть все меню
            </Button>
          </Link>
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
