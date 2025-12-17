import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const IndustriesPage = () => {
  const [activeService, setActiveService] = useState('havan');
  const [selectedHomam, setSelectedHomam] = useState(null);

  // Main Vedic Services
 const vedicServices = {
    havan: {
      id: 'havan',
      name: 'हवन',
      englishName: 'Havan & Pooja',
      description: 'Sacred fire ceremonies performed according to Vedic principles for spiritual purification and cosmic harmony',
      benefits: [
        'Purification of environment and consciousness',
        'Removal of negative energies and obstacles',
        'Promotion of peace and prosperity',
        'Healing of physical and mental ailments',
        'Spiritual evolution and karmic cleansing'
      ],
      process: [
        'Birth Chart Analysis (Janam Kundali)',
        'Determination of Appropriate Rituals',
        'Preparation of Sacred Materials',
        'Performance with Vedic Mantras',
        'Prasad Distribution and Blessings'
      ],
      duration: '1-3 hours',
      requirements: ['Full birth details', 'Gotram (if known)', 'Specific intentions'],
      image: '/images/havan-service.jpg',
      icon: '🪔' // Diya lamp symbol
    },
    homam: {
      id: 'homam',
      name: 'होम',
      englishName: 'Special Homams',
      description: 'Powerful Vedic fire rituals for specific purposes and intentions, performed with complete Vedic authenticity',
      benefits: [
        'Targeted solutions for specific life challenges',
        'Powerful planetary influences harmonization',
        'Deep spiritual transformation',
        'Manifestation of specific desires',
        'Protection from negative influences'
      ],
      process: [
        'Detailed Consultation and Need Assessment',
        'Selection of Appropriate Homam',
        'Arrangement of Specific Materials',
        'Performance by Qualified Priests',
        'Post-Ritual Guidance and Follow-up'
      ],
      duration: '2-4 hours',
      requirements: ['Complete birth details', 'Specific purpose', 'Date and time preferences'],
      image: '/images/homam-service.jpg',
      icon: '✨' // Sparkles symbol
    },
    consultation: {
      id: 'consultation',
      name: 'परामर्श',
      englishName: 'Vedic Consultation',
      description: 'Personalized guidance based on Vedic astrology and spiritual wisdom for life challenges and decisions',
      benefits: [
        'Clarity on life purpose and direction',
        'Understanding of karmic patterns',
        'Guidance for important decisions',
        'Remedies for specific problems',
        'Spiritual growth roadmap'
      ],
      process: [
        'Detailed Birth Chart Analysis',
        'Life Situation Assessment',
        'Remedies and Solutions Discussion',
        'Personalized Practice Recommendations',
        'Follow-up Support'
      ],
      duration: '60-90 minutes',
      requirements: ['Accurate birth details', 'Specific questions', 'Openness to guidance'],
      image: '/images/consultation-service.jpg',
      icon: '🔮' // Crystal ball symbol
    }
  };
  // Special Homams with Detailed Information
  const specialHomams = [
    {
      id: 'mahamrityunjaya',
      name: 'महामृत्युंजय होम',
      englishName: 'Mahamrityunjaya Homam',
      purpose: 'Health, Longevity & Healing',
      description: 'Powerful homam dedicated to Lord Shiva for overcoming health challenges, extending lifespan, and spiritual liberation',
      benefits: [
        'Healing from chronic diseases',
        'Protection from accidents and untimely death',
        'Mental peace and emotional stability',
        'Spiritual growth and liberation',
        'Removal of fear and anxiety'
      ],
      recommendedFor: [
        'Serious health challenges',
        'Surgery or medical procedures',
        'Addiction recovery',
        'Mental health issues',
        'Spiritual seekers'
      ],
      duration: '3-4 hours',
      specialRequirements: ['White flowers', 'Bilva leaves', 'Raw milk', 'Sandalwood'],
      mantras: 'Mahamrityunjaya Mantra - 125,000 repetitions'
    },
    {
      id: 'laxmi-kubera',
      name: 'लक्ष्मी कुबेर होम',
      englishName: 'Laxmi Kubera Homam',
      purpose: 'Wealth & Prosperity',
      description: 'Sacred fire ceremony for attracting wealth, abundance, and financial stability through divine blessings',
      benefits: [
        'Financial abundance and stability',
        'Business growth and success',
        'Removal of financial obstacles',
        'Wise wealth management',
        'Prosperity consciousness'
      ],
      recommendedFor: [
        'Business owners and entrepreneurs',
        'Financial difficulties',
        'Career advancement',
        'New ventures',
        'Wealth preservation'
      ],
      duration: '2-3 hours',
      specialRequirements: ['Gold items', 'Lotus flowers', 'Saffron', 'Coins'],
      mantras: 'Laxmi Mantras and Kubera Mantras'
    },
    {
      id: 'sudarshan',
      name: 'सुदर्शन होम',
      englishName: 'Sudarshan Homam',
      purpose: 'Protection & Removal of Obstacles',
      description: 'Powerful homam dedicated to Lord Vishnu for protection from negative energies and removal of obstacles',
      benefits: [
        'Protection from enemies and negative forces',
        'Removal of black magic and evil eye',
        'Clearing life path obstacles',
        'Mental peace and security',
        'Spiritual protection'
      ],
      recommendedFor: [
        'Facing enemies or competition',
        'Legal problems',
        'Black magic concerns',
        'Career obstacles',
        'Relationship challenges'
      ],
      duration: '3-4 hours',
      specialRequirements: ['Tulsi leaves', 'Chandan', 'Yellow flowers', 'Ghee'],
      mantras: 'Sudarshan Mantra and Vishnu Sahasranama'
    },
    {
      id: 'ganapathi',
      name: 'गणपति होम',
      englishName: 'Ganapathi Homam',
      purpose: 'Success & New Beginnings',
      description: 'Homam dedicated to Lord Ganesha for removing obstacles and ensuring success in new ventures',
      benefits: [
        'Removal of all types of obstacles',
        'Success in new ventures',
        'Wisdom and intelligence',
        'Academic success',
        'Smooth execution of plans'
      ],
      recommendedFor: [
        'New business or project',
        'Academic examinations',
        'Job interviews',
        'Marriage proposals',
        'House warming'
      ],
      duration: '2-3 hours',
      specialRequirements: ['Modak', 'Durva grass', 'Red flowers', 'Coconut'],
      mantras: 'Ganapathi Atharvashirsha and Ganesha Mantras'
    },
    {
      id: 'vastu',
      name: 'वास्तु शांति होम',
      englishName: 'Vastu Shanti Homam',
      purpose: 'Home & Workplace Harmony',
      description: 'Ceremony for harmonizing energies in homes and workplaces according to Vastu principles',
      benefits: [
        'Harmonization of space energies',
        'Peace and prosperity in home',
        'Removal of negative vibrations',
        'Improved relationships',
        'Business success'
      ],
      recommendedFor: [
        'New home or office',
        'Vastu defects correction',
        'Peace in family',
        'Business premises',
        'Property disputes'
      ],
      duration: '3-4 hours',
      specialRequirements: ['Vastu plan', 'Soil from property', 'Grains', 'Water from property'],
      mantras: 'Vastu Purusha Mantras and Peace Chants'
    },
    {
      id: 'navagraha',
      name: 'नवग्रह होम',
      englishName: 'Navagraha Homam',
      purpose: 'Planetary Harmony',
      description: 'Comprehensive homam for balancing all nine planetary influences and mitigating malefic effects',
      benefits: [
        'Balancing planetary influences',
        'Reduction of karmic debts',
        'Overall life improvement',
        'Health and relationship benefits',
        'Spiritual progress'
      ],
      recommendedFor: [
        'Planetary doshas in birth chart',
        'Saturn or Mars period',
        'Multiple life challenges',
        'Spiritual advancement',
        'General well-being'
      ],
      duration: '4-5 hours',
      specialRequirements: ['Nine grains', 'Nine gems', 'Nine fabrics', 'Nine flowers'],
      mantras: 'Navagraha Mantras for all nine planets'
    }
  ];

  // Vedic Consultation Services
  const consultationServices = [
    {
      type: 'Birth Chart Analysis',
      duration: '60 minutes',
      focus: 'Comprehensive life reading based on Janam Kundali',
      includes: [
        'Planetary positions and influences',
        'Dasha periods analysis',
        'Life purpose and career guidance',
        'Relationship compatibility',
        'Remedies and solutions'
      ]
    },
    {
      type: 'Muhurta Selection',
      duration: '45 minutes',
      focus: 'Auspicious timing for important events',
      includes: [
        'Marriage date selection',
        'Business inauguration',
        'House warming ceremony',
        'Travel muhurta',
        'Important decisions timing'
      ]
    },
    {
      type: 'Remedial Solutions',
      duration: '75 minutes',
      focus: 'Personalized remedies for specific problems',
      includes: [
        'Gemstone recommendations',
        'Mantra and meditation practices',
        'Ritual recommendations',
        'Lifestyle adjustments',
        'Spiritual practices'
      ]
    }
  ];

  // Booking Process Steps
  const bookingProcess = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Share your birth details and specific requirements with our Vedic experts',
      duration: '15-30 minutes'
    },
    {
      step: 2,
      title: 'Service Recommendation',
      description: 'Receive personalized recommendations based on your birth chart analysis',
      duration: '24-48 hours'
    },
    {
      step: 3,
      title: 'Schedule & Preparation',
      description: 'Choose convenient date and time, complete necessary preparations',
      duration: '1-3 days'
    },
    {
      step: 4,
      title: 'Ritual Performance',
      description: 'Experience the sacred ritual with live participation option',
      duration: 'Service specific'
    },
    {
      step: 5,
      title: 'Follow-up Guidance',
      description: 'Receive post-ritual guidance and ongoing support',
      duration: 'Ongoing'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-yellow-800 via-yellow-800 to-yellow-900 text-white overflow-hidden">
        <div className="absolute inset-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Complete Service <span className="text-yellow-300">Catalog</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed"
            >
              Detailed information about all our Vedic services, special homams, and consultation offerings
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <p className="text-lg text-orange-100">
                "Every ritual is performed according to ancient Vedic principles, ensuring maximum spiritual benefits and authentic experience"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Services Navigation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">
              All Vedic Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our complete range of authentic Vedic services. Select a service below to view detailed information, benefits, process, and requirements.
            </p>
          </motion.div>

          {/* Service Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.values(vedicServices).map((service) => (
              <motion.button
                key={service.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveService(service.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeService === service.id
                    ? 'bg-yellow-500 text-orange-800 shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
                }`}
              >
                <span className="text-2xl">{service.icon}</span>
                <span>{service.englishName}</span>
              </motion.button>
            ))}
          </div>
          {/* Service Details */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            {Object.values(vedicServices).map((service) => (
              service.id === activeService && (
                <div key={service.id} className="bg-orange-50 rounded-3xl shadow-lg p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                      <h3 className="text-3xl font-bold text-orange-800 mb-4">
                        {service.name} - {service.englishName}
                      </h3>
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-xl font-semibold text-orange-700 mb-3">Key Benefits</h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-yellow-600 mr-2 mt-1">✓</span>
                                <span className="text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-orange-700 mb-3">Process</h4>
                          <ol className="space-y-2">
                            {service.process.map((step, index) => (
                              <li key={index} className="flex items-start">
                                <span className="bg-yellow-500 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                                  {index + 1}
                                </span>
                                <span className="text-gray-700">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                    {/* Right Column */}
                    <div className="space-y-6">
                      <div className="bg-white rounded-2xl p-6 shadow-md">
                        <h4 className="text-xl font-semibold text-orange-800 mb-4">Service Details</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Duration:</span>
                            <span className="font-semibold text-orange-800">{service.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Live Participation:</span>
                            <span className="font-semibold text-green-600">Available</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Language:</span>
                            <span className="font-semibold text-orange-800">Sanskrit & English</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl p-6 shadow-md">
                        <h4 className="text-xl font-semibold text-orange-800 mb-4">Requirements</h4>
                        <ul className="space-y-2">
                          {service.requirements.map((requirement, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-yellow-600 mr-2 mt-1">•</span>
                              <span className="text-gray-700">{requirement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link
                        to="/booking"
                        className="block w-full bg-yellow-500 text-orange-800 text-center py-4 rounded-xl font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Book This Service
                      </Link>
                    </div>
                  </div>
                </div>
              )
            ))}
          </motion.div>
        </div>
      </section>

      {/* Special Homams Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">
              Special Homams
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful Vedic fire ceremonies for specific purposes and life situations
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {specialHomams.map((homam, index) => (
              <motion.div
                key={homam.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedHomam(homam)}
              >
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-orange-800 mb-2">
                      {homam.name}
                    </h3>
                    <p className="text-lg text-orange-600 font-semibold">{homam.englishName}</p>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 text-center">
                    {homam.purpose}
                  </p>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {homam.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>⏱ {homam.duration}</span>
                    <span className="text-yellow-600 font-semibold">Learn More →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Services */}
   <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">
        Vedic Consultation Services
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Personalized guidance from experienced Vedic scholars and astrologers
      </p>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {consultationServices.map((service, index) => (
        <motion.div
          key={service.type}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-6 border border-yellow-200 flex flex-col h-full"
        >
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-orange-800 mb-3">
              {service.type}
            </h3>
            <div className="flex items-center text-gray-600 mb-4">
              <span className="mr-2">⏱</span>
              <span>{service.duration}</span>
            </div>
            <p className="text-gray-700 mb-4">{service.focus}</p>
            <ul className="space-y-2">
              {service.includes.map((item, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-600">
                  <span className="text-yellow-600 mr-2 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Link
            to="/booking"
            className="block w-full bg-yellow-500 text-orange-800 text-center py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300 mt-6"
          >
            Book Consultation
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Booking Process */}
     <section className="py-16 bg-orange-50">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">
        Simple Booking Process
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Easy steps to book your Vedic service and receive divine blessings
      </p>
    </motion.div>
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {bookingProcess.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col"
          >
            <div className="bg-white rounded-2xl shadow-lg p-4 h-56 w-full flex flex-col justify-start items-center text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-orange-800 font-bold text-lg mb-3">
                {step.step}
              </div>
              <h3 className="font-semibold text-orange-800 mb-2 text-sm leading-tight">
                {step.title}
              </h3>
              <p className="text-xs text-gray-600 mb-2 flex-grow leading-relaxed">
                {step.description}
              </p>
              <div className="text-xs text-gray-500 mt-auto">
                ({step.duration})
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Begin Your Spiritual Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the transformative power of authentic Vedic rituals and guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-yellow-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-800 transition-all duration-300 text-lg"
              >
                Book a Service
              </Link>
              <Link
                to="/booking"
                className="border-2 px-8 py-4 rounded-xl font-semibold hover:text-orange-800 transition-all duration-300 text-lg"
              >
                Get Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Homam Detail Modal */}
      {selectedHomam && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-orange-800">
                  {selectedHomam.name} - {selectedHomam.englishName}
                </h3>
                <button
                  onClick={() => setSelectedHomam(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-orange-700 text-lg mb-2">Purpose</h4>
                  <p className="text-gray-700">{selectedHomam.purpose}</p>
                </div>
                <div>
                  <h4 className="font-bold text-orange-700 text-lg mb-2">Description</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedHomam.description}</p>
                </div>
                <div>
                  <h4 className="font-bold text-orange-700 text-lg mb-2">Key Benefits</h4>
                  <ul className="space-y-2">
                    {selectedHomam.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-yellow-600 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-orange-700 text-lg mb-2">Recommended For</h4>
                    <ul className="space-y-1">
                      {selectedHomam.recommendedFor.map((item, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <span className="text-yellow-600 mr-2 mt-1">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-700 text-lg mb-2">Service Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold text-orange-800">{selectedHomam.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Main Mantras:</span>
                        <span className="font-semibold text-orange-800 text-right">{selectedHomam.mantras}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-orange-700 text-lg mb-2">Special Requirements</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedHomam.specialRequirements.map((item, index) => (
                      <span key={index} className="bg-orange-50 px-3 py-1 rounded-full text-sm text-orange-800 border border-orange-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end space-x-4 pt-6">
                  <button
                    onClick={() => setSelectedHomam(null)}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                  <Link
                    to="/booking"
                    onClick={() => setSelectedHomam(null)}
                    className="px-6 py-2 bg-yellow-500 text-orange-800 rounded-lg hover:bg-orange-600 hover:text-white transition-colors font-semibold"
                  >
                    Book This Homam
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
      </div>
      )}
    </div>
  );
};

export default IndustriesPage;