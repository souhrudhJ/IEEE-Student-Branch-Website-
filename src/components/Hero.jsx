import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiUsers, FiCalendar, FiAward } from 'react-icons/fi';
import sbLogo from '../assets/logos/SB Logo - White.png';

const stats = [
  { icon: FiUsers, value: '30+', label: 'Active Members' },
  { icon: FiCalendar, value: '17+', label: 'Events Organized' },
  { icon: FiAward, value: '2023', label: 'Established' },
];

export default function Hero() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ieee-navy via-ieee-dark to-ieee-blue" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating circles */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-20 w-72 h-72 bg-ieee-accent/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-ieee-gold/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm font-medium mb-6 backdrop-blur-sm border border-white/10"
            >
              Advancing Technology for Humanity
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              IEEE Student Branch
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-ieee-accent to-cyan-300">
                STM Kannur
              </span>
            </h1>

            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
              A vibrant student-led community at St. Thomas College of Engineering and Technology, 
              Kannur, driven by innovation, learning, and impact. Empowering future-ready engineers 
              since December 2023.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleScroll('membership')}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-ieee-navy font-semibold rounded-xl hover:bg-ieee-light transition-all duration-300 shadow-lg shadow-white/10"
              >
                Join IEEE
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleScroll('events')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/10"
              >
                Explore Events
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
                    <stat.icon className="text-ieee-accent" size={18} />
                    <span className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</span>
                  </div>
                  <span className="text-sm text-white/50">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - SB Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-white/10"
                style={{ width: '420px', height: '420px', top: '-30px', left: '-30px' }}
              />
              <motion.img
                src={sbLogo}
                alt="IEEE SB STM Logo"
                className="w-[360px] h-[360px] object-contain drop-shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
