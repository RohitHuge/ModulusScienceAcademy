import React, { useRef, useState, useEffect } from 'react';
import amitsir from '../assets/amitsir.profilephoto.webp';
import sandipsir from '../assets/sandipsir.profilephoto.webp';
import ramsir from '../assets/ramsir.profilephoto.webp';
import pandharisir from '../assets/pandharisir.profilephoto.webp';
import { Header, Footer } from './home';
import { Helmet } from 'react-helmet-async';

function useInView(ref, options = {}) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);
  return inView;
}

function HeroSection() {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 100); }, []);
  return (
    <section className={`w-full py-20 bg-primary flex flex-col items-center justify-center text-center transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
      <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">Our Mentors</h1>
      <p className="text-lg md:text-2xl text-white font-medium">Every Topper Has a Teacher — Meet Yours!</p>
    </section>
  );
}

const MENTORS = [
  {
    name: 'Sandip Sir',
    role: 'Director',
    img: sandipsir,
    qualification: 'M.Sc Mathematics, SET, B.Ed',
    subject: 'Mathematics Expert',
    exp: '10+ Years Exp.',
    message: "Mathematics is not about memorizing, it's about understanding patterns. Practice daily and build your problem-solving skills step by step."
  },
  {
    name: 'Pandhari Sir',
    img: pandharisir,
    qualification: 'M.Sc Chem, SET, Ph.D Pursuing',
    subject: 'Chemistry Expert',
    exp: '12+ Years Exp.',
    message: "Stay consistent and trust your teachers. Chemistry is not just about formulas, it's about understanding the world around you."
  },
  {
    name: 'Amit Sir',
    img: amitsir,
    qualification: 'M.Sc Physics, NET',
    subject: 'Physics Expert',
    exp: '8+ Years Exp.',
    message: 'Physics is the language of the universe. Practice regularly and never hesitate to ask questions. Every great discovery started with curiosity.'
  },
  {
    name: 'Ram Sir',
    img: ramsir,
    qualification: 'M.Sc Microbiology',
    subject: 'Biology Expert',
    exp: '5+ Years Exp.',
    message: 'Biology connects us to life itself. Study with passion, observe nature, and remember that every living thing has a story to tell.'
  },
];

function MentorModal({ mentor, isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative" onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
        <div className="flex flex-col items-center text-center">
          <img
            src={mentor.img}
            alt={mentor.name}
            className="w-32 h-32 rounded-full border-4 border-accent mb-4 object-cover"
          />
          <h3 className="text-2xl font-bold text-primary mb-1 font-montserrat">{mentor.name}</h3>
          {mentor.role && (
            <span className="text-xs font-bold text-white bg-primary px-3 py-1 rounded-full mb-3">{mentor.role}</span>
          )}
          <div className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-2">{mentor.subject}</div>
          <div className="text-base text-gray-700 font-medium mb-1">{mentor.qualification}</div>
          <div className="text-sm text-gray-500 mb-6">{mentor.exp}</div>
          <div className="w-full">
            <h4 className="text-lg font-bold text-primary mb-2 text-left">Message to Students:</h4>
            <p className="text-text text-left leading-relaxed">{mentor.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MentorCard({ mentor, show, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Photo */}
      <div className="mb-4">
        <img
          src={mentor.img}
          alt={mentor.name}
          className="w-32 h-32 rounded-full border-4 border-accent object-cover shadow-md"
        />
      </div>

      {/* Name — fixed single line */}
      <h3 className="text-xl font-bold text-primary font-montserrat mb-1 w-full truncate">{mentor.name}</h3>

      {/* Role badge slot — always same height, empty for mentors without role */}
      <div className="h-7 flex items-center justify-center mb-1">
        {mentor.role && (
          <span className="text-xs font-bold text-white bg-primary px-3 py-1 rounded-full">{mentor.role}</span>
        )}
      </div>

      {/* Subject — fixed single line */}
      <span className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-3 w-full truncate">{mentor.subject}</span>

      {/* Qualification — fixed 2-line height so all cards align below */}
      <div className="flex items-start gap-2 text-gray-600 mb-3 justify-center w-full h-10">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="flex-shrink-0 mt-0.5">
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
        </svg>
        <span className="text-sm line-clamp-2 text-left">{mentor.qualification}</span>
      </div>

      {/* Experience button */}
      <div className="bg-orange-500 text-white font-bold text-sm px-4 py-2 rounded-full flex items-center gap-2">
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
        <span>{mentor.exp}</span>
      </div>

      <p className="text-xs text-gray-400 mt-3 font-medium">Click for more details →</p>
    </div>
  );
}

function MentorShowcase() {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef();
  const inView = useInView(sectionRef, { threshold: 0.1 });
  const [showArr, setShowArr] = useState(Array(MENTORS.length).fill(false));

  useEffect(() => {
    if (inView) {
      MENTORS.forEach((_, idx) => {
        setTimeout(() => {
          setShowArr(prev => {
            const next = [...prev];
            next[idx] = true;
            return next;
          });
        }, idx * 180);
      });
    } else {
      setShowArr(Array(MENTORS.length).fill(false));
    }
  }, [inView]);

  const openModal = (mentor) => {
    setSelectedMentor(mentor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMentor(null);
  };

  return (
    <section className="py-16 bg-[#F9F9F9]" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENTORS.map((mentor, i) => (
            <MentorCard
              key={mentor.name}
              mentor={mentor}
              show={showArr[i]}
              onClick={() => openModal(mentor)}
            />
          ))}
        </div>
        <MentorModal mentor={selectedMentor} isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </section>
  );
}

export default function Mentors() {
  return (
    <div className="font-poppins bg-background text-text">
      <Helmet>
        <title>Meet Our Mentors | Modulus Science Academy Sangvi Pune</title>
        <meta name="description" content="Get to know the expert faculty at Modulus Science Academy Sangvi Pune. Experienced mentors for NEET, JEE, MHT-CET, and Board coaching with personal guidance and proven track records." />
        <meta name="keywords" content="Modulus Science Academy Mentors, Pune coaching teachers, NEET faculty Pune, JEE faculty Sangvi, MHT-CET expert mentors, Modulus Academy faculty profiles, best coaching teachers Pune" />
        <meta name="author" content="Modulus Science Academy" />
        <meta property="og:title" content="Meet Our Mentors | Modulus Science Academy Sangvi, Pune" />
        <meta property="og:description" content="Discover the experienced and qualified teaching team at Modulus Science Academy Sangvi Pune — expert mentors for NEET, CET, JEE, and Board exams." />
        <meta property="og:url" content="https://modulusscienceacademy.in/mentor" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="src/assets/logo.png" />
        <link rel="canonical" href="https://modulusscienceacademy.in/mentor" />
      </Helmet>
      <Header />
      <HeroSection />
      <MentorShowcase />
      <Footer />
    </div>
  );
}
