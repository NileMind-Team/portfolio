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

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    if (lang === "ar") {
      document.title = "DoGether | شركة برمجة";
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
      document.documentElement.classList.add("arabic");
      document.documentElement.classList.remove("english");
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          "content",
          "DoGether شركة برمجة محترفة في الفيوم والقاهرة، مصر. نقدم تطوير مواقع الويب، تطبيقات الجوال، متاجر إلكترونية، أنظمة نقاط البيع، تصميم UI/UX وحلول رقمية متكاملة للشركات.",
        );
      document
        .querySelector('meta[property="og:title"]')
        ?.setAttribute("content", "DoGether Tech | شركة برمجة");
      document
        .querySelector('meta[property="og:description"]')
        ?.setAttribute(
          "content",
          "DoGether Tech شركة برمجة محترفة في مصر. مواقع، تطبيقات، متاجر إلكترونية، أنظمة POS وحلول رقمية. اتصل: 01062485133",
        );
    } else {
      document.title = "DoGether | شركة برمجة";
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", "en");
      document.documentElement.classList.add("english");
      document.documentElement.classList.remove("arabic");
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          "content",
          "DoGether is a professional software development company in Fayoum and Cairo, Egypt. We deliver web development, mobile apps, e-commerce platforms, POS systems, UI/UX design and custom digital solutions.",
        );
      document
        .querySelector('meta[property="og:title"]')
        ?.setAttribute("content", "DoGether Tech | Software Company in Egypt");
      document
        .querySelector('meta[property="og:description"]')
        ?.setAttribute(
          "content",
          "DoGether Tech — Professional software company in Egypt. Websites, mobile apps, e-commerce, POS systems and digital solutions. Call: 01062485133",
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
