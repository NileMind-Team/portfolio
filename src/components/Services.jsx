import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  CreditCard,
  Zap,
  Shield,
  Clock,
  Cpu,
  BarChart,
  Settings,
  Headphones,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Website Development",
      description:
        "Professional responsive websites with modern design and SEO optimization.",
      features: [
        "Mobile-First Design",
        "SEO Optimized",
        "Fast Loading",
        "CMS Integration",
      ],
      time: "2-4 Weeks",
      color: "from-blue-500 to-blue-700",
      price: "Starting from $1,000",
    },
    {
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "POS Systems",
      description:
        "Advanced cashier systems with inventory management and sales analytics.",
      features: [
        "Real-time Sync",
        "Inventory Tracking",
        "Sales Reports",
        "Multi-branch",
      ],
      time: "3-6 Weeks",
      color: "from-green-500 to-green-700",
      price: "Starting from $1,500",
    },
    {
      icon: <CreditCard className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "E-commerce Solutions",
      description:
        "Complete online stores with payment integration and order management.",
      features: [
        "Payment Gateways",
        "Order Management",
        "Customer Portal",
        "Shipping API",
      ],
      time: "4-8 Weeks",
      color: "from-purple-500 to-purple-700",
      price: "Starting from $2,000",
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Custom Software",
      description: "Tailored business solutions to automate your operations.",
      features: [
        "Custom Workflows",
        "API Integration",
        "Cloud Hosting",
        "Scalable",
      ],
      time: "6-12 Weeks",
      color: "from-orange-500 to-orange-700",
      price: "Custom Quote",
    },
  ];

  const additionalServices = [
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
  ];

  return (
    <section id="services" className="py-16 lg:py-20 bg-white dark:bg-dark">
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
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Expert Services
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
            Comprehensive digital solutions designed to meet your business needs
            and drive growth
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 lg:mb-16">
          {services.map((service, index) => (
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

                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
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

                <div className="pt-4 sm:pt-6 border-t border-gray-100 dark:border-dark-light">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      <span className="text-xs sm:text-sm">{service.time}</span>
                    </div>
                    <div className="text-primary-dark dark:text-primary-light font-bold text-sm sm:text-base">
                      {service.price}
                    </div>
                  </div>
                  <button className="w-full py-2 bg-gray-50 dark:bg-dark-light hover:bg-gray-100 dark:hover:bg-dark-lighter text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors text-sm">
                    Get Quote
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-16"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 lg:mb-8">
            Additional Services
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-dark-light dark:to-dark-card rounded-xl p-4 sm:p-6 border border-gray-100 dark:border-dark-light"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-light/10 to-primary-dark/10 dark:from-primary-light/20 dark:to-primary-dark/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <div className="text-primary-dark dark:text-primary-light">
                    {service.icon}
                  </div>
                </div>
                <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-darker to-primary-dark rounded-xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            We specialize in creating tailored solutions for unique business
            requirements. Let's discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-white text-primary-dark px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
