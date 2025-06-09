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
          className="relative max-w-md w-full overflow-hidden shadow-2xl rounded-3xl border-2 border-orange-100"
          style={{
            background: `linear-gradient(135deg, #fff 80%, #ffe5b2 100%)`,
            boxShadow: "0 8px 32px 0 rgba(255, 165, 0, 0.15)",
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-[220px] md:h-[320px] min-h-[140px]">
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.name}
              fill={true}
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="absolute top-2 left-2 bg-white/80 text-orange-700 text-xs px-3 py-1 rounded-full shadow font-semibold">
              {selectedProduct.name}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-extrabold mb-2 text-orange-900">
              {selectedProduct.name}
            </h3>
            <p className="text-lg text-orange-700 mb-4">
              {selectedProduct.price}
            </p>
            <p className="text-base text-orange-800 mb-6 min-h-[48px]">
              {selectedProduct.description}
            </p>
            <div className="flex gap-4 flex-col md:flex-row">
              <Button
                onClick={(e) => handleAddToCart(e, selectedProduct)}
                className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-6 py-3 rounded-xl font-bold shadow hover:from-orange-600 hover:to-yellow-500 transition-all text-lg w-full md:w-auto"
              >
                В корзину
              </Button>
              <Button
                onClick={handleCloseModal}
                className="bg-white text-orange-700 border-2 border-orange-400 hover:bg-orange-50 rounded-xl px-6 py-3 font-bold shadow transition-all text-lg w-full md:w-auto"
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
