'use client'

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
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

const DeviceProjectShowcase = ({ projects, activeIndex, setActiveIndex, lang, visitLabel, viewAllLabel }) => {
  const trackRef = useRef(null);
  const scrollTimerRef = useRef(null);
  const [loadedScreens, setLoadedScreens] = useState(() => new Set());
  const [isScrolling, setIsScrolling] = useState(false);
  const reduceMotion = useReducedMotion();
  const tiltX = useSpring(useMotionValue(0), { stiffness: 170, damping: 24 });
  const tiltY = useSpring(useMotionValue(0), { stiffness: 170, damping: 24 });
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });

  const preloadKey = projects
    .map((project) => {
      const source = project.preview || project.logo;
      return typeof source === "string" ? source : source?.src || "";
    })
    .join("|");
  const screensReady = projects.length > 0 && loadedScreens.size === projects.length;

  useEffect(() => {
    setLoadedScreens(new Set());
  }, [preloadKey]);

  useEffect(
    () => () => {
      if (scrollTimerRef.current) window.clearTimeout(scrollTimerRef.current);
    },
    [],
  );

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (typeof window === "undefined" || window.innerWidth < 768 || !screensReady) return;
    setIsScrolling(true);
    if (scrollTimerRef.current) window.clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = window.setTimeout(() => setIsScrolling(false), 180);
    const nextIndex = Math.min(projects.length - 1, Math.floor(progress * projects.length));
    if (nextIndex !== activeIndex) setActiveIndex(nextIndex);
  });

  const project = projects[activeIndex];
  if (!project) return null;

  const goToProject = (index) => {
    if (!screensReady) return;
    const nextIndex = (index + projects.length) % projects.length;
    setActiveIndex(nextIndex);

    if (typeof window === "undefined" || window.innerWidth < 768 || !trackRef.current) return;
    const trackTop = window.scrollY + trackRef.current.getBoundingClientRect().top;
    const scrollRange = Math.max(0, trackRef.current.offsetHeight - window.innerHeight);
    const targetProgress = (nextIndex + 0.15) / projects.length;
    window.scrollTo({
      top: trackTop + scrollRange * targetProgress,
      behavior: "auto",
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
  const caseStudy = lang === "en" ? project.caseStudyEn : project.caseStudyAr;
  const progress = `${((activeIndex + 1) / projects.length) * 100}%`;
  const textDirection = lang === "ar" ? 22 : -22;
  const textContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: reduceMotion ? 0 : 0.035, delayChildren: reduceMotion ? 0 : 0.24 } },
    exit: { opacity: 0, transition: { duration: reduceMotion ? 0.1 : 0.16, staggerChildren: reduceMotion ? 0 : 0.015, staggerDirection: -1 } },
  };
  const textItem = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 14, x: reduceMotion ? 0 : textDirection },
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: reduceMotion ? 0.14 : 0.28, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: reduceMotion ? 0 : -8, x: reduceMotion ? 0 : -textDirection * 0.45, transition: { duration: reduceMotion ? 0.1 : 0.16 } },
  };

  return (
    <div ref={trackRef} className="relative md:h-[var(--project-track)]" style={{ "--project-track": `${Math.max(160, 80 + projects.length * 40)}vh` }}>
      <div aria-hidden="true" className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0">
        {projects.map((preloadProject) => (
          <div key={`preload-${preloadProject.id}`} className="relative h-[675px] w-[1200px]">
            <Image
              src={preloadProject.preview || preloadProject.logo}
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 94vw, 60vw"
              className="object-cover object-top"
              onLoad={() =>
                setLoadedScreens((current) => {
                  if (current.has(preloadProject.id)) return current;
                  const next = new Set(current);
                  next.add(preloadProject.id);
                  return next;
                })
              }
            />
          </div>
        ))}
      </div>
      <div className="mx-auto grid min-h-0 max-w-7xl items-center gap-10 py-12 md:sticky md:top-20 md:min-h-[calc(100vh-5rem)] md:grid-cols-[minmax(0,3fr)_minmax(300px,2fr)] md:py-10 lg:gap-16">
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 70, scale: 0.88, rotateX: 7, rotateY: -6 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0, rotateY: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0.25 : 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 mx-auto w-full max-w-4xl [perspective:1400px]"
        >
          <motion.div
            animate={
              reduceMotion
                ? { opacity: 1 }
                : {
                    rotateX: activeIndex % 2 === 0 ? 2 : -2,
                    rotateY: activeIndex % 2 === 0 ? -5 : 5,
                    x: activeIndex % 2 === 0 ? -4 : 4,
                    y: activeIndex % 2 === 0 ? -2 : 3,
                    scale: activeIndex % 2 === 0 ? 1 : 0.992,
                  }
            }
            transition={{ type: "spring", stiffness: 88, damping: 18, mass: 0.72 }}
            className="relative mx-auto w-[96%] focus-within:outline-none sm:w-[94%]"
          >
            <motion.div
              animate={reduceMotion || isScrolling ? { y: 0 } : { y: [0, -3.5, 0] }}
              transition={reduceMotion || isScrolling ? { duration: 0.2 } : { duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                onPointerMove={onPointerMove}
                onPointerLeave={resetTilt}
                style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
                whileHover={reduceMotion ? undefined : { scale: 1.012 }}
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`${visitLabel}: ${project.titleEn}`} className="group block rounded-[1.8rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-4 focus-visible:ring-offset-dark">
                  <div className="relative rounded-t-[1.7rem] border-[9px] border-slate-950 bg-slate-950 p-1 shadow-[0_36px_84px_-30px_rgba(0,0,0,0.72)] transition-shadow duration-500 group-hover:shadow-[0_42px_96px_-26px_rgba(0,0,0,0.82)] sm:border-[12px]">
                    <div className="absolute left-1/2 top-[-7px] z-30 flex h-2.5 w-10 -translate-x-1/2 items-center justify-center rounded-b-full bg-slate-950">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-700 ring-1 ring-slate-500/40" />
                    </div>
                    <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-slate-900">
                      <AnimatePresence initial={false} mode="sync">
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.018 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.982 }}
                          transition={{ duration: reduceMotion ? 0.18 : 0.62, ease: [0.22, 1, 0.36, 1] }}
                          className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
                        >
                          <div className="absolute inset-0 flex items-center justify-center bg-inherit p-10">
                            <Image src={project.logo} alt="" width={220} height={220} className="max-h-[62%] w-auto object-contain opacity-85 drop-shadow-2xl" />
                          </div>
                          {project.preview && (
                            <Image src={project.preview} alt={`${project.titleEn} project screenshot`} fill className="object-cover object-top" sizes="(max-width: 768px) 94vw, 60vw" />
                          )}
                          <motion.div
                            key={`reflection-${project.id}`}
                            initial={{ x: "-160%", opacity: 0 }}
                            animate={{ x: "210%", opacity: [0, 0.12, 0] }}
                            transition={{ duration: reduceMotion ? 0 : 1.35, delay: 0.1, ease: "easeInOut" }}
                            className="pointer-events-none absolute inset-y-0 w-[18%] -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent blur-xl"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="relative mx-auto h-2.5 w-[90%] rounded-t-md bg-gradient-to-b from-slate-700 via-slate-500 to-slate-800 shadow-inner">
                    <div className="absolute inset-x-[8%] top-0 h-px bg-white/35" />
                  </div>
                  <div className="relative mx-auto h-6 w-[108%] -translate-x-[4%] overflow-hidden rounded-b-[1.15rem] bg-[linear-gradient(180deg,#f8fafc_0%,#cbd5e1_16%,#94a3b8_68%,#475569_100%)] shadow-[0_25px_45px_-18px_rgba(0,0,0,0.72)] dark:bg-[linear-gradient(180deg,#cbd5e1_0%,#64748b_20%,#334155_72%,#0f172a_100%)] sm:h-8">
                    <div className="absolute inset-x-[3%] top-0 h-px bg-white/90" />
                    <div className="absolute left-1/2 top-0 h-2 w-24 -translate-x-1/2 rounded-b-xl border-x border-b border-slate-500/50 bg-slate-400/35 sm:w-32" />
                    <div className="absolute inset-x-[8%] bottom-0 h-px bg-slate-950/45" />
                  </div>
                  <div className="mx-auto mt-4 h-7 w-[82%] rounded-[50%] bg-black/45 blur-2xl transition-all duration-500 group-hover:w-[86%] group-hover:bg-black/55" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="order-2 px-2 text-center md:text-start" dir={lang === "ar" ? "rtl" : "ltr"}>
          <AnimatePresence initial={false} mode="sync">
            <motion.div key={`project-copy-${project.id}`} variants={textContainer} initial="hidden" animate="visible" exit="exit">
              <motion.div variants={textItem} className="mb-4 flex items-center justify-center gap-3 md:justify-start">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-dark dark:text-primary-light">{category}</span>
                <span dir="ltr" className="font-mono text-sm text-gray-500">{String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
              </motion.div>
              <motion.h3 variants={textItem} className="mb-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">{lang === "en" ? project.titleEn : project.titleAr}</motion.h3>
              <motion.p variants={textItem} className="mb-4 text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">{lang === "en" ? project.descriptionEn : project.descriptionAr}</motion.p>
              {caseStudy && (
                <motion.p variants={textItem} className="mb-5 border-s-2 border-primary/45 ps-3 text-xs leading-6 text-gray-500 dark:text-gray-400 sm:text-sm">
                  {caseStudy}
                </motion.p>
              )}
              <motion.div variants={textItem} className="mb-7 flex flex-wrap justify-center gap-2 md:justify-start">
                {technologies.map((technology) => <span key={technology} className="rounded-full border border-gray-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-300">{technology}</span>)}
              </motion.div>
              <motion.a variants={textItem} href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-4 focus-visible:ring-offset-dark">{visitLabel}<ExternalLink size={16} /></motion.a>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8">
            <div className="h-1 overflow-hidden rounded-full bg-primary/15"><motion.div className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light" animate={{ width: progress }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} /></div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <button type="button" disabled={!screensReady} onClick={previousProject} aria-label="Previous project" className="grid h-10 w-10 place-items-center rounded-full border border-primary/25 text-primary-dark transition hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-wait disabled:opacity-40 dark:text-primary-light"><ChevronLeft size={18} /></button>
              <button type="button" disabled={!screensReady} onClick={nextProject} aria-label="Next project" className="grid h-10 w-10 place-items-center rounded-full border border-primary/25 text-primary-dark transition hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-wait disabled:opacity-40 dark:text-primary-light"><ChevronRight size={18} /></button>
              <a href="/work" className="ms-1 inline-flex h-10 items-center rounded-full border border-primary/20 px-4 text-xs font-semibold text-primary-dark transition hover:border-primary/50 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:text-primary-light">
                {viewAllLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const clamp01 = (value) => Math.min(1, Math.max(0, value));

const getSegmentProgress = (progress, total) => {
  if (total <= 1) return 0;
  const scaled = clamp01(progress) * (total - 1);
  const segment = Math.min(total - 2, Math.floor(scaled));
  return clamp01(scaled - segment);
};

const getProjectSource = (project) => project?.preview || project?.logo;

const ProjectScreenLayer = ({ project, progress, index, total, ready, reduceMotion }) => {
  const distance = useTransform(progress, (value) => value * Math.max(1, total - 1) - index);
  const opacity = useTransform(distance, (value) => {
    if (!ready) return 0;
    if (total <= 1) return index === 0 ? 1 : 0;
    if (value <= -0.62 || value >= 0.62) return 0;
    if (value < -0.38) return (value + 0.62) / 0.24;
    if (value <= 0.38) return 1;
    return 1 - (value - 0.38) / 0.24;
  });
  const scale = useTransform(distance, (value) => {
    if (reduceMotion) return 1;
    if (value < 0) return 1.03 - clamp01((value + 0.62) / 0.62) * 0.03;
    return 1 - clamp01(value / 0.62) * 0.03;
  });

  return (
    <motion.div aria-hidden={index !== 0} className="absolute inset-0" style={{ opacity, scale }}>
      <Image
        src={getProjectSource(project)}
        alt={`${project.titleEn} project screenshot`}
        fill
        priority={index < 2}
        sizes="(max-width: 767px) 93vw, (max-width: 1199px) 58vw, 760px"
        className="object-cover object-top"
      />
    </motion.div>
  );
};

const ScrollInfoItem = ({ progress, total, order, reduceMotion, className = "", children }) => {
  const localProgress = useTransform(progress, (value) => getSegmentProgress(value, total));
  const opacity = useTransform(localProgress, (value) => {
    if (reduceMotion || total <= 1) return 1;
    if (value <= 0.18) return 1;
    if (value < 0.44) return 1 - (value - 0.18) / 0.26;
    const start = 0.55 + order * 0.014;
    if (value <= start) return 0;
    return clamp01((value - start) / 0.16);
  });
  const y = useTransform(localProgress, (value) => {
    if (reduceMotion || total <= 1) return 0;
    if (value <= 0.18) return 0;
    if (value < 0.44) return -26 * clamp01((value - 0.18) / 0.26);
    const start = 0.55 + order * 0.014;
    if (value <= start) return 18;
    return 18 * (1 - clamp01((value - start) / 0.16));
  });
  const filter = useTransform(localProgress, (value) => {
    if (reduceMotion || total <= 1) return "blur(0px)";
    if (value <= 0.18) return "blur(0px)";
    if (value < 0.44) return `blur(${4 * clamp01((value - 0.18) / 0.26)}px)`;
    const start = 0.55 + order * 0.014;
    if (value <= start) return "blur(4px)";
    return `blur(${4 * (1 - clamp01((value - start) / 0.16))}px)`;
  });

  return <motion.div className={className} style={{ opacity, y, filter }}>{children}</motion.div>;
};

const CinematicProjectShowcase = ({ projects, activeIndex, setActiveIndex, lang, visitLabel, viewAllLabel }) => {
  const trackRef = useRef(null);
  const scrollTimerRef = useRef(null);
  const touchStartRef = useRef(null);
  const activeIndexRef = useRef(activeIndex);
  const scrollingRef = useRef(false);
  const [loadedScreens, setLoadedScreens] = useState(() => new Set());
  const [failedScreens, setFailedScreens] = useState(() => new Set());
  const [viewport, setViewport] = useState("desktop");
  const [isIdle, setIsIdle] = useState(false);
  const reduceMotion = useReducedMotion();
  const total = projects.length;
  const preloadKey = projects.map((project) => {
    const source = getProjectSource(project);
    return typeof source === "string" ? source : source?.src || project.id;
  }).join("|");
  const allScreensResolved = total > 0 && projects.every((project) => loadedScreens.has(project.id) || failedScreens.has(project.id));

  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 105, damping: 28, mass: 0.34 });
  const effectiveProgress = useMotionValue(0);
  const segmentProgress = useTransform(effectiveProgress, (value) => getSegmentProgress(value, total));
  const depth = useTransform(segmentProgress, (value) => Math.sin(Math.PI * value));

  const movement = viewport === "mobile"
    ? { y: 52, rotateY: 10, rotateX: 6.5, rotateZ: 0.8, scale: 0.07 }
    : viewport === "tablet"
      ? { y: 76, rotateY: 17, rotateX: 9, rotateZ: 1.1, scale: 0.075 }
      : { y: 96, rotateY: 20, rotateX: 10.5, rotateZ: 1.5, scale: 0.08 };

  const phaseAngle = (value, amount) => {
    if (value <= 0.44) return amount * Math.sin((value / 0.44) * Math.PI / 2);
    if (value < 0.56) return amount - ((value - 0.44) / 0.12) * amount * 2;
    return -amount * (1 - (value - 0.56) / 0.44);
  };
  const deviceY = useTransform(segmentProgress, (value) => reduceMotion ? 0 : Math.sin(Math.PI * value) * movement.y);
  const deviceScale = useTransform(depth, (value) => reduceMotion ? 1 : 1 - value * movement.scale);
  const deviceRotateY = useTransform(segmentProgress, (value) => reduceMotion ? 0 : phaseAngle(value, movement.rotateY));
  const deviceRotateX = useTransform(segmentProgress, (value) => reduceMotion ? 0 : phaseAngle(value, movement.rotateX));
  const deviceRotateZ = useTransform(segmentProgress, (value) => reduceMotion ? 0 : phaseAngle(value, movement.rotateZ));
  const shadowScale = useTransform(depth, [0, 1], [1, 1.16]);
  const shadowOpacity = useTransform(depth, [0, 1], [0.56, 0.34]);
  const reflectionX = useTransform(segmentProgress, [0.28, 0.7], ["-170%", "260%"]);
  const reflectionOpacity = useTransform(segmentProgress, (value) => reduceMotion ? 0 : Math.max(0, 0.16 - Math.abs(value - 0.5) * 0.8));
  const overallProgress = useTransform(effectiveProgress, (value) => total <= 1 ? 1 : (1 / total) + value * (1 - 1 / total));
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const pointerRotateX = useSpring(pointerY, { stiffness: 180, damping: 26 });
  const pointerRotateY = useSpring(pointerX, { stiffness: 180, damping: 26 });

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    setLoadedScreens(new Set());
    setFailedScreens(new Set());
    effectiveProgress.set(0);
  }, [preloadKey, effectiveProgress]);

  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      setViewport(width < 768 ? "mobile" : width < 1200 ? "tablet" : "desktop");
    };
    updateViewport();
    window.addEventListener("resize", updateViewport, { passive: true });
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useEffect(() => () => {
    if (scrollTimerRef.current) window.clearTimeout(scrollTimerRef.current);
  }, []);

  useEffect(() => {
    if (!allScreensResolved || total === 0) return;
    const currentProgress = smoothProgress.get();
    effectiveProgress.set(currentProgress);
    const nextIndex = Math.min(total - 1, Math.max(0, Math.floor(currentProgress * Math.max(1, total - 1) + 0.5)));
    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
  }, [allScreensResolved, effectiveProgress, setActiveIndex, smoothProgress, total]);

  useMotionValueEvent(smoothProgress, "change", (value) => {
    if (!allScreensResolved || total === 0) return;
    effectiveProgress.set(value);
    const nextIndex = Math.min(total - 1, Math.max(0, Math.floor(value * Math.max(1, total - 1) + 0.5)));
    if (nextIndex !== activeIndexRef.current) {
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
    }
    if (!scrollingRef.current) {
      scrollingRef.current = true;
      setIsIdle(false);
    }
    if (scrollTimerRef.current) window.clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = window.setTimeout(() => {
      scrollingRef.current = false;
      setIsIdle(depth.get() < 0.075);
    }, 190);
  });

  const safeIndex = Math.min(Math.max(activeIndex, 0), Math.max(0, total - 1));
  const project = projects[safeIndex];
  if (!project) return null;

  const resolvedProjectFor = (projectIndex) => {
    const candidate = projects[projectIndex];
    if (!failedScreens.has(candidate.id)) return candidate;
    for (let index = projectIndex - 1; index >= 0; index -= 1) {
      if (loadedScreens.has(projects[index].id)) return projects[index];
    }
    return { ...candidate, preview: null };
  };

  const goToProject = (requestedIndex) => {
    if (!allScreensResolved || !trackRef.current || total <= 1) return;
    const nextIndex = Math.min(total - 1, Math.max(0, requestedIndex));
    const trackTop = window.scrollY + trackRef.current.getBoundingClientRect().top;
    const scrollRange = Math.max(0, trackRef.current.offsetHeight - window.innerHeight);
    window.scrollTo({
      top: trackTop + scrollRange * (nextIndex / (total - 1)),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const onPointerMove = (event) => {
    if (event.pointerType === "touch" || reduceMotion || viewport !== "desktop" || scrollingRef.current || depth.get() > 0.075) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 4.5);
    pointerY.set(-((event.clientY - bounds.top) / bounds.height - 0.5) * 3.2);
  };
  const resetPointerTilt = () => { pointerX.set(0); pointerY.set(0); };
  const onPointerDown = (event) => {
    if (event.pointerType !== "touch") return;
    touchStartRef.current = { x: event.clientX, y: event.clientY };
  };
  const onPointerUp = (event) => {
    if (event.pointerType !== "touch" || !touchStartRef.current) return;
    const deltaX = event.clientX - touchStartRef.current.x;
    const deltaY = event.clientY - touchStartRef.current.y;
    touchStartRef.current = null;
    if (Math.abs(deltaX) < 58 || Math.abs(deltaX) < Math.abs(deltaY) * 1.25) return;
    goToProject(safeIndex + (deltaX < 0 ? 1 : -1));
  };

  const category = project.category === "website"
    ? (lang === "en" ? "Website" : "موقع إلكتروني")
    : project.category === "pos"
      ? (lang === "en" ? "POS System" : "نظام نقاط بيع")
      : (lang === "en" ? "Custom Software" : "برنامج مخصص");
  const technologies = lang === "en" ? project.tagsEn : project.tagsAr;
  const caseStudy = lang === "en" ? project.caseStudyEn : project.caseStudyAr;
  const trackHeights = {
    "--portfolio-track-mobile": `${Math.max(170, 120 + total * 54)}svh`,
    "--portfolio-track-tablet": `${Math.max(160, 100 + total * 40)}vh`,
    "--portfolio-track-desktop": `${Math.max(180, 100 + total * 50)}vh`,
  };

  return (
    <div
      ref={trackRef}
      className="relative h-[var(--portfolio-track-mobile)] md:h-[var(--portfolio-track-tablet)] lg:h-[var(--portfolio-track-desktop)]"
      style={trackHeights}
    >
      <div aria-hidden="true" className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0">
        {projects.map((preloadProject) => (
          <div key={`cinematic-preload-${preloadProject.id}`} className="relative h-[675px] w-[1200px]">
            <Image
              src={getProjectSource(preloadProject)}
              alt=""
              fill
              priority
              sizes="1200px"
              className="object-cover object-top"
              onLoad={async (event) => {
                try { await event.currentTarget.decode(); } catch { /* The decoded browser cache is still usable. */ }
                setLoadedScreens((current) => {
                  if (current.has(preloadProject.id)) return current;
                  const next = new Set(current);
                  next.add(preloadProject.id);
                  return next;
                });
              }}
              onError={() => setFailedScreens((current) => new Set(current).add(preloadProject.id))}
            />
          </div>
        ))}
      </div>

      <div className="sticky top-16 flex min-h-[calc(100svh-4rem)] items-center overflow-hidden py-3 md:top-20 md:min-h-[calc(100vh-5rem)] md:py-6">
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-3 lg:grid-cols-[minmax(0,1.7fr)_minmax(330px,1fr)] lg:gap-12">
          <div className="pointer-events-none absolute left-[8%] top-[10%] h-[64%] w-[58%] rounded-full bg-primary/10 blur-[90px] dark:bg-primary/9" />

          <div className="relative z-10 mx-auto w-[min(93vw,850px)] [perspective:1400px] md:w-full">
            <motion.div
              animate={isIdle && !reduceMotion ? { y: [0, -3, 0] } : { y: 0 }}
              transition={isIdle && !reduceMotion ? { duration: 5.2, repeat: Infinity, ease: "easeInOut" } : { duration: 0.2 }}
            >
              <motion.div
                style={{ y: deviceY, scale: deviceScale, rotateX: deviceRotateX, rotateY: deviceRotateY, rotateZ: deviceRotateZ, transformStyle: "preserve-3d", willChange: "transform" }}
              >
                <motion.div
                  onPointerMove={onPointerMove}
                  onPointerLeave={resetPointerTilt}
                  onPointerDown={onPointerDown}
                  onPointerUp={onPointerUp}
                  onPointerCancel={() => { touchStartRef.current = null; }}
                  style={{ rotateX: pointerRotateX, rotateY: pointerRotateY, transformStyle: "preserve-3d", touchAction: "pan-y" }}
                  className="relative select-none"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${visitLabel}: ${lang === "en" ? project.titleEn : project.titleAr}`}
                    className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-4 focus-visible:ring-offset-dark"
                  >
                    <div className="relative mx-auto w-[91%] rounded-t-[1.25rem] border border-white/30 bg-[linear-gradient(135deg,#d7dce1_0%,#707982_9%,#20262d_46%,#929aa1_90%,#e4e8eb_100%)] p-[2px] shadow-[0_22px_58px_-22px_rgba(0,0,0,0.78),0_0_36px_rgba(20,184,166,0.06)] sm:rounded-t-[1.7rem] sm:p-[3px]">
                      <div className="relative rounded-t-[1.12rem] bg-[#07090c] p-[5px] sm:rounded-t-[1.52rem] sm:p-[9px]">
                        <div className="absolute left-1/2 top-[3px] z-30 flex h-[7px] w-[38px] -translate-x-1/2 items-center justify-center rounded-b-md bg-[#06080a] sm:h-[11px] sm:w-[58px]">
                          <span className="h-1 w-1 rounded-full bg-slate-700 shadow-[0_0_3px_rgba(96,165,250,0.55)] sm:h-1.5 sm:w-1.5" />
                        </div>
                        <div className="relative aspect-[16/9] overflow-hidden rounded-[0.55rem] bg-[#0b1420] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] sm:rounded-[0.85rem]">
                          <div className={`absolute inset-0 bg-gradient-to-br ${projects[0]?.color || "from-slate-900 to-slate-800"}`}>
                            <div className="absolute inset-0 flex items-center justify-center p-12 opacity-65">
                              <Image src={projects[0]?.logo || logo} alt="" width={220} height={220} className="max-h-[58%] w-auto object-contain drop-shadow-2xl" />
                            </div>
                          </div>
                          {projects.map((screenProject, index) => (
                            <ProjectScreenLayer
                              key={`screen-${screenProject.id}`}
                              project={resolvedProjectFor(index)}
                              progress={effectiveProgress}
                              index={index}
                              total={total}
                              ready={loadedScreens.has(screenProject.id) || failedScreens.has(screenProject.id)}
                              reduceMotion={reduceMotion}
                            />
                          ))}
                          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.12)_0%,transparent_19%,transparent_72%,rgba(255,255,255,0.035)_100%)]" />
                          <motion.div style={{ x: reflectionX, opacity: reflectionOpacity }} className="pointer-events-none absolute inset-y-[-20%] w-[16%] -skew-x-12 bg-gradient-to-r from-transparent via-white/65 to-transparent blur-xl" />
                        </div>
                      </div>
                      <motion.div style={{ x: reflectionX, opacity: reflectionOpacity }} className="pointer-events-none absolute inset-y-0 w-[8%] bg-gradient-to-r from-transparent via-white/75 to-transparent blur-md" />
                    </div>

                    <div className="relative z-20 mx-auto -mt-px h-3 w-[76%] rounded-b-[50%] bg-[linear-gradient(180deg,#14181c_0%,#69717a_48%,#161a1f_100%)] shadow-[0_2px_5px_rgba(0,0,0,0.8)] sm:h-4">
                      <div className="absolute inset-x-[4%] top-0 h-px bg-white/45" />
                    </div>
                    <div className="relative z-10 mx-auto -mt-2 h-[clamp(54px,7.2vw,94px)] w-full overflow-hidden bg-[linear-gradient(160deg,#e1e5e8_0%,#a2a9af_20%,#68717a_56%,#c7ccd0_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(15,23,42,0.42)] [clip-path:polygon(4.5%_0,95.5%_0,100%_100%,0_100%)] dark:bg-[linear-gradient(160deg,#aeb5bb_0%,#68717a_18%,#343c44_58%,#808991_100%)]">
                      <div className="absolute left-[15%] right-[15%] top-[12%] h-[42%] rounded-[0.28rem] border border-black/30 bg-[repeating-linear-gradient(90deg,rgba(6,9,12,0.92)_0,rgba(6,9,12,0.92)_5.2%,rgba(80,88,96,0.28)_5.3%,rgba(80,88,96,0.28)_6.2%),repeating-linear-gradient(0deg,rgba(0,0,0,0.5)_0,rgba(0,0,0,0.5)_25%,transparent_26%,transparent_33%)] opacity-85 shadow-[0_2px_5px_rgba(0,0,0,0.35)]" />
                      <div className="absolute bottom-[8%] left-1/2 h-[31%] w-[31%] -translate-x-1/2 rounded-[0.35rem] border border-slate-500/45 bg-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.26)]" />
                      <div className="absolute inset-x-[4%] top-0 h-px bg-white/75" />
                    </div>
                    <div className="relative mx-auto h-[clamp(7px,1.2vw,15px)] w-full rounded-b-[45%] bg-[linear-gradient(180deg,#7c858e_0%,#d5d9dc_24%,#7a838c_62%,#30373e_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.88)]">
                      <div className="absolute left-1/2 top-0 h-[42%] w-[13%] -translate-x-1/2 rounded-b-full border-x border-b border-slate-600/40 bg-slate-500/25" />
                    </div>
                  </a>
                  <motion.div style={{ scaleX: shadowScale, opacity: shadowOpacity }} className="pointer-events-none mx-auto -mt-1 h-8 w-[82%] rounded-[50%] bg-black/80 blur-2xl sm:h-12" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <div className="relative z-20 mx-auto w-full max-w-xl px-1 text-center md:px-0 lg:text-start" dir={lang === "ar" ? "rtl" : "ltr"}>
            <div className="min-h-[240px] lg:min-h-[390px]">
              <div className="mb-2 flex items-center justify-center gap-3 md:mb-4 lg:justify-start">
                <ScrollInfoItem progress={effectiveProgress} total={total} order={0} reduceMotion={reduceMotion}>
                  <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary-dark dark:text-primary-light sm:text-xs">{category}</span>
                </ScrollInfoItem>
                <ScrollInfoItem progress={effectiveProgress} total={total} order={1} reduceMotion={reduceMotion}>
                  <span dir="ltr" className="font-mono text-xs text-gray-500 sm:text-sm">{String(safeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
                </ScrollInfoItem>
              </div>
              <ScrollInfoItem progress={effectiveProgress} total={total} order={2} reduceMotion={reduceMotion} className="mb-2 md:mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl lg:text-4xl">{lang === "en" ? project.titleEn : project.titleAr}</h3>
              </ScrollInfoItem>
              <ScrollInfoItem progress={effectiveProgress} total={total} order={3} reduceMotion={reduceMotion} className="mb-2 md:mb-4">
                <p className="line-clamp-2 text-xs leading-5 text-gray-600 dark:text-gray-300 sm:text-sm sm:leading-6 md:line-clamp-none lg:text-base lg:leading-7">{lang === "en" ? project.descriptionEn : project.descriptionAr}</p>
              </ScrollInfoItem>
              {caseStudy && (
                <ScrollInfoItem progress={effectiveProgress} total={total} order={4} reduceMotion={reduceMotion} className="mb-3 md:mb-5">
                  <p className="line-clamp-2 border-s-2 border-primary/45 ps-3 text-[11px] leading-5 text-gray-500 dark:text-gray-400 sm:text-xs md:line-clamp-none lg:text-sm lg:leading-6">{caseStudy}</p>
                </ScrollInfoItem>
              )}
              <ScrollInfoItem progress={effectiveProgress} total={total} order={5} reduceMotion={reduceMotion} className="mb-3 md:mb-6">
                <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 lg:justify-start">
                  {technologies.slice(0, 4).map((technology) => <span key={technology} className="rounded-full border border-gray-200 bg-white/70 px-2.5 py-1 text-[10px] font-medium text-gray-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-300 sm:text-xs">{technology}</span>)}
                </div>
              </ScrollInfoItem>
              <ScrollInfoItem progress={effectiveProgress} total={total} order={6} reduceMotion={reduceMotion}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-4 focus-visible:ring-offset-dark sm:text-sm">{visitLabel}<ExternalLink size={15} /></a>
              </ScrollInfoItem>
            </div>

            <ScrollInfoItem progress={effectiveProgress} total={total} order={7} reduceMotion={reduceMotion} className="ml-20 mt-2 md:ml-0 md:mt-5">
              <div className="h-1 overflow-hidden rounded-full bg-primary/15"><motion.div className="h-full origin-left rounded-full bg-gradient-to-r from-primary to-primary-light" style={{ scaleX: overallProgress }} /></div>
            </ScrollInfoItem>
            <div className="ml-20 mt-3 flex flex-wrap items-center justify-center gap-2 md:ml-0 md:mt-4 lg:justify-start">
              <button type="button" disabled={!allScreensResolved || safeIndex === 0} onClick={() => goToProject(safeIndex - 1)} aria-label={lang === "en" ? "Previous project" : "المشروع السابق"} className="grid h-11 w-11 place-items-center rounded-full border border-primary/25 text-primary-dark transition hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-35 dark:text-primary-light"><ChevronLeft size={19} /></button>
              <button type="button" disabled={!allScreensResolved || safeIndex === total - 1} onClick={() => goToProject(safeIndex + 1)} aria-label={lang === "en" ? "Next project" : "المشروع التالي"} className="grid h-11 w-11 place-items-center rounded-full border border-primary/25 text-primary-dark transition hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-35 dark:text-primary-light"><ChevronRight size={19} /></button>
              <a href="/work" className="ms-1 inline-flex min-h-11 items-center rounded-full border border-primary/20 px-4 text-[11px] font-semibold text-primary-dark transition hover:border-primary/50 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:text-primary-light sm:text-xs">{viewAllLabel}</a>
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
      caseStudyEn: "We delivered a complete storefront with catalog management, cart, secure checkout and an admin-ready workflow.",
      caseStudyAr: "نفّذنا متجرًا متكاملًا لإدارة المنتجات والسلة والدفع الآمن مع تجربة جاهزة للإدارة والتوسع.",
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
      caseStudyEn: "The system brings checkout, live stock tracking and sales insights together in one clear operational dashboard.",
      caseStudyAr: "جمعنا الكاشير والمخزون اللحظي وتحليلات المبيعات في لوحة تشغيل واحدة واضحة وسريعة.",
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
      caseStudyEn: "We built a multilingual booking experience that helps international tourists discover activities and reserve before they travel.",
      caseStudyAr: "بنينا تجربة حجز متعددة اللغات تساعد السائح على اكتشاف الأنشطة والحجز المباشر قبل السفر.",
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
      caseStudyEn: "A focused travel experience that presents Egyptian activities clearly and makes trip discovery simple on every device.",
      caseStudyAr: "تجربة سفر مركزة تعرض الأنشطة المصرية بوضوح وتجعل اكتشاف الرحلات سهلًا على كل الأجهزة.",
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
      caseStudyEn: "We shaped a premium, conversion-focused property experience that highlights listings and investment opportunities without visual noise.",
      caseStudyAr: "صممنا تجربة عقارية راقية تركز على التحويل وتعرض العقارات والفرص الاستثمارية بدون تشتيت بصري.",
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
  const featuredProjectIds = [7, 8, 9, 2, 4];
  const showcaseProjects =
    filter === "all"
      ? featuredProjectIds.map((id) => projects.find((project) => project.id === id)).filter(Boolean)
      : filteredProjects.filter((project) => project.preview).slice(0, 5);

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

        <CinematicProjectShowcase
          projects={showcaseProjects}
          activeIndex={activeProject}
          setActiveIndex={setActiveProject}
          lang={lang}
          visitLabel={t.visit}
          viewAllLabel={t.viewAll}
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
