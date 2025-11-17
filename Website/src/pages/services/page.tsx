
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Services() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const services = [
    {
      icon: 'ri-building-line',
      title: 'Real Estate & Investment',
      description: 'Luxury properties, Airbnb/B&B, franchises',
      details: [
        'Premium residential and commercial properties',
        'High-yield Airbnb and B&B opportunities',
        'Established franchise investments',
        'Land acquisition and development projects',
        'Property management services'
      ],
      image: 'https://readdy.ai/api/search-image?query=Luxury%20modern%20residential%20property%20in%20Nairobi%20with%20elegant%20architecture%2C%20premium%20finishes%2C%20landscaped%20gardens%2C%20and%20city%20skyline%20views%2C%20representing%20high-end%20real%20estate%20investment%20opportunities%20in%20Kenya%2C%20professional%20real%20estate%20photography%20style&width=600&height=400&seq=realestate1&orientation=landscape'
    },
    {
      icon: 'ri-plant-line',
      title: 'Agriculture & Exports',
      description: 'Premium agribusiness sourcing',
      details: [
        'Coffee and tea plantation investments',
        'Organic farming and sustainable agriculture',
        'Export-quality produce sourcing',
        'Agribusiness partnership opportunities',
        'Supply chain optimization'
      ],
      image: '/photos/Agriculture & Exports.jpg'
    },
    {
      icon: 'ri-heart-line',
      title: 'Luxury Lifestyle & Wellness',
      description: 'Jewelry, cosmetics, salons, fitness',
      details: [
        'High-end jewelry and accessories',
        'Premium beauty and cosmetics brands',
        'Luxury salon and spa investments',
        'Fitness and wellness centers',
        'Lifestyle brand partnerships'
      ],
      image: 'https://readdy.ai/api/search-image?query=Elegant%20luxury%20spa%20and%20wellness%20center%20interior%20with%20modern%20African-inspired%20design%2C%20premium%20amenities%2C%20serene%20atmosphere%2C%20representing%20high-end%20lifestyle%20and%20wellness%20investment%20opportunities%20in%20Kenya&width=600&height=400&seq=wellness1&orientation=landscape'
    },
    {
      icon: 'ri-flight-takeoff-line',
      title: 'Hospitality & Tourism',
      description: 'Safaris, resorts, cultural tours',
      details: [
        'Luxury safari lodge investments',
        'Premium resort and hotel opportunities',
        'Cultural tourism experiences',
        'Eco-tourism and conservation projects',
        'Event and conference facilities'
      ],
      image: 'https://readdy.ai/api/search-image?query=Luxury%20safari%20lodge%20in%20Kenya%20with%20elegant%20tented%20accommodations%2C%20panoramic%20savanna%20views%2C%20acacia%20trees%2C%20representing%20premium%20hospitality%20and%20tourism%20investment%20opportunities%2C%20professional%20travel%20photography&width=600&height=400&seq=tourism1&orientation=landscape'
    },
    {
      icon: 'ri-goblet-line',
      title: 'Wine, Events & Entertainment',
      description: 'Nightlife, wine networks, high-end events',
      details: [
        'Premium wine import and distribution',
        'High-end event planning and management',
        'Luxury nightlife and entertainment venues',
        'Corporate event services',
        'Cultural and arts events'
      ],
      image: 'https://readdy.ai/api/search-image?query=Elegant%20wine%20tasting%20event%20in%20upscale%20Nairobi%20venue%20with%20premium%20wines%2C%20sophisticated%20lighting%2C%20luxury%20ambiance%2C%20representing%20high-end%20entertainment%20and%20wine%20business%20opportunities%20in%20Kenya&width=600&height=400&seq=wine1&orientation=landscape'
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Philanthropy & Social Impact',
      description: 'CSR, CBOs, orphanage partnerships',
      details: [
        'Corporate social responsibility programs',
        'Community-based organization partnerships',
        'Educational and healthcare initiatives',
        'Orphanage and children\'s home support',
        'Sustainable development projects'
      ],
      image: '/photos/orphanage partnerships.jpg'
    },
    {
      icon: 'ri-health-book-line',
      title: 'Medical & Pharmaceutical',
      description: 'Trusted healthcare networks',
      details: [
        'Medical equipment and technology',
        'Pharmaceutical distribution networks',
        'Healthcare facility investments',
        'Medical tourism opportunities',
        'Telemedicine and digital health'
      ],
      image: 'https://readdy.ai/api/search-image?query=Modern%20medical%20facility%20in%20Kenya%20with%20advanced%20equipment%2C%20professional%20healthcare%20environment%2C%20representing%20medical%20and%20pharmaceutical%20investment%20opportunities%2C%20clean%20medical%20photography%20style&width=600&height=400&seq=medical1&orientation=landscape'
    },
    {
      icon: 'ri-ship-line',
      title: 'Imports & Exports',
      description: 'High-tech and premium goods',
      details: [
        'Technology and electronics import',
        'Premium consumer goods distribution',
        'Manufacturing and assembly operations',
        'Logistics and supply chain management',
        'Trade finance and documentation'
      ],
      image: 'https://readdy.ai/api/search-image?query=Modern%20logistics%20and%20shipping%20facility%20in%20Mombasa%20port%20Kenya%20with%20containers%2C%20cargo%20operations%2C%20representing%20import%20export%20business%20opportunities%2C%20professional%20industrial%20photography&width=600&height=400&seq=imports1&orientation=landscape'
    },
    {
      icon: 'ri-code-box-line',
      title: 'Technology & Digital Solutions',
      description: 'Websites, applications, and high-end digital systems',
      details: [
        'Custom websites for businesses, brands, and investors',
        'Mobile and web application development',
        'Business automation and digital transformation',
        'Premium IT consulting and system architecture',
        'Cybersecurity and data protection guidance',
        'E-commerce platforms and payment integration',
        'Digital branding and Social media management'
      ],
      image: '/photos/Technology & Digital Solutions.jpg'
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
                <Link to="/services" className="text-gray-900 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
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
                  className="text-gray-700 hover:text-yellow-600 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
                >
                  About
                </Link>
                <Link 
                  to="/services" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-900 hover:text-yellow-600 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
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
            Premium Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll slide-in-up">
            Connecting international clients with Kenya's finest investment and lifestyle opportunities across multiple sectors
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''} animate-on-scroll ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-16 h-16 bg-yellow-600 rounded-xl flex items-center justify-center mb-6">
                    <i className={`${service.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-3xl font-bold text-blue-600 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-lg object-cover w-full h-80"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll slide-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Our Process
            </h2>
            <p className="text-xl text-gray-600">How we connect you with premium opportunities</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Consultation</h3>
              <p className="text-gray-600">
                Initial discussion to understand your investment goals, preferences, and requirements
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Opportunity Matching</h3>
              <p className="text-gray-600">
                Leveraging our network to identify premium opportunities that align with your criteria
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Due Diligence</h3>
              <p className="text-gray-600">
                Comprehensive evaluation and verification of opportunities to ensure quality and authenticity
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Partnership</h3>
              <p className="text-gray-600">
                Facilitating connections and providing ongoing support for successful partnerships
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Why Choose Aurum Advisory
            </h2>
            <p className="text-xl text-gray-600">What sets us apart in connecting you with premium opportunities</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-user-star-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Local Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of Kenyan markets, culture, and business practices with multilingual capabilities
              </p>
            </div>
            
            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-vip-crown-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                Curated selection of only the finest opportunities, ensuring exceptional quality and value
              </p>
            </div>
            
            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-customer-service-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Personalized Service</h3>
              <p className="text-gray-600">
                Tailored approach to each client's unique needs with dedicated support throughout the process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            Ready to Explore Premium Opportunities?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let us connect you with Kenya's finest investment and lifestyle opportunities tailored to your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/network" 
              className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              View Our Network
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
