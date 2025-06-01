import { Button } from "@telegram-apps/telegram-ui";
import { Search, X } from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface FilterProductsProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  categories: string[];
  setSelectedCategory: (category: string) => void;
  selectedCategory: string;
}

export default function FilterProducts({
  searchQuery,
  setSearchQuery,
  categories,
  setSelectedCategory,
  selectedCategory,
}: FilterProductsProps) {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsCategoriesOpen(false);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Поиск блюд..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>

          <div
            className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto"
            id="filter_btns"
          >
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-gray-700 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category === "all" ? "Все" : category}
              </Button>
            ))}
          </div>
          <div className="w-full md:w-auto">
            <Button
              className="px-4 py-2 rounded-xl whitespace-nowrap transition-all bg-gray-700 text-white w-full"
              id="all_cat_btns"
              onClick={() => setIsCategoriesOpen(true)}
            >
              Категории
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isCategoriesOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setIsCategoriesOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md mx-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsCategoriesOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X size={24} />
              </button>

              <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
                Категории
              </h2>

              <div className="flex flex-col gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className={`w-full px-4 py-3 rounded-xl text-lg transition-all ${
                      selectedCategory === category
                        ? "bg-gray-700 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                    }`}
                  >
                    {category === "all" ? "Все" : category}
                  </Button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
