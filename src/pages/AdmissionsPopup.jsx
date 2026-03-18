import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CloseOutlined, LeftOutlined, RightOutlined, CheckCircleOutlined, FireOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';

const ADMISSION_DETAILS = [
    {
        id: 'science-integrated',
        title: 'XI & XII (SCIENCE) INTEGRATED PROGRAM',
        subtitle: 'Academic Year 2026–2028',
        icon: '🎓',
        highlights: [
            'Preparation for JEE (Main)',
            'Preparation for MHT-CET',
            'Preparation for NEET',
            '12th Board Examination Focus',
            'Concept Clarity & Problem Solving',
            'Guidance by Subject Experts'
        ],
        theme: 'from-blue-600 to-indigo-700'
    },
    {
        id: 'icse-10th',
        title: 'ICSE 10th (Board 2026-27)',
        subtitle: 'Batch Commencing: 9th March 2026',
        icon: '✨',
        highlights: [
            'Experienced & NET/SET Qualified Faculties',
            'Limited Batch Size – Only 15 Students',
            'Proven Track Record & Results',
            'Personalized Study Plan',
            '24×7 CCTV Surveillance',
            'Result Improvement Program (PIP)'
        ],
        theme: 'from-purple-600 to-pink-700'
    },
    {
        id: 'ssc-cbse',
        title: '9th & 10th (SSC/CBSE BOARD)',
        subtitle: 'Admissions Open for New Batches',
        icon: '📚',
        highlights: [
            'Strong Concept Building',
            'Complete Syllabus Coverage',
            'Regular Tests & Analysis',
            'Personal Attention (Limited Size)',
            'Board Exam Strategy',
            'Doubt Solving & Revision'
        ],
        theme: 'from-emerald-600 to-teal-700'
    }
];

export default function AdmissionsPopup() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % ADMISSION_DETAILS.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + ADMISSION_DETAILS.length) % ADMISSION_DETAILS.length);
    };

    if (!isVisible) return null;

    const currentBatch = ADMISSION_DETAILS[currentIndex];

    return (
        <div className="fixed sm:bottom-20 right-1 z-50 w-[320px] md:w-[380px]">
            <AnimatePresence mode="wait">
                {isMobile && !isExpanded ? (
                    // Flashing Label for Mobile
                    <motion.div
                        key="mobile-label"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="md:hidden"
                    >
                        <motion.button
                            onClick={() => setIsExpanded(true)}
                            animate={{ 
                                boxShadow: ["0px 0px 0px rgba(239, 68, 68, 0.4)", "0px 0px 15px rgba(239, 68, 68, 0.7)", "0px 0px 0px rgba(239, 68, 68, 0.4)"],
                                scale: [1, 1.05, 1]
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2 border-2 border-white/20 whitespace-nowrap"
                        >
                            <FireOutlined className="text-yellow-400 animate-pulse" />
                            <span>Admission Open 2026-28</span>
                            <UpOutlined className="text-[10px] ml-1" />
                        </motion.button>
                    </motion.div>
                ) : (
                    // Full Popup Content (visible on desktop or if expanded on mobile)
                    <motion.div
                        key="main-popup"
                        initial={isMobile ? { opacity: 0, y: 100, scale: 0.9 } : { opacity: 0, x: -50 }}
                        animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
                        exit={isMobile ? { opacity: 0, y: 100, scale: 0.9 } : { opacity: 0, x: -50 }}
                        className={`relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 ${!isMobile ? 'block' : isExpanded ? 'block' : 'hidden'}`}
                    >
                        {/* Header with Title */}
                        <div className={`bg-gradient-to-r ${currentBatch.theme} p-4 text-white relative`}>
                            <button 
                                onClick={() => isMobile ? setIsExpanded(false) : setIsVisible(false)}
                                className="absolute top-2 right-2 text-white/80 hover:text-white transition-colors"
                            >
                                <CloseOutlined />
                            </button>
                            <div className="flex items-center gap-3 mb-1">
                                <span className="text-2xl">{currentBatch.icon}</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 px-2 py-0.5 rounded-full">
                                    Admission Open
                                </span>
                            </div>
                            <h3 className="text-sm md:text-base font-bold leading-tight uppercase pr-6">
                                {currentBatch.title}
                            </h3>
                            <p className="text-[11px] text-white/90 mt-1 italic">
                                {currentBatch.subtitle}
                            </p>
                        </div>

                        {/* Content Area */}
                        <div className="p-4 bg-gray-50/50">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentBatch.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-2"
                                >
                                    <div className="grid grid-cols-1 gap-1.5">
                                        {currentBatch.highlights.map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2 text-[12px] text-gray-700 leading-tight">
                                                <CheckCircleOutlined className="text-green-500 mt-0.5 shrink-0" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation and Call to Action */}
                            <div className="mt-4 flex items-center justify-between gap-3">
                                <div className="flex gap-1">
                                    <button 
                                        onClick={handlePrev}
                                        className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-400 hover:text-primary hover:border-primary transition-all shadow-sm"
                                    >
                                        <LeftOutlined className="text-xs" />
                                    </button>
                                    <button 
                                        onClick={handleNext}
                                        className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-400 hover:text-primary hover:border-primary transition-all shadow-sm"
                                    >
                                        <RightOutlined className="text-xs" />
                                    </button>
                                </div>
                                
                                <button
                                    onClick={() => navigate('/contact')}
                                    className={`flex-1 py-2 px-4 rounded-full text-white text-xs font-bold shadow-lg transition-all transform hover:scale-105 active:scale-95 bg-gradient-to-r ${currentBatch.theme}`}
                                >
                                    ENQUIRE NOW
                                </button>
                            </div>

                            {/* Collapsable indicator for mobile */}
                            {isMobile && (
                                <button 
                                    onClick={() => setIsExpanded(false)}
                                    className="w-full mt-3 text-center text-[10px] text-gray-400 hover:text-primary transition-colors flex items-center justify-center gap-1"
                                >
                                    <DownOutlined /> Collapse Info
                                </button>
                            )}

                            {/* Dot Indicators */}
                            <div className="flex justify-center gap-1.5 mt-2">
                                {ADMISSION_DETAILS.map((_, idx) => (
                                    <div 
                                        key={idx}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${
                                            idx === currentIndex ? 'w-4 bg-primary' : 'w-1.5 bg-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Bottom Accent */}
                        <div className="h-1 bg-yellow-400 w-full"></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
