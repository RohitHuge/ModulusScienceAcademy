import React, { useState, useRef, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../assets/logo.png';
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

// function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const navigate = useNavigate();
//   const handleApplyClick = () => {
//     navigate('/courses');
//   };

//   return (
//     <header className="sticky top-0 z-30 bg-white shadow-sm">
//       <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 md:py-3">
//         <Link to="/" className="flex items-center gap-2">
//           <span className="inline-block w-12 h-12 bg-primary rounded-md flex items-center justify-center overflow-hidden">
//             <img src={logo} alt="MSA Logo" className="w-10 h-10 object-contain" />
//           </span>
//           <span className="font-montserrat font-bold text-lg text-primary hidden md:inline">Modulus Science Academy</span>
//         </Link>
//         <ul className="hidden lg:flex gap-6 font-medium text-text">
//           {NAV_LINKS.map(link => (
//             <li key={link.name}>
//               <Link to={link.href} className={`hover:text-primary transition-colors ${link.active ? 'text-primary font-bold underline underline-offset-8' : ''}`}>{link.name}</Link>
//             </li>
//           ))}
//         </ul>
//         <button onClick={handleApplyClick} className="hidden lg:inline-block bg-accent text-primary font-bold px-5 py-2 rounded shadow hover:bg-yellow-400 transition-colors">Apply Now</button>
//         <button className="lg:hidden ml-2" onClick={() => setMobileOpen(v => !v)} aria-label="Open menu">
//           <svg width="28" height="28" fill="none" stroke="#004AAD" strokeWidth="2"><path d="M4 8h20M4 16h20M4 24h20" /></svg>
//         </button>
//         {mobileOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setMobileOpen(false)}>
//             <div className="absolute right-0 top-0 w-64 bg-white h-full shadow-lg p-6 flex flex-col gap-6 animate-slide-in-right">
//               <button className="self-end mb-2" onClick={() => setMobileOpen(false)} aria-label="Close menu">
//                 <svg width="24" height="24" fill="none" stroke="#004AAD" strokeWidth="2"><path d="M6 6l12 12M6 18L18 6" /></svg>
//               </button>
//               <ul className="flex flex-col gap-4 text-lg font-medium">
//                 {NAV_LINKS.map(link => (
//                   <li key={link.name}><Link to={link.href}>{link.name}</Link></li>
//                 ))}
//               </ul>
//               <button className="bg-accent text-primary font-bold px-5 py-2 rounded shadow hover:bg-yellow-400 transition-colors" onClick={handleApplyClick}>Apply Now</button>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }

function HeroSection() {
  return (
    <section className="py-20 bg-primary flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">Get in Touch with Us</h1>
      <p className="text-lg md:text-xl text-white/90 font-medium">We'd love to hear from you and answer any questions you may have</p>
    </section>
  );
}

function ContactDetails() {
  const ref = useRef();
  const inView = useInViewOnce(ref, { threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl shadow-lg p-8 border border-gray-100 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
    >
      <h2 className="text-2xl font-bold text-primary mb-6 font-montserrat">Contact Information</h2>
      
      <div className="space-y-6">
        {/* Address */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
            <svg width="24" height="24" fill="#004AAD" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary mb-2">Address</h3>
            <p className="text-gray-700 leading-relaxed">
              Saraswati Park, Vinayak Nagar,<br />
              Mayur Nagari Road, Katepuram Chowk,<br />
              New Sangvi, Pune, Maharashtra
            </p>
          </div>
        </div>

        {/* Phone Numbers */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
            <svg width="24" height="24" fill="#004AAD" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary mb-2">Phone Numbers</h3>
            <div className="space-y-2">
              <a href="tel:+918999930804" className="block text-gray-700 hover:text-primary transition-colors">
                +91 89999 30804
              </a>
              <a href="tel:+917798902221" className="block text-gray-700 hover:text-primary transition-colors">
                +91 77989 02221
              </a>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
            <svg width="24" height="24" fill="#004AAD" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary mb-2">Email</h3>
            <a href="mailto:msasangvi25@gmail.com" className="text-gray-700 hover:text-primary transition-colors">
              msasangvi25@gmail.com
            </a>
          </div>
        </div>

        {/* Business Hours */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
            <svg width="24" height="24" fill="#004AAD" viewBox="0 0 24 24">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary mb-2">Business Hours</h3>
            <p className="text-gray-700">
              Monday - Saturday: 8:00 AM - 8:00 PM<br />
              Sunday: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const ref = useRef();
  const inView = useInViewOnce(ref, { threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // For now, we'll just open the email client
    const subject = 'Contact Form Submission from Modulus Science Academy';
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    window.location.href = `mailto:msasangvi25@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl shadow-lg p-8 border border-gray-100 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <h2 className="text-2xl font-bold text-primary mb-6 font-montserrat">Send us a Message</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
            placeholder="Tell us how we can help you..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

function GoogleMap() {
  const ref = useRef();
  const inView = useInViewOnce(ref, { threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
    >
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-primary font-montserrat">Our Location</h2>
        <p className="text-gray-600 mt-2">Find us at Saraswati Park, Vinayak Nagar</p>
      </div>
      <div className="h-80 md:h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.732666036576!2d73.81217337595761!3d18.586087367168144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9ddd8d5ce95%3A0x4e03963d0e177a1b!2sModulus%20Science%20Academy!5e0!3m2!1sen!2sus!4v1750845055678!5m2!1sen!2sus" 
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Modulus Science Academy Location"
        ></iframe>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <ContactDetails />
            <ContactForm />
          </div>
          <div>
            <GoogleMap />
          </div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden space-y-8">
          <ContactDetails />
          <GoogleMap />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

// function Footer() {
//   const PHONES = ['+91 89999 30804', '+91 77989 02221'];
  
//   return (
//     <footer className="bg-[#004AAD] text-white py-10">
//       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div>
//           <h3 className="font-bold text-lg mb-2">Contact Us</h3>
//           <p>Modulus Science Academy<br />Saraswati Park, Vinayak Nagar<br />Mayur Nagari Road, Katepuram Chowk<br />New Sangvi, Pune, Maharashtra</p>
//           <p className="mt-2">Phone: {PHONES.join(', ')}</p>
//           <p>Email: info@modulusacademy.com</p>
//         </div>
//         <div>
//           <h3 className="font-bold text-lg mb-2">Quick Links</h3>
//           <ul className="space-y-1">
//             {NAV_LINKS.map(link => (
//               <li key={link.name}><Link to={link.href} className="hover:text-accent transition-colors">{link.name}</Link></li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h3 className="font-bold text-lg mb-2">Follow Us</h3>
//           <div className="flex gap-4 mt-2">
//             <a href="#" aria-label="Instagram" className="hover:text-accent"><svg width="24" height="24" fill="currentColor"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm6.5-1a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg></a>
//             <a href="#" aria-label="Facebook" className="hover:text-accent"><svg width="24" height="24" fill="currentColor"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.019 3.676 9.163 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.324 21.163 22 17.019 22 12z" /></svg></a>
//             <a href="#" aria-label="Twitter" className="hover:text-accent"><svg width="24" height="24" fill="currentColor"><path d="M22.46 6c-.793.352-1.645.59-2.54.698a4.48 4.48 0 001.963-2.475 8.94 8.94 0 01-2.828 1.082A4.48 4.48 0 0016.11 4c-2.485 0-4.5 2.015-4.5 4.5 0 .353.04.697.116 1.025C7.728 9.39 4.1 7.67 1.67 5.149c-.387.664-.61 1.437-.61 2.262 0 1.56.794 2.936 2.003 3.744a4.48 4.48 0 01-2.037-.563v.057c0 2.18 1.55 4.002 3.604 4.418a4.48 4.48 0 01-2.03.077c.573 1.788 2.236 3.09 4.207 3.125A8.98 8.98 0 012 19.54 12.68 12.68 0 008.29 21.5c7.547 0 11.675-6.155 11.675-11.495 0-.175-.004-.349-.012-.522A8.18 8.18 0 0022.46 6z" /></svg></a>
//           </div>
//         </div>
//       </div>
//       <div className="text-center text-sm text-gray-300 mt-8">&copy; {new Date().getFullYear()} Modulus Science Academy. All rights reserved.</div>
//     </footer>
//   );
// }

export default function Contact() {
  return (
    <div className="font-poppins bg-background text-text min-h-screen">
      <Helmet>
      <title>Contact Modulus Science Academy | Best NEET, JEE, CET Coaching in Sangvi Pune</title>

<meta name="description" content="Reach out to Modulus Science Academy Sangvi Pune for NEET, MHT-CET, JEE and board exam coaching inquiries, admissions, and batch details. Call, email, or visit us today." />

<meta name="keywords" content="Contact Modulus Science Academy, NEET coaching Pune contact, MHT-CET classes Sangvi Pune, JEE Mains coaching phone number, coaching enquiry Pune, Modulus Sangvi contact details" />

<meta name="author" content="Modulus Science Academy" />

<meta property="og:title" content="Contact Us | Modulus Science Academy Sangvi, Pune" />
<meta property="og:description" content="Get in touch with Modulus Science Academy Sangvi Pune — for coaching enquiries, NEET/JEE admissions, MHT-CET batch details, and counselling." />
<meta property="og:url" content="https://modulusscienceacademy.in/contact" />
<meta property="og:type" content="website" />
<meta property="og:image" content="src/assets/logo.png" />

<link rel="canonical" href="https://modulusscienceacademy.in/contact" />
      </Helmet>
      <Header />
      <HeroSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
