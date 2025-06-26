import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Mentors', href: '/mentor' },
  { name: 'Achievements', href: '/achievements' },
  { name : 'Gallery' , href : '/gallery'},
  { name: 'Contact', href: '/contact' },
  { name: 'Blog' , href: '/#blog'}
];

const COURSES = [
  {
    id: 1,
    title: '9th & 10th SSC/CBSE/ICSE',
    classes: '9th & 10th Standard',
    subjects: ['Mathematics', 'Science', 'English', 'Social Studies'],
    fee: '₹30,000/year',
    duration: 'April to March',
    description: 'Comprehensive foundation course preparing students for board exams and future competitive tests. Strong focus on core subjects with regular assessments and doubt clearing sessions.'
  },
  {
    id: 2,
    title: '11th & 12th Science (PCMB)',
    classes: '11th & 12th Standard',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    fee: '₹40,000/year',
    duration: 'April to February',
    description: 'Advanced science stream preparation covering all core subjects required for medical and engineering entrance exams. Includes practical sessions and mock tests.'
  },
  {
    id: 3,
    title: 'JEE (Mains) Crash Course',
    classes: '12th Standard & Droppers',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    fee: '₹25,000',
    duration: 'January to April',
    description: 'Intensive crash course for JEE Mains preparation. Focused on important topics, previous year questions, and extensive practice with mock tests.'
  },
  {
    id: 4,
    title: 'NEET Crash Course',
    classes: '12th Standard & Droppers',
    subjects: ['Physics', 'Chemistry', 'Biology'],
    fee: '₹25,000',
    duration: 'January to April',
    description: 'Specialized crash course for NEET medical entrance exam. Comprehensive coverage of biology with physics and chemistry fundamentals.'
  },
  {
    id: 5,
    title: 'MHT-CET Preparation',
    classes: '12th Standard',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    fee: '₹35,000/year',
    duration: 'April to May',
    description: 'Focused preparation for Maharashtra CET engineering and medical entrance exams. State-specific syllabus coverage with regular assessments.'
  },
  {
    id: 6,
    title: 'Foundation Course (6th-8th)',
    classes: '6th to 8th Standard',
    subjects: ['Mathematics', 'Science', 'English'],
    fee: '₹20,000/year',
    duration: 'April to March',
    description: 'Early foundation building for young students. Develops strong basics in core subjects through interactive learning methods.'
  }
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const handleApplyClick = () => {
    navigate('/courses');
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
              <button className="bg-accent text-primary font-bold px-5 py-2 rounded shadow hover:bg-yellow-400 transition-colors" onClick={handleApplyClick}>Apply Now</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function ApplyModal({ course, isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [fade, setFade] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setFade(true);
      setForm({ name: '', phone: '', email: '', message: '' });
      setTouched({});
      setSubmitted(false);
    } else {
      setTimeout(() => setFade(false), 300);
    }
  }, [isOpen]);
  if (!isOpen && !fade) return null;
  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };
  const handleBlur = e => {
    setTouched(t => ({ ...t, [e.target.name]: true }));
  };
  const validate = () => {
    return {
      name: !form.name.trim(),
      phone: !form.phone.trim() || !/^\d{7,15}$/.test(form.phone.trim()),
    };
  };
  const errors = validate();
  const isValid = !errors.name && !errors.phone;
  const handleSubmit = e => {
    e.preventDefault();
    setTouched({ name: true, phone: true });
    if (!isValid) return;
    setSubmitted(true);
    // Demo: log to console
    console.log({ ...form, course: course?.title });
  };
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      <div
        className={`relative bg-white rounded-2xl md:rounded-2xl shadow-xl w-full max-w-lg mx-4 p-8 transition-all duration-300 font-poppins animate-fade-in ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        style={{ borderRadius: 16, maxWidth: 600 }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors"
          aria-label="Close modal"
        >
          <svg width="24" height="24" fill="none" stroke="#004AAD" strokeWidth="2"><path d="M6 6l12 12M6 18L18 6" /></svg>
        </button>
        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold text-primary mb-2 font-montserrat text-center">Apply for {course?.title}</h2>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name && touched.name ? 'border-red-400' : 'border-gray-300'} focus:ring-2 focus:ring-primary focus:border-transparent transition-colors`}
                  placeholder="Enter your full name"
                  style={{ fontFamily: 'Poppins, Montserrat, sans-serif' }}
                />
                {errors.name && touched.name && <div className="text-red-500 text-xs mt-1">Full Name is required</div>}
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${errors.phone && touched.phone ? 'border-red-400' : 'border-gray-300'} focus:ring-2 focus:ring-primary focus:border-transparent transition-colors`}
                  placeholder="Enter your phone number"
                  style={{ fontFamily: 'Poppins, Montserrat, sans-serif' }}
                />
                {errors.phone && touched.phone && <div className="text-red-500 text-xs mt-1">Valid phone number is required</div>}
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Email (optional)</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                  style={{ fontFamily: 'Poppins, Montserrat, sans-serif' }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Message / Query (optional)</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  rows={4}
                  placeholder="Your message or query..."
                  style={{ fontFamily: 'Poppins, Montserrat, sans-serif' }}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#004AAD] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-[#FFD700] hover:text-[#004AAD] transition-all duration-300 transform hover:scale-105"
                style={{ fontFamily: 'Poppins, Montserrat, sans-serif', marginTop: 16 }}
              >
                Submit Application
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <svg width="64" height="64" fill="#FFD700" viewBox="0 0 24 24" className="mb-4"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            <div className="text-2xl font-bold text-primary mb-2 font-montserrat text-center">Thank you!</div>
            <div className="text-lg text-gray-700 text-center">We'll get back to you soon.</div>
          </div>
        )}
      </div>
    </div>
  );
}

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

function CourseCard({ course, onApply, onCardClick, animate, delay }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (animate) {
      const timeout = setTimeout(() => setShow(true), delay);
      return () => clearTimeout(timeout);
    } else {
      setShow(false);
    }
  }, [animate, delay]);

  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border border-gray-100
        transition-all duration-700
        ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      onClick={onCardClick}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2 font-montserrat">{course.title}</h3>
          <p className="text-gray-600 font-medium">{course.classes}</p>
        </div>
        
        <div>
          <h4 className="text-lg font-bold text-primary mb-2">Subjects Covered:</h4>
          <div className="flex flex-wrap gap-2">
            {course.subjects.map(subject => (
              <span key={subject} className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {subject}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {/* <div>
            <h4 className="text-lg font-bold text-primary mb-1">Fee Structure:</h4>
            <p className="text-gray-700 font-semibold">{course.fee}</p>
          </div> */}
          <div>
            <h4 className="text-lg font-bold text-primary mb-1">Duration:</h4>
            <p className="text-gray-700">{course.duration}</p>
          </div>
        </div>
        
        <button
          onClick={e => {
            e.stopPropagation();
            onApply(course);
          }}
          className="w-full bg-[#FFD700] text-[#004AAD] font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-[#004AAD] hover:text-[#FFD700] transition-all duration-300 transform hover:scale-105 font-montserrat"
          style={{ marginTop: 8 }}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}

function CoursesSection() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef();
  const inView = useInView(sectionRef, { threshold: 0.1 });

  const openModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCourse(null), 300);
  };

  return (
    <section className="py-16 bg-[#F9F9F9]" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-4">Our Courses</h1>
          <p className="text-lg md:text-xl text-gray-600">Find the right program for you.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course, idx) => (
            <CourseCard
              key={course.id}
              course={course}
              onCardClick={() => openModal(course)}
              onApply={openModal}
              animate={inView}
              delay={inView ? idx * 150 : 0}
            />
          ))}
        </div>
        
        <ApplyModal
          course={selectedCourse}
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

export default function Courses() {
  return (
    <div className="font-poppins bg-background text-text min-h-screen">
      <Header />
      <CoursesSection />
      <Footer />
    </div>
  );
}
