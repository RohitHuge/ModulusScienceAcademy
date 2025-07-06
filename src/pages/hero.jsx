import { Button } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { STUDENT_ACHIEVEMENTS } from './achievements';
// import logobg from '../assets/logobg.png';

export default function Hero({ onApplyClick }) {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(-1); // -1 means showing logo/tagline
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleStudentCount, setVisibleStudentCount] = useState(0);
  const [nextStudentIndex, setNextStudentIndex] = useState(0); // Track which student to show next
  const intervalRef = useRef(null);

  const handleAdmissionInfo = () => {
    navigate('/contact');
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        if (currentIndex === -1) {
          // If showing logo/tagline, move to next student in sequence
          setCurrentIndex(nextStudentIndex);
          setVisibleStudentCount(1);
        } else {
          // If showing a student, check if we need to show logo after 2 students
          const nextStudentCount = visibleStudentCount + 1;
          
          if (nextStudentCount > 2) {
            // Show logo/tagline after every 2 students
            setCurrentIndex(-1);
            setVisibleStudentCount(0);
            // Update next student index for when we resume
            setNextStudentIndex((nextStudentIndex + 2) % STUDENT_ACHIEVEMENTS.length);
          } else {
            // Continue to next student
            const nextIndex = (currentIndex + 1) % STUDENT_ACHIEVEMENTS.length;
            setCurrentIndex(nextIndex);
            setVisibleStudentCount(nextStudentCount);
          }
        }
        setIsTransitioning(false);
      }, 300);
    }, 5000);
  };

  useEffect(() => {
    // Initial delay of 3 seconds before showing first student
    const initialTimer = setTimeout(() => {
      setCurrentIndex(0);
      setVisibleStudentCount(1);
      setNextStudentIndex(2); // Next student after the first pair
      resetInterval();
    }, 3000);

    return () => {
      clearTimeout(initialTimer);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Reset interval when currentIndex or visibleStudentCount changes
  useEffect(() => {
    // Always reset interval, regardless of currentIndex
    resetInterval();
  }, [currentIndex, visibleStudentCount]);

  const currentStudent = currentIndex >= 0 ? STUDENT_ACHIEVEMENTS[currentIndex] : null;

  const handlePrevious = () => {
    if (currentIndex === -1) return; // Disable on logo view
    
    setIsTransitioning(true);
    setTimeout(() => {
      if (currentIndex === 0) {
        // If at first student, go to last student
        setCurrentIndex(STUDENT_ACHIEVEMENTS.length - 1);
        setVisibleStudentCount(2);
        setNextStudentIndex(0); // Update next student index
      } else {
        // Go to previous student
        setCurrentIndex(currentIndex - 1);
        setVisibleStudentCount(Math.max(1, visibleStudentCount - 1));
        // Update next student index if needed
        if (visibleStudentCount === 1) {
          setNextStudentIndex(currentIndex);
        }
      }
      setIsTransitioning(false);
    }, 300);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      if (currentIndex === -1) {
        // If showing logo/tagline, go to next student in sequence
        setCurrentIndex(nextStudentIndex);
        setVisibleStudentCount(1);
      } else {
        // Go to next student
        const nextIndex = (currentIndex + 1) % STUDENT_ACHIEVEMENTS.length;
        const nextStudentCount = visibleStudentCount + 1;
        
        if (nextStudentCount > 2) {
          // Show logo/tagline after every 2 students
          setCurrentIndex(-1);
          setVisibleStudentCount(0);
          // Update next student index for when we resume
          setNextStudentIndex((nextStudentIndex + 2) % STUDENT_ACHIEVEMENTS.length);
        } else {
          // Continue to next student
          setCurrentIndex(nextIndex);
          setVisibleStudentCount(nextStudentCount);
        }
      }
      setIsTransitioning(false);
    }, 300);
  };

  return (
    // <div className="relative overflow-hidden overflow-x-hidden min-h-screen w-full flex items-center justify-center" style={{ minHeight: '100vh' }}>
    <div className="bg-gradient-to-br from-primary to-blue-700 rounded-xl shadow-lg p-8 text-white relative overflow-hidden flex-1">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/20 rounded-full translate-y-12 -translate-x-12"></div>
      {/* <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=abstract%20educational%20background%20with%20subtle%20science%20elements%20like%20molecules%2C%20formulas%2C%20and%20books%20in%20blue%20and%20yellow%20gradient%2C%20professional%20modern%20design%20for%20education%20website&width=1440&height=600&seq=1&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div> */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70 z-10"></div>
      
      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        disabled={currentIndex === -1}
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full border border-white/30 transition-all duration-300 ${
          currentIndex === -1 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
        }`}
        aria-label="Previous student"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full border border-white/30 transition-all duration-300 hover:scale-110"
        aria-label="Next student"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="relative z-20 w-full flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-5xl mx-auto px-2 sm:px-4 md:px-6 py-16 gap-6 md:gap-10 overflow-x-hidden">
          {/* Text */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              MODULUS SCIENCE ACADEMY
            </h1>
            <p className="text-xl md:text-2xl text-yellow-400 font-medium mb-6">
              "By The Students, For The Students"
            </p>
            
            {/* Dynamic Content Area */}
            <AnimatePresence mode="wait">
              {currentIndex === -1 ? (
                // Logo/Tagline View
                <motion.div
                  key="tagline"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="text-white text-lg mb-8 max-w-lg"
                >
                  Empowering students to excel in science subjects with expert mentors and proven teaching methodologies. Join us to transform your academic journey.
                </motion.div>
              ) : (
                // Student Achievement View
                <motion.div
                  key={`student-${currentIndex}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="text-white text-lg mb-8 max-w-lg"
                >
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-yellow-400">
                      🎓 {currentStudent.name}
                    </div>
                    <div className="text-lg text-white">
                      📘 {currentStudent.exam}
                    </div>
                    <div className="text-xl font-bold text-yellow-400">
                      🏆 {currentStudent.score}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <Button
                type="primary"
                size="large"
                className="!rounded-button whitespace-nowrap cursor-pointer"
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
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 flex items-center justify-center">
              <div className="absolute -inset-1 rounded-full bg-yellow-400 blur-md"></div>
              <div className="absolute w-5/6 h-5/6 bg-white rounded-full z-10"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-yellow-400 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {currentIndex === -1 ? (
                    // Logo View
                    <motion.img
                      key="logo"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      src="https://res.cloudinary.com/dapdhzjzc/image/upload/IMG-20250704-WA0000_1_yt4wz6.png"
                      alt="Modulus Academy Logo"
                      className="w-4/5 h-4/5 object-contain relative z-20"
                    />
                  ) : (
                    // Student Image View
                    <motion.img
                      key={`student-image-${currentIndex}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      src={currentStudent.image}
                      alt={currentStudent.name}
                      className="w-4/5 h-4/5 object-cover relative z-20 rounded-full"
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}