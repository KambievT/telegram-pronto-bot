"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ShortDescription() {
  return (
    <section className="py-20 px-4 text-center bg-gradient-to-br from-orange-50 via-yellow-50 to-white relative overflow-hidden">
      {/* Декоративные круги */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-orange-100 rounded-full blur-2xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-100 rounded-full blur-2xl opacity-20 animate-pulse" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-orange-900 drop-shadow-lg">
            Добро пожаловать в Pronto Cafe
          </h2>
          <motion.p
            className="text-2xl md:text-2xl text-orange-700 leading-relaxed font-medium drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            &quot;Pronto Cafe — это уютное место с современным интерьером, где
            можно насладиться вкусной едой. Гостям нравится пицца
            &quot;Жульен&quot; и &quot;Цезарь&quot;, а также бургеры с сочными
            котлетами и свежими овощами.&quot;
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// Секция отзывов
export function ReviewsSection() {
  return (
    <section className="py-20 px-4 text-center bg-gradient-to-br from-yellow-50 via-orange-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-2xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-100 rounded-full blur-2xl opacity-10 animate-pulse" />
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-orange-900 drop-shadow-lg">
          Отзывы наших гостей
        </h2>
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-1 text-yellow-400 text-2xl">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="relative w-8 h-8 inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-8 h-8 drop-shadow-lg"
                >
                  <defs>
                    <linearGradient
                      id={`star-gradient-main-${i}`}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#ffe066" />
                      <stop offset="100%" stopColor="#ffb300" />
                    </linearGradient>
                  </defs>
                  <polygon
                    points="16,2 20,12 31,12 22,19 25,30 16,23 7,30 10,19 1,12 12,12"
                    fill={i < 4 ? `url(#star-gradient-main-${i})` : "none"}
                    stroke="#f59e42"
                    strokeWidth="1.5"
                    filter="drop-shadow(0 2px 4px #fbbf24aa)"
                  />
                </svg>
                {i === 4 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-8 h-8 drop-shadow-lg absolute top-0 left-0"
                  >
                    <defs>
                      <linearGradient
                        id="star-gradient-half"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#ffe066" />
                        <stop offset="100%" stopColor="#ffb300" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="16,2 20,12 31,12 22,19 25,30 16,23 7,30 10,19 1,12 12,12"
                      fill="url(#star-gradient-half)"
                      stroke="#f59e42"
                      strokeWidth="1.5"
                      filter="drop-shadow(0 2px 4px #fbbf24aa)"
                      style={{ clipPath: "inset(0 50% 0 0)" }}
                    />
                  </svg>
                )}
              </span>
            ))}
          </div>
          <div className="text-orange-700 text-lg font-semibold mt-2">
            Средний рейтинг: 4,6
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Иван Справедливов",
              text: "Всем доброго времени суток! Всё понравилось, всё вкусно и все остались довольны, однозначно рекомендую посетить или заказать на доставку, это тоже у них есть.Процветания и успехов, все звёздочки ваши заслуженно 🤝😉🤗",
            },
            {
              name: "Асият Дахова",
              text: "Советую всем посетить кофе Пронто. Все было сделано быстро, хорошо, вкусно, бариста очень приветливый, все понравилось.",
            },
            {
              name: "Марина Остапенко",
              text: "Хорошее заведение. Часто заказываем, дети в восторге. Очень вкусные пиццы и роллы.Дети особенно любят твистер и наггетсы. Недавно в меню появились десерты, советую попробовать.",
            },
          ].map((review, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-orange-100 via-yellow-50 to-white rounded-2xl shadow-xl p-8 flex flex-col items-center animate-fade-in"
            >
              <div className="w-14 h-14 rounded-full bg-orange-200 flex items-center justify-center text-2xl font-bold text-orange-700 mb-4">
                {review.name[0]}
              </div>
              <p className="text-orange-900 font-semibold mb-2">
                {review.name}
              </p>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-8 h-8 drop-shadow-lg transition-transform duration-200 hover:scale-110"
                  >
                    <defs>
                      <linearGradient
                        id={`star-gradient-${i}`}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#ffe066" />
                        <stop offset="100%" stopColor="#ffb300" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="16,2 20,12 31,12 22,19 25,30 16,23 7,30 10,19 1,12 12,12"
                      fill={`url(#star-gradient-${i})`}
                      stroke="#f59e42"
                      strokeWidth="1.5"
                      filter="drop-shadow(0 2px 4px #fbbf24aa)"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-orange-700 text-base">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
