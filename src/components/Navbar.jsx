import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// استيراد اللوجو من assets
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { label: "Home", href: "#home" },
    {
      label: "Services",
      href: "#services",
      submenu: [
        { label: "Website Development", href: "#services" },
        { label: "POS Systems", href: "#services" },
        { label: "E-commerce Solutions", href: "#services" },
        { label: "Custom Software", href: "#services" },
      ],
    },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
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
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3 dark:bg-dark/95 dark:shadow-gray-900/20"
          : "bg-white py-4 dark:bg-dark"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - تم التحديث لاستخدام الصورة من assets */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <a
              href="#home"
              className="flex items-center space-x-3 no-underline"
            >
              {/* Logo Image */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
                <img
                  src={logo}
                  alt="Triple S Logo"
                  className="w-full h-full object-contain rounded-xl"
                  onError={(e) => {
                    // إذا فشل تحميل الصورة، نعرض البديل
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

              {/* اسم الشركة */}
              <div className="flex flex-col">
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-dark to-primary-darker bg-clip-text text-transparent dark:from-primary-light dark:to-primary">
                  Triple S
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                  Digital Solutions
                </div>
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center text-gray-600 hover:text-primary-dark font-medium transition-colors py-2 dark:text-gray-300 dark:hover:text-primary-light"
                  onMouseEnter={() =>
                    item.submenu && setActiveDropdown(item.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="ml-1 w-4 h-4" />}
                </a>

                {/* Submenu Dropdown */}
                {item.submenu && activeDropdown === item.label && (
                  <div
                    className="absolute left-0 top-full mt-2 w-48 bg-white dark:bg-dark-card rounded-xl shadow-xl border border-gray-100 dark:border-dark-light"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-3 text-gray-600 hover:text-primary-dark hover:bg-gray-50 dark:text-gray-300 dark:hover:text-primary-light dark:hover:bg-dark-light first:rounded-t-xl last:rounded-b-xl transition-colors"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-light text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-lighter transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 lg:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-light text-gray-600 dark:text-gray-300"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="text-gray-600 dark:text-gray-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
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
                  <div key={item.label}>
                    <a
                      href={item.href}
                      className="block py-3 text-gray-600 hover:text-primary-dark font-medium dark:text-gray-300 dark:hover:text-primary-light"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                    {item.submenu && (
                      <div className="ml-4 space-y-2">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block py-2 text-gray-500 hover:text-primary-dark dark:text-gray-400 dark:hover:text-primary-light"
                            onClick={() => setIsOpen(false)}
                          >
                            • {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <button
                    className="w-full btn-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
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
