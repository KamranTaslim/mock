import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Users, BookOpen, Star, Clock } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { examCategories } from '.././components/data/examData';

export function ExamCategory({ categoryKey }) {
  const categoryData = examCategories[categoryKey];

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  const handleExamClick = (examId) => {
    window.location.hash = `${categoryKey}/${examId}`;
  };

  const handleBackToHome = () => {
    window.location.hash = '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header Section */}
      <section className="py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <nav className="flex items-center space-x-2 text-sm">
              <button
                onClick={handleBackToHome}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Home
              </button>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Exam Categories</span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-medium">{categoryData.name}</span>
            </nav>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-800 font-medium">{categoryData.tagline}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span
                className={`bg-gradient-to-r from-${categoryData.gradient.from} via-${categoryData.gradient.to} to-pink-600 bg-clip-text text-transparent`}
              >
                {categoryData.name} Exam
              </span>
              <br />
              <span className="text-gray-800">Preparation Hub</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{categoryData.description}</p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className={`text-3xl font-bold text-${categoryData.gradient.from}`}>{categoryData.totalTests}+</div>
                <div className="text-gray-600">Total Tests</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold text-${categoryData.gradient.to}`}>{categoryData.activeUsers}</div>
                <div className="text-gray-600">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">{categoryData.successRate}</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Exams Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {categoryData.exams.map((exam, index) => (
              <motion.div
                key={exam.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -8 }}
                className="cursor-pointer"
                onClick={() => handleExamClick(exam.id)}
              >
                <Card className="group overflow-hidden h-full transition-all duration-300 hover:shadow-xl border-2 hover:border-blue-200">
                  {/* Image Header */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={exam.image}
                      alt={exam.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* Overlay Content */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <Badge
                        className={`${
                          exam.difficulty === 'Hard'
                            ? 'bg-red-500'
                            : exam.difficulty === 'Medium'
                            ? 'bg-orange-500'
                            : 'bg-green-500'
                        } text-white`}
                      >
                        {exam.difficulty}
                      </Badge>
                      {exam.upcoming && (
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                          <Clock className="w-3 h-3 mr-1" />
                          Upcoming
                        </Badge>
                      )}
                    </div>

                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white mb-1">{exam.name}</h3>
                      <p className="text-gray-200 text-sm">{exam.fullName}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-2">{exam.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exam.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-800 mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                        {exam.features.slice(0, 4).map((feature) => (
                          <div key={feature} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1" />
                        {exam.totalTests} Tests
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {exam.activeUsers} Students
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button
                      className={`w-full bg-gradient-to-r from-${categoryData.gradient.from} to-${categoryData.gradient.to} hover:from-${categoryData.gradient.from} hover:to-${categoryData.gradient.to} text-white group`}
                    >
                      Start Preparation
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
