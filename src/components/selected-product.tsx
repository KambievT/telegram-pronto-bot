import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@telegram-apps/telegram-ui";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description?: string; // Added optional description field
}

interface props {
  selectedProduct: Product;
  handleCloseModal: () => void;
}

export default function SelectedProduct({
  selectedProduct,
  handleCloseModal,
}: props) {
  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleCloseModal}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl max-w-md w-full relative text-gray-900 dark:text-white"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-64">
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.name}
              fill={true}
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">
              {selectedProduct.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-xl">
              {selectedProduct.price} ₽
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {selectedProduct.description}
            </p>
            <div className="flex gap-4">
              <Button className="inline-flex items-center px-4 py-3 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 cursor-pointer hover:-translate-y-1">
                В корзину
              </Button>
              <Button
                onClick={handleCloseModal}
                className="inline-flex items-center px-4 py-3 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                Закрыть
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
