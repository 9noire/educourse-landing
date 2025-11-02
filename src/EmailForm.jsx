import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaRocket, 
  FaPaperPlane, 
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';
import logo from './assets/educourse-logo.png';

function EmailForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi pengiriman email
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <img 
                src={logo} 
                alt="Educourse Logo" 
                className="h-10 w-auto transition-all duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <button 
                onClick={() => {
                  window.location.href = '/#home';
                }}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  scrolled ? 'text-gray-600 hover:text-[#00adb5]' : 'text-white/90 hover:text-white'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => {
                  window.location.href = '/#about';
                }}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  scrolled ? 'text-gray-600 hover:text-[#00adb5]' : 'text-white/90 hover:text-white'
                }`}
              >
                Program
              </button>
              <button 
                onClick={() => {
                  window.location.href = '/#benefits';
                }}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  scrolled ? 'text-gray-600 hover:text-[#00adb5]' : 'text-white/90 hover:text-white'
                }`}
              >
                Keunggulan
              </button>
              <Link 
                to="/contact" 
                className="bg-[#00adb5] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#00959c] transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className={`lg:hidden text-2xl transition-colors duration-300 ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <nav className={`rounded-2xl p-6 shadow-xl border ${
              scrolled ? 'bg-white/95 backdrop-blur-md border-gray-200' : 'bg-white/20 backdrop-blur-md border-white/20'
            }`}>
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => {
                    window.location.href = '/#home';
                    setIsMenuOpen(false);
                  }}
                  className={`text-left py-2 transition-colors duration-300 ${
                    scrolled ? 'text-gray-800 hover:text-[#00adb5]' : 'text-white hover:text-[#ffcb00]'
                  }`}
                >
                  Home
                </button>
                <button 
                  onClick={() => {
                    window.location.href = '/#about';
                    setIsMenuOpen(false);
                  }}
                  className={`text-left py-2 transition-colors duration-300 ${
                    scrolled ? 'text-gray-800 hover:text-[#00adb5]' : 'text-white hover:text-[#ffcb00]'
                  }`}
                >
                  Program
                </button>
                <button 
                  onClick={() => {
                    window.location.href = '/#benefits';
                    setIsMenuOpen(false);
                  }}
                  className={`text-left py-2 transition-colors duration-300 ${
                    scrolled ? 'text-gray-800 hover:text-[#00adb5]' : 'text-white hover:text-[#ffcb00]'
                  }`}
                >
                  Keunggulan
                </button>
                <Link 
                  to="/contact" 
                  className="bg-[#00adb5] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#00959c] transition-all duration-300 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Contact Hero Section */}
      <section className="bg-gradient-to-r from-[#00adb5] to-[#00959c] text-white py-16 pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <IoSparkles className="inline mr-3 text-[#ffcb00]" />
            Hubungi Kami
          </h1>
          <p className="text-xl sm:text-2xl opacity-90 max-w-2xl mx-auto">
            Siap membantu mewujudkan masa depan cerah untuk anak Anda
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 flex items-center">
              <FaPaperPlane className="text-[#00adb5] mr-3" />
              Kirim Pesan
            </h2>
            <p className="text-gray-600 mb-6">Kami akan membalas dalam 2 jam pada jam operasional</p>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4 text-green-500">🎉</div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Pesan Terkirim!</h3>
                <p className="text-green-700">
                  Terima kasih telah menghubungi kami. Tim Educourse akan merespons pesan Anda secepatnya.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 bg-[#00adb5] text-white px-6 py-2 rounded-lg hover:bg-[#00959c] transition-colors"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00adb5] focus:border-transparent transition-all"
                    placeholder="Masukkan nama lengkap Anda"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00adb5] focus:border-transparent transition-all"
                    placeholder="email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea 
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00adb5] focus:border-transparent transition-all"
                    placeholder="Ceritakan tentang kebutuhan belajar anak Anda atau pertanyaan lainnya..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#00adb5] to-[#00959c] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-[#00959c] hover:to-[#00838a] transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Mengirim...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Kirim Pesan</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <FaPhone className="text-[#00adb5] mr-3" />
                Informasi Kontak
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#00adb5] p-3 rounded-full">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">hello@educourse.id</p>
                    <p className="text-gray-600">support@educourse.id</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#ffcb00] p-3 rounded-full">
                    <FaWhatsapp className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">WhatsApp</h3>
                    <p className="text-gray-600">+62 812-3456-7890</p>
                    <p className="text-gray-600">Konsultasi Gratis</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#00adb5] p-3 rounded-full">
                    <FaClock className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Jam Operasional</h3>
                    <p className="text-gray-600">Senin - Jumat: 08.00 - 17.00 WIB</p>
                    <p className="text-gray-600">Sabtu: 08.00 - 12.00 WIB</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#ffcb00] p-3 rounded-full">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Alamat</h3>
                    <p className="text-gray-600">Jakarta, Indonesia</p>
                    <p className="text-gray-600">Online Learning Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-r from-[#00adb5] to-[#00959c] rounded-2xl shadow-xl p-8 text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center">
                <IoSparkles className="text-[#ffcb00] mr-3" />
                Follow Kami
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://instagram.com/educourse.id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-pink-600 py-3 px-4 rounded-lg font-semibold text-center hover:bg-pink-50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <FaInstagram />
                  <span>Instagram</span>
                </a>
                
                <a 
                  href="https://wa.me/6281234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 py-3 px-4 rounded-lg font-semibold text-center hover:bg-green-50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </a>
                
                <a 
                  href="https://youtube.com/educourse" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-red-600 py-3 px-4 rounded-lg font-semibold text-center hover:bg-red-50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <FaYoutube />
                  <span>YouTube</span>
                </a>
                
                <a 
                  href="mailto:hello@educourse.id" 
                  className="bg-white text-[#00adb5] py-3 px-4 rounded-lg font-semibold text-center hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <FaEnvelope />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-[#ffcb00] border-l-4 border-[#e6b800] rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <FaRocket className="text-2xl text-white mt-1" />
                <div>
                  <h3 className="font-bold text-white text-lg">Respon Cepat!</h3>
                  <p className="text-white text-sm">
                    Pesan Anda akan langsung kami proses dan dapat respons maksimal dalam 2 jam pada jam operasional.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <img 
              src={logo} 
              alt="Educourse Logo" 
              className="h-12 w-auto"
            />
          </div>
          <p className="text-lg mb-2">
            ❤️ Siap membantu masa depan anak Indonesia lebih cerah!
          </p>
          <p className="text-sm opacity-90">
            &copy; 2025 Educourse.id. All rights reserved. | Platform STEM Terbesar & Termurah
          </p>
        </div>
      </footer>
    </div>
  );
}

export default EmailForm;