
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function About() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
                <Link to="/about" className="text-gray-900 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                  About
                </Link>
                <Link to="/services" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                  Services
                </Link>
                <Link to="/network" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
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
                  className="text-gray-900 hover:text-yellow-600 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
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
                  className="text-gray-700 hover:text-yellow-600 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
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
            About Aurum Advisory
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll slide-in-up">
            Your trusted gateway to Kenya's premium investment and lifestyle opportunities
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll slide-in-left">
              <img 
                src="/photos/about.jpg"
                alt="Dorothy Shaly - Founder & CEO"
                className="rounded-2xl shadow-lg object-cover w-full h-96 lg:h-full"
              />
            </div>
            <div className="animate-on-scroll slide-in-right">
              <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
                Dorothy Shaly
              </h2>
              <h3 className="text-xl text-yellow-600 font-semibold mb-6">
                Founder & International Relations Consultant
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dorothy Shaly is a distinguished International Relations Consultant with extensive experience in connecting 
                global clients with premium opportunities across Kenya. Her multilingual expertise and deep cultural fluency 
                make her the ideal bridge between international investors and Kenya's finest prospects.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With a proven track record in negotiation, relationship building, and cultural navigation, Dorothy has 
                established trusted networks across luxury real estate, agribusiness, hospitality, technology & digital solutions, and lifestyle sectors. 
                Her commitment to excellence and authentic partnerships has made Aurum Advisory the premier choice for 
                discerning international clients.
              </p>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Language Expertise</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
                      <i className="ri-global-line text-white text-sm"></i>
                    </div>
                    <span className="font-medium">English</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
                      <i className="ri-global-line text-white text-sm"></i>
                    </div>
                    <span className="font-medium">German</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
                      <i className="ri-global-line text-white text-sm"></i>
                    </div>
                    <span className="font-medium">Swahili</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Core Expertise
            </h2>
            <p className="text-xl text-gray-600">What sets Dorothy and Aurum Advisory apart</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-earth-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Cultural Fluency</h3>
              <p className="text-gray-600">
                Deep understanding of both international business practices and Kenyan cultural nuances, 
                ensuring smooth cross-cultural partnerships.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-team-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Trusted Networks</h3>
              <p className="text-gray-600">
                Extensive high-end networks across multiple sectors, built through years of successful 
                partnerships and authentic relationship building.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-award-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Premium Standards</h3>
              <p className="text-gray-600">
                Commitment to excellence in every partnership, ensuring only the finest opportunities 
                and highest quality service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-compass-line text-xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To connect international clients with Kenya's finest investment and lifestyle opportunities, 
                using our local expertise and global network to create authentic, profitable, and culturally 
                enriching partnerships that benefit all stakeholders.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-eye-line text-xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be the premier gateway for international investors and lifestyle seekers looking to 
                unlock Kenya's premium opportunities, recognized for our integrity, cultural authenticity, 
                and commitment to sustainable, mutually beneficial partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Our Values
            </h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-blue-600"></i>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Integrity</h4>
              <p className="text-gray-600 text-sm">Transparent, honest dealings in every partnership</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-star-line text-2xl text-blue-600"></i>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-gray-600 text-sm">Premium quality in every service and opportunity</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-line text-2xl text-blue-600"></i>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Authenticity</h4>
              <p className="text-gray-600 text-sm">Genuine cultural connections and experiences</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-leaf-line text-2xl text-blue-600"></i>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Sustainability</h4>
              <p className="text-gray-600 text-sm">Long-term value for communities and partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how Dorothy's expertise and Aurum Advisory's network can unlock premium opportunities for you in Kenya.
          </p>
          <Link 
            to="/contact" 
            className="bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            Start Your Journey
          </Link>
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
