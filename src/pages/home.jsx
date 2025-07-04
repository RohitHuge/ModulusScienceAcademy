import React, { useEffect, useRef, useState } from 'react';
import Hero1 from './hero';
// import { Button } from 'antd';
// import { PhoneOutlined } from '@ant-design/icons';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import amitsir from '../assets/amitsir.profilephoto.webp';
import sandipsir from '../assets/sandipsir.profilephoto.webp';
import ramsir from '../assets/ramsir.profilephoto.webp';
import pandharisir from '../assets/pandharisir.profilephoto.webp';
import { Helmet } from 'react-helmet-async';
import { TestimonialCard, TESTIMONIALS, STUDENT_ACHIEVEMENTS } from './achievements';

// Add smooth scroll CSS globally
if (typeof window !== 'undefined') {
  document.documentElement.style.scrollBehavior = 'smooth';
}

// Anchor navigation links for homepage sections
const ANCHOR_LINKS = [
  { name: 'Home', href: '#home', icon: '🏠' },
  { name: 'Courses', href: '#courses', icon: '📚' },
  { name: 'Testimonials', href: '#testimonials', icon: '💬' },
  { name: 'Mentors', href: '#mentors', icon: '👨‍🏫' },
  { name: 'Achievements', href: '#achievements', icon: '🏆' },
  { name: 'Contact', href: '#contact', icon: '📞' },
];

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Mentors', href: '/mentor' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog' , href: '/blog'}
];

const COURSES = [
  {
    title: 'JEE',
    desc: 'Comprehensive preparation for IIT-JEE Mains & Advanced.',
  },
  {
    title: 'NEET',
    desc: 'Expert guidance for NEET medical entrance exams.',
  },
  {
    title: 'MHT-CET',
    desc: 'Focused coaching for Maharashtra CET engineering/medical.',
  },
  {
    title: '9th/10th SSC/CBSE/ICSE',
    desc: 'Strong foundation for board exams and future competitive tests.',
  },
];

const MENTORS = [
  {
    name: 'Pandhari Sir',
    subject: 'Chemistry',
    exp: '12+ Years Exp.',
    img: pandharisir,
  },
  {
    name: 'Amit Sir',
    subject: 'Physics',
    exp: '8+ Years Exp.',
    img: amitsir,
  },
  {
    name: 'Sandip Sir',
    subject: 'Mathematics',
    exp: '8+ Years Exp.',
    img: sandipsir,
  },
  {
    name: 'Ram Sir',
    subject: 'Biology',
    exp: '5+ Years Exp.',
    img: ramsir,
  },
];

const ACHIEVEMENTS = STUDENT_ACHIEVEMENTS;

const PHONES = [
  '+91 89999 30804',
  '+91 77989 02221',
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

function Header({ onApplyClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  // Smooth scroll handler
  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
      }
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 md:py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-block w-12 h-12 bg-primary rounded-md flex items-center justify-center overflow-hidden">
            {/* PNG logo */}
            <img src={logo} alt="MSA Logo" className="w-10 h-10 object-contain" />
          </span>
          <span className="font-montserrat font-bold text-lg text-primary hidden md:inline">Modulus Science Academy</span>
        </Link>
        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-6 font-medium text-text">
          {NAV_LINKS.map(link => (
            <li key={link.name}>
              {link.href.startsWith('#') ? (
                <a href={link.href} onClick={e => handleNavClick(e, link.href)} className="hover:text-primary transition-colors">{link.name}</a>
              ) : (
                <Link to={link.href} className="hover:text-primary transition-colors">{link.name}</Link>
              )}
            </li>
          ))}
        </ul>
        {/* Apply Now Button */}
        <button onClick={onApplyClick} className="hidden lg:inline-block bg-accent text-primary font-bold px-5 py-2 rounded shadow hover:bg-yellow-400 transition-colors">Apply Now</button>
        {/* Hamburger */}
        <button className="lg:hidden ml-2" onClick={() => setMobileOpen(v => !v)} aria-label="Open menu">
          <svg width="28" height="28" fill="none" stroke="#004AAD" strokeWidth="2"><path d="M4 8h20M4 16h20M4 24h20" /></svg>
        </button>
        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setMobileOpen(false)}>
            <div className="absolute right-0 top-0 w-64 bg-white h-full shadow-lg p-6 flex flex-col gap-6 animate-slide-in-right">
              <button className="self-end mb-2" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <svg width="24" height="24" fill="none" stroke="#004AAD" strokeWidth="2"><path d="M6 6l12 12M6 18L18 6" /></svg>
              </button>
              <ul className="flex flex-col gap-4 text-lg font-medium">
                {NAV_LINKS.map(link => (
                  <li key={link.name}>
                    {link.href.startsWith('#') ? (
                      <a href={link.href} onClick={e => handleNavClick(e, link.href)}>{link.name}</a>
                    ) : (
                      <Link to={link.href}>{link.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
              <button onClick={onApplyClick} className="bg-accent text-primary font-bold px-5 py-2 rounded shadow hover:bg-yellow-400 transition-colors">Apply Now</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function AnchorNavigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ANCHOR_LINKS.map(link => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 200; // Offset for header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Show navigation after scrolling down a bit
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Vertical Navigation */}
      <div className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      } hidden lg:block`}>
        <div className="bg-white rounded-full shadow-lg border border-gray-200 p-2">
          <ul className="flex flex-col gap-2">
            {ANCHOR_LINKS.map(link => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    className={`group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#003f8a] text-white shadow-lg scale-110' 
                        : 'bg-gray-50 text-gray-600 hover:bg-[#f2c300] hover:text-[#003f8a] hover:scale-105'
                    }`}
                    title={link.name}
                  >
                    <span className="text-lg">{link.icon}</span>
                    
                    {/* Tooltip */}
                    <div className="absolute right-full mr-3 px-3 py-1 bg-[#003f8a] text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {link.name}
                      <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-[#003f8a] border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                    </div>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -right-1 -top-1 w-3 h-3 bg-[#f2c300] rounded-full border-2 border-white"></div>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Mobile Horizontal Navigation */}
      <div className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } lg:hidden`}>
        <div className="bg-white rounded-full shadow-lg border border-gray-200 px-4 py-2">
          <ul className="flex gap-1">
            {ANCHOR_LINKS.map(link => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    className={`group relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#003f8a] text-white shadow-lg scale-110' 
                        : 'bg-gray-50 text-gray-600 hover:bg-[#f2c300] hover:text-[#003f8a] hover:scale-105'
                    }`}
                    title={link.name}
                  >
                    <span className="text-sm">{link.icon}</span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#f2c300] rounded-full border border-white"></div>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

function Hero({ onApplyClick }) {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 100); }, []);
  return (
    <section className="relative min-h-[100vh] min-w-[100vw] flex items-center justify-center bg-cover bg-center" id="home" >
      <Hero1 />
    </section>
  );
}

function Courses() {
  const ref = useRef();
  const inView = useInView(ref, { threshold: 0.2 });
  const navigate = useNavigate();
  return (
    <section id="courses" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-10 text-center">Our Courses</h2>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {COURSES.map((course, i) => (
            <div key={course.title} className={`bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-accent transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <h3 className="text-xl font-bold mb-2 text-primary">{course.title}</h3>
              <p className="text-base text-text mb-4">{course.desc}</p>
              <button onClick={() => navigate(`/courses`)} className="mt-auto bg-accent text-primary font-bold px-4 py-2 rounded hover:bg-yellow-400 transition-colors">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mentors() {
  const ref = useRef();
  const inView = useInView(ref, { threshold: 0.2 });
  return (
    <section id="mentors" className="py-16 bg-[#f7faff]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-10 text-center">Meet Our Mentors</h2>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {MENTORS.map((mentor, i) => (
            <div key={mentor.name} className={`bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border-l-4 border-primary transition-all duration-700 ${inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{ transitionDelay: `${i * 120}ms` }}>
              <img src={mentor.img} alt={mentor.name} className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-accent" />
              <h3 className="text-lg font-bold text-primary mb-1">{mentor.name}</h3>
              <p className="text-base text-text mb-1">{mentor.subject}</p>
              <p className="text-sm text-gray-500">{mentor.exp} experience</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  const ref = useRef();
  const inView = useInView(ref, { threshold: 0.1 });
  return (
    <section id="achievements" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-10 text-center">Achievements & Toppers</h2>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {ACHIEVEMENTS.map((ach, i) => (
            <div key={ach.name} className={`bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border-b-4 border-accent transition-all duration-700 ${inView ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} style={{ transitionDelay: `${i * 120}ms` }}>
              <span className="text-4xl font-bold text-primary mb-2">{ach.score}</span>
              <h3 className="text-lg font-bold text-primary mb-1">{ach.name}</h3>
              <p className="text-base text-text mb-1">{ach.exam}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const ref = useRef();
  const inView = useInView(ref, { threshold: 0.1 });
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
  };

  return (
    <section className="py-16 bg-white" ref={ref} id="testimonials">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-4">What Our Students Say</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {TESTIMONIALS.map(testimonial => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              onCardClick={() => openModal(testimonial)} 
            />
          ))}
        </div>
        
        {/* Modal */}
        {isModalOpen && selectedTestimonial && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={closeModal}>
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative" onClick={e => e.stopPropagation()}>
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
              
              <div className="flex flex-col items-center text-center">
                <img 
                  src={selectedTestimonial.image} 
                  alt={selectedTestimonial.name} 
                  className="w-32 h-32 min-w-[128px] min-h-[128px] max-w-[128px] max-h-[128px] rounded-full border-4 border-accent mb-4 object-cover" 
                />
                <h3 className="text-2xl font-bold text-primary mb-2 font-montserrat">{selectedTestimonial.name}</h3>
                <div className="text-base text-gray-700 mb-1 font-medium">{selectedTestimonial.course}</div>
                <div className="flex gap-1 mt-1 mb-4">
                  {[...Array(selectedTestimonial.rating)].map((_, i) => (
                    <svg key={i} width="16" height="16" fill="#FFD700" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                
                <div className="w-full">
                  <h4 className="text-lg font-bold text-primary mb-2 text-left">Student Testimonial:</h4>
                  <p className="text-text text-left leading-relaxed">"{selectedTestimonial.message}"</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Contact() {
  const ref = useRef();
  const inView = useInView(ref, { threshold: 0.2 });
  return (
    <section id="contact" className="py-16 bg-[#f7faff]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-10 text-center">Contact Us</h2>
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info and Quote Container */}
          <div className={`flex flex-col space-y-6 transition-all duration-700 ${inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Contact Info Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-accent">
              <h3 className="text-2xl font-bold text-primary mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <svg width="20" height="20" fill="currentColor" className="text-primary">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Address</p>
                    <p className="text-gray-600">Saraswati Park, Vinayak Nagar<br />Mayur Nagari Road, Katepuram Chowk<br />New Sangvi, Pune, Maharashtra</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <svg width="20" height="20" fill="currentColor" className="text-primary">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Phone</p>
                    <div className="space-y-1">
                      {PHONES.map(phone => (
                        <p key={phone} className="text-gray-600">{phone}</p>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <svg width="20" height="20" fill="currentColor" className="text-primary">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Email</p>
                    <p className="text-gray-600">msasangvi@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quote Card */}
            <div className="bg-gradient-to-br from-primary to-blue-700 rounded-xl shadow-lg p-8 text-white relative overflow-hidden flex-1">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">💬</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Why Choose Modulus Science Academy?</h4>
                    <p className="text-blue-100 leading-relaxed">
                      "Education is not preparation for life; education is life itself. At Modulus Science Academy, 
                      we believe in nurturing not just academic excellence, but also character, creativity, and 
                      the courage to dream big."
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/20">
                  <div>
                    <p className="font-semibold text-accent">Our Promise</p>
                    <p className="text-sm text-blue-100">Excellence • Dedication • Success</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-blue-100">Join us in your</p>
                    <p className="font-bold text-accent">Journey to Success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`transition-all duration-700 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-white rounded-xl shadow-lg p-8 border-r-4 border-accent h-full">
              <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                ></textarea>
                <button 
                  type="submit" 
                  className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
              
              {/* Helpful Message */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-accent">
                <div className="flex items-start gap-3">
                  <div className="text-accent text-xl">💡</div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-1">What happens next?</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Our team will review your message and get back to you within 24 hours. 
                      We're here to help with all your academic queries and enrollment questions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdmissionsCTA() {
  const navigate = useNavigate();
  const ref = useRef();
  const inView = useInView(ref, { threshold: 0.1 });
  return (
    <section className="py-10">
      <div ref={ref} className={`max-w-5xl mx-auto px-4 bg-primary rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 text-white shadow-lg transition-all duration-700 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}` }>
        <div className="py-8 md:py-12">
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-2">Admissions Open for 2024-25!</h2>
          <p className="text-lg mb-2">Secure your seat now. Call us:</p>
          <div className="flex flex-col md:flex-row gap-2 md:gap-6">
            {PHONES.map(phone => <span key={phone} className="bg-white/20 px-4 py-1 rounded-full border border-white/30">{phone}</span>)}
          </div>
        </div>
        <button onClick={() => navigate('/courses')} className="bg-accent text-primary font-bold px-8 py-3 rounded shadow-lg text-lg hover:bg-yellow-400 transition-colors mb-6 md:mb-0">Apply Now</button>
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
          <p>Email: msasangvi@gmail.com</p>
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

export { Header, Footer };

export default function Home() {
  const navigate = useNavigate();
  // Redirect to contact page for 'Get Admission Information'
  const handleAdmissionInfo = () => {
    navigate('/contact');
  };
  return (
    <div className="font-poppins bg-background text-text">
      <Helmet>
      <title>Modulus Science Academy | Best Coaching for NEET, JEE, MHT-CET, SSC & CBSE in Pune</title>
  
  <meta name="description" content="Join Modulus Science Academy, Sangvi Pune — expert coaching for NEET, JEE Mains, MHT-CET, and SSC/CBSE board exams. Top faculty, proven results, and personal mentoring." />
  
  <meta name="keywords" content="Modulus Science Academy, MHT-CET Coaching Pune, NEET classes Pune, JEE classes Pune, Best Coaching Sangvi Pune, Modulus Academy Sangvi, Top coaching for board exams Pune" />
  
  <meta name="author" content="Modulus Science Academy" />
  
  <meta property="og:title" content="Modulus Science Academy | Best NEET, JEE & CET Coaching in Sangvi, Pune" />
  <meta property="og:description" content="Modulus Science Academy in Sangvi Pune offers the best coaching for NEET, JEE Mains, MHT-CET, SSC & CBSE with expert faculty and excellent results." />
  <meta property="og:url" content="https://modulusscienceacademy.in/" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="src/assets/logo.png" />
  
  <link rel="canonical" href="https://modulusscienceacademy.in/" />
      </Helmet>
      <Header onApplyClick={handleAdmissionInfo} />
      <AnchorNavigation />
      <Hero onApplyClick={handleAdmissionInfo} />
      <Courses />
      <Testimonials />
      <Mentors />
      <Achievements />
      <Contact />
      <AdmissionsCTA />
      <Footer />
    </div>
  );
}

// Animations
// Add to tailwind.config.js:
// module.exports = { ... , theme: { extend: { keyframes: { 'slide-in-right': { '0%': { transform: 'translateX(100%)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' } }, }, animation: { 'slide-in-right': 'slide-in-right 0.7s ease-out', }, }, }, ... }
