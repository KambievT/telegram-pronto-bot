"use client";
import { useCartStore } from "@/stores/cart.store";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";

export default function Cart() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } =
    useCartStore();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id);
      toast.info("Товар удален из корзины");
      return;
    }
    updateQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id: string, name: string) => {
    removeItem(id);
    toast.info(`${name} удален из корзины`);
  };

  const handleClearCart = () => {
    clearCart();
    toast.info("Корзина очищена");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-8">Корзина пуста</h1>
          <p className="text-gray-600 mb-8">
            Добавьте товары из меню, чтобы сделать заказ
          </p>
          <Link
            href="/menu"
            className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Перейти в меню
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 mb-20">
      <ToastContainer />
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Корзина</h1>
          <button
            onClick={handleClearCart}
            className="text-red-500 border-red-500 border-1 py-2 px-2 rounded-2xl  hover:text-white  hover:bg-red-500 transition-all cursor-pointer"
          >
            Очистить корзину
          </button>
        </div>

        <div className="space-y-4">
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="relative h-40 rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={item.image || "/placeholder.jpg"}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
                <div className="absolute inset-0 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  <div className="text-white">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-200">{item.price} ₽</p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-2 py-1">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        className="w-6 h-6 flex items-center justify-center text-white hover:bg-white/20 rounded-full transition-colors"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        className="w-6 h-6 flex items-center justify-center text-white hover:bg-white/20 rounded-full transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id, item.name)}
                      className="text-red-500 hover:text-red-600 transition-colors"
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Итого:</span>
            <span className="text-2xl font-bold">{totalPrice()} ₽</span>
          </div>
          <button className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
}
