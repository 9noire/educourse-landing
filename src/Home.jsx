import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaLaptopCode, 
  FaRobot, 
  FaGlobeAmericas,
  FaGamepad,
  FaMobileAlt,
  FaAward,
  FaUsers,
  FaLightbulb,
  FaStar,
  FaChartLine,
  FaPhone,
  FaBook,
  FaPlay,
  FaHeart,
  FaMapMarkerAlt,
  FaBuilding,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import { 
  GiTeacher,
  GiPriceTag
} from 'react-icons/gi';
import { 
  IoSparkles,
  IoSchool
} from 'react-icons/io5';
import logo from './assets/educourse-logo.png';

function Home() {
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <img src={logo} alt="Educourse Logo" className="h-10 w-auto transition-all duration-300 group-hover:scale-105"/>
            </Link>

            <nav className="hidden lg:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('home')}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  scrolled ? 'text-gray-600 hover:text-[#00adb5]' : 'text-white/90 hover:text-white'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  scrolled ? 'text-gray-600 hover:text-[#00adb5]' : 'text-white/90 hover:text-white'
                }`}
              >
                Program
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
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

            <button 
              className={`lg:hidden text-2xl transition-colors duration-300 ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <nav className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-800 hover:text-[#00adb5] font-medium text-left py-2 transition-colors duration-300"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-800 hover:text-[#00adb5] font-medium text-left py-2 transition-colors duration-300"
                >
                  Program
                </button>
                <button 
                  onClick={() => scrollToSection('benefits')}
                  className="text-gray-800 hover:text-[#00adb5] font-medium text-left py-2 transition-colors duration-300"
                >
                  Keunggulan
                </button>
                <Link 
                  to="/contact" 
                  className="bg-[#00adb5] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#00959c] transition-all duration-300 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Daftar Sekarang
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#00adb5] via-[#00959c] to-[#00838a] animate-gradient pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#ffcb00] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#00adb5] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#00959c] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-10 animate-float">
            <FaLaptopCode className="text-6xl" />
          </div>
          <div className="absolute top-1/3 right-20 animate-float delay-1000">
            <FaRobot className="text-6xl" />
          </div>
          <div className="absolute bottom-1/4 left-20 animate-float delay-2000">
            <FaGlobeAmericas className="text-6xl" />
          </div>
          <div className="absolute bottom-1/3 right-10 animate-float delay-3000">
            <FaStar className="text-5xl" />
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 inline-block mb-8 border border-white/30 animate-fade-in-up">
              <span className="text-sm font-semibold flex items-center justify-center space-x-2">
                <IoSparkles className="text-[#ffcb00] animate-pulse" />
                <span className='text-white'>Platform STEM TERBESAR & TERMURAH untuk Anak!</span>
                <IoSparkles className="text-[#ffcb00] animate-pulse" />
              </span>
            </div>
            
            <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up delay-200">
              Masa Depan Anak <br />
              <span className="text-[#ffcb00] drop-shadow-lg">
                Dimulai dari SINI
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl mb-8 opacity-95 flex items-center justify-center flex-wrap gap-4 animate-fade-in-up delay-400">
              <span className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <FaLaptopCode className="text-[#ffcb00]" />
                <span className='text-white'>Coding</span>
              </span>
              <span className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <FaRobot className="text-[#ffcb00]" />
                <span className='text-white'>Robotik</span>
              </span>
              <span className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <FaGlobeAmericas className="text-[#ffcb00]" />
                <span className='text-white'>English</span>
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up delay-600">
              <Link 
                to="/contact" 
                className="bg-[#ffcb00] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#e6b800] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3 group hover:scale-105 transform"
              >
                <span>Mulai Belajar Gratis!</span>
              </Link>
              
              <button 
                onClick={() => scrollToSection('about')}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#00adb5] transition-all duration-300 flex items-center space-x-3 group hover:scale-105 transform backdrop-blur-sm"
              >
                <FaPlay className="group-hover:scale-110 transition-transform duration-300" />
                <span>Lihat Program</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up delay-800 mb-20">
              {[
                { number: "10K+", label: "Siswa Aktif", icon: FaUsers, color: "text-[#ffcb00]" },
                { number: "98%", label: "Kepuasan", icon: FaStar, color: "text-[#ffcb00]" },
                { number: "50+", label: "Mentor Expert", icon: GiTeacher, color: "text-[#ffcb00]" }
              ].map((stat, index) => (
                <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors backdrop-blur-sm">
                    <stat.icon className={`text-2xl ${stat.color}`} />
                  </div>
                  <div className="text-white text-2xl font-bold">{stat.number}</div>
                  <div className="text-white text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#00adb5]/10 px-4 py-2 rounded-full mb-4">
              <IoSchool className="text-[#00adb5]" />
              <span className="text-sm font-semibold text-[#00adb5]">PROGRAM UNGGULAN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Pilih <span className="text-[#00adb5]">Program</span> Favorit
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sesuaikan dengan minat dan bakat anak Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaLaptopCode,
                title: "Coding for Kids",
                description: "Belajar programming dengan metode fun & gamifikasi. Dari dasar sampai bisa buat game sendiri!",
                features: ["Scratch untuk Anak", "Game Development", "Mobile App Creation"],
                bgColor: "bg-[#00adb5]/10",
                borderColor: "border-[#00adb5]/30",
                iconBg: "bg-[#00adb5]"
              },
              {
                icon: FaRobot,
                title: "Robotik Seru",
                description: "Eksplor dunia robotik dengan kit lengkap. Bangun, program, dan kendalikan robot pertama!",
                features: ["Arduino & Micro:bit", "Sensor & Automation", "AI Basics untuk Anak"],
                bgColor: "bg-[#ffcb00]/10",
                borderColor: "border-[#ffcb00]/30",
                iconBg: "bg-[#ffcb00]"
              },
              {
                icon: FaGlobeAmericas,
                title: "English Fun",
                description: "Belajar bahasa Inggris melalui storytelling, games, dan project seru sehari-hari.",
                features: ["Interactive Conversation", "Creative Writing", "Pronunciation Mastery"],
                bgColor: "bg-[#00adb5]/5",
                borderColor: "border-[#00adb5]/20",
                iconBg: "bg-[#00adb5]"
              }
            ].map((program, index) => (
              <div 
                key={index}
                className={`${program.bgColor} rounded-2xl p-8 border ${program.borderColor} hover:shadow-xl transition-all duration-500 group hover:-translate-y-2`}
              >
                <div className={`${program.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <program.icon className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#00adb5] transition-colors">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors">
                      <span className="text-[#00adb5] mr-3 text-lg">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#00adb5]/10 px-4 py-2 rounded-full mb-4">
              <FaAward className="text-[#00adb5]" />
              <span className="text-sm font-semibold text-[#00adb5]">KEUNGGULAN KAMI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Mengapa Pilih <span className="text-[#00adb5]">Educourse</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: GiPriceTag, title: "TERMURAH", desc: "Harga terjangkau dengan kualitas premium", color: "text-[#00adb5]" },
              { icon: GiTeacher, title: "MENTOR EXPERT", desc: "Pengajar profesional & berpengalaman", color: "text-[#00adb5]" },
              { icon: FaGamepad, title: "FUN LEARNING", desc: "Metode belajar seru seperti bermain", color: "text-[#00adb5]" },
              { icon: FaMobileAlt, title: "FLEXIBLE", desc: "Belajar kapan saja, di mana saja", color: "text-[#00adb5]" },
              { icon: FaAward, title: "CERTIFIED", desc: "Sertifikat resmi setiap penyelesaian level", color: "text-[#00adb5]" },
              { icon: FaUsers, title: "SUPPORT 24/7", desc: "Bimbingan penuh dari mentor", color: "text-[#00adb5]" },
              { icon: FaChartLine, title: "PROJECT BASED", desc: "Belajar sambil buat project nyata", color: "text-[#00adb5]" },
              { icon: FaLightbulb, title: "FUTURE READY", desc: "Siapkan skill masa depan sejak dini", color: "text-[#00adb5]" }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-200 group hover:border-[#00adb5]/30 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 text-[#00adb5] group-hover:scale-110 group-hover:text-[#ffcb00] transition-all duration-300">
                  <benefit.icon />
                </div>
                <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[#00adb5] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#00adb5] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 left-10 animate-float">
            <FaStar className="text-4xl" />
          </div>
          <div className="absolute bottom-10 right-20 animate-float delay-1500">
            <FaStar className="text-4xl" />
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
            <IoSparkles className="text-[#ffcb00]" />
            <span className="text-sm font-semibold">AYO BERGABUNG!</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Siap Masa Depan Anak Lebih Cerah?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Bergabung dengan 10.000+ orang tua yang sudah mempercayakan pendidikan STEM anaknya kepada kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-[#ffcb00] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#e6b800] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3 group hover:scale-105 transform"
            >
              <FaPhone className="group-hover:scale-110 transition-transform duration-300" />
              <span>Daftar Konsultasi Gratis</span>
            </Link>
            <button 
              onClick={() => scrollToSection('about')}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#00adb5] transition-all duration-300 flex items-center space-x-3 group hover:scale-105 transform backdrop-blur-sm"
            >
              <FaBook className="group-hover:scale-110 transition-transform duration-300" />
              <span>Lihat Kurikulum</span>
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4 group">
                <img src={logo} alt="Educourse Logo" className="h-10 w-auto transition-all duration-300 group-hover:scale-105"/>
              </div>
              <p className="text-gray-400">
                Platform pembelajaran STEM terbesar dan termurah untuk anak Indonesia.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 flex items-center space-x-2">
                <IoSchool />
                <span>Program</span>
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-[#00adb5] transition-colors duration-300 flex items-center space-x-2 w-full text-left"><FaLaptopCode className="text-sm" /><span>Coding for Kids</span></button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-[#00adb5] transition-colors duration-300 flex items-center space-x-2 w-full text-left"><FaRobot className="text-sm" /><span>Robotik Seru</span></button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-[#00adb5] transition-colors duration-300 flex items-center space-x-2 w-full text-left"><FaGlobeAmericas className="text-sm" /><span>English Fun</span></button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 flex items-center space-x-2">
                <FaBuilding />
                <span>Perusahaan</span>
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#00adb5] transition-colors duration-300">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-[#00adb5] transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="hover:text-[#00adb5] transition-colors duration-300">Karir</a></li>
                <li><Link to="/contact" className="hover:text-[#00adb5] transition-colors duration-300">Kontak</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 flex items-center space-x-2">
                <FaPhone />
                <span>Hubungi Kami</span>
              </h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center space-x-2">
                  <FaGlobeAmericas />
                  <span>hello@educourse.id</span>
                </p>
                <p className="flex items-center space-x-2">
                  <FaPhone />
                  <span>@educourse.id</span>
                </p>
                <p className="flex items-center space-x-2">
                  <FaMapMarkerAlt />
                  <span>Jakarta, Indonesia</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p className="flex items-center justify-center space-x-2">
              ❤️
              <span>&copy; 2025 Educourse.id. All rights reserved.</span>
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-blob { animation: blob 7s infinite; }
        .animate-gradient { background-size: 200% 200%; animation: gradient 15s ease infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1500 { animation-delay: 1.5s; }
        .delay-2000 { animation-delay: 2s; }
        .delay-3000 { animation-delay: 3s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}

export default Home;