import { useCartStore } from "@/stores/cart.store";
import { Home, NotebookText, ShoppingBag, UserPen } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const { items } = useCartStore();

  const quantityItems = items.length;

  const shakeAnimation = {
    initial: { rotate: 0 },
    animate: {
      rotate: [0, -10, 10, -10, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  };

  return (
    <footer className="bg-gradient-to-r from-orange-100 via-yellow-50 to-white flex flex-col items-center justify-center my_rounded fixed bottom-0 w-full text-orange-900 py-7 shadow-2xl z-20">
      <nav className="flex items-center gap-10" id="footer__nav">
        <Link
          href="/"
          className="flex flex-col items-center hover:text-orange-600 transition-colors"
        >
          <Home size={32} />
          <span className="text-sm mt-1 font-semibold">Главная</span>
        </Link>
        <Link
          href="/menu"
          className="flex flex-col items-center hover:text-orange-600 transition-colors"
        >
          <NotebookText size={32} />
          <span className="text-sm mt-1 font-semibold">Меню</span>
        </Link>
        <Link
          href="/cart"
          className="flex flex-col items-center relative hover:text-orange-600 transition-colors"
        >
          <div className="absolute w-6 h-6 bg-orange-400 right-2 rounded-full text-center z-10 text-white font-bold flex items-center justify-center text-xs">
            {quantityItems}
          </div>
          <motion.div
            initial="initial"
            animate={quantityItems > 0 ? "animate" : "initial"}
            variants={shakeAnimation}
          >
            <ShoppingBag size={32} />
          </motion.div>
          <span className="text-sm mt-1 font-semibold">Корзина</span>
        </Link>
        <Link
          href="/profile"
          className="flex flex-col items-center hover:text-orange-600 transition-colors"
        >
          <UserPen size={32} />
          <span className="text-sm mt-1 font-semibold">Профиль</span>
        </Link>
      </nav>

      <div className="footer__content text-center w-full max-w-2xl px-4 mt-4">
        <div className="flex flex-wrap justify-center gap-8 mb-4">
          <a
            href="/about"
            className="text-sm hover:text-orange-600 transition-colors duration-200 font-semibold"
          >
            О нас
          </a>
          <a
            href="/delivery"
            className="text-sm hover:text-orange-600 transition-colors duration-200 font-semibold"
          >
            Доставка
          </a>
          <a
            href="/contacts"
            className="text-sm hover:text-orange-600 transition-colors duration-200 font-semibold"
          >
            Контакты
          </a>
        </div>
        <div className="flex justify-center gap-6 mb-2">
          <a
            href="#"
            className="hover:text-orange-600 transition-colors"
            aria-label="Instagram"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
            </svg>
          </a>
          <a
            href="#"
            className="hover:text-orange-600 transition-colors"
            aria-label="VK"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 8.5C3 7.12 4.12 6 5.5 6h13c1.38 0 2.5 1.12 2.5 2.5v7c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 18 3 16.88 3 15.5v-7z" />
              <path d="M7 9v3c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2h2c.55 0 1-.45 1-1V9" />
            </svg>
          </a>
          <a
            href="#"
            className="hover:text-orange-600 transition-colors"
            aria-label="Telegram"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 2L11 13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </a>
        </div>
        <div className="border-t border-orange-200 pt-4">
          <p className="text-xs text-orange-400">
            © 2025 Pronto. Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}
