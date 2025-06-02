"use client";
import SelectedProduct from "@/components/selected-product";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import FilterProducts from "@/components/filterProducts";
import { useCartStore } from "@/stores/cart.store";
import { toast, ToastContainer } from "react-toastify";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description?: string;
}

export default function Menu() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { addItem, items } = useCartStore();

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

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

  const getItemQuantity = (productId: number) => {
    return (
      items.find((item) => item.id === productId.toString())?.quantity || 0
    );
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://tg-pronto-backend-production.up.railway.app/menu/get-menu",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-11 w-11 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
      <ToastContainer />
      <section className="py-12 px-4 relative mb-20">
        <h1 className="text-3xl text-center mb-10">Наше меню</h1>

        <FilterProducts
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setSearchQuery={setSearchQuery}
          categories={categories}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
              onClick={() => handleCardClick(product)}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg duration-300 cursor-pointer border border-gray-200 dark:border-gray-600 hover:scale-105 transition-all"
              whileTap={{ scale: 0.98 }}
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
                <div className="flex justify-between items-center">
                  <p className="text-gray-600 dark:text-gray-300">
                    {product.price} ₽
                  </p>
                  <div className="flex items-center gap-2">
                    {getItemQuantity(product.id) > 0 && (
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        В корзине: {getItemQuantity(product.id)}
                      </span>
                    )}
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className="bg-gray-800 text-white px-4 py-2 rounded hover:bg- transition-colors"
                    >
                      В корзину
                    </button>
                  </div>
                </div>
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
    </>
  );
}
