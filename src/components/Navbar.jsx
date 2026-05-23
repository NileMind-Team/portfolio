import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = ({ lang, setLang, darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const content = {
    en: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      contact: "Contact",
      getStarted: "Get Started",
    },
    ar: {
      home: "الرئيسية",
      services: "الخدمات",
      portfolio: "أعمالنا",
      about: "من نحن",
      contact: "اتصل بنا",
      getStarted: "ابدأ الآن",
    },
  };

  const t = content[lang];
  const isRTL = lang === "ar";

  const navItems = [
    { label: t.home, href: "#home" },
    { label: t.services, href: "#services" },
    { label: t.portfolio, href: "#portfolio" },
    { label: t.about, href: "#about" },
    { label: t.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLang(lang === "en" ? "ar" : "en");

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3 dark:bg-dark/95 dark:shadow-gray-900/20"
          : "bg-white py-4 dark:bg-dark"
      } ${isRTL ? "rtl" : "ltr"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <a
              href="#home"
              className={`flex items-center ${isRTL ? "space-x-reverse" : ""} space-x-3 no-underline`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
                <img
                  src={logo}
                  alt="DoGehter Logo"
                  className="w-full h-full object-contain rounded-xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `
                      <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-light to-primary-darker rounded-xl flex items-center justify-center shadow-lg">
                        <span class="text-white font-bold text-lg">SSS</span>
                      </div>
                    `;
                  }}
                />
              </div>
              <div className="flex flex-col">
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-dark to-primary-darker bg-clip-text text-transparent dark:from-primary-light dark:to-primary">
                  DoGehter
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                  Digital Solutions
                </div>
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation - مع تباعد مناسب للعربية */}
          <div className="hidden lg:flex items-center">
            <div
              className={`flex items-center ${
                isRTL ? "gap-8 mx-4" : "space-x-8 mx-4"
              }`}
            >
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  <a
                    href={item.href}
                    className={`text-gray-600 hover:text-primary-dark font-medium transition-colors py-2 dark:text-gray-300 dark:hover:text-primary-light whitespace-nowrap ${
                      isRTL
                        ? "text-base tracking-normal"
                        : "text-sm tracking-wide"
                    }`}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>

            {/* Buttons Container - مع مسافة كافية */}
            <div
              className={`flex items-center gap-3 ${isRTL ? "mr-2" : "ml-2"}`}
            >
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-lg bg-gray-100 dark:bg-dark-light text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-lighter transition-colors flex items-center gap-1 min-w-[52px] justify-center"
              >
                <Globe size={18} />
                <span className="text-sm font-medium">
                  {lang === "en" ? "AR" : "EN"}
                </span>
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-dark-light text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-lighter transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Buttons */}
          <div
            className={`flex items-center gap-2 lg:hidden ${isRTL ? "flex-row" : "flex-row"}`}
          >
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-light text-gray-600 dark:text-gray-300"
              aria-label="Toggle Language"
            >
              <Globe size={20} />
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-light text-gray-600 dark:text-gray-300"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="text-gray-600 dark:text-gray-300 p-1"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-4 pb-6 border-t border-gray-100 dark:border-dark-light">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`block py-3 text-gray-600 hover:text-primary-dark font-medium dark:text-gray-300 dark:hover:text-primary-light ${
                      isRTL ? "text-right text-base" : "text-left text-sm"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4">
                  <button
                    className="w-full btn-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.getStarted}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
