"use client"
import { Brain, Clock, BarChart3, Target, BookOpen, Shield, Sparkles, ArrowRight } from "lucide-react";

import { motion } from "framer-motion";

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description:
        "Get personalized insights and recommendations based on your performance patterns and learning style.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Clock,
      title: "Real-Time Practice",
      description:
        "Experience exam conditions with timed tests and instant results to improve your speed and accuracy.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description:
        "Track your progress with detailed analytics, weak area identification, and improvement suggestions.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Target,
      title: "Adaptive Learning",
      description:
        "Smart question selection that adapts to your skill level and focuses on areas that need improvement.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Library",
      description:
        "Access thousands of questions across multiple subjects with detailed explanations and solutions.",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "Your data is protected with enterprise-grade security while ensuring 99.9% uptime reliability.",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-tr from-purple-200/30 to-pink-200/30 rounded-full blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full mb-6 border border-blue-200"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="font-medium">Advanced Features</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Why Choose
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              {" "}
              MockCenter
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Experience the most advanced mock test platform designed to maximize
            your success rate with cutting-edge features.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
              }}
              whileTap={{ scale: 0.98 }}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:border-blue-300/50 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Hover background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0, rotate: 45 }}
                whileHover={{ scale: 1.5, rotate: 0 }}
                transition={{ duration: 0.5 }}
              />

              {/* Icon */}
              <motion.div
                whileHover={{
                  rotate: [0, -10, 10, 0],
                  scale: 1.1,
                }}
                transition={{ duration: 0.5 }}
                className={`relative z-10 w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
              >
                <feature.icon className="w-8 h-8 text-white" />
                {/* Sparkle effect */}
                <motion.div
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
                />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <motion.h3
                  whileHover={{ x: 5 }}
                  className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300"
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  whileHover={{ x: 5 }}
                  className="text-gray-600 leading-relaxed"
                >
                  {feature.description}
                </motion.p>
              </div>

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, transparent), linear-gradient(90deg, #3b82f6, #8b5cf6)",
                  backgroundClip: "padding-box, border-box",
                  backgroundOrigin: "padding-box, border-box",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
