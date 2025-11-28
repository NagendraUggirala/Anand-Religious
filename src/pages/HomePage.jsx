// Full modified Home.jsx
// (Paste this entire file into your project)

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IconStars, IconFlame as TablerFlame, IconWorld } from "@tabler/icons-react";
import { Flame, FileText, BookOpen } from "lucide-react";

const HomePage = () => {
  const offerings = [
    {
      title: "Havan & Pooja Based on Birth Chart",
      description:
        "Personalized rituals based on your Janam Kundali using authentic Vedic principles to ensure spiritual functions and blessings flow directly to you",
      icon: (
        <div className="flex justify-center mb-2">
          <IconStars className="w-12 h-12 text-purple-600" />
        </div>
      ),
    },
    {
      title: "Special Homams",
      description:
        "For deeper healing, prosperity, protection & peace through focused Vedic fire rituals that channel divine blessings and remove obstacles from your life path",
      icon: (
        <div className="flex justify-center mb-2">
          <TablerFlame className="w-12 h-12 text-red-600" />
        </div>
      ),
    },
    {
      title: "Online / Live Ritual Participation",
      description:
        "Join sacred rituals in real-time from anywhere in the world via live link, allowing you to receive blessings and spiritual energy directly regardless of physical location",
      icon: (
        <div className="flex justify-center mb-2">
          <IconWorld className="w-12 h-12 text-blue-600" />
        </div>
      ),
    },
  ];

  const whyChoosePoints = [
    "Rooted in authentic Vedic scriptures",
    "Pure rituals, no shortcuts",
    "Personalized based on Janam Kundali",
    "Global access via live link",
  ];

  const testimonials = [
    {
      text: "The birth chart analysis and havan performed by MAA SENA brought immense peace and positivity in my life. Highly recommended!",
      name: "Ravi Kumar",
      location: "Delhi, India",
      initials: "RK",
    },
    {
      text: "I participated in the live homam from the USA. The energy was palpable even through the screen. Thank you for the blessings.",
      name: "Priya Shah",
      location: "New York, USA",
      initials: "PS",
    },
    {
      text: "Authentic Vedic rituals and pure intentions. My family has found a new level of harmony after their services.",
      name: "Anil Sharma",
      location: "Mumbai, India",
      initials: "AS",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-amber-400 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2070&q=80")',
          }}
        ></div>

        <div className="absolute inset-0 bg-amber-900/70"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-xl tracking-wide">
              Anand Religious Trust
            </h1>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-amber-300 drop-shadow-xl tracking-wide">
              MAA SENA
            </h2>

            <p className="text-xl md:text-2xl font-semibold mb-4 text-amber-100 max-w-3xl mx-auto">
              Guided by Dharma. Rooted in Vedas. Serving Humanity Through Spiritual Truth.
            </p>

            <p className="text-lg md:text-xl text-amber-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              A sacred initiative dedicated to spreading Sanatan Dharma’s timeless wisdom and guiding individuals worldwide through authentic Vedic practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
              >
                Explore Rituals
              </Link>

              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-amber-800 px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105"
              >
                Book a Havan / Pooja
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-3xl md:text-4xl font-bold text-orange-800 mb-6"
          >
            Who We Are
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-orange-50 p-8 md:p-12 rounded-xl shadow-xl border border-orange-200"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              Anand Religious Trust – MAA SENA is committed to preserving ancient Sanatan Dharma wisdom and providing simple spiritual solutions through authentic Vedic rituals and teachings.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              Our purpose is to guide individuals toward clarity, healing, and balanced living through Vedic knowledge, divine rituals, and spiritual discipline.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We carry forward the legacy of Dharma with devotion, ensuring each person receives pure spiritual guidance and blessings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center text-3xl md:text-4xl font-bold text-orange-800 mb-6"
          >
            What We Offer
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map((off, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-orange-100 text-center hover:shadow-xl transition"
              >
                {off.icon}
                <h3 className="text-2xl font-bold text-orange-800 mb-2">{off.title}</h3>
                <p className="text-gray-700">{off.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-orange-800 mb-10">
            Why MAA SENA?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChoosePoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="flex bg-orange-50 p-6 rounded-xl shadow border border-orange-100"
              >
                <div className="w-8 h-8 bg-orange-600 text-white flex items-center justify-center rounded-full mr-4 font-bold">
                  ✓
                </div>
                <p className="text-lg font-semibold text-gray-800">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-orange-800 mb-10">
            Explore Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Rituals */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Link to="/services" className="block bg-white p-8 rounded-xl shadow-md border border-orange-100 hover:shadow-xl transition group">
                <div className="flex justify-center mb-4">
                  <Flame className="w-12 h-12 text-red-600 group-hover:scale-110 transition" />
                </div>
                <h3 className="text-center text-2xl font-bold text-orange-800 mb-3 group-hover:text-orange-600 transition">Our Rituals</h3>
                <p className="text-center text-gray-700 mb-4">Explore Havan, Pooja, and Special Homams based on Vedic principles.</p>
                <p className="text-center text-orange-600 font-semibold">Explore Rituals →</p>
              </Link>
            </motion.div>

            {/* Services */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <Link to="/industries" className="block bg-white p-8 rounded-xl shadow-md border border-orange-100 hover:shadow-xl transition group">
                <div className="flex justify-center mb-4">
                  <FileText className="w-12 h-12 text-blue-600 group-hover:scale-110 transition" />
                </div>
                <h3 className="text-center text-2xl font-bold text-orange-800 mb-3 group-hover:text-orange-600 transition">Services</h3>
                <p className="text-center text-gray-700 mb-4">Full catalog of Vedic rituals, homams, and spiritual services.</p>
                <p className="text-center text-orange-600 font-semibold">View Services →</p>
              </Link>
            </motion.div>

            {/* Blog */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              <Link to="/blog" className="block bg-white p-8 rounded-xl shadow-md border border-orange-100 hover:shadow-xl transition group">
                <div className="flex justify-center mb-4">
                  <BookOpen className="w-12 h-12 text-green-600 group-hover:scale-110 transition" />
                </div>
                <h3 className="text-center text-2xl font-bold text-orange-800 mb-3 group-hover:text-orange-600 transition">Blog</h3>
                <p className="text-center text-gray-700 mb-4">Read articles on Vedic wisdom & spiritual guidance.</p>
                <p className="text-center text-orange-600 font-semibold">Read Articles →</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-orange-800 mb-10">
            What People Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: i * 0.15 }} className="bg-white p-6 rounded-xl shadow border border-orange-100">
                <p className="italic text-gray-600 mb-4">"{t.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-200 text-orange-800 rounded-full flex items-center justify-center font-bold mr-4">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
