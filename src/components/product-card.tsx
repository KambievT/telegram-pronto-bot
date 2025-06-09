import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@telegram-apps/telegram-ui";

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
    <motion.div
      className="bg-gradient-to-br from-orange-100 via-yellow-50 to-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer border border-orange-200 relative group"
      onClick={() => handleCardClick(product)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="relative w-full h-[260px] md:h-[220px]">
        <Image
          src={product.image}
          alt={product.name}
          fill={true}
          style={{ objectFit: "cover" }}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute top-2 left-2 bg-white/80 text-orange-700 text-xs px-3 py-1 rounded-full shadow font-semibold">
          {product.category}
        </div>
      </div>
      <div className="p-5 pb-4 flex flex-col gap-2">
        <h3 className="text-lg font-bold mb-1 text-orange-900 truncate">
          {product.name}
        </h3>
        <p className="text-sm text-orange-700 mb-2 line-clamp-2 min-h-[38px]">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-extrabold text-orange-600">
            {product.price}
          </span>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick(product);
            }}
            className="hidden md:inline-flex bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-4 py-2 rounded-xl font-bold shadow hover:from-orange-600 hover:to-yellow-500 transition-all text-base"
          >
            Подробнее
          </Button>
        </div>
      </div>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          handleCardClick(product);
        }}
        className="md:hidden w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-4 py-3 rounded-b-3xl font-bold shadow hover:from-orange-600 hover:to-yellow-500 transition-all text-base"
      >
        Подробнее
      </Button>
    </motion.div>
  );
}
