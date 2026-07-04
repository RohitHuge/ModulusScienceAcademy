import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { STUDENT_ACHIEVEMENTS } from './achievements';

const MHT_CET_TOPPERS = STUDENT_ACHIEVEMENTS.filter(s => s.exam.includes('MHT-CET 2026'));

export default function MHTCETTopperCard() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [dismissed, setDismissed] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex(i => (i + 1) % MHT_CET_TOPPERS.length);
    }, 3500);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (dir) => {
    setDirection(dir);
    setIndex(i => (i + dir + MHT_CET_TOPPERS.length) % MHT_CET_TOPPERS.length);
    startTimer();
  };

  if (dismissed) return null;

  const student = MHT_CET_TOPPERS[index];

  const SLIDE_TRANSITION = { duration: 0.38, ease: [0.4, 0, 0.2, 1] };

  const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 20 : -20 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -20 : 20 }),
  };

  // ─── MOBILE STRIP (bottom bar) ───────────────────────────
  const MobileStrip = () => (
    <div className="sm:hidden fixed top-[72px] left-0 right-0 z-50 px-3">
      {!mobileExpanded ? (
        // Compact pill strip
        <motion.button
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          onClick={() => setMobileExpanded(true)}
          className="w-full flex items-center gap-3 bg-gradient-to-r from-[#002a6e] to-[#004AAD] rounded-2xl px-4 py-3 shadow-2xl border border-yellow-400/50"
        >
          {/* Photo */}
          <div className="w-10 h-10 rounded-full border-2 border-yellow-400 overflow-hidden flex-shrink-0 bg-white">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={student.image}
                alt={student.name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={SLIDE_TRANSITION}
              />
            </AnimatePresence>
          </div>

          {/* Text */}
          <div className="flex-1 text-left overflow-hidden">
            <p className="text-yellow-400 font-black text-[10px] uppercase tracking-widest leading-none mb-0.5">
              🏆 MHT-CET 2026 Topper
            </p>
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                className="text-white font-bold text-sm truncate leading-tight"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={SLIDE_TRANSITION}
              >
                {student.name}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Score */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="flex-shrink-0 bg-yellow-400 text-[#003f8a] font-black text-sm px-3 py-1.5 rounded-xl shadow"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={SLIDE_TRANSITION}
            >
              {student.score}
            </motion.div>
          </AnimatePresence>

          {/* Expand hint */}
          <svg className="w-4 h-4 text-white/50 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      ) : (
        // Expanded mobile panel
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl overflow-hidden shadow-2xl border border-yellow-400/30"
          style={{ background: 'linear-gradient(135deg, #002a6e 0%, #004AAD 60%, #1a5fb4 100%)' }}
        >
          {/* Top accent */}
          <div className="h-1.5 w-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300" />

          {/* Header row */}
          <div className="flex items-center justify-between px-4 pt-3 pb-2">
            <div className="flex items-center gap-2">
              <span className="text-base">🏆</span>
              <div>
                <p className="text-yellow-400 font-extrabold text-[10px] tracking-widest uppercase">MHT-CET 2026</p>
                <p className="text-white/60 text-[9px]">Our Proud Toppers</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => goTo(-1)} className="w-7 h-7 rounded-full bg-white/10 hover:bg-yellow-400/30 text-white flex items-center justify-center">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M8 2L4 6l4 4" /></svg>
              </button>
              <button onClick={() => goTo(1)} className="w-7 h-7 rounded-full bg-white/10 hover:bg-yellow-400/30 text-white flex items-center justify-center">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 2l4 4-4 4" /></svg>
              </button>
              <button onClick={() => setMobileExpanded(false)} className="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center ml-1">
                <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M1 1l8 8M9 1L1 9" /></svg>
              </button>
            </div>
          </div>

          {/* Student content — horizontal on mobile */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={SLIDE_TRANSITION}
              className="flex items-center gap-4 px-4 pb-3"
            >
              {/* Photo */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-yellow-400/30 blur-lg scale-125" />
                <div className="relative w-20 h-20 rounded-full border-3 border-yellow-400 overflow-hidden bg-white shadow-xl" style={{ borderWidth: 3 }}>
                  <img src={student.image} alt={student.name} className="w-full h-full object-cover" />
                </div>
                {index === 0 && <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-base">👑</div>}
              </div>

              {/* Info */}
              <div className="flex-1">
                <p className="text-white font-extrabold text-base leading-tight mb-0.5">{student.name}</p>
                <p className="text-white/60 text-xs mb-2">{student.exam}</p>
                <div className="inline-block bg-gradient-to-r from-yellow-300 to-yellow-500 text-[#003f8a] font-black text-xl px-4 py-1 rounded-full shadow">
                  {student.score}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 pb-2">
            {MHT_CET_TOPPERS.map((_, i) => (
              <button key={i} onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); startTimer(); }}
                className={`rounded-full transition-all duration-300 ${i === index ? 'w-5 h-2 bg-yellow-400' : 'w-2 h-2 bg-white/30'}`} />
            ))}
          </div>

          {/* CTA */}
          <div className="px-4 pb-3">
            <button onClick={() => navigate('/achievements')}
              className="w-full py-2 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-[#003f8a] font-extrabold text-sm transition-all">
              View All Achievements →
            </button>
          </div>

          {/* Progress bar */}
          <div className="relative h-0.5 bg-yellow-400/30">
            <div key={index} className="h-full bg-yellow-400"
              style={{ animation: 'mhtcet-progress 3.5s linear forwards' }} />
          </div>
        </motion.div>
      )}

      <style>{`
        @keyframes mhtcet-progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );

  // ─── DESKTOP FULL CARD (top-right) ───────────────────────
  const DesktopCard = () => (
    <div className="hidden sm:block fixed top-20 right-4 z-50 w-72 lg:w-80">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-yellow-400/30"
        style={{ background: 'linear-gradient(135deg, #002a6e 0%, #004AAD 60%, #1a5fb4 100%)' }}>

        <div className="h-1.5 w-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300" />

        <button onClick={() => setDismissed(true)}
          className="absolute top-3 right-3 z-10 w-6 h-6 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors">
          <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M1 1l8 8M9 1L1 9" /></svg>
        </button>

        <div className="flex items-center gap-2 px-4 pt-3 pb-2">
          <span className="text-lg">🏆</span>
          <div>
            <p className="text-yellow-400 font-extrabold text-xs tracking-widest uppercase leading-none">MHT-CET 2026</p>
            <p className="text-white/70 text-[10px] font-medium">Our Proud Toppers</p>
          </div>
          <div className="ml-auto flex gap-1">
            <button onClick={() => goTo(-1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-yellow-400/30 text-white flex items-center justify-center transition-colors">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M8 2L4 6l4 4" /></svg>
            </button>
            <button onClick={() => goTo(1)} className="w-6 h-6 rounded-full bg-white/10 hover:bg-yellow-400/30 text-white flex items-center justify-center transition-colors">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 2l4 4-4 4" /></svg>
            </button>
          </div>
        </div>

        <div className="px-4 pb-1 overflow-hidden" style={{ minHeight: 220 }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div key={index} custom={direction} variants={slideVariants}
              initial="enter" animate="center" exit="exit"
              transition={SLIDE_TRANSITION}
              className="flex flex-col items-center text-center">
              <div className="relative mt-1 mb-3">
                <div className="absolute inset-0 rounded-full bg-yellow-400/40 blur-lg scale-110" />
                <div className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-full border-4 border-yellow-400 overflow-hidden shadow-xl bg-white">
                  <img src={student.image} alt={student.name} className="w-full h-full object-cover" />
                </div>
                {index === 0 && <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xl drop-shadow-lg">👑</div>}
              </div>
              <h3 className="text-white font-extrabold text-lg leading-tight mb-0.5">{student.name}</h3>
              <p className="text-white/60 text-xs font-medium mb-3">{student.exam}</p>
              <div className="relative mb-2">
                <div className="absolute inset-0 bg-yellow-400/30 blur-md rounded-full" />
                <div className="relative bg-gradient-to-r from-yellow-300 to-yellow-500 text-[#003f8a] font-black text-2xl lg:text-3xl px-8 py-2 rounded-full shadow-lg">
                  {student.score}
                </div>
              </div>
              <p className="text-white/40 text-[10px] uppercase tracking-wider">Percentile Score</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-1.5 py-2">
          {MHT_CET_TOPPERS.map((_, i) => (
            <button key={i}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); startTimer(); }}
              className={`rounded-full transition-all duration-300 ${i === index ? 'w-5 h-2 bg-yellow-400' : 'w-2 h-2 bg-white/30 hover:bg-white/60'}`} />
          ))}
        </div>

        <div className="px-4 pb-4">
          <button onClick={() => navigate('/achievements')}
            className="w-full py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-[#003f8a] font-extrabold text-sm transition-all duration-200 hover:scale-[1.02] shadow-md">
            View All Achievements →
          </button>
        </div>

        <div className="absolute bottom-0 left-0 h-0.5 bg-yellow-400/40 w-full">
          <div key={index} className="h-full bg-yellow-400"
            style={{ animation: 'mhtcet-progress 3.5s linear forwards' }} />
        </div>

        <style>{`
          @keyframes mhtcet-progress {
            from { width: 0%; }
            to   { width: 100%; }
          }
        `}</style>
      </div>
    </div>
  );

  return (
    <>
      <MobileStrip />
      <DesktopCard />
    </>
  );
}
