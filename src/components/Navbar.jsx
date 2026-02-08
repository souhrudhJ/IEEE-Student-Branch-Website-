import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import ieeeLogoWhite from '../assets/logos/IEEE_white.png';
import sbLogoWhite from '../assets/logos/SB Logo - White.png';

const aboutLinks = [
  { name: 'About IEEE', href: '#about-ieee' },
  { name: 'About SB', href: '#about-sb' },
];

const navLinks = [
  { name: 'Team', href: '#execom' },
  { name: 'Events', href: '#events' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Membership', href: '#membership' },
  { name: 'Contact', href: '#contact' },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      scrollTo(href.slice(1));
      setOpen(false);
      setAboutOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ieee-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 shrink-0"
          >
            <img src={ieeeLogoWhite} alt="IEEE" className="h-7 lg:h-8" />
            <img src={sbLogoWhite} alt="SB STM" className="h-6 lg:h-7" />
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Home
            </a>
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors inline-flex items-center gap-1"
              >
                About
                <FiChevronDown className={`transition-transform ${aboutOpen ? 'rotate-180' : ''}`} size={16} />
              </button>
              <AnimatePresence>
                {aboutOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="absolute top-full left-0 mt-1 py-1 w-44 bg-white rounded-lg shadow-xl border border-gray-100"
                  >
                    {aboutLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href)}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-ieee-navy/5 hover:text-ieee-navy font-medium"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2.5 bg-ieee-accent text-white text-sm font-semibold rounded-lg hover:bg-ieee-blue transition-colors"
            >
              Join IEEE
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-ieee-navy/98 backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <ul className="px-4 py-4 space-y-1">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg font-medium"
                >
                  Home
                </a>
              </li>
              <li className="px-4 py-2 text-white/60 text-sm font-medium">About</li>
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block px-6 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://www.ieee.org/membership/join/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 bg-ieee-accent text-white font-semibold rounded-lg text-center"
                >
                  Join IEEE
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
