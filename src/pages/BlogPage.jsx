import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Vedic Wisdom', 'Astrology', 'Spiritual Practices', 'Rituals', 'Guidance', 'Science & Spirituality'];

  const blogPosts = [
    {
      id: 1,
      title: "The Complete Guide to Vedic Rituals: Science Behind Ancient Fire Ceremonies",
      excerpt: "Discover the profound scientific and spiritual significance of Yajnas and how they create transformative energy fields for personal and environmental purification.",
      category: "Vedic Wisdom",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "https://tse2.mm.bing.net/th/id/OIP.yNO5Yd_Ws0pS-1vdQVZjGQHaD5?rs=1&pid=ImgDetMain&o=7&rm=3",
      author: "Dr. Priya Sharma",
      authorRole: "Vedic Scholar & Researcher",
      tags: ["Yajna", "Fire Rituals", "Ancient Science", "Energy Healing"],
      content: `
        <h2 class="text-2xl font-bold text-gray-800 mb-4 mt-6">The Ancient Science of Vedic Rituals</h2>
        <p class="text-gray-700 mb-4 leading-relaxed">Vedic rituals, known as Yajnas or Homas, represent one of humanity's most sophisticated spiritual technologies. These are not mere religious ceremonies but precise scientific processes that create positive energy fields and purify both individual consciousness and the environment.</p>
        
        <div class="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
          <p class="text-orange-800 font-semibold">Key Insight: Modern physics is now validating what ancient Rishis knew about energy transformation through sacred rituals.</p>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">The Pancha Mahabhuta Connection</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">Every Vedic ritual masterfully engages the five fundamental elements (Pancha Mahabhuta):</p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong class="text-orange-600">Prithvi (Earth):</strong> Represented through sacred herbs, grains, and ghee</li>
          <li><strong class="text-orange-600">Jal (Water):</strong> Used for purification and consecration</li>
          <li><strong class="text-orange-600">Agni (Fire):</strong> The divine medium of transformation and carrier to celestial realms</li>
          <li><strong class="text-orange-600">Vayu (Air):</strong> Mantra vibrations traveling through atmospheric channels</li>
          <li><strong class="text-orange-600">Akash (Ether):</strong> The space where subtle energies manifest and expand</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">Scientific Validation</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">Contemporary research reveals remarkable findings:</p>
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="bg-white p-4 rounded-lg border border-orange-200">
            <h4 class="font-semibold text-orange-600 mb-2">Atmospheric Purification</h4>
            <p class="text-sm text-gray-600">Specific herbal combinations release medicinal properties that neutralize pathogens and pollutants.</p>
          </div>
          <div class="bg-white p-4 rounded-lg border border-orange-200">
            <h4 class="font-semibold text-orange-600 mb-2">Consciousness Expansion</h4>
            <p class="text-sm text-gray-600">Mantra frequencies create brainwave coherence, enhancing meditation depth and intuition.</p>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">Types of Vedic Rituals</h3>
        <div class="overflow-x-auto mb-6">
          <table class="w-full border-collapse border border-orange-200">
            <thead class="bg-orange-100">
              <tr>
                <th class="border border-orange-300 p-3 text-left">Type</th>
                <th class="border border-orange-300 p-3 text-left">Purpose</th>
                <th class="border border-orange-300 p-3 text-left">Frequency</th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover:bg-orange-50">
                <td class="border border-orange-300 p-3"><strong>Nitya Karma</strong></td>
                <td class="border border-orange-300 p-3">Daily spiritual discipline and self-purification</td>
                <td class="border border-orange-300 p-3">Daily</td>
              </tr>
              <tr class="hover:bg-orange-50">
                <td class="border border-orange-300 p-3"><strong>Naimittika Karma</strong></td>
                <td class="border border-orange-300 p-3">Specific occasions and life transitions</td>
                <td class="border border-orange-300 p-3">Occasional</td>
              </tr>
              <tr class="hover:bg-orange-50">
                <td class="border border-orange-300 p-3"><strong>Kamya Karma</strong></td>
                <td class="border border-orange-300 p-3">Fulfillment of specific desires and goals</td>
                <td class="border border-orange-300 p-3">As needed</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <h4 class="font-semibold text-blue-800 mb-2">Practical Application</h4>
          <p class="text-blue-700">Even simple daily rituals like lighting a lamp or chanting Gayatri Mantra can create profound shifts in your energy field and consciousness.</p>
        </div>
      `,
      relatedPosts: [2, 3, 4]
    },
    {
      id: 2,
      title: "Janam Kundali: Your Cosmic Blueprint for Life Purpose & Spiritual Evolution",
      excerpt: "Unlock the secrets of your birth chart to understand your soul's journey, karmic patterns, and optimal spiritual practices for accelerated growth.",
      category: "Astrology",
      date: "March 10, 2024",
      readTime: "10 min read",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*Oj-sojcXjP3kmBQW.jpeg",
      author: "Rajesh Bhatt",
      authorRole: "Jyotish Acharya",
      tags: ["Kundali", "Birth Chart", "Karma", "Life Purpose"],
      content: `
        <h2 class="text-2xl font-bold text-gray-800 mb-4 mt-6">Decoding Your Cosmic DNA</h2>
        <p class="text-gray-700 mb-4 leading-relaxed">Your Janam Kundali is much more than a horoscope—it's a detailed cosmic map revealing your soul's evolutionary journey, karmic imprints, and divine life purpose encoded in celestial mathematics.</p>

        <div class="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6">
          <p class="text-purple-800 font-semibold">Vedic Insight: Your birth chart is the universe's personalized instruction manual for your soul's growth and fulfillment.</p>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">The Architecture of Consciousness</h3>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="text-center p-4 bg-purple-50 rounded-lg">
            <div class="text-2xl font-bold text-purple-600 mb-2">12</div>
            <div class="text-sm font-semibold">Houses</div>
            <div class="text-xs text-gray-600">Life Areas</div>
          </div>
          <div class="text-center p-4 bg-blue-50 rounded-lg">
            <div class="text-2xl font-bold text-blue-600 mb-2">9</div>
            <div class="text-sm font-semibold">Planets</div>
            <div class="text-xs text-gray-600">Cosmic Influences</div>
          </div>
          <div class="text-center p-4 bg-green-50 rounded-lg">
            <div class="text-2xl font-bold text-green-600 mb-2">27</div>
            <div class="text-sm font-semibold">Nakshatras</div>
            <div class="text-xs text-gray-600">Lunar Mansions</div>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">Key Houses for Spiritual Seekers</h3>
        <div class="space-y-4 mb-6">
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span class="text-orange-600 font-bold text-sm">1</span>
            </div>
            <div>
              <h4 class="font-semibold text-gray-800">First House (Ascendant)</h4>
              <p class="text-gray-600 text-sm">Your personality, physical body, and approach to life - the lens through which you experience reality.</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span class="text-orange-600 font-bold text-sm">9</span>
            </div>
            <div>
              <h4 class="font-semibold text-gray-800">Ninth House (Dharma Bhava)</h4>
              <p class="text-gray-600 text-sm">Your spiritual path, guru connection, higher learning, and life purpose according to cosmic design.</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span class="text-orange-600 font-bold text-sm">12</span>
            </div>
            <div>
              <h4 class="font-semibold text-gray-800">Twelfth House (Moksha Bhava)</h4>
              <p class="text-gray-600 text-sm">Liberation, subconscious patterns, spiritual isolation, and connection with the divine.</p>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">Planetary Influences on Spiritual Growth</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="bg-white p-4 rounded-lg border border-purple-200">
            <h4 class="font-semibold text-purple-600 mb-2">Jupiter (Guru)</h4>
            <p class="text-sm text-gray-600">Governs wisdom, expansion, and spiritual growth. Strong Jupiter indicates natural spiritual inclination.</p>
          </div>
          <div class="bg-white p-4 rounded-lg border border-blue-200">
            <h4 class="font-semibold text-blue-600 mb-2">Saturn (Karma)</h4>
            <p class="text-sm text-gray-600">Teaches spiritual discipline through challenges and delays. Your greatest spiritual teacher.</p>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">Remedial Measures for Spiritual Progress</h3>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong class="text-purple-600">Mantra Therapy:</strong> Specific bija mantras based on planetary positions</li>
          <li><strong class="text-purple-600">Gemstone Recommendations:</strong> Crystals that amplify positive planetary energies</li>
          <li><strong class="text-purple-600">Yantra Worship:</strong> Geometric representations of cosmic energies</li>
          <li><strong class="text-purple-600">Ritual Practices:</strong> Targeted homams and pujas for planetary harmony</li>
        </ul>

        <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
          <h4 class="font-semibold text-green-800 mb-2">Practical Guidance</h4>
          <p class="text-green-700">Understanding your Kundali helps you choose the most effective spiritual practices that align with your soul's evolutionary needs.</p>
        </div>
      `,
      relatedPosts: [1, 5, 6]
    },
    {
      id: 3,
      title: "Mantra Science: How Sacred Sounds Rewire Your Brain & Transform Consciousness",
      excerpt: "Explore the neuroscience behind mantra meditation and how specific sound frequencies create lasting changes in brain structure and awareness.",
      category: "Science & Spirituality",
      date: "March 5, 2024",
      readTime: "12 min read",
      image: "https://www.desdemitrinchera.com/wordpress/wp-content/uploads/2024/07/mantras-885x500.jpeg",
      author: "Dr. Anjali Mehta",
      authorRole: "Neuroscientist & Yoga Therapist",
      tags: ["Mantras", "Neuroscience", "Meditation", "Sound Healing"],
      content: `
        <h2 class="text-2xl font-bold text-gray-800 mb-4 mt-6">The Neuroscience of Sacred Sounds</h2>
        <p class="text-gray-700 mb-4 leading-relaxed">Mantras are precise sound formulas that create specific energetic frequencies affecting consciousness at the deepest levels. Modern neuroscience confirms these ancient practices create measurable changes in brain structure and function.</p>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p class="text-blue-800 font-semibold">Scientific Finding: Regular mantra practice increases gray matter in brain regions associated with attention, emotional regulation, and self-awareness.</p>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">How Mantras Affect Brain Waves</h3>
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-white p-4 rounded-lg border border-blue-200">
            <h4 class="font-semibold text-blue-600 mb-2">Alpha Waves (8-12 Hz)</h4>
            <p class="text-sm text-gray-600">Induced by gentle mantra repetition, associated with relaxed alertness and creative states.</p>
          </div>
          <div class="bg-white p-4 rounded-lg border border-purple-200">
            <h4 class="font-semibold text-purple-600 mb-2">Theta Waves (4-7 Hz)</h4>
            <p class="text-sm text-gray-600">Deep meditation states, access to subconscious mind, and profound intuition.</p>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">The Sanskrit Advantage</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">Sanskrit is uniquely designed as a vibrational language where each syllable creates specific energy patterns:</p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong class="text-blue-600">Precise Pronunciation:</strong> Each sound activates specific energy centers (chakras)</li>
          <li><strong class="text-blue-600">Mathematical Precision:</strong> Mantras follow specific rhythmic patterns and counts</li>
          <li><strong class="text-blue-600">Energy Activation:</strong> Sounds create standing wave patterns in the subtle body</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">Powerful Mantras for Modern Life</h3>
        <div class="overflow-x-auto mb-6">
          <table class="w-full border-collapse border border-blue-200">
            <thead class="bg-blue-100">
              <tr>
                <th class="border border-blue-300 p-3 text-left">Mantra</th>
                <th class="border border-blue-300 p-3 text-left">Purpose</th>
                <th class="border border-blue-300 p-3 text-left">Repetitions</th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover:bg-blue-50">
                <td class="border border-blue-300 p-3"><strong>Gayatri Mantra</strong></td>
                <td class="border border-blue-300 p-3">Universal wisdom and enlightenment</td>
                <td class="border border-blue-300 p-3">108 times daily</td>
              </tr>
              <tr class="hover:bg-blue-50">
                <td class="border border-blue-300 p-3"><strong>Mahamrityunjaya</strong></td>
                <td class="border border-blue-300 p-3">Healing and longevity</td>
                <td class="border border-blue-300 p-3">11, 21, or 108 times</td>
              </tr>
              <tr class="hover:bg-blue-50">
                <td class="border border-blue-300 p-3"><strong>So Ham</strong></td>
                <td class="border border-blue-300 p-3">Natural breath mantra for mindfulness</td>
                <td class="border border-blue-300 p-3">With each breath</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">Practical Applications</h3>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="text-center p-4 bg-green-50 rounded-lg">
            <div class="text-2xl mb-2">🧠</div>
            <h4 class="font-semibold text-green-600 mb-2">Mental Clarity</h4>
            <p class="text-sm text-gray-600">Reduces mental chatter and enhances focus</p>
          </div>
          <div class="text-center p-4 bg-purple-50 rounded-lg">
            <div class="text-2xl mb-2">❤️</div>
            <h4 class="font-semibold text-purple-600 mb-2">Emotional Balance</h4>
            <p class="text-sm text-gray-600">Regulates emotional responses and reduces stress</p>
          </div>
          <div class="text-center p-4 bg-orange-50 rounded-lg">
            <div class="text-2xl mb-2">🌟</div>
            <h4 class="font-semibold text-orange-600 mb-2">Spiritual Growth</h4>
            <p class="text-sm text-gray-600">Accelerates consciousness expansion</p>
          </div>
        </div>

        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
          <h4 class="font-semibold text-yellow-800 mb-2">Beginner's Tip</h4>
          <p class="text-yellow-700">Start with just 5 minutes daily of any mantra that resonates with you. Consistency matters more than duration in the beginning.</p>
        </div>
      `,
      relatedPosts: [1, 2, 4]
    },
    {
      id: 4,
      title: "Specialized Homams: Ancient Solutions for Modern Life Challenges",
      excerpt: "Comprehensive guide to targeted fire rituals addressing health, relationships, career, and spiritual obstacles with proven effectiveness.",
      category: "Rituals",
      date: "February 28, 2024",
      readTime: "15 min read",
      image: "https://www.shastrigal.net/wp-content/uploads/2025/06/freepik__the-style-is-candid-image-photography-with-natural__42025-1024x585.jpeg",
      author: "Swami Devananda",
      authorRole: "Vedic Priest & Scholar",
      tags: ["Homams", "Fire Rituals", "Remedies", "Spiritual Solutions"],
      content: `
        <h2 class="text-2xl font-bold text-gray-800 mb-4 mt-6">Targeted Spiritual Solutions Through Homams</h2>
        <p class="text-gray-700 mb-4 leading-relaxed">Different Homams are precisely designed to address specific life challenges by invoking particular cosmic energies and deities. These ancient fire rituals create powerful energetic shifts that manifest as positive changes in physical reality.</p>

        <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <p class="text-red-800 font-semibold">Vedic Principle: Fire (Agni) is the universal purifier and transformer that carries offerings to celestial realms while purifying the physical environment.</p>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">Health and Healing Homams</h3>
        <div class="space-y-4 mb-6">
          <div class="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
            <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-green-600 font-bold">⚕️</span>
            </div>
            <div>
              <h4 class="font-semibold text-green-800">Mrityunjaya Homam</h4>
              <p class="text-green-700 text-sm">For overcoming serious health challenges, longevity, and protection from accidents. Invokes Lord Shiva's healing energies.</p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
            <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-blue-600 font-bold">💊</span>
            </div>
            <div>
              <h4 class="font-semibold text-blue-800">Dhanvantari Homam</h4>
              <p class="text-blue-700 text-sm">For general health, recovery from illness, and blessing medical treatments. Honors the celestial physician.</p>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">Prosperity and Career Homams</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 class="font-semibold text-yellow-600 mb-2">Lakshmi Kubera Homam</h4>
            <p class="text-sm text-yellow-700">Attracts wealth, financial stability, and business success through divine abundance energies.</p>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 class="font-semibold text-gray-600 mb-2">Ganesh Homam</h4>
            <p class="text-sm text-gray-700">Removes obstacles, ensures success in new ventures, and provides wisdom for decision-making.</p>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">Relationship and Family Harmony</h3>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong class="text-pink-600">Mangal Dosha Nivaran Homam:</strong> Remedies Mars-related relationship challenges</li>
          <li><strong class="text-pink-600">Parvati Homam:</strong> For marital harmony and finding suitable life partners</li>
          <li><strong class="text-pink-600">Pitra Dosha Homam:</strong> Resolves ancestral karmic patterns affecting family</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">Spiritual Advancement Homams</h3>
        <div class="overflow-x-auto mb-6">
          <table class="w-full border-collapse border border-purple-200">
            <thead class="bg-purple-100">
              <tr>
                <th class="border border-purple-300 p-3 text-left">Homam</th>
                <th class="border border-purple-300 p-3 text-left">Purpose</th>
                <th class="border border-purple-300 p-3 text-left">Best Time</th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover:bg-purple-50">
                <td class="border border-purple-300 p-3"><strong>Rudra Homam</strong></td>
                <td class="border border-purple-300 p-3">Spiritual transformation and liberation</td>
                <td class="border border-purple-300 p-3">Maha Shivaratri</td>
              </tr>
              <tr class="hover:bg-purple-50">
                <td class="border border-purple-300 p-3"><strong>Sudarshan Homam</strong></td>
                <td class="border border-purple-300 p-3">Protection from negative energies</td>
                <td class="border border-purple-300 p-3">Ekadashi</td>
              </tr>
              <tr class="hover:bg-purple-50">
                <td class="border border-purple-300 p-3"><strong>Navagraha Homam</strong></td>
                <td class="border border-purple-300 p-3">Planetary harmony and balance</td>
                <td class="border border-purple-300 p-3">Graha Pravesh</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-6">
          <h4 class="font-semibold text-indigo-800 mb-2">Preparation Guidelines</h4>
          <p class="text-indigo-700">For maximum effectiveness, participants should maintain purity through vegetarian diet, meditation, and clear intention for 3 days before the Homam.</p>
        </div>
      `,
      relatedPosts: [1, 3, 5]
    },
    {
      id: 5,
      title: "Ancestral Wisdom: Why Ancient Vedic Practices Are More Relevant Than Ever",
      excerpt: "Rediscover the timeless scientific principles behind ancestral traditions and their crucial role in navigating modern complexity.",
      category: "Vedic Wisdom",
      date: "February 22, 2024",
      readTime: "9 min read",
      image: "https://www.afriklens.com/wp-content/uploads/2024/11/African-Spiritual-Traditions-The-Role-of-Ancestor-Worship-1536x878.webp",
      author: "Prof. Vikram Joshi",
      authorRole: "Cultural Historian",
      tags: ["Ancient Wisdom", "Tradition", "Modern Relevance", "Cultural Heritage"],
      content: `
        <h2 class="text-2xl font-bold text-gray-800 mb-4 mt-6">Timeless Wisdom for Modern Times</h2>
        <p class="text-gray-700 mb-4 leading-relaxed">Our ancestors developed Vedic rituals and practices as sophisticated tools for personal transformation, environmental harmony, and cosmic connection. These traditions contain profound scientific principles that modern science is only beginning to understand.</p>

        <div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
          <p class="text-amber-800 font-semibold">Historical Insight: Vedic civilization maintained advanced knowledge of astronomy, medicine, and consciousness while living in ecological harmony for thousands of years.</p>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">Scientific Basis of Ancient Practices</h3>
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-white p-4 rounded-lg border border-amber-200">
            <h4 class="font-semibold text-amber-600 mb-2">Yajna & Environmental Science</h4>
            <p class="text-sm text-gray-600">Specific herbal combinations in fire rituals release antimicrobial compounds that purify atmosphere and boost immunity.</p>
          </div>
          <div class="bg-white p-4 rounded-lg border border-green-200">
            <h4 class="font-semibold text-green-600 mb-2">Meditation & Neuroscience</h4>
            <p class="text-sm text-gray-600">Ancient meditation techniques now proven to increase gray matter, reduce aging, and enhance cognitive function.</p>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">Relevance in Digital Age</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">In our technology-driven, fast-paced world, Vedic practices offer essential balance:</p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong class="text-amber-600">Digital Detox:</strong> Rituals provide meaningful breaks from constant connectivity</li>
          <li><strong class="text-amber-600">Mental Clarity:</strong> Meditation counters information overload and decision fatigue</li>
          <li><strong class="text-amber-600">Community Connection:</strong> Group rituals rebuild social bonds in increasingly isolated societies</li>
          <li><strong class="text-amber-600">Purpose & Meaning:</strong> Spiritual practices address existential questions in materialistic cultures</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">Modern Applications of Ancient Wisdom</h3>
        <div class="overflow-x-auto mb-6">
          <table class="w-full border-collapse border border-amber-200">
            <thead class="bg-amber-100">
              <tr>
                <th class="border border-amber-300 p-3 text-left">Ancient Practice</th>
                <th class="border border-amber-300 p-3 text-left">Modern Application</th>
                <th class="border border-amber-300 p-3 text-left">Benefit</th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover:bg-amber-50">
                <td class="border border-amber-300 p-3"><strong>Pranayama</strong></td>
                <td class="border border-amber-300 p-3">Stress management in corporate settings</td>
                <td class="border border-amber-300 p-3">Reduces anxiety, improves focus</td>
              </tr>
              <tr class="hover:bg-amber-50">
                <td class="border border-amber-300 p-3"><strong>Yoga Nidra</strong></td>
                <td class="border border-amber-300 p-3">Sleep optimization and recovery</td>
                <td class="border border-amber-300 p-3">Enhances deep rest, reduces insomnia</td>
              </tr>
              <tr class="hover:bg-amber-50">
                <td class="border border-amber-300 p-3"><strong>Mantra Meditation</strong></td>
                <td class="border border-amber-300 p-3">Cognitive enhancement and creativity</td>
                <td class="border border-amber-300 p-3">Boosts problem-solving abilities</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">Preserving Cultural Heritage</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">Maintaining these traditions is crucial for:</p>
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-semibold text-red-600 mb-2">Future Generations</h4>
            <p class="text-sm text-red-700">Passing down time-tested wisdom for navigating life's challenges</p>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-semibold text-blue-600 mb-2">Global Well-being</h4>
            <p class="text-sm text-blue-700">Offering sustainable solutions to modern ecological and social problems</p>
          </div>
        </div>

        <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
          <h4 class="font-semibold text-green-800 mb-2">Call to Action</h4>
          <p class="text-green-700">Start integrating one small Vedic practice into your daily routine. Even 5 minutes of meditation or mantra chanting can create profound shifts in your wellbeing.</p>
        </div>
      `,
      relatedPosts: [1, 2, 6]
    },
    {
      id: 6,
      title: "Remote Ritual Participation: Bridging Distance Through Consciousness Technology",
      excerpt: "Scientific explanation of how remote participation in Vedic rituals maintains full efficacy through quantum entanglement principles.",
      category: "Science & Spirituality",
      date: "February 18, 2024",
      readTime: "7 min read",
      image: "https://files.souladvisor.com/cdn-cgi/image/format:auto,width=1140,fit=scale-down/https://files.souladvisor.com/uploads/202204/grounding-meditation-6256f9909c64c.jpg",
      author: "Dr. Sameer Kapoor",
      authorRole: "Quantum Physicist",
      tags: ["Remote Rituals", "Quantum Physics", "Consciousness", "Distance Healing"],
      content: `
        <h2 class="text-2xl font-bold text-gray-800 mb-4 mt-6">The Science of Remote Spiritual Participation</h2>
        <p class="text-gray-700 mb-4 leading-relaxed">Quantum physics and ancient Vedic wisdom both confirm that consciousness transcends physical boundaries, making remote participation in rituals equally effective as physical presence. This isn't a compromise—it's accessing a deeper understanding of reality.</p>

        <div class="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6">
          <p class="text-purple-800 font-semibold">Quantum Principle: Entangled particles affect each other instantly across any distance. Similarly, consciousness connected through intention creates immediate energetic links.</p>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">How Remote Participation Works</h3>
        <div class="space-y-4 mb-6">
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span class="text-purple-600 font-bold text-sm">1</span>
            </div>
            <div>
              <h4 class="font-semibold text-gray-800">Consciousness Connection</h4>
              <p class="text-gray-600 text-sm">Your focused intention creates an energetic link with the ritual space, regardless of physical location.</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span class="text-purple-600 font-bold text-sm">2</span>
            </div>
            <div>
              <h4 class="font-semibold text-gray-800">Intention Amplification</h4>
              <p class="text-gray-600 text-sm">The collective energy of participants and priests amplifies the ritual's power, benefiting all connected.</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span class="text-purple-600 font-bold text-sm">3</span>
            </div>
            <div>
              <h4 class="font-semibold text-gray-800">Energetic Transmission</h4>
              <p class="text-gray-600 text-sm">Blessings and healing energies transmit instantly through the unified field of consciousness.</p>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">Scientific Evidence</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="bg-white p-4 rounded-lg border border-purple-200">
            <h4 class="font-semibold text-purple-600 mb-2">Quantum Entanglement</h4>
            <p class="text-sm text-gray-600">Particles once connected remain correlated across space, demonstrating non-local connection.</p>
          </div>
          <div class="bg-white p-4 rounded-lg border border-blue-200">
            <h4 class="font-semibold text-blue-600 mb-2">Distant Healing Studies</h4>
            <p class="text-sm text-gray-600">Multiple studies show significant positive effects of distant prayer and healing intentions.</p>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">Preparing for Remote Participation</h3>
        <div class="overflow-x-auto mb-6">
          <table class="w-full border-collapse border border-green-200">
            <thead class="bg-green-100">
              <tr>
                <th class="border border-green-300 p-3 text-left">Time</th>
                <th class="border border-green-300 p-3 text-left">Preparation</th>
                <th class="border border-green-300 p-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover:bg-green-50">
                <td class="border border-green-300 p-3"><strong>3 Days Before</strong></td>
                <td class="border border-green-300 p-3">Light vegetarian diet, meditation</td>
                <td class="border border-green-300 p-3">Energetic purification</td>
              </tr>
              <tr class="hover:bg-green-50">
                <td class="border border-green-300 p-3"><strong>Day of Ritual</strong></td>
                <td class="border border-green-300 p-3">Create sacred space, set intention</td>
                <td class="border border-green-300 p-3">Consciousness alignment</td>
              </tr>
              <tr class="hover:bg-green-50">
                <td class="border border-green-300 p-3"><strong>During Ritual</strong></td>
                <td class="border border-green-300 p-3">Synchronize breathing, visualize</td>
                <td class="border border-green-300 p-3">Energetic participation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">Maximizing Remote Benefits</h3>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong class="text-purple-600">Clear Intention:</strong> Write down specific goals before the ritual</li>
          <li><strong class="text-purple-600">Sacred Space:</strong> Create a quiet, clean area with minimal distractions</li>
          <li><strong class="text-purple-600">Synchronization:</strong> Join the live stream slightly early to settle in</li>
          <li><strong class="text-purple-600">Post-Ritual Integration:</strong> Maintain the elevated energy through gentle activities</li>
        </ul>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <h4 class="font-semibold text-blue-800 mb-2">Testimonial Evidence</h4>
          <p class="text-blue-700">"I participated remotely from another continent and experienced the same profound peace and tangible energy shifts as when I attended in person. The blessings were immediate and life-changing." - Sarah, USA</p>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">Common Questions Answered</h3>
        <div class="space-y-4 mb-6">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold text-gray-800 mb-2">Does physical distance reduce effectiveness?</h4>
            <p class="text-gray-600">No. Consciousness operates beyond spatial limitations. The quality of your intention matters more than physical proximity.</p>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold text-gray-800 mb-2">Can multiple family members participate remotely?</h4>
            <p class="text-gray-600">Yes. Each person should set individual intentions while collectively focusing on family wellbeing.</p>
          </div>
        </div>
      `,
      relatedPosts: [3, 4, 5]
    }
  ];

  const fallbackEmojis = ["🔥", "⭐", "🕉️", "🙏", "📜", "💻"];

  // Filter posts based on category and search term
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleCardClick = (post) => {
    setSelectedPost(post);
    setShowDetail(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    setTimeout(() => setSelectedPost(null), 300);
    document.body.style.overflow = 'auto';
  };

  const getRelatedPosts = (currentPost) => {
    return blogPosts.filter(post => 
      currentPost.relatedPosts.includes(post.id)
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-28 bg-gradient-to-br from-yellow-800 via-yellow-800 to-yellow-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 md:w-80 md:h-80 bg-yellow-400/20 rounded-full mix-blend-overlay filter blur-3xl opacity-25"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-64 md:h-64 bg-orange-500/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <div className="inline-block px-3 py-1 md:px-4 md:py-2 bg-white/10 rounded-full mb-3 md:mb-4 backdrop-blur-sm border border-white/20">
              <span className="text-xs md:text-sm font-semibold text-yellow-300">Vedic Knowledge & Articles</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
              Vedic Wisdom & Insights
            </h1>
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto rounded-full mb-6 md:mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8 px-4">
              Dive deep into ancient wisdom backed by modern science. Transform your life with timeless Vedic knowledge made accessible for contemporary seekers.
            </p>
            
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl mx-auto px-4"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles, rituals, mantras..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 md:px-6 md:py-4 pl-10 md:pl-12 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-orange-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm md:text-base"
                />
                <svg className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-orange-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Horizontal Scrollable Category Filters */}
      <section className="py-4 md:py-6 bg-white border-b border-orange-100 z-40">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide space-x-2 md:space-x-3 pb-2 px-1">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
                  activeCategory === category
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-200'
                    : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Blog Posts Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              {filteredPosts.length} {activeCategory === 'All' ? 'Wisdom Articles' : activeCategory + ' Articles'}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Carefully curated knowledge to guide your spiritual journey with authenticity and scientific backing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl md:shadow-xl md:hover:shadow-2xl transition-all duration-500 border border-orange-100 overflow-hidden group cursor-pointer"
                onClick={() => handleCardClick(post)}
              >
                {/* Premium Image Container */}
                <div className="h-40 sm:h-44 md:h-48 relative overflow-hidden bg-gradient-to-br from-orange-100 to-yellow-50">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallbackDiv = e.target.nextSibling;
                      fallbackDiv.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="absolute inset-0 hidden items-center justify-center text-4xl sm:text-5xl md:text-6xl bg-gradient-to-br from-orange-100 to-yellow-50"
                    style={{ display: 'none' }}
                  >
                    {fallbackEmojis[index]}
                  </div>
                  
                  {/* Premium Badge */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4">
                    <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white/90 backdrop-blur-sm text-orange-700 rounded-full text-xs sm:text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                  
                  {/* Read Time */}
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4">
                    <span className="px-2 py-1 sm:px-3 sm:py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm font-semibold">
                      {post.readTime}
                    </span>
                  </div>
                </div>
                
                {/* Enhanced Content */}
                <div className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors line-clamp-2 text-gray-800 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 pt-3 sm:pt-4 border-t border-gray-100">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-600 font-bold text-xs sm:text-sm">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-semibold text-gray-800 truncate">{post.author}</div>
                      <div className="text-xs text-gray-500 truncate">{post.authorRole}</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Enhanced CTA Button */}
                  <div className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 sm:py-3 px-4 rounded-lg sm:rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg shadow-orange-200 cursor-pointer text-sm sm:text-base">
                    Explore Wisdom
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 md:py-16"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 md:mb-4">🔍</div>
              <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-800 mb-2">No articles found</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 md:mb-6 max-w-md mx-auto">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors text-sm sm:text-base"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Enhanced Article Detail Modal */}
      <AnimatePresence>
        {showDetail && selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-sm"
            onClick={handleCloseDetail}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-[95vw] sm:max-w-4xl md:max-w-6xl max-h-[90vh] sm:max-h-[95vh] overflow-hidden flex flex-col mx-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Enhanced Image */}
              <div className="h-48 sm:h-60 md:h-80 relative bg-gradient-to-br from-orange-900 to-orange-700 flex-shrink-0">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallbackDiv = e.target.nextSibling;
                    fallbackDiv.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 hidden items-center justify-center text-6xl sm:text-7xl md:text-8xl bg-gradient-to-br from-orange-900 to-orange-700">
                  {fallbackEmojis[selectedPost.id - 1]}
                </div>
                
                {/* Enhanced Close Button */}
                <button
                  onClick={handleCloseDetail}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:scale-110"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                {/* Enhanced Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 md:p-8 text-white">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <span className="px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full font-semibold text-xs sm:text-sm border border-white/30">
                      {selectedPost.category}
                    </span>
                    <span className="px-2 py-1 sm:px-3 sm:py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs sm:text-sm">
                      {selectedPost.readTime}
                    </span>
                  </div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">{selectedPost.title}</h1>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm text-white/90">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {selectedPost.date}
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 rounded-full flex items-center justify-center text-xs font-bold">
                        {selectedPost.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      {selectedPost.author} • {selectedPost.authorRole}
                    </div>
                  </div>
                </div>
              </div>

              {/* Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-4 sm:p-6 md:p-8">
                  {/* Article Content */}
                  <div 
                    className="prose prose-sm sm:prose-base md:prose-lg max-w-none mb-8 sm:mb-12"
                    dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                  />
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-6 sm:mb-8">
                    {selectedPost.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 sm:px-3 sm:py-1 bg-orange-100 text-orange-700 rounded-full text-xs sm:text-sm font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Related Articles */}
                  <div className="mb-8 sm:mb-12">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Related Sacred Wisdom</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                      {getRelatedPosts(selectedPost).map(relatedPost => (
                        <div 
                          key={relatedPost.id}
                          className="p-3 sm:p-4 border border-orange-200 rounded-lg sm:rounded-xl hover:border-orange-400 transition-colors cursor-pointer"
                          onClick={() => handleCardClick(relatedPost)}
                        >
                          <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 line-clamp-2 text-sm sm:text-base">{relatedPost.title}</h4>
                          <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-gray-200">
                    <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 sm:py-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      Save to Sacred Collection
                    </button>
                    <button className="flex-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white py-3 px-4 sm:py-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      Share Divine Wisdom
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-yellow-400/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Transform Your Life with Ancient Wisdom?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Join thousands of seekers who have discovered profound peace, purpose, and transformation through authentic Vedic practices backed by modern science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Link
                to="/vedic-wisdom"
                className="bg-yellow-500 hover:bg-yellow-600 text-orange-800 px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 shadow-xl sm:shadow-2xl hover:shadow-3xl text-sm sm:text-base md:text-lg hover:scale-105 w-full sm:w-auto text-center"
              >
                Begin Your Journey
              </Link>
              <Link
                to="/contact"
                className="border-2 hover:text-orange-800 px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 text-sm sm:text-base md:text-lg hover:scale-105 w-full sm:w-auto text-center"
              >
                Book Personalized Guidance
              </Link>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;