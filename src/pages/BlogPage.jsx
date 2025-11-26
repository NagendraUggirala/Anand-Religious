import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding the Significance of Vedic Rituals",
      excerpt: "Explore the deep spiritual meaning and scientific basis behind traditional Vedic fire ceremonies and their transformative effects on consciousness.",
      category: "Vedic Wisdom",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "🔥",
    },
    {
      id: 2,
      title: "How Janam Kundali Guides Your Spiritual Journey",
      excerpt: "Discover how your birth chart reveals your life's purpose, karmic patterns, and the most beneficial spiritual practices for your unique path.",
      category: "Astrology",
      date: "March 10, 2024",
      readTime: "7 min read",
      image: "🔮",
    },
    {
      id: 3,
      title: "The Power of Mantras: Science and Spirituality",
      excerpt: "Learn about the vibrational power of Sanskrit mantras and how they create positive changes in your mind, body, and environment.",
      category: "Spiritual Practices",
      date: "March 5, 2024",
      readTime: "6 min read",
      image: "🕉",
    },
    {
      id: 4,
      title: "Special Homams for Specific Life Challenges",
      excerpt: "A comprehensive guide to different types of Homams and how they address specific life situations from health to prosperity.",
      category: "Rituals",
      date: "February 28, 2024",
      readTime: "8 min read",
      image: "✨",
    },
    {
      id: 5,
      title: "Ancestral Wisdom: Why Our Forefathers Performed Rituals",
      excerpt: "Understanding the timeless wisdom of our ancestors and how Vedic practices remain relevant in modern life for peace and prosperity.",
      category: "Vedic Knowledge",
      date: "February 22, 2024",
      readTime: "6 min read",
      image: "📜",
    },
    {
      id: 6,
      title: "Participating in Rituals Remotely: Does It Work?",
      excerpt: "Learn how remote participation in Vedic rituals through live links maintains full spiritual effectiveness regardless of physical distance.",
      category: "Guidance",
      date: "February 18, 2024",
      readTime: "5 min read",
      image: "🌐",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-400/20 rounded-full mix-blend-overlay filter blur-3xl opacity-25"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-3xl">📚</span>
            </div>
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-4 backdrop-blur-sm">
              <span className="text-sm font-semibold text-yellow-300">Vedic Knowledge & Articles</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Vedic Wisdom & Insights
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Explore articles about Vedic traditions, spiritual practices, and timeless wisdom from Sanatan Dharma
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-100 overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-br from-orange-100 to-yellow-50 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                  {post.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors line-clamp-2 text-gray-800">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </div>
                  </div>
                  <button className="w-full bg-orange-50 text-orange-800 py-2 px-4 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors flex items-center justify-center gap-2 group-hover:bg-orange-600 group-hover:text-white">
                    Read More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Load More Articles
            </motion.button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-orange-800 to-orange-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Want to Learn More About Vedic Practices?
            </h2>
            <p className="text-lg text-orange-100 mb-6 max-w-2xl mx-auto">
              Explore our Vedic Knowledge section or book a consultation to understand how these ancient practices can transform your life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/vedic-knowledge"
                className="bg-yellow-500 hover:bg-yellow-600 text-orange-800 px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Vedic Knowledge
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-800 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
