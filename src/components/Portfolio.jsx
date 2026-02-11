import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";
import logo from "../assets/logo1.png";
import logo1 from "../assets/logo2.png";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      category: "website",
      title: "Chicken One - ElZawy",
      description:
        "Modern corporate website with responsive design and smooth user experience",
      logo: logo,
      color: "from-[#F39101] to-[#FFA726]",
      tags: ["Corporate", "Responsive", "Modern"],
      results: ["Professional presence", "Mobile optimized", "User friendly"],
      client: "El Zawy Group",
      duration: "3 weeks",
      link: "https://chicken-one.com/",
      live: true,
    },
    {
      id: 2,
      category: "website",
      title: "New - ElZawy",
      description:
        "Complete e-commerce platform with product management and shopping cart",
      logo: logo1,
      color: "from-[#D10003] to-[#FF5252]",
      tags: ["E-commerce", "Shopping", "Products"],
      results: ["Online sales", "Product catalog", "Secure checkout"],
      client: "El Zawy Stores",
      duration: "5 weeks",
      link: "https://elzawy-new.com/",
      live: true,
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
                      <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={project.logo}
                          alt={`${project.title} Logo`}
                          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain rounded-lg"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = "none";
                            const parent = e.target.parentElement;
                            parent.innerHTML = `
                              <div class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-primary-light to-primary-darker rounded-lg flex items-center justify-center shadow-lg">
                                <span class="text-white font-bold text-lg">${project.title.charAt(
                                  0,
                                )}</span>
                              </div>
                            `;
                          }}
                        />
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

                    {/* Live Badge */}
                    {project.live && (
                      <div className="absolute top-3 right-3 px-2 py-1 bg-green-500/90 backdrop-blur-sm text-white text-xs sm:text-sm rounded-full animate-pulse">
                        Live
                      </div>
                    )}
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
                        Key Features:
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
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-dark dark:text-primary-light font-semibold flex items-center group-hover:text-primary-darker dark:group-hover:text-primary text-sm sm:text-base hover:underline"
                      >
                        Visit Website
                        <ExternalLink className="ml-2" size={16} />
                      </a>
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
              { value: projects.length, label: "Completed Projects" },
              { value: "2+", label: "Happy Clients" },
              { value: "2+", label: "Industries Served" },
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
        {/* <motion.div
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
        </motion.div> */}
      </div>
    </section>
  );
};

export default Portfolio;
