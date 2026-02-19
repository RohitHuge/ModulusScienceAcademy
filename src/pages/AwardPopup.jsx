import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function AwardPopup() {
    const navigate = useNavigate();

    return (
        <div className="fixed top-13 right-12 z-50 md:top-6 md:left-6 lg:top-20 lg:left-10 lg:w-64">
            <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate('/blog/acharya-pratibha-award-2026')}
                className="cursor-pointer group relative"
            >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-yellow-400 rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>

                <div className="relative bg-white/90 backdrop-blur-sm border-2 border-yellow-400 rounded-xl p-2 md:p-3 shadow-xl flex items-center gap-3 md:pr-5">
                    {/* Icon/Image */}
                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center shrink-0 border border-yellow-200">
                        <span className="text-xl">🏆</span>
                    </div>

                    {/* Text Content */}
                    <div className="hidden md:flex flex-col lg:">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                            Just Announced!
                        </span>
                        <div className="flex items-center gap-1.5">
                            <span className="text-xs sm:text-sm font-bold text-primary leading-tight">
                                "Acharya Pratibha" Award
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
