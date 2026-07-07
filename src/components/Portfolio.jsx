'use client'

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";
import logo from "../assets/logo1.png";
import logo1 from "../assets/logo2.png";
import logo2 from "../assets/logo3.png";
import logo3 from "../assets/logo4.png";
import logo4 from "../assets/logo5.png";
import heroImage from "../assets/hero.jpeg";
import sharmLogo from "../assets/sharm-kitesurf.png";

const Portfolio = ({ lang }) => {
  const [filter, setFilter] = useState("all");

  const content = {
    en: {
      title: "Our",
      titleHighlight: "Portfolio",
      subtitle:
        "Showcasing successful projects that transformed businesses across various industries",
      categories: {
        all: "All Projects",
        website: "Websites",
        pos: "POS Systems",
        custom: "Custom Software",
      },
      visit: "Visit Website",
      stats: [
        { value: "7", label: "Completed Projects" },
        { value: "7+", label: "Happy Clients" },
        { value: "4+", label: "Industries Served" },
        { value: "100%", label: "Client Satisfaction" },
      ],
      keyFeatures: "Key Features:",
    },
    ar: {
      title: "أعمالنا",
      titleHighlight: "المميزة",
      subtitle: "نعرض مشاريع ناجحة غيرت أعمال عبر مختلف الصناعات",
      categories: {
        all: "كل المشاريع",
        website: "مواقع",
        pos: "نقاط بيع",
        custom: "برمجيات مخصصة",
      },
      visit: "زيارة الموقع",
      stats: [
        { value: "٧", label: "مشروع مكتمل" },
        { value: "٧+", label: "عميل سعيد" },
        { value: "٤+", label: "صناعة خدمنا" },
        { value: "١٠٠٪", label: "رضا العملاء" },
      ],
      keyFeatures: "الميزات الرئيسية:",
    },
  };

  const t = content[lang];
  const isRTL = lang === "ar";

  const projects = [
    {
      id: 1,
      category: "website",
      titleEn: "Chicken One - ElZawy",
      titleAr: "تشيكن ون - الزعوي",
      descriptionEn:
        "Modern corporate website with responsive design and smooth user experience",
      descriptionAr: "موقع شركة عصري بتصميم متجاوب وتجربة مستخدم سلسة",
      logo: logo,
      color: "from-[#F39101] to-[#FFA726]",
      tagsEn: ["Corporate", "Responsive", "Modern"],
      tagsAr: ["شركات", "متجاوب", "حديث"],
      resultsEn: ["Professional presence", "Mobile optimized", "User friendly"],
      resultsAr: ["حضور احترافي", "محسن للجوال", "سهل الاستخدام"],
      client: "El Zawy Group",
      duration: "3 weeks",
      link: "https://chicken-one.com/",
      live: true,
    },
    {
      id: 2,
      category: "website",
      titleEn: "New - ElZawy",
      titleAr: "نيو - الزعوي",
      descriptionEn:
        "Complete e-commerce platform with product management and shopping cart",
      descriptionAr:
        "منصة تجارة إلكترونية متكاملة مع إدارة المنتجات وسلة التسوق",
      logo: logo1,
      color: "from-[#D10003] to-[#FF5252]",
      tagsEn: ["E-commerce", "Shopping", "Products"],
      tagsAr: ["تجارة إلكترونية", "تسوق", "منتجات"],
      resultsEn: ["Online sales", "Product catalog", "Secure checkout"],
      resultsAr: ["مبيعات عبر الإنترنت", "كتالوج منتجات", "دفع آمن"],
      client: "El Zawy Stores",
      duration: "5 weeks",
      link: "https://elzawy-new.com/",
      live: true,
    },
    {
      id: 3,
      category: "website",
      titleEn: "Fateer wi 3asal",
      titleAr: "فطير و عسل",
      descriptionEn:
        "Delicious food ordering platform with online ordering and delivery management",
      descriptionAr:
        "منصة طعام لذيذة مع إمكانية الطلب عبر الإنترنت وإدارة التوصيل",
      logo: logo4,
      color: "from-[#FF6B35] to-[#FF8C42]",
      tagsEn: ["Food", "Online Order", "Delivery"],
      tagsAr: ["طعام", "طلب أونلاين", "توصيل"],
      resultsEn: [
        "Online ordering system",
        "Delivery management",
        "Menu management",
        "Customer reviews",
      ],
      resultsAr: [
        "نظام طلب أونلاين",
        "إدارة التوصيل",
        "إدارة القائمة",
        "تقييمات العملاء",
      ],
      client: "Fateer wi 3asal",
      duration: "4 weeks",
      link: "https://fateerwasal.com",
      live: true,
    },
    {
      id: 4,
      category: "pos",
      titleEn: "Cashier POS System",
      titleAr: "نظام كاشير نقاط البيع",
      descriptionEn:
        "Modern Point of Sale system with intuitive interface and real-time inventory management",
      descriptionAr: "نظام نقاط بيع حديث بواجهة بديهية وإدارة مخزون فورية",
      logo: heroImage,
      color: "from-[#00ACC1] to-[#26C6DA]",
      tagsEn: ["POS", "Inventory", "Real-time"],
      tagsAr: ["نقاط بيع", "مخزون", "فوري"],
      resultsEn: [
        "Fast checkout process",
        "Inventory tracking",
        "Sales analytics",
        "User-friendly interface",
      ],
      resultsAr: [
        "عملية دفع سريعة",
        "تتبع المخزون",
        "تحليلات المبيعات",
        "واجهة سهلة الاستخدام",
      ],
      client: "Cashier Tech",
      duration: "4 weeks",
      link: "https://cashier-vert.vercel.app/",
      live: true,
    },
    {
      id: 5,
      category: "custom",
      titleEn: "Aruqah - Real Estate Solutions",
      titleAr: "أروقة - حلول عقارية",
      descriptionEn:
        "Innovative real estate platform with advanced property management and analytics",
      descriptionAr: "منصة عقارية مبتكرة مع إدارة متقدمة للعقارات وتحليلات",
      logo: logo3,
      color: "from-[#2E7D32] to-[#4CAF50]",
      tagsEn: ["Real Estate", "Analytics", "Property Management"],
      tagsAr: ["عقارات", "تحليلات", "إدارة عقارية"],
      resultsEn: [
        "Property listings",
        "Market analytics",
        "Client management",
        "Smart search",
      ],
      resultsAr: [
        "قوائم العقارات",
        "تحليلات المبيعات",
        "إدارة العملاء",
        "بحث ذكي",
      ],
      client: "Aruqah",
      duration: "6 weeks",
      link: "https://aruqah.vercel.app/",
      live: true,
    },
    {
      id: 6,
      category: "custom",
      titleEn: "Cosmetics Store",
      titleAr: "متجر مستحضرات التجميل",
      descriptionEn:
        "Elegant cosmetics e-commerce platform with product showcase and online ordering",
      descriptionAr:
        "منصة تجارة إلكترونية أنيقة لمستحضرات التجميل مع عرض المنتجات والطلب عبر الإنترنت",
      logo: logo2,
      color: "from-[#C2185B] to-[#E91E63]",
      tagsEn: ["E-commerce", "Cosmetics", "Online Store"],
      tagsAr: ["تجارة إلكترونية", "تجميل", "متجر إلكتروني"],
      resultsEn: [
        "Product catalog",
        "Shopping cart",
        "Secure payments",
        "Mobile responsive",
      ],
      resultsAr: [
        "كتالوج منتجات",
        "سلة تسوق",
        "مدفوعات آمنة",
        "متجاوب مع الجوال",
      ],
      client: "Cosmetics Brand",
      duration: "5 weeks",
      link: "https://cosmetics-flame-three.vercel.app/",
      live: true,
    },
    {
      id: 7,
      category: "website",
      titleEn: "Sharm Kite Surf",
      titleAr: "شرم كايت سيرف",
      descriptionEn:
        "Water sports & kite surfing platform in Sharm El Sheikh with online booking and activity showcase",
      descriptionAr:
        "منصة رياضات مائية وركوب الطائرة الورقية في شرم الشيخ مع حجز عبر الإنترنت وعرض الأنشطة",
      logo: sharmLogo,
      color: "from-[#0077B6] to-[#00B4D8]",
      tagsEn: ["Water Sports", "Booking", "Tourism"],
      tagsAr: ["رياضات مائية", "حجز", "سياحة"],
      resultsEn: [
        "Online booking system",
        "Activity showcase",
        "Mobile responsive",
        "Multilingual support",
      ],
      resultsAr: [
        "نظام حجز أونلاين",
        "عرض الأنشطة",
        "متجاوب مع الجوال",
        "دعم متعدد اللغات",
      ],
      client: "Sharm Kite Surf",
      duration: "4 weeks",
      link: "https://sharmkitesurf.com",
      live: true,
    },
  ];

  const categories = [
    { key: "all", label: t.categories.all, count: projects.length },
    {
      key: "website",
      label: t.categories.website,
      count: projects.filter((p) => p.category === "website").length,
    },
    {
      key: "pos",
      label: t.categories.pos,
      count: projects.filter((p) => p.category === "pos").length,
    },
    {
      key: "custom",
      label: t.categories.custom,
      count: projects.filter((p) => p.category === "custom").length,
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="portfolio"
      className={`pt-8 lg:pt-10 pb-16 lg:pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-dark-light ${
        isRTL ? "rtl" : "ltr"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary-light/10 dark:bg-primary-light/20 mb-6">
            <svg
              className="text-primary-dark dark:text-primary-light"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8" />
              <path d="M12 17v4" />
            </svg>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
            {t.title}{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              {t.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 lg:mb-10">
            {t.subtitle}
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 lg:mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.key)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 text-sm sm:text-base ${
                  filter === category.key
                    ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg"
                    : "bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-light"
                } ${isRTL ? "flex-row" : ""}`}
              >
                <span>{category.label}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    filter === category.key
                      ? "bg-white/20"
                      : "bg-gray-300 dark:bg-dark-light"
                  }`}
                >
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 lg:mb-12"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="bg-white dark:bg-dark-card rounded-xl lg:rounded-2xl overflow-hidden card-hover h-full">
                  <div
                    className={`h-40 sm:h-48 lg:h-56 bg-gradient-to-r ${project.color} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      {project.id === 4 ? (
                        <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-300">
                          <Image
                            src={project.logo}
                            alt={`${project.titleEn} - DoGether Tech شركة برمجة مصر`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                      ) : (
                        <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center overflow-hidden transform group-hover:scale-110 transition-transform duration-300">
                          <Image
                            src={project.logo}
                            alt={`${project.titleEn} - DoGether Tech شركة برمجة مصر`}
                            width={96}
                            height={96}
                            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain rounded-full"
                          />
                        </div>
                      )}
                    </div>

                    <div
                      className={`absolute top-3 ${
                        isRTL ? "right-3" : "left-3"
                      } flex flex-wrap gap-1 sm:gap-2`}
                    >
                      {(lang === "en" ? project.tagsEn : project.tagsAr).map(
                        (tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ),
                      )}
                    </div>

                    <div
                      className={`absolute bottom-3 ${
                        isRTL ? "right-3" : "left-3"
                      } px-2 py-1 bg-black/20 backdrop-blur-sm text-white text-xs sm:text-sm rounded-full`}
                    >
                      {project.client}
                    </div>

                    <div
                      className={`absolute bottom-3 ${
                        isRTL ? "left-3" : "right-3"
                      } px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm rounded-full`}
                    >
                      {project.duration}
                    </div>

                    {project.live && (
                      <div
                        className={`absolute top-3 ${
                          isRTL ? "left-3" : "right-3"
                        } px-2 py-1 bg-green-500/90 backdrop-blur-sm text-white text-xs sm:text-sm rounded-full animate-pulse`}
                      >
                        Live
                      </div>
                    )}
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary-dark dark:group-hover:text-primary-light transition-colors">
                      {lang === "en" ? project.titleEn : project.titleAr}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                      {lang === "en"
                        ? project.descriptionEn
                        : project.descriptionAr}
                    </p>

                    <div className="mb-4 sm:mb-6">
                      <h4
                        className={`font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center text-sm sm:text-base ${
                          isRTL ? "flex-row-reverse justify-end" : ""
                        }`}
                      >
                        <ChevronRight
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${
                            isRTL ? "ml-1 rotate-180" : "mr-1"
                          } text-primary-light`}
                        />
                        {t.keyFeatures}
                      </h4>
                      <ul
                        className={`space-y-1 sm:space-y-2 ${
                          isRTL ? "text-right" : ""
                        }`}
                      >
                        {(lang === "en"
                          ? project.resultsEn
                          : project.resultsAr
                        ).map((result, i) => (
                          <li
                            key={i}
                            className={`flex items-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 ${
                              isRTL ? "flex-row" : ""
                            }`}
                          >
                            <div
                              className={`w-1.5 h-1.5 bg-primary-light rounded-full ${
                                isRTL ? "ml-2" : "mr-2"
                              }`}
                            ></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={`flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 dark:border-dark-light ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-primary-dark dark:text-primary-light font-semibold flex items-center group-hover:text-primary-darker dark:group-hover:text-primary text-sm sm:text-base hover:underline ${
                          isRTL ? "flex-row" : ""
                        }`}
                      >
                        {isRTL && <ExternalLink className="ml-2" size={16} />}
                        {t.visit}
                        {!isRTL && <ExternalLink className="ml-2" size={16} />}
                      </a>
                      <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Portfolio;
