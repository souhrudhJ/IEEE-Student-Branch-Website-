import React from 'react';
import { FiInstagram, FiMail, FiMapPin, FiHeart } from 'react-icons/fi';
import ieeeLogoWhite from '../assets/logos/IEEE_white.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About IEEE', href: '#about-ieee' },
  { name: 'About SB', href: '#about-sb' },
  { name: 'Team', href: '#execom' },
  { name: 'Events', href: '#events' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Membership', href: '#membership' },
  { name: 'Contact', href: '#contact' },
];

const resources = [
  { name: 'IEEE Official', href: 'https://www.ieee.org/' },
  { name: 'IEEE Xplore', href: 'https://ieeexplore.ieee.org/' },
  { name: 'IEEE Collabratec', href: 'https://ieee-collabratec.ieee.org/' },
  { name: 'IEEE Spectrum', href: 'https://spectrum.ieee.org/' },
  { name: 'IEEE Kerala Section', href: 'https://ieeekerala.org/' },
];

export default function Footer() {
  const handleClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-ieee-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={ieeeLogoWhite} alt="IEEE" className="h-8" />
              <div className="text-sm">
                <span className="font-bold block">Student Branch</span>
                <span className="text-white/60 text-xs">STM Kannur</span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              A vibrant student-led community driven by innovation, learning, and impact at 
              St. Thomas College of Engineering and Technology, Kannur.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/ieeesbstm/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FiInstagram size={18} />
              </a>
              <a
                href="mailto:ieeesb@stthomaskannur.ac.in"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FiMail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              IEEE Resources
            </h4>
            <ul className="space-y-2.5">
              {resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Visit Us
            </h4>
            <div className="flex items-start gap-3">
              <FiMapPin className="text-ieee-accent mt-0.5 flex-shrink-0" size={16} />
              <p className="text-sm text-white/60 leading-relaxed">
                IEEE SB STM<br />
                St. Thomas College of Engineering and Technology<br />
                Sivapuram P.O, Mattannur (via)<br />
                Kannur - 670 702<br />
                Kerala, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} IEEE Student Branch, St. Thomas College of Engineering and Technology, Kannur. All rights reserved.
          </p>
          <p className="text-xs text-white/40 flex items-center gap-1">
            Made with <FiHeart size={12} className="text-red-400" /> by IEEE SB STM
          </p>
        </div>
      </div>
    </footer>
  );
}
