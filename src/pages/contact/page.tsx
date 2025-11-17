
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Contact() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    investmentInterest: '',
    investmentBudget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.investmentInterest) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Web3Forms API - Replace 'YOUR_ACCESS_KEY_HERE' with your actual access key from https://web3forms.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '98c90b99-f77e-43ba-a4bc-00d92b25246a',
          subject: 'New Investment Inquiry from Aurum Advisory Website',
          from_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          investment_interest: formData.investmentInterest,
          investment_budget: formData.investmentBudget,
          timeline: formData.timeline,
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          country: '',
          investmentInterest: '',
          investmentBudget: '',
          timeline: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
                <Link to="/about" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                  About
                </Link>
                <Link to="/services" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                  Services
                </Link>
                <Link to="/network" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                  Network
                </Link>
                <Link to="/contact" className="text-gray-900 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
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
                  className="text-gray-700 hover:text-yellow-600 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
                >
                  Network
                </Link>
                <Link 
                  to="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-900 hover:text-yellow-600 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
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
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll slide-in-up">
            Ready to unlock Kenya's premium opportunities? Let's start the conversation about your investment and lifestyle goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>
                Premium Opportunity Consultation
              </h2>
              
              <form id="contact-form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-sm"
                      placeholder="+254 (000) 000-000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                      Country/Region
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-sm"
                      placeholder="Your country"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="investmentInterest" className="block text-sm font-medium text-gray-700 mb-2">
                    Investment Interest *
                  </label>
                  <select
                    id="investmentInterest"
                    name="investmentInterest"
                    value={formData.investmentInterest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-sm pr-8"
                  >
                    <option value="">Select your primary interest</option>
                    <option value="Real Estate & Investment">Real Estate & Investment</option>
                    <option value="Agriculture & Exports">Agriculture & Exports</option>
                    <option value="Luxury Lifestyle & Wellness">Luxury Lifestyle & Wellness</option>
                    <option value="Hospitality & Tourism">Hospitality & Tourism</option>
                    <option value="Wine, Events & Entertainment">Wine, Events & Entertainment</option>
                    <option value="Philanthropy & Social Impact">Philanthropy & Social Impact</option>
                    <option value="Medical & Pharmaceutical">Medical & Pharmaceutical</option>
                    <option value="Imports & Exports">Imports & Exports</option>
                    <option value="Multiple Sectors">Multiple Sectors</option>
                  </select>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="investmentBudget" className="block text-sm font-medium text-gray-700 mb-2">
                      Investment Budget Range
                    </label>
                    <select
                      id="investmentBudget"
                      name="investmentBudget"
                      value={formData.investmentBudget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">Select budget range</option>
                      <option value="KES 5M - 10M">KES 5M - 10M</option>
                      <option value="KES 10M - 50M">KES 10M - 50M</option>
                      <option value="KES 50M - 100M">KES 50M - 100M</option>
                      <option value="KES 100M - 500M">KES 100M - 500M</option>
                      <option value="KES 500M+">KES 500M+</option>
                      <option value="Prefer to discuss">Prefer to discuss</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Investment Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">Select timeline</option>
                      <option value="Immediate (1-3 months)">Immediate (1-3 months)</option>
                      <option value="Short-term (3-6 months)">Short-term (3-6 months)</option>
                      <option value="Medium-term (6-12 months)">Medium-term (6-12 months)</option>
                      <option value="Long-term (1+ years)">Long-term (1+ years)</option>
                      <option value="Exploring options">Exploring options</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-sm resize-none"
                    placeholder="Tell us more about your goals and interests..."
                  ></textarea>
                  <div className="text-sm text-gray-500 mt-1">
                    {formData.message.length}/500 characters
                  </div>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex">
                      <i className="ri-check-circle-line text-green-500 text-xl mr-3"></i>
                      <div>
                        <h3 className="text-green-800 font-semibold">Message Sent Successfully!</h3>
                        <p className="text-green-700 text-sm">Thank you for your interest. Dorothy will respond within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex">
                      <i className="ri-error-warning-line text-red-500 text-xl mr-3"></i>
                      <div>
                        <h3 className="text-red-800 font-semibold">Submission Failed</h3>
                        <p className="text-red-700 text-sm">Please check required fields and try again.</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-yellow-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="lg:pl-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>
                Let's Connect
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-xl text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-600">dorothyshali57@gmail.com</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-whatsapp-line text-xl text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">WhatsApp</h4>
                    <p className="text-gray-600">+254 792 383372</p>
                    <p className="text-sm text-gray-500">Available for premium consultations</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-xl text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                    <p className="text-gray-600">+254 792 383372</p>
                    <p className="text-sm text-gray-500">Call for immediate assistance</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-xl text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                    <p className="text-gray-600">Nairobi, Kenya</p>
                    <p className="text-sm text-gray-500">Meetings by appointment</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-xl text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EAT</p>
                    <p className="text-sm text-gray-500">Weekend consultations available</p>
                  </div>
                </div>
              </div>
              
              {/* Quick Action Buttons */}
              <div className="mt-12 grid grid-cols-2 gap-4">
                <a
                  href="https://wa.me/254792383372"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <i className="ri-whatsapp-line text-2xl"></i>
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+254792383372"
                  className="flex items-center justify-center gap-3 bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <i className="ri-phone-line text-2xl"></i>
                  <span>Call Now</span>
                </a>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-4">Follow Dorothy's Insights</h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/dorothy-mwazighe-6580b2279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center text-white hover:bg-yellow-700 transition-colors">
                    <i className="ri-linkedin-line"></i>
                  </a>
                  <a href="https://www.instagram.com/aurum_advisory?igsh=MTc2NmNlYWx3YzVpeQ==" className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center text-white hover:bg-yellow-700 transition-colors">
                    <i className="ri-instagram-line"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center text-white hover:bg-yellow-700 transition-colors">
                    <i className="ri-tiktok-line"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center text-white hover:bg-yellow-700 transition-colors">
                    <i className="ri-youtube-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Our Location
            </h2>
            <p className="text-xl text-gray-600">Based in the heart of East Africa's business hub</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35893891138!2d36.682861!3d-1.302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nairobi Location"
            ></iframe>
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
