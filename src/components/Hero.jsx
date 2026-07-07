'use client'

import Image from 'next/image'
import { motion } from "framer-motion";
import { Zap, CheckCircle, TrendingUp, Sparkles } from "lucide-react";
import heroImg from "../assets/hero.jpeg";

const Hero = ({ lang }) => {
  const content = {
    en: {
      badge: "🚀 Premier Digital Agency",
      title: "DoGehter",
      titleHighlight: "Digital Solutions",
      desc1: "We create",
      descSpan1: "stunning websites",
      descAnd: "and",
      descSpan2: "powerful POS systems",
      descEnd:
        "that help businesses grow, increase sales, and streamline operations.",
      stat1: "Response",
      stat2: "Projects",
      stat3: "Growth",
      stat4: "Satisfaction",
    },
    ar: {
      badge: "🚀 وكالة رقمية رائدة",
      title: "DoGehter",
      titleHighlight: "الحلول الرقمية",
      desc1: "نحن نصنع",
      descSpan1: "مواقع ويب مذهلة",
      descAnd: "و",
      descSpan2: "أنظمة نقاط بيع قوية",
      descEnd: "تساعد الشركات على النمو وزيادة المبيعات وتبسيط العمليات.",
      stat1: "الرد",
      stat2: "مشاريع",
      stat3: "نمو",
      stat4: "رضا",
    },
  };

  const t = content[lang];
  const isRTL = lang === "ar";

  return (
    <section
      id="home"
      className={`pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-28 lg:pb-28 relative overflow-hidden ${
        isRTL ? "rtl" : "ltr"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/5 via-transparent to-primary-dark/5 dark:from-primary-light/10 dark:via-transparent dark:to-primary-dark/10"></div>

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-primary-light/5 dark:bg-primary-light/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-light/10 to-primary-dark/10 text-primary-dark dark:text-primary-light font-medium mb-4 border border-primary-light/20 dark:border-primary-light/30 ${
                isRTL ? "flex-row" : "flex-row"
              }`}
            >
              <Sparkles className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
              {t.badge}
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 lg:mb-6 leading-tight">
              {t.title}
              <span className="block bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent mt-2">
                {t.titleHighlight}
              </span>
            </h1>

            <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl lg:text-2xl mb-8 lg:mb-12 max-w-xl leading-relaxed">
              {t.desc1}{" "}
              <span className="text-primary-dark dark:text-primary-light font-semibold">
                {t.descSpan1}
              </span>{" "}
              {t.descAnd}{" "}
              <span className="text-primary-dark dark:text-primary-light font-semibold">
                {t.descSpan2}
              </span>{" "}
              {t.descEnd}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 bg-white dark:bg-dark-card rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 dark:border-dark-light">
              {[
                {
                  icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
                  value: "24h",
                  label: t.stat1,
                },
                {
                  icon: <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />,
                  value: "2+",
                  label: t.stat2,
                },
                {
                  icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />,
                  value: "100%",
                  label: t.stat3,
                },
                {
                  icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />,
                  value: "98%",
                  label: t.stat4,
                },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary-light/10 to-primary-dark/10 dark:from-primary-light/20 dark:to-primary-dark/20 rounded-lg mb-2">
                    <div className="text-primary-dark dark:text-primary-light">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative bg-gradient-to-br from-primary-light to-primary-dark rounded-2xl sm:rounded-3xl p-1 sm:p-2 shadow-2xl">
              <div className="bg-white dark:bg-dark-card rounded-xl sm:rounded-2xl p-1 sm:p-2 overflow-hidden">
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 flex items-center justify-between mb-3 sm:mb-4">
                  <div className="text-white/90 text-xs sm:text-sm md:text-base text-center flex-1 px-2 font-mono">
                    dashboard.DoGehter.com
                  </div>
                  <div
                    className={`flex items-center gap-2 sm:gap-3 shrink-0 ${
                      isRTL ? "order-1" : ""
                    }`}
                  >
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-red-500 shadow-lg shadow-red-500/50"></div>
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50"></div>
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <Image
                    src={heroImg}
                    alt="DoGether Tech Software Solutions - شركة برمجة في مصر | Web Development, Mobile Apps, POS Systems Egypt"
                    className="w-full h-auto rounded-lg sm:rounded-xl object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className={`absolute -top-3 ${
                isRTL ? "-right-3 xs:-right-4" : "-left-3 xs:-left-4"
              } w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 bg-gradient-to-r from-primary-light to-primary rounded-xl sm:rounded-2xl shadow-xl hidden xs:block ${
                isRTL ? "rotate-12" : "-rotate-12"
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm xs:text-base">
                POS
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className={`absolute -bottom-3 ${
                isRTL ? "-left-3 xs:-left-4" : "-right-3 xs:-right-4"
              } w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-primary-dark to-primary-darker rounded-xl sm:rounded-2xl shadow-xl hidden xs:block ${
                isRTL ? "-rotate-12" : "rotate-12"
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm xs:text-base">
                Web
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
