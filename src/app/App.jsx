import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";

import { AIAnalyticsDashboard } from "./components/AIAnalyticsDashboard";
import { AIQuizGenerator } from "./components/AIQuizGenerator";
import { TestCategories } from "./components/TestCategories";
import { SuccessStories } from "./components/SuccessStories";
import { StayConnected } from "./components/StayConnected";
import { Footer } from "./components/Footer";
import { LoadingScreen } from "./components/LoadingScreen";
import { FloatingParticles } from "./components/FloatingParticles";
import { ScrollProgress } from "./components/ScrollProgress";
import { BlogPage } from "./components/BlogPage";
import { BlogSEO } from "./components/BlogSEO";
import { BlogNewsletter } from "./components/BlogNewsletter";
import { ExamCategory } from "./components/ExamCategory";
import { ExamPage } from "./components/ExamPage";
import { Toaster } from "./components/ui/sonner";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Simulate loading time for smooth entrance
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowContent(true), 100);
    }, 2000);

    // Listen for hash changes to handle navigation
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash === "blog") {
        setCurrentPage("blog");
      } else if (
        ["banking", "ssc", "railway", "state", "teaching", "defence"].includes(hash)
      ) {
        setCurrentPage("category");
      } else if (
        hash.includes("/") &&
        ["banking", "ssc", "railway", "state", "teaching", "defence"].includes(
          hash.split("/")[0]
        )
      ) {
        setCurrentPage("exam-page");
      } else {
        setCurrentPage("home");
      }
    };

    // Check initial hash
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  if (currentPage === "blog") {
    return (
      <>
        <BlogSEO />
        <Toaster />
        <BlogPage />
      </>
    );
  }

  if (currentPage === "category") {
    const hash = window.location.hash.substring(1);
    return (
      <div className="min-h-screen bg-white overflow-x-hidden relative">
        <Toaster />
        <FloatingParticles />
        <ScrollProgress />
        <div className="fixed inset-0 -z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 3, delay: 0.5, ease: "easeOut" }}
            className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-400 to-orange-500 rounded-full blur-3xl"
          />
        </div>
        <Header />
        <ExamCategory categoryKey={hash} />
        <Footer />
      </div>
    );
  }

  if (currentPage === "exam-page") {
    const hash = window.location.hash.substring(1);
    const parts = hash.split("/");
    const category = parts[0];
    const examId = parts[1];

    return (
      <div className="min-h-screen bg-white overflow-x-hidden relative">
        <Toaster />
        <FloatingParticles />
        <ScrollProgress />
        <div className="fixed inset-0 -z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 3, delay: 0.5, ease: "easeOut" }}
            className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-400 to-orange-500 rounded-full blur-3xl"
          />
        </div>
        <Header />
        <ExamPage examId={examId} category={category} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      <BlogSEO />
      <Toaster />
      <AnimatePresence mode="wait">{isLoading && <LoadingScreen key="loading" />}</AnimatePresence>
      {showContent && (
        <>
          {/* Floating Background Particles */}
          <FloatingParticles />

          {/* Scroll Progress Indicator */}
          <ScrollProgress />

          {/* Background Gradients */}
          <div className="fixed inset-0 -z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{
                duration: 3,
                delay: 0.5,
                ease: "easeOut",
              }}
              className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-400 to-orange-500 rounded-full blur-3xl"
            />
          </div>
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10">
            {/* Header with entrance animation */}
            <motion.div variants={sectionVariants}>
              <Header />
            </motion.div>
            <main>
              {/* Hero Section */}
              <motion.div variants={sectionVariants}>
                <Hero />
              </motion.div>
              {/* Features Section */}
              <motion.div
                variants={sectionVariants}
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <Features />
              </motion.div>

              {/* AI Analytics Dashboard */}
              <motion.div
                variants={sectionVariants}
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <AIAnalyticsDashboard />
              </motion.div>
              {/* AI Quiz Generator */}
              <motion.div
                variants={sectionVariants}
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <AIQuizGenerator />
              </motion.div>
              {/* Test Categories */}
              <motion.div
                variants={sectionVariants}
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <TestCategories />
              </motion.div>
              {/* Success Stories */}
              <motion.div
                variants={sectionVariants}
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <SuccessStories />
              </motion.div>

              {/* Blog Newsletter Section */}
              <motion.div
                variants={sectionVariants}
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <BlogNewsletter />
              </motion.div>

              {/* Stay Connected */}
              <motion.div
                variants={sectionVariants}
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <StayConnected />
              </motion.div>
            </main>
            {/* Footer */}
            <motion.div variants={sectionVariants} whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <Footer />
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default App;
