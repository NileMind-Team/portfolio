'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import dynamic from "next/dynamic";
import { motion, AnimatePresence, useMotionValue, useMotionValueEvent, useReducedMotion, useSpring, useTransform } from "framer-motion";
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

const PortfolioLaptop3D = dynamic(() => import("./PortfolioLaptop3D"), { ssr: false, loading: () => null });

const clamp01 = (value) => Math.min(1, Math.max(0, value));
const smootherstep = (value) => value * value * value * (value * (value * 6 - 15) + 10);

/* Share of the gap between two projects that stays settled before and after the turn. */
const SETTLE_SHARE = 0.19;

const SCENE_LIGHT = {
  7: "rgba(56,170,205,0.10)",
  8: "rgba(206,166,86,0.085)",
  9: "rgba(196,148,104,0.075)",
  2: "rgba(209,32,36,0.075)",
  4: "rgba(41,178,222,0.09)",
};

/* ---------------------------------------------------------------- copy reveal */

/*
 * Copy visibility is driven by the same value that drives the device, not by its own scroll box.
 * That keeps the text on screen while the laptop is settled beside it and clears it out of the way
 * before the turn sweeps across the column, so the two never overlap.
 */
const revealAt = (distance, order) => {
  const hold = 0.11 - order * 0.006;
  const release = 0.32 - order * 0.008;
  const magnitude = Math.abs(distance);
  if (magnitude <= hold) return 1;
  if (magnitude >= release) return 0;
  return 1 - (magnitude - hold) / (release - hold);
};

const SceneCopy = ({ distance, order, reduceMotion, className = "", children }) => {
  const presence = useTransform(distance, (value) => (reduceMotion ? (Math.abs(value) < 0.5 ? 1 : 0) : revealAt(value, order)));
  const opacity = useTransform(presence, (value) => value);
  const y = useTransform([presence, distance], ([value, offset]) => (reduceMotion ? 0 : (1 - value) * (offset > 0 ? -26 : 26)));
  const filter = useTransform(presence, (value) => (reduceMotion ? "blur(0px)" : `blur(${(1 - value) * 3}px)`));
  return (
    <motion.div className={className} style={{ opacity, y, filter }}>
      {children}
    </motion.div>
  );
};

/* ---------------------------------------------------------------- one project block */

const ProjectScene = ({ project, index, total, lang, visitLabel, registerScene, reduceMotion, travel }) => {
  const sceneRef = useRef(null);
  const distance = useTransform(travel, (value) => value - index);
  const laptopOnRight = index % 2 === 0;
  const technologies = lang === "en" ? project.tagsEn : project.tagsAr;
  const caseStudy = lang === "en" ? project.caseStudyEn : project.caseStudyAr;
  const category =
    project.category === "website"
      ? lang === "en"
        ? "Website"
        : "موقع إلكتروني"
      : project.category === "pos"
        ? lang === "en"
          ? "POS System"
          : "نظام نقاط بيع"
        : lang === "en"
          ? "Custom Software"
          : "برنامج مخصص";

  const attachScene = useCallback(
    (node) => {
      sceneRef.current = node;
      registerScene(index, node);
    },
    [index, registerScene],
  );

  return (
    <article
      ref={attachScene}
      data-portfolio-scene={index + 1}
      className="relative flex w-full items-center py-6 md:py-8"
      style={{ minHeight: "var(--scene-height)" }}
      aria-labelledby={`portfolio-scene-${project.id}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(60% 55% at ${laptopOnRight ? "72%" : "28%"} 50%, ${SCENE_LIGHT[project.id] || "rgba(148,163,184,0.07)"} 0%, transparent 100%)` }}
      />
      <div dir="ltr" className="relative mx-auto grid w-full max-w-7xl items-center px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div
          className={`mx-auto w-full max-w-lg pt-[var(--copy-offset)] text-center lg:row-start-1 lg:max-w-none lg:pt-0 lg:text-start ${laptopOnRight ? "lg:col-start-1 lg:pe-4" : "lg:col-start-2 lg:ps-4"}`}
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          <div className="mb-3 flex items-center justify-center gap-3 lg:justify-start">
            <SceneCopy distance={distance} order={0} reduceMotion={reduceMotion}>
              <span dir="ltr" className="font-mono text-xs tracking-widest text-gray-500 sm:text-sm">
                {String(index + 1).padStart(2, "0")} <span className="opacity-40">/</span> {String(total).padStart(2, "0")}
              </span>
            </SceneCopy>
            <SceneCopy distance={distance} order={1} reduceMotion={reduceMotion}>
              <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary-dark dark:text-primary-light sm:text-xs">{category}</span>
            </SceneCopy>
          </div>
          <SceneCopy distance={distance} order={2} reduceMotion={reduceMotion} className="mb-3 md:mb-4">
            <h3 id={`portfolio-scene-${project.id}`} className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-[2.6rem] lg:leading-tight">
              {lang === "en" ? project.titleEn : project.titleAr}
            </h3>
          </SceneCopy>
          <SceneCopy distance={distance} order={3} reduceMotion={reduceMotion} className="mb-3 md:mb-4">
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-300 sm:text-base sm:leading-7">{lang === "en" ? project.descriptionEn : project.descriptionAr}</p>
          </SceneCopy>
          {caseStudy && (
            <SceneCopy distance={distance} order={4} reduceMotion={reduceMotion} className="mb-4 md:mb-5">
              <p className="border-s-2 border-primary/40 ps-3 text-xs leading-6 text-gray-500 dark:text-gray-400 sm:text-sm">{caseStudy}</p>
            </SceneCopy>
          )}
          <SceneCopy distance={distance} order={5} reduceMotion={reduceMotion} className="mb-5 md:mb-6">
            <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
              {technologies.slice(0, 4).map((technology) => (
                <span key={technology} className="rounded-full border border-gray-200 bg-white/65 px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                  {technology}
                </span>
              ))}
            </div>
          </SceneCopy>
          <SceneCopy distance={distance} order={6} reduceMotion={reduceMotion}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-4 focus-visible:ring-offset-dark"
            >
              {visitLabel}
              <ExternalLink size={16} />
            </a>
          </SceneCopy>
        </div>
      </div>
    </article>
  );
};

/* ---------------------------------------------------------------- still fallback */

/*
 * The still is a real frame baked from the same 3D model, captured with the laptop centred.
 * Because the render always spans the full stage width, drawing it at 100% width and nudging it
 * by the same horizontal share the 3D uses keeps both presentations pixel-aligned.
 */
const LaptopStill = ({ project, label, offset, scale }) => {
  const [state, setState] = useState("loading");
  if (state === "failed") return null;
  return (
    <img
      src={`/models/laptop-${project.id}.webp`}
      alt={label}
      className={`absolute top-1/2 max-w-none transition-opacity duration-300 ${state === "ready" ? "opacity-100" : "opacity-0"}`}
      /*
       * left is resolved against the stage, transform against the image. Keeping the settle
       * offset on left means it stays a share of the stage no matter how wide the image is
       * scaled for the breakpoint, which is the same quantity the renderer works in.
       */
      style={{ width: `${scale}%`, left: `calc(50% + ${offset}%)`, transform: "translate(-50%, -50%)" }}
      onLoad={() => setState("ready")}
      onError={() => setState("failed")}
      draggable="false"
    />
  );
};

/* ---------------------------------------------------------------- journey */

const PortfolioJourney = ({ projects, activeIndex, setActiveIndex, lang, visitLabel, viewAllLabel }) => {
  const journeyRef = useRef(null);
  const sceneRefs = useRef([]);
  const activeRef = useRef(0);
  const metricsRef = useRef({ anchors: [], entryStart: 0, exitEnd: 1 });

  const [mounted, setMounted] = useState(false);
  const [viewport, setViewport] = useState("desktop");
  const [nearViewport, setNearViewport] = useState(false);
  const [inViewport, setInViewport] = useState(false);
  const [renderReady, setRenderReady] = useState(false);
  const [renderFailed, setRenderFailed] = useState(false);

  const reduceMotion = useReducedMotion();
  const total = projects.length;
  const lastIndex = Math.max(0, total - 1);
  const projectsKey = projects.map((project) => project.id).join("|");

  const rawTravel = useMotionValue(0);
  const travel = useSpring(rawTravel, { stiffness: 180, damping: 34, mass: 0.4 });
  const entry = useMotionValue(0);
  const exit = useMotionValue(0);
  const stageOpacity = useTransform([entry, exit], ([enterValue, exitValue]) => enterValue * (1 - exitValue));
  const motionBundle = useMemo(() => ({ travel, entry, exit }), [travel, entry, exit]);

  const activeProject = projects[Math.min(activeIndex, lastIndex)] || projects[0];

  const registerScene = useCallback((index, node) => {
    sceneRefs.current[index] = node;
  }, []);

  /*
   * Waypoints are read from layout on every frame rather than cached. Fonts, images and lazy
   * sections all shift this page after mount, and a cached measurement silently desynchronises
   * the device from the copy when that happens.
   */
  const readWaypoints = useCallback(() => {
    const journey = journeyRef.current;
    const nodes = sceneRefs.current.slice(0, total).filter(Boolean);
    if (!journey || !total || nodes.length !== total) return null;
    const viewportHeight = window.innerHeight;
    const base = window.scrollY;
    const anchors = nodes.map((node) => {
      const bounds = node.getBoundingClientRect();
      return base + bounds.top + bounds.height / 2 - viewportHeight / 2;
    });
    const journeyBounds = journey.getBoundingClientRect();
    const journeyTop = base + journeyBounds.top;
    const journeyBottom = journeyTop + journeyBounds.height;
    const metrics = {
      anchors,
      entryStart: Math.min(anchors[0] - 1, journeyTop - viewportHeight * 0.7),
      exitEnd: Math.max(anchors[total - 1] + 1, journeyBottom - viewportHeight * 0.35),
    };
    metricsRef.current = metrics;
    return metrics;
  }, [total]);

  const applyScroll = useCallback(
    (position) => {
      const waypoints = readWaypoints();
      if (!waypoints) return;
      const { anchors, entryStart, exitEnd } = waypoints;
      const last = anchors.length - 1;

      entry.set(anchors[0] > entryStart ? clamp01((position - entryStart) / (anchors[0] - entryStart)) : 1);
      exit.set(exitEnd > anchors[last] ? clamp01((position - anchors[last]) / (exitEnd - anchors[last])) : 0);

      let value = 0;
      if (position >= anchors[last]) {
        value = last;
      } else if (position > anchors[0]) {
        for (let index = 0; index < last; index += 1) {
          if (position <= anchors[index + 1]) {
            const span = Math.max(1, anchors[index + 1] - anchors[index]);
            const raw = clamp01((position - anchors[index]) / span);
            const turn = clamp01((raw - SETTLE_SHARE) / Math.max(0.001, 1 - SETTLE_SHARE * 2));
            value = index + smootherstep(turn);
            break;
          }
        }
      }
      rawTravel.set(value);
    },
    [entry, exit, rawTravel, readWaypoints],
  );

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const readViewport = () => setViewport(window.innerWidth < 768 ? "mobile" : window.innerWidth < 1024 ? "tablet" : "desktop");
    readViewport();
    window.addEventListener("resize", readViewport, { passive: true });
    return () => window.removeEventListener("resize", readViewport);
  }, []);

  useEffect(() => {
    const journey = journeyRef.current;
    if (!journey) return undefined;
    const nearObserver = new IntersectionObserver(([record]) => setNearViewport(record.isIntersecting), { rootMargin: "600px 0px 600px 0px" });
    const liveObserver = new IntersectionObserver(([record]) => setInViewport(record.isIntersecting), { rootMargin: "80px 0px 80px 0px" });
    nearObserver.observe(journey);
    liveObserver.observe(journey);
    return () => {
      nearObserver.disconnect();
      liveObserver.disconnect();
    };
  }, [projectsKey]);

  useEffect(() => {
    /*
     * Scroll events are already coalesced to one per frame, and the measurement below is a handful
     * of rect reads, so it runs inline. Deferring it to requestAnimationFrame made the device lag
     * the page whenever the browser throttled frames.
     */
    const schedule = () => applyScroll(window.scrollY);

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    window.addEventListener("load", schedule);
    /* Late layout shifts (fonts, images, lazy sections) land within the first few seconds. */
    const settleTimers = [120, 400, 900, 1800, 3200].map((delay) => window.setTimeout(schedule, delay));

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("load", schedule);
      settleTimers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [applyScroll, projectsKey, viewport]);

  useMotionValueEvent(travel, "change", (value) => {
    const next = Math.min(lastIndex, Math.max(0, Math.round(value)));
    if (next !== activeRef.current) {
      activeRef.current = next;
      setActiveIndex(next);
    }
  });

  useEffect(() => {
    activeRef.current = 0;
    setActiveIndex(0);
    rawTravel.set(0);
    travel.jump(0);
  }, [projectsKey, rawTravel, setActiveIndex, travel]);

  const goToProject = useCallback(
    (requested) => {
      const target = Math.min(lastIndex, Math.max(0, requested));
      const anchor = (readWaypoints() || metricsRef.current).anchors[target];
      if (Number.isFinite(anchor)) {
        window.scrollTo({ top: anchor, behavior: reduceMotion ? "auto" : "smooth" });
      } else {
        sceneRefs.current[target]?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
      }
    },
    [lastIndex, readWaypoints, reduceMotion],
  );

  if (!total) return null;

  /*
   * On mobile the device sits above the copy rather than beside it, so the scene height is bound by
   * stage + copy, not by taste. The slack was inside the stage: the laptop is about 160px tall in a
   * band that reserved 346px, leaving a large empty gap above and below it. Shrinking the stage is
   * what actually removes the space; the scene height then follows it down.
   */
  const sceneHeight = viewport === "mobile" ? "68svh" : viewport === "tablet" ? "76vh" : "72vh";
  const copyOffset = viewport === "mobile" ? "30svh" : viewport === "tablet" ? "46vh" : "0px";
  const showStill = renderFailed || !renderReady;
  /* Matches the world-space offset the renderer settles on: offsetX / frameWidth. */
  const settleShare = viewport === "mobile" ? 0 : viewport === "tablet" ? 16.7 : 21.8;
  const laptopOffset = activeIndex % 2 === 0 ? settleShare : -settleShare;
  /*
   * The stills are baked at the desktop framing (frameWidth 2.85). A narrower breakpoint frames
   * less world, so the device fills more of the stage there and the still has to be scaled up by
   * the same ratio, or the fallback shows a noticeably smaller laptop than the live render.
   */
  const stillScale = viewport === "mobile" ? 219.2 : viewport === "tablet" ? 132.6 : 100;

  const navigation = (compact) => (
    <div className={`flex items-center ${compact ? "gap-2" : "flex-col gap-3"}`}>
      <button
        type="button"
        disabled={activeIndex === 0}
        onClick={() => goToProject(activeIndex - 1)}
        aria-label={lang === "en" ? "Previous project" : "المشروع السابق"}
        className="grid h-11 w-11 place-items-center rounded-full border border-primary/25 bg-dark/70 text-primary-light backdrop-blur-md transition hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ChevronLeft size={18} />
      </button>
      <div className={compact ? "flex gap-2" : "relative flex flex-col gap-2"} aria-label={lang === "en" ? "Projects progress" : "تقدم المشاريع"}>
        {!compact && <div aria-hidden="true" className="absolute bottom-1 left-1/2 top-1 w-px -translate-x-1/2 bg-primary/15" />}
        {projects.map((project, index) => (
          <button
            key={`journey-dot-${project.id}`}
            type="button"
            onClick={() => goToProject(index)}
            aria-label={`${lang === "en" ? "Go to project" : "انتقل إلى المشروع"} ${index + 1}`}
            aria-current={index === activeIndex ? "step" : undefined}
            className={`relative z-10 h-3 w-3 rounded-full border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${index === activeIndex ? "scale-125 border-primary-light bg-primary shadow-[0_0_0_4px_rgba(20,184,166,0.12)]" : "border-primary/35 bg-dark-light hover:border-primary"}`}
          />
        ))}
      </div>
      <button
        type="button"
        disabled={activeIndex === lastIndex}
        onClick={() => goToProject(activeIndex + 1)}
        aria-label={lang === "en" ? "Next project" : "المشروع التالي"}
        className="grid h-11 w-11 place-items-center rounded-full border border-primary/25 bg-dark/70 text-primary-light backdrop-blur-md transition hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );

  return (
    <div className="relative" style={{ "--scene-height": sceneHeight, "--copy-offset": copyOffset }}>
      <div className="mb-1 flex items-center justify-center gap-4 lg:hidden">
        <span dir="ltr" className="min-w-14 font-mono text-xs text-gray-500">
          {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        {navigation(true)}
      </div>

      {/*
        * Rendered into <body> rather than in place. The section is promoted to its own compositing
        * layer (see the [transform:translateZ(0)] on #portfolio), and a transformed ancestor becomes
        * the containing block for fixed descendants — left here, this aside would anchor to the
        * section instead of the viewport and scroll away with it.
        */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {inViewport && (
              <motion.aside
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                dir={lang === "en" ? "ltr" : "rtl"}
                className="fixed end-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
                aria-label={lang === "en" ? "Portfolio navigation" : "التنقل بين المشاريع"}
              >
                {navigation(false)}
              </motion.aside>
            )}
          </AnimatePresence>,
          document.body,
        )}

      <div ref={journeyRef} className="relative">
        <div className="pointer-events-none sticky top-16 z-20 h-[calc(100svh-4rem)] md:top-20 md:h-[calc(100vh-5rem)]">
          <motion.div
            style={{ opacity: stageOpacity }}
            className="absolute inset-x-0 top-0 mx-auto h-[31svh] w-full max-w-7xl md:bottom-0 md:h-auto"
          >
            <div aria-hidden={!showStill} className={`absolute inset-0 overflow-hidden transition-opacity duration-700 ${showStill ? "opacity-100" : "opacity-0"}`}>
              <LaptopStill project={activeProject} label={activeProject.titleEn} offset={laptopOffset} scale={stillScale} />
            </div>
            {nearViewport && (
              <PortfolioLaptop3D
                projects={projects}
                motion={motionBundle}
                viewport={viewport}
                reduceMotion={reduceMotion}
                active={inViewport}
                onReady={() => setRenderReady(true)}
                onUnavailable={() => setRenderFailed(true)}
              />
            )}
            <a
              href={activeProject.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${visitLabel}: ${activeProject.titleEn}`}
              className="pointer-events-auto absolute top-1/2 h-[52%] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light"
              style={{ left: `${50 + laptopOffset}%` }}
            >
              <span className="sr-only">{activeProject.titleEn}</span>
            </a>
          </motion.div>
        </div>

        <div className="relative z-10 -mt-[calc(100svh-4rem)] md:-mt-[calc(100vh-5rem)]">
          {projects.map((project, index) => (
            <ProjectScene
              key={`journey-scene-${project.id}`}
              project={project}
              index={index}
              total={total}
              lang={lang}
              visitLabel={visitLabel}
              registerScene={registerScene}
              reduceMotion={reduceMotion}
              travel={travel}
            />
          ))}
          <div className="flex h-[26svh] items-end justify-center pb-2 md:h-[24vh] md:pb-4">
            <a
              href="/work"
              className="relative z-30 inline-flex min-h-12 items-center rounded-full border border-primary/25 bg-primary/10 px-7 py-3 text-sm font-bold text-primary-dark backdrop-blur-md transition hover:border-primary/50 hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:text-primary-light"
            >
              {viewAllLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------------------------------------------------------- section */

const Portfolio = ({ lang }) => {
  const [filter, setFilter] = useState("all");
  const [activeProject, setActiveProject] = useState(0);

  const content = {
    en: {
      title: "Our",
      titleHighlight: "Portfolio",
      subtitle: "Showcasing successful projects that transformed businesses across various industries",
      categories: {
        all: "All Projects",
        website: "Websites",
        pos: "POS Systems",
        custom: "Custom Software",
      },
      visit: "Visit Website",
      viewAll: "View All Projects",
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
      viewAll: "عرض كل المشاريع",
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
      descriptionEn: "Modern corporate website with responsive design and smooth user experience",
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
      descriptionEn: "Complete e-commerce platform with product management and shopping cart",
      caseStudyEn: "We delivered a complete storefront with catalog management, cart, secure checkout and an admin-ready workflow.",
      caseStudyAr: "نفّذنا متجرًا متكاملًا لإدارة المنتجات والسلة والدفع الآمن مع تجربة جاهزة للإدارة والتوسع.",
      descriptionAr: "منصة تجارة إلكترونية متكاملة مع إدارة المنتجات وسلة التسوق",
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
      descriptionEn: "Delicious food ordering platform with online ordering and delivery management",
      descriptionAr: "منصة طعام لذيذة مع إمكانية الطلب عبر الإنترنت وإدارة التوصيل",
      logo: logo4,
      color: "from-[#FF6B35] to-[#FF8C42]",
      tagsEn: ["Food", "Online Order", "Delivery"],
      tagsAr: ["طعام", "طلب أونلاين", "توصيل"],
      resultsEn: ["Online ordering system", "Delivery management", "Menu management", "Customer reviews"],
      resultsAr: ["نظام طلب أونلاين", "إدارة التوصيل", "إدارة القائمة", "تقييمات العملاء"],
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
      descriptionEn: "Modern Point of Sale system with intuitive interface and real-time inventory management",
      caseStudyEn: "The system brings checkout, live stock tracking and sales insights together in one clear operational dashboard.",
      caseStudyAr: "جمعنا الكاشير والمخزون اللحظي وتحليلات المبيعات في لوحة تشغيل واحدة واضحة وسريعة.",
      descriptionAr: "نظام نقاط بيع حديث بواجهة بديهية وإدارة مخزون فورية",
      logo: "/project-logos/cashier-pos.webp",
      preview: heroImage,
      color: "from-[#00ACC1] to-[#26C6DA]",
      tagsEn: ["POS", "Inventory", "Real-time"],
      tagsAr: ["نقاط بيع", "مخزون", "فوري"],
      resultsEn: ["Fast checkout process", "Inventory tracking", "Sales analytics", "User-friendly interface"],
      resultsAr: ["عملية دفع سريعة", "تتبع المخزون", "تحليلات المبيعات", "واجهة سهلة الاستخدام"],
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
      descriptionEn: "Innovative real estate platform with advanced property management and analytics",
      descriptionAr: "منصة عقارية مبتكرة مع إدارة متقدمة للعقارات وتحليلات",
      logo: logo3,
      preview: "/project-screens/aruqah.png",
      color: "from-[#2E7D32] to-[#4CAF50]",
      tagsEn: ["Real Estate", "Analytics", "Property Management"],
      tagsAr: ["عقارات", "تحليلات", "إدارة عقارية"],
      resultsEn: ["Property listings", "Market analytics", "Client management", "Smart search"],
      resultsAr: ["قوائم العقارات", "تحليلات المبيعات", "إدارة العملاء", "بحث ذكي"],
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
      descriptionEn: "Elegant cosmetics e-commerce platform with product showcase and online ordering",
      descriptionAr: "منصة تجارة إلكترونية أنيقة لمستحضرات التجميل مع عرض المنتجات والطلب عبر الإنترنت",
      logo: logo2,
      preview: "/project-screens/cosmetics.png",
      color: "from-[#C2185B] to-[#E91E63]",
      tagsEn: ["E-commerce", "Cosmetics", "Online Store"],
      tagsAr: ["تجارة إلكترونية", "تجميل", "متجر إلكتروني"],
      resultsEn: ["Product catalog", "Shopping cart", "Secure payments", "Mobile responsive"],
      resultsAr: ["كتالوج منتجات", "سلة تسوق", "مدفوعات آمنة", "متجاوب مع الجوال"],
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
      descriptionEn: "Water sports & kite surfing platform in Sharm El Sheikh with online booking and activity showcase",
      caseStudyEn: "We built a multilingual booking experience that helps international tourists discover activities and reserve before they travel.",
      caseStudyAr: "بنينا تجربة حجز متعددة اللغات تساعد السائح على اكتشاف الأنشطة والحجز المباشر قبل السفر.",
      descriptionAr: "منصة رياضات مائية وركوب الطائرة الورقية في شرم الشيخ مع حجز عبر الإنترنت وعرض الأنشطة",
      logo: sharmLogo,
      preview: "/project-screens/sharm-kitesurf.png",
      color: "from-[#0077B6] to-[#00B4D8]",
      tagsEn: ["Water Sports", "Booking", "Tourism"],
      tagsAr: ["رياضات مائية", "حجز", "سياحة"],
      resultsEn: ["Online booking system", "Activity showcase", "Mobile responsive", "Multilingual support"],
      resultsAr: ["نظام حجز أونلاين", "عرض الأنشطة", "متجاوب مع الجوال", "دعم متعدد اللغات"],
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
      caseStudyEn: "A focused travel experience that presents Egyptian activities clearly and makes trip discovery simple on every device.",
      caseStudyAr: "تجربة سفر مركزة تعرض الأنشطة المصرية بوضوح وتجعل اكتشاف الرحلات سهلًا على كل الأجهزة.",
      descriptionAr: "منصة سفر عصرية لاكتشاف وتجهيز التجارب السياحية في مصر",
      logo: "/project-logos/tripyramids.webp",
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
      caseStudyEn: "We shaped a premium, conversion-focused property experience that highlights listings and investment opportunities without visual noise.",
      caseStudyAr: "صممنا تجربة عقارية راقية تركز على التحويل وتعرض العقارات والفرص الاستثمارية بدون تشتيت بصري.",
      descriptionAr: "موقع عقاري راقٍ لعرض العقارات والفرص الاستثمارية",
      logo: "/project-logos/amjad-estate.webp",
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
    { key: "website", label: t.categories.website, count: projects.filter((project) => project.category === "website").length },
    { key: "pos", label: t.categories.pos, count: projects.filter((project) => project.category === "pos").length },
    { key: "custom", label: t.categories.custom, count: projects.filter((project) => project.category === "custom").length },
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter);
  const featuredProjectIds = [7, 8, 9, 2, 4];
  const showcaseProjects =
    filter === "all" ? featuredProjectIds.map((id) => projects.find((project) => project.id === id)).filter(Boolean) : filteredProjects.slice(0, 5);

  return (
    <section
      id="portfolio"
      /*
       * The translateZ promotes the section to its own compositing layer. Without it the WebGL
       * canvas gets a layer of its own, and the very shallow background gradient behind it is
       * rasterised with different dithering inside that layer than outside — which showed as a
       * faint but hard-edged rectangle exactly on the canvas bounds. The canvas is fully
       * transparent there (measured [0,0,0,0] at every edge and corner), so this is a compositing
       * artifact rather than anything the 3D draws; promoting the section makes the gradient
       * rasterise once. It is set inline because as a Tailwind arbitrary class it lost to the
       * framework's own transform utilities and collapsed to a 2D identity matrix, which does not
       * promote. Note this makes the section the containing block for fixed children, which is why
       * the journey navigation is portalled to <body>.
       */
      style={{ transform: "translateZ(0)" }}
      className={`overflow-x-clip bg-gradient-to-b from-white to-gray-50 pb-10 pt-8 dark:from-dark dark:to-dark-light lg:pb-14 lg:pt-10 ${isRTL ? "rtl" : "ltr"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center lg:mb-8">
          <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-light/10 dark:bg-primary-light/20 sm:h-20 sm:w-20">
            <svg className="text-primary-dark dark:text-primary-light" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8" />
              <path d="M12 17v4" />
            </svg>
          </div>

          <h2 className="mb-4 text-2xl font-bold sm:text-3xl lg:mb-5 lg:text-4xl">
            {t.title} <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">{t.titleHighlight}</span>
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-base text-gray-600 dark:text-gray-300 sm:text-lg lg:mb-8">{t.subtitle}</p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setFilter(category.key);
                  setActiveProject(0);
                }}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 sm:px-6 sm:py-3 sm:text-base ${
                  filter === category.key
                    ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-dark-card dark:text-gray-300 dark:hover:bg-dark-light"
                }`}
              >
                <span>{category.label}</span>
                <span className={`rounded-full px-2 py-1 text-xs ${filter === category.key ? "bg-white/20" : "bg-gray-300 dark:bg-dark-light"}`}>{category.count}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <PortfolioJourney
          projects={showcaseProjects}
          activeIndex={activeProject}
          setActiveIndex={setActiveProject}
          lang={lang}
          visitLabel={t.visit}
          viewAllLabel={t.viewAll}
        />
      </div>
    </section>
  );
};

export default Portfolio;
