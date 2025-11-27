import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileEdit, Orbit, Sparkles, CalendarCheck, Flame, HandHeart } from "lucide-react";

const HowItWorksPage = () => {

  const steps = [
    {
      number: 1,
      title: "Share your Details",
      description: "Provide your birth details (date, time, place), current concerns, and your intention for seeking the ritual.",
      icon: <FileEdit className="w-10 h-10 text-orange-600" />
    },
    {
      number: 2,
      title: "Vedic Analysis",
      description: "Our learned priests perform a detailed Kundali reading using authentic Vedic principles to understand your planetary positions and their influences.",
      icon: <Orbit className="w-10 h-10 text-indigo-500" />
    },
    {
      number: 3,
      title: "Recommended Ritual",
      description: "Based on the analysis, we recommend which specific Havan, Homam, or Pooja will be most beneficial for you and explain why.",
      icon: <Sparkles className="w-10 h-10 text-yellow-500" />
    },
    {
      number: 4,
      title: "Ritual Booking & Preparation",
      description: "We finalize the date, time, required items, and your preferred participation format (online or offline). All preparations are made with devotion.",
      icon: <CalendarCheck className="w-10 h-10 text-blue-500" />
    },
    {
      number: 5,
      title: "Ritual Execution",
      description: "The sacred ritual is performed by experienced Vedic priests in your Name and Gotram, with complete adherence to traditional practices.",
      icon: <Flame className="w-10 h-10 text-red-500" />
    },
    {
      number: 6,
      title: "Post-Ritual Guidance",
      description: "Receive guidance on what to do after the ritual, how to maintain spiritual alignment, and practices to continue the positive energy flow.",
      icon: <HandHeart className="w-10 h-10 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="relative py-16 md:py-20 
        bg-gradient-to-br from-yellow-800 via-yellow-800 to-yellow-900 
        overflow-hidden">

        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1608889175123-64a69b3ba97e?auto=format&fit=crop&w=2070&q=80")`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              How <span className="text-yellow-300">It Works</span>
            </h1>
            <p className="text-lg md:text-xl text-yellow-100 leading-relaxed">
              A transparent, step-by-step process to guide you through your spiritual journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* STEPS SECTION */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-yellow-800 mb-4">
              Your Journey in Six Simple Steps
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-12">

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                items-center gap-6 md:gap-10`}
              >

                {/* ICON */}
                <div className="flex-shrink-0">
                  <div className="relative group">

                    {/* FLOATING ANIMATION */}
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="w-24 h-24 bg-white shadow-2xl rounded-full border border-yellow-200
                      flex items-center justify-center 
                      group-hover:shadow-yellow-400/50 
                      transition-all duration-500 backdrop-blur"
                    >
                      {step.icon}
                    </motion.div>

                    {/* NUMBER BUBBLE */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-700 
                    rounded-full flex items-center justify-center text-white font-bold shadow-xl
                    group-hover:bg-yellow-600 transition-all"
                    >
                      {step.number}
                    </div>

                  </div>
                </div>

                {/* CONTENT */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 220, damping: 15 }}
                  className={`flex-1 bg-white rounded-xl shadow-xl p-6 md:p-8 border 
                  border-yellow-100 
                  bg-gradient-to-br from-white to-yellow-50/40
                  hover:from-yellow-50 hover:to-orange-50
                  hover:shadow-2xl hover:border-yellow-300
                  transition-all duration-500
                  ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-yellow-800 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-2xl md:text-3xl font-bold text-yellow-800 mb-8"
          >
            Why Trust Our Process?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {[
              {
                title: "Authentic Vedic Principles",
                description: "All analysis follows traditional Vedic scriptures and time-tested methods"
              },
              {
                title: "Experienced Priests",
                description: "Performed by learned Vedic priests with years of experience"
              },
              {
                title: "Personalized Approach",
                description: "Each ritual is customized based on your unique birth chart"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-yellow-50 to-white border border-yellow-200 
                rounded-xl shadow-lg p-6 text-center hover:shadow-xl 
                transition-all duration-500"
              >
                <h3 className="text-lg font-bold text-yellow-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Begin?
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Start your spiritual journey today. Share your details and let us guide you to the right ritual.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg 
                font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book a Ritual
              </Link>

              <Link
                to="/services"
                className="border-2 border-yellow-700 text-yellow-900 hover:bg-yellow-700 hover:text-white 
                px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default HowItWorksPage;
