import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Mentor from './pages/mentor'
import Courses from './pages/courses'
import Achievements from './pages/achievements'
import Contact from './pages/contact'
import Gallery from './pages/gallery'
import ModulusScienceAcademyHero from './pagesnotused/Modulus-Science-Academy-Hero'
import Blog from './pages/blog'
import {HelmetProvider} from 'react-helmet-async'
import { Helmet } from 'react-helmet-async'


function App() {

  return (
    <HelmetProvider>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Modulus Science Academy",
            "url": "https://modulusscienceacademy.in",
            "logo": "https://modulusscienceacademy.in/logo.png",
            "description": "Leading coaching institute for NEET, JEE, MHT-CET, and Board exams in Sangvi, Pune. Expert faculty, proven results, and personalized mentoring.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Saraswati Park, Vinayak Nagar, Mayur Nagari Road, Katepuram Chowk",
              "addressLocality": "New Sangvi",
              "addressRegion": "Pune",
              "addressCountry": "IN",
              "postalCode": "411027"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+91-89999-30804",
                "contactType": "customer service",
                "areaServed": "IN"
              },
              {
                "@type": "ContactPoint",
                "telephone": "+91-77989-02221",
                "contactType": "customer service",
                "areaServed": "IN"
              }
            ],
            "email": "msasangvi@gmail.com",
            // "sameAs": [
            //   "https://www.facebook.com/modulusscienceacademy",
            //   "https://www.instagram.com/modulusscienceacademy",
            //   "https://www.linkedin.com/company/modulusscienceacademy"
            // ],
            "foundingDate": "2025",
            "areaServed": {
              "@type": "City",
              "name": "Pune"
            },
            "serviceArea": {
              "@type": "City",
              "name": "Sangvi"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Educational Courses",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Course",
                    "name": "JEE Preparation",
                    "description": "Comprehensive preparation for IIT-JEE Mains & Advanced"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Course",
                    "name": "NEET Preparation",
                    "description": "Expert guidance for NEET medical entrance exams"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Course",
                    "name": "MHT-CET Preparation",
                    "description": "Focused coaching for Maharashtra CET engineering/medical"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Course",
                    "name": "SSC/CBSE/ICSE Board Preparation",
                    "description": "Strong foundation for board exams and future competitive tests"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "150"
            }
          })}
        </script>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/modulus-science-academy-hero" element={<ModulusScienceAcademyHero />} />
        <Route path="/about" element={<About />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
