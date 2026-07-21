'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  ArrowUp,
  Heart,
  MapPin,
  Phone,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";
import logoImg from "../assets/logo.png";

const Footer = ({ lang }) => {
  const currentYear = new Date().getFullYear();

  const content = {
    en: {
      company: "Company",
      quick: "Quick",
      about: "About Us",
      portfolio: "Portfolio",
      testimonials: "Testimonials",
      contact: "Contact",
      home: "Home",
      story: "Our Story",
      projects: "Our Projects",
      quote: "Get Quote",
      location: "Location",
      hours: "Working Hours",
      rights: "All rights reserved.",
      made: "Made with",
      by: "by DoGether Team",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookies",
      established:
        "Established in 2025 • Professional digital solutions for modern businesses",
    },
    ar: {
      company: "الشركة",
      quick: "روابط سريعة",
      about: "من نحن",
      portfolio: "أعمالنا",
      testimonials: "شهادات العملاء",
      contact: "اتصل بنا",
      home: "الرئيسية",
      story: "قصتنا",
      projects: "مشاريعنا",
      quote: "احصل على عرض سعر",
      location: "الموقع",
      hours: "ساعات العمل",
      rights: "جميع الحقوق محفوظة.",
      made: "صنع بـ",
      by: "بواسطة فريق DoGether",
      privacy: "الخصوصية",
      terms: "الشروط",
      cookies: "الكوكيز",
      established: "تأسست في ٢٠٢٥ • حلول رقمية احترافية للأعمال الحديثة",
    },
  };

  const t = content[lang];
  const isRTL = lang === "ar";

  // Internal links to dedicated service pages (fixes orphan pages for indexing)
  const servicePages = [
    { href: "/services/website", label: lang === "en" ? "Web Design" : "تصميم المواقع" },
    { href: "/services/mobile-app", label: lang === "en" ? "Mobile Apps" : "تطبيقات الجوال" },
    { href: "/services/store", label: lang === "en" ? "Online Stores" : "المتاجر الإلكترونية" },
    { href: "/services/pos", label: lang === "en" ? "POS Systems" : "أنظمة نقاط البيع" },
    { href: "/services/digital-menu", label: lang === "en" ? "Digital Menu" : "القائمة الرقمية" },
    { href: "/services/custom-system", label: lang === "en" ? "Custom Systems" : "أنظمة مخصصة" },
    { href: "/services/management-system", label: lang === "en" ? "Management Systems" : "إدارة الأعمال" },
    { href: "/services/support", label: lang === "en" ? "Support & Maintenance" : "الدعم والصيانة" },
  ];
  const servicesHeading = lang === "en" ? "Services" : "خدماتنا";

  const footerLinks = {
    [t.company]: [
      { label: t.about, href: "#about" },
      { label: t.portfolio, href: "#portfolio" },
      { label: t.testimonials, href: "#testimonials" },
      { label: t.contact, href: "#contact" },
    ],
    [t.quick]: [
      { label: lang === "en" ? "Software Company Egypt" : "شركة برمجة في مصر", href: "/software-company" },
      { label: lang === "en" ? "All Services" : "كل الخدمات", href: "/services" },
      { label: lang === "en" ? "Our Work" : "أعمالنا", href: "/work" },
      { label: lang === "en" ? "Blog" : "المدونة", href: "/blog" },
      { label: t.quote, href: "#contact" },
    ],
  };

  const socialLinks = [
    {
      icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "https://www.facebook.com/Dogethertech",
      label: "Facebook",
    },
    {
      icon: <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "https://wa.me/201062485133",
      label: "WhatsApp",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-12 lg:pt-16 pb-6 lg:pb-8 relative ${
        isRTL ? "rtl" : "ltr"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      >
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 mb-8 lg:mb-12">
          <div className="lg:col-span-2">
            <div
              className={`flex items-center ${isRTL ? "flex-row" : "flex-row"} ${isRTL ? "space-x-reverse" : ""} space-x-3 mb-4 lg:mb-6`}
            >
              <a
                href="#home"
                className={`flex items-center ${isRTL ? "flex-row" : "flex-row"} ${isRTL ? "space-x-reverse" : ""} space-x-3 no-underline`}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 relative flex-shrink-0">
                  <Image
                    src={logoImg}
                    alt="DoGether Logo"
                    className="w-full h-full object-contain rounded-xl"
                    sizes="56px"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-xl sm:text-2xl font-bold">DoGether</div>
                  <div className="text-primary-light text-xs sm:text-sm">
                    Digital Solutions
                  </div>
                </div>
              </a>
            </div>
            <p className="text-gray-400 mb-6 lg:mb-8 max-w-2xl text-sm">
              {lang === "en"
                ? "Professional digital agency based in Fayoum and Cairo, Egypt — serving businesses across all governorates. We specialize in creating exceptional websites, e-commerce platforms, and custom software solutions that drive business growth."
                : "وكالة رقمية محترفة مقرها الفيوم والقاهرة، مصر — نخدم الأعمال في كل محافظات مصر. نحن متخصصون في إنشاء مواقع ويب استثنائية ومنصات تجارة إلكترونية وحلول برمجية مخصصة تدفع نمو الأعمال."}
            </p>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
                {lang === "en" ? "Connect With Us" : "تابعونا"}
              </h4>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 hover:bg-primary-dark rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Services column — internal links to dedicated service pages */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-6">
              {servicesHeading}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {servicePages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-gray-400 hover:text-primary-light transition-colors flex items-center group text-sm"
                  >
                    <span
                      className={`w-1 h-1 bg-primary-light rounded-full ${
                        isRTL ? "ml-2 sm:ml-3" : "mr-2 sm:mr-3"
                      } opacity-0 group-hover:opacity-100 transition-opacity`}
                    ></span>
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-6">
                {category}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-light transition-colors flex items-center group text-sm"
                    >
                      <span
                        className={`w-1 h-1 bg-primary-light rounded-full ${
                          isRTL ? "ml-2 sm:ml-3" : "mr-2 sm:mr-3"
                        } opacity-0 group-hover:opacity-100 transition-opacity`}
                      ></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-6 lg:pt-8 mb-6 lg:mb-8">
          <div className="grid sm:grid-cols-3 gap-4 lg:gap-6">
            <div className="text-center">
              <div
                className={`inline-flex items-center ${isRTL ? "flex-row" : "flex-row"} ${isRTL ? "space-x-reverse" : ""} space-x-3 mb-3`}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-dark/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary-light" />
                </div>
                <div className={isRTL ? "text-right" : "text-left"}>
                  <div className="text-xs text-gray-400">{t.location}</div>
                  <div className="text-sm sm:text-base">
                    {lang === "en" ? "Fayoum & Cairo, Egypt" : "الفيوم والقاهرة، مصر"}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div
                className={`inline-flex items-center ${isRTL ? "flex-row" : "flex-row"} ${isRTL ? "space-x-reverse" : ""} space-x-3 mb-3`}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-dark/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary-light" />
                </div>
                <div className={isRTL ? "text-right" : "text-left"}>
                  <div className="text-xs text-gray-400">
                    {lang === "en" ? "Phone / WhatsApp" : "هاتف / واتساب"}
                  </div>
                  <div className="text-sm sm:text-base">01062485133</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div
                className={`inline-flex items-center ${isRTL ? "flex-row" : "flex-row"} ${isRTL ? "space-x-reverse" : ""} space-x-3 mb-3`}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-dark/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-primary-light" />
                </div>
                <div className={isRTL ? "text-right" : "text-left"}>
                  <div className="text-xs text-gray-400">{t.hours}</div>
                  <div className="text-sm sm:text-base">24/7 - Everyday</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 lg:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-400 text-xs mb-4 sm:mb-0">
              © {currentYear} DoGether. {t.rights}
            </div>
            <div className="flex items-center gap-1 text-gray-400 text-xs mb-4 sm:mb-0">
              <span>{t.made}</span>
              <Heart className="w-3 h-3 text-red-500 mx-1" />
              <span>{t.by}</span>
            </div>
            <div
              className={`flex ${isRTL ? "gap-4 lg:gap-6" : "space-x-4 lg:space-x-6"}`}
            >
              <a href="#privacy" className="text-gray-400 hover:text-white text-xs">
                {t.privacy}
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white text-xs">
                {t.terms}
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-white text-xs">
                {t.cookies}
              </a>
            </div>
          </div>
          <div className="text-center text-gray-500 text-xs mt-4">
            {t.established}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
