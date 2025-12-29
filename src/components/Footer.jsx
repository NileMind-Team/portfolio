import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";

// استيراد اللوجو من assets
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { label: "Website Development", href: "#services" },
      { label: "POS Systems", href: "#services" },
      { label: "E-commerce Solutions", href: "#services" },
      { label: "Custom Software", href: "#services" },
    ],
    Company: [
      { label: "About Us", href: "#about" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Careers", href: "#" },
    ],
    Resources: [
      { label: "Blog", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "FAQs", href: "#" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR Compliance", href: "#" },
    ],
  };

  const socialLinks = [
    {
      icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "#",
      label: "Facebook",
    },
    {
      icon: <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "#",
      label: "Twitter",
    },
    {
      icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "#",
      label: "Instagram",
    },
    {
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "#",
      label: "YouTube",
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
          <div className="lg:col-span-2">
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
                    Digital Excellence
                  </div>
                </div>
              </a>
            </div>

            <p className="text-gray-400 mb-6 lg:mb-8 max-w-md text-sm">
              We help businesses grow with professional websites and advanced
              POS systems. Transforming operations through technology since
              2018.
            </p>

            {/* Newsletter */}
            <div className="mb-6 lg:mb-8">
              <h4 className="font-bold mb-2 sm:mb-3 text-sm sm:text-base">
                Subscribe to Newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-primary-light text-sm"
                />
                <button className="px-4 sm:px-6 bg-gradient-to-r from-primary to-primary-dark rounded-r-lg font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base">
                  Join
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
                Follow Us
              </h4>
              <div className="flex space-x-2 sm:space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
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
                  <div className="text-primary-light">📍</div>
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
                  <div className="text-primary-light">✉️</div>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Email</div>
                  <div className="text-sm sm:text-base">
                    contact@triples.com
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-dark/20 rounded-lg flex items-center justify-center">
                  <div className="text-primary-light">📞</div>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Phone</div>
                  <div className="text-sm sm:text-base">+20 115 942 4411</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 lg:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-400 text-xs mb-4 sm:mb-0">
              © {currentYear} Triple S. All rights reserved.
            </div>

            <div className="flex items-center gap-1 text-gray-400 text-xs mb-4 sm:mb-0">
              <span>Made by Mohand Ashraf</span>
              <span>in Egypt</span>
            </div>

            <div className="flex space-x-4 lg:space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-xs">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xs">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xs">
                Cookies
              </a>
            </div>
          </div>

          <div className="text-center text-gray-500 text-xs mt-4">
            Triple S is a registered trademark. All other trademarks are the
            property of their respective owners.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
