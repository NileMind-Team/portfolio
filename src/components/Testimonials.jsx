'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  CheckCircle,
  Building,
  Calendar,
  ExternalLink,
} from "lucide-react";

// ملاحظة: هذا القسم يعرض مشاريع حقيقية نفّذناها فعلاً لعملاء حقيقيين —
// لا آراء أو أسماء أو إحصائيات مختلقة. هذا مطلب أساسي لمعايير الثقة (E-E-A-T)
// في Google، ولمصداقيتك أمام أي عميل يتحقق من المشاريع.
const Testimonials = ({ lang }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isRTL = lang === "ar";

  const content = {
    en: {
      badge: "Work We've Delivered",
      title: "Projects We've",
      titleHighlight: "Delivered",
      subtitle:
        "Real projects we built and shipped for real clients across different industries",
      keyImprovements: "What We Built",
      projectOutcome: "The Challenge We Solved",
      moreProjects: "More Projects",
      visitProject: "Visit project",
      liveBadge: "Live project",
    },
    ar: {
      badge: "أعمال نفّذناها",
      title: "مشاريع",
      titleHighlight: "نفّذناها",
      subtitle:
        "مشاريع حقيقية بنيناها وسلّمناها لعملاء فعليين عبر صناعات مختلفة",
      keyImprovements: "ما نفّذناه",
      projectOutcome: "التحدي الذي حللناه",
      moreProjects: "مشاريع أخرى",
      visitProject: "زيارة المشروع",
      liveBadge: "مشروع مباشر",
    },
  };

  const t = content[lang];

  // مشاريع حقيقية — نفس المشاريع المعروضة في قسم الأعمال، بزاوية القيمة والتحدي.
  const projects = [
    {
      nameEn: "Sharm Kite Surf",
      nameAr: "شرم كايت سيرف",
      roleEn: "Tourism & Water Sports",
      roleAr: "سياحة ورياضات مائية",
      companyEn: "Sharm Kite Surf — Sharm El Sheikh",
      companyAr: "شرم كايت سيرف — شرم الشيخ",
      outcomeEn:
        "A water-sports center in Sharm El Sheikh needed to reach international tourists and take bookings directly instead of relying on middlemen. We built a multilingual online booking platform that shows activities and lets visitors book before they travel.",
      outcomeAr:
        "مركز رياضات مائية في شرم الشيخ يحتاج الوصول للسائح الأجنبي والحجز المباشر بدل الوسطاء. بنينا منصة حجز أونلاين متعددة اللغات تعرض الأنشطة وتتيح للزائر الحجز قبل سفره.",
      image: "SK",
      dateEn: "4 weeks",
      dateAr: "٤ أسابيع",
      url: "https://sharmkitesurf.com",
      featuresEn: [
        "Online booking system",
        "Multi-language support",
        "Activities showcase",
      ],
      featuresAr: [
        "نظام حجز أونلاين",
        "دعم متعدد اللغات",
        "عرض الأنشطة",
      ],
    },
    {
      nameEn: "El Zawy Group",
      nameAr: "مجموعة الزعوي",
      roleEn: "Retail & E-commerce",
      roleAr: "تجزئة وتجارة إلكترونية",
      companyEn: "El Zawy Group",
      companyAr: "مجموعة الزعوي",
      outcomeEn:
        "A retail group needed both a professional corporate site and a full online store. We delivered a responsive company website (Chicken One) plus an integrated e-commerce platform with product management, cart and secure checkout.",
      outcomeAr:
        "مجموعة تجزئة تحتاج موقع شركة احترافي ومتجراً إلكترونياً متكاملاً. سلّمنا موقع شركة متجاوباً (تشيكن ون) ومنصة تجارة إلكترونية بإدارة منتجات وسلة تسوق ودفع آمن.",
      image: "EZ",
      dateEn: "3–5 weeks",
      dateAr: "٣–٥ أسابيع",
      url: "https://elzawy-new.com",
      featuresEn: [
        "Responsive company site",
        "Full online store",
        "Admin dashboard",
      ],
      featuresAr: [
        "موقع شركة متجاوب",
        "متجر إلكتروني متكامل",
        "لوحة إدارة",
      ],
    },
    {
      nameEn: "Fateer wi 3asal",
      nameAr: "فطير وعسل",
      roleEn: "Restaurants & Food",
      roleAr: "مطاعم وطعام",
      companyEn: "Fateer wi 3asal",
      companyAr: "فطير وعسل",
      outcomeEn:
        "A food business needed online ordering and delivery management. We built a platform for online orders, delivery handling and menu management with customer reviews.",
      outcomeAr:
        "منشأة طعام تحتاج طلباً أونلاين وإدارة توصيل. بنينا منصة للطلب أونلاين وإدارة التوصيل والقائمة مع تقييمات العملاء.",
      image: "FA",
      dateEn: "4 weeks",
      dateAr: "٤ أسابيع",
      url: "https://fateerwasal.com",
      featuresEn: [
        "Online ordering",
        "Delivery management",
        "Menu management",
      ],
      featuresAr: [
        "طلب أونلاين",
        "إدارة التوصيل",
        "إدارة القائمة",
      ],
    },
    {
      nameEn: "TriPyramids",
      nameAr: "TriPyramids",
      roleEn: "Travel & Tourism",
      roleAr: "Travel & Tourism",
      companyEn: "TriPyramids — Egypt Travel",
      companyAr: "TriPyramids — Egypt Travel",
      outcomeEn: "A modern travel platform focused on helping visitors discover and plan memorable Egypt experiences.",
      outcomeAr: "منصة سفر عصرية تساعد الزوار على اكتشاف وتجهيز تجارب مميزة في مصر.",
      image: "TP",
      dateEn: "Live",
      dateAr: "مباشر",
      url: "https://tripyramids.online/",
      featuresEn: ["Travel experience showcase", "Responsive design", "Live website"],
      featuresAr: ["عرض التجارب السياحية", "تصميم متجاوب", "موقع مباشر"],
    },
    {
      nameEn: "Amjad Estate",
      nameAr: "Amjad Estate",
      roleEn: "Real Estate",
      roleAr: "Real Estate",
      companyEn: "Amjad — Smart Real Estate",
      companyAr: "أمجاد — عقارات ذكية",
      outcomeEn: "A premium real-estate experience presenting properties and investment opportunities through a polished, conversion-focused interface.",
      outcomeAr: "تجربة عقارية راقية لعرض العقارات والفرص الاستثمارية من خلال واجهة أنيقة تركز على التحويل.",
      image: "AE",
      dateEn: "Live",
      dateAr: "مباشر",
      url: "https://amjad-estate.space/",
      featuresEn: ["Property showcase", "Premium visual system", "Responsive design"],
      featuresAr: ["عرض العقارات", "هوية بصرية راقية", "تصميم متجاوب"],
    },
  ];

  const miniProjects = [
    {
      nameEn: "Aruqah",
      nameAr: "أروقة",
      descEn: "Real-estate platform with smart search & analytics",
      descAr: "منصة عقارية ببحث ذكي وتحليلات وإدارة عقارات",
      roleEn: "Real Estate",
      roleAr: "عقارات",
    },
    {
      nameEn: "Cashier Tech",
      nameAr: "نظام كاشير",
      descEn: "POS system with real-time inventory & sales analytics",
      descAr: "نظام نقاط بيع بإدارة مخزون فورية وتحليلات مبيعات",
      roleEn: "POS System",
      roleAr: "نقاط بيع",
    },
    {
      nameEn: "Cosmetics Store",
      nameAr: "متجر مستحضرات تجميل",
      descEn: "Elegant e-commerce store with secure checkout",
      descAr: "متجر إلكتروني أنيق بعرض منتجات ودفع آمن",
      roleEn: "E-commerce",
      roleAr: "تجارة إلكترونية",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const current = projects[activeIndex];

  return (
    <section id="testimonials" className="py-16 lg:py-20 bg-white dark:bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary-light/10 dark:bg-primary-light/20 mb-6">
            <Quote
              className="text-primary-dark dark:text-primary-light"
              size={28}
            />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
            {t.title}{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              {t.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Project Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRTL ? 100 : -100 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-dark-light dark:to-dark-card rounded-2xl shadow-xl overflow-hidden ring-1 ring-black/5"
              >
                <div className={`md:flex ${isRTL ? "flex-row-reverse" : ""}`}>
                  {/* Project Info Sidebar */}
                  <div className="md:w-[30%] bg-gradient-to-b from-primary-dark to-primary-darker text-white p-5 sm:p-6 lg:p-7">
                    <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary-light to-primary rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4 shadow-lg shadow-primary/20">
                        {current.image}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">
                        {lang === "en" ? current.nameEn : current.nameAr}
                      </h3>
                      <div className="text-primary-light mb-2 text-sm sm:text-base">
                        {lang === "en" ? current.roleEn : current.roleAr}
                      </div>
                      <div className="flex items-center text-xs sm:text-sm mb-3 sm:mb-4">
                        <Building
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${isRTL ? "ml-2" : "mr-2"}`}
                        />
                        {lang === "en" ? current.companyEn : current.companyAr}
                      </div>
                      <div className="flex items-center text-xs sm:text-sm">
                        <Calendar
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${isRTL ? "ml-2" : "mr-2"}`}
                        />
                        {lang === "en" ? current.dateEn : current.dateAr}
                      </div>
                    </div>

                    <div className="border-t border-white/20 pt-4 sm:pt-6">
                      <h4 className="font-bold mb-2 sm:mb-3 text-sm sm:text-base">
                        {t.keyImprovements}
                      </h4>
                      <ul className="space-y-1 sm:space-y-2">
                        {(lang === "en"
                          ? current.featuresEn
                          : current.featuresAr
                        ).map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center text-xs sm:text-sm"
                          >
                            <div
                              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-light rounded-full ${isRTL ? "ml-2 sm:ml-3" : "mr-2 sm:mr-3"}`}
                            ></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="md:w-2/3 p-6 sm:p-8 lg:p-12">
                    <div
                      className={`flex items-center mb-6 sm:mb-8 ${isRTL ? "justify-end" : ""}`}
                    >
                      <span className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
                        <CheckCircle className="w-4 h-4" />
                        {t.liveBadge}
                      </span>
                    </div>

                    <div className="relative mb-6 sm:mb-8">
                      <Quote
                        className={`absolute -top-2 ${isRTL ? "-right-2 rotate-180" : "-left-2"} w-6 h-6 sm:w-8 sm:h-8 text-primary-light/20`}
                      />
                      <h4 className={`font-bold text-primary-dark dark:text-primary-light mb-2 sm:mb-3 text-sm sm:text-base ${isRTL ? "pr-6 text-right" : "pl-6"}`}>
                        {t.projectOutcome}
                      </h4>
                      <p
                        className={`text-gray-700 dark:text-gray-200 text-base sm:text-lg ${isRTL ? "pr-6 text-right" : "pl-6"}`}
                      >
                        {lang === "en" ? current.outcomeEn : current.outcomeAr}
                      </p>
                    </div>

                    <a
                      href={current.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-primary-dark dark:text-primary-light font-bold hover:gap-3 transition-all ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t.visitProject}
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={isRTL ? nextSlide : prevSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-light shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-dark-light transition-colors"
              >
                {isRTL ? (
                  <ChevronRight
                    className="text-gray-600 dark:text-gray-300"
                    size={20}
                  />
                ) : (
                  <ChevronLeft
                    className="text-gray-600 dark:text-gray-300"
                    size={20}
                  />
                )}
              </motion.button>

              <div className="flex gap-1 sm:gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                      index === activeIndex
                        ? "bg-primary-dark w-6 sm:w-8"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={isRTL ? prevSlide : nextSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-light shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-dark-light transition-colors"
              >
                {isRTL ? (
                  <ChevronLeft
                    className="text-gray-600 dark:text-gray-300"
                    size={20}
                  />
                ) : (
                  <ChevronRight
                    className="text-gray-600 dark:text-gray-300"
                    size={20}
                  />
                )}
              </motion.button>
            </div>
          </div>

          {/* Additional Mini Projects */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 lg:mt-16"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 lg:mb-8">
              {t.moreProjects}
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              {miniProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-dark-card rounded-xl p-4 sm:p-6 border border-gray-100 dark:border-dark-light"
                >
                  <div
                    className={`flex items-center mb-3 sm:mb-4 ${
                      isRTL ? "flex-row" : ""
                    }`}
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-light/10 to-primary-dark/10 dark:from-primary-light/20 dark:to-primary-dark/20 rounded-full flex items-center justify-center ${
                        isRTL ? "ml-3 sm:ml-4 order-first" : "mr-3 sm:mr-4"
                      }`}
                    >
                      <Building
                        className="text-primary-dark dark:text-primary-light"
                        size={18}
                      />
                    </div>
                    <div className={isRTL ? "text-right" : "text-left"}>
                      <div className="font-bold text-sm sm:text-base">
                        {lang === "en" ? project.nameEn : project.nameAr}
                      </div>
                      <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                        {lang === "en" ? project.roleEn : project.roleAr}
                      </div>
                    </div>
                  </div>
                  <p
                    className={`text-gray-600 dark:text-gray-300 text-sm sm:text-base ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {lang === "en" ? project.descEn : project.descAr}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
