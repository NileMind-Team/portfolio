'use client'

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  CreditCard,
  Zap,
  Shield,
  Cpu,
  BarChart,
  Settings,
  Headphones,
} from "lucide-react";

const Services = ({ lang }) => {
  const content = {
    en: {
      badge: "Our Expert Services",
      title: "Our",
      titleHighlight: "Expert Services",
      subtitle:
        "Comprehensive digital solutions designed to meet your business needs and drive growth",
      services: [
        {
          title: "Website Development",
          description:
            "Professional responsive websites with modern design and SEO optimization.",
          features: [
            "Mobile-First Design",
            "SEO Optimized",
            "Fast Loading",
            "CMS Integration",
          ],
          icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
          color: "from-blue-500 to-blue-700",
        },
        {
          title: "POS Systems",
          description:
            "Advanced cashier systems with inventory management and sales analytics.",
          features: [
            "Real-time Sync",
            "Inventory Tracking",
            "Sales Reports",
            "Multi-branch",
          ],
          icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
          color: "from-green-500 to-green-700",
        },
        {
          title: "E-commerce Solutions",
          description:
            "Complete online stores with payment integration and order management.",
          features: [
            "Payment Gateways",
            "Order Management",
            "Customer Portal",
            "Shipping API",
          ],
          icon: <CreditCard className="w-6 h-6 sm:w-8 sm:h-8" />,
          color: "from-purple-500 to-purple-700",
        },
        {
          title: "Custom Software",
          description:
            "Tailored business solutions to automate your operations.",
          features: [
            "Custom Workflows",
            "API Integration",
            "Cloud Hosting",
            "Scalable",
          ],
          icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
          color: "from-orange-500 to-orange-700",
        },
      ],
      additionalTitle: "Additional Services",
      additional: [
        {
          icon: <Settings />,
          title: "Maintenance & Support",
          description: "Ongoing support and updates",
        },
        {
          icon: <Shield />,
          title: "Security Audit",
          description: "Comprehensive security assessment",
        },
        {
          icon: <BarChart />,
          title: "Performance Optimization",
          description: "Speed and efficiency improvements",
        },
        {
          icon: <Headphones />,
          title: "24/7 Technical Support",
          description: "Round-the-clock assistance",
        },
      ],
    },
    ar: {
      badge: "خدماتنا الخبيرة",
      title: "خدماتنا",
      titleHighlight: "الخبيرة",
      subtitle: "حلول رقمية شاملة مصممة لتلبية احتياجات عملك ودفع النمو",
      services: [
        {
          title: "تطوير المواقع",
          description:
            "مواقع ويب احترافية متجاوبة مع تصميم حديث وتحسين محركات البحث.",
          features: [
            "تصميم متجاوب",
            "تحسين محركات البحث",
            "تحميل سريع",
            "نظام إدارة محتوى",
          ],
          icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
          color: "from-blue-500 to-blue-700",
        },
        {
          title: "أنظمة نقاط البيع",
          description: "أنظمة كاشير متقدمة مع إدارة المخزون وتحليلات المبيعات.",
          features: [
            "مزامنة فورية",
            "تتبع المخزون",
            "تقارير المبيعات",
            "فروع متعددة",
          ],
          icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
          color: "from-green-500 to-green-700",
        },
        {
          title: "حلول التجارة الإلكترونية",
          description: "متاجر إلكترونية متكاملة مع بوابات دفع وإدارة الطلبات.",
          features: [
            "بوابات دفع",
            "إدارة الطلبات",
            "بوابة العملاء",
            "واجهة برمجة التطبيقات",
          ],
          icon: <CreditCard className="w-6 h-6 sm:w-8 sm:h-8" />,
          color: "from-purple-500 to-purple-700",
        },
        {
          title: "برمجيات مخصصة",
          description: "حلول أعمال مخصصة لأتمتة عملياتك.",
          features: [
            "سير عمل مخصص",
            "تكامل API",
            "استضافة سحابية",
            "قابل للتوسع",
          ],
          icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
          color: "from-orange-500 to-orange-700",
        },
      ],
      additionalTitle: "خدمات إضافية",
      additional: [
        {
          icon: <Settings />,
          title: "الصيانة والدعم",
          description: "دعم وتحديثات مستمرة",
        },
        {
          icon: <Shield />,
          title: "تدقيق أمني",
          description: "تقييم أمني شامل",
        },
        {
          icon: <BarChart />,
          title: "تحسين الأداء",
          description: "تحسينات السرعة والكفاءة",
        },
        {
          icon: <Headphones />,
          title: "دعم فني 24/7",
          description: "مساعدة على مدار الساعة",
        },
      ],
    },
  };

  const t = content[lang];

  // Internal links to dedicated service pages (same order in both languages)
  const serviceLinks = [
    "/services/website",
    "/services/pos",
    "/services/store",
    "/services/custom-system",
  ];
  const learnMore = lang === "en" ? "Learn more" : "اعرف المزيد";

  return (
    <section id="services" className="pt-16 lg:pt-20 pb-8 lg:pb-10 bg-white dark:bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary-light/10 dark:bg-primary-light/20 mb-6">
            <Cpu
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

        {/* Main Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 lg:mb-16">
          {t.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white dark:bg-dark-card rounded-xl lg:rounded-2xl p-4 sm:p-6 card-hover h-full border border-gray-100 dark:border-dark-light">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${service.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary-dark dark:group-hover:text-primary-light transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-xs sm:text-sm"
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-light rounded-full mr-2 sm:mr-3"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={serviceLinks[index]}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary-dark dark:text-primary-light hover:gap-2 transition-all"
                >
                  {learnMore}
                  <span aria-hidden="true">{lang === "en" ? "→" : "←"}</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
