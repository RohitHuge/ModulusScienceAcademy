import React, { useState, useRef, useEffect } from 'react';
// import logo from '../assets/logo.png';
// import { Link, useNavigate } from 'react-router-dom';
import sandipsir from '../assets/sandipsir.profilephoto.webp';
import { Header, Footer } from './home';
import { Helmet } from 'react-helmet-async';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Mentors', href: '/mentor' },
  { name: 'Achievements', href: '/achievements' },
  { name : 'Gallery' , href : '/gallery'},
  { name: 'Contact', href: '/contact' },
  { name: 'Blog' , href: '/#blog'},
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

// function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const navigate = useNavigate();
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
//         <button className="hidden lg:inline-block bg-accent text-primary font-bold px-5 py-2 rounded shadow hover:bg-yellow-400 transition-colors" onClick={() => navigate('/courses')}>Apply Now</button>
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
//               <button className="bg-accent text-primary font-bold px-5 py-2 rounded shadow hover:bg-yellow-400 transition-colors" onClick={() => navigate('/courses')}>Apply Now</button>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }

function HeroBanner() {
  return (
    <section className="relative w-full h-[400px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1200&q=80)' }}>
      <div className="absolute inset-0 bg-primary opacity-70"></div>
      <div className="relative z-10 flex flex-col items-center text-center text-white w-full">
        <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4 drop-shadow-lg mt-12">About Modulus Science Academy</h1>
        <p className="text-lg md:text-2xl font-medium">Engineering MINDS & Medicating SOULS</p>
      </div>
    </section>
  );
}

function Journey() {
  const milestones = [
    { year: '2015', title: 'Founded', desc: 'MSA was established with a vision to empower students in science.', img: 'https://randomuser.me/api/portraits/men/31.jpg' },
    { year: '2017', title: 'First 100+ Toppers', desc: 'Celebrated our first batch of 100+ toppers in board and entrance exams.', img: 'https://randomuser.me/api/portraits/women/45.jpg' },
    { year: '2020', title: 'Expanded Facilities', desc: 'Opened new state-of-the-art classrooms and labs.', img: 'https://randomuser.me/api/portraits/men/46.jpg' },
    { year: '2023', title: 'National Recognition', desc: 'Recognized as a leading science academy in the region.', img: 'https://randomuser.me/api/portraits/women/47.jpg' },
  ];
  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-10 text-center">Our Journey</h2>
        <div className="relative flex flex-col items-center">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-accent/60 rounded-full -translate-x-1/2 hidden md:block"></div>
          <div className="flex flex-col gap-12 md:gap-0 md:grid md:grid-cols-2 md:items-center">
            {milestones.map((m, i) => (
              <div key={m.year} className={`flex flex-col md:flex-row items-center md:items-start md:justify-${i%2===0?'end':'start'} md:col-start-${i%2===0?1:2} md:col-end-${i%2===0?2:3} md:row-start-${i+1} md:row-end-${i+2} relative z-10`}> 
                <div className="flex flex-col items-center md:items-end md:pr-8 md:pl-0 w-full md:w-auto">
                  <span className="bg-accent text-primary font-bold px-4 py-1 rounded-full mb-2">{m.year}</span>
                  <img src={m.img} alt={m.title} className="w-20 h-20 rounded-full border-4 border-accent mb-2" />
                </div>
                <div className="bg-white rounded-xl shadow p-6 ml-0 md:ml-4 w-full md:w-96">
                  <h3 className="text-xl font-bold text-primary mb-2">{m.title}</h3>
                  <p className="text-text">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MessageFromSandeep() {
  const ref = useRef();
  const inView = useInView(ref, { threshold: 0.2 });
  return (
    <section className={`py-20 bg-gradient-to-br from-blue-50 to-yellow-50 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-4">Message from Sandip Sir</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Enhanced Photo Section */}
          <div className="relative flex-shrink-0">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-primary rounded-full opacity-40"></div>
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-accent rounded-full opacity-50 transform -translate-y-1/2"></div>
              
              {/* Main photo with enhanced styling */}
              <div className="relative">
                <img 
                  src={sandipsir} 
                  alt="Sandeep Sir" 
                  className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-8 border-white shadow-2xl transform hover:scale-105 transition-all duration-300" 
                  style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
                />
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-primary opacity-20 blur-xl transform scale-110"></div>
              </div>
            </div>
            
            {/* Floating badge */}
            {/* <div className="absolute -bottom-2 -right-2 bg-white rounded-full px-4 py-2 shadow-lg border-2 border-accent">
              <span className="text-sm font-bold text-primary">Founder & Director</span>
            </div> */}
          </div>
          
          {/* Enhanced Content Section */}
          <div className="flex-1 space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-accent relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full transform translate-x-16 -translate-y-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-1 bg-accent rounded-full"></div>
                  <span className="text-accent font-semibold text-lg">Our Vision</span>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At <span className="font-bold text-primary">Modulus Science Academy</span>, we believe every student has unique potential waiting to be unlocked. Our mission is to nurture curiosity, foster critical thinking, and provide unwavering support throughout their academic journey.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We focus on <span className="font-semibold text-primary">holistic development</span>, not just academic excellence. Our dedicated faculty is committed to guiding students through every challenge, celebrating every success, and instilling a lifelong love for learning.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We are proud of our toppers, but prouder still of the <span className="font-semibold text-primary">values and confidence</span> our students carry forward into their future endeavors.
                </p>
                
                <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl p-4 border-l-4 border-accent">
                  <p className="text-lg text-gray-800 font-medium italic">
                    "Join us and experience a community where teachers are mentors, and every student is family."
                  </p>
                </div>
                
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-8 h-1 bg-primary rounded-full"></div>
                  <span className="text-xl font-montserrat font-bold text-primary">Sandip Sir</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  const ref = useRef();
  const inView = useInView(ref, { threshold: 0.15 });
  return (
    <section
      ref={ref}
      className={`py-16 bg-white transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border-l-4 border-accent pl-6 bg-[#FFFBEA] rounded-xl shadow p-6 flex flex-col items-start">
          <span className="text-3xl mb-2">🎯</span>
          <h3 className="text-xl font-bold text-primary mb-2">Our Mission</h3>
          <p className="text-text">To empower students with knowledge, skills, and values to excel in science and life. We strive to create a nurturing environment that inspires curiosity and achievement.</p>
        </div>
        <div className="border-l-4 border-accent pl-6 bg-[#FFFBEA] rounded-xl shadow p-6 flex flex-col items-start">
          <span className="text-3xl mb-2">🌟</span>
          <h3 className="text-xl font-bold text-primary mb-2">Our Vision</h3>
          <p className="text-text">To be a leading science academy recognized for academic excellence, innovation, and holistic student development, shaping future leaders and thinkers.</p>
        </div>
      </div>
    </section>
  );
}

function CoreValues() {
  const ref = useRef();
  const inView = useInView(ref, { threshold: 0.15 });
  const values = [
    { icon: '🤝', title: 'Integrity', desc: 'We uphold honesty and strong moral principles in all our actions.' },
    { icon: '💡', title: 'Innovation', desc: 'We encourage creative thinking and embrace new ideas in education.' },
    { icon: '🎓', title: 'Excellence', desc: 'We strive for the highest standards in teaching and learning.' },
    { icon: '🌱', title: 'Growth', desc: 'We foster continuous improvement and personal development.' },
    { icon: '👨‍🏫', title: 'Mentorship', desc: 'We believe in the power of guidance and support.' },
    { icon: '🌏', title: 'Community', desc: 'We build a supportive and inclusive learning environment.' },
  ];
  return (
    <section
      ref={ref}
      className={`py-16 bg-[#F9F9F9] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-10 text-center">Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={v.title} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-l-4 border-accent hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <span className="text-4xl mb-2">{v.icon}</span>
              <h3 className="text-lg font-bold text-primary mb-2">{v.title}</h3>
              <p className="text-text">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  const ref = useRef();
  const inView = useInView(ref, { threshold: 0.15 });
  const items = [
    { icon: '🔬', title: 'Scientific Temper', desc: 'We nurture curiosity and a spirit of inquiry in every student.' },
    { icon: '🧠', title: 'Critical Thinking', desc: 'We encourage analysis, reasoning, and problem-solving skills.' },
    { icon: '🤗', title: 'Empathy', desc: 'We value understanding and compassion in our academic community.' },
  ];
  return (
    <section
      ref={ref}
      className={`py-16 bg-primary transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-accent mb-10 text-center">Educational Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={item.title} className="bg-[#003366] rounded-xl shadow p-6 flex flex-col items-center text-center border-l-4 border-accent hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <span className="text-4xl mb-2">{item.icon}</span>
              <h3 className="text-lg font-bold text-accent mb-2">{item.title}</h3>
              <p className="text-white">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FacilitiesGallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', caption: 'Modern Classroom' },
    { src: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80', caption: 'Science Lab' },
    { src: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80', caption: 'Library' },
    { src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', caption: 'Study Area' },
    { src: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=600&q=80', caption: 'Computer Lab' },
    { src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', caption: 'Recreation Room' },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-10 text-center">Facilities Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <div key={img.caption} className="group relative rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 cursor-pointer">
              <img src={img.src} alt={img.caption} className="aspect-video w-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm py-2 px-3 text-center">{img.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementsRecognition() {
  const ref = useRef();
  const inView = useInView(ref, { threshold: 0.1 });
  const items = [
    { icon: '🏆', title: 'Top Results', desc: 'Consistent record of toppers in JEE, NEET, and board exams.' },
    { icon: '🎖️', title: 'Awards', desc: 'Recognized by educational bodies for excellence.' },
    { icon: '📈', title: 'Growth', desc: 'Rapidly growing student community and alumni network.' },
  ];
  return (
    <section className={`py-16 bg-[#F9F9F9] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-10 text-center">Achievements & Recognition</h2>
        <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
          {items.map((item, i) => (
            <div key={item.title} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-l-4 border-accent hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer w-full md:w-1/3 flex-1 min-h-[260px]">
              <span className="text-4xl mb-2">{item.icon}</span>
              <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-text">{item.desc}</p>
            </div>
          ))}
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

export default function About() {
  return (
    <div className="font-poppins bg-background text-text">
      <Helmet>
      <title>About Modulus Science Academy | Leading NEET, CET, JEE Coaching in Sangvi Pune</title>

<meta name="description" content="Learn about Modulus Science Academy, Sangvi's trusted coaching center for NEET, MHT-CET, JEE, and Board exams. Meet our mentors, explore our vision, values, and academic achievements." />

<meta name="keywords" content="About Modulus Science Academy, Coaching classes in Pune, NEET coaching Sangvi, MHT-CET coaching Sangvi, Best JEE classes Pune, Modulus Academy Pune" />

<meta name="author" content="Modulus Science Academy" />

<meta property="og:title" content="About Modulus Science Academy | Sangvi's Premier Coaching Institute" />
<meta property="og:description" content="Explore the journey, mission, and academic excellence of Modulus Science Academy, Sangvi Pune — your trusted destination for NEET, CET, JEE, and Board exam coaching." />
<meta property="og:url" content="https://modulusscienceacademy.in/about" />
<meta property="og:type" content="website" />
<meta property="og:image" content="src/assets/logo.png" />

<link rel="canonical" href="https://modulusscienceacademy.in/about" />
      </Helmet>
      <Header />
      <HeroBanner />
      {/* <Journey /> */}
      <MessageFromSandeep />
      <MissionVision />
      <CoreValues />
      <Philosophy />
      {/* <FacilitiesGallery /> */}
      <AchievementsRecognition />
      <Footer />
    </div>
  );
}
