import React from "react";
import { motion } from "framer-motion";
import { ThumbsUp, Clock, Globe, Target } from "lucide-react";

const Clients = ({ lang }) => {
  const content = {
    en: {
      featuresTitle: "Why Clients Choose Us",
      features: [
        {
          icon: <ThumbsUp />,
          title: "Quality Assurance",
          description: "Rigorous testing process",
        },
        {
          icon: <Clock />,
          title: "On-time Delivery",
          description: "97% projects delivered on time",
        },
        {
          icon: <Globe />,
          title: "Global Standards",
          description: "International quality standards",
        },
        {
          icon: <Target />,
          title: "Goal Oriented",
          description: "Focus on business objectives",
        },
      ],
    },
    ar: {
      featuresTitle: "لماذا يختارنا العملاء",
      features: [
        {
          icon: <ThumbsUp />,
          title: "ضمان الجودة",
          description: "عملية اختبار صارمة",
        },
        {
          icon: <Clock />,
          title: "التسليم في الوقت المحدد",
          description: "٩٧٪ من المشاريع تم تسليمها في الوقت المحدد",
        },
        {
          icon: <Globe />,
          title: "معايير عالمية",
          description: "معايير جودة دولية",
        },
        {
          icon: <Target />,
          title: "موجه نحو الهدف",
          description: "التركيز على أهداف العمل",
        },
      ],
    },
  };

  const t = content[lang];
  const isRTL = lang === "ar";

  return (
    <section
      className={`py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-dark dark:to-dark-light ${
        isRTL ? "rtl" : "ltr"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-light/5 to-primary-dark/5 dark:from-primary-light/10 dark:to-primary-dark/10 rounded-xl lg:rounded-3xl p-6 sm:p-8 border border-primary-light/10 dark:border-primary-light/20"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 lg:mb-8">
            {t.featuresTitle}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {t.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: isRTL
                    ? index % 2 === 0
                      ? 20
                      : -20
                    : index % 2 === 0
                      ? -20
                      : 20,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-dark-card rounded-xl p-4 sm:p-6 text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-primary-light/10 to-primary-dark/10 dark:from-primary-light/20 dark:to-primary-dark/20 rounded-full flex items-center justify-center">
                  <div className="text-primary-dark dark:text-primary-light">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
