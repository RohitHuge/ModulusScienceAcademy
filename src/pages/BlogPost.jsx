import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header, Footer } from './home';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet-async';
import { BLOG_POSTS } from '../data/blogPosts';

const BlogPost = () => {
    const { id } = useParams();
    const post = BLOG_POSTS.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <>
                <Header />
                <div className="min-h-screen flex items-center justify-center flex-col bg-gray-50 px-4">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
                    <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
                    <Link to="/blog" className="bg-primary text-white px-6 py-3 rounded-full hover:bg-accent transition-colors">
                        Back to Blog
                    </Link>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Helmet>
                <title>{post.title} | Modulus Science Academy</title>
                <meta name="description" content={post.shortDescription} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.shortDescription} />
                <meta property="og:image" content={post.image} />
                <meta property="og:url" content={`https://modulusscienceacademy.in/blog/${post.id}`} />
                <meta property="og:type" content="article" />
                <link rel="canonical" href={`https://modulusscienceacademy.in/blog/${post.id}`} />
            </Helmet>

            <Header />

            <main className="bg-white min-h-screen pb-20 pt-8">
                <article className="max-w-4xl mx-auto px-4 md:px-6">
                    <div className="mb-8">
                        <Link
                            to="/blog"
                            className="inline-flex items-center text-gray-500 hover:text-primary transition-colors font-medium mb-8 group"
                        >
                            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Insights
                        </Link>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center text-gray-500 text-sm md:text-base border-b border-gray-100 pb-8 mb-8">
                            <span className="bg-gray-100 px-3 py-1 rounded-full font-medium text-gray-700 mr-4">
                                {post.date}
                            </span>
                            <span className="text-gray-400">by Modulus Science Academy</span>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden shadow-lg mb-12 aspect-[16/9] w-full bg-gray-100">
                            <img
                                src={post.image}
                                alt={post.imageAlt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg prose-slate max-w-none 
            prose-headings:font-bold prose-headings:text-gray-900 
            prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-l-4 prose-h2:border-accent prose-h2:pl-4
            prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-primary prose-a:font-semibold hover:prose-a:text-accent prose-a:no-underline
            prose-blockquote:border-l-primary prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
            prose-ul:list-disc prose-ul:pl-6 prose-li:marker:text-accent prose-li:mb-2
            prose-strong:text-gray-900 prose-strong:font-bold
            prose-img:rounded-xl prose-img:shadow-md
            marker:text-accent">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Read More Insights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
                                <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="group block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">{relatedPost.title}</h4>
                                    <div className="text-sm text-gray-500">{relatedPost.date}</div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </article>
            </main>

            <Footer />
        </>
    );
};

export default BlogPost;
