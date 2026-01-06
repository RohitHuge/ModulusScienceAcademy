import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneOutlined, WhatsAppOutlined, CloseOutlined } from '@ant-design/icons';

export default function CETCrashCoursePopup() {
    const [isExpanded, setIsExpanded] = useState(false);

    const features = [
        { icon: '📚', text: 'Complete CET Syllabus Revision' },
        { icon: '💪', text: 'Daily Practice & Drill Sessions' },
        { icon: '📝', text: 'Full-Length Mock Tests (Online + Offline)' },
        { icon: '⚡', text: 'Speed & Accuracy Training' },
        { icon: '🎯', text: 'PYQ + Expected Question Solving' },
        { icon: '👨‍🏫', text: 'Expert Faculty for PCM / PCB' },
        { icon: '🤝', text: 'Personal Doubt-Solving Assistance' },
        { icon: '👥', text: 'Limited Students for Better Focus' },
    ];

    const handleCall = (phone) => {
        window.location.href = `tel:${phone}`;
    };

    const handleWhatsApp = (phone) => {
        window.open(`https://wa.me/91${phone}?text=Hi! I'm interested in the CET Crash Course 2026`, '_blank');
    };

    return (
        <div className="fixed top-14 right-1 md:top-6 md:right-6 z-50 scale-[0.8] origin-top-right md:scale-100 lg:top-24 lg:right-1">
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

                            <div className="relative z-10">
                                {/* Header */}
                                <div className="flex items-start gap-2 mb-3">
                                    <span className="text-xl sm:text-2xl">🚀</span>
                                    <div className="flex-1">
                                        <h3 className="text-primary font-bold text-base sm:text-lg leading-tight">
                                            CET CRASH COURSE 2026
                                        </h3>
                                    </div>
                                </div>

                                {/* Date Badge */}
                                <div className="inline-block bg-accent text-primary text-xs sm:text-sm font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full mb-3">
                                    Starts: 23rd February
                                </div>

                                {/* Limited Seats Tag */}
                                <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-center animate-pulse">
                                    LIMITED SEATS ONLY!
                                </div>

                                {/* Expand Hint */}
                                <div className="flex items-center justify-center gap-2 mt-3 text-primary text-xs sm:text-sm font-medium">
                                    <span>Click to view details</span>
                                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 6l3 3 3-3" />
                                    </svg>
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
                        <div className="w-80 sm:w-96 max-h-[85vh] overflow-y-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-yellow-400/40 p-5 sm:p-6">
                            {/* Close Button */}
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
                                aria-label="Close"
                            >
                                <CloseOutlined className="text-gray-600 text-xs sm:text-sm" />
                            </button>

                            {/* Header */}
                            <div className="mb-4 pr-8">
                                <div className="flex items-start gap-2 mb-3">
                                    <span className="text-2xl sm:text-3xl">🚀</span>
                                    <h3 className="text-primary font-bold text-lg sm:text-xl leading-tight">
                                        CET CRASH COURSE 2026
                                    </h3>
                                </div>

                                {/* Date Badge */}
                                <div className="inline-block bg-accent text-primary text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                                    Batch Starts: 23rd February 2026
                                </div>
                            </div>

                            {/* Why This Course Section */}
                            <div className="mb-5">
                                <h4 className="text-primary font-bold text-sm sm:text-base mb-3 flex items-center gap-2">
                                    <span className="text-accent text-lg sm:text-xl">💡</span>
                                    WHY THIS CRASH COURSE?
                                </h4>

                                {/* Features List */}
                                <div className="space-y-2 sm:space-y-2.5">
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05, duration: 0.3 }}
                                            className="flex items-start gap-2.5 sm:gap-3 bg-blue-50/50 rounded-lg p-2 sm:p-2.5 border border-blue-100/50"
                                        >
                                            <span className="text-base sm:text-lg flex-shrink-0">{feature.icon}</span>
                                            <span className="text-text text-xs sm:text-sm leading-tight">{feature.text}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Section */}
                            <div className="border-t border-gray-200 pt-4">
                                <h4 className="text-primary font-bold text-xs sm:text-sm mb-3 text-center">
                                    📞 CONTACT FOR ADMISSION
                                </h4>

                                <div className="space-y-2">
                                    {/* WhatsApp Button */}
                                    <button
                                        onClick={() => handleWhatsApp('8999930804')}
                                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg text-xs sm:text-base"
                                    >
                                        <WhatsAppOutlined className="text-base sm:text-xl" />
                                        <span>WhatsApp: 8999930804</span>
                                    </button>

                                    {/* Call Button */}
                                    <button
                                        onClick={() => handleCall('7798902221')}
                                        className="w-full bg-accent hover:bg-yellow-400 text-primary font-bold py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg text-xs sm:text-base"
                                    >
                                        <PhoneOutlined className="text-base sm:text-xl" />
                                        <span>Call: 7798902221</span>
                                    </button>
                                </div>

                                {/* Urgency Banner */}
                                <div className="mt-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-center animate-pulse">
                                    ⚡ ADMISSIONS OPEN — LIMITED SEATS ONLY! ⚡
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
