import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DonatePage = () => {
  const [donationType, setDonationType] = useState('one-time');
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const presetAmounts = [500, 1000, 2500, 5000, 10000];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission
    alert('Thank you for your support! We will contact you shortly.');
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
              Support <span className="text-yellow-300">Vedic Tradition</span>
            </h1>
            <p className="text-lg md:text-xl text-orange-100 leading-relaxed">
              Your contribution helps preserve and spread authentic Vedic knowledge for future generations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Support Section */}
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
                Why Support MAA SENA?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-orange-100"
              >
                <h3 className="text-xl md:text-2xl font-bold text-orange-800 mb-4">
                  Preserving Vedic Wisdom
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your support helps maintain the infrastructure, resources, and facilities needed to perform authentic Vedic rituals according to traditional principles.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Maintaining ritual spaces and sacred fire altars</li>
                  <li>Supporting learned Vedic priests</li>
                  <li>Preserving traditional knowledge and practices</li>
                  <li>Creating educational resources about Vedic wisdom</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-orange-100"
              >
                <h3 className="text-xl md:text-2xl font-bold text-orange-800 mb-4">
                  Spiritual Merit (Punya)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Supporting Dharmic work and the preservation of Vedic traditions creates positive spiritual merit (Punya) that benefits you and your family.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Contributing to the spread of divine knowledge</li>
                  <li>Supporting service to humanity (Seva)</li>
                  <li>Helping others access authentic spiritual practices</li>
                  <li>Creating positive karmic impressions</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl shadow-lg p-6 md:p-8 border border-orange-200"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-6 text-center">
                Make a Contribution
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Donation Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Donation Type
                  </label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setDonationType('one-time')}
                      className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                        donationType === 'one-time'
                          ? 'bg-orange-600 text-white shadow-lg'
                          : 'bg-white text-orange-800 border-2 border-orange-200 hover:border-orange-400'
                      }`}
                    >
                      One-Time
                    </button>
                    <button
                      type="button"
                      onClick={() => setDonationType('monthly')}
                      className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                        donationType === 'monthly'
                          ? 'bg-orange-600 text-white shadow-lg'
                          : 'bg-white text-orange-800 border-2 border-orange-200 hover:border-orange-400'
                      }`}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Select Amount (₹)
                  </label>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {presetAmounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => {
                          setAmount(amt.toString());
                          setCustomAmount('');
                        }}
                        className={`py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                          amount === amt.toString()
                            ? 'bg-orange-600 text-white shadow-lg'
                            : 'bg-white text-orange-800 border-2 border-orange-200 hover:border-orange-400'
                        }`}
                      >
                        ₹{amt.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div className="mt-3">
                    <input
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setAmount('');
                      }}
                      className="w-full px-4 py-3 bg-white border-2 border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    rows="3"
                    className="w-full px-4 py-3 bg-white border-2 border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Any specific intention or message for your donation..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {donationType === 'monthly' ? 'Start Monthly Donation' : 'Make Donation'}
                </button>
              </form>

              <p className="text-sm text-gray-600 text-center mt-4">
                Your contribution is used to maintain rituals, support priests, and preserve Vedic traditions. 
                All donations are used for Dharmic purposes only.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;

