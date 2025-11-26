import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can rituals help if I'm abroad?",
      answer: "Yes, absolutely! Vedic rituals work on subtle energy levels and are not limited by physical distance. We offer live participation via video link, allowing you to join the ritual in real-time from anywhere in the world. The ritual is performed in your name and Gotram, ensuring the spiritual energy is directly connected to you regardless of your physical location."
    },
    {
      question: "Are rituals effective if I'm not physically present?",
      answer: "Yes, rituals are equally effective whether you are physically present or participating remotely. The key factors are: (1) The ritual is performed in your name and Gotram, (2) Your intention and participation (even via live link), and (3) The authentic performance by learned priests. Many devotees have experienced profound benefits through remote participation. The divine energy transcends physical boundaries."
    },
    {
      question: "How do you decide which Havan/Homam I need?",
      answer: "The decision is made through a detailed Vedic analysis of your Janam Kundali (birth chart). Our learned priests examine: (1) Your planetary positions at birth, (2) Current Dasha (planetary periods), (3) Specific life challenges or goals you've shared, and (4) Traditional Vedic remedies for your unique chart. Based on this authentic analysis, we recommend the most beneficial ritual for your situation."
    },
    {
      question: "Do I need to follow any rules before / after?",
      answer: "Yes, there are some guidelines to maximize the benefits: Before the ritual: Maintain purity (avoid non-vegetarian food, alcohol, and negative thoughts) for at least 24-48 hours. After the ritual: Follow the post-ritual guidance provided, which may include specific mantras, practices, or dietary recommendations. We provide detailed instructions based on your specific ritual. The key is maintaining a positive, devotional mindset."
    },
    {
      question: "Are these based on authentic Vedic scriptures?",
      answer: "Absolutely. All our rituals are performed strictly according to authentic Vedic scriptures including the Vedas, Puranas, and traditional Vedic texts. Our priests are learned in Vedic knowledge and follow time-tested principles. We do not take shortcuts or modify traditional practices. Every ritual is performed with complete adherence to Vedic principles, ensuring authenticity and maximum spiritual benefit."
    },
    {
      question: "What information do I need to provide for the birth chart analysis?",
      answer: "You need to provide: (1) Date of birth, (2) Time of birth (as accurate as possible), (3) Place of birth (city and state/country), and (4) Your Gotram (if known). The more accurate the birth time, the more precise the analysis. If you don't know your exact birth time, we can work with approximate times, though accuracy is preferred."
    },
    {
      question: "How long does a ritual typically take?",
      answer: "The duration varies depending on the type of ritual: Simple Poojas may take 30-60 minutes, while elaborate Homams can take 2-4 hours. We will inform you of the expected duration when you book. For live participation, you can join for the entire duration or for specific important parts of the ceremony."
    },
    {
      question: "Can I book a ritual for someone else?",
      answer: "Yes, you can book a ritual for family members or loved ones. You will need to provide their birth details (date, time, place) and Gotram. The ritual will be performed in their name and Gotram. This is a common practice, especially for parents booking rituals for children or children booking for elderly parents."
    },
    {
      question: "What is the difference between Havan, Homam, and Pooja?",
      answer: "Havan and Homam are essentially the same - both involve offering materials into a sacred fire (Agni) while chanting mantras. Pooja is a broader term that includes various forms of worship, which may or may not involve fire. Homams are typically more elaborate and specific, while Poojas can be simpler daily worship. The specific ritual recommended for you will depend on your birth chart analysis."
    },
    {
      question: "How will I receive the live link for remote participation?",
      answer: "After booking confirmation, you will receive the live participation link via email and WhatsApp (if provided) a day before the ritual. The link will be active during the scheduled time. You can join using any device (phone, tablet, or computer) with internet connection. Technical support is available if you need assistance."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
              Frequently Asked <span className="text-yellow-300">Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-orange-100 leading-relaxed">
              Find answers to common questions about our Vedic rituals and services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white rounded-xl shadow-lg border border-orange-100 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-orange-50 transition-all duration-300"
                  >
                    <h3 className="text-lg font-bold text-orange-800 pr-4">
                      {faq.question}
                    </h3>
                    <span className={`text-orange-600 text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <div className="pt-2 border-t border-orange-100">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
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
                Still Have Questions?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We're here to help! Contact us directly and our team will be happy to answer any questions you may have about our rituals, services, or the Vedic tradition.
              </p>
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;

