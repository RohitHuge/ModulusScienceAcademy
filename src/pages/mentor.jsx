import React, { useRef, useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Mentors', href: '/mentor' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog' , href: '/#blog'}
];

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

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 md:py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-block w-12 h-12 bg-primary rounded-md flex items-center justify-center overflow-hidden">
            <img src={logo} alt="MSA Logo" className="w-10 h-10 object-contain" />
          </span>
          <span className="font-montserrat font-bold text-lg text-primary hidden md:inline">Modulus Science Academy</span>
        </Link>
        <ul className="hidden lg:flex gap-6 font-medium text-text">
          {NAV_LINKS.map(link => (
            <li key={link.name}>
              <Link to={link.href} className={`hover:text-primary transition-colors ${link.active ? 'text-primary font-bold underline underline-offset-8' : ''}`}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <button className="hidden lg:inline-block bg-accent text-primary font-bold px-5 py-2 rounded shadow hover:bg-yellow-400 transition-colors" onClick={() => navigate('/courses')}>Apply Now</button>
        <button className="lg:hidden ml-2" onClick={() => setMobileOpen(v => !v)} aria-label="Open menu">
          <svg width="28" height="28" fill="none" stroke="#004AAD" strokeWidth="2"><path d="M4 8h20M4 16h20M4 24h20" /></svg>
        </button>
        {mobileOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setMobileOpen(false)}>
            <div className="absolute right-0 top-0 w-64 bg-white h-full shadow-lg p-6 flex flex-col gap-6 animate-slide-in-right">
              <button className="self-end mb-2" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <svg width="24" height="24" fill="none" stroke="#004AAD" strokeWidth="2"><path d="M6 6l12 12M6 18L18 6" /></svg>
              </button>
              <ul className="flex flex-col gap-4 text-lg font-medium">
                {NAV_LINKS.map(link => (
                  <li key={link.name}><Link to={link.href}>{link.name}</Link></li>
                ))}
              </ul>
              <button className="bg-accent text-primary font-bold px-5 py-2 rounded shadow hover:bg-yellow-400 transition-colors" onClick={() => navigate('/courses')}>Apply Now</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function HeroSection() {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 100); }, []);
  return (
    <section className={`w-full py-20 bg-primary flex flex-col items-center justify-center text-center transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}` }>
      <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">Our Mentors</h1>
      <p className="text-lg md:text-2xl text-white font-medium">Every Topper Has a Teacher — Meet Yours!</p>
    </section>
  );
}

const MENTORS = [
  {
    name: 'Pandhari Sir',
    img: 'https://randomuser.me/api/portraits/men/31.jpg',
    qualification: 'M.Sc Chem, SET, Ph.D Pursuing',
    subject: 'Chemistry Expert',
    exp: '12+ Years Exp.',
    message: 'Stay consistent and trust your teachers. Chemistry is not just about formulas, it\'s about understanding the world around you.'
  },
  {
    name: 'Amit Sir',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    qualification: 'M.Sc Physics, NET',
    subject: 'Physics Expert',
    exp: '8+ Years Exp.',
    message: 'Physics is the language of the universe. Practice regularly and never hesitate to ask questions. Every great discovery started with curiosity.'
  },
  {
    name: 'Sandip Sir',
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
    qualification: 'M.Sc Maths, SET, B.Ed',
    subject: 'Mathematics Expert',
    exp: '8+ Years Exp.',
    message: 'Mathematics is not about memorizing, it\'s about understanding patterns. Practice daily and build your problem-solving skills step by step.'
  },
  {
    name: 'Ram Sir',
    img: 'https://randomuser.me/api/portraits/men/34.jpg',
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
            className="w-25 h-25 min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px] rounded-full border-4 border-accent mb-4 object-cover" 
          />
          <h3 className="text-2xl font-bold text-primary mb-2 font-montserrat">{mentor.name}</h3>
          <div className="text-base text-gray-700 mb-1 font-medium">{mentor.qualification}</div>
          <div className="text-base text-primary mb-1 font-semibold">{mentor.subject}</div>
          <div className="text-sm text-gray-500 mb-4">{mentor.exp}</div>
          
          <div className="w-full">
            <h4 className="text-lg font-bold text-primary mb-2 text-left">Message to Students:</h4>
            <p className="text-text text-left leading-relaxed">{mentor.message}</p>
          </div>
        </div>
      </div>
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
        {/* Desktop Layout - Vertical List */}
        <div className="hidden lg:block">
          <div className="space-y-8">
            {MENTORS.map((mentor, i) => (
              <div
                key={mentor.name}
                className={`bg-white rounded-xl shadow-lg p-8 flex items-start gap-6 hover:shadow-xl transition-all duration-300
                  transition-all duration-700
                  ${showArr[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 180}ms` }}
              >
                <img
                  src={mentor.img}
                  alt={mentor.name}
                  className="w-20 h-20 min-w-[80px] min-h-[80px] max-w-[80px] max-h-[80px] rounded-full border-4 border-accent object-cover flex-shrink-0"
                />
                <div className="flex-1 flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-1 font-montserrat">{mentor.name}</h3>
                    <div className="text-base text-gray-700 mb-1 font-medium">{mentor.qualification}</div>
                    <div className="text-base text-primary mb-1 font-semibold">{mentor.subject}</div>
                    <div className="text-sm text-gray-500">{mentor.exp}</div>
                  </div>
                  <div className="bg-accent/10 px-6 py-4 rounded-lg border-l-4 border-accent w-3/5 flex-shrink-0 ml-8 min-h-[120px] flex flex-col justify-center">
                    <h4 className="text-lg font-bold text-primary mb-2">Message to Students:</h4>
                    <p className="text-text text-sm leading-relaxed">{mentor.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout - Cards with Modal */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {MENTORS.map((mentor, i) => (
              <div
                key={mentor.name}
                onClick={() => openModal(mentor)}
                className={`bg-white rounded-xl shadow-lg border-l-4 border-accent p-6 flex flex-col items-center text-center transition-all duration-300 cursor-pointer hover:shadow-2xl hover:scale-105
                  transition-all duration-700
                  ${showArr[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ minHeight: 280, transitionDelay: `${i * 180}ms` }}
              >
                <img
                  src={mentor.img}
                  alt={mentor.name}
                  className="w-30 h-30 min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] rounded-full border-4 border-accent mb-4 object-cover"
                />
                <h3 className="text-2xl font-bold text-primary mb-1 font-montserrat">{mentor.name}</h3>
                <div className="text-base text-gray-700 mb-1 font-medium">{mentor.qualification}</div>
                <div className="text-base text-primary mb-1 font-semibold">{mentor.subject}</div>
                <div className="text-sm text-gray-500 mb-2">{mentor.exp}</div>
                <div className="text-sm text-accent font-medium">Tap to read message</div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <MentorModal
          mentor={selectedMentor}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </section>
  );
}

function Footer() {
  const PHONES = ['+91 89999 30804', '+91 77989 02221'];
  
  return (
    <footer className="bg-[#004AAD] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-2">Contact Us</h3>
          <p>Modulus Science Academy<br />Saraswati Park, Vinayak Nagar<br />Mayur Nagari Road, Katepuram Chowk<br />New Sangvi, Pune, Maharashtra</p>
          <p className="mt-2">Phone: {PHONES.join(', ')}</p>
          <p>Email: info@modulusacademy.com</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1">
            {NAV_LINKS.map(link => (
              <li key={link.name}><Link to={link.href} className="hover:text-accent transition-colors">{link.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Instagram" className="hover:text-accent"><svg width="24" height="24" fill="currentColor"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm6.5-1a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg></a>
            <a href="#" aria-label="Facebook" className="hover:text-accent"><svg width="24" height="24" fill="currentColor"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.019 3.676 9.163 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.324 21.163 22 17.019 22 12z" /></svg></a>
            <a href="#" aria-label="Twitter" className="hover:text-accent"><svg width="24" height="24" fill="currentColor"><path d="M22.46 6c-.793.352-1.645.59-2.54.698a4.48 4.48 0 001.963-2.475 8.94 8.94 0 01-2.828 1.082A4.48 4.48 0 0016.11 4c-2.485 0-4.5 2.015-4.5 4.5 0 .353.04.697.116 1.025C7.728 9.39 4.1 7.67 1.67 5.149c-.387.664-.61 1.437-.61 2.262 0 1.56.794 2.936 2.003 3.744a4.48 4.48 0 01-2.037-.563v.057c0 2.18 1.55 4.002 3.604 4.418a4.48 4.48 0 01-2.03.077c.573 1.788 2.236 3.09 4.207 3.125A8.98 8.98 0 012 19.54 12.68 12.68 0 008.29 21.5c7.547 0 11.675-6.155 11.675-11.495 0-.175-.004-.349-.012-.522A8.18 8.18 0 0022.46 6z" /></svg></a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-300 mt-8">&copy; {new Date().getFullYear()} Modulus Science Academy. All rights reserved.</div>
    </footer>
  );
}

export default function Mentors() {
  return (
    <div className="font-poppins bg-background text-text">
      <Header />
      <HeroSection />
      <MentorShowcase />
      <Footer />
    </div>
  );
}
