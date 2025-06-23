import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Mentors', href: '/mentor' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog' , href: '/#blog'}
];

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
  {
    id: 4,
    title: '15+ NEET Qualifiers 2024',
    description: 'Multiple students successfully qualified for medical entrance examination.',
    year: '2024',
    icon: '🏥'
  },
  {
    id: 5,
    title: '95% Average in Class 12 Science',
    description: 'Exceptional academic performance across all science stream subjects.',
    year: '2024',
    icon: '📊'
  },
  {
    id: 6,
    title: 'Regional Science Olympiad Winners',
    description: 'Students won multiple awards in regional science competitions and olympiads.',
    year: '2024',
    icon: '🥇'
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Aarav Mehta',
    course: 'JEE Advanced 2023',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    message: 'Modulus Science Academy transformed my approach to JEE preparation. The mentors here are exceptional and the structured approach helped me secure 99.2 percentile. The doubt clearing sessions were game-changing!',
    shortMessage: 'The mentors here are exceptional and the structured approach helped me secure 99.2 percentile.'
  },
  {
    id: 2,
    name: 'Sneha Patil',
    course: 'NEET 2023',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    message: 'I joined MSA for NEET preparation and it was the best decision. The biology faculty is outstanding and the regular mock tests prepared me perfectly. I scored 98.7% and got into my dream medical college!',
    shortMessage: 'The biology faculty is outstanding and the regular mock tests prepared me perfectly.'
  },
  {
    id: 3,
    name: 'Rohan Desai',
    course: 'MHT-CET 2023',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
    rating: 5,
    message: 'The personalized attention and small batch sizes at MSA made all the difference. My physics concepts improved dramatically and I scored 99.0 percentile in MHT-CET. Highly recommended!',
    shortMessage: 'The personalized attention and small batch sizes made all the difference.'
  },
  {
    id: 4,
    name: 'Priya Nair',
    course: 'SSC Board 2023',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    message: 'MSA helped me build a strong foundation in science and mathematics. The teachers are very supportive and the study material is excellent. I scored 97.5% in my SSC board exams!',
    shortMessage: 'MSA helped me build a strong foundation in science and mathematics.'
  }
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const handleApplyClick = () => {
    window.location.href = 'mailto:info@modulusacademy.com?subject=Achievement%20Inquiry';
  };

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
        <button onClick={handleApplyClick} className="hidden lg:inline-block bg-accent text-primary font-bold px-5 py-2 rounded shadow hover:bg-yellow-400 transition-colors">Apply Now</button>
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
              <button onClick={handleApplyClick} className="bg-accent text-primary font-bold px-5 py-2 rounded shadow hover:bg-yellow-400 transition-colors">Apply Now</button>
            </div>
          </div>
        )}
      </nav>
    </header>
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

function TestimonialCard({ testimonial, onCardClick }) {
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
  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-4">Our Achievements</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">Celebrating our students' and academy's milestones</p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map(achievement => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
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
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-4">What Our Students Say</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {TESTIMONIALS.map(testimonial => (
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

export default function Achievements() {
  return (
    <div className="font-poppins bg-background text-text min-h-screen">
      <Header />
      <AchievementsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
