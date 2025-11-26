import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
  const offerings = [
    {
      title: "Havan & Pooja Based on Birth Chart",
      description: "Personalized rituals based on your Janam Kundali using authentic Vedic principles",
      icon: "🔮"
    },
    {
      title: "Special Homams",
      description: "For deeper healing, prosperity, protection & peace",
      icon: "🔥"
    },
    {
      title: "Online / Live Ritual Participation",
      description: "Join rituals in real-time from anywhere in the world via live link",
      icon: "🌐"
    }
  ];

  const whyChoosePoints = [
    "Rooted in authentic Vedic scriptures",
    "Pure rituals, no shortcuts",
    "Personalized based on Janam Kundali",
    "Global access via live link"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-yellow-400/20 rounded-full mix-blend-overlay filter blur-3xl opacity-25 animate-pulse"></div>
          <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-orange-300/30 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Anand Religious Trust
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-300">
              MAA SENA
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl font-semibold mb-4 text-orange-100">
              Guided by Dharma. Rooted in Vedas. Serving Humanity Through Spiritual Truth.
            </p>
            <p className="text-lg md:text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              A sacred initiative dedicated to preserving the timeless wisdom of Sanatan Dharma and helping individuals worldwide reconnect with authentic Vedic knowledge for clarity, healing, and inner balance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Rituals
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-800 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
              >
                Book a Havan / Pooja
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-orange-800 mb-4">
                Who We Are
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl shadow-lg p-8 md:p-12 border border-orange-200"
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                Anand Religious Trust – MAA SENA is a sacred initiative dedicated to preserving the timeless wisdom of Sanatan Dharma. We believe that every answer—whether spiritual, emotional, financial, marital, or personal—is found in the Vedas.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                Our mission is to reconnect individuals worldwide with authentic Vedic knowledge, helping them experience clarity, healing, and inner balance through sincere guidance, pure rituals, and traditional Vedic practices.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                We serve through truth (Satya), purity (Shuddhata), Dharma, and Seva (service to humanity), ensuring all support is rooted in divine alignment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-orange-800 mb-4">
                What We Offer
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {offerings.map((offering, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-orange-100 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="text-5xl mb-4">{offering.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-orange-800 mb-3">
                    {offering.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {offering.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why MAA SENA Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-orange-800 mb-4">
                Why MAA SENA?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChoosePoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-lg p-6 border border-orange-100 flex items-start"
                >
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    ✓
                  </div>
                  <p className="text-lg font-semibold text-gray-800">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Sections */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-orange-800 mb-4">
                Explore Our Services
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Our Rituals Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <Link
                  to="/services"
                  className="block bg-white rounded-xl shadow-lg p-6 md:p-8 border border-orange-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="text-5xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">🔥</div>
                  <h3 className="text-xl md:text-2xl font-bold text-orange-800 mb-3 text-center group-hover:text-orange-600 transition-colors">
                    Our Rituals
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4 text-center">
                    Discover our authentic Vedic rituals including Havan, Pooja, and Special Homams based on your birth chart.
                  </p>
                  <div className="text-center">
                    <span className="text-orange-600 font-semibold group-hover:text-orange-700">
                      Explore Rituals →
                    </span>
                  </div>
                </Link>
              </motion.div>

              {/* Services Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Link
                  to="/industries"
                  className="block bg-white rounded-xl shadow-lg p-6 md:p-8 border border-orange-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="text-5xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">📜</div>
                  <h3 className="text-xl md:text-2xl font-bold text-orange-800 mb-3 text-center group-hover:text-orange-600 transition-colors">
                    Services
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4 text-center">
                    View our complete service catalog with detailed information about all Vedic services, homams, and consultations.
                  </p>
                  <div className="text-center">
                    <span className="text-orange-600 font-semibold group-hover:text-orange-700">
                      View Services →
                    </span>
                  </div>
                </Link>
              </motion.div>

              {/* Blog Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Link
                  to="/blog"
                  className="block bg-white rounded-xl shadow-lg p-6 md:p-8 border border-orange-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="text-5xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">📚</div>
                  <h3 className="text-xl md:text-2xl font-bold text-orange-800 mb-3 text-center group-hover:text-orange-600 transition-colors">
                    Blog
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4 text-center">
                    Read articles about Vedic wisdom, spiritual practices, and insights from Sanatan Dharma.
                  </p>
                  <div className="text-center">
                    <span className="text-orange-600 font-semibold group-hover:text-orange-700">
                      Read Articles →
                    </span>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-orange-800 to-orange-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Understand Which Ritual is Right for You
            </h2>
            <p className="text-lg text-orange-100 mb-6 max-w-2xl mx-auto">
              Not sure which ritual would be most beneficial? Book a consultation and let our Vedic experts guide you based on your birth chart.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Request Consultation
              </Link>
              <Link
                to="/how-it-works"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-800 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Learn How It Works
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
