import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Trophy, Users, Share2, Copy, CheckCircle, Play, 
  Clock, Target, Star, Crown, Zap, ArrowRight, 
  MessageCircle, Send, Sparkles, TrendingUp
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from "sonner";


export function ChallengeFriendsModal({ isOpen, onClose, category = "Banking" }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [playerName, setPlayerName] = useState('');
  const [selectedTest, setSelectedTest] = useState('');
  const [challengeUrl, setChallengeUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [mockScore, setMockScore] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const steps = [
    {
      id: 'setup',
      title: 'Setup Challenge',
      description: 'Enter your details and select a test',
      icon: Target,
      completed: currentStep > 1
    },
    {
      id: 'take-test',
      title: 'Take Mock Test',
      description: 'Complete the test to set your challenge score',
      icon: Play,
      completed: currentStep > 2
    },
    {
      id: 'share',
      title: 'Share with Friends',
      description: 'Send challenge link via WhatsApp or Telegram',
      icon: Share2,
      completed: currentStep > 3
    }
  ];

  const availableTests = [
    { id: 'sbi-po-1', name: 'SBI PO Prelims Mock Test 1', duration: 60, questions: 100, difficulty: 'Hard' },
    { id: 'ibps-clerk-1', name: 'IBPS Clerk Prelims Mock Test 1', duration: 60, questions: 100, difficulty: 'Medium' },
    { id: 'rbi-grade-b', name: 'RBI Grade B Mock Test 1', duration: 120, questions: 150, difficulty: 'Hard' },
    { id: 'sbi-clerk-1', name: 'SBI Clerk Prelims Mock Test 1', duration: 60, questions: 100, difficulty: 'Medium' }
  ];

  const handleStartTest = async () => {
    if (!selectedTest || !playerName.trim()) {
      toast.error('Please fill all required fields');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      const score = Math.floor(Math.random() * 20) + 80; 
      setMockScore(score);
      setCurrentStep(3);
      const challengeId = `ch_${Math.random().toString(36).substr(2, 9)}`;
      const url = `https://mockcenter.in/challenge/${challengeId}`;
      setChallengeUrl(url);
      setIsLoading(false);
      toast.success(`Great! You scored ${score}/100. Challenge created!`);
    }, 3000);
    setCurrentStep(2);
  };

  const shareChallenge = (platform) => {
    const selectedTestData = availableTests.find(test => test.id === selectedTest);
    const message = `🏆 CHALLENGE ALERT! 🏆\n\n${playerName} just scored ${mockScore}/100 in ${selectedTestData?.name}!\n\nThink you can beat this score? 💪\n\nAccept the challenge: ${challengeUrl}\n\n🎯 Test: ${selectedTestData?.name}\n⏱️ Duration: ${selectedTestData?.duration} minutes\n📝 Questions: ${selectedTestData?.questions}\n\n#MockCenterChallenge #${category}Exam`;
    let shareUrl = "";
    if (platform === "whatsapp") {
      shareUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    } else if (platform === "telegram") {
      shareUrl = `https://t.me/share/url?url=${encodeURIComponent(challengeUrl)}&text=${encodeURIComponent(message)}`;
    }
    window.open(shareUrl, '_blank');
    toast.success(`Challenge shared via ${platform}!`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(challengeUrl);
    setCopied(true);
    toast.success("Challenge URL copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const resetChallenge = () => {
    setCurrentStep(1);
    setPlayerName('');
    setSelectedTest('');
    setChallengeUrl('');
    setMockScore(null);
    setCopied(false);
  };

  const StepIndicator = ({ step, isActive, isCompleted }) => (
    <div className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
      isActive ? 'bg-blue-50 border-2 border-blue-200' : 
      isCompleted ? 'bg-green-50 border-2 border-green-200' : 
      'bg-gray-50 border-2 border-gray-200'
    }`}>
      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
        isCompleted ? 'bg-green-500 text-white' :
        isActive ? 'bg-blue-500 text-white' : 
        'bg-gray-300 text-gray-600'
      }`}>
        {isCompleted ? <CheckCircle className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
      </div>
      <div className="flex-1">
        <h4 className={`font-medium ${isActive ? 'text-blue-700' : isCompleted ? 'text-green-700' : 'text-gray-600'}`}>
          {step.title}
        </h4>
        <p className={`text-sm ${isActive ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-gray-500'}`}>
          {step.description}
        </p>
      </div>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-6 text-white">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-yellow-300" />
                </div>
                <div>
                  <DialogTitle className="text-2xl font-bold">Challenge Friends</DialogTitle>
                  <DialogDescription className="text-blue-100">
                    Create competitive challenges and see who's the best!
                  </DialogDescription>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-white hover:bg-white/20 rounded-full w-8 h-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </DialogHeader>
        </div>

        <div className="p-6">
          <div className="mb-8">
            <div className="space-y-3">
              {steps.map((step, index) => (
                <StepIndicator
                  key={step.id}
                  step={step}
                  isActive={currentStep === index + 1}
                  isCompleted={step.completed}
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50">
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Sparkles className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-800">Setup Your Challenge</h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="playerName" className="text-sm font-medium text-gray-700">
                          Your Name *
                        </Label>
                        <Input
                          id="playerName"
                          placeholder="Enter your name"
                          value={playerName}
                          onChange={(e) => setPlayerName(e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-3 block">
                          Select Test *
                        </Label>
                        <div className="grid gap-3">
                          {availableTests.map((test) => (
                            <div
                              key={test.id}
                              onClick={() => setSelectedTest(test.id)}
                              className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                                selectedTest === test.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300 hover:bg-blue-25'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="font-medium text-gray-800">{test.name}</h4>
                                  <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                                    <span className="flex items-center">
                                      <Clock className="w-3 h-3 mr-1" />
                                      {test.duration} min
                                    </span>
                                    <span className="flex items-center">
                                      <Target className="w-3 h-3 mr-1" />
                                      {test.questions} questions
                                    </span>
                                  </div>
                                </div>
                                <Badge className={`${
                                  test.difficulty === 'Hard' ? 'bg-red-100 text-red-800' :
                                  test.difficulty === 'Medium' ? 'bg-orange-100 text-orange-800' :
                                  'bg-green-100 text-green-800'
                                }`}>
                                  {test.difficulty}
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={handleStartTest}
                      disabled={!playerName.trim() || !selectedTest}
                      className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
                    >
                      Continue to Test
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            )}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50">
                  <div className="p-8 text-center">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <Play className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Test in Progress...
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {playerName} is taking the {availableTests.find(t => t.id === selectedTest)?.name}
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-orange-200 mb-6">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <Clock className="w-5 h-5 text-orange-600 mx-auto mb-1" />
                          <div className="text-sm text-gray-600">Duration</div>
                          <div className="font-medium">{availableTests.find(t => t.id === selectedTest)?.duration} min</div>
                        </div>
                        <div>
                          <Target className="w-5 h-5 text-orange-600 mx-auto mb-1" />
                          <div className="text-sm text-gray-600">Questions</div>
                          <div className="font-medium">{availableTests.find(t => t.id === selectedTest)?.questions}</div>
                        </div>
                        <div>
                          <TrendingUp className="w-5 h-5 text-orange-600 mx-auto mb-1" />
                          <div className="text-sm text-gray-600">Difficulty</div>
                          <div className="font-medium">{availableTests.find(t => t.id === selectedTest)?.difficulty}</div>
                        </div>
                      </div>
                    </div>
                    {isLoading && (
                      <div className="space-y-3">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 3 }}
                          />
                        </div>
                        <p className="text-sm text-gray-600">Calculating your score...</p>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            )}
            {currentStep === 3 && mockScore !== null && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-blue-50">
                  <div className="p-6 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, type: "spring" }}
                      className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <Trophy className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Excellent Score, {playerName}! 🎉
                    </h3>
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {mockScore}/100
                    </div>
                    <p className="text-gray-600 mb-4">
                      You scored {mockScore}% in {availableTests.find(t => t.id === selectedTest)?.name}
                    </p>
                    <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                      Challenge Ready!
                    </Badge>
                  </div>
                </Card>
                <Card className="border-2 border-purple-200">
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Share2 className="w-6 h-6 text-purple-600" />
                      <h3 className="text-xl font-bold text-gray-800">Share Your Challenge</h3>
                    </div>
                    <div className="space-y-3 mb-6">
                      <Label className="text-sm font-medium text-gray-700">Challenge Link</Label>
                      <div className="flex space-x-2">
                        <Input
                          value={challengeUrl}
                          readOnly
                          className="flex-1 bg-gray-50"
                        />
                        <Button
                          onClick={copyToClipboard}
                          className={`px-4 ${copied ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'}`}
                        >
                          {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      <Button
                        onClick={() => shareChallenge('whatsapp')}
                        className="bg-green-600 hover:bg-green-700 text-white p-4 h-auto"
                      >
                        <div className="flex items-center space-x-3">
                          <MessageCircle className="w-5 h-5" />
                          <div className="text-left">
                            <div className="font-medium">Share on WhatsApp</div>
                            <div className="text-xs text-green-100">Send to friends & groups</div>
                          </div>
                        </div>
                      </Button>
                      <Button
                        onClick={() => shareChallenge('telegram')}
                        className="bg-blue-600 hover:bg-blue-700 text-white p-4 h-auto"
                      >
                        <div className="flex items-center space-x-3">
                          <Send className="w-5 h-5" />
                          <div className="text-left">
                            <div className="font-medium">Share on Telegram</div>
                            <div className="text-xs text-blue-100">Send to contacts & channels</div>
                          </div>
                        </div>
                      </Button>
                    </div>
                    <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200">
                      <div className="p-4">
                        <h4 className="font-medium text-gray-800 mb-2">Challenge Preview:</h4>
                        <div className="text-sm text-gray-700 bg-white p-3 rounded border">
                          🏆 <strong>CHALLENGE ALERT!</strong> 🏆<br/><br/>
                          {playerName} just scored {mockScore}/100 in {availableTests.find(t => t.id === selectedTest)?.name}!<br/><br/>
                          Think you can beat this score? 💪<br/><br/>
                          #MockCenterChallenge #{category}Exam
                        </div>
                      </div>
                    </Card>
                  </div>
                </Card>
                <div className="flex space-x-3">
                  <Button
                    onClick={resetChallenge}
                    variant="outline"
                    className="flex-1"
                  >
                    Create New Challenge
                  </Button>
                  <Button
                    onClick={onClose}
                    className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                  >
                    Done
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">2,547</div>
                <div className="text-sm text-gray-600">Active Challenges</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">18,392</div>
                <div className="text-sm text-gray-600">Total Battles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-600">89%</div>
                <div className="text-sm text-gray-600">Participation Rate</div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
