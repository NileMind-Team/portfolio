'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Phone,
  MapPin,
  CheckCircle,
  Shield,
  MessageSquare,
  Clock,
  User,
  Facebook,
  Instagram,
  Music2,
} from "lucide-react";

const Contact = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "website",
    message: "",
    budget: "5000-10000",
  });

  const [status, setStatus] = useState("idle");

  const content = {
    en: {
      badge: "Get in Touch",
      title: "Get in",
      titleHighlight: "Touch",
      subtitle:
        "Ready to start your project? Contact us for a free consultation and quote.",
      call: "Call Us",
      whatsapp: "WhatsApp",
      facebook: "Facebook",
      instagram: "Instagram",
      tiktok: "TikTok",
      formTitle: "Send us a message",
      formSubtitle:
        "Fill out the form below and we'll get back to you as soon as possible.",
      name: "Full Name *",
      email: "Email Address *",
      phone: "Phone Number",
      company: "Company Name",
      service: "Service Needed *",
      budget: "Project Budget *",
      message: "Project Details *",
      submit: "Send Message & Get Free Consultation",
      sending: "Sending Your Message...",
      success: "Message Sent Successfully!",
      successText:
        "Thank you! We've received your message and will contact you within 24 hours.",
      whyChoose: "Why Choose Us",
      features: [
        "Free initial consultation",
        "Detailed project proposal",
        "Flexible engagement models",
        "24/7 technical support",
        "30-day money-back guarantee",
      ],
      hours: "Working Hours",
      support: "Dedicated Support",
      supportText: "Personal account manager",
      location: "Based in Fayoum & Cairo, Egypt • Serving all governorates • Available 24/7 - Everyday",
    },
    ar: {
      badge: "تواصل معنا",
      title: "تواصل",
      titleHighlight: "معنا",
      subtitle:
        "مستعد لبدء مشروعك؟ اتصل بنا للحصول على استشارة مجانية وعرض سعر.",
      call: "اتصل بنا",
      whatsapp: "واتساب",
      facebook: "فيسبوك",
      instagram: "إنستجرام",
      tiktok: "تيك توك",
      formTitle: "أرسل لنا رسالة",
      formSubtitle: "املأ النموذج أدناه وسنعود إليك في أقرب وقت ممكن.",
      name: "الاسم الكامل *",
      email: "البريد الإلكتروني *",
      phone: "رقم الهاتف",
      company: "اسم الشركة",
      service: "الخدمة المطلوبة *",
      budget: "ميزانية المشروع *",
      message: "تفاصيل المشروع *",
      submit: "إرسال الرسالة والحصول على استشارة مجانية",
      sending: "جاري إرسال رسالتك...",
      success: "تم إرسال الرسالة بنجاح!",
      successText: "شكراً لك! لقد استلمنا رسالتك وسنتواصل معك خلال 24 ساعة.",
      whyChoose: "لماذا تختارنا",
      features: [
        "استشارة أولية مجانية",
        "اقتراح مشروع مفصل",
        "نماذج تعاقد مرنة",
        "دعم فني 24/7",
        "ضمان استعادة الأموال لمدة 30 يومًا",
      ],
      hours: "ساعات العمل",
      support: "دعم مخصص",
      supportText: "مدير حساب شخصي",
      location: "مقرّانا في الفيوم والقاهرة، مصر • نخدم كل المحافظات • متوفرون 24/7 طوال أيام الأسبوع",
    },
  };

  const t = content[lang];
  const isRTL = lang === "ar";
  const fieldClass = "w-full rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 hover:border-primary-light/40 focus:border-primary-light focus:bg-white focus:ring-4 focus:ring-primary-light/10 dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:placeholder:text-gray-500 dark:hover:border-primary-light/40 dark:focus:bg-white/[0.07] sm:text-base";

  const serviceOptions = [
    {
      value: "website",
      labelEn: "Website Development",
      labelAr: "تطوير المواقع",
    },
    { value: "pos", labelEn: "POS System", labelAr: "نظام نقاط البيع" },
    {
      value: "ecommerce",
      labelEn: "E-commerce Solution",
      labelAr: "حل التجارة الإلكترونية",
    },
    { value: "custom", labelEn: "Custom Software", labelAr: "برمجيات مخصصة" },
    {
      value: "consulting",
      labelEn: "Business Consulting",
      labelAr: "استشارات الأعمال",
    },
  ];

  const budgetOptions = [
    {
      value: "5000-10000",
      labelEn: "EGP 5,000 - 10,000",
      labelAr: "٥٠٠٠ - ١٠٠٠٠ جنيه",
    },
    {
      value: "10000-25000",
      labelEn: "EGP 10,000 - 25,000",
      labelAr: "١٠٠٠٠ - ٢٥٠٠٠ جنيه",
    },
    {
      value: "25000-50000",
      labelEn: "EGP 25,000 - 50,000",
      labelAr: "٢٥٠٠٠ - ٥٠٠٠٠ جنيه",
    },
    { value: "50000+", labelEn: "EGP 50,000+", labelAr: "٥٠٠٠٠+ جنيه" },
    {
      value: "notsure",
      labelEn: "Need Consultation",
      labelAr: "بحاجة إلى استشارة",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    const message = `*رسالة جديدة من الموقع*\n\n👤 *الاسم:* ${formData.name}\n📧 *الإيميل:* ${formData.email}\n📞 *الهاتف:* ${formData.phone || "لم يُذكر"}\n🏢 *الشركة:* ${formData.company || "لم تُذكر"}\n🛠️ *الخدمة:* ${formData.service}\n💰 *الميزانية:* ${formData.budget}\n\n📝 *التفاصيل:*\n${formData.message}`;

    const whatsappUrl = `https://wa.me/201062485133?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setStatus("success");
      window.open(whatsappUrl, "_blank");
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "website",
          message: "",
          budget: "5000-10000",
        });
        setStatus("idle");
      }, 3000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t.call,
      details: ["01062485133", "24/7 - Everyday"],
      action: "tel:+201062485133",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t.whatsapp,
      details: ["01062485133", "Response in < 5 min"],
      action: "https://wa.me/201062485133",
      color: "from-green-600 to-green-700",
    },
    {
      icon: <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t.facebook,
      details: ["DoGether", "Message us anytime"],
      action: "https://www.facebook.com/Dogethertech",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t.instagram,
      details: ["@dogethertech", "Follow our latest work"],
      action: "https://www.instagram.com/dogethertech",
      color: "from-pink-500 via-fuchsia-500 to-orange-400",
    },
    {
      icon: <Music2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t.tiktok,
      details: ["@dogethertech", "Short tech content"],
      action: "https://www.tiktok.com/@dogethertech",
      color: "from-gray-950 via-gray-800 to-cyan-500",
    },
  ];

  return (
    <section
      id="contact"
      className={`py-16 lg:py-20 bg-gradient-to-br from-primary-darker via-primary-dark to-primary relative overflow-hidden ${
        isRTL ? "rtl" : "ltr"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-light via-white/30 to-primary-light animate-gradient-x"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <Send className="text-primary-light" size={28} />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
            {t.title}{" "}
            <span className="text-primary-light">{t.titleHighlight}</span>
          </h2>
          <p className="text-primary-light/80 text-base sm:text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="mx-auto mb-12 grid max-w-6xl grid-cols-2 gap-3 sm:gap-4 lg:mb-16 lg:grid-cols-5">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className={`group ${index === contactMethods.length - 1 ? "col-span-2 w-[48%] justify-self-center lg:col-span-1 lg:w-full" : ""}`}
            >
              <a
                href={method.action}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full rounded-2xl border border-white/10 bg-white/10 p-3 text-center backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/15 sm:p-4 lg:p-5"
              >
                <div
                  className={`mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r ${method.color} shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12 lg:h-14 lg:w-14`}
                >
                  <div className="text-white">{method.icon}</div>
                </div>
                <h3 className="mb-2 text-sm font-bold text-white transition-colors group-hover:text-primary-light sm:text-base lg:text-lg">
                  {method.title}
                </h3>
                {method.details.map((detail, i) => (
                  <p
                    key={i}
                    className="mb-1 break-words text-[11px] leading-tight text-primary-light/90 sm:text-xs lg:text-sm"
                  >
                    {detail}
                  </p>
                ))}
                <div className="mt-2 text-[10px] text-white/60 group-hover:text-white/80 sm:text-xs">
                  {isRTL ? "انقر للاتصال ←" : "Click to connect →"}
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/95 p-2 shadow-2xl shadow-black/20 backdrop-blur-xl dark:bg-[#0c1929]/95 sm:p-3">
            <div className="grid gap-2 sm:gap-3 lg:grid-cols-[0.82fr_1.18fr]">
              {/* Trust panel */}
              <div className="relative order-2 overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#0e786b] via-primary-dark to-primary-darker p-5 text-white sm:p-7 lg:order-1 lg:p-8">
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary-light/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-12 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
                <div className="relative z-10 mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm">
                    <Shield className="h-5 w-5 text-primary-light" />
                  </div>
                  <h3 className="text-xl font-bold sm:text-2xl">
                  {t.whyChoose}
                  </h3>
                </div>
                <ul className="relative z-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                  {t.features.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: isRTL ? 12 : -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.06 }}
                      className="flex items-center rounded-xl border border-white/10 bg-white/[0.07] px-3 py-2.5 backdrop-blur-sm"
                    >
                      <CheckCircle
                        className={`w-4 h-4 text-primary-light ${
                          isRTL ? "ml-3" : "mr-3"
                        } flex-shrink-0`}
                      />
                      <span className="text-sm text-white/90">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="relative z-10 mt-5 grid grid-cols-2 gap-2 border-t border-white/10 pt-5">
                  <div
                    className="rounded-xl bg-black/10 p-3"
                  >
                    <Clock className="mb-2 h-4 w-4 text-primary-light" />
                    <div className="font-bold text-xs sm:text-sm">
                        {t.hours}
                    </div>
                      <div className="mt-0.5 text-xs text-primary-light">
                        24/7 - Everyday
                      </div>
                  </div>
                  <div
                    className="rounded-xl bg-black/10 p-3"
                  >
                    <User className="mb-2 h-4 w-4 text-primary-light" />
                    <div className="font-bold text-xs sm:text-sm">
                        {t.support}
                    </div>
                      <div className="mt-0.5 text-xs text-primary-light">
                        {t.supportText}
                      </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="order-1 rounded-[1.5rem] bg-white p-5 dark:bg-[#111f31] sm:p-7 lg:order-2 lg:p-9">
                <div className="mb-6 flex items-start gap-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-light/10 text-primary-dark dark:text-primary-light">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">{t.formTitle}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{t.formSubtitle}</p>
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5"
                >
                  <div className="grid grid-cols-2 gap-2 sm:gap-6">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300 sm:mb-2 sm:text-base">
                        {t.name}
                      </label>
                      <input
                        type="text"
                        required
                        className={fieldClass}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder={
                          lang === "en" ? "Mohand Ashraf" : "مهند أشرف"
                        }
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300 sm:mb-2 sm:text-base">
                        {t.email}
                      </label>
                      <input
                        type="email"
                        className={fieldClass}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="mohand@company.com"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300 sm:mb-2 sm:text-base">
                        {t.phone}
                      </label>
                      <input
                        type="tel"
                        className={fieldClass}
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="01062485133"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300 sm:mb-2 sm:text-base">
                        {t.company}
                      </label>
                      <input
                        type="text"
                        className={fieldClass}
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder={lang === "en" ? "Your Company" : "شركتك"}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-6">
                    <div>
                      <label htmlFor="service-select" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium text-sm sm:text-base">
                        {t.service}
                      </label>
                      <select
                        id="service-select"
                        className={fieldClass}
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        required
                      >
                        {serviceOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {lang === "en" ? option.labelEn : option.labelAr}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget-select" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium text-sm sm:text-base">
                        {t.budget}
                      </label>
                      <select
                        id="budget-select"
                        className={fieldClass}
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        required
                      >
                        {budgetOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {lang === "en" ? option.labelEn : option.labelAr}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium text-sm sm:text-base">
                      {t.message}
                    </label>
                    <textarea
                      rows={3}
                      className={`${fieldClass} min-h-28 resize-none`}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder={
                        lang === "en"
                          ? "Tell us about your project requirements..."
                          : "أخبرنا عن متطلبات مشروعك..."
                      }
                      required
                    />
                  </div>

                  <div
                    className={`flex items-start ${isRTL ? "space-x-reverse" : ""} space-x-2 sm:space-x-3`}
                  >
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="w-4 h-4 sm:w-5 sm:h-5 text-primary-dark rounded focus:ring-primary-light mt-1"
                    />
                    <label
                      htmlFor="consent"
                      className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm"
                    >
                      {lang === "en"
                        ? "I agree to receive emails and promotional materials from DoGether. Your data is protected according to our privacy policy."
                        : "أوافق على تلقي رسائل البريد الإلكتروني والمواد الترويجية من DoGether. بياناتك محمية وفقًا لسياسة الخصوصية الخاصة بنا."}
                    </label>
                  </div>

                  <div className="pt-2 sm:pt-4">
                    <button
                      type="submit"
                      disabled={status === "loading" || status === "success"}
                      className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-primary to-primary-dark px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 disabled:cursor-not-allowed disabled:opacity-70 sm:px-6 sm:text-base"
                    >
                      {status === "loading" ? (
                        <>
                          <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full animate-spin ml-2 sm:ml-3"></div>
                          {t.sending}
                        </>
                      ) : status === "success" ? (
                        <>
                          <CheckCircle className="ml-2 sm:ml-3" size={20} />
                          {t.success}
                        </>
                      ) : (
                        <>
                          <Send className="ml-2 sm:ml-3" size={20} />
                          {t.submit}
                        </>
                      )}
                    </button>
                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-3 sm:mt-4 p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-600 dark:text-green-400 text-center text-sm sm:text-base"
                      >
                        {t.successText}
                      </motion.div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Location Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-16 text-center text-white/80"
        >
          <div
            className={`inline-flex items-center ${isRTL ? "space-x-reverse" : ""} space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3`}
          >
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary-light" />
            <span className="text-sm sm:text-base">{t.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
