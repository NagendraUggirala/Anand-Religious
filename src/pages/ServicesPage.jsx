import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IconTarget, IconSparkles, IconBolt } from "@tabler/icons-react";

const ServicesPage = () => {
  const havanBenefits = [
    {
      title: "Relief in specific life areas",
      icon: (
        <div className="flex justify-center mb-2">
          <IconTarget className="w-10 h-10 text-blue-600" />
        </div>
      ),
      description: "Targeted solutions for career, relationships, health, and more"
    },
    {
      title: "Spiritual purification",
      icon: (
        <div className="flex justify-center mb-2">
          <IconSparkles className="w-10 h-10 text-purple-600" />
        </div>
      ),
      description: "Cleanse negative energies and restore spiritual balance"
    },
    {
      title: "Energetic balance",
      icon: (
        <div className="flex justify-center mb-2">
          <IconBolt className="w-10 h-10 text-green-600" />
        </div>
      ),
      description: "Harmonize planetary influences and life energies"
    }
  ];

  const homamTypes = [
    {
      category: "Spiritual Healing Homams",
      description: "For emotional healing, mental peace, and spiritual growth",
      recommended: "Recommended for stress, anxiety, emotional blockages, and seeking inner peace",
      image: "https://tirikala.com/upload/product/KetuHomamV4.webp",
      duration: "2-3 hours",
      benefits: ["Emotional healing", "Mental clarity", "Spiritual growth"]
    },
    {
      category: "Prosperity & Wealth Homams",
      description: "For financial stability, career growth, and abundance",
      recommended: "Recommended for financial difficulties, career obstacles, and seeking prosperity",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf990l3MT2yF8oXaeuXU44HbTBcs8EvZaQkA&s",
      duration: "3-4 hours",
      benefits: ["Financial stability", "Career growth", "Abundance flow"]
    },
    {
      category: "Protection & Peace Homams",
      description: "For protection from negative energies and maintaining harmony",
      recommended: "Recommended for protection, family harmony, and removing obstacles",
      image: "https://panditsnearme.com/_next/image?url=%2Fassets%2Fhoma%2FNavchandi-Homam.webp&w=3840&q=75",
      duration: "2-3 hours",
      benefits: ["Negative energy removal", "Family harmony", "Obstacle clearance"]
    }
  ];

  const participationOptions = [
    {
      type: "With Physical Presence",
      description: "Join us at our sacred location to experience the ritual in person",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAtxKgfpMf-Eo4kaQIflqFzEEzSruHcnYVnQ&s",
      features: [
        "Direct participation in ceremony",
        "Feel the divine energy personally",
        "Witness sacred fire up close",
        "Receive personal blessings"
      ]
    },
    {
      type: "Without Physical Presence (Remote)",
      description: "Participate from anywhere in the world through our live link",
      image: "https://i.guim.co.uk/img/static/sys-images/Admin/BkFill/Default_image_group/2011/4/13/1302706219837/Monk-on-Laptop-007.jpg?width=465&dpr=1&s=none&crop=none",
      features: [
        "Join in real-time from anywhere",
        "See the full ritual live",
        "Experience sacred ceremony remotely",
        "Global access for devotees worldwide"
      ]
    }
  ];

  const ritualProcess = [
    {
      title: "Birth Chart Analysis",
      description: "Our Vedic priests analyze your Janam Kundali using authentic principles",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd9AuyjglTD1JVL_ski0ZabVplQnjA0BtKAg&s"
    },
    {
      title: "Ritual Recommendation",
      description: "Specific Havan or Pooja recommended based on planetary positions",
      image: "https://www.shutterstock.com/image-photo/varanasi-uttar-pradesh-india-2024_11_14-260nw-2549440035.jpg"
    },
    {
      title: "Sacred Performance",
      description: "Ritual performed in your Name and Gotram by experienced priests",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUnYieWxw2SNu9maTJwIqZDuV_ggD2Ix8tEA&s"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-yellow-800 via-yellow-800 to-yellow-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-yellow-400/20 rounded-full mix-blend-overlay filter blur-3xl opacity-25"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-yellow-300">Rituals</span>
            </h1>
            <p className="text-lg md:text-xl text-orange-100 leading-relaxed">
              An overview of our authentic Vedic rituals performed with devotion, based on your Janam Kundali. For detailed service information, visit our Complete Service Catalog.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Havan & Pooja Based on Birth Chart */}
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
                Havan & Pooja Based on Your Birth Chart
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-6 rounded-full"></div>
            </motion.div>

            {/* Process Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {ritualProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full max-w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-orange-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Janam Kundali & Ritual Decision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-orange-100"
              >
                <h3 className="text-xl md:text-2xl font-bold text-orange-800 mb-4">
                  Understanding Janam Kundali
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your Janam Kundali (birth chart) is a sacred map of your life, created based on the exact time, date, and place of your birth. It reveals the positions of planets and their influence on your life's journey.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our Vedic priests analyze your Kundali using authentic principles to identify specific rituals that will bring balance, healing, and positive transformation to your life.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-orange-100"
              >
                <h3 className="text-xl md:text-2xl font-bold text-orange-800 mb-4">
                  How Rituals Are Decided
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Using true Vedic principles, our learned priests determine which specific Havan or Pooja is most beneficial for you based on:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Planetary positions in your birth chart</li>
                  <li>Dasha (planetary periods) analysis</li>
                  <li>Specific life challenges or goals</li>
                  <li>Vedic remedies for planetary influences</li>
                </ul>
              </motion.div>
            </div>

            {/* Ritual Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl shadow-lg p-6 md:p-8 border border-orange-200 mb-8"
            >
              <h3 className="text-xl md:text-2xl font-bold text-orange-800 mb-6 text-center">
                Ritual Performance & Benefits
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-center">
                All rituals are performed in your <strong>Name</strong> and <strong>Gotram</strong> by experienced Vedic priests, ensuring the spiritual energy is directly connected to you and your lineage.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {havanBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-md border border-orange-100 text-center hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-3xl mb-3">{benefit.icon}</div>
                    <h4 className="font-bold text-orange-800 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-6">
                <Link
                  to="/industries"
                  className="inline-block text-orange-600 hover:text-orange-700 font-semibold text-sm"
                >
                  View detailed service information →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Homams */}
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
                Special Homams
              </h2>
              <p className="text-lg text-gray-600 mb-2">
                For deeper healing, prosperity, protection & peace
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {homamTypes.map((homam, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={homam.image}
                      alt={homam.category}
                      className="w-full max-w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {homam.duration}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-orange-800 mb-3">
                      {homam.category}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {homam.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-orange-700 mb-2 text-sm">Key Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {homam.benefits.map((benefit, idx) => (
                          <span
                            key={idx}
                            className="bg-orange-50 text-orange-700 px-2 py-1 rounded text-xs font-medium"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                      <p className="text-sm text-orange-800 font-semibold mb-1">When Recommended:</p>
                      <p className="text-sm text-gray-700">{homam.recommended}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Participation Options */}
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
                Participation Options
              </h2>
              <p className="text-lg text-gray-600">
                Choose how you'd like to participate in the sacred rituals
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mt-4 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {participationOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={option.image}
                      alt={option.type}
                      className="w-full max-w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-orange-800 mb-3">{option.type}</h3>
                    <p className="text-gray-700 mb-4">{option.description}</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {option.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
