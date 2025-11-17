import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
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
                <Link to="/" className="text-gray-900 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                  Home
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
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
                  className="text-gray-900 hover:text-yellow-600 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
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
      <section 
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-200 to-white"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Stunning%20panoramic%20view%20of%20Nairobi%20skyline%20at%20golden%20hour%20with%20modern%20skyscrapers%20and%20acacia%20trees%2C%20luxury%20business%20district%20with%20warm%20golden%20lighting%2C%20professional%20photography%20style%2C%20clean%20composition%20with%20soft%20blue%20sky%20gradient%2C%20elegant%20and%20sophisticated%20atmosphere%20representing%20premium%20investment%20opportunities%20in%20Kenya&width=1920&height=1080&seq=hero1&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/80 to-white/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-full hero-animate">
            <h1 className="text-6xl md:text-8xl font-bold text-yellow-600 mb-6 animate-on-scroll slide-in-up" style={{ fontFamily: '"Playfair Display", serif' }}>
              Aurum Advisory
            </h1>
            <p className="text-2xl md:text-3xl text-blue-600 font-medium mb-8 animate-on-scroll slide-in-up">
              Local Insights Meet Global Opportunities
            </p>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed animate-on-scroll slide-in-up">
              Unlock the essence of Kenya through premium investment and lifestyle opportunities. 
              We connect international clients with Kenya's finest prospects using our local expertise and global network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll slide-in-up">
              <Link 
                to="/services" 
                className="bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Explore Services
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll slide-in-left">
            <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <i className="ri-global-line text-2xl text-white"></i>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We connect <span className="text-yellow-600 font-semibold">international clients</span> with Kenya's finest 
              <span className="text-yellow-600 font-semibold"> investment and lifestyle opportunities</span>, using our 
              <span className="text-yellow-600 font-semibold"> local expertise</span> and 
              <span className="text-yellow-600 font-semibold"> global network</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll slide-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Premium Services
            </h2>
            <p className="text-xl text-gray-600">Connecting you to Kenya's finest opportunities</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-container">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-yellow-100 hover:shadow-lg transition-shadow stagger-item hover-lift">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-building-line text-xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Real Estate & Investment</h3>
              <p className="text-gray-600">Luxury properties, Airbnb/B&B opportunities, and premium franchises</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-yellow-100 hover:shadow-lg transition-shadow stagger-item hover-lift">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-plant-line text-xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Agriculture & Exports</h3>
              <p className="text-gray-600">Premium agribusiness sourcing and export opportunities</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-yellow-100 hover:shadow-lg transition-shadow stagger-item hover-lift">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-flight-takeoff-line text-xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Hospitality & Tourism</h3>
              <p className="text-gray-600">Luxury safaris, premium resorts, and authentic cultural tours</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-yellow-100 hover:shadow-lg transition-shadow stagger-item hover-lift">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-heart-line text-xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Luxury Lifestyle</h3>
              <p className="text-gray-600">Premium jewelry, cosmetics, wellness, and fitness opportunities</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll slide-in-left">
              <img 
                src="/photos/Home pic.jpg"
                alt="Dorothy Shaly - Founder"
                className="rounded-2xl shadow-lg object-cover w-full h-96 lg:h-full"
              />
            </div>
            <div className="animate-on-scroll slide-in-right">
              <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
                Meet Dorothy Shali
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                International Relations Consultant, multilingual expert, and your trusted guide to Kenya's premium opportunities. 
                With deep cultural fluency and an extensive global network, Dorothy specializes in connecting international clients 
                with high-end investment and lifestyle prospects.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
                  <i className="ri-global-line text-yellow-600"></i>
                  <span className="text-sm font-medium">English</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
                  <i className="ri-global-line text-yellow-600"></i>
                  <span className="text-sm font-medium">German</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
                  <i className="ri-global-line text-yellow-600"></i>
                  <span className="text-sm font-medium">Swahili</span>
                </div>
                
              </div>
              <Link 
                to="/about" 
                className="bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            Ready to Unlock Kenya's Premium Opportunities?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get in touch for exclusive access to luxury investments, lifestyle experiences, and business opportunities in Kenya.
          </p>
          <Link 
            to="/contact" 
            className="bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            Get In Touch for Premium Opportunities
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
