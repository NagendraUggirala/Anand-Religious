import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';

const Home = () => {
  const [currentReviewSet, setCurrentReviewSet] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Auto-rotate reviews every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewSet((prev) => (prev + 1) % Math.ceil(reviews.length / (window.innerWidth < 768 ? 1 : 3)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Extensive network spanning multiple countries for seamless international trade"
    },
    {
      icon: "✅",
      title: "Quality Assurance",
      description: "Rigorous quality control ensuring every product meets international standards"
    },
    {
      icon: "🤝",
      title: "Trusted Partnerships",
      description: "Strong sourcing networks and strategic partnerships worldwide"
    },
    {
      icon: "⚡",
      title: "Reliable Service",
      description: "Transparent transactions with fast delivery and committed service"
    }
  ];

  const services = [
    {
      title: "International Export Services",
      description: "We export premium-quality goods to global markets, ensuring every shipment meets international standards, industry compliance, and customer expectations.",
      icon: "🌐",
      features: ["Global Market Reach", "International Standards", "Industry Compliance", "Customer Satisfaction"]
    },
    {
      title: "Domestic & National Distribution",
      description: "Within India, we supply goods across states through a well-established logistics and supply chain system.",
      icon: "🚚",
      features: ["Fast Delivery", "Consistent Quality", "Well-Established Logistics", "Committed Service"]
    },
    {
      title: "Global Import Solutions",
      description: "We import a wide range of goods from trusted international suppliers, ensuring competitive pricing, authenticity, and quality assurance.",
      icon: "📦",
      features: ["Trusted Suppliers", "Competitive Pricing", "Quality Assurance", "Hassle-Free Service"]
    }
  ];

  const industries = [
    "Consumer goods",
    "Food products & FMCG",
    "Electronics & hardware",
    "Textiles & garments",
    "Industrial materials",
    "Health & wellness products",
    "Lifestyle & household goods"
  ];

  const values = [
    {
      title: "Reliability",
      description: "Ensuring reliability, transparency, and value in every transaction",
      icon: "🛡️"
    },
    {
      title: "Excellence",
      description: "Commitment to excellence in sourcing, quality, and service delivery",
      icon: "⭐"
    },
    {
      title: "Global Vision",
      description: "Bridging national and international markets with seamless operations",
      icon: "🌐"
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Consumer Goods Importer",
      rating: 5,
      comment: "Anand Imports & Exports has been our trusted partner for 5 years. Their quality assurance and reliable delivery have helped us grow our business significantly.",
      avatar: "👨‍💼",
      date: "January 2024"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "FMCG Distributor",
      rating: 5,
      comment: "The team's expertise in international trade and customs clearance makes them stand out. Every shipment arrives on time with complete documentation.",
      avatar: "👩‍💼",
      date: "December 2023"
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Electronics Retailer",
      rating: 5,
      comment: "Their global sourcing network gives us access to premium products at competitive prices. Highly recommend for anyone in the import-export business.",
      avatar: "👨‍💻",
      date: "November 2023"
    },
    {
      id: 4,
      name: "Sunita Reddy",
      location: "Textile Manufacturer",
      rating: 5,
      comment: "Anand Imports & Exports handles our export operations flawlessly. Their attention to compliance and quality standards is exceptional.",
      avatar: "👩‍🏫",
      date: "October 2023"
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "Industrial Materials Supplier",
      rating: 5,
      comment: "We've been working with them for multiple product categories. Their transparent processes and reliable service keep us coming back.",
      avatar: "👨‍🎓",
      date: "September 2023"
    },
    {
      id: 6,
      name: "Neha Gupta",
      location: "Health Products Distributor",
      rating: 5,
      comment: "The quality assurance and responsible sourcing practices are outstanding. Every product meets the highest standards.",
      avatar: "👩‍⚕️",
      date: "August 2023"
    }
  ];

  // Get current set of reviews based on screen size
  const getCurrentReviews = () => {
    const isMobile = window.innerWidth < 768;
    const reviewsPerView = isMobile ? 1 : 3;
    return reviews.slice(currentReviewSet * reviewsPerView, currentReviewSet * reviewsPerView + reviewsPerView);
  };

  const [currentReviews, setCurrentReviews] = useState(getCurrentReviews());

  // Update reviews when window resizes or review set changes
  useEffect(() => {
    const handleResize = () => {
      setCurrentReviews(getCurrentReviews());
    };

    window.addEventListener('resize', handleResize);
    setCurrentReviews(getCurrentReviews());

    return () => window.removeEventListener('resize', handleResize);
  }, [currentReviewSet]);

  const reviewVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center space-x-1 mb-3">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-lg ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Banner Hero Section - Anand Imports & Exports */}
      <section className="position-relative py-5" style={{ 
        background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #1976d2 100%)',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        {/* Background Pattern - World Map Overlay Effect */}
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M10 10h80v80H10z\' fill=\'none\' stroke=\'%23fff\' stroke-width=\'0.5\'/%3E%3Cpath d=\'M20 20h60v60H20z\' fill=\'none\' stroke=\'%23fff\' stroke-width=\'0.3\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px'
        }}></div>
        
        {/* Shipping Container Icons - Decorative Elements */}
        <div className="position-absolute" style={{ top: '10%', right: '5%', opacity: '0.1' }}>
          <i className="bi bi-box-seam" style={{ fontSize: '150px', color: 'white' }}></i>
        </div>
        <div className="position-absolute" style={{ bottom: '15%', left: '8%', opacity: '0.1' }}>
          <i className="bi bi-globe" style={{ fontSize: '120px', color: 'white' }}></i>
        </div>

        {/* Text Content */}
        <div className="container position-relative">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-9 text-center text-white">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Headline */}
                  <h1 className="display-3 fw-bold mb-4" style={{ 
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    color: '#ffffff'
                  }}>
                    Anand Imports & Exports
                  </h1>
                  
                  {/* Tagline */}
                  <p className="lead fs-2 mb-4 fw-light" style={{ 
                    color: '#ffd700',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                  }}>
                    Connecting Markets. Delivering Excellence. Expanding Global Possibilities.
                  </p>
                  
                  {/* Supporting Line */}
                  <p className="fs-5 mb-5 fw-normal" style={{ 
                    color: '#e3f2fd',
                    maxWidth: '800px',
                    margin: '0 auto 2rem',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                  }}>
                    Your trusted partner in global trade — bridging nations with quality, transparency, and reliability.
                  </p>

                  {/* Call-to-Action Buttons */}
                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
                    <Link 
                      to="/services" 
                      className="btn btn-warning btn-lg px-5 py-3 fw-bold text-dark shadow-lg"
                      style={{ 
                        minWidth: '200px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                      <i className="bi bi-arrow-right me-2"></i>
                      Explore Our Services
                    </Link>
                    <Link 
                      to="/contact" 
                      className="btn btn-outline-light btn-lg px-5 py-3 fw-bold shadow-lg"
                      style={{ 
                        minWidth: '200px',
                        borderWidth: '2px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.05)';
                        e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.backgroundColor = 'transparent';
                      }}
                    >
                      <i className="bi bi-handshake me-2"></i>
                      Partner With Us
                    </Link>
                    <Link 
                      to="/projects" 
                      className="btn btn-outline-warning btn-lg px-5 py-3 fw-bold shadow-lg"
                      style={{ 
                        minWidth: '200px',
                        borderWidth: '2px',
                        borderColor: '#ffd700',
                        color: '#ffd700',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.05)';
                        e.target.style.backgroundColor = '#ffd700';
                        e.target.style.color = '#0d47a1';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#ffd700';
                      }}
                    >
                      <i className="bi bi-globe me-2"></i>
                      Discover Global Opportunities
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-3 md:mb-4">
                About Anand Imports & Exports
              </h2>
              <div className="w-16 md:w-20 h-1 bg-orange-500 mx-auto mb-4 md:mb-6"></div>
              <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed px-2">
                Anand Imports & Exports is a dynamic global trading enterprise dedicated to bridging
                national and international markets. We specialize in the smooth movement of quality
                goods across borders, ensuring reliability, transparency, and value in every transaction.
              </p>
              <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed px-2 mt-4">
                With strong sourcing networks, strategic partnerships, and a commitment to excellence,
                Anand Group serves as a trusted trading partner for businesses worldwide.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="px-2"
              >
                <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-3 md:mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                  To bridge national and international markets by facilitating the smooth movement of 
                  quality goods across borders, ensuring reliability, transparency, and value in every transaction.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  We are committed to building strong sourcing networks and strategic partnerships that 
                  enable businesses worldwide to access global markets seamlessly.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-4 md:p-6 rounded-xl shadow-lg mx-2"
              >
                <h4 className="text-lg md:text-xl font-semibold text-blue-800 mb-3 md:mb-4">Why Choose Us</h4>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 md:mr-3 mt-1 text-sm">•</span>
                    <span className="text-gray-700 text-sm md:text-base">Strong sourcing networks worldwide</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 md:mr-3 mt-1 text-sm">•</span>
                    <span className="text-gray-700 text-sm md:text-base">Strategic partnerships for reliable supply</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 md:mr-3 mt-1 text-sm">•</span>
                    <span className="text-gray-700 text-sm md:text-base">Complete transparency in all transactions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 md:mr-3 mt-1 text-sm">•</span>
                    <span className="text-gray-700 text-sm md:text-base">Quality assurance and compliance management</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 md:py-16 bg-white">
        <style>{`
          @keyframes shine {
            0% {
              transform: translateX(-100%) skewX(-15deg);
            }
            100% {
              transform: translateX(200%) skewX(-15deg);
            }
          }
          .shine-hover {
            position: relative;
            overflow: hidden;
          }
          .shine-hover::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent 0%,
              rgba(255, 255, 255, 0.6) 50%,
              transparent 100%
            );
            transform: translateX(-100%) skewX(-15deg);
            pointer-events: none;
            z-index: 1;
          }
          .shine-hover:hover::before {
            animation: shine 0.8s ease-in-out;
          }
          .shine-hover > * {
            position: relative;
            z-index: 2;
          }
        `}</style>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-3 md:mb-4">
              The Anand Imports & Exports Advantage
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
              Experience the difference that comes with trusted global trading expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto px-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-white p-4 md:p-6 rounded-xl shadow-md border border-blue-100 text-center shine-hover"
              >
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">{feature.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-2 md:mb-3 leading-tight">{feature.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-3 md:mb-4">
              What We Do
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              We handle both import and export operations, ensuring that high-quality products move
              seamlessly between countries and continents.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto px-2">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-4 md:p-6">
                  <div className="text-4xl md:text-5xl mb-3 md:mb-4 text-center text-blue-600">{service.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-2 md:mb-3 text-center leading-tight">{service.title}</h3>
                  <p className="text-gray-600 text-center mb-3 md:mb-4 text-sm md:text-base">{service.description}</p>
                  <ul className="space-y-1 md:space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700 text-xs md:text-sm">
                        <span className="text-orange-500 mr-1 md:mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-3 md:mb-4">
              Industries We Serve
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              We ensure responsible sourcing, tested quality, and tailored supply solutions for all industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto px-2">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-white p-4 md:p-6 rounded-xl shadow-md border border-blue-100 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-2xl md:text-3xl mb-2 md:mb-3">✓</div>
                <h3 className="text-base md:text-lg font-semibold text-blue-800 leading-tight">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Carousel */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-3 md:mb-4">
              What Our Partners Say
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
              Trusted by businesses worldwide for reliable global trading solutions
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto px-2">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReviewSet}
                  variants={reviewVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`grid gap-4 md:gap-6 ${
                    window.innerWidth < 768 ? 'grid-cols-1' : 'grid-cols-3'
                  }`}
                >
                  {currentReviews.map((review) => (
                    <div key={review.id} className="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300">
                      <StarRating rating={review.rating} />
                      <blockquote className="text-gray-700 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed min-h-[80px] md:min-h-[96px]">
                        "{review.comment}"
                      </blockquote>
                      <div className="flex items-center space-x-2 md:space-x-3">
                        <div className="text-2xl md:text-3xl">{review.avatar}</div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 text-sm md:text-base">{review.name}</div>
                          <div className="text-xs text-gray-600">{review.location}</div>
                          <div className="text-xs text-gray-500">{review.date}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-6 md:mt-8">
                {[...Array(Math.ceil(reviews.length / (window.innerWidth < 768 ? 1 : 3)))].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReviewSet(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      index === currentReviewSet ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-3 md:mb-4">
              Our Core Values
            </h2>
            <p className="text-base md:text-lg text-gray-600 px-2">
              The principles that guide every transaction and partnership
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto px-2">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-4 md:p-6"
              >
                <div className="text-3xl md:text-4xl mb-3 md:mb-4 text-orange-500">{value.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-2 md:mb-3 leading-tight">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Ready to Expand Your Global Reach?
            </h2>
            <p className="text-lg md:text-xl text-blue-200 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
              Partner with Anand Imports & Exports and experience seamless global trading. 
              Let's connect markets and deliver excellence together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
              >
                Get In Touch
              </Link>
              <Link 
                to="/services" 
                className="border border-white text-white hover:bg-white hover:text-blue-800 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold transition-all duration-300 text-sm md:text-base"
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

export default Home;
