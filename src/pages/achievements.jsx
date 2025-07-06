import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Header, Footer } from './home';
import { Helmet } from 'react-helmet-async';

// const NAV_LINKS = [
//   { name: 'Home', href: '/' },
//   { name: 'About', href: '/about' },
//   { name: 'Courses', href: '/courses' },
//   { name: 'Mentors', href: '/mentor' },
//   { name: 'Achievements', href: '/achievements' },
//   { name : 'Gallery' , href : '/gallery'},
//   { name: 'Contact', href: '/contact' },
//   { name: 'Blog' , href: '/#blog'}
// ];

const ACHIEVEMENTS = [
  {
    id: 1,
    title: '93.26% Topper in MHT-CET 2025',
    description: 'Our student secured the highest percentile in Maharashtra CET engineering entrance exam.',
    year: '2025',
    icon: '🏆'
  },
  {
    id: 2,
    title: '20+ Students Selected for JEE Mains 2024',
    description: 'Outstanding performance with multiple students qualifying for IIT-JEE Mains examination.',
    year: '2024',
    icon: '⭐'
  },
  {
    id: 3,
    title: '100% Result in Class 10 Board 2023',
    description: 'Perfect success rate with all students passing their SSC/CBSE board examinations.',
    year: '2023',
    icon: '🎓'
  },
  // {
  //   id: 4,
  //   title: '15+ NEET Qualifiers 2024',
  //   description: 'Multiple students successfully qualified for medical entrance examination.',
  //   year: '2024',
  //   icon: '🏥'
  // },
  // {
  //   id: 5,
  //   title: '95% Average in Class 12 Science',
  //   description: 'Exceptional academic performance across all science stream subjects.',
  //   year: '2024',
  //   icon: '📊'
  // },
  {
    id: 4,
    title: 'Regional Science Olympiad Winners',
    description: 'Students won multiple awards in regional science competitions and olympiads.',
    year: '2024',
    icon: '🥇'
  }
];

// const TESTIMONIALS = [
//   {
//     id: 1,
//     name: 'Aarav Mehta',
//     course: 'JEE Advanced 2023',
//     image: 'https://randomuser.me/api/portraits/men/32.jpg',
//     rating: 5,
//     message: 'Modulus Science Academy transformed my approach to JEE preparation. The mentors here are exceptional and the structured approach helped me secure 99.2 percentile. The doubt clearing sessions were game-changing!',
//     shortMessage: 'The mentors here are exceptional and the structured approach helped me secure 99.2 percentile.'
//   },
//   {
//     id: 2,
//     name: 'Sneha Patil',
//     course: 'NEET 2023',
//     image: 'https://randomuser.me/api/portraits/women/44.jpg',
//     rating: 5,
//     message: 'I joined MSA for NEET preparation and it was the best decision. The biology faculty is outstanding and the regular mock tests prepared me perfectly. I scored 98.7% and got into my dream medical college!',
//     shortMessage: 'The biology faculty is outstanding and the regular mock tests prepared me perfectly.'
//   },
//   {
//     id: 3,
//     name: 'Rohan Desai',
//     course: 'MHT-CET 2023',
//     image: 'https://randomuser.me/api/portraits/men/65.jpg',
//     rating: 5,
//     message: 'The personalized attention and small batch sizes at MSA made all the difference. My physics concepts improved dramatically and I scored 99.0 percentile in MHT-CET. Highly recommended!',
//     shortMessage: 'The personalized attention and small batch sizes made all the difference.'
//   },
//   {
//     id: 4,
//     name: 'Priya Nair',
//     course: 'SSC Board 2023',
//     image: 'https://randomuser.me/api/portraits/women/68.jpg',
//     rating: 5,
//     message: 'MSA helped me build a strong foundation in science and mathematics. The teachers are very supportive and the study material is excellent. I scored 97.5% in my SSC board exams!',
//     shortMessage: 'MSA helped me build a strong foundation in science and mathematics.'
//   }
// ];
const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sanvi Kadam',
    course: 'MHT-CET 2025 (PCM)',
    image: 'https://res.cloudinary.com/dapdhzjzc/image/upload/tffrd_1_bcugdl.jpg',
    rating: 5,
    message: 'Scoring 93.26 percentile in MHT-CET would not have been possible without Modulus Science Academy. The personal guidance, regular tests, and focused mentorship helped me improve tremendously.',
    shortMessage: 'Scoring 93.26 percentile was possible only because of Modulus Science Academy support and regular tests.'
  },
  {
    id: 2,
    name: 'Nikita Pujari',
    course: 'MHT-CET 2025 (PCM)',
    image: 'https://res.cloudinary.com/dapdhzjzc/image/upload/e_background_removal/f_png/v1751640954/IMG_6023_1_mzosyx.jpg',
    rating: 5,
    message: 'I was able to score 91.30 percentile thanks to the well-planned study materials and consistent support from the teachers at Modulus. They always encouraged me and helped clear all my doubts.',
    shortMessage: 'The teachers at Modulus were very supportive throughout my MHT-CET journey.'
  },
  {
    id: 3,
    name: 'Gauri Mane',
    course: 'MHT-CET 2025 (PCB)',
    image: 'https://res.cloudinary.com/dapdhzjzc/image/upload/e_background_removal/f_png/v1751689333/Screenshot_2025-07-05_093826_iqvu2s_43156b.png',
    rating: 5,
    message: 'Modulus Science Academy helped me secure 87.89 percentile in PCB. The classroom teaching and one-on-one mentoring gave me the confidence to do my best in the exam.',
    shortMessage: 'The personal attention I received really boosted my confidence.'
  },
  {
    id: 4,
    name: 'Payal Jadhav',
    course: 'MHT-CET 2025 (PCM)',
    image: 'https://res.cloudinary.com/dapdhzjzc/image/upload/WhatsApp_Image_2025-07-04_at_6.43.43_PM_t19hxy.png',
    rating: 5,
    message: 'I am thankful to Modulus Science Academy for helping me score 86.67 percentile. Their mock tests and consistent evaluation really made a big difference.',
    shortMessage: 'Mock tests at Modulus helped me improve my accuracy and confidence.'
  },
  {
    id: 5,
    name: 'Dipali Thorbole',
    course: 'MHT-CET 2025 (PCM)',
    image: 'https://res.cloudinary.com/dapdhzjzc/image/upload/WhatsApp_Image_2025-07-04_at_6.43.43_PM_1_gxxpnb.png',
    rating: 5,
    message: 'Modulus Science Academy test series and mentoring were key to my success. Scoring 86.71 percentile gave me a huge confidence boost.',
    shortMessage: 'Thanks to the team at Modulus for guiding me toward 86.71 percentile!'
  },
  {
    id: 6,
    name: 'Veer Sonde',
    course: 'MHT-CET 2025 (PCM)',
    image: 'https://res.cloudinary.com/dapdhzjzc/image/upload/e_background_removal/f_png/v1751689358/Screenshot_2025-07-05_093826_iqvu2s_96434e.png',
    rating: 5,
    message: 'The discipline and structure at Modulus helped me achieve 86.67 percentile in MHT-CET. The environment was very motivating.',
    shortMessage: 'A motivating environment and great teachers made this result possible.'
  },
  {
    id: 7,
    name: 'Harshada Kharade',
    course: 'MHT-CET 2025 (PCM)',
    image: 'https://res.cloudinary.com/dapdhzjzc/image/upload/e_background_removal/f_png/v1751689074/Screenshot_2025-07-05_093757_tl2vnn.png',
    rating: 5,
    message: 'With the help of Modulus, I scored 83.76 percentile. Their clear concept explanations and regular doubt sessions were excellent.',
    shortMessage: 'Great teaching and doubt clearing sessions helped me score 83.76 percentile.'
  },
  {
    id: 8,
    name: 'Gauri Mane',
    course: 'MHT-CET 2025 (PCM)',
    image: 'https://res.cloudinary.com/dapdhzjzc/image/upload/e_background_removal/f_png/v1751689333/Screenshot_2025-07-05_093826_iqvu2s_43156b.png',
    rating: 5,
    message: 'I am grateful to the mentors at Modulus for helping me score 82.88 percentile. Their constant guidance and support made all the difference.',
    shortMessage: 'Supportive mentors and detailed notes helped me succeed in MHT-CET.'
  },
];


export { TESTIMONIALS };

// Individual Student Achievements Data
const STUDENT_ACHIEVEMENTS = [
  { id: 1, name: 'Sanvi Kadam', exam: 'MHT-CET 2025(PCM)', score: '93.26%tile', image: 'https://res.cloudinary.com/dapdhzjzc/image/upload/tffrd_1_bcugdl.jpg' },
  { id: 2, name: 'Nikita Pujari', exam: 'MHT-CET 2025(PCM)', score: '91.30%tile', image: 'https://res.cloudinary.com/dapdhzjzc/image/upload/e_background_removal/f_png/v1751640954/IMG_6023_1_mzosyx.jpg' },
  { id: 3, name: 'Gauri Mane', exam: 'MHT-CET 2025(PCB)', score: '87.89%tile', image: 'https://res.cloudinary.com/dapdhzjzc/image/upload/e_background_removal/f_png/v1751689333/Screenshot_2025-07-05_093826_iqvu2s_43156b.png' },
  { id: 4, name: 'Payal Jadhav', exam: 'MHT-CET 2025(PCM)', score: '86.67%tile', image: 'https://res.cloudinary.com/dapdhzjzc/image/upload/WhatsApp_Image_2025-07-04_at_6.43.43_PM_t19hxy.png' },
  { id: 5, name: 'Dipali Thorbole', exam: 'MHT-CET 2025(PCM)', score: '86.71%tile', image: 'https://res.cloudinary.com/dapdhzjzc/image/upload/WhatsApp_Image_2025-07-04_at_6.43.43_PM_1_gxxpnb.png' },
  { id: 6, name: 'Veer Sonde', exam: 'MHT-CET 2025(PCM)', score: '86.67%tile', image: 'https://res.cloudinary.com/dapdhzjzc/image/upload/e_background_removal/f_png/v1751689358/Screenshot_2025-07-05_093826_iqvu2s_96434e.png' },
  { id: 7, name: 'Harshada Kharade', exam: 'MHT-CET 2025(PCM)', score: '83.76%tile', image: 'https://res.cloudinary.com/dapdhzjzc/image/upload/e_background_removal/f_png/v1751689074/Screenshot_2025-07-05_093757_tl2vnn.png' },
  { id: 8, name: 'Gauri Mane (PCM)', exam: 'MHT-CET 2025(PCM)', score: '82.88%tile', image: 'https://res.cloudinary.com/dapdhzjzc/image/upload/e_background_removal/f_png/v1751689333/Screenshot_2025-07-05_093826_iqvu2s_43156b.png' },
];

export { STUDENT_ACHIEVEMENTS };

// Custom hook for in-view animation (play only once)
function useInViewOnce(ref, options = {}) {
  const [hasBeenInView, setHasBeenInView] = useState(false);
  useEffect(() => {
    if (hasBeenInView) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasBeenInView(true);
      },
      options
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options, hasBeenInView]);
  return hasBeenInView;
}

function StudentAchievementCard({ student }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center mx-2 min-w-[260px] max-w-[280px] w-[90vw] sm:w-[260px] md:w-[260px] lg:w-[300px] transition-all duration-300"
      style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
    >
      <div className="w-[112px] h-[112px] rounded-full flex items-center justify-center mb-4 bg-white border-4" style={{ borderColor: '#FFD700' }}>
        <div className="w-[104px] h-[104px] rounded-full flex items-center justify-center bg-white border-4" style={{ borderColor: '#004AAD' }}>
          <img
            src={student.image}
            alt={student.name}
            className="w-[96px] h-[96px] rounded-full object-cover"
          />
        </div>
      </div>
      <div className="text-2xl font-bold text-primary mb-1 text-center" style={{ fontSize: 24 }}>{student.name}</div>
      <div className="text-base text-gray-700 mb-2 text-center" style={{ fontSize: 16 }}>{student.exam}</div>
      <div className="text-[18px] font-bold bg-[#FFD700] text-[#004AAD] px-4 py-1 rounded-full mt-1" style={{ fontSize: 18 }}>{student.score}</div>
    </div>
  );
}

function StudentAchievementsCarousel() {
  const containerRef = useRef();
  const [isPaused, setIsPaused] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [cardWidth, setCardWidth] = useState(300);
  const [visibleCards, setVisibleCards] = useState(3);
  const sectionRef = useRef();
  const inView = useInViewOnce(sectionRef, { threshold: 0.1 });

  // Responsive visible cards
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
        setCardWidth(260);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
        setCardWidth(260);
      } else {
        setVisibleCards(3);
        setCardWidth(300);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    if (!inView || isPaused) return;
    const interval = setInterval(() => {
      if (!containerRef.current) return;
      const totalWidth = cardWidth * STUDENT_ACHIEVEMENTS.length;
      let nextScroll = containerRef.current.scrollLeft + 1.5;
      if (nextScroll >= totalWidth) {
        nextScroll = 0;
      }
      containerRef.current.scrollLeft = nextScroll;
      setScrollLeft(nextScroll);
    }, 16);
    return () => clearInterval(interval);
  }, [isPaused, inView, cardWidth]);

  // Pause on hover/touch
  const pause = () => setIsPaused(true);
  const resume = () => setIsPaused(false);

  // Manual scroll
  const scrollBy = (dir) => {
    if (!containerRef.current) return;
    const amount = cardWidth * (visibleCards === 1 ? 1 : visibleCards - 1);
    containerRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  // Touch/swipe support
  useEffect(() => {
    let startX = 0;
    let scrollStart = 0;
    const el = containerRef.current;
    if (!el) return;
    const onTouchStart = (e) => {
      pause();
      startX = e.touches[0].clientX;
      scrollStart = el.scrollLeft;
    };
    const onTouchMove = (e) => {
      const dx = startX - e.touches[0].clientX;
      el.scrollLeft = scrollStart + dx;
    };
    const onTouchEnd = () => {
      resume();
    };
    el.addEventListener('touchstart', onTouchStart);
    el.addEventListener('touchmove', onTouchMove);
    el.addEventListener('touchend', onTouchEnd);
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [containerRef, cardWidth]);

  // Duplicate cards for seamless looping
  const cards = [...STUDENT_ACHIEVEMENTS, ...STUDENT_ACHIEVEMENTS];

  return (
    <section
      ref={sectionRef}
      className={`py-16 bg-background transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-2" style={{ fontSize: 48 }}>Individual Student Achievements</h2>
          <div className="text-lg md:text-xl text-gray-600 mb-4">Our toppers and their proud scores</div>
        </div>
        <div className="relative">
          {/* Left Arrow */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full border border-gray-200 hover:bg-accent hover:text-primary transition-colors hidden sm:flex"
            style={{ background: '#fff' }}
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
            tabIndex={0}
          >
            <svg width="28" height="28" fill="none" stroke="#004AAD" strokeWidth="2"><path d="M18 6l-8 8 8 8" /></svg>
          </button>
          {/* Carousel */}
          <div
            ref={containerRef}
            className="flex overflow-x-auto no-scrollbar py-4"
            style={{ scrollBehavior: 'smooth' }}
            onMouseEnter={pause}
            onMouseLeave={resume}
            onTouchStart={pause}
            onTouchEnd={resume}
          >
            {cards.map((student, idx) => (
              <StudentAchievementCard key={student.id + '-' + idx} student={student} />
            ))}
          </div>
          {/* Right Arrow */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full border border-gray-200 hover:bg-accent hover:text-primary transition-colors hidden sm:flex"
            style={{ background: '#fff' }}
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
            tabIndex={0}
          >
            <svg width="28" height="28" fill="none" stroke="#004AAD" strokeWidth="2"><path d="M10 6l8 8-8 8" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}



function AchievementCard({ achievement }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{achievement.icon}</div>
        <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-bold">
          {achievement.year}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-primary mb-3 font-montserrat">{achievement.title}</h3>
      <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
    </div>
  );
}

function TestimonialModal({ testimonial, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative animate-fade-in" onClick={e => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-20 h-20 rounded-full object-cover border-4 border-accent" 
            />
            <div>
              <h3 className="text-xl font-bold text-primary font-montserrat">{testimonial.name}</h3>
              <p className="text-gray-600 font-medium">{testimonial.course}</p>
              <div className="flex gap-1 mt-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} width="16" height="16" fill="#FFD700" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-primary mb-2">Student Testimonial:</h4>
            <p className="text-gray-700 leading-relaxed italic">"{testimonial.message}"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialCard({ testimonial, onCardClick }) {
  // Safety check for undefined testimonial
  if (!testimonial) {
    return null;
  }

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border border-gray-100 hover:border-accent"
      onClick={onCardClick}
    >
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-20 h-20 rounded-full object-cover border-4 border-accent flex-shrink-0" 
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary font-montserrat">{testimonial.name}</h3>
            <p className="text-gray-600 font-medium text-sm">{testimonial.course}</p>
            <div className="flex gap-1 mt-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} width="16" height="16" fill="#FFD700" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <p className="text-gray-700 leading-relaxed italic">"{testimonial.shortMessage}"</p>
        </div>
        
        <div className="text-right">
          <span className="text-sm text-gray-500">Click to read full testimonial</span>
        </div>
      </div>
    </div>
  );
}

function AchievementsSection() {
  const sectionRef = useRef();
  const inView = useInViewOnce(sectionRef, { threshold: 0.1 });
  return (
    <section
      ref={sectionRef}
      className={`py-16 bg-[#F9F9F9] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-4">Our Achievements</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">Celebrating our students' and academy's milestones</p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map(achievement => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const sectionRef = useRef();
  const inView = useInViewOnce(sectionRef, { threshold: 0.1 });
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Calculate how many groups of 4 testimonials we have
  const testimonialsPerGroup = 4;
  const totalGroups = Math.ceil(TESTIMONIALS.length / testimonialsPerGroup);

  // Get current group of testimonials
  const getCurrentTestimonials = () => {
    const startIndex = currentGroupIndex * testimonialsPerGroup;
    return TESTIMONIALS.slice(startIndex, startIndex + testimonialsPerGroup);
  };

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentGroupIndex((prev) => (prev + 1) % totalGroups);
        setIsTransitioning(false);
      }, 300); // Half of transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, [inView, totalGroups]);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
  };

  // Manual navigation functions
  const goToNextGroup = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentGroupIndex((prev) => (prev + 1) % totalGroups);
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrevGroup = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentGroupIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section
      ref={sectionRef}
      className={`py-16 bg-white transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-4">What Our Students Say</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600">Hear from our successful students</p>
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mb-8">
          {Array.from({ length: totalGroups }, (_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentGroupIndex(index);
                  setIsTransitioning(false);
                }, 300);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentGroupIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={goToPrevGroup}
            className="bg-white shadow-lg p-3 rounded-full border border-gray-200 hover:bg-accent hover:text-primary transition-colors"
            aria-label="Previous testimonials"
          >
            <svg width="24" height="24" fill="none" stroke="#004AAD" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          
          <div className="text-sm text-gray-500">
            {currentGroupIndex + 1} of {totalGroups}
          </div>
          
          <button
            onClick={goToNextGroup}
            className="bg-white shadow-lg p-3 rounded-full border border-gray-200 hover:bg-accent hover:text-primary transition-colors"
            aria-label="Next testimonials"
          >
            <svg width="24" height="24" fill="none" stroke="#004AAD" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
        
        {/* Testimonials Grid */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-opacity duration-600 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {getCurrentTestimonials().map(testimonial => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              onCardClick={() => openModal(testimonial)} 
            />
          ))}
        </div>
        
        <TestimonialModal 
          testimonial={selectedTestimonial} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      </div>
    </section>
  );
}



export default function Achievements() {
  return (
    <div className="font-poppins bg-background text-text min-h-screen">
      <Helmet>
      <title>Achievements & Student Success | Modulus Science Academy Sangvi Pune</title>

<meta name="description" content="Discover the academic achievements, top results, and student success stories at Modulus Science Academy Sangvi Pune. See NEET, JEE, MHT-CET toppers and testimonials from our achievers." />

<meta name="keywords" content="Modulus Science Academy Achievements, NEET toppers Pune, MHT-CET results Sangvi, JEE toppers Pune, student success stories, coaching classes results Pune, top coaching academy in Pune" />

<meta name="author" content="Modulus Science Academy" />

<meta property="og:title" content="Achievements & Success Stories | Modulus Science Academy Sangvi, Pune" />
<meta property="og:description" content="Explore our outstanding student results, NEET, CET, JEE toppers, and testimonials at Modulus Science Academy Sangvi Pune." />
<meta property="og:url" content="https://modulusscienceacademy.in/achievements" />
<meta property="og:type" content="website" />
<meta property="og:image" content="src/assets/logo.png" />

<link rel="canonical" href="https://modulusscienceacademy.in/achievements" />
      </Helmet>
      <Header />
      <AchievementsSection />
      <StudentAchievementsCarousel />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
