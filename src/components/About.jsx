import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  Zap,
  Shield,
  Clock,
  Award,
  Heart,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Mohand Ashraf",
      role: "Front End Developer",
      experience: "3 years",
      expertise: "Front End",
    },
    {
      name: "Rafaat Ashraf",
      role: "Back End Developer",
      experience: "3 years",
      expertise: "Back End",
    },
    {
      name: "Mina Maged",
      role: "Project Manager",
      experience: "3 years",
      expertise: "Agile & Scrum",
    },
    {
      name: "Ibram Emad",
      role: "AI Developer",
      experience: "3 years",
      expertise: "AI Integration",
    },
  ];

  const values = [
    {
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Mission Driven",
      description:
        "Delivering solutions that drive real business growth and transformation",
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Client Focused",
      description:
        "Your success is our primary measure of achievement and satisfaction",
    },
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Innovation First",
      description:
        "Leveraging cutting-edge technology for optimal results and efficiency",
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Reliability",
      description:
        "Consistent performance with 99.9% uptime guarantee and support",
    },
  ];

  const timeline = [
    {
      year: "2018",
      event: "Company Founded",
      description: "Started with a small team of passionate developers",
    },
    {
      year: "2019",
      event: "First Major Project",
      description: "Developed POS system for retail chain",
    },
    {
      year: "2020",
      event: "Team Expansion",
      description: "Grew to 15+ dedicated professionals",
    },
    {
      year: "2021",
      event: "International Clients",
      description: "Started serving clients worldwide",
    },
    {
      year: "2022",
      event: "Award Recognition",
      description: "Received Excellence in Innovation award",
    },
    {
      year: "2023",
      event: "50+ Projects",
      description: "Milestone of 50 successful projects",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-dark-light"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary-light/10 dark:bg-primary-light/20 mb-6">
            <Target
              className="text-primary-dark dark:text-primary-light"
              size={28}
            />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Triple S
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
            We are a passionate team of developers and designers dedicated to
            creating exceptional digital experiences that drive business growth
            and innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-20">
          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 lg:mb-6">
              Our Story
            </h3>
            <div className="space-y-3 sm:space-y-4 text-gray-600 dark:text-gray-300">
              <p className="text-sm sm:text-base">
                Founded in 2018, Triple S began with a simple mission: to help
                businesses thrive in the digital age. What started as a small
                team of passionate developers has grown into a full-service
                digital agency specializing in web development and POS systems.
              </p>
              <p className="text-sm sm:text-base">
                Over the years, we've helped hundreds of businesses transform
                their operations, increase efficiency, and drive growth through
                tailored digital solutions. Our commitment to quality,
                innovation, and client satisfaction has been the cornerstone of
                our success.
              </p>
              <p className="text-sm sm:text-base">
                Today, we continue to push boundaries, embracing new
                technologies and methodologies to deliver exceptional value to
                our clients across various industries.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 lg:mt-12">
              <h4 className="text-xl sm:text-2xl font-bold mb-4 lg:mb-6">
                Our Values
              </h4>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-dark-card rounded-xl p-4 sm:p-6 border border-gray-100 dark:border-dark-light"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-light/10 to-primary-dark/10 dark:from-primary-light/20 dark:to-primary-dark/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                      <div className="text-primary-dark dark:text-primary-light">
                        {value.icon}
                      </div>
                    </div>
                    <h5 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">
                      {value.title}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Team & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:space-y-12"
          >
            {/* Team Section */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 lg:mb-6">
                Meet Our Team
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {team.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-dark-card rounded-xl p-3 sm:p-4 border border-gray-100 dark:border-dark-light hover:border-primary-light/20 dark:hover:border-primary-light/30 transition-colors"
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-light/10 to-primary-dark/10 dark:from-primary-light/20 dark:to-primary-dark/20 rounded-full flex items-center justify-center">
                        <div className="text-lg sm:text-xl font-bold text-primary-dark dark:text-primary-light">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-base sm:text-lg">
                          {member.name}
                        </h4>
                        <p className="text-primary-dark dark:text-primary-light font-medium text-sm sm:text-base">
                          {member.role}
                        </p>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1 sm:mt-2 space-x-2 sm:space-x-4">
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {member.experience}
                          </span>
                          <span className="flex items-center">
                            <Award className="w-3 h-3 mr-1" />
                            {member.expertise}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 lg:mb-6">
                Our Journey
              </h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-light to-primary-dark"></div>

                {/* Timeline Items */}
                <div className="space-y-4 sm:space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative pl-10 sm:pl-12">
                      <div className="absolute left-0 top-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                        {item.year}
                      </div>
                      <div className="bg-white dark:bg-dark-card rounded-xl p-3 sm:p-4 border border-gray-100 dark:border-dark-light">
                        <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">
                          {item.event}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-darker to-primary-dark rounded-xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 text-white"
        >
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 mb-4 sm:mb-6">
                <Target className="text-primary-light" size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Our Mission
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                To empower businesses with innovative digital solutions that
                drive growth, enhance efficiency, and create exceptional value
                for our clients and their customers.
              </p>
            </div>

            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 mb-4 sm:mb-6">
                <Lightbulb className="text-primary-light" size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Our Vision
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                To be the leading digital solutions provider in the region,
                recognized for excellence, innovation, and transformative impact
                on businesses and communities.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-16"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 lg:mb-8">
            By The Numbers
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
            {[
              {
                icon: <TrendingUp />,
                value: "50+",
                label: "Projects Completed",
                color: "text-blue-500",
              },
              {
                icon: <Users />,
                value: "30+",
                label: "Happy Clients",
                color: "text-green-500",
              },
              {
                icon: <Award />,
                value: "15+",
                label: "Awards Won",
                color: "text-yellow-500",
              },
              {
                icon: <Heart />,
                value: "100%",
                label: "Client Satisfaction",
                color: "text-red-500",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 bg-white dark:bg-dark-card rounded-xl border border-gray-100 dark:border-dark-light"
              >
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full ${stat.color.replace(
                    "text",
                    "bg"
                  )}/10 mb-3 sm:mb-4`}
                >
                  <div className={stat.color}>{stat.icon}</div>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
