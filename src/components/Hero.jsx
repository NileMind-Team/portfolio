'use client'

import { motion } from "framer-motion";
import { Zap, CheckCircle, TrendingUp, Sparkles } from "lucide-react";

const Hero = ({ lang }) => {
  const content = {
    en: {
      badge: "🚀 Premier Digital Agency",
      title: "DoGether",
      titleHighlight: "Digital Solutions",
      desc1: "We create",
      descSpan1: "stunning websites",
      descAnd: "and",
      descSpan2: "powerful POS systems",
      descEnd:
        "that help businesses grow, increase sales, and streamline operations.",
      stat1: "Response",
      stat2: "Projects",
      stat3: "Growth",
      stat4: "Satisfaction",
      ctaQuote: "Start Your Project",
      ctaWhatsapp: "Chat on WhatsApp",
    },
    ar: {
      badge: "🚀 وكالة رقمية رائدة",
      title: "DoGether",
      titleHighlight: "الحلول الرقمية",
      desc1: "نحن نصنع",
      descSpan1: "مواقع ويب مذهلة",
      descAnd: "و",
      descSpan2: "أنظمة نقاط بيع قوية",
      descEnd: "تساعد الشركات على النمو وزيادة المبيعات وتبسيط العمليات.",
      stat1: "الرد",
      stat2: "مشاريع",
      stat3: "نمو",
      stat4: "رضا",
      ctaQuote: "ابدأ مشروعك",
      ctaWhatsapp: "تواصل عبر واتساب",
    },
  };

  const t = content[lang];
  const isRTL = lang === "ar";

  return (
    <section
      id="home"
      className={`pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-24 lg:pb-20 relative overflow-hidden ${
        isRTL ? "rtl" : "ltr"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/5 via-transparent to-primary-dark/5 dark:from-primary-light/10 dark:via-transparent dark:to-primary-dark/10"></div>

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-primary-light/5 dark:bg-primary-light/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-5xl">
          {/*
            * Plain div, and a CSS animation rather than a framer-motion one. This block holds the
            * h1 and the paragraph below it, and that paragraph is the page's Largest Contentful
            * Paint element on mobile.
            *
            * framer-motion serialises its `initial` prop into the prerendered HTML, so what used to
            * ship was `style="opacity:0;transform:translateX(30px)"` wrapped around the headline.
            * The text was in the document from the third millisecond and stayed invisible until
            * React had downloaded, parsed, executed, hydrated, and only then run the entry
            * animation. On a desktop CPU that whole chain finishes in half a second and nobody
            * notices; on the throttled mobile CPU Lighthouse simulates it took 5.6 seconds, against
            * a 3ms server response. The page was hiding its own content behind its own JavaScript.
            *
            * As a CSS animation the fade belongs to the compositor: it starts at first paint with
            * no JavaScript involved at all, and `from` is the only frame that is ever invisible.
            */}
          <div className="text-center motion-safe:animate-hero-enter">
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-light/10 to-primary-dark/10 text-primary-dark dark:text-primary-light font-medium mb-4 border border-primary-light/20 dark:border-primary-light/30 ${
                isRTL ? "flex-row" : "flex-row"
              }`}
            >
              <Sparkles className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
              {t.badge}
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-5 leading-tight">
              {t.title}
              <span className="block bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent mt-2">
                {t.titleHighlight}
              </span>
            </h1>

            <p className="mx-auto max-w-3xl text-gray-600 dark:text-gray-300 text-lg sm:text-xl lg:text-xl mb-6 leading-relaxed">
              {t.desc1}{" "}
              <span className="text-primary-dark dark:text-primary-light font-semibold">
                {t.descSpan1}
              </span>{" "}
              {t.descAnd}{" "}
              <span className="text-primary-dark dark:text-primary-light font-semibold">
                {t.descSpan2}
              </span>{" "}
              {t.descEnd}
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8 lg:mb-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary-light to-primary-dark px-6 py-3 font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 dark:focus:ring-offset-dark"
              >
                {t.ctaQuote}
              </a>
              <a
                href="https://wa.me/201062485133"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.ctaWhatsapp} - DoGether`}
                className="inline-flex items-center justify-center rounded-xl border-2 border-primary-dark px-6 py-3 font-bold text-primary-dark transition-colors hover:bg-primary-dark hover:text-white dark:border-primary-light dark:text-primary-light dark:hover:bg-primary-light dark:hover:text-dark"
              >
                {t.ctaWhatsapp}
              </a>
            </div>

            {/* Also above the fold, so it carries its entry in CSS for the same reason as the block above. */}
            <div
              style={{ animationDelay: "0.18s" }}
              className="group relative mx-auto max-w-4xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#10283a] via-[#0d2030] to-[#091722] p-4 text-white shadow-2xl shadow-primary-dark/20 motion-safe:animate-hero-rise sm:p-5"
            >
              <motion.div
                animate={{ x: [0, 45, 0], y: [0, -24, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-primary-light/20 blur-3xl"
              />
              <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:32px_32px]" />

              <div className="relative z-10 mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-white/60 sm:text-sm">
                  <TrendingUp className="h-4 w-4 text-primary-light" />
                  <span>{isRTL ? "مؤشرات الأداء" : "Performance overview"}</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-primary-light/15 bg-primary-light/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-light">
                  <motion.span animate={{ opacity: [0.35, 1, 0.35], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 1.8, repeat: Infinity }} className="h-1.5 w-1.5 rounded-full bg-primary-light shadow-[0_0_8px_#2DBEA1]" />
                  Live
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-4 divide-x divide-x-reverse divide-white/10 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-1 py-3 backdrop-blur-sm sm:px-3">
                {[
                  { icon: <Zap className="h-4 w-4" />, value: "24h", label: t.stat1 },
                  { icon: <CheckCircle className="h-4 w-4" />, value: "7+", label: t.stat2 },
                  { icon: <TrendingUp className="h-4 w-4" />, value: "100%", label: t.stat3 },
                  { icon: <Sparkles className="h-4 w-4" />, value: "98%", label: t.stat4 },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    /* The stagger survives as a per-item delay; `backwards` fill covers the wait. */
                    style={{ animationDelay: `${0.3 + index * 0.09}s` }}
                    className="flex min-w-0 flex-col items-center px-1 text-center transition-transform hover:-translate-y-[3px] motion-safe:animate-hero-enter sm:px-2"
                  >
                    <motion.span
                      animate={{ rotate: index === 3 ? [0, 12, -12, 0] : 0, scale: [1, 1.08, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.35 }}
                      className="mb-1.5 text-primary-light"
                    >
                      {stat.icon}
                    </motion.span>
                    <strong className="text-lg font-black tracking-tight sm:text-2xl">{stat.value}</strong>
                    <span className="max-w-full truncate text-[10px] text-white/50 sm:text-xs">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="relative z-10 mt-3 h-28 overflow-hidden rounded-xl sm:h-36" aria-hidden="true">
                <svg viewBox="0 0 600 150" preserveAspectRatio="none" className="h-full w-full overflow-visible">
                  <defs>
                    <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2DBEA1" stopOpacity="0.38" />
                      <stop offset="100%" stopColor="#2DBEA1" stopOpacity="0" />
                    </linearGradient>
                    <filter id="heroChartGlow" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                  </defs>
                  {[30, 70, 110, 148].map((y) => <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="rgba(255,255,255,.07)" strokeWidth="1" />)}
                  <motion.path
                    d="M0 126 C45 122, 68 109, 105 113 S164 91, 205 96 S266 66, 310 76 S372 48, 415 57 S470 28, 510 39 S566 17, 600 12 L600 150 L0 150 Z"
                    fill="url(#heroChartFill)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.15 }}
                  />
                  <motion.path
                    d="M0 126 C45 122, 68 109, 105 113 S164 91, 205 96 S266 66, 310 76 S372 48, 415 57 S470 28, 510 39 S566 17, 600 12"
                    fill="none" stroke="#2DBEA1" strokeWidth="4" strokeLinecap="round" vectorEffect="non-scaling-stroke" filter="url(#heroChartGlow)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.8, delay: 0.9, ease: "easeInOut" }}
                  />
                  {[[105,113],[205,96],[310,76],[415,57],[510,39],[600,12]].map(([cx, cy], index) => (
                    <motion.circle key={cx} cx={cx} cy={cy} r="5" fill="#0d2030" stroke="#5DE4CA" strokeWidth="3"
                      initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: [0, 1.45, 1] }} transition={{ delay: 1.35 + index * 0.16, duration: 0.45 }} />
                  ))}
                  <motion.circle
                    r="7" fill="#ffffff" stroke="#2DBEA1" strokeWidth="4" filter="url(#heroChartGlow)"
                    animate={{ cx: [0,105,205,310,415,510,600], cy: [126,113,96,76,57,39,12], opacity: [0,1,1,1,1,1,0] }}
                    transition={{ duration: 5.5, repeat: Infinity, repeatDelay: 1, ease: "easeInOut", delay: 2.6 }}
                  />
                </svg>
                <motion.div
                  animate={{ x: ["-120%", "620%"] }}
                  transition={{ duration: 5.5, repeat: Infinity, repeatDelay: 1, ease: "easeInOut", delay: 2.6 }}
                  className="pointer-events-none absolute bottom-0 top-0 w-16 bg-gradient-to-r from-transparent via-primary-light/10 to-transparent blur-lg"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
