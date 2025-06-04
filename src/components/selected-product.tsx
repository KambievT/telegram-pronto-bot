import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@telegram-apps/telegram-ui";
import { useCartStore } from "@/stores/cart.store";
import { toast } from "react-toastify";

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
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation(); // Prevent card click when clicking the button
    addItem({
      id: product.id.toString(),
      name: product.name,
      price: parseFloat(product.price),
      image: product.image,
    });
    toast.success(`${product.name} добавлен в корзину ! `);
  };
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
          <div className="relative w-full h-[500px]">
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.name}
              fill={true}
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {selectedProduct.name}
              </h3>
              <p className="text-white mb-4 text-xl">
                {selectedProduct.price} ₽
              </p>
              <p className="text-gray-200 mb-6">
                {selectedProduct.description}
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={(e) => handleAddToCart(e, selectedProduct)}
                  className="bg-gray-700/90 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors"
                >
                  В корзину
                </Button>
                <Button
                  onClick={handleCloseModal}
                  className="bg-gray-700/90 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors"
                >
                  Закрыть
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
