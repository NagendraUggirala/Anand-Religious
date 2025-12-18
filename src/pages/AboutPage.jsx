import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Star, Globe, Heart } from "lucide-react";
import { BookOpen, Zap, Crown, Globe2 } from "lucide-react";
import { IconOm } from "@tabler/icons-react";
import { IconPray } from "@tabler/icons-react";

const About = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, threshold: 0.3 });
  const isInView2 = useInView(ref2, { once: true, threshold: 0.3 });
  const isInView3 = useInView(ref3, { once: true, threshold: 0.3 });

  const milestones = [
    { year: "1989", title: "Foundation", description: "Anand Imports & Exports established with vision of ethical global trade" },
    { year: "2005", title: "Expansion", description: "Expanded trade network across Asia and Middle East regions" },
    { year: "2014", title: "Consolidation", description: "Unified operations and established strong international partnerships" },
    { year: "2025", title: "Innovation", description: "Launched advanced export solutions and diversified product portfolio" }
  ];

  const values = [
    {
      icon: "🕉",
      title: "Truth (Satya)",
      description: "We stand for absolute truth in all our practices, guidance, and interactions. Every ritual is based on authentic Vedic scriptures."
    },
    {
      icon: "✨",
      title: "Purity (Shuddhata)",
      description: "All our rituals are performed with complete purity - no shortcuts, no compromises. We maintain the highest standards of Vedic authenticity."
    },
    {
      icon: "⚖️",
      title: "Dharma",
      description: "Our foundation is built on Dharma - righteousness, duty, and moral order. We guide devotees on the path of righteous living."
    },
    {
      icon: "🙏",
      title: "Seva (Service)",
      description: "We serve humanity with devotion, helping individuals worldwide reconnect with Vedic wisdom for spiritual and personal growth."
    }
  ];

  const sectors = [
    {
      title: "Havan & Pooja",
      description: "Personalized rituals based on Janam Kundali for spiritual purification and cosmic harmony",
      stats: "1000+ Rituals",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Special Homams",
      description: "Powerful Vedic fire ceremonies for specific purposes - healing, prosperity, protection",
      stats: "500+ Homams",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Vedic Consultations",
      description: "Authentic guidance based on birth charts and Vedic astrology for life decisions",
      stats: "2000+ Consultations",
      color: "from-purple-500 to-purple-600"
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

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const spiritualServices = [
    {
      icon: (
        <div className="flex justify-center">
          <FileText className="w-10 h-10 text-indigo-500" />
        </div>
      ),
      title: "Birth Chart Analysis",
      description:
        "Detailed study of your Janam Kundali (birth chart) to identify key spiritual needs and rituals",
    },
    {
      icon: (
        <div className="flex justify-center">
          <Star className="w-10 h-10 text-yellow-500" />
        </div>
      ),
      title: "Vedic Rituals",
      description:
        "Authentic Vedic rituals performed by experienced priests for spiritual well-being",
    },
    {
      icon: (
        <div className="flex justify-center">
          <Globe className="w-10 h-10 text-green-500" />
        </div>
      ),
      title: "Global Participation",
      description:
        "Participate in rituals from anywhere in the world through our digital platform",
    },
    {
      icon: (
        <div className="flex justify-center">
          <Heart className="w-10 h-10 text-red-500" />
        </div>
      ),
      title: "Divine Blessings",
      description:
        "Receive blessings and spiritual guidance for you and your family's prosperity",
    },
  ];





  const corePrinciples = [
    {
      title: "Vedic Wisdom",
      description:
        "Preserving and propagating the timeless wisdom of Sanatan Dharma as revealed in the Vedas",
      icon: <BookOpen className="w-12 h-12 text-indigo-600" />,
    },
    {
      title: "Spiritual Solutions",
      description:
        "Providing authentic solutions to life's challenges through ancient Vedic practices",
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
    },
    {
      title: "Ancestral Traditions",
      description:
        "Continuing the sacred rituals and traditions passed down through generations",
      icon: <Crown className="w-12 h-12 text-amber-600" />,
    },
    {
      title: "Universal Harmony",
      description:
        "Promoting harmony between spiritual, embodied, and scientific aspects of human existence",
      icon: <Globe2 className="w-12 h-12 text-green-600" />,
    },
  ];


  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Enhanced Hero Section with Dharmo Rakshati Rakshitah */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-yellow-800 via-yellow-800 to-yellow-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-24 -top-20 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -right-24 -bottom-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto text-center text-white"
          >
            {/* Main Sanskrit Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8 md:mb-10"
            >
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/20 shadow-2xl mx-2">
                {/* Sanskrit Text */}
                <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-yellow-300 mb-4 md:mb-5 font-sans leading-tight">
                  धर्मो रक्षति रक्षितः
                </div>

                {/* Transliteration */}
                <div className="text-base sm:text-lg md:text-2xl text-blue-100 italic mb-4 md:mb-5">
                  "Dharmo Rakshati Rakshitah"
                </div>

                {/* Separator */}
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mb-4 md:mb-5"></div>

                {/* Meaning */}
                <div className="text-sm sm:text-base md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-2">
                  Where righteousness protects the protector, and ethical practices build lasting legacies.
                </div>
              </div>
            </motion.div>

            {/* Main Title - Smaller Size */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-blue-100"
            >
              About <span className="text-orange-300">Anand Religious Trust</span>
            </motion.h1>

            {/* Philosophy Explanation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-sm sm:text-base md:text-lg text-blue-100 leading-relaxed px-2 sm:px-4">
                A sacred initiative dedicated to preserving the timeless wisdom of Sanatan Dharma. Our journey is guided by
                the timeless wisdom that when you protect Dharma (righteousness), Dharma protects you in return.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section - Enhanced for Mobile */}
      <section className="py-12 md:py-15 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">

              {/* Left: Image card with responsive sizing */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center w-full lg:justify-start order-2 lg:order-1"
              >
                <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                  {/* Responsive Image card */}
                  <div className="w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[580px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-100 bg-white transform transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02] group-hover:ring-2 group-hover:ring-orange-200">
                    <img
                      src="/images/image.png"
                      alt="Founder & Chairman"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                    {/* Founder & Chairman Badge - On Image */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="absolute left-4 md:left-6 bottom-4 md:bottom-6 transform group-hover:scale-110 transition-transform duration-300"
                    >
                      <div className="bg-white/95 backdrop-blur-sm px-3 md:px-4 py-1 md:py-2 rounded-full shadow-lg text-xs md:text-sm font-semibold text-gray-700 border border-gray-100 group-hover:border-orange-200 group-hover:shadow-xl transition-all duration-300">
                        <div className="text-xs text-gray-500 group-hover:text-orange-500 transition-colors">Founder & Chairman</div>
                        <div className="uppercase text-xs tracking-wide group-hover:text-blue-600 transition-colors">ANAND RELIGIOUS TRUST</div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Quote Section Under Image */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="mt-6 group"
                  >
                    <div className="bg-gradient-to-r from-blue-50/50 to-orange-50/50 rounded-xl p-4 md:p-6 border-l-4 border-orange-500 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-orange-600 mx-2 sm:mx-0">
                      <p className="text-gray-700 italic text-sm sm:text-base md:text-lg leading-relaxed text-center">
                        "We connect souls with the divine through authentic Vedic practices. Every ritual we perform is backed by
                        complete adherence to Vedic scriptures, spiritual purity, and a vision for universal spiritual growth.
                        Our service isn't just rituals; it's a bridge that connects devotees with the timeless wisdom of the Vedas
                        for healing, clarity, and inner transformation."
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right: Content with improved mobile alignment */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                viewport={{ once: true }}
                className="space-y-6 md:space-y-8 order-1 lg:order-2 w-full"
              >
                <div className="w-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-2 text-center lg:text-left">Anand</h2>
                  <p className="text-base sm:text-lg md:text-xl text-orange-500 font-semibold mt-1 text-center lg:text-left">Founder & Chairman</p>

                  <div className="mt-4 md:mt-6 text-gray-700 space-y-4 w-full">
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                      A spiritual visionary with an unwavering commitment to preserving Vedic wisdom, Anand founded
                      Anand Religious Trust (MAA SENA) with a simple yet powerful vision: to reconnect humanity
                      with the timeless wisdom of Sanatan Dharma and help individuals find answers through authentic Vedic practices.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                      With deep reverence for Vedic scriptures and an innate understanding of spiritual needs,
                      Anand has dedicated the trust to serving devotees worldwide, ensuring that authentic Vedic
                      rituals and guidance are accessible to all who seek spiritual growth, healing, and inner peace.
                    </p>

                    {/* Added Trust Information */}
                    <div className="bg-blue-50 rounded-lg p-4 md:p-6 mt-4 border-l-4 border-blue-500">
                      <h4 className="font-bold text-blue-800 text-base sm:text-lg md:text-xl mb-2">About Anand Religious Trust (MAA SENA)</h4>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                        Under Anand's guidance, Anand Religious Trust has emerged as a trusted spiritual institution.
                        We specialize in performing authentic Vedic rituals based on Janam Kundali, ensuring purity,
                        authenticity, and maximum spiritual benefit in every ceremony.
                      </p>
                    </div>
                  </div>

                  {/* Stats Section on Right Side Below Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="mt-8 w-full"
                  >
                    <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-md mx-auto lg:mx-0">
                      <EnhancedStatCard title="1000+" subtitle="Rituals Performed" delay={0} />
                      <EnhancedStatCard title="50+" subtitle="Countries Served" delay={0.1} />
                      <EnhancedStatCard title="25+" subtitle="Years of Service" delay={0.2} />
                      <EnhancedStatCard title="5000+" subtitle="Devotees Served" delay={0.3} />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile Section - Mobile Optimized */}
      <section ref={ref1} className="py-8 md:py-10 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div

            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-800 mb-2">
                About Anand Religious Trust (MAA SENA)
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-4">
                Preserving and spreading authentic Vedic wisdom worldwide with devotion, purity, and spiritual excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-stretch px-2 sm:px-0">
              <motion.div variants={itemVariants} className="flex">
                <div className="bg-gradient-to-br from-blue-50 to-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col h-full w-full">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-800 mb-2 text-left">
                        Authentic Vedic Practices
                      </h3>
                      <div className="space-y-4 text-left">
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                          Anand Religious Trust specializes in performing authentic Vedic rituals based on Janam Kundali (birth charts). Our learned priests, strict adherence to Vedic scriptures, and complete spiritual purity allow us to provide rituals that meet the highest standards of Vedic authenticity and spiritual benefit.
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                          From Havan and Pooja to Special Homams and Vedic consultations, we ensure every ritual reflects our commitment to purity, authenticity, and maximum spiritual transformation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex">
                <div className="bg-gradient-to-br from-orange-50 to-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col h-full w-full">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-800 mb-2 text-left">
                        Our Journey in Spiritual Service
                      </h3>
                      <div className="space-y-4 text-left">
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                          What began with serving local devotees has now expanded into a global spiritual network serving individuals across multiple countries through live participation and remote rituals. Yet, our foundation remains unchanged: delivering authentic Vedic practices with complete purity, transparent guidance, and ethical spiritual service.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg text-gray-700 ml-2">
                          <li>Authentic Vedic rituals and practices</li>
                          <li>Birth chart based personalized services</li>
                          <li>Transparent process and spiritual guidance</li>
                          <li>Global access through live participation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Mission Section */}
      <section ref={ref1} className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 mb-4">
                Our Sacred Mission
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
            </motion.div>

            {/* IMPORTANT CHANGE HERE */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">

              {/* Card 1 */}
              <motion.div variants={itemVariants} className="flex h-full">
                <div className="bg-gradient-to-br from-purple-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <h3 className="text-xl sm:text-2xl font-bold text-purple-800 mb-4 text-left">
                    Preserving Ancient Wisdom
                  </h3>
                  <div className="space-y-4 text-left flex-grow">
                    <p className="text-gray-700 leading-relaxed">
                      Anand Religious Trust - MAA SENA is dedicated to preserving the timeless wisdom
                      of Sanatan Dharma and offering simple solutions to challenges that arise in modern life.
                      The answers already exist within the divine scriptures passed down by our ancestors.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Our mission is to help individuals access this authentic Vedic foundation and
                      discover spiritual significance through divine vision and faith.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div variants={itemVariants} className="flex h-full">
                <div className="bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <h3 className="text-xl sm:text-2xl font-bold text-purple-800 mb-4 text-left">
                    Spiritual Guidance Through Birth Charts
                  </h3>
                  <div className="space-y-4 text-left flex-grow">
                    <p className="text-gray-700 leading-relaxed">
                      At MAA SENA, the spiritual practices needed for your well-being are determined
                      by studying your birth chart (Janam Kundali) according to Vedic principles.
                      These primary actions connect with your heart and determine how divine blessings
                      flow to you and your family.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      True wisdom derives from humility, prosperity, appreciation of our identity,
                      and devotion to the Divine.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>


      {/* Core Principles Section */}
      <section ref={ref2} className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView2 ? "visible" : "hidden"}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 mb-4">
                Our Core Principles
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto mb-6 rounded-full"></div>

              {/* Animated Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="text-gray-700 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
              >
                Our core purpose is to create awareness about the rituals practiced by our ancestors,
                helping people understand the spiritual, emotional, and scientific significance behind
                Vedic traditions. Through this knowledge, we aim to guide individuals toward a life of
                harmony, purity, and Dharma.
              </motion.p>
            </motion.div>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {corePrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {principle.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-purple-800 mb-3 group-hover:text-purple-600 transition-colors">
                        {principle.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>



      {/* Future Vision - Mobile Optimized */}
      <section ref={ref3} className="pt-5 md:pt-12 pb-4 md:pb-6 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView3 ? "visible" : "hidden"}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4 md:mb-6">
                Preserving Vedic Wisdom for Future Generations
              </h2>
              <div className="w-20 h-1 md:w-24 md:h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-6 md:mb-8 rounded-full"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8 px-2 sm:px-4">
                With expanding spiritual services across continents, diverse ritual offerings, authentic Vedic practices,
                and global access through live participation, Anand Religious Trust stands for preserving Sanatan Dharma,
                transparent spiritual guidance, and a vision to help individuals worldwide access the timeless wisdom
                of the Vedas for healing, clarity, and inner transformation.
              </p>
              <motion.div
                className="inline-block"
              >
                <Link
                  to="/booking"
                  className="relative bg-orange-500 hover:bg-orange-500 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300 text-sm sm:text-base inline-flex items-center"
                >
                  <span className="relative z-10">
                    Book a Ritual
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA - Mobile Optimized */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-2xl font-bold mb-4 md:mb-6">
              Ready to Begin Your Spiritual Journey?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto px-2 sm:px-4">
              Discover how Anand Religious Trust's commitment to authentic Vedic practices can transform your spiritual life and help you find clarity, healing, and inner peace.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link
                to="/services"
                className="relative bg-orange-500 hover:bg-orange-500 text-white px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-full font-semibold shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300 text-sm sm:text-base inline-flex items-center"
              >
                <span className="relative z-10">
                  Explore Our Rituals
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              </Link>
              <Link
                to="/contact"
                className="border-2  hover:text-blue-800 px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm sm:text-base"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
/* Enhanced Stat Card Component */
function EnhancedStatCard({ title, subtitle, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{
        y: -4,
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className="group"
    >
      <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 md:p-5 flex flex-col items-start justify-center ring-1 ring-gray-100 hover:ring-2 hover:ring-orange-200 hover:shadow-xl transition-all duration-300">
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 transform group-hover:scale-110">
          {title}
        </div>
        <div className="text-xs text-gray-400 mt-1 group-hover:text-gray-600 transition-colors duration-300">
          {subtitle}
        </div>

        {/* Hover effect background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-orange-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      </div>
    </motion.div>
  );
}