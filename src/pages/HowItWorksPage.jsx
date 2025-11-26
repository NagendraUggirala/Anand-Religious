import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HowItWorksPage = () => {
  const steps = [
    {
      number: 1,
      title: "Share your Details",
      description: "Provide your birth details (date, time, place), current concerns, and your intention for seeking the ritual.",
      icon: "📝"
    },
    {
      number: 2,
      title: "Vedic Analysis",
      description: "Our learned priests perform a detailed Kundali reading using authentic Vedic principles to understand your planetary positions and their influences.",
      icon: "🔮"
    },
    {
      number: 3,
      title: "Recommended Ritual",
      description: "Based on the analysis, we recommend which specific Havan, Homam, or Pooja will be most beneficial for you and explain why.",
      icon: "✨"
    },
    {
      number: 4,
      title: "Ritual Booking & Preparation",
      description: "We finalize the date, time, required items, and your preferred participation format (online or offline). All preparations are made with devotion.",
      icon: "📅"
    },
    {
      number: 5,
      title: "Ritual Execution",
      description: "The sacred ritual is performed by experienced Vedic priests in your Name and Gotram, with complete adherence to traditional practices.",
      icon: "🔥"
    },
    {
      number: 6,
      title: "Post-Ritual Guidance",
      description: "Receive guidance on what to do after the ritual, how to maintain spiritual alignment, and practices to continue the positive energy flow.",
      icon: "🙏"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-400/20 rounded-full mix-blend-overlay filter blur-3xl opacity-25"></div>
        </div>
        
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
            <p className="text-lg md:text-xl text-orange-100 leading-relaxed">
              A transparent, step-by-step process to guide you through your spiritual journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
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
                Your Journey in Six Simple Steps
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="space-y-8 md:space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-8`}
                >
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-4xl md:text-5xl">{step.icon}</span>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 md:w-10 md:h-10 bg-orange-800 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base shadow-lg">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className={`flex-1 bg-white rounded-xl shadow-lg p-6 md:p-8 border border-orange-100 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <h3 className="text-xl md:text-2xl font-bold text-orange-800 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Building Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                Why Trust Our Process?
              </h2>
            </motion.div>

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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-lg p-6 border border-orange-100 text-center"
                >
                  <h3 className="text-lg font-bold text-orange-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
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
              Ready to Begin?
            </h2>
            <p className="text-lg text-orange-100 mb-6 max-w-2xl mx-auto">
              Start your spiritual journey today. Share your details and let us guide you to the right ritual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book a Ritual
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-800 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
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

