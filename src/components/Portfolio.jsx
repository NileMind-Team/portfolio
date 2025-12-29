import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ShoppingCart,
  Store,
  Coffee,
  Building,
  Smartphone,
  Users,
  ChevronRight,
} from "lucide-react";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      category: "website",
      title: "Bakery Online Store",
      description: "Full e-commerce website with inventory management system",
      icon: <Coffee />,
      color: "from-orange-400 to-orange-600",
      tags: ["E-commerce", "Inventory", "Payment"],
      results: ["+200% online sales", "40% time saved", "Happy customers"],
      client: "Sweet Delights Bakery",
      duration: "4 weeks",
    },
    {
      id: 2,
      category: "pos",
      title: "Retail POS System",
      description: "Complete cashier system for retail stores with analytics",
      icon: <ShoppingCart />,
      color: "from-green-400 to-green-600",
      tags: ["POS", "Analytics", "Multi-store"],
      results: ["30% faster checkout", "Real-time reports", "Inventory sync"],
      client: "Urban Retail Chain",
      duration: "6 weeks",
    },
    {
      id: 3,
      category: "website",
      title: "Corporate Website",
      description: "Business website with admin dashboard and blog",
      icon: <Building />,
      color: "from-blue-400 to-blue-600",
      tags: ["Corporate", "CMS", "Responsive"],
      results: ["+300% leads", "Mobile optimized", "SEO friendly"],
      client: "Tech Solutions Inc.",
      duration: "3 weeks",
    },
    {
      id: 4,
      category: "pos",
      title: "Restaurant Management",
      description: "POS system with table management and kitchen display",
      icon: <Store />,
      color: "from-red-400 to-red-600",
      tags: ["Restaurant", "KDS", "Delivery"],
      results: ["25% order accuracy", "Faster service", "Happy staff"],
      client: "Mediterranean Bistro",
      duration: "8 weeks",
    },
    {
      id: 5,
      category: "website",
      title: "Mobile App UI",
      description: "Modern mobile application interface design",
      icon: <Smartphone />,
      color: "from-purple-400 to-purple-600",
      tags: ["Mobile App", "UI/UX", "Prototype"],
      results: ["4.8 App Store rating", "Smooth UX", "High retention"],
      client: "Fitness Mobile App",
      duration: "5 weeks",
    },
    {
      id: 6,
      category: "custom",
      title: "CRM System",
      description: "Custom customer relationship management software",
      icon: <Users />,
      color: "from-cyan-400 to-cyan-600",
      tags: ["CRM", "Custom", "Automation"],
      results: ["50% efficiency gain", "Better tracking", "Happy team"],
      client: "SalesForce Pro",
      duration: "12 weeks",
    },
  ];

  const categories = [
    { key: "all", label: "All Projects", count: projects.length },
    {
      key: "website",
      label: "Websites",
      count: projects.filter((p) => p.category === "website").length,
    },
    {
      key: "pos",
      label: "POS Systems",
      count: projects.filter((p) => p.category === "pos").length,
    },
    {
      key: "custom",
      label: "Custom Software",
      count: projects.filter((p) => p.category === "custom").length,
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="portfolio"
      className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-dark-light"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary-light/10 dark:bg-primary-light/20 mb-6">
            <Building
              className="text-primary-dark dark:text-primary-light"
              size={28}
            />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 lg:mb-10">
            Showcasing successful projects that transformed businesses across
            various industries
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 lg:mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.key)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base ${
                  filter === category.key
                    ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg"
                    : "bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-light"
                }`}
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

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 lg:mb-12"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="bg-white dark:bg-dark-card rounded-xl lg:rounded-2xl overflow-hidden card-hover h-full">
                  {/* Project Header */}
                  <div
                    className={`h-40 sm:h-48 lg:h-56 bg-gradient-to-r ${project.color} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        {React.cloneElement(project.icon, {
                          size: 32,
                          className: "text-white",
                        })}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1 sm:gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Client Badge */}
                    <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/20 backdrop-blur-sm text-white text-xs sm:text-sm rounded-full">
                      {project.client}
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm rounded-full">
                      {project.duration}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary-dark dark:group-hover:text-primary-light transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                      {project.description}
                    </p>

                    {/* Results */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center text-sm sm:text-base">
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-primary-light" />
                        Results Achieved:
                      </h4>
                      <ul className="space-y-1 sm:space-y-2">
                        {project.results.map((result, i) => (
                          <li
                            key={i}
                            className="flex items-center text-xs sm:text-sm text-gray-600 dark:text-gray-400"
                          >
                            <div className="w-1.5 h-1.5 bg-primary-light rounded-full mr-2"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 dark:border-dark-light">
                      <span className="text-primary-dark dark:text-primary-light font-semibold flex items-center group-hover:text-primary-darker dark:group-hover:text-primary text-sm sm:text-base">
                        View Case Study
                        <ExternalLink className="ml-2" size={16} />
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Portfolio Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-light/10 to-primary-dark/10 dark:from-primary-light/20 dark:to-primary-dark/20 rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-primary-light/20 dark:border-primary-light/30 mb-8 lg:mb-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
            {[
              { value: "50+", label: "Completed Projects" },
              { value: "30+", label: "Happy Clients" },
              { value: "15+", label: "Industries Served" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-dark dark:text-primary-light mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white dark:bg-dark-card rounded-xl lg:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 dark:border-dark-light max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Let's discuss how we can create a similar success story for your
              business
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="btn-primary text-sm sm:text-base">
                Schedule Free Consultation
              </button>
              <button className="btn-secondary text-sm sm:text-base">
                Download Portfolio PDF
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
