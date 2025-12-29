import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  User,
  Building,
  Calendar,
} from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Ahmed Mohamed",
      role: "Owner, Cairo Café",
      company: "Cairo Café",
      content:
        "The POS system completely transformed our restaurant operations. Sales tracking and inventory management became so efficient that we saved 15 hours per week on administrative tasks!",
      rating: 5,
      image: "AM",
      date: "March 2024",
      improvements: [
        "40% faster service",
        "Reduced waste by 25%",
        "Increased customer satisfaction",
      ],
    },
    {
      name: "Sarah Johnson",
      role: "CEO, Fashion Boutique",
      company: "StyleHub Fashion",
      content:
        "Our e-commerce website increased online sales by 300% in just 3 months. The team was professional, responsive, and delivered exactly what we needed on time.",
      rating: 5,
      image: "SJ",
      date: "February 2024",
      improvements: [
        "300% sales increase",
        "Mobile-first design",
        "SEO optimized",
      ],
    },
    {
      name: "Mohamed Ali",
      role: "Manager, Auto Parts Store",
      company: "AutoParts Pro",
      content:
        "The custom inventory management system saved us 20 hours per week. The support team is always available when needed and the system is incredibly reliable.",
      rating: 4,
      image: "MA",
      date: "January 2024",
      improvements: [
        "20 hours/week saved",
        "99.9% uptime",
        "Real-time tracking",
      ],
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-16 lg:py-20 bg-white dark:bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary-light/10 dark:bg-primary-light/20 mb-6">
            <Quote
              className="text-primary-dark dark:text-primary-light"
              size={28}
            />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Real feedback from businesses we've helped transform and grow
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Testimonial Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {testimonials.map(
                (testimonial, index) =>
                  index === activeIndex && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="bg-gradient-to-br from-gray-50 to-white dark:from-dark-light dark:to-dark-card rounded-xl lg:rounded-3xl shadow-xl overflow-hidden"
                    >
                      <div className="md:flex">
                        {/* Client Info Sidebar */}
                        <div className="md:w-1/3 bg-gradient-to-b from-primary-dark to-primary-darker text-white p-6 sm:p-8">
                          <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-primary-light to-primary rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                              {testimonial.image}
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">
                              {testimonial.name}
                            </h3>
                            <div className="text-primary-light mb-2 text-sm sm:text-base">
                              {testimonial.role}
                            </div>
                            <div className="flex items-center text-xs sm:text-sm mb-3 sm:mb-4">
                              <Building className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                              {testimonial.company}
                            </div>
                            <div className="flex items-center text-xs sm:text-sm">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                              {testimonial.date}
                            </div>
                          </div>

                          <div className="border-t border-white/20 pt-4 sm:pt-6">
                            <h4 className="font-bold mb-2 sm:mb-3 text-sm sm:text-base">
                              Key Improvements
                            </h4>
                            <ul className="space-y-1 sm:space-y-2">
                              {testimonial.improvements.map(
                                (improvement, i) => (
                                  <li
                                    key={i}
                                    className="flex items-center text-xs sm:text-sm"
                                  >
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-light rounded-full mr-2 sm:mr-3"></div>
                                    {improvement}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="md:w-2/3 p-6 sm:p-8 lg:p-12">
                          <div className="flex items-center mb-6 sm:mb-8">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-5 h-5 sm:w-6 sm:h-6 ${
                                  i < testimonial.rating
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300 dark:text-gray-600"
                                } mr-1`}
                              />
                            ))}
                            <span className="ml-2 text-gray-600 dark:text-gray-300">
                              {testimonial.rating}/5
                            </span>
                          </div>

                          <div className="relative mb-6 sm:mb-8">
                            <Quote className="absolute -top-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 text-primary-light/20" />
                            <p className="text-gray-700 dark:text-gray-200 text-base sm:text-lg italic pl-6">
                              "{testimonial.content}"
                            </p>
                            <Quote className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 text-primary-light/20 rotate-180" />
                          </div>

                          <div className="bg-gradient-to-r from-primary-light/5 to-primary-dark/5 dark:from-primary-light/10 dark:to-primary-dark/10 rounded-lg sm:rounded-xl p-4 sm:p-6">
                            <h4 className="font-bold mb-2 sm:mb-3 text-sm sm:text-base">
                              Project Outcome
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                              This project resulted in significant improvements
                              in operational efficiency and customer
                              satisfaction, demonstrating the value of our
                              tailored solutions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-light shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-dark-light transition-colors"
              >
                <ChevronLeft
                  className="text-gray-600 dark:text-gray-300"
                  size={20}
                />
              </motion.button>

              <div className="flex gap-1 sm:gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                      index === activeIndex
                        ? "bg-primary-dark w-6 sm:w-8"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-light shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-dark-light transition-colors"
              >
                <ChevronRight
                  className="text-gray-600 dark:text-gray-300"
                  size={20}
                />
              </motion.button>
            </div>
          </div>

          {/* Additional Mini Testimonials */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 lg:mt-16"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 lg:mb-8">
              More Client Feedback
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  name: "Karim Ahmed",
                  feedback: "Excellent support team!",
                  role: "Restaurant Owner",
                },
                {
                  name: "Noura Salem",
                  feedback: "Transformed our online presence",
                  role: "Boutique Manager",
                },
                {
                  name: "Omar Farouk",
                  feedback: "Professional and reliable",
                  role: "Retail Chain CEO",
                },
              ].map((feedback, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-dark-card rounded-xl p-4 sm:p-6 border border-gray-100 dark:border-dark-light"
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-light/10 to-primary-dark/10 dark:from-primary-light/20 dark:to-primary-dark/20 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                      <User
                        className="text-primary-dark dark:text-primary-light"
                        size={18}
                      />
                    </div>
                    <div>
                      <div className="font-bold text-sm sm:text-base">
                        {feedback.name}
                      </div>
                      <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                        {feedback.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    "{feedback.feedback}"
                  </p>
                  <div className="flex mt-3 sm:mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
