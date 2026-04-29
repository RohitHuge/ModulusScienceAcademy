import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloseOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function AdvikAchievementPopup() {
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="fixed top-2 scale-[0.8] md:top-6 md:right-6 z-50 origin-top-right md:scale-100 lg:top-24 lg:right-1">
            <AnimatePresence mode="wait">
                {!isExpanded ? (
                    // Collapsed State
                    <motion.div
                        key="collapsed"
                        initial={{ opacity: 0, scale: 0.8, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: -20 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        onClick={() => setIsExpanded(true)}
                        className="cursor-pointer group"
                    >
                        <div className="w-64 sm:w-72 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-yellow-400/30 p-4 sm:p-5 hover:shadow-yellow-400/20 hover:shadow-2xl transition-all duration-300">
                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10 flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400 shrink-0">
                                    <img 
                                        src="https://res.cloudinary.com/dapdhzjzc/image/upload/v1776872843/Screenshot_2026-04-22_211535_j9yitg.png" 
                                        alt="Advik Mane" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-primary font-bold text-sm sm:text-base leading-tight flex items-center gap-1">
                                        ⭐ New Topper!
                                    </h3>
                                    <p className="text-gray-800 font-bold text-sm">Advik Mane</p>
                                    <div className="text-xs bg-yellow-400 text-primary px-2 py-0.5 rounded-md inline-block mt-1 font-bold">
                                        97.2% (10th CBSE)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    // Expanded State
                    <motion.div
                        key="expanded"
                        initial={{ opacity: 0, scale: 0.9, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="relative"
                    >
                        <div className="w-80 sm:w-96 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-yellow-400/40 p-5 sm:p-6 text-center">
                            {/* Close Button */}
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
                                aria-label="Close"
                            >
                                <CloseOutlined className="text-gray-600 text-xs sm:text-sm" />
                            </button>

                            <h3 className="text-primary font-bold text-lg mb-4 flex justify-center items-center gap-2">
                                🏆 PROUD ACHIEVEMENT 🏆
                            </h3>

                            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-yellow-400 mb-4 shadow-lg">
                                <img 
                                    src="https://res.cloudinary.com/dapdhzjzc/image/upload/v1776872843/Screenshot_2026-04-22_211535_j9yitg.png" 
                                    alt="Advik Mane" 
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h2 className="text-2xl font-bold text-gray-800 mb-1">Advik Mane</h2>
                            <p className="text-gray-600 mb-3">10th CBSE Board Exams</p>

                            <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-xl p-3 mb-5 shadow-md inline-block px-8">
                                <span className="text-3xl font-black text-primary">97.2%</span>
                            </div>
                            
                            <p className="text-sm text-gray-600 mb-5 px-4 italic">
                                "Congratulations Advik on your outstanding performance! The Modulus Science Academy family is incredibly proud of your hard work and dedication."
                            </p>

                            <button
                                onClick={() => {
                                    setIsExpanded(false);
                                    navigate('/achievements');
                                }}
                                className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-2.5 sm:py-3 px-4 rounded-xl transition-colors shadow-lg"
                            >
                                View All Achievements
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
