import { Button } from 'antd';
import { PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { STUDENT_ACHIEVEMENTS } from './achievements';
import CETCrashCoursePopup from './CETCrashCoursePopup';

export default function Hero({ onApplyClick }) {
  const navigate = useNavigate();

  // View states: 'logo', 'course', 'student'
  const [currentView, setCurrentView] = useState('logo');
  const [studentIndex, setStudentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  const COURSE_FEATURES = [
    { icon: '📚', text: 'Complete CET Syllabus Revision' },
    { icon: '⚡', text: 'Speed & Accuracy Training' },
    { icon: '📝', text: 'Full-Length Mock Tests' },
    { icon: '🎯', text: 'PYQ + Expected Questions' },
  ];

  const handleAdmissionInfo = () => {
    navigate('/contact');
  };

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  useEffect(() => {
    // Initial delay before starting the cycle
    const timer = setTimeout(() => {
      startInterval();
    }, 3000);

    return () => {
      clearTimeout(timer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []); // Only run on mount

  // Reset interval on user interaction
  const resetInterval = () => {
    startInterval();
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentView(prev => {
        if (prev === 'logo') return 'course';
        if (prev === 'course') return 'student';
        if (prev === 'student') {
          // Move to next student for the next cycle
          setStudentIndex(current => (current + 1) % STUDENT_ACHIEVEMENTS.length);
          return 'logo';
        }
        return 'logo';
      });
      setIsTransitioning(false);
    }, 300);

    resetInterval();
  };

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentView(prev => {
        if (prev === 'logo') {
          // Going back from logo means going to student view (previous student)
          setStudentIndex(current => (current - 1 + STUDENT_ACHIEVEMENTS.length) % STUDENT_ACHIEVEMENTS.length);
          return 'student';
        }
        if (prev === 'course') return 'logo';
        if (prev === 'student') return 'course';
        return 'logo';
      });
      setIsTransitioning(false);
    }, 300);

    resetInterval();
  };

  const currentStudent = STUDENT_ACHIEVEMENTS[studentIndex];

  return (
    <div className="bg-gradient-to-br from-primary to-blue-700 rounded-xl shadow-lg p-8 text-white relative overflow-hidden flex-1">
      {/* CET Crash Course Popup - Always Visible as overlay */}
      <CETCrashCoursePopup />

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/20 rounded-full translate-y-12 -translate-x-12"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70 z-10"></div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full border border-white/30 transition-all duration-300 hover:scale-110"
        aria-label="Previous"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full border border-white/30 transition-all duration-300 hover:scale-110"
        aria-label="Next"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="relative z-20 w-full flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-5xl mx-auto px-2 sm:px-4 md:px-6 py-16 gap-6 md:gap-10 overflow-x-hidden">

          {/* Text Content Area */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <AnimatePresence mode="wait">
              {currentView === 'logo' && (
                <motion.div
                  key="logo-text"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                    MODULUS SCIENCE ACADEMY
                  </h1>
                  <p className="text-xl md:text-2xl text-yellow-400 font-medium mb-6">
                    "By The Students, For The Students"
                  </p>
                  <div className="text-white text-lg mb-8 max-w-lg mx-auto md:mx-0">
                    Empowering students to excel in science subjects with expert mentors and proven teaching methodologies.
                  </div>
                </motion.div>
              )}

              {currentView === 'course' && (
                <motion.div
                  key="course-text"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <span className="text-3xl">🚀</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">CET CRASH COURSE</h2>
                  </div>
                  <div className="inline-block bg-accent text-primary font-bold px-4 py-1 rounded-full mb-6">
                    Starts: 23rd February 2026
                  </div>

                  <div className="grid grid-cols-1 gap-3 mb-8 text-left max-w-md mx-auto md:mx-0">
                    {COURSE_FEATURES.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="text-xl">{feature.icon}</span>
                        <span className="text-white text-lg">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentView === 'student' && (
                <motion.div
                  key={`student-text-${studentIndex}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Star Pupil
                  </h2>
                  <div className="text-xl text-yellow-400 font-medium mb-6">
                    Join our Hall of Fame
                  </div>

                  <div className="space-y-4 mb-8">
                    <div>
                      <div className="text-3xl font-bold text-yellow-400">
                        🎓 {currentStudent.name}
                      </div>
                    </div>
                    <div>
                      <div className="text-xl text-white opacity-90">
                        📘 {currentStudent.exam}
                      </div>
                      <div className="text-2xl font-bold text-white mt-1">
                        🏆 Score: {currentStudent.score}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Static Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-2">
              <Button
                type="primary"
                size="large"
                className="!rounded-button whitespace-nowrap cursor-pointer hover:!scale-105 transition-transform"
                style={{ backgroundColor: '#FFD700', borderColor: '#FFD700', color: '#004AAD', fontWeight: 'bold' }}
                onClick={handleAdmissionInfo}
              >
                Get Admission Info
              </Button>
              <div className="flex items-center text-white text-lg">
                <PhoneOutlined className="mr-2" />
                <span>8999930804 / 7798902221</span>
              </div>
            </div>
          </div>

          {/* Image/Visual Content Area */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <AnimatePresence mode="wait">
              {currentView === 'logo' && (
                <motion.div
                  key="logo-img"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 flex items-center justify-center p-4 bg-white rounded-full border-4 border-yellow-400"
                >
                  <img
                    src="https://res.cloudinary.com/dapdhzjzc/image/upload/IMG-20250704-WA0000_1_yt4wz6.png"
                    alt="Modulus Logo"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </motion.div>
              )}

              {currentView === 'course' && (
                <motion.div
                  key="course-img"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-white text-primary rounded-2xl p-0.5 shadow-2xl rotate-3 border-4 border-yellow-400"
                >
                  <div className="absolute -top-6 -right-6 z-50 bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-xl animate-bounce scale-[1.2]">
                    ⚠️ Limited Seats!
                  </div>
                  <img
                    src="https://res.cloudinary.com/dapdhzjzc/image/upload/v1767698311/ChatGPT_Image_Jan_6_2026_04_47_23_PM_dhdbms.png"
                    alt="CET Crash Course"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </motion.div>
              )}

              {currentView === 'student' && (
                <motion.div
                  key={`student-img-${studentIndex}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96"
                >
                  <div className="absolute -inset-1 rounded-full bg-yellow-400 blur-md opacity-70"></div>
                  <div className="relative w-full h-full rounded-full border-4 border-yellow-400 overflow-hidden bg-white">
                    <img
                      src={currentStudent.image}
                      alt={currentStudent.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  )
}