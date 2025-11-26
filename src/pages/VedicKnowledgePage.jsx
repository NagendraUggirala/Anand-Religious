import React from 'react';
import { motion } from 'framer-motion';

const VedicKnowledgePage = () => {
  const knowledgeSections = [
    {
      title: "Significance of Vedic Rituals",
      subsections: [
        {
          heading: "Spiritual Significance",
          content: "Vedic rituals connect us with the divine cosmic energy, creating a bridge between the material and spiritual realms. They help align our consciousness with higher vibrations and universal principles."
        },
        {
          heading: "Emotional/Mental Impact",
          content: "The rhythmic chanting of mantras and the sacred fire create a meditative atmosphere that calms the mind, reduces stress, and brings emotional balance. Many experience a sense of peace and clarity after participating in rituals."
        },
        {
          heading: "Subtle Energetic Effects",
          content: "Vedic rituals work on subtle energy levels, purifying the aura, balancing chakras, and removing negative karmic imprints. The fire (Agni) acts as a purifier, transforming negative energies into positive vibrations."
        }
      ]
    },
    {
      title: "Scientific & Subtle Aspects",
      subsections: [
        {
          heading: "Mantra Vibrations",
          content: "Mantras are not just words; they are specific sound frequencies that resonate with cosmic energies. Scientific studies have shown that chanting mantras can alter brainwave patterns, reduce stress hormones, and promote healing."
        },
        {
          heading: "Fire (Agni) Purification",
          content: "The sacred fire in Havan/Homam acts as a purifier on multiple levels - physical (cleansing air), energetic (transforming negative vibrations), and spiritual (offering prayers to the divine). The heat and light represent transformation and enlightenment."
        },
        {
          heading: "Psychological Calmness",
          content: "The ritualistic environment, rhythmic chanting, and focused intention create a state of deep meditation. This activates the parasympathetic nervous system, promoting relaxation, healing, and mental clarity."
        },
        {
          heading: "Atmosphere Cleansing",
          content: "The combination of sacred herbs (samagri), mantras, and fire creates a powerful cleansing effect on the environment. Negative ions are released, and the space is energetically purified, making it conducive for positive experiences."
        }
      ]
    },
    {
      title: "Ancestral Practices",
      subsections: [
        {
          heading: "How Our Ancestors Lived",
          content: "Our ancestors lived in harmony with nature and cosmic rhythms. They understood that human life is deeply connected to planetary movements, seasons, and natural cycles. Rituals were performed to align with these cosmic forces."
        },
        {
          heading: "Why They Did Specific Rituals",
          content: "Each ritual had a specific purpose - for health, prosperity, protection, spiritual growth, or resolving specific life challenges. They performed rituals at auspicious times (muhurta) to maximize their effectiveness and align with favorable planetary positions."
        },
        {
          heading: "Relevance in Modern Life",
          content: "In today's fast-paced world, Vedic rituals offer a way to reconnect with our roots, find inner peace, and address modern challenges through time-tested spiritual practices. They provide a sense of purpose, connection, and spiritual grounding in an increasingly materialistic world."
        }
      ]
    }
  ];

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
              Vedic <span className="text-yellow-300">Knowledge</span>
            </h1>
            <p className="text-lg md:text-xl text-orange-100 leading-relaxed">
              Understanding the timeless wisdom of Sanatan Dharma and the science behind Vedic rituals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Knowledge Sections */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {knowledgeSections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12 md:mb-16"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-4xl font-bold text-orange-800 mb-4">
                    {section.title}
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.subsections.map((subsection, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-lg p-6 border border-orange-100 hover:shadow-xl transition-all duration-300"
                    >
                      <h3 className="text-xl font-bold text-orange-800 mb-3">
                        {subsection.heading}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {subsection.content}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl shadow-lg p-8 md:p-12 border border-orange-200 text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                Deepen Your Understanding
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The wisdom of the Vedas is vast and profound. By understanding the significance and science behind Vedic rituals, you can experience them with greater awareness and receive their full benefits.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our rituals are performed with complete adherence to Vedic principles, ensuring authenticity and maximum spiritual benefit for all participants.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VedicKnowledgePage;

