import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      experience: "After performing the recommended Havan based on my birth chart, I experienced a significant shift in my emotional well-being. The stress and anxiety I was carrying for months gradually lifted, and I found a sense of inner peace I hadn't felt in years.",
      category: "Healing"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi, India",
      experience: "I participated in a Prosperity Homam remotely from the USA. Despite being thousands of miles away, I could feel the positive energy. Within a few months, I noticed improvements in my career and financial situation. The guidance provided was invaluable.",
      category: "Prosperity"
    },
    {
      name: "Anita Patel",
      location: "Ahmedabad, India",
      experience: "The Protection Homam brought harmony back to our family. There was so much tension and conflict, but after the ritual, the atmosphere at home changed completely. We now have peace and understanding among family members.",
      category: "Peace"
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      experience: "As someone new to Vedic practices, I was skeptical but open. The detailed explanation of my birth chart and the personalized ritual recommendation made me understand the depth of Vedic wisdom. The experience was transformative.",
      category: "Clarity"
    },
    {
      name: "Sunita Reddy",
      location: "Hyderabad, India",
      experience: "I had been struggling with health issues for a long time. After the Spiritual Healing Homam, I not only felt better physically but also gained mental clarity. The post-ritual guidance helped me maintain the positive energy.",
      category: "Healing"
    },
    {
      name: "David Thompson",
      location: "London, UK",
      experience: "Participating via live link was incredible. I could see the entire ritual, hear the mantras, and feel connected despite being in a different country. The experience was profound and authentic.",
      category: "Experience"
    }
  ];

  const categories = ["All", "Healing", "Prosperity", "Peace", "Clarity", "Experience"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredTestimonials = selectedCategory === "All" 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

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
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Devotee <span className="text-yellow-300">Experiences</span>
            </h1>
            <p className="text-lg md:text-xl text-orange-100 leading-relaxed">
              Real stories of healing, peace, relief, and clarity from those who have experienced our Vedic rituals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-orange-600 text-white shadow-lg"
                      : "bg-white text-orange-800 border-2 border-orange-200 hover:border-orange-400"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 border border-orange-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-orange-800">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {testimonial.category}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.experience}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200 text-center">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> These are personal experiences shared by devotees. Individual results may vary. 
                Vedic rituals are spiritual practices and should not be considered as medical treatment or guarantee of specific outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;

