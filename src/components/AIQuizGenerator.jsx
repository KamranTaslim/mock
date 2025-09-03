"use client"
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Slider } from "./ui/slider";
import { Progress } from "./ui/progress";
import { 
  Wand2, 
  Brain, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Target, 
  Sparkles, 
  RefreshCw,
  Lightbulb,
  TrendingUp
} from "lucide-react";

export function AIQuizGenerator() {
  const [selectedSubject, setSelectedSubject] = useState("mathematics");
  const [difficulty, setDifficulty] = useState([70]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [showExplanation, setShowExplanation] = useState(false);

  const subjects = [
    { value: "mathematics", label: "Mathematics", icon: "📐" },
    { value: "physics", label: "Physics", icon: "⚛️" },
    { value: "chemistry", label: "Chemistry", icon: "🧪" },
    { value: "biology", label: "Biology", icon: "🧬" },
    { value: "english", label: "English", icon: "📚" },
    { value: "programming", label: "Programming", icon: "💻" }
  ];

  const sampleQuestions = [
    {
      subject: "mathematics",
      question: "If f(x) = 2x³ - 3x² + 4, what is f'(2)?",
      options: ["16", "8", "12", "20"],
      correct: 1,
      explanation: "Using the power rule: f'(x) = 6x² - 6x. Substituting x = 2: f'(2) = 6(4) - 6(2) = 24 - 12 = 12.",
      difficulty: "Medium",
      topic: "Calculus - Derivatives"
    },
    {
      subject: "physics", 
      question: "A ball is thrown vertically upward with initial velocity 20 m/s. What is its maximum height?",
      options: ["10m", "20m", "15m", "25m"],
      correct: 1,
      explanation: "Using v² = u² + 2as, where v = 0 at max height: 0 = 20² - 2(10)h, so h = 400/20 = 20m.",
      difficulty: "Medium",
      topic: "Kinematics"
    },
    {
      subject: "chemistry",
      question: "What is the hybridization of carbon in methane (CH₄)?",
      options: ["sp", "sp²", "sp³", "sp³d"],
      correct: 2,
      explanation: "Carbon in methane has 4 bonding pairs and no lone pairs, requiring sp³ hybridization to form 4 equivalent bonds.",
      difficulty: "Easy",
      topic: "Chemical Bonding"
    }
  ];

  const handleGenerateQuiz = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsGenerating(false);
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

const handleAnswerSelect = (answerIndex) => {
  setSelectedAnswer(answerIndex.toString());
};


 const handleSubmitAnswer = () => {
  if (selectedAnswer !== null) {
    const correct = sampleQuestions[currentQuestion].correct;
    if (parseInt(selectedAnswer) === correct) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  }
};


  const handleNextQuestion = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // Quiz completed
      setQuizStarted(false);
    }
  };

  const getDifficultyLabel = ( number) => {
    if (number < 40) return "Easy";
    if (number < 70) return "Medium";
    return "Hard";
  };

  const getDifficultyColor = ( string) => {
    switch (string) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-violet-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-violet-100 to-cyan-100 text-violet-800 rounded-full mb-6">
            <Wand2 className="w-4 h-4 mr-2" />
            <span className="font-medium">AI-Powered Quiz Generation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Smart Quiz
            <span className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent"> Generator</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our AI that creates personalized quizzes based on your learning level, weak areas, and exam patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quiz Configuration */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 shadow-xl border-2 border-violet-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-violet-600" />
                  AI Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Subject Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject.value} value={subject.value}>
                          <span className="flex items-center">
                            <span className="mr-2">{subject.icon}</span>
                            {subject.label}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Difficulty Slider */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Difficulty Level: {getDifficultyLabel(difficulty[0])}
                  </label>
                  <Slider
                    value={difficulty}
                    onValueChange={setDifficulty}
                    max={100}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Easy</span>
                    <span>Hard</span>
                  </div>
                </div>

                {/* AI Features */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">AI Features</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Adaptive difficulty
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Personalized explanations
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Real exam patterns
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Progress tracking
                    </div>
                  </div>
                </div>

                {/* Generate Button */}
                <Button 
                  onClick={handleGenerateQuiz}
                  disabled={isGenerating || quizStarted}
                  className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate AI Quiz
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quiz Interface */}
          <div className="lg:col-span-2">
            {!quizStarted ? (
              <Card className="h-[416px] flex items-center justify-center shadow-xl border-2 border-gray-100">
                <CardContent className="text-center p-12">
                  <div className="w-24 h-24 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Wand2 className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Test Your Knowledge?
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Configure your preferences on the left and click "Generate AI Quiz" to create a personalized test experience.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-violet-600 mx-auto mb-2" />
                      <div className="font-medium">Adaptive Learning</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Target className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                      <div className="font-medium">Targeted Practice</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-xl border-2 border-violet-100">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-violet-600" />
                      Question {currentQuestion + 1} of {sampleQuestions.length}
                    </CardTitle>
                    <Badge className={getDifficultyColor(sampleQuestions[currentQuestion].difficulty)}>
                      {sampleQuestions[currentQuestion].difficulty}
                    </Badge>
                  </div>
                  <Progress value={(currentQuestion / sampleQuestions.length) * 100} className="h-2" />
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Question */}
                  <div>
                    <Badge variant="outline" className="mb-4">
                      {sampleQuestions[currentQuestion].topic}
                    </Badge>
                    <h3 className="text-lg font-medium text-gray-900 leading-relaxed">
                      {sampleQuestions[currentQuestion].question}
                    </h3>
                  </div>

                  {/* Options */}
                  <div className="space-y-3">
                    {sampleQuestions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showExplanation}
                        className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                          selectedAnswer === index.toString()
                            ? showExplanation
                              ? index === sampleQuestions[currentQuestion].correct
                                ? 'border-green-500 bg-green-50'
                                : 'border-red-500 bg-red-50'
                              : 'border-violet-500 bg-violet-50'
                            : showExplanation && index === sampleQuestions[currentQuestion].correct
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center mr-3 text-sm font-medium">
                            {String.fromCharCode(65 + index)}
                          </span>
                          {option}
                          {showExplanation && index === sampleQuestions[currentQuestion].correct && (
                            <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                          )}
                          {showExplanation && selectedAnswer === index.toString() && index !== sampleQuestions[currentQuestion].correct && (
                            <XCircle className="w-5 h-5 text-red-500 ml-auto" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Explanation */}
                  {showExplanation && (
                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="p-4">
                        <div className="flex items-start">
                          <Lightbulb className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-blue-900 mb-2">AI Explanation</h4>
                            <p className="text-blue-800 text-sm leading-relaxed">
                              {sampleQuestions[currentQuestion].explanation}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center pt-4">
                    <div className="text-sm text-gray-600">
                      Score: {score}/{currentQuestion + (showExplanation ? 1 : 0)}
                    </div>
                    <div className="space-x-3">
                      {!showExplanation && selectedAnswer !== null && (
                        <Button onClick={handleSubmitAnswer} className="bg-gradient-to-r from-violet-600 to-cyan-600">
                          Submit Answer
                        </Button>
                      )}
                      {showExplanation && (
                        <Button onClick={handleNextQuestion} className="bg-gradient-to-r from-violet-600 to-cyan-600">
                          {currentQuestion < sampleQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}