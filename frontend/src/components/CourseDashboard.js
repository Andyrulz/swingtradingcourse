import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Play, CheckCircle, Lock, BarChart3, Clock, User, Award, BookOpen, TrendingUp, Target, Home } from 'lucide-react';

const courseModules = [
  {
    id: 1,
    title: "Foundation Mastery",
    description: "Essential trading fundamentals and market psychology",
    duration: "3 hours",
    lessons: 8,
    progress: 100,
    unlocked: true,
    lessons_detail: [
      { id: 1, title: "Market Structure & Psychology", duration: "25 min", completed: true },
      { id: 2, title: "Understanding Price Action", duration: "30 min", completed: true },
      { id: 3, title: "Volume Analysis Fundamentals", duration: "22 min", completed: true },
      { id: 4, title: "Basic Chart Reading", duration: "28 min", completed: true },
      { id: 5, title: "Support and Resistance", duration: "20 min", completed: true },
      { id: 6, title: "Trend Analysis Basics", duration: "25 min", completed: true },
      { id: 7, title: "Market Phases", duration: "18 min", completed: true },
      { id: 8, title: "Trading Psychology Foundation", duration: "32 min", completed: true }
    ]
  },
  {
    id: 2,
    title: "Minervini's SEPA Strategy",
    description: "Master Mark Minervini's proven momentum methodology",
    duration: "4 hours",
    lessons: 10,
    progress: 60,
    unlocked: true,
    lessons_detail: [
      { id: 1, title: "Introduction to SEPA", duration: "20 min", completed: true },
      { id: 2, title: "Volatility Contraction Pattern (VCP)", duration: "35 min", completed: true },
      { id: 3, title: "Specific Entry Point Analysis", duration: "40 min", completed: true },
      { id: 4, title: "Fundamental Screening Criteria", duration: "30 min", completed: true },
      { id: 5, title: "Risk Management Rules", duration: "25 min", completed: true },
      { id: 6, title: "Position Sizing Strategies", duration: "28 min", completed: true },
      { id: 7, title: "Advanced VCP Patterns", duration: "32 min", completed: false },
      { id: 8, title: "Market Leaders vs Laggards", duration: "26 min", completed: false },
      { id: 9, title: "Timing the Market", duration: "22 min", completed: false },
      { id: 10, title: "SEPA Case Studies", duration: "42 min", completed: false }
    ]
  },
  {
    id: 3,
    title: "Weinstein's Stage Analysis",
    description: "Learn the 4-stage lifecycle methodology",
    duration: "3.5 hours",
    lessons: 9,
    progress: 30,
    unlocked: true,
    lessons_detail: [
      { id: 1, title: "Introduction to Stage Analysis", duration: "22 min", completed: true },
      { id: 2, title: "Stage 1: Accumulation Phase", duration: "28 min", completed: true },
      { id: 3, title: "Stage 2: Advancing Phase", duration: "35 min", completed: true },
      { id: 4, title: "Stage 3: Distribution Phase", duration: "30 min", completed: false },
      { id: 5, title: "Stage 4: Declining Phase", duration: "25 min", completed: false },
      { id: 6, title: "Moving Average Analysis", duration: "32 min", completed: false },
      { id: 7, title: "Sector Rotation Strategy", duration: "28 min", completed: false },
      { id: 8, title: "Timing Market Phases", duration: "26 min", completed: false },
      { id: 9, title: "Stage Analysis Case Studies", duration: "40 min", completed: false }
    ]
  },
  {
    id: 4,
    title: "Zanger's Pattern Recognition",
    description: "Master high-profit chart patterns and breakouts",
    duration: "4.5 hours",
    lessons: 12,
    progress: 0,
    unlocked: false,
    lessons_detail: [
      { id: 1, title: "Introduction to Chart Patterns", duration: "20 min", completed: false },
      { id: 2, title: "Cup & Handle Patterns", duration: "35 min", completed: false },
      { id: 3, title: "Ascending Triangle Breakouts", duration: "30 min", completed: false },
      { id: 4, title: "Flag & Pennant Formations", duration: "28 min", completed: false },
      { id: 5, title: "Volume Confirmation Techniques", duration: "32 min", completed: false },
      { id: 6, title: "Double Bottom Patterns", duration: "25 min", completed: false },
      { id: 7, title: "Breakout Trading Rules", duration: "38 min", completed: false },
      { id: 8, title: "False Breakout Recognition", duration: "22 min", completed: false },
      { id: 9, title: "High-Tight Flag Patterns", duration: "30 min", completed: false },
      { id: 10, title: "Momentum Analysis", duration: "26 min", completed: false },
      { id: 11, title: "Pattern Psychology", duration: "24 min", completed: false },
      { id: 12, title: "Live Pattern Examples", duration: "45 min", completed: false }
    ]
  },
  {
    id: 5,
    title: "Advanced Strategies",
    description: "Multi-timeframe analysis and portfolio management",
    duration: "5 hours",
    lessons: 11,
    progress: 0,
    unlocked: false,
    lessons_detail: [
      { id: 1, title: "Multi-timeframe Analysis", duration: "40 min", completed: false },
      { id: 2, title: "Momentum Trading Techniques", duration: "35 min", completed: false },
      { id: 3, title: "Swing Trading Psychology", duration: "30 min", completed: false },
      { id: 4, title: "Portfolio Management", duration: "45 min", completed: false },
      { id: 5, title: "Risk-Reward Optimization", duration: "28 min", completed: false },
      { id: 6, title: "Market Correlation Analysis", duration: "32 min", completed: false },
      { id: 7, title: "Economic Calendar Trading", duration: "25 min", completed: false },
      { id: 8, title: "Sector Strength Analysis", duration: "38 min", completed: false },
      { id: 9, title: "Advanced Stop Strategies", duration: "22 min", completed: false },
      { id: 10, title: "Position Management", duration: "30 min", completed: false },
      { id: 11, title: "Professional Trading Setup", duration: "35 min", completed: false }
    ]
  },
  {
    id: 6,
    title: "Real-World Application",
    description: "Live analysis and building your trading plan",
    duration: "6 hours",
    lessons: 15,
    progress: 0,
    unlocked: false,
    lessons_detail: [
      { id: 1, title: "Building Your Trading Plan", duration: "45 min", completed: false },
      { id: 2, title: "Live Market Analysis #1", duration: "30 min", completed: false },
      { id: 3, title: "Case Study: Growth Stock Breakout", duration: "35 min", completed: false },
      { id: 4, title: "Case Study: VCP Pattern Success", duration: "32 min", completed: false },
      { id: 5, title: "Case Study: Stage 2 Entry", duration: "28 min", completed: false },
      { id: 6, title: "Common Mistakes to Avoid", duration: "40 min", completed: false },
      { id: 7, title: "Live Market Analysis #2", duration: "30 min", completed: false },
      { id: 8, title: "Portfolio Review Session", duration: "25 min", completed: false },
      { id: 9, title: "Risk Management in Action", duration: "35 min", completed: false },
      { id: 10, title: "Market Cycles Analysis", duration: "30 min", completed: false },
      { id: 11, title: "Live Q&A Session #1", duration: "45 min", completed: false },
      { id: 12, title: "Advanced Pattern Analysis", duration: "38 min", completed: false },
      { id: 13, title: "Trading Journal Setup", duration: "22 min", completed: false },
      { id: 14, title: "Live Q&A Session #2", duration: "40 min", completed: false },
      { id: 15, title: "Course Completion & Next Steps", duration: "25 min", completed: false }
    ]
  }
];

function CourseDashboard() {
  const navigate = useNavigate();
  const [selectedModule, setSelectedModule] = useState(null);
  const [userStats, setUserStats] = useState({
    totalLessons: 65,
    completedLessons: 29,
    totalHours: 26,
    completedHours: 12.5,
    streak: 7,
    certificatesEarned: 1
  });

  const handleLessonClick = (moduleId, lessonId, isCompleted, isUnlocked) => {
    if (isUnlocked) {
      navigate(`/lesson/${moduleId}/${lessonId}`);
    }
  };

  const handleBackToLanding = () => {
    navigate('/');
  };

  const calculateOverallProgress = () => {
    const totalLessons = courseModules.reduce((acc, module) => acc + module.lessons, 0);
    const completedLessons = courseModules.reduce((acc, module) => {
      return acc + module.lessons_detail.filter(lesson => lesson.completed).length;
    }, 0);
    return Math.round((completedLessons / totalLessons) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-lg border-b border-blue-500/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={handleBackToLanding}
                className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <Home className="w-5 h-5" />
                <span className="hidden sm:inline">Home</span>
              </button>
              <div className="text-2xl font-bold text-white">SwingMaster Pro</div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  <span>{userStats.completedLessons}/{userStats.totalLessons} Lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>{userStats.completedHours}h/{userStats.totalHours}h</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-yellow-400" />
                  <span>{userStats.streak} day streak</span>
                </div>
              </div>
              
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome Back, Trader! 🚀
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Continue your journey to trading mastery. You're making great progress!
          </p>
        </motion.div>

        {/* Progress Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-slate-800/50 to-blue-900/30 rounded-2xl p-6 mb-8 border border-blue-500/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Your Progress</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">{calculateOverallProgress()}%</div>
              <div className="text-gray-300 text-sm">Course Complete</div>
              <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${calculateOverallProgress()}%` }}
                ></div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">{userStats.completedLessons}</div>
              <div className="text-gray-300 text-sm">Lessons Completed</div>
              <div className="text-gray-500 text-xs mt-1">of {userStats.totalLessons} total</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">{userStats.streak}</div>
              <div className="text-gray-300 text-sm">Day Streak</div>
              <div className="text-gray-500 text-xs mt-1">Keep it up!</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">{userStats.certificatesEarned}</div>
              <div className="text-gray-300 text-sm">Certificates</div>
              <div className="text-gray-500 text-xs mt-1">Earned</div>
            </div>
          </div>
        </motion.div>

        {/* Course Modules */}
        <div className="grid lg:grid-cols-2 gap-8">
          {courseModules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.02] ${
                module.unlocked 
                  ? 'border-blue-500/20 hover:border-blue-400/40 cursor-pointer' 
                  : 'border-gray-600/20 opacity-60'
              }`}
              onClick={() => module.unlocked && setSelectedModule(selectedModule === module.id ? null : module.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    module.unlocked ? 'bg-blue-600' : 'bg-gray-600'
                  }`}>
                    {module.unlocked ? (
                      <BarChart3 className="w-6 h-6 text-white" />
                    ) : (
                      <Lock className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{module.title}</h3>
                    <p className="text-gray-400 text-sm">{module.description}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm text-gray-400 mb-1">{module.duration}</div>
                  <div className="text-sm text-gray-500">{module.lessons} lessons</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300">Progress</span>
                  <span className="text-gray-300">{module.progress}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      module.progress === 100 
                        ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' 
                        : 'bg-gradient-to-r from-blue-500 to-blue-600'
                    }`}
                    style={{ width: `${module.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Expanded Lessons */}
              {selectedModule === module.id && module.unlocked && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-slate-700 pt-4 mt-4"
                >
                  <h4 className="text-lg font-semibold text-white mb-3">Lessons</h4>
                  <div className="space-y-2">
                    {module.lessons_detail.map((lesson, lessonIndex) => (
                      <div
                        key={lesson.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLessonClick(module.id, lesson.id, lesson.completed, module.unlocked);
                        }}
                        className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                          lesson.completed 
                            ? 'bg-emerald-900/30 border border-emerald-500/20 hover:bg-emerald-900/40' 
                            : module.unlocked 
                              ? 'bg-slate-700/50 hover:bg-slate-700/70 cursor-pointer' 
                              : 'bg-gray-800/30 opacity-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {lesson.completed ? (
                            <CheckCircle className="w-5 h-5 text-emerald-400" />
                          ) : module.unlocked ? (
                            <Play className="w-5 h-5 text-blue-400" />
                          ) : (
                            <Lock className="w-5 h-5 text-gray-500" />
                          )}
                          <span className={`font-medium ${
                            lesson.completed ? 'text-emerald-300' : 'text-white'
                          }`}>
                            {lesson.title}
                          </span>
                        </div>
                        <span className="text-gray-400 text-sm">{lesson.duration}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {!module.unlocked && (
                <div className="text-center py-4">
                  <Lock className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">Complete previous modules to unlock</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Achievement Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-6 border border-purple-500/20"
        >
          <div className="flex items-center gap-4 mb-4">
            <Award className="w-8 h-8 text-yellow-400" />
            <h2 className="text-2xl font-bold text-white">Achievements</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-800/50 p-4 rounded-lg border border-emerald-500/20">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
                <span className="font-semibold text-emerald-300">Foundation Master</span>
              </div>
              <p className="text-gray-400 text-sm">Complete Module 1: Foundation Mastery</p>
            </div>
            
            <div className="bg-slate-800/30 p-4 rounded-lg border border-gray-600/20 opacity-60">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-6 h-6 text-gray-500" />
                <span className="font-semibold text-gray-500">SEPA Expert</span>
              </div>
              <p className="text-gray-500 text-sm">Complete Module 2: Minervini's SEPA Strategy</p>
            </div>
            
            <div className="bg-slate-800/30 p-4 rounded-lg border border-gray-600/20 opacity-60">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-6 h-6 text-gray-500" />
                <span className="font-semibold text-gray-500">Stage Analyst</span>
              </div>
              <p className="text-gray-500 text-sm">Complete Module 3: Weinstein's Stage Analysis</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CourseDashboard;