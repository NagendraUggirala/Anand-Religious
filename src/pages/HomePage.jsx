// Full modified Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IconStars, IconFlame as TablerFlame, IconWorld, IconCertificate, IconShield, IconHeartHandshake, IconClock, IconUsers, IconAward, IconCheck } from "@tabler/icons-react";
import { Flame, FileText, BookOpen, X, Calendar, Target, Globe, Shield, Zap, Sparkles } from "lucide-react";

const HomePage = () => {
  // State variables
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [activeService, setActiveService] = useState('havan');

  // Vedic Services data
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
      icon: '🪔'
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
      icon: '✨'
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
      icon: '🔮'
    }
  };

  // Categories
  const categories = ['All', 'Vedic Wisdom', 'Astrology', 'Science & Spirituality', 'Rituals', 'Guidance'];

  // Complete posts data with all 6 articles
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
        </div>
      `,
      relatedPosts: [3, 4, 5]
    }
  ];

  // Other data
  const offerings = [
    {
      title: "Havan & Pooja Based on Birth Chart",
      description: "Personalized rituals based on your Janam Kundali using authentic Vedic principles to ensure spiritual functions and blessings flow directly to you",
      icon: (
        <div className="flex justify-center mb-2">
          <IconStars className="w-12 h-12 text-purple-600" />
        </div>
      ),
    },
    {
      title: "Special Homams",
      description: "For deeper healing, prosperity, protection & peace through focused Vedic fire rituals that channel divine blessings and remove obstacles from your life path",
      icon: (
        <div className="flex justify-center mb-2">
          <TablerFlame className="w-12 h-12 text-red-600" />
        </div>
      ),
    },
    {
      title: "Online / Live Ritual Participation",
      description: "Join sacred rituals in real-time from anywhere in the world via live link, allowing you to receive blessings and spiritual energy directly regardless of physical location",
      icon: (
        <div className="flex justify-center mb-2">
          <IconWorld className="w-12 h-12 text-blue-600" />
        </div>
      ),
    },
  ];

  const whyChoosePoints = [
    "Rooted in authentic Vedic scriptures",
    "Pure rituals, no shortcuts",
    "Personalized based on Janam Kundali",
    "Global access via live link",
    "Authentic Sanskrit mantras",
    "Experienced Vedic priests",
    "Personalized guidance",
    "Proven spiritual results",
  ];

  const testimonials = [
    {
      text: "The birth chart analysis and havan performed by MAA SENA brought immense peace and positivity in my life. Highly recommended!",
      name: "Ravi Kumar",
      location: "Delhi, India",
      initials: "RK",
    },
    {
      text: "I participated in the live homam from the USA. The energy was palpable even through the screen. Thank you for the blessings.",
      name: "Priya Shah",
      location: "New York, USA",
      initials: "PS",
    },
    {
      text: "Authentic Vedic rituals and pure intentions. My family has found a new level of harmony after their services.",
      name: "Anil Sharma",
      location: "Mumbai, India",
      initials: "AS",
    },
    {
      text: "The guidance received during Vedic consultation helped me make important life decisions with clarity and confidence.",
      name: "Meera Patel",
      location: "London, UK",
      initials: "MP",
    },
    {
      text: "Remote participation was as powerful as being there in person. The blessings truly transcend physical distance.",
      name: "David Chen",
      location: "Singapore",
      initials: "DC",
    },
    {
      text: "The scientific explanations alongside spiritual practices made everything more meaningful and accessible.",
      name: "Dr. Arjun Nair",
      location: "Bangalore, India",
      initials: "AN",
    },
  ];

  // Additional Sections Data
  const spiritualBenefits = [
    {
      title: "Inner Peace & Clarity",
      description: "Experience profound mental calmness and clear thinking through spiritual practices",
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Karmic Healing",
      description: "Address past life karmic patterns and create positive future trajectories",
      icon: <Target className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Divine Protection",
      description: "Create spiritual shields against negative energies and influences",
      icon: <Shield className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Life Purpose Alignment",
      description: "Discover and align with your true dharma and soul mission",
      icon: <Zap className="w-8 h-8 text-orange-600" />,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Personal assessment and understanding of your spiritual needs",
    },
    {
      step: "02",
      title: "Birth Chart Analysis",
      description: "Detailed study of your Janam Kundali for personalized guidance",
    },
    {
      step: "03",
      title: "Ritual Planning",
      description: "Selection of appropriate Vedic rituals based on your specific requirements",
    },
    {
      step: "04",
      title: "Sacred Preparation",
      description: "Arrangement of pure materials and priest preparation",
    },
    {
      step: "05",
      title: "Ritual Performance",
      description: "Authentic performance with proper mantras and procedures",
    },
    {
      step: "06",
      title: "Blessings & Follow-up",
      description: "Receiving prasad and ongoing spiritual guidance",
    },
  ];

  // Filter posts based on category and search term
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Fallback emojis for images
  const fallbackEmojis = ["🔥", "⭐", "🕉️", "🙏", "📜", "💻"];

  // Handle post click
  const handleCardClick = (post) => {
    setSelectedPost(post);
    setShowDetail(true);
    document.body.style.overflow = 'hidden';
  };

  // Handle close detail
  const handleCloseDetail = () => {
    setShowDetail(false);
    setTimeout(() => setSelectedPost(null), 300);
    document.body.style.overflow = 'auto';
  };

  // Get related posts
  const getRelatedPosts = (currentPost) => {
    return blogPosts.filter(post => 
      currentPost.relatedPosts.includes(post.id)
    );
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-amber-400 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2070&q=80")',
          }}
        ></div>

        <div className="absolute inset-0 bg-amber-900/70"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-xl tracking-wide">
              Anand Religious Trust
            </h1>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-amber-300 drop-shadow-xl tracking-wide">
              MAA SENA
            </h2>

            <p className="text-xl md:text-2xl font-semibold mb-4 text-amber-100 max-w-3xl mx-auto">
              Guided by Dharma. Rooted in Vedas. Serving Humanity Through Spiritual Truth.
            </p>

            <p className="text-lg md:text-xl text-amber-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              A sacred initiative dedicated to spreading Sanatan Dharma's timeless wisdom and guiding individuals worldwide through authentic Vedic practices for holistic well-being and spiritual evolution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
              >
                Explore Rituals
              </Link>

              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-amber-800 px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105"
              >
                Book a Havan / Pooja
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-3xl md:text-4xl font-bold text-orange-800 mb-6"
          >
            Who We Are
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-orange-50 p-8 md:p-12 rounded-xl shadow-xl border border-orange-200"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              Anand Religious Trust - MAA SENA is committed to preserving ancient Sanatan Dharma wisdom and providing simple spiritual solutions through authentic Vedic rituals and teachings. We bridge ancient wisdom with modern needs, making profound spiritual practices accessible to everyone.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              Our purpose is to guide individuals toward clarity, healing, and balanced living through Vedic knowledge, divine rituals, and spiritual discipline. We believe in the transformative power of authentic Vedic practices to bring harmony to mind, body, and soul.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We carry forward the legacy of Dharma with devotion, ensuring each person receives pure spiritual guidance and blessings. Our team consists of experienced Vedic priests, astrologers, and spiritual guides dedicated to serving humanity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section */}
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
              Carefully curated knowledge to guide your spiritual journey with authenticity and scientific backing. Dive deep into ancient wisdom made relevant for modern times.
            </p>
          </motion.div>

          {/* Search and Filter Section */}
        

          {/* Posts Grid */}
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
                {/* Image Container */}
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
                  
                  {/* Badge */}
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
                
                {/* Content */}
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

                  {/* CTA Button */}
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

      {/* Spiritual Benefits Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center text-3xl md:text-4xl font-bold text-orange-800 mb-12"
          >
            Transformative Spiritual Benefits
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spiritualBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-orange-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-orange-800">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center text-3xl md:text-4xl font-bold text-orange-800 mb-6"
          >
            What We Offer
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map((off, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-orange-100 text-center hover:shadow-xl transition"
              >
                {off.icon}
                <h3 className="text-2xl font-bold text-orange-800 mb-2">{off.title}</h3>
                <p className="text-gray-700">{off.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center text-3xl md:text-4xl font-bold text-orange-800 mb-12"
          >
            Our Spiritual Process
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                 
                  <h3 className="text-xl font-bold text-orange-800 mb-3 mt-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5  transform translate-x-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vedic Services Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center text-3xl md:text-4xl font-bold text-orange-800 mb-10"
          >
            Our Vedic Services
          </motion.h2>
          
          {/* Service Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.values(vedicServices).map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeService === service.id
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-orange-100 text-orange-800 hover:bg-orange-200'
                }`}
              >
                <span className="text-xl mr-2">{service.icon}</span>
                {service.englishName}
              </button>
            ))}
          </div>
          
          {/* Service Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {vedicServices[activeService] && (
                <div className="bg-orange-50 rounded-3xl shadow-lg p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                      <h3 className="text-3xl font-bold text-orange-800 mb-4">
                        {vedicServices[activeService].name} - {vedicServices[activeService].englishName}
                      </h3>
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {vedicServices[activeService].description}
                      </p>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-semibold text-orange-700 mb-3">Key Benefits</h4>
                          <ul className="space-y-2">
                            {vedicServices[activeService].benefits.map((benefit, index) => (
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
                            {vedicServices[activeService].process.map((step, index) => (
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
                            <span className="font-semibold text-orange-800">{vedicServices[activeService].duration}</span>
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
                          {vedicServices[activeService].requirements.map((requirement, index) => (
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
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Why Choose */}
    <section className="py-16 bg-white">
  <div className="container mx-auto px-4 max-w-6xl">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">
        Why Choose MAA SENA?
      </h2>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto">
        At MAA SENA, we stand apart by offering <span className="text-orange-600 font-semibold">authentic Vedic practices</span> rooted in original scriptures, 
        <span className="text-orange-600 font-semibold"> pure rituals without shortcuts</span>, and <span className="text-orange-600 font-semibold">personalized guidance based on your Janam Kundali</span>. 
        We provide <span className="text-orange-600 font-semibold">global access via live links</span>, ensuring you can participate from anywhere while 
        maintaining <span className="text-orange-600 font-semibold">astrologically auspicious timing</span>. Our <span className="text-orange-600 font-semibold">experienced Vedic priests</span> 
        deliver <span className="text-orange-600 font-semibold">proven spiritual results</span> with <span className="text-orange-600 font-semibold">ongoing support</span> throughout your journey.
      </p>
    </motion.div>
  </div>
</section>

      {/* Global Reach */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center text-3xl md:text-4xl font-bold text-orange-800 mb-12"
          >
            Serving Worldwide
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-orange-800 mb-2">50+ Countries</h3>
              <p className="text-gray-600">Serving spiritual seekers worldwide</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconUsers className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-orange-800 mb-2">5000+ Families</h3>
              <p className="text-gray-600">Transformed through our services</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconAward className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-orange-800 mb-2">25+ Years</h3>
              <p className="text-gray-600">Of authentic Vedic tradition</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-orange-800 mb-10">
            Explore Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Rituals */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Link to="/services" className="block bg-white p-8 rounded-xl shadow-md border border-orange-100 hover:shadow-xl transition group">
                <div className="flex justify-center mb-4">
                  <Flame className="w-12 h-12 text-red-600 group-hover:scale-110 transition" />
                </div>
                <h3 className="text-center text-2xl font-bold text-orange-800 mb-3 group-hover:text-orange-600 transition">Our Rituals</h3>
                <p className="text-center text-gray-700 mb-4">Explore Havan, Pooja, and Special Homams based on Vedic principles.</p>
                <p className="text-center text-orange-600 font-semibold">Explore Rituals →</p>
              </Link>
            </motion.div>

            {/* Services */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <Link to="/industries" className="block bg-white p-8 rounded-xl shadow-md border border-orange-100 hover:shadow-xl transition group">
                <div className="flex justify-center mb-4">
                  <FileText className="w-12 h-12 text-blue-600 group-hover:scale-110 transition" />
                </div>
                <h3 className="text-center text-2xl font-bold text-orange-800 mb-3 group-hover:text-orange-600 transition">Services</h3>
                <p className="text-center text-gray-700 mb-4">Full catalog of Vedic rituals, homams, and spiritual services.</p>
                <p className="text-center text-orange-600 font-semibold">View Services →</p>
              </Link>
            </motion.div>

            {/* Blog */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              <Link to="/blog" className="block bg-white p-8 rounded-xl shadow-md border border-orange-100 hover:shadow-xl transition group">
                <div className="flex justify-center mb-4">
                  <BookOpen className="w-12 h-12 text-green-600 group-hover:scale-110 transition" />
                </div>
                <h3 className="text-center text-2xl font-bold text-orange-800 mb-3 group-hover:text-orange-600 transition">Blog</h3>
                <p className="text-center text-gray-700 mb-4">Read articles on Vedic wisdom & spiritual guidance.</p>
                <p className="text-center text-orange-600 font-semibold">Read Articles →</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-orange-800 mb-10">
            What People Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: i * 0.15 }} className="bg-white p-6 rounded-xl shadow border border-orange-100">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-orange-200 text-orange-800 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.location}</p>
                  </div>
                </div>
                <p className="italic text-gray-600">"{t.text}"</p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-dark mb-6"
          >
            Begin Your Spiritual Journey Today
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-dark/90 mb-8 max-w-2xl mx-auto"
          >
            Experience the transformative power of authentic Vedic practices. Connect with ancient wisdom for modern life challenges.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-white text-dark-600 hover:bg-orange-50 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              Book Consultation
            </Link>
            
            <Link
              to="/services"
              className="border-2  text-dark hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {showDetail && selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={handleCloseDetail}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-xl md:rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Image */}
              <div className="h-48 md:h-60 relative bg-gradient-to-br from-orange-900 to-orange-700 flex-shrink-0">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallbackDiv = e.target.nextSibling;
                    if (fallbackDiv) {
                      fallbackDiv.style.display = 'flex';
                    }
                  }}
                />
                <div className="absolute inset-0 hidden items-center justify-center text-6xl bg-gradient-to-br from-orange-900 to-orange-700">
                  {fallbackEmojis[selectedPost.id - 1]}
                </div>
                
                {/* Close Button */}
                <button
                  onClick={handleCloseDetail}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:scale-110"
                >
                  <X className="w-5 h-5" />
                </button>
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full font-semibold text-sm border border-white/30">
                      {selectedPost.category}
                    </span>
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-sm">
                      {selectedPost.readTime}
                    </span>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">{selectedPost.title}</h1>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm text-white/90">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {selectedPost.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-xs font-bold">
                        {selectedPost.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      {selectedPost.author} • {selectedPost.authorRole}
                    </div>
                  </div>
                </div>
              </div>

              {/* Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-6 md:p-8">
                  {/* Article Content */}
                  <div 
                    className="prose prose-lg max-w-none mb-8"
                    dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                  />
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedPost.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                    <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                      Save Article
                    </button>
                    <button className="flex-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                      Share Wisdom
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;