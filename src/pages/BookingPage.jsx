import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    ritual: 'Havan Based on Birth Chart',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const navigate = useNavigate();

  // Hide header and footer when component mounts
  useEffect(() => {
    // Hide header and footer
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';

    // Restore header and footer when component unmounts
    return () => {
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
    };
  }, []);

  const rituals = [
    'Havan Based on Birth Chart',
    'Special Homam - Mahamrityunjaya',
    'Special Homam - Laxmi Kubera',
    'Special Homam - Sudarshan',
    'Special Homam - Ganapathi',
    'Special Homam - Vastu Shanti',
    'Special Homam - Navagraha',
    'Vedic Consultation',
    'Other (Please specify in message)'
  ];

  const validate = (data) => {
    const e = {};
    if (!data.fullName?.trim()) e.fullName = "Full Name is required";
    if (!data.email?.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Enter a valid email";
    if (!data.ritual) e.ritual = "Please select a ritual";
    if (!data.message?.trim() || data.message.trim().length < 10) e.message = "Please provide your request (min 10 characters)";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eObj = validate(formData);
    if (Object.keys(eObj).length > 0) {
      setErrors(eObj);
      const firstKey = Object.keys(eObj)[0];
      const el = document.querySelector(`[name="${firstKey}"]`);
      if (el) el.focus();
      return;
    }
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((res) => setTimeout(res, 1500));
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        fullName: '',
        email: '',
        ritual: 'Havan Based on Birth Chart',
        message: ''
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch {
      setIsSubmitting(false);
      setSubmitStatus("error");
    }
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-16">
      {/* Back to Home Button */}
      <div className="container mx-auto px-4 mb-6">
        <button
          onClick={handleGoBack}
          className="flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-8 text-center">
            Book a Ritual
          </h1>

          {/* Form Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200">
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6"
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">Booking Request Submitted!</h4>
                    <p className="text-green-600 text-sm">We'll contact you shortly to confirm your ritual booking.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-red-700 text-sm">
                Something went wrong. Please try again later or contact us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name Field */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 bg-gray-50 border ${
                    errors.fullName ? "border-red-400" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300`}
                  aria-invalid={!!errors.fullName}
                />
                {errors.fullName && (
                  <p className="text-red-600 text-sm mt-2">{errors.fullName}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={`w-full px-4 py-3 bg-gray-50 border ${
                    errors.email ? "border-red-400" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300`}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-2">{errors.email}</p>
                )}
              </div>

              {/* Select Ritual Field */}
              <div>
                <label htmlFor="ritual" className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Ritual
                </label>
                <select
                  id="ritual"
                  name="ritual"
                  value={formData.ritual}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-50 border ${
                    errors.ritual ? "border-red-400" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer`}
                  aria-invalid={!!errors.ritual}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    paddingRight: '2.5rem'
                  }}
                >
                  {rituals.map((ritual, index) => (
                    <option key={index} value={ritual}>
                      {ritual}
                    </option>
                  ))}
                </select>
                {errors.ritual && (
                  <p className="text-red-600 text-sm mt-2">{errors.ritual}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Request"
                  rows="5"
                  className={`w-full px-4 py-3 bg-gray-50 border ${
                    errors.message ? "border-red-400" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-y`}
                  aria-invalid={!!errors.message}
                ></textarea>
                {errors.message && (
                  <p className="text-red-600 text-sm mt-2">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-orange-600 hover:bg-orange-700 shadow-lg hover:shadow-xl"
                }`}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              Need help choosing the right ritual?{' '}
              <a href="/contact" className="text-orange-600 hover:text-orange-700 font-semibold">
                Contact us
              </a>{' '}
              for a free consultation.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingPage;