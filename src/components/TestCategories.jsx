"use client"
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, GraduationCap, Train, MapPin, BookOpen, Shield, Users, Trophy } from "lucide-react";
import { useState } from "react";
import { ChallengeFriendsModal } from "./ChallengeFriendsModal";

export function TestCategories() {
  const categories = [
    {
      icon: Building2,
      title: "Banking",
      description: "SBI PO, IBPS Clerk, RBI Grade B and other banking exams",
      tests: 450,
      students: "25K+",
      color: "from-blue-500 to-blue-600",
      popular: true,
      slug: "banking"
    },
    {
      icon: GraduationCap,
      title: "SSC",
      description: "SSC CGL, CHSL, MTS, JE and other staff selection commission exams",
      tests: 380,
      students: "30K+",
      color: "from-green-500 to-green-600",
      popular: true,
      slug: "ssc"
    },
    {
      icon: Train,
      title: "Railway",
      description: "RRB NTPC, Group D, JE, ALP and other railway recruitment exams",
      tests: 320,
      students: "20K+",
      color: "from-purple-500 to-purple-600",
      popular: false,
      slug: "railway"
    },
    {
      icon: MapPin,
      title: "State",
      description: "State PSC, Police, Teacher, Clerk and other state government exams",
      tests: 280,
      students: "18K+",
      color: "from-orange-500 to-orange-600",
      popular: false,
      slug: "state"
    },
    {
      icon: BookOpen,
      title: "Teaching",
      description: "CTET, TET, KVS, NVS and other teaching recruitment exams",
      tests: 220,
      students: "15K+",
      color: "from-pink-500 to-pink-600",
      popular: false,
      slug: "teaching"
    },
    {
      icon: Shield,
      title: "Defence",
      description: "NDA, CDS, AFCAT, Navy and other defence services exams",
      tests: 180,
      students: "12K+",
      color: "from-red-500 to-red-600",
      popular: true,
      slug: "defence"
    }
  ];

  const [showChallenge, setShowChallenge] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <section id="tests" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Exam
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Categories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive collection of mock tests designed for various competitive exams
          </p>
        </div>
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  {category.popular && (
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-none">
                      Popular
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Stats */}
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <div className="font-bold text-gray-900">{category.tests}</div>
                      <div className="text-sm text-gray-500">Mock Tests</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900">{category.students}</div>
                      <div className="text-sm text-gray-500">Students</div>
                    </div>
                    <div className="text-center">
                      <Trophy className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
                      <div className="text-xs text-gray-500">Free</div>
                    </div>
                  </div>
                  {/* CTA Buttons */}
                  <div className="space-y-2">
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group-hover:shadow-lg transition-all"
                      onClick={() => { window.location.hash = category.slug; }}
                    >
                      Start Mock Test
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-blue-300 text-blue-600 hover:bg-blue-50"
                      onClick={() => {
                        setSelectedCategory("General");
                        setShowChallenge(true);
                      }}
                    >
                      Challenge Friends
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Challenge Feature Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 rounded-full p-4">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Challenge Your Friends!
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Think you're the best? Challenge your friends to a mock test battle and see who scores higher!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-2xl font-bold mb-2">1.</div>
                <div className="text-sm">Take a mock test and score high</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-2xl font-bold mb-2">2.</div>
                <div className="text-sm">Share challenge link via WhatsApp/Telegram</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-2xl font-bold mb-2">3.</div>
                <div className="text-sm">Compare scores and crown the winner!</div>
              </div>
            </div>
            <Button 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium"
              onClick={() => setShowChallenge(true)}
            >
              Start Challenge Now
            </Button>
          </div>
        </div>
        {/* Mock Questions Feature */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            10,000+ Mock Questions Available
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Practice with our extensive question bank covering all major competitive exams with detailed explanations and solutions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">2500+</div>
              <div className="text-sm text-gray-600">Banking Questions</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">3000+</div>
              <div className="text-sm text-gray-600">SSC Questions</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-600">2000+</div>
              <div className="text-sm text-gray-600">Railway Questions</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-orange-600">2500+</div>
              <div className="text-sm text-gray-600">Other Exams</div>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Explore All Questions
          </Button>
        </div>
      </div>
      {/* Challenge Friends Modal */}
      <ChallengeFriendsModal 
        isOpen={showChallenge}
        onClose={() => setShowChallenge(false)}
        category={selectedCategory}
      />
    </section>
  );
}
