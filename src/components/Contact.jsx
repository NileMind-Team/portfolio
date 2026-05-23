import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Phone,
  MapPin,
  CheckCircle,
  MessageSquare,
  Clock,
  User,
  Facebook,
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
      location: "Based in cairo, Egypt • Available 24/7 - Everyday",
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
      location: "مقرنا في القاهرة، مصر • متوفرون 24/7 طوال أيام الأسبوع",
    },
  };

  const t = content[lang];
  const isRTL = lang === "ar";

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
    setTimeout(() => {
      setStatus("success");
      console.log("Form submitted:", formData);
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
      details: ["01273188267", "24/7 - Everyday"],
      action: "tel:01273188267",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t.whatsapp,
      details: ["01273188267", "Response in < 5 min"],
      action: "https://wa.me/201273188267",
      color: "from-green-600 to-green-700",
    },
    {
      icon: <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t.facebook,
      details: ["DoGehter Digital", "Message us anytime"],
      action: "https://www.facebook.com/profile.php?id=61580352808105",
      color: "from-blue-500 to-blue-600",
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto mb-12 lg:mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group"
            >
              <a
                href={method.action}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 text-center hover:bg-white/15 transition-all duration-300 border border-white/10 hover:border-white/20"
              >
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{method.icon}</div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-primary-light transition-colors">
                  {method.title}
                </h3>
                {method.details.map((detail, i) => (
                  <p
                    key={i}
                    className="text-primary-light/90 mb-1 text-sm sm:text-base"
                  >
                    {detail}
                  </p>
                ))}
                <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/60 group-hover:text-white/80">
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
          <div className="bg-white dark:bg-dark-card rounded-xl lg:rounded-2xl shadow-2xl overflow-hidden">
            <div className="lg:flex">
              {/* Sidebar - Width Increased */}
              <div className="lg:w-5/12 bg-gradient-to-b from-primary to-primary-dark p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                  {t.whyChoose}
                </h3>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {t.features.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle
                        className={`w-4 h-4 sm:w-5 sm:h-5 text-primary-light ${
                          isRTL ? "ml-3" : "mr-3"
                        } flex-shrink-0`}
                      />
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-3 sm:space-y-4">
                  <div
                    className={`flex items-center ${isRTL ? "space-x-reverse" : ""} space-x-3`}
                  >
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary-light" />
                    <div>
                      <div className="font-bold text-sm sm:text-base">
                        {t.hours}
                      </div>
                      <div className="text-sm text-primary-light">
                        24/7 - Everyday
                      </div>
                    </div>
                  </div>
                  <div
                    className={`flex items-center ${isRTL ? "space-x-reverse" : ""} space-x-3`}
                  >
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-primary-light" />
                    <div>
                      <div className="font-bold text-sm sm:text-base">
                        {t.support}
                      </div>
                      <div className="text-sm text-primary-light">
                        {t.supportText}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form - Width Adjusted */}
              <div className="lg:w-7/12 p-6 sm:p-8 lg:p-12">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {t.formTitle}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                  {t.formSubtitle}
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium text-sm sm:text-base">
                        {t.name}
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-dark-light rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all hover:border-gray-400 dark:hover:border-gray-600 text-sm sm:text-base"
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
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium text-sm sm:text-base">
                        {t.email}
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-dark-light rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all hover:border-gray-400 dark:hover:border-gray-600 text-sm sm:text-base"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="mohand@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium text-sm sm:text-base">
                        {t.phone}
                      </label>
                      <input
                        type="tel"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-dark-light rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all hover:border-gray-400 dark:hover:border-gray-600 text-sm sm:text-base"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="01273188267"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium text-sm sm:text-base">
                        {t.company}
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-dark-light rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all hover:border-gray-400 dark:hover:border-gray-600 text-sm sm:text-base"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder={lang === "en" ? "Your Company" : "شركتك"}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium text-sm sm:text-base">
                        {t.service}
                      </label>
                      <select
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-dark-light rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all hover:border-gray-400 dark:hover:border-gray-600 text-sm sm:text-base"
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
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium text-sm sm:text-base">
                        {t.budget}
                      </label>
                      <select
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-dark-light rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all hover:border-gray-400 dark:hover:border-gray-600 text-sm sm:text-base"
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
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-dark-light rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all hover:border-gray-400 dark:hover:border-gray-600 resize-none text-sm sm:text-base"
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
                        ? "I agree to receive emails and promotional materials from DoGehter. Your data is protected according to our privacy policy."
                        : "أوافق على تلقي رسائل البريد الإلكتروني والمواد الترويجية من DoGehter. بياناتك محمية وفقًا لسياسة الخصوصية الخاصة بنا."}
                    </label>
                  </div>

                  <div className="pt-2 sm:pt-4">
                    <button
                      type="submit"
                      disabled={status === "loading" || status === "success"}
                      className="w-full bg-gradient-to-r from-primary to-primary-dark text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center text-sm sm:text-base"
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
