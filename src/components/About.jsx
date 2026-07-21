'use client'

import { motion } from "framer-motion";
import {
  Target,
  Users,
  Zap,
  Shield,
  Clock,
  Award,
  Heart,
  TrendingUp,
  Lightbulb,
  MapPin,
} from "lucide-react";

const About = ({ lang }) => {
  const content = {
    en: {
      badge: "About DoGether",
      title: "About",
      titleHighlight: "DoGether",
      subtitle:
        "We are a professional digital agency based in Fayoum and Cairo, Egypt — serving clients across all governorates — specializing in creating exceptional digital solutions that drive business growth and technological innovation.",
      storyTitle: "Our Story",
      story: [
        "Founded in 2025 in Fayoum, Egypt, DoGether emerged with a clear vision: to revolutionize digital experiences for businesses in the modern era. We began as a dedicated team of technology enthusiasts committed to bridging the gap between innovative ideas and practical implementation.",
        "From our inception, we have focused on delivering high-quality web development, e-commerce solutions, and digital transformation services. Based in Fayoum and Cairo, serving clients across every Egyptian governorate, we combine local insight with global standards of excellence.",
        "We pride ourselves on understanding the unique challenges faced by businesses in today's competitive landscape. Our approach combines technical expertise with creative thinking to deliver solutions that not only meet but exceed client expectations.",
      ],
      valuesTitle: "Our Values",
      values: [
        {
          icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
          title: "Mission Driven",
          description:
            "Delivering solutions that drive real business growth and transformation",
        },
        {
          icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
          title: "Client Focused",
          description:
            "Your success is our primary measure of achievement and satisfaction",
        },
        {
          icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
          title: "Innovation First",
          description:
            "Leveraging cutting-edge technology for optimal results and efficiency",
        },
        {
          icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
          title: "Reliability",
          description:
            "Consistent performance with 99.9% uptime guarantee and support",
        },
      ],
      teamTitle: "Meet Our Team",
      team: [
        {
          name: "Mohand Ashraf",
          role: "Front End Developer",
          experience: "2 years",
          expertise: "Front End",
        },
        {
          name: "Rafaat Ashraf",
          role: "Back End Developer",
          experience: "2 years",
          expertise: "Back End",
        },
        {
          name: "Mina Maged",
          role: "Project Manager",
          experience: "2 years",
          expertise: "Agile & Scrum",
        },
        {
          name: "Ibram Emad",
          role: "AI Developer",
          experience: "2 years",
          expertise: "AI Integration",
        },
        {
          name: "Mina Romany",
          role: "Backend Developer",
          experience: "3 years",
          expertise: "Backend",
        },
        {
          name: "Naguib Mousa",
          role: "Mobile Application",
          experience: "2 years",
          expertise: "Mobile Dev",
        },
        {
          name: "Andrew Magdy",
          role: "Front End Developer",
          experience: "4 years",
          expertise: "Front End",
        },
        {
          name: "Diana Sameh",
          role: "Graphic Designer",
          experience: "3 years",
          expertise: "Design",
        },
        {
          name: "Ahmed Mohsen",
          role: "DevOps Engineer",
          experience: "2 years",
          expertise: "DevOps",
        },
        {
          name: "Micheal Maged",
          role: "Sales Manager",
          experience: "6 years",
          expertise: "Sales",
        },
        {
          name: "Radwa Aymen",
          role: "UI & UX Designer",
          experience: "2 years",
          expertise: "UI/UX",
        },
        {
          name: "Omnia Mohamed",
          role: "Media Buyer",
          experience: "3 years",
          expertise: "Media",
        },
      ],
      journeyTitle: "Our Journey",
      timeline: [
        {
          year: "2025",
          event: "Company Foundation",
          description: "DoGether was established in Fayoum",
        },
        {
          year: "2025",
          event: "First Major Projects",
          description: "Successfully delivered El Zawy Group websites",
        },
        {
          year: "2025",
          event: "Team Formation",
          description: "Assembled a dedicated team of specialists",
        },
        {
          year: "2026",
          event: "Future Goals",
          description: "Expanding services across Egypt and beyond",
        },
      ],
      missionTitle: "Our Mission",
      missionText:
        "To empower businesses with innovative digital solutions that drive growth, enhance efficiency, and create exceptional value for our clients and their customers.",
      visionTitle: "Our Vision",
      visionText:
        "To become the leading digital solutions provider in Egypt, recognized for excellence, innovation, and transformative impact on businesses and communities.",
      numbersTitle: "By The Numbers",
      stats: [
        {
          icon: <MapPin />,
          value: "Fayoum & Cairo",
          label: "Based In",
          color: "text-blue-500",
        },
        {
          icon: <TrendingUp />,
          value: "14+",
          label: "Projects Completed",
          color: "text-green-500",
        },
        {
          icon: <Users />,
          value: "4+",
          label: "Team Members",
          color: "text-yellow-500",
        },
        {
          icon: <Heart />,
          value: "88%",
          label: "Client Satisfaction",
          color: "text-red-500",
        },
      ],
    },
    ar: {
      badge: "عن DoGether",
      title: "عن",
      titleHighlight: "DoGether",
      subtitle:
        "وكالة رقمية محترفة مقرها الفيوم والقاهرة، مصر — نخدم عملاء في كل المحافظات — متخصصة في إنشاء حلول رقمية استثنائية تدفع نمو الأعمال والابتكار التكنولوجي.",
      storyTitle: "قصتنا",
      story: [
        "تأسست DoGether للحلول الرقمية في عام 2025 في الفيوم، مصر، برؤية واضحة: إحداث ثورة في التجارب الرقمية للشركات في العصر الحديث. بدأنا كفريق متخصص من عشاق التكنولوجيا ملتزمين بسد الفجوة بين الأفكار المبتكرة والتنفيذ العملي.",
        "منذ البداية، ركزنا على تقديم تطوير ويب عالي الجودة وحلول التجارة الإلكترونية وخدمات التحول الرقمي. مقرّانا في الفيوم والقاهرة وخدمتنا تصل إلى كل محافظات مصر — نجمع بين البصيرة المحلية والمعايير العالمية للتميز.",
        "نفتخر بفهمنا للتحديات الفريدة التي تواجه الشركات في المشهد التنافسي اليوم. يجمع نهجنا بين الخبرة التقنية والتفكير الإبداعي لتقديم حلول لا تلبي توقعات العملاء فحسب، بل تتجاوزها.",
      ],
      valuesTitle: "قيمنا",
      values: [
        {
          icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
          title: "مدفوعون بالرسالة",
          description: "تقديم حلول تدفع نمو الأعمال الحقيقي والتحول",
        },
        {
          icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
          title: "التركيز على العميل",
          description: "نجاحك هو مقياسنا الأساسي للإنجاز والرضا",
        },
        {
          icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
          title: "الابتكار أولاً",
          description:
            "الاستفادة من التكنولوجيا المتطورة للحصول على أفضل النتائج والكفاءة",
        },
        {
          icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
          title: "الموثوقية",
          description: "أداء ثابت مع ضمان توفر بنسبة 99.9٪ ودعم",
        },
      ],
      teamTitle: "فريق العمل",
      team: [
        {
          name: "مهند أشرف",
          role: "Front End Developer",
          experience: "سنتان",
          expertise: "Front End",
        },
        {
          name: "رأفت أشرف",
          role: "Back End Developer",
          experience: "سنتان",
          expertise: "Back End",
        },
        {
          name: "مينا ماجد",
          role: "Project Manager",
          experience: "سنتان",
          expertise: "Agile & Scrum",
        },
        {
          name: "إبرام عماد",
          role: "AI Developer",
          experience: "سنتان",
          expertise: "AI Integration",
        },
        {
          name: "مينا روماني",
          role: "Backend Developer",
          experience: "٣ سنوات",
          expertise: "Backend",
        },
        {
          name: "نجيب موسى",
          role: "Mobile Application",
          experience: "سنتان",
          expertise: "Mobile Dev",
        },
        {
          name: "أندرو ماجدي",
          role: "Front End Developer",
          experience: "٤ سنوات",
          expertise: "Front End",
        },
        {
          name: "ديانا سامح",
          role: "Graphic Designer",
          experience: "٣ سنوات",
          expertise: "Design",
        },
        {
          name: "أحمد محسن",
          role: "DevOps Engineer",
          experience: "سنتان",
          expertise: "DevOps",
        },
        {
          name: "ميشيل ماجد",
          role: "Sales Manager",
          experience: "٦ سنوات",
          expertise: "Sales",
        },
        {
          name: "رضوى أيمن",
          role: "UI & UX Designer",
          experience: "سنتان",
          expertise: "UI/UX",
        },
        {
          name: "أمنية محمد",
          role: "Media Buyer",
          experience: "٣ سنوات",
          expertise: "Media",
        },
      ],
      journeyTitle: "رحلتنا",
      timeline: [
        {
          year: "٢٠٢٥",
          event: "تأسيس الشركة",
          description: "تأسست DoGether للحلول الرقمية في الفيوم",
        },
        {
          year: "٢٠٢٥",
          event: "أول المشاريع الكبرى",
          description: "تم تسليم مواقع مجموعة الزعوي بنجاح",
        },
        {
          year: "٢٠٢٥",
          event: "تشكيل الفريق",
          description: "تجميع فريق مخصص من المتخصصين",
        },
        {
          year: "٢٠٢٦",
          event: "الأهداف المستقبلية",
          description: "توسيع الخدمات في جميع أنحاء مصر وخارجها",
        },
      ],
      missionTitle: "مهمتنا",
      missionText:
        "تمكين الشركات بحلول رقمية مبتكرة تدفع النمو وتعزز الكفاءة وتخلق قيمة استثنائية لعملائنا وعملائهم.",
      visionTitle: "رؤيتنا",
      visionText:
        "أن نصبح المزود الرائد للحلول الرقمية في مصر، معترفًا بنا للتميز والابتكار والتأثير التحويلي على الأعمال والمجتمعات.",
      numbersTitle: "بالأرقام",
      stats: [
        {
          icon: <MapPin />,
          value: "الفيوم والقاهرة",
          label: "المقر",
          color: "text-blue-500",
        },
        {
          icon: <TrendingUp />,
          value: "١٤+",
          label: "مشروع مكتمل",
          color: "text-green-500",
        },
        {
          icon: <Users />,
          value: "٤+",
          label: "أعضاء الفريق",
          color: "text-yellow-500",
        },
        {
          icon: <Heart />,
          value: "٨٨٪",
          label: "رضا العملاء",
          color: "text-red-500",
        },
      ],
    },
  };

  const t = content[lang];
  const isRTL = lang === "ar";

  const getInitials = (name) => {
    if (!name) return "";
    if (isRTL) {
      return name.charAt(0);
    }
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <section
      id="about"
      className={`py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-dark-light ${
        isRTL ? "rtl" : "ltr"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary-light/10 dark:bg-primary-light/20 mb-6">
            <Target
              className="text-primary-dark dark:text-primary-light"
              size={28}
            />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
            {t.title}{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              {t.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 lg:mb-8 text-center">
            {t.teamTitle}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {t.team.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-card rounded-xl p-3 sm:p-4 border border-gray-100 dark:border-dark-light hover:border-primary-light/20 dark:hover:border-primary-light/30 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-light/10 to-primary-dark/10 dark:from-primary-light/20 dark:to-primary-dark/20 rounded-full flex-shrink-0 flex items-center justify-center">
                    <div className="text-lg sm:text-xl font-bold text-primary-dark dark:text-primary-light">
                      {getInitials(member.name)}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-base sm:text-lg truncate">
                      {member.name}
                    </h4>
                    <p className="text-primary-dark dark:text-primary-light font-medium text-sm sm:text-base">
                      {member.role}
                    </p>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1 sm:mt-2 gap-2 sm:gap-4">
                      <span className="flex items-center whitespace-nowrap">
                        <Clock className="w-3 h-3 ml-1" />
                        {member.experience}
                      </span>
                      <span className="flex items-center whitespace-nowrap">
                        <Award className="w-3 h-3 ml-1" />
                        {member.expertise}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-darker to-primary-dark rounded-xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 text-white"
        >
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 mb-4 sm:mb-6">
                <Target className="text-primary-light" size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                {t.missionTitle}
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                {t.missionText}
              </p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 mb-4 sm:mb-6">
                <Lightbulb className="text-primary-light" size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                {t.visionTitle}
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                {t.visionText}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
