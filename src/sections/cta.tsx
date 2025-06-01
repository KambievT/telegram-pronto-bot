import { NotebookText } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 bg-gray-700 mb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Готовы заказать наши блюда?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Можете перейти в меню и посмотреть что у нас есть
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.29-.49.8-.75 3.12-1.36 5.2-2.26 6.24-2.7 2.98-1.24 3.6-1.45 4.01-1.45.09 0 .28.02.4.09.11.06.18.14.21.24.03.1.04.21.01.31z" />
              </svg>
              Перейти в телеграмм бота
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              <NotebookText className="mx-2" />
              Смотреть меню
            </a>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="p-8 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">
                Связь с нами
              </h3>
              <p className="text-blue-100">+799999999</p>
            </div>
            <div className="p-8 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">
                Время работы
              </h3>
              <p className="text-blue-100">С 11:00 до 23:00</p>
            </div>
            <div className="p-8 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">
                Наш адрес
              </h3>
              <p className="text-blue-100">ул.Ленина,125,село Успенское</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
