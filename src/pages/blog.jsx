import React, { useEffect, useRef, useState } from 'react';
import { Header, Footer } from './home';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogPosts';

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-accent hover:text-primary transition-colors duration-300"
      aria-label="Scroll to top"
    >
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
    </button>
  ) : null;
}

const Blog = () => {
  const postRefs = useRef([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('animate-fade-in-up');
            el.classList.remove('opacity-0', 'translate-y-8');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );
    postRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog | Modulus Science Academy | Expert NEET, CET & JEE Tips</title>
        <meta name="description" content="Read expert articles, exam tips, study hacks, and academic advice from Modulus Science Academy Sangvi Pune. Stay updated with NEET, JEE, and MHT-CET preparation strategies." />
        <meta name="keywords" content="Modulus Science Academy blog, NEET study tips, MHT-CET exam advice, JEE preparation blogs, coaching tips Sangvi Pune, study hacks Pune, academic success blog" />
        <meta name="author" content="Modulus Science Academy" />
        <meta property="og:title" content="Modulus Science Academy Blog | Exam Tips, Coaching Advice & Study Guides" />
        <meta property="og:description" content="Explore expert-written blogs on NEET, MHT-CET, JEE, and SSC/CBSE board exam strategies, study hacks, and coaching tips from Modulus Science Academy Sangvi Pune." />
        <meta property="og:url" content="https://modulusscienceacademy.in/blog" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://modulusscienceacademy.in/blog" />
      </Helmet>

      <Header />

      <main className="bg-gray-50 min-h-screen pb-20 pt-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Our <span className="text-black">Latest Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Expert strategies, study hacks, and success stories to help you ace your exams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {BLOG_POSTS.map((post, idx) => (
              <article
                key={post.id}
                ref={el => (postRefs.current[idx] = el)}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 opacity-0 translate-y-8 flex flex-col h-full overflow-hidden group border border-gray-100"
              >
                <Link to={`/blog/${post.id}`} className="block relative overflow-hidden h-56">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                    {post.date}
                  </div>
                </Link>

                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <Link to={`/blog/${post.id}`} className="group-hover:text-primary transition-colors">
                    <h2 className="text-xl font-bold text-gray-800 mb-3 leading-snug line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mb-6 flex-grow line-clamp-3 leading-relaxed text-sm">
                    {post.shortDescription}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-primary font-semibold text-sm hover:text-accent transition-colors group/link"
                    >
                      Read Article
                      <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <ScrollToTopButton />
      </main>

      <Footer />
    </>
  );
};

export default Blog;
