import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  MessageSquare,
  Clock,
  User,
} from "lucide-react";

const Contact = () => {
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
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Email Us",
      details: ["contact@triples.com", "support@triples.com"],
      action: "mailto:contact@triples.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Call Us",
      details: ["+20 115 942 4411", "Mon-Fri 9AM-6PM"],
      action: "tel:+201159424411",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "WhatsApp",
      details: ["Chat Available", "Response in < 5 min"],
      action: "https://wa.me/201159424411",
      color: "from-green-600 to-green-700",
    },
  ];

  const serviceOptions = [
    { value: "website", label: "Website Development" },
    { value: "pos", label: "POS System" },
    { value: "ecommerce", label: "E-commerce Solution" },
    { value: "custom", label: "Custom Software" },
    { value: "consulting", label: "Business Consulting" },
  ];

  const budgetOptions = [
    { value: "5000-10000", label: "EGP 5,000 - 10,000" },
    { value: "10000-25000", label: "EGP 10,000 - 25,000" },
    { value: "25000-50000", label: "EGP 25,000 - 50,000" },
    { value: "50000+", label: "EGP 50,000+" },
    { value: "notsure", label: "Need Consultation" },
  ];

  return (
    <section
      id="contact"
      className="py-16 lg:py-20 bg-gradient-to-br from-primary-darker via-primary-dark to-primary relative overflow-hidden"
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
            Get in <span className="text-primary-light">Touch</span>
          </h2>
          <p className="text-primary-light/80 text-base sm:text-lg max-w-2xl mx-auto">
            Ready to start your project? Contact us for a free consultation and
            quote.
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
                  Click to connect →
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
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-dark-card rounded-xl lg:rounded-2xl shadow-2xl overflow-hidden">
            <div className="lg:flex">
              {/* Sidebar */}
              <div className="lg:w-2/5 bg-gradient-to-b from-primary to-primary-dark p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                  Why Choose Us
                </h3>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {[
                    "Free initial consultation",
                    "Detailed project proposal",
                    "Flexible engagement models",
                    "24/7 technical support",
                    "30-day money-back guarantee",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-light mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary-light" />
                    <div>
                      <div className="font-bold text-sm sm:text-base">
                        Response Time
                      </div>
                      <div className="text-sm text-primary-light">
                        Within 2 hours
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-primary-light" />
                    <div>
                      <div className="font-bold text-sm sm:text-base">
                        Dedicated Support
                      </div>
                      <div className="text-sm text-primary-light">
                        Personal account manager
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:w-3/5 p-6 sm:p-8 lg:p-12">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Send us a message
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium text-sm sm:text-base">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-dark-light rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all hover:border-gray-400 dark:hover:border-gray-600 text-sm sm:text-base"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Mohand Ashraf"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium text-sm sm:text-base">
                        Email Address *
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
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-dark-light rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all hover:border-gray-400 dark:hover:border-gray-600 text-sm sm:text-base"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+20 115 942 4411"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium text-sm sm:text-base">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-dark-light rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all hover:border-gray-400 dark:hover:border-gray-600 text-sm sm:text-base"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium text-sm sm:text-base">
                        Service Needed *
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
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium text-sm sm:text-base">
                        Project Budget *
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
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium text-sm sm:text-base">
                      Project Details *
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-dark-light rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all hover:border-gray-400 dark:hover:border-gray-600 resize-none text-sm sm:text-base"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-2 sm:space-x-3">
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
                      I agree to receive emails and promotional materials from
                      Triple S. Your data is protected according to our privacy
                      policy.
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
                          <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 sm:mr-3"></div>
                          Sending Your Message...
                        </>
                      ) : status === "success" ? (
                        <>
                          <CheckCircle className="mr-2 sm:mr-3" size={20} />
                          Message Sent Successfully!
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 sm:mr-3" size={20} />
                          Send Message & Get Free Consultation
                        </>
                      )}
                    </button>

                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-3 sm:mt-4 p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-600 dark:text-green-400 text-center text-sm sm:text-base"
                      >
                        Thank you! We've received your message and will contact
                        you within 24 hours.
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
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary-light" />
            <span className="text-sm sm:text-base">
              Based in Fayoum, Egypt • Serving clients worldwide since 2018
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
