import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  Award,
  TrendingUp,
  Users,
  ThumbsUp,
  Clock,
  Globe,
  Target,
} from "lucide-react";

const Clients = () => {
  const clients = [
    { name: "TechRetail", logo: "TR", industry: "Retail", years: 2 },
    { name: "FoodChain", logo: "FC", industry: "Restaurant", years: 3 },
    { name: "StyleHub", logo: "SH", industry: "Fashion", years: 1 },
    { name: "AutoParts", logo: "AP", industry: "Automotive", years: 2 },
    { name: "BookStore", logo: "BS", industry: "Education", years: 4 },
    { name: "HealthPlus", logo: "HP", industry: "Healthcare", years: 2 },
  ];

  const stats = [
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      value: "50+",
      label: "Happy Clients",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" />,
      value: "98%",
      label: "Satisfaction Rate",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
      value: "40%",
      label: "Growth Increase",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
      value: "25+",
      label: "Awards Won",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const features = [
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
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-dark dark:to-dark-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary-light/10 dark:bg-primary-light/20 mb-6">
            <Users
              className="text-primary-dark dark:text-primary-light"
              size={28}
            />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Join hundreds of businesses that trust us with their digital
            transformation journey
          </p>
        </motion.div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12 lg:mb-16">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white dark:bg-dark-card rounded-xl lg:rounded-2xl p-4 sm:p-6 card-hover text-center h-full">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-primary-light/10 to-primary-dark/10 dark:from-primary-light/20 dark:to-primary-dark/20 rounded-full flex items-center justify-center group-hover:from-primary-light/20 group-hover:to-primary-dark/20 transition-all">
                  <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                    {client.logo}
                  </span>
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-1">
                  {client.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-1">
                  {client.industry}
                </p>
                <div className="text-xs text-primary-dark dark:text-primary-light font-medium">
                  {client.years} {client.years === 1 ? "Year" : "Years"}{" "}
                  Together
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 lg:mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div
                className={`bg-gradient-to-br ${stat.color} rounded-xl lg:rounded-2xl p-4 sm:p-6 text-white text-center relative overflow-hidden`}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-white/30"></div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-white/90 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-light/5 to-primary-dark/5 dark:from-primary-light/10 dark:to-primary-dark/10 rounded-xl lg:rounded-3xl p-6 sm:p-8 border border-primary-light/10 dark:border-primary-light/20"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 lg:mb-8">
            Why Clients Choose Us
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
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
