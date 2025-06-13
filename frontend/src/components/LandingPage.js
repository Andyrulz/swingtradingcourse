import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, CheckCircle, Star, Clock, Users, TrendingUp, BookOpen, MessageCircle, X, Menu, Play, Award, DollarSign, ArrowRight, Shield, BarChart3, Target, Zap } from 'lucide-react';

function LandingPage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleStartLearning = () => {
    navigate('/course');
  };

  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Technical Analysis",
      description: "Master the art of reading charts, patterns, and indicators like the professionals"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Entry & Exit Points",
      description: "Learn Mark Minervini's SEPA strategy for optimal timing and maximum profits"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Management Mastery",
      description: "Protect your capital with proven position sizing and stop-loss techniques"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Stage Analysis Method",
      description: "Utilize Stan Weinstein's 4-stage lifecycle to identify the best opportunities"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Momentum Patterns",
      description: "Spot Dan Zanger's high-profit chart patterns before the crowd"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Portfolio Growth Strategies",
      description: "Build wealth systematically with proven compounding techniques"
    }
  ];

  const syllabus = [
    {
      module: "Module 1: Foundation Mastery",
      lessons: [
        "Market Structure & Psychology",
        "Understanding Price Action",
        "Volume Analysis Fundamentals",
        "Basic Chart Reading"
      ]
    },
    {
      module: "Module 2: Minervini's SEPA Strategy",
      lessons: [
        "Volatility Contraction Pattern (VCP)",
        "Specific Entry Point Analysis",
        "Fundamental Screening Criteria",
        "Risk Management Rules"
      ]
    },
    {
      module: "Module 3: Weinstein's Stage Analysis",
      lessons: [
        "4-Stage Stock Lifecycle",
        "Moving Average Analysis",
        "Sector Rotation Strategy",
        "Timing Market Phases"
      ]
    },
    {
      module: "Module 4: Zanger's Pattern Recognition",
      lessons: [
        "Cup & Handle Patterns",
        "Ascending Triangle Breakouts",
        "Flag & Pennant Formations",
        "Volume Confirmation Techniques"
      ]
    },
    {
      module: "Module 5: Advanced Strategies",
      lessons: [
        "Multi-timeframe Analysis",
        "Momentum Trading Techniques",
        "Swing Trading Psychology",
        "Portfolio Management"
      ]
    },
    {
      module: "Module 6: Real-World Application",
      lessons: [
        "Live Market Analysis",
        "Case Study Breakdowns",
        "Common Mistakes to Avoid",
        "Building Your Trading Plan"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Former Accountant",
      image: "https://images.pexels.com/photos/3889053/pexels-photo-3889053.jpeg",
      rating: 5,
      text: "This course transformed my understanding of the markets. I went from losing money to consistent profits in just 3 months!"
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      image: "https://images.pexels.com/photos/3889053/pexels-photo-3889053.jpeg",
      rating: 5,
      text: "The combination of Minervini, Weinstein, and Zanger methodologies is pure gold. My portfolio is up 180% this year."
    },
    {
      name: "David Rodriguez",
      role: "Retired Teacher",
      image: "https://images.pexels.com/photos/3889053/pexels-photo-3889053.jpeg",
      rating: 5,
      text: "Finally, a course that delivers real results. The step-by-step approach made complex concepts easy to understand."
    }
  ];

  const faqs = [
    {
      question: "Is this course suitable for complete beginners?",
      answer: "Absolutely! We start with the fundamentals and gradually build up to advanced strategies. Our step-by-step approach ensures even complete beginners can follow along and succeed."
    },
    {
      question: "How long do I have access to the course materials?",
      answer: "You get lifetime access to all course materials, including future updates. Once you enroll, the content is yours forever."
    },
    {
      question: "Do you provide live trading examples?",
      answer: "Yes! The course includes live market analysis sessions, real trade examples, and current market breakdowns to help you apply the concepts in real-time."
    },
    {
      question: "What if I'm not satisfied with the course?",
      answer: "We offer a 60-day money-back guarantee. If you're not completely satisfied, simply contact us for a full refund - no questions asked."
    },
    {
      question: "How much capital do I need to start swing trading?",
      answer: "You can start with as little as $1,000, though we recommend $5,000-$10,000 for optimal position sizing. The course teaches you how to grow your account systematically."
    },
    {
      question: "Is this day trading or swing trading?",
      answer: "This is specifically focused on swing trading - holding positions for days to weeks. Perfect for those with full-time jobs who can't monitor charts all day."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-lg border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              SwingMaster Pro
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#course" className="text-gray-300 hover:text-blue-400 transition-colors">Course</a>
              <a href="#syllabus" className="text-gray-300 hover:text-blue-400 transition-colors">Syllabus</a>
              <a href="#testimonials" className="text-gray-300 hover:text-blue-400 transition-colors">Reviews</a>
              <a href="#faq" className="text-gray-300 hover:text-blue-400 transition-colors">FAQ</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-800 border-t border-blue-500/20"
            >
              <div className="px-4 py-4 space-y-4">
                <a href="#course" className="block text-gray-300 hover:text-blue-400">Course</a>
                <a href="#syllabus" className="block text-gray-300 hover:text-blue-400">Syllabus</a>
                <a href="#testimonials" className="block text-gray-300 hover:text-blue-400">Reviews</a>
                <a href="#faq" className="block text-gray-300 hover:text-blue-400">FAQ</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/7663144/pexels-photo-7663144.jpeg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-slate-900/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Swing Trading</span>
              <br />Like the Legends
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Learn the proven strategies of Mark Minervini, Stan Weinstein, and Dan Zanger. 
              Transform from beginner to profitable trader in weeks, not years.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.button
                onClick={handleStartLearning}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-2xl transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Learning Now
              </motion.button>
              <motion.button
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                Watch Preview
              </motion.button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span>12,000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-400" />
                <span>Certified Program</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              🔥 Limited Time Offer - 70% OFF!
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Early Bird Special Ends Soon - Don't Miss Out!
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-white/10 backdrop-blur-lg rounded-lg p-4 min-w-[80px]">
                  <div className="text-3xl font-bold text-white">{value.toString().padStart(2, '0')}</div>
                  <div className="text-red-100 text-sm uppercase">{unit}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="text-gray-300 line-through text-2xl">$497</div>
              <div className="text-white text-4xl font-bold">$147</div>
              <div className="text-red-100">One-time payment • Lifetime access</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="course" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why SwingMaster Pro Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've distilled the best strategies from three legendary traders into one comprehensive course
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Preview Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get a Sneak Peek Inside
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                See exactly what you'll learn and how our proven methodology has helped thousands of traders achieve consistent profits.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400" />
                  <span className="text-gray-300">6 comprehensive modules with 50+ lessons</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400" />
                  <span className="text-gray-300">Live market analysis and real trade examples</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400" />
                  <span className="text-gray-300">Downloadable resources and cheat sheets</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400" />
                  <span className="text-gray-300">Lifetime access and free updates</span>
                </div>
              </div>

              <motion.button
                onClick={handleStartLearning}
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                Start Course Now
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1553639558-fb2e565066f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwc3VjY2Vzc3xlbnwwfHx8Ymx1ZXwxNzQ5ODM0Nzc4fDA&ixlib=rb-4.1.0&q=85"
                  alt="Course Preview"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-center justify-center">
                  <motion.button
                    className="bg-white/20 backdrop-blur-lg text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleStartLearning}
                  >
                    <Play className="w-8 h-8" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section id="syllabus" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complete Course Syllabus
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive curriculum combining the best strategies from three legendary traders
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {syllabus.map((module, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-blue-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  {module.module}
                </h3>
                <ul className="space-y-3">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <li key={lessonIndex} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-r from-slate-800/50 to-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300">
              See what our students are saying about their transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-blue-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-slate-900/50">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1639768939489-025b90ba9f23?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxmaW5hbmNpYWwlMjBjaGFydHN8ZW58MHx8fGJsdWV8MTc0OTgzNDc2N3ww&ixlib=rb-4.1.0&q=85')`,
          }}
        ></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Get answers to the most common questions about our course
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-blue-500/20 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-800/50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-6 h-6 text-blue-400 transform transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-6 text-gray-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.pexels.com/photos/7997398/pexels-photo-7997398.jpeg"
              alt="Financial Freedom"
              className="w-32 h-32 mx-auto mb-8 rounded-full object-cover shadow-2xl"
            />
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful traders who have mastered the markets using our proven strategies. 
              Your trading transformation starts today.
            </p>
            
            <div className="mb-8">
              <div className="text-blue-200 line-through text-2xl">$497</div>
              <div className="text-white text-5xl font-bold mb-2">$147</div>
              <div className="text-blue-100">✓ Lifetime Access ✓ 60-Day Guarantee ✓ Free Updates</div>
            </div>

            <motion.button
              onClick={handleStartLearning}
              className="bg-white text-blue-600 px-12 py-6 rounded-lg font-bold text-xl shadow-2xl hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll Now - Limited Time
              <ArrowRight className="w-6 h-6" />
            </motion.button>
            
            <p className="text-blue-200 text-sm mt-4">
              🔒 Secure checkout • 💳 All major cards accepted
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chatbot */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            className="fixed bottom-24 right-4 w-80 h-96 bg-slate-800 rounded-xl shadow-2xl border border-blue-500/20 overflow-hidden z-50"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 flex justify-between items-center">
              <h3 className="text-white font-semibold">Trading Assistant</h3>
              <button
                onClick={() => setChatOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 h-64 overflow-y-auto bg-slate-900">
              <div className="bg-blue-600 text-white p-3 rounded-lg mb-4 max-w-xs">
                Hi! I'm here to help answer any questions about the SwingMaster Pro course. What would you like to know?
              </div>
              <div className="bg-slate-700 text-gray-300 p-3 rounded-lg mb-4 max-w-xs ml-auto">
                What's included in the course?
              </div>
              <div className="bg-blue-600 text-white p-3 rounded-lg mb-4 max-w-xs">
                Great question! The course includes 6 comprehensive modules covering Mark Minervini's SEPA strategy, Stan Weinstein's Stage Analysis, and Dan Zanger's pattern recognition techniques. You'll get lifetime access, live market analysis, and downloadable resources.
              </div>
            </div>
            
            <div className="p-4 border-t border-slate-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  className="flex-1 bg-slate-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      <motion.button
        className="fixed bottom-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 z-40"
        onClick={() => setChatOpen(!chatOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0.7)", "0 0 0 10px rgba(59, 130, 246, 0)", "0 0 0 0 rgba(59, 130, 246, 0)"]
        }}
        transition={{ 
          boxShadow: { duration: 2, repeat: Infinity }
        }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </div>
  );
}

export default LandingPage;