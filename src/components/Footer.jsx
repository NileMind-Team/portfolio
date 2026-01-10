import React from "react";
import {
  Facebook,
  ArrowUp,
  Heart,
  MapPin,
  Phone,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";

// استيراد اللوجو من assets
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { label: "About Us", href: "#about" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    Quick: [
      { label: "Home", href: "#home" },
      { label: "Our Story", href: "#about" },
      { label: "Our Projects", href: "#portfolio" },
      { label: "Get Quote", href: "#contact" },
    ],
  };

  const socialLinks = [
    {
      icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "https://www.facebook.com/profile.php?id=61580352808105",
      label: "Facebook",
    },
    {
      icon: <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "https://wa.me/201273188267",
      label: "WhatsApp",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-12 lg:pt-16 pb-6 lg:pb-8 relative">
      {/* Back to Top Button */}
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
          {/* Company Info - تم التحديث لاستخدام الصورة من assets */}
          <div className="lg:col-span-3">
            <div className="flex items-center space-x-3 mb-4 lg:mb-6">
              <a
                href="#home"
                className="flex items-center space-x-3 no-underline"
              >
                {/* Logo Image */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 relative">
                  <img
                    src={logo}
                    alt="Triple S Logo"
                    className="w-full h-full object-contain rounded-xl"
                    onError={(e) => {
                      // إذا فشل تحميل الصورة، نعرض البديل
                      e.target.onerror = null;
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = `
                        <div class="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-light to-primary-darker rounded-xl flex items-center justify-center shadow-lg">
                          <span class="text-white font-bold text-xl">SSS</span>
                        </div>
                      `;
                    }}
                  />
                </div>

                <div className="flex flex-col">
                  <div className="text-xl sm:text-2xl font-bold">Triple S</div>
                  <div className="text-primary-light text-xs sm:text-sm">
                    Digital Solutions
                  </div>
                </div>
              </a>
            </div>

            <p className="text-gray-400 mb-6 lg:mb-8 max-w-2xl text-sm">
              Professional digital agency based in Fayoum, Egypt. We specialize
              in creating exceptional websites, e-commerce platforms, and custom
              software solutions that drive business growth.
            </p>

            {/* Social Links */}
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
                Connect With Us
              </h4>
              <div className="flex space-x-2 sm:space-x-3">
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

          {/* Footer Links */}
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
                      <span className="w-1 h-1 bg-primary-light rounded-full mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-6 lg:pt-8 mb-6 lg:mb-8">
          <div className="grid sm:grid-cols-3 gap-4 lg:gap-6">
            <div className="text-center">
              <div className="inline-flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-dark/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary-light" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Location</div>
                  <div className="text-sm sm:text-base">Fayoum, Egypt</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-dark/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary-light" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Phone / WhatsApp</div>
                  <div className="text-sm sm:text-base">01273188267</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-dark/20 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-primary-light" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Working Hours</div>
                  <div className="text-sm sm:text-base">24/7 - Everyday</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 lg:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-400 text-xs mb-4 sm:mb-0">
              © {currentYear} Triple S Digital Solutions. All rights reserved.
            </div>

            <div className="flex items-center gap-1 text-gray-400 text-xs mb-4 sm:mb-0">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-500 mx-1" />
              <span>by Triple S Team</span>
            </div>

            <div className="flex space-x-4 lg:space-x-6">
              <a
                href="#privacy"
                className="text-gray-400 hover:text-white text-xs"
              >
                Privacy
              </a>
              <a
                href="#terms"
                className="text-gray-400 hover:text-white text-xs"
              >
                Terms
              </a>
              <a
                href="#cookies"
                className="text-gray-400 hover:text-white text-xs"
              >
                Cookies
              </a>
            </div>
          </div>

          <div className="text-center text-gray-500 text-xs mt-4">
            Established in 2025 • Professional digital solutions for modern
            businesses
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
