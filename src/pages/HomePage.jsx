import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IconStars, IconFlame, IconWorld } from "@tabler/icons-react";
import { Flame } from "lucide-react";
import { FileText, BookOpen } from "lucide-react";



const HomePage = () => {


  const offerings = [
    {
      title: "Havan & Pooja Based on Birth Chart",
      description: "Personalized rituals based on your Janam Kundali using authentic Vedic principles to ensure spiritual functions and blessings flow directly to you",
      icon: (
        <div className="flex justify-center mb-2">
          < IconStars className="w-10 h-10 text-purple-600" />
        </div>
      ),
    },
    {
      title: "Special Homams",
      description: "For deeper healing, prosperity, protection & peace through focused Vedic fire rituals that channel divine blessings and remove obstacles from your life path",
      icon: (
        <div className="flex justify-center mb-2">
          <IconFlame className="w-10 h-10 text-red-600" />
        </div>
      ),
    },
    {
      title: "Online / Live Ritual Participation",
      description: "Join sacred rituals in real-time from anywhere in the world via live link, allowing you to receive blessings and spiritual energy directly regardless of physical location",
      icon: (
        <div className="flex justify-center mb-2">
          <IconWorld className="w-10 h-10 text-blue-600" />
        </div>
      ),
    },
  ];


  const whyChoosePoints = [
    "Rooted in authentic Vedic scriptures",
    "Pure rituals, no shortcuts",
    "Personalized based on Janam Kundali",
    "Global access via live link"
  ];
  const testimonials = [
  {
    text: "The birth chart analysis and havan performed by MAA SENA brought immense peace and positivity in my life. Highly recommended!",
    name: "Ravi Kumar",
    location: "Delhi, India",
    initials: "RK"
  },
  {
    text: "I participated in the live homam from the USA. The energy was palpable even through the screen. Thank you for the blessings.",
    name: "Priya Shah",
    location: "New York, USA",
    initials: "PS"
  },
  {
    text: "Authentic Vedic rituals and pure intentions. My family has found a new level of harmony after their services.",
    name: "Anil Sharma",
    location: "Mumbai, India",
    initials: "AS"
  }
];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-amber-400 overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2070&q=80")'

          }}
        ></div>

        {/* Dark Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-amber-900/75"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-amber-400/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-25 animate-pulse"></div>
          <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-amber-300/25 rounded-full mix-blend-soft-light filter blur-3xl opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Anand Religious Trust
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-amber-300 drop-shadow-lg">
              MAA SENA
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl font-semibold mb-4 text-amber-100 drop-shadow">
              Guided by Dharma. Rooted in Vedas. Serving Humanity Through Spiritual Truth.
            </p>
            <p className="text-lg md:text-xl text-amber-100 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow">
              A sacred initiative dedicated to preserving the timeless wisdom of Sanatan Dharma and helping individuals worldwide reconnect with authentic Vedic knowledge for clarity, healing, and inner balance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Explore Rituals
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-amber-800 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
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
                Anand Religious Trust – MAA SENA is a sacred mission dedicated to preserving the timeless wisdom
                of Sanatan Dharma and offering simple solutions to life's challenges through authentic Vedic knowledge.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                Our mission is to help individuals access spiritual resources through authentic Vedic foundations,
                discovering how through spiritual vision and faith, each person can achieve harmony, prosperity,
                and spiritual significance in their lives.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                We serve with complete discipline and devotion, guiding individuals toward a life of harmony,
                purity, and Dharma through the divine scriptures passed down by our ancestors.
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
                  <div className="text-center group">
                    <div className="mb-4 flex justify-center">
                      <Flame className="w-12 h-12 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>

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
                  <div className="text-center group">
                    <div className="mb-4 flex justify-center">
                      <FileText className="w-12 h-12 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>

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
                  <div className="text-center group">
                    <div className="mb-4 flex justify-center">
                      <BookOpen className="w-12 h-12 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>

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
                  </div>

                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Add this after "Why MAA SENA" section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-orange-50 to-amber-50">
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
                Personalized Guidance Based on Your Birth Chart
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-orange-200"
              >
                <h3 className="text-xl md:text-2xl font-bold text-orange-800 mb-4">
                  Discover Your Spiritual Path
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At MAA SENA, we study your birth chart (Janam Kundali) through authentic Vedic principles
                  to determine the most beneficial rituals for your spiritual well-being and prosperity.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our primary actions are carefully chosen based on your unique astrological configuration,
                  ensuring that spiritual functions and blessings flow directly to you and your family.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm mr-3 mt-1 flex-shrink-0">✓</div>
                    <span className="text-gray-700">Personalized ritual recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm mr-3 mt-1 flex-shrink-0">✓</div>
                    <span className="text-gray-700">Based on authentic Vedic astrology</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm mr-3 mt-1 flex-shrink-0">✓</div>
                    <span className="text-gray-700">Global participation via live streaming</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-orange-600 rounded-xl shadow-lg p-6 md:p-8 text-white"
              >
                <h3 className="text-xl md:text-2xl font-bold text-amber-200 mb-4">
                  Benefits You Receive
                </h3>
                <div className="space-y-6 mt-auto">
                  {[
                    {
                      number: "1",
                      title: "Spiritual Protection",
                      desc: "Removes negative energies and strengthens divine shielding around you and your family."
                    },
                    {
                      number: "2",
                      title: "Improved Planetary Alignment",
                      desc: "Balances malefic influences and enhances beneficial planetary effects."
                    },
                    {
                      number: "3",
                      title: "Emotional Healing",
                      desc: "Helps release stress, past burdens, and cultivates deep inner peace."
                    },
                    {
                      number: "4",
                      title: "Blessings for Health & Longevity",
                      desc: "Promotes vitality and divine protection for your physical and mental well-being."
                    },

                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-orange-800 font-bold mr-4 mt-1 flex-shrink-0">
                        {item.number}
                      </div>
                      <div>
                        <h4 className="font-bold text-amber-200 mb-1">{item.title}</h4>
                        <p className="text-amber-100 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

        {/* // Testimonials Section */}
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
          What People Say
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Testimonial cards */}
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 border border-orange-100"
          >
            <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-orange-800 font-bold mr-4">
                {testimonial.initials}
              </div>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Quick CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-slate-50 to-blue-50">
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
            <p className="text-lg s mb-6 max-w-2xl mx-auto">
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
                className="border-2 hover:bg-white hover:text-orange-800 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
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
