import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Быстрая получение",
    description: "Получите ваш заказ в течение 15-30 минут после оформления",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Гарантия качества и свежести",
    description: "Все блюда проходят тщательную проверку перед отправкой",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Безопасная оплата",
    description:
      "Используйте различные способы оплаты с гарантией безопасности",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    title: "Доступные цены",
    description: "Средний чек всего ~400 рублей за вкусный и сытный обед",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-white relative overflow-hidden">
      {/* Декоративные круги */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-2xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-100 rounded-full blur-2xl opacity-20 animate-pulse" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-orange-900 mb-4 drop-shadow-lg">
            Почему выбирают нас
          </h2>
          <p className="text-xl md:text-2xl text-orange-700 max-w-2xl mx-auto font-medium drop-shadow">
            Мы стремимся предоставить лучший сервис и качество для наших
            клиентов
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-orange-200/80 via-yellow-100/80 to-white/80 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-orange-500 mb-6 text-5xl flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-orange-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-orange-700 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
