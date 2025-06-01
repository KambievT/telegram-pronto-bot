import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description?: string;
}

interface props {
  product: Product;
  handleCardClick: (product: Product) => void;
}

export default function ProductCard({ product, handleCardClick }: props) {
  return (
    <>
      <motion.div
        className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200 dark:border-gray-600"
        onClick={() => handleCardClick(product)}
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
    </>
  );
}
