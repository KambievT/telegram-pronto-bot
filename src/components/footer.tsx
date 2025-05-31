import { Home, NotebookText, ShoppingBag, UserPen } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-700/80 backdrop-blur-2xl flex flex-col items-center justify-center my_rounded fixed bottom-0 w-full text-white py-5">
      <nav className="flex items-center gap-8" id="footer__nav">
        <Link href="/" className="flex flex-col items-center">
          <Home size={32} />
          <span className="text-sm mt-1">Главная</span>
        </Link>
        <Link href="/menu" className="flex flex-col items-center">
          <NotebookText size={32} />
          <span className="text-sm mt-1">Меню</span>
        </Link>
        <div className="flex flex-col items-center">
          <ShoppingBag size={32} />
          <span className="text-sm mt-1">Корзина</span>
        </div>
        <Link href="/profile" className="flex flex-col items-center">
          <UserPen size={32} />
          <span className="text-sm mt-1">Профиль</span>
        </Link>
      </nav>

      <div className="footer__content  text-center w-full max-w-2xl px-4">
        <div className="flex flex-wrap justify-center gap-8 mb-4">
          <a
            href="/about"
            className="text-sm hover:text-gray-300 transition-colors duration-200"
          >
            О нас
          </a>
          <a
            href="/delivery"
            className="text-sm hover:text-gray-300 transition-colors duration-200"
          >
            Доставка
          </a>
          <a
            href="/contacts"
            className="text-sm hover:text-gray-300 transition-colors duration-200"
          >
            Контакты
          </a>
        </div>
        <div className="border-t border-gray-600 pt-4">
          <p className="text-xs text-gray-400">
            © 2025 Pronto. Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}
