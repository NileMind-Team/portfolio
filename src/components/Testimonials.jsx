'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  User,
  Building,
  Calendar,
} from "lucide-react";

const Testimonials = ({ lang }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isRTL = lang === "ar";

  const content = {
    en: {
      badge: "What Our Clients Say",
      title: "What Our",
      titleHighlight: "Clients Say",
      subtitle: "Real feedback from businesses we've helped transform and grow",
      keyImprovements: "Key Improvements",
      projectOutcome: "Project Outcome",
      projectOutcomeText:
        "This project resulted in significant improvements in operational efficiency and customer satisfaction, demonstrating the value of our tailored solutions.",
      moreFeedback: "More Client Feedback",
    },
    ar: {
      badge: "ماذا يقول عملاؤنا",
      title: "ماذا يقول",
      titleHighlight: "عملاؤنا",
      subtitle: "ملاحظات حقيقية من الشركات التي ساعدناها على التحول والنمو",
      keyImprovements: "التحسينات الرئيسية",
      projectOutcome: "نتيجة المشروع",
      projectOutcomeText:
        "أسفر هذا المشروع عن تحسينات كبيرة في الكفاءة التشغيلية ورضا العملاء، مما يدل على قيمة حلولنا المصممة خصيصًا.",
      moreFeedback: "المزيد من ملاحظات العملاء",
    },
  };

  const t = content[lang];

  const testimonials = [
    {
      nameEn: "Maria",
      nameAr: "ماريا",
      roleEn: "Owner, Cairo Café",
      roleAr: "مالك، كافيه القاهرة",
      companyEn: "Cairo Café",
      companyAr: "كافيه القاهرة",
      contentEn:
        "The POS system completely transformed our restaurant operations. Sales tracking and inventory management became so efficient that we saved 15 hours per week on administrative tasks!",
      contentAr:
        "لقد غير نظام نقاط البيع عمليات مطعمنا بالكامل. أصبح تتبع المبيعات وإدارة المخزون فعالين للغاية لدرجة أننا وفرنا 15 ساعة أسبوعيًا في المهام الإدارية!",
      rating: 5,
      image: "M",
      dateEn: "March 2024",
      dateAr: "مارس ٢٠٢٤",
      improvementsEn: [
        "40% faster service",
        "Reduced waste by 25%",
        "Increased customer satisfaction",
      ],
      improvementsAr: [
        "خدمة أسرع بنسبة ٤٠٪",
        "تقليل الهدر بنسبة ٢٥٪",
        "زيادة رضا العملاء",
      ],
    },
    {
      nameEn: "Omnia Ahmed",
      nameAr: "أمنية أحمد",
      roleEn: "CEO, Fashion Boutique",
      roleAr: "الرئيس التنفيذي، بوتيك أزياء",
      companyEn: "StyleHub Fashion",
      companyAr: "ستايل هاب للأزياء",
      contentEn:
        "Our e-commerce website increased online sales by 300% in just 3 months. The team was professional, responsive, and delivered exactly what we needed on time.",
      contentAr:
        "زاد موقع التجارة الإلكترونية الخاص بنا المبيعات عبر الإنترنت بنسبة 300٪ في 3 أشهر فقط. كان الفريق محترفًا ومستجيبًا وقدم بالضبط ما نحتاجه في الوقت المحدد.",
      rating: 5,
      image: "OA",
      dateEn: "February 2024",
      dateAr: "فبراير ٢٠٢٤",
      improvementsEn: [
        "300% sales increase",
        "Mobile-first design",
        "SEO optimized",
      ],
      improvementsAr: [
        "زيادة المبيعات بنسبة ٣٠٠٪",
        "تصميم متجاوب للجوال أولاً",
        "تحسين محركات البحث",
      ],
    },
    {
      nameEn: "Mohamed Harb",
      nameAr: "محمد حرب",
      roleEn: "Manager, Auto Parts Store",
      roleAr: "مدير، متجر قطع غيار السيارات",
      companyEn: "AutoParts Pro",
      companyAr: "أوتو بارتس برو",
      contentEn:
        "The custom inventory management system saved us 20 hours per week. The support team is always available when needed and the system is incredibly reliable.",
      contentAr:
        "وفر لنا نظام إدارة المخزون المخصص 20 ساعة أسبوعيًا. فريق الدعم متاح دائمًا عند الحاجة والنظام موثوق به بشكل لا يصدق.",
      rating: 4,
      image: "MH",
      dateEn: "January 2024",
      dateAr: "يناير ٢٠٢٤",
      improvementsEn: [
        "20 hours/week saved",
        "99.9% uptime",
        "Real-time tracking",
      ],
      improvementsAr: ["توفير ٢٠ ساعة/أسبوع", "وقت تشغيل ٩٩.٩٪", "تتبع فوري"],
    },
  ];

  const miniFeedbacks = [
    {
      nameEn: "Karim Ahmed",
      nameAr: "كريم أحمد",
      feedbackEn: "Excellent support team!",
      feedbackAr: "فريق دعم ممتاز!",
      roleEn: "Restaurant Owner",
      roleAr: "مالك مطعم",
    },
    {
      nameEn: "Noura Salem",
      nameAr: "نورا سالم",
      feedbackEn: "Transformed our online presence",
      feedbackAr: "غير وجودنا على الإنترنت",
      roleEn: "Boutique Manager",
      roleAr: "مديرة بوتيك",
    },
    {
      nameEn: "Omar Farouk",
      nameAr: "عمر فاروق",
      feedbackEn: "Professional and reliable",
      feedbackAr: "محترف وموثوق",
      roleEn: "Retail Chain CEO",
      roleAr: "الرئيس التنفيذي لسلسلة متاجر",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const currentTestimonial = testimonials[activeIndex];

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

        <div className="max-w-6xl mx-auto">
          {/* Main Testimonial Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRTL ? 100 : -100 }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-dark-light dark:to-dark-card rounded-xl lg:rounded-3xl shadow-xl overflow-hidden"
              >
                <div className={`md:flex ${isRTL ? "flex-row-reverse" : ""}`}>
                  {/* Client Info Sidebar */}
                  <div className="md:w-1/3 bg-gradient-to-b from-primary-dark to-primary-darker text-white p-6 sm:p-8">
                    <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-primary-light to-primary rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                        {currentTestimonial.image}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">
                        {lang === "en"
                          ? currentTestimonial.nameEn
                          : currentTestimonial.nameAr}
                      </h3>
                      <div className="text-primary-light mb-2 text-sm sm:text-base">
                        {lang === "en"
                          ? currentTestimonial.roleEn
                          : currentTestimonial.roleAr}
                      </div>
                      <div className="flex items-center text-xs sm:text-sm mb-3 sm:mb-4">
                        <Building
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${isRTL ? "ml-2" : "mr-2"}`}
                        />
                        {lang === "en"
                          ? currentTestimonial.companyEn
                          : currentTestimonial.companyAr}
                      </div>
                      <div className="flex items-center text-xs sm:text-sm">
                        <Calendar
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${isRTL ? "ml-2" : "mr-2"}`}
                        />
                        {lang === "en"
                          ? currentTestimonial.dateEn
                          : currentTestimonial.dateAr}
                      </div>
                    </div>

                    <div className="border-t border-white/20 pt-4 sm:pt-6">
                      <h4 className="font-bold mb-2 sm:mb-3 text-sm sm:text-base">
                        {t.keyImprovements}
                      </h4>
                      <ul className="space-y-1 sm:space-y-2">
                        {(lang === "en"
                          ? currentTestimonial.improvementsEn
                          : currentTestimonial.improvementsAr
                        ).map((improvement, i) => (
                          <li
                            key={i}
                            className="flex items-center text-xs sm:text-sm"
                          >
                            <div
                              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-light rounded-full ${isRTL ? "ml-2 sm:ml-3" : "mr-2 sm:mr-3"}`}
                            ></div>
                            {improvement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="md:w-2/3 p-6 sm:p-8 lg:p-12">
                    <div
                      className={`flex items-center mb-6 sm:mb-8 ${isRTL ? "justify-end" : ""}`}
                    >
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 sm:w-6 sm:h-6 ${
                            i < currentTestimonial.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300 dark:text-gray-600"
                          } ${isRTL ? "ml-1" : "mr-1"}`}
                        />
                      ))}
                      <span
                        className={`${isRTL ? "mr-2" : "ml-2"} text-gray-600 dark:text-gray-300`}
                      >
                        {currentTestimonial.rating}/5
                      </span>
                    </div>

                    <div className="relative mb-6 sm:mb-8">
                      <Quote
                        className={`absolute -top-2 ${isRTL ? "-right-2 rotate-180" : "-left-2"} w-6 h-6 sm:w-8 sm:h-8 text-primary-light/20`}
                      />
                      <p
                        className={`text-gray-700 dark:text-gray-200 text-base sm:text-lg italic ${isRTL ? "pr-6" : "pl-6"}`}
                      >
                        "
                        {lang === "en"
                          ? currentTestimonial.contentEn
                          : currentTestimonial.contentAr}
                        "
                      </p>
                      <Quote
                        className={`absolute -bottom-2 ${isRTL ? "-left-2 -rotate-90" : "-right-2 rotate-180"} w-6 h-6 sm:w-8 sm:h-8 text-primary-light/20`}
                      />
                    </div>

                    <div className="bg-gradient-to-r from-primary-light/5 to-primary-dark/5 dark:from-primary-light/10 dark:to-primary-dark/10 rounded-lg sm:rounded-xl p-4 sm:p-6">
                      <h4 className="font-bold mb-2 sm:mb-3 text-sm sm:text-base">
                        {t.projectOutcome}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                        {t.projectOutcomeText}
                      </p>
                    </div>
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
                {testimonials.map((_, index) => (
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

          {/* Additional Mini Testimonials - Modified for RTL with logo on right */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 lg:mt-16"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 lg:mb-8">
              {t.moreFeedback}
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              {miniFeedbacks.map((feedback, index) => (
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
                      <User
                        className="text-primary-dark dark:text-primary-light"
                        size={18}
                      />
                    </div>
                    <div className={isRTL ? "text-right" : "text-left"}>
                      <div className="font-bold text-sm sm:text-base">
                        {lang === "en" ? feedback.nameEn : feedback.nameAr}
                      </div>
                      <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                        {lang === "en" ? feedback.roleEn : feedback.roleAr}
                      </div>
                    </div>
                  </div>
                  <p
                    className={`text-gray-600 dark:text-gray-300 text-sm sm:text-base ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    "{lang === "en" ? feedback.feedbackEn : feedback.feedbackAr}
                    "
                  </p>
                  <div
                    className={`flex mt-3 sm:mt-4 ${
                      isRTL ? "justify-end" : "justify-start"
                    }`}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400 ${
                          isRTL ? "ml-1" : "mr-1"
                        }`}
                      />
                    ))}
                  </div>
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
