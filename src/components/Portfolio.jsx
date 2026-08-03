'use client'

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import logo from "../assets/logo1.png";
import logo1 from "../assets/logo2.png";
import logo2 from "../assets/logo3.png";
import logo3 from "../assets/logo4.png";
import logo4 from "../assets/logo5.png";
import heroImage from "../assets/hero.jpeg";
import sharmLogo from "../assets/sharm-kitesurf.png";
import tripyramidsHero from "../../public/tripyramids-hero.jpg";
import amjadEstateHero from "../../public/amjad-estate-hero.jpg";

const DeviceProjectShowcase = ({ projects, activeIndex, setActiveIndex, lang, visitLabel }) => {
  const trackRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const tiltX = useSpring(useMotionValue(0), { stiffness: 170, damping: 24 });
  const tiltY = useSpring(useMotionValue(0), { stiffness: 170, damping: 24 });
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    const nextIndex = Math.min(projects.length - 1, Math.floor(progress * projects.length));
    if (nextIndex !== activeIndex) setActiveIndex(nextIndex);
  });

  const project = projects[activeIndex];
  if (!project) return null;

  const goToProject = (index) => {
    const nextIndex = (index + projects.length) % projects.length;
    setActiveIndex(nextIndex);

    if (typeof window === "undefined" || window.innerWidth < 768 || !trackRef.current) return;
    const trackTop = window.scrollY + trackRef.current.getBoundingClientRect().top;
    const scrollRange = Math.max(0, trackRef.current.offsetHeight - window.innerHeight);
    const targetProgress = (nextIndex + 0.15) / projects.length;
    window.scrollTo({
      top: trackTop + scrollRange * targetProgress,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };
  const previousProject = () => goToProject(activeIndex - 1);
  const nextProject = () => goToProject(activeIndex + 1);
  const onPointerMove = (event) => {
    if (reduceMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    tiltY.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 5);
    tiltX.set(-((event.clientY - bounds.top) / bounds.height - 0.5) * 4);
  };
  const resetTilt = () => { tiltX.set(0); tiltY.set(0); };
  const technologies = lang === "en" ? project.tagsEn : project.tagsAr;
  const category = project.category === "website" ? (lang === "en" ? "Website" : "موقع إلكتروني") : project.category === "pos" ? (lang === "en" ? "POS System" : "نظام نقاط بيع") : (lang === "en" ? "Custom Software" : "برنامج مخصص");
  const progress = `${((activeIndex + 1) / projects.length) * 100}%`;

  return (
    <div ref={trackRef} className="relative md:h-[var(--project-track)]" style={{ "--project-track": `${Math.max(360, projects.length * 62)}vh` }}>
      <div className="mx-auto grid min-h-0 max-w-7xl items-center gap-10 py-12 md:sticky md:top-20 md:min-h-[calc(100vh-5rem)] md:grid-cols-[minmax(0,3fr)_minmax(300px,2fr)] md:py-10 lg:gap-16">
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 70, scale: 0.88, rotateX: 7, rotateY: -6 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0, rotateY: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0.25 : 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 mx-auto w-full max-w-4xl [perspective:1400px]"
        >
          <motion.div
            onPointerMove={onPointerMove}
            onPointerLeave={resetTilt}
            style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
            whileHover={reduceMotion ? undefined : { scale: 1.012 }}
            animate={reduceMotion ? undefined : { x: activeIndex % 2 ? 2 : -2, y: [0, -3, 0], rotateZ: activeIndex % 2 ? 0.2 : -0.2 }}
            transition={{
              x: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
              rotateZ: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative mx-auto w-[96%] focus-within:outline-none sm:w-[94%]"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`${visitLabel}: ${project.titleEn}`} className="group block rounded-[1.8rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-4 focus-visible:ring-offset-dark">
              <div className="relative rounded-t-[1.7rem] border-[9px] border-slate-950 bg-slate-950 p-1 shadow-[0_34px_80px_-28px_rgba(0,0,0,0.65)] transition-shadow duration-500 group-hover:shadow-[0_38px_88px_-24px_rgba(0,0,0,0.78)] sm:border-[12px]">
                <div className="absolute left-1/2 top-[-7px] z-30 flex h-2.5 w-10 -translate-x-1/2 items-center justify-center rounded-b-full bg-slate-950">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-700 ring-1 ring-slate-500/40" />
                </div>
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-slate-900">
                  <AnimatePresence mode="wait">
                    <motion.div key={project.id} initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.975 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }} transition={{ duration: reduceMotion ? 0.2 : 0.55, ease: [0.22, 1, 0.36, 1] }} className={`absolute inset-0 bg-gradient-to-br ${project.color}`}>
                      {project.preview ? (
                        <Image src={project.preview} alt={`${project.titleEn} project screenshot`} fill priority={activeIndex === 0} className="object-cover object-top" sizes="(max-width: 768px) 94vw, 60vw" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <Image src={project.logo} alt={`${project.titleEn} project artwork`} width={240} height={240} priority={activeIndex === 0} className="max-h-[72%] w-auto object-contain drop-shadow-2xl" />
                        </div>
                      )}
                      <motion.div key={`reflection-${project.id}`} initial={{ x: "-140%", opacity: 0 }} animate={{ x: "190%", opacity: [0, 0.16, 0] }} transition={{ duration: reduceMotion ? 0 : 1.2, delay: 0.12, ease: "easeInOut" }} className="pointer-events-none absolute inset-y-0 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent blur-xl" />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              <div className="relative mx-auto h-5 w-[108%] -translate-x-[4%] rounded-b-2xl bg-gradient-to-b from-slate-300 via-slate-400 to-slate-600 shadow-[0_24px_40px_-16px_rgba(0,0,0,0.65)] dark:from-slate-500 dark:via-slate-600 dark:to-slate-800 sm:h-7">
                <div className="absolute left-1/2 top-0 h-1.5 w-20 -translate-x-1/2 rounded-b-xl bg-slate-500/60 sm:w-28" />
                <div className="absolute inset-x-[12%] -bottom-1 h-1 rounded-full bg-black/30 blur-[2px]" />
              </div>
              <div className="mx-auto mt-4 h-5 w-[76%] rounded-[50%] bg-black/35 blur-xl transition-all duration-500 group-hover:w-[82%] group-hover:bg-black/45" />
            </a>
          </motion.div>
        </motion.div>

        <div className="order-2 px-2 text-center md:text-start" dir={lang === "ar" ? "rtl" : "ltr"}>
          <AnimatePresence mode="wait">
            <motion.div key={`project-copy-${project.id}`} initial={{ opacity: 0, x: reduceMotion ? 0 : (lang === "ar" ? 24 : -24) }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: reduceMotion ? 0 : (lang === "ar" ? -16 : 16) }} transition={{ duration: reduceMotion ? 0.2 : 0.5, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.06 }}>
              <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-dark dark:text-primary-light">{category}</span>
                <span dir="ltr" className="font-mono text-sm text-gray-500">{String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">{lang === "en" ? project.titleEn : project.titleAr}</h3>
              <p className="mb-6 text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">{lang === "en" ? project.descriptionEn : project.descriptionAr}</p>
              <div className="mb-7 flex flex-wrap justify-center gap-2 md:justify-start">
                {technologies.map((technology) => <span key={technology} className="rounded-full border border-gray-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-300">{technology}</span>)}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-4 focus-visible:ring-offset-dark">{visitLabel}<ExternalLink size={16} /></a>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8">
            <div className="h-1 overflow-hidden rounded-full bg-primary/15"><motion.div className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light" animate={{ width: progress }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} /></div>
            <div className="mt-4 flex items-center justify-center gap-3 md:justify-start">
              <button type="button" onClick={previousProject} aria-label="Previous project" className="grid h-10 w-10 place-items-center rounded-full border border-primary/25 text-primary-dark transition hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:text-primary-light"><ChevronLeft size={18} /></button>
              <button type="button" onClick={nextProject} aria-label="Next project" className="grid h-10 w-10 place-items-center rounded-full border border-primary/25 text-primary-dark transition hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:text-primary-light"><ChevronRight size={18} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = ({ lang }) => {
  const [filter, setFilter] = useState("all");
  const [activeProject, setActiveProject] = useState(0);

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
      preview: "/project-screens/elzawy-new.png",
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
      preview: heroImage,
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
      preview: "/project-screens/aruqah.png",
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
      preview: "/project-screens/cosmetics.png",
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
      preview: "/project-screens/sharm-kitesurf.png",
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
    {
      id: 8,
      category: "website",
      titleEn: "TriPyramids",
      titleAr: "TriPyramids",
      descriptionEn: "Modern travel platform for discovering and planning Egypt experiences",
      descriptionAr: "منصة سفر عصرية لاكتشاف وتجهيز التجارب السياحية في مصر",
      logo: logo2,
      preview: tripyramidsHero,
      color: "from-[#0F766E] to-[#2DBEA1]",
      tagsEn: ["Travel", "Tourism", "Responsive"],
      tagsAr: ["سفر", "سياحة", "متجاوب"],
      resultsEn: ["Experience showcase", "Mobile optimized", "Modern interface"],
      resultsAr: ["عرض التجارب", "محسن للموبايل", "واجهة عصرية"],
      client: "TriPyramids",
      duration: "Live",
      link: "https://tripyramids.online/",
      live: true,
    },
    {
      id: 9,
      category: "website",
      titleEn: "Amjad Estate",
      titleAr: "Amjad Estate",
      descriptionEn: "Premium real-estate website for showcasing properties and investment opportunities",
      descriptionAr: "موقع عقاري راقٍ لعرض العقارات والفرص الاستثمارية",
      logo: logo3,
      preview: amjadEstateHero,
      color: "from-[#334155] to-[#0F766E]",
      tagsEn: ["Real Estate", "Premium", "Responsive"],
      tagsAr: ["عقارات", "راقي", "متجاوب"],
      resultsEn: ["Property showcase", "Premium visual system", "Conversion focused"],
      resultsAr: ["عرض العقارات", "هوية بصرية راقية", "مهيأ للتحويل"],
      client: "Amjad Estate",
      duration: "Live",
      link: "https://amjad-estate.space/",
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
                onClick={() => { setFilter(category.key); setActiveProject(0); }}
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

        <DeviceProjectShowcase
          projects={filteredProjects}
          activeIndex={activeProject}
          setActiveIndex={setActiveProject}
          lang={lang}
          visitLabel={t.visit}
        />

        {false && (<div className="hidden">
        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="relative mx-auto h-[460px] sm:h-[520px] max-w-3xl mb-6 overflow-hidden [perspective:1400px]"
          >
            {filteredProjects.map((project, projectIndex) => {
              let offset = projectIndex - activeProject;
              const half = Math.floor(filteredProjects.length / 2);
              if (offset > half) offset -= filteredProjects.length;
              if (offset < -half) offset += filteredProjects.length;
              const distance = Math.abs(offset);
              if (distance > 4) return null;
              return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{
                  opacity: 1 - distance * 0.12,
                  x: offset * 58,
                  y: distance * 10,
                  scale: 1 - distance * 0.065,
                  rotateY: offset * -7,
                  zIndex: 30 - distance,
                }}
                transition={{ type: "spring", stiffness: 240, damping: 24 }}
                onClick={() => offset !== 0 && setActiveProject(projectIndex)}
                className={`absolute inset-x-0 top-8 mx-auto w-[64%] max-w-[310px] group [transform-style:preserve-3d] sm:top-10 sm:w-[48%] ${offset === 0 ? "cursor-default" : "cursor-pointer"}`}
              >
                <div className={`relative flex flex-col overflow-hidden rounded-[2rem] border bg-white transition-all duration-500 dark:bg-dark-card ${offset === 0 ? "border-primary/40 shadow-2xl shadow-primary/20" : "border-white/10 shadow-xl shadow-black/20"}`}>
                  <div
                    className={`w-full h-[350px] sm:h-[410px] bg-gradient-to-r ${project.color} relative overflow-hidden shrink-0`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      {project.preview ? (
                          <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out">
                          <Image
                            src={project.preview}
                            alt={`${project.titleEn} preview`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10" />
                          <div className="absolute -inset-x-1/2 top-0 h-full w-1/3 -skew-x-12 bg-white/20 blur-2xl opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100" />
                        </div>
                      ) : project.id === 4 ? (
                        <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-300">
                          <Image
                            src={project.logo}
                            alt={`${project.titleEn} - DoGether شركة برمجة مصر`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                      ) : (
                        <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center overflow-hidden transform group-hover:scale-110 transition-transform duration-300">
                          <Image
                            src={project.logo}
                            alt={`${project.titleEn} - DoGether شركة برمجة مصر`}
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

                  <div className="hidden">
                    <h3 className="text-base sm:text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary-dark dark:group-hover:text-primary-light transition-colors">
                      {lang === "en" ? project.titleEn : project.titleAr}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-base mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-2">
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
              );
            })}

            <button
              type="button"
              onClick={() => setActiveProject((activeProject - 1 + filteredProjects.length) % filteredProjects.length)}
              aria-label="Previous project"
              className="absolute left-2 top-1/2 z-50 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-primary/30 bg-dark/80 text-primary-light shadow-xl backdrop-blur-md transition hover:scale-110 hover:bg-primary hover:text-white sm:left-6"
            >
              <ChevronRight className="rotate-180" size={22} />
            </button>
            <button
              type="button"
              onClick={() => setActiveProject((activeProject + 1) % filteredProjects.length)}
              aria-label="Next project"
              className="absolute right-2 top-1/2 z-50 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-primary/30 bg-dark/80 text-primary-light shadow-xl backdrop-blur-md transition hover:scale-110 hover:bg-primary hover:text-white sm:right-6"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-2" aria-label="Project carousel navigation">
          {filteredProjects.map((project, index) => (
            <button key={project.id} type="button" onClick={() => setActiveProject(index)} aria-label={`Show project ${index + 1}`} className={`h-2 rounded-full transition-all duration-300 ${index === activeProject ? "w-8 bg-primary" : "w-2 bg-primary/25 hover:bg-primary/50"}`} />
          ))}
        </div>

        {filteredProjects[activeProject] && (
          <motion.div
            key={`details-${filteredProjects[activeProject].id}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-6 max-w-2xl rounded-3xl border border-primary/15 bg-white/80 p-5 text-center shadow-lg backdrop-blur-xl dark:bg-dark-card/80 sm:p-7"
          >
            <span className="mb-2 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-dark dark:text-primary-light">
              {filteredProjects[activeProject].client}
            </span>
            <h3 className="mb-2 text-xl font-bold sm:text-2xl">
              {lang === "en" ? filteredProjects[activeProject].titleEn : filteredProjects[activeProject].titleAr}
            </h3>
            <p className="mx-auto mb-4 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
              {lang === "en" ? filteredProjects[activeProject].descriptionEn : filteredProjects[activeProject].descriptionAr}
            </p>
            <a href={filteredProjects[activeProject].link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5">
              {t.visit}<ExternalLink size={16} />
            </a>
          </motion.div>
        )}
        </div>)}

      </div>
    </section>
  );
};

export default Portfolio;
