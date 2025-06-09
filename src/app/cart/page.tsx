"use client";
import { useCartStore } from "@/stores/cart.store";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";
import { Button } from "@telegram-apps/telegram-ui";

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
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-white py-16 px-4 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center bg-white/80 rounded-3xl shadow-2xl p-10 relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-100 rounded-full blur-2xl opacity-30 animate-pulse z-0" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-100 rounded-full blur-2xl opacity-20 animate-pulse z-0" />
          <div className="relative z-10 flex flex-col items-center">
            <svg
              className="w-20 h-20 mb-6 text-orange-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#fbbf24"
                strokeWidth="2"
                fill="#fffbe6"
              />
              <path
                d="M8 12h8M8 16h8"
                stroke="#fbbf24"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="9" cy="9" r="1" fill="#fbbf24" />
              <circle cx="15" cy="9" r="1" fill="#fbbf24" />
            </svg>
            <h1 className="text-3xl font-extrabold mb-4 text-orange-900">
              Корзина пуста
            </h1>
            <p className="text-orange-700 mb-8 text-lg">
              Добавьте товары из меню, чтобы сделать заказ
            </p>
            <Link
              href="/menu"
              className="inline-block bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:from-orange-600 hover:to-yellow-500 transition-all text-lg"
            >
              Перейти в меню
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-white py-16 px-4 mb-20 relative overflow-x-hidden">
      <ToastContainer />
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-100 rounded-full blur-2xl opacity-30 animate-pulse z-0" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-100 rounded-full blur-2xl opacity-20 animate-pulse z-0" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-orange-900">
            Корзина
          </h1>
          <button
            onClick={handleClearCart}
            className="text-red-500 border border-red-200 py-2 px-4 rounded-2xl hover:text-white hover:bg-red-500 transition-all font-semibold shadow-sm"
          >
            Очистить корзину
          </button>
        </div>

        <div className="space-y-6">
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className={
                  `relative h-44 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-orange-100 via-yellow-50 to-white border border-orange-100 flex ` +
                  "sm:h-44 " +
                  "h-56 min-h-[200px]"
                }
              >
                <div className="relative w-40 h-full flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.jpg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 gap-4">
                  <div className="text-orange-900">
                    <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                    <p className="text-orange-700 text-lg font-semibold">
                      {item.price} ₽
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-3 py-2 shadow">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 flex items-center justify-center text-orange-600 bg-orange-100 hover:bg-orange-200 rounded-full text-xl font-bold transition-all"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-orange-900 font-bold text-lg">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 flex items-center justify-center text-orange-600 bg-orange-100 hover:bg-orange-200 rounded-full text-xl font-bold transition-all"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id, item.name)}
                      className="text-red-500 hover:text-white hover:bg-red-500 border border-red-200 rounded-xl px-4 py-2 font-semibold transition-all shadow-sm"
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-10 bg-white/90 rounded-3xl shadow-2xl p-8 flex flex-col items-center border border-orange-100">
          <div className="flex justify-between items-center w-full mb-6">
            <span className="text-xl font-semibold text-orange-900">
              Итого:
            </span>
            <span className="text-3xl font-extrabold text-orange-700">
              {totalPrice()} ₽
            </span>
          </div>
          <Link href="/pay-cart" className="w-full">
            <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-4 rounded-xl font-bold shadow-lg hover:from-orange-600 hover:to-yellow-500 transition-all text-lg">
              Оформить заказ
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
