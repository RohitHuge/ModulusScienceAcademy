import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined, CloseOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';

// Sample gallery images - replace with actual coaching photos
const GALLERY_IMAGES = [
  { 
    id: 1, 
    src: 'https://res.cloudinary.com/dapdhzjzc/image/upload/IMG_20250630_211456_jfisjp.jpg', 
    message: 'Personalized Guidance - Students engaged in intensive study sessions' 
  },
  { 
    id: 2, 
    src: 'https://res.cloudinary.com/dapdhzjzc/image/upload/IMG-20250704-WA0026_he6vgj.jpg', 
    message: 'Regular Interaction with Parents - Every Parent is a Teacher' 
  },
  { 
    id: 3, 
    src: 'https://res.cloudinary.com/dapdhzjzc/image/upload/v1767581773/WhatsApp_Image_2026-01-04_at_5.50.24_PM_oqjone.jpg', 
    message: 'Personized Doubt Solving with guidance for the best results' 
  },
  { 
    id: 4, 
    src: 'https://res.cloudinary.com/dapdhzjzc/image/upload/IMG-20250705-WA0045_ocbiu4.jpg', 
    message: 'Regular Mock Tests - To test your knowledge and improve your performance, Giving you a feel of the exam' 
  },
  { 
    id: 5, 
    src: 'https://res.cloudinary.com/dapdhzjzc/image/upload/IMG-20250705-WA0036_z3fvgd.jpg', 
    message: 'Making peer group - Enabling students to learn from each other' 
  },
  { 
    id: 6, 
    src: 'https://res.cloudinary.com/dapdhzjzc/image/upload/IMG-20250705-WA0038_yjywjb.jpg', 
    message: 'Interactive Sessions - To make learning more engaging and effective' 
  },
  { 
    id: 7, 
    src: 'https://res.cloudinary.com/dapdhzjzc/image/upload/v1767581773/WhatsApp_Image_2026-01-04_at_5.50.23_PM_kc0rvh.jpg', 
    message: 'Group discussion on the topic for better understanding and knowledge' 
  },
  { 
    id: 8, 
    src: 'https://res.cloudinary.com/dapdhzjzc/image/upload/IMG-20250705-WA0036_gaje4v.jpg', 
    message: 'Daily practice session and doubt clearing sessions- Enabling students to clear their doubts and improve their performance' 
  },
  { 
    id: 9, 
    src: 'https://res.cloudinary.com/dapdhzjzc/image/upload/IMG-20250704-WA0022_guojah.jpg', 
    message: 'Felicitation Ceremony - Celebrating academic excellence' 
  },
  { 
    id: 10, 
    src: 'https://res.cloudinary.com/dapdhzjzc/image/upload/v1764333890/WhatsApp_Image_2025-11-27_at_12.52.42_PM_huyto2.jpg', 
    message: 'Tree Plantation Drive - Promoting environmental awareness' 
  },
  { 
    id: 11, 
    src: 'https://res.cloudinary.com/dapdhzjzc/image/upload/v1764334095/WhatsApp_Image_2025-11-27_at_1.48.43_PM_nkhkwe.jpg', 
    message: 'Diwali Celebration - Promoting cultural awareness' 
  },
  { 
    id: 12, 
    src: 'https://res.cloudinary.com/dapdhzjzc/image/upload/v1764334095/WhatsApp_Image_2025-11-27_at_12.54.49_PM_wlyvqi.jpg', 
    message: 'Visit to historic sites - Motivating students to learn about history and culture' 
  },
  { 
    id: 13, 
    src: 'https://res.cloudinary.com/dapdhzjzc/image/upload/v1764334265/WhatsApp_Image_2025-11-27_at_12.54.42_PM_jvuqav.jpg', 
    message: 'Exiciting visit to Refresh student and study in calmness' 
  },
  { 
    id: 14, 
    src: 'https://res.cloudinary.com/dapdhzjzc/image/upload/IMG-20250705-WA0042_aqrlvf.jpg', 
    message: 'Guidance sessions from alumni- Enabling understanding from other success and failures' 
  },
   { 
    id: 15, 
    src: 'https://res.cloudinary.com/dapdhzjzc/image/upload/v1767581773/WhatsApp_Image_2026-01-04_at_5.50.21_PM_arsrxy.jpg', 
    message: 'Regular Interaction with Alumni - To take experience guidance and to prepare for their exams' 
  },
  { 
    id: 16, 
    src: 'https://res.cloudinary.com/dapdhzjzc/image/upload/v1764351940/WhatsApp_Image_2025-11-27_at_12.54.50_PM_hrejrk.jpg', 
    message: 'Test Series - To students to prepare for their exams' 
  },
  { 
    id: 17, 
    src: 'https://res.cloudinary.com/dapdhzjzc/image/upload/v1764351940/WhatsApp_Image_2025-11-27_at_12.54.35_PM_bkurjc.jpg', 
    message: 'Result Imporvement Programme - To students to prepare for upcoming Challenges' 
  },
  { 
    id: 18, 
    src: 'https://res.cloudinary.com/dapdhzjzc/image/upload/v1764351940/WhatsApp_Image_2025-11-27_at_12.54.53_PM_mvatxx.jpg', 
    message: 'Our Results Our Pride' 
  },
  
  
 
];

// Auto-scrolling slideshow component
function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideshowRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % GALLERY_IMAGES.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % GALLERY_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? GALLERY_IMAGES.length - 1 : prevIndex - 1
    );
  };

  return (
    <div 
      className="relative w-full h-80 md:h-96 overflow-hidden rounded-xl shadow-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={slideshowRef}
    >
      {/* Slideshow Images */}
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {GALLERY_IMAGES.map((image) => (
          <div key={image.id} className="min-w-full h-full relative">
            <img
              src={image.src}
              alt={image.message}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-lg md:text-xl font-semibold mb-2">{image.message}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hidden md:block"
        aria-label="Previous slide"
      >
        <LeftOutlined />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hidden md:block"
        aria-label="Next slide"
      >
        <RightOutlined />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {GALLERY_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Modal component for image viewer
function ImageModal({ isOpen, image, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      {/* Modal content */}
      <div 
        className="relative z-10 max-w-4xl max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Close modal"
        >
          <CloseOutlined />
        </button>

        {/* Image */}
        <div className="relative">
          <img
            src={image.src}
            alt={image.message}
            className="w-full h-auto max-h-[70vh] object-contain"
          />
        </div>

        {/* Caption */}
        <div className="p-6 bg-gray-50">
          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            {image.message}
          </p>
        </div>
      </div>
    </div>
  );
}

// Gallery grid component
function GalleryGrid({ onImageClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {GALLERY_IMAGES.map((image) => (
        <div
          key={image.id}
          className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          onClick={() => onImageClick(image)}
        >
          <img
            src={image.src}
            alt={image.message}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium line-clamp-2">{image.message}</p>
            </div>
          </div>

          {/* Click indicator */}
          <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to view
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <Helmet>
      <title>Modulus Science Academy Gallery | Student Life & Coaching Events in Pune</title>

<meta name="description" content="View the photo gallery of Modulus Science Academy Sangvi Pune — featuring NEET, MHT-CET, JEE classroom sessions, toppers, workshops, and student achievements." />

<meta name="keywords" content="Modulus Science Academy Gallery, Coaching photos Pune, NEET classes Sangvi, MHT-CET gallery Pune, JEE classes Pune, Student events Sangvi Pune, Coaching event photos, classroom gallery Pune" />

<meta name="author" content="Modulus Science Academy" />

<meta property="og:title" content="Gallery | Modulus Science Academy Sangvi, Pune" />
<meta property="og:description" content="Discover memorable moments from Modulus Science Academy Sangvi Pune — including academic workshops, toppers' felicitation, and coaching events." />
<meta property="og:url" content="https://modulusscienceacademy.in/gallery" />
<meta property="og:type" content="website" />
<meta property="og:image" content="src/assets/logo.png" />

<link rel="canonical" href="https://modulusscienceacademy.in/gallery" />
      </Helmet>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Gallery
          </h1>
          <p className="text-xl md:text-2xl text-yellow-400 font-medium max-w-3xl mx-auto leading-relaxed">
            A glimpse into our coaching life, achievements and activities
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Slideshow Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
            Featured Moments
          </h2>
          <Slideshow />
        </div>

        {/* Gallery Grid Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
            Complete Gallery
          </h2>
          <GalleryGrid onImageClick={handleImageClick} />
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-accent">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Want to be part of our success story?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join Modulus Science Academy and create your own moments of achievement. 
              Our gallery will soon feature your success story too!
            </p>
            <Button
              type="primary"
              size="large"
              className="!rounded-button"
              style={{ backgroundColor: '#004AAD', borderColor: '#004AAD' }}
              onClick={() => window.location.href = '/contact'}
            >
              Get Admission Information
            </Button>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        image={selectedImage}
        onClose={closeModal}
      />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
