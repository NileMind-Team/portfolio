import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : true;
  });
  const [loading, setLoading] = useState(true);

  // تطبيق الدارك مود على الـ html
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // تطبيق اللغة على الـ html
  useEffect(() => {
    localStorage.setItem("lang", lang);
    if (lang === "ar") {
      document.title = "تريبل إس - الحلول الرقمية";
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
      document.documentElement.classList.add("arabic");
      document.documentElement.classList.remove("english");
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          "content",
          "تريبل إس - وكالة رقمية محترفة في مصر تقدم حلول ويب وتجارة إلكترونية وأنظمة نقاط بيع متطورة",
        );
    } else {
      document.title = "Triple S - Digital Solutions";
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", "en");
      document.documentElement.classList.add("english");
      document.documentElement.classList.remove("arabic");
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          "content",
          "Triple S - Professional digital agency in Egypt offering web development, e-commerce, and POS solutions",
        );
    }
  }, [lang]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 transition-colors duration-300 ${
          darkMode ? "bg-dark" : "bg-white"
        }`}
      >
        <div className="relative">
          <div
            className={`w-16 h-16 border-4 rounded-full animate-spin ${
              darkMode
                ? "border-primary-light/30 border-t-primary-light"
                : "border-primary/30 border-t-primary"
            }`}
          ></div>
          <div
            className={`absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-spin ${
              darkMode ? "border-r-primary-light" : "border-r-primary"
            }`}
            style={{ animationDuration: "0.8s" }}
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark transition-colors duration-300">
      <Navbar
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main>
        <Hero lang={lang} />
        <Clients lang={lang} />
        <Services lang={lang} />
        <Portfolio lang={lang} />
        <Testimonials lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
