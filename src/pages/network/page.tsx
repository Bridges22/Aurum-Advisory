
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Network() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const partners = [
    {
      sector: 'Real Estate & Investment',
      companies: [
        'Nairobi Premier Properties Ltd.',
        'Kenya Luxury Developments',
        'East Africa Investment Group',
        'Mombasa Coastal Estates',
        'Highland Property Partners'
      ],
      icon: 'ri-building-line'
    },
    {
      sector: 'Agriculture & Exports',
      companies: [
        'Kenya Coffee Excellence Co.',
        'Mount Kenya Tea Estates',
        'Organic Farms Collective',
        'Export Quality Produce Ltd.',
        'Sustainable Agriculture Partners'
      ],
      icon: 'ri-plant-line'
    },
    {
      sector: 'Hospitality & Tourism',
      companies: [
        'Maasai Mara Luxury Lodges',
        'Coastal Resort Collection',
        'Safari Adventure Specialists',
        'Cultural Heritage Tours',
        'Eco-Tourism Kenya'
      ],
      icon: 'ri-flight-takeoff-line'
    },
    {
      sector: 'Luxury Lifestyle & Wellness',
      companies: [
        'Nairobi Elite Spas',
        'African Artisan Jewelry Co.',
        'Premium Beauty Brands Kenya',
        'Wellness Center Network',
        'Luxury Fitness Studios'
      ],
      icon: 'ri-heart-line'
    },
    {
      sector: 'Wine & Entertainment',
      companies: [
        'Kenya Premium Wine Imports',
        'Elite Event Planners',
        'Nairobi Nightlife Group',
        'Cultural Events Collective',
        'Entertainment Venue Partners'
      ],
      icon: 'ri-goblet-line'
    },
    {
      sector: 'Medical & Pharmaceutical',
      companies: [
        'Nairobi Medical Excellence',
        'Kenya Healthcare Network',
        'Premium Pharmaceutical Dist.',
        'Medical Equipment Solutions',
        'Health Tourism Kenya'
      ],
      icon: 'ri-health-book-line'
    }
  ];

  const testimonials = [
    {
      name: 'Michael Schmidt',
      company: 'German Investment Group',
      text: 'Dorothy\'s expertise in connecting us with premium coffee plantation opportunities was exceptional. Her cultural fluency and professional network made the entire process seamless.',
      flag: '🇩🇪'
    },
    {
      name: 'Sarah Chen',
      company: 'Asian Luxury Imports',
      text: 'Working with Aurum Advisory opened doors to authentic Kenyan luxury lifestyle brands. The quality of partnerships Dorothy facilitated exceeded our expectations.',
      flag: '🇨🇳'
    },
    {
      name: 'James Mitchell',
      company: 'UK Safari Investments',
      text: 'The hospitality opportunities Dorothy presented were world-class. Her deep understanding of both markets ensured a profitable and authentic partnership.',
      flag: '🇬🇧'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-3 cursor-pointer">
                <img 
                  src="/photos/Logo.jpg" 
                  alt="Aurum Advisory Logo" 
                  className="h-10 sm:h-12 w-auto"
                />
                <span className="text-xl sm:text-2xl font-bold text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
                  Aurum Advisory
                </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                  Home
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                  About
                </Link>
                <Link to="/services" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                  Services
                </Link>
                <Link to="/network" className="text-gray-900 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                  Network
                </Link>
                <Link to="/contact" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                  Contact
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-yellow-600 p-2 cursor-pointer"
                aria-label="Toggle menu"
              >
                <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
                <Link 
                  to="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-yellow-600 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-yellow-600 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
                >
                  About
                </Link>
                <Link 
                  to="/services" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-yellow-600 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
                >
                  Services
                </Link>
                <Link 
                  to="/network" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-900 hover:text-yellow-600 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
                >
                  Network
                </Link>
                <Link 
                  to="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-yellow-600 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-100 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-on-scroll slide-in-up" style={{ fontFamily: '"Playfair Display", serif' }}>
            Our Network
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll slide-in-up">
            Trusted partners across Kenya's premium sectors, carefully curated for exceptional quality and reliability
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Premium Partners
            </h2>
            <p className="text-xl text-gray-600">Established relationships across multiple sectors</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-yellow-100">
                <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-6">
                  <i className={`${partner.icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-6">
                  {partner.sector}
                </h3>
                <ul className="space-y-3">
                  {partner.companies.map((company, companyIndex) => (
                    <li key={companyIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{company}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Stats */}
      <section className="py-20 bg-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-yellow-600 mb-2">150+</div>
              <div className="text-gray-600">Verified Partners</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-yellow-600 mb-2">8</div>
              <div className="text-gray-600">Key Sectors</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-yellow-600 mb-2">25+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-yellow-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600">What our international clients say about our network</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{testimonial.flag}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Partnership Vetting Process
            </h2>
            <p className="text-xl text-gray-600">How we ensure quality and reliability</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-search-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-blue-600 mb-4">Research & Verification</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive background checks and business verification processes
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-blue-600 mb-4">Quality Assessment</h3>
              <p className="text-gray-600 text-sm">
                Evaluation of service quality, reputation, and market standing
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-handshake-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-blue-600 mb-4">Relationship Building</h3>
              <p className="text-gray-600 text-sm">
                Establishing trusted relationships and partnership agreements
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-refresh-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-blue-600 mb-4">Ongoing Monitoring</h3>
              <p className="text-gray-600 text-sm">
                Continuous evaluation and relationship maintenance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            Join Our Exclusive Network
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Connect with premium partners and unlock exceptional opportunities in Kenya's thriving markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Explore Partnerships
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link to="/" className="inline-block mb-4">
                <img 
                  src="/photos/Logo.jpg" 
                  alt="Aurum Advisory Logo" 
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-gray-300 mb-4">
                Local Insights Meet Global Opportunities
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/aurum_advisory?igsh=MTc2NmNlYWx3YzVpeQ==" className="text-yellow-600 hover:text-yellow-500 transition-colors">
                  <i className="ri-instagram-line text-xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/dorothy-mwazighe-6580b2279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-yellow-600 hover:text-yellow-500 transition-colors">
                  <i className="ri-linkedin-line text-xl"></i>
                </a>
                <a href="#" className="text-yellow-600 hover:text-yellow-500 transition-colors">
                  <i className="ri-tiktok-line text-xl"></i>
                </a>
                <a href="#" className="text-yellow-600 hover:text-yellow-500 transition-colors">
                  <i className="ri-youtube-line text-xl"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-yellow-600 transition-colors cursor-pointer">About</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-yellow-600 transition-colors cursor-pointer">Services</Link></li>
                <li><Link to="/network" className="text-gray-300 hover:text-yellow-600 transition-colors cursor-pointer">Network</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-yellow-600 transition-colors cursor-pointer">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center gap-2">
                  <i className="ri-mail-line text-yellow-600"></i>
                  dorothyshali57@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <i className="ri-whatsapp-line text-yellow-600"></i>
                  WhatsApp Available
                </p>
                <p className="flex items-center gap-2">
                  <i className="ri-map-pin-line text-yellow-600"></i>
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Aurum Advisory. All rights reserved.
            </p>
            <a 
              href="https://bridgeswebsolutions.top/" 
              className="text-gray-400 hover:text-yellow-600 text-sm transition-colors cursor-pointer"
            >
              Powered by Bridges Web Solutions
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
