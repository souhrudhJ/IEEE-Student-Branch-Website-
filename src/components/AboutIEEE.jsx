import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiGlobe } from 'react-icons/fi';
import ieeeLogo from '../assets/logos/IEEE_blue.png';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AboutIEEE() {
  return (
    <section id="about-ieee" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,46,105,0.08),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-ieee-navy/10 text-ieee-navy text-sm font-semibold mb-4">
            About IEEE
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            The world’s largest technical professional organization
          </h2>
          <p className="text-lg text-gray-600">
            IEEE is dedicated to advancing technology for the benefit of humanity. Our Vision and Mission are adopted from the official IEEE website.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
        >
          <motion.article
            variants={item}
            className="group relative rounded-2xl bg-gradient-to-br from-ieee-navy to-ieee-blue p-8 lg:p-10 text-white shadow-xl shadow-ieee-navy/20 hover:shadow-2xl hover:shadow-ieee-navy/25 transition-shadow"
          >
            <div className="absolute top-6 right-6 opacity-20">
              <FiTarget size={48} />
            </div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 mb-6">
                <FiTarget size={24} />
              </div>
              <h3 className="font-display font-bold text-xl lg:text-2xl mb-3">Mission</h3>
              <p className="text-white/90 leading-relaxed">
                IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity.
              </p>
              <p className="mt-4 text-xs text-white/60">
                Source: <a href="https://www.ieee.org/about/vision-mission.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">ieee.org/about/vision-mission</a>
              </p>
            </div>
          </motion.article>

          <motion.article
            variants={item}
            className="group relative rounded-2xl bg-gradient-to-br from-ieee-blue to-ieee-accent/90 p-8 lg:p-10 text-white shadow-xl shadow-ieee-blue/20 hover:shadow-2xl hover:shadow-ieee-blue/25 transition-shadow"
          >
            <div className="absolute top-6 right-6 opacity-20">
              <FiEye size={48} />
            </div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 mb-6">
                <FiEye size={24} />
              </div>
              <h3 className="font-display font-bold text-xl lg:text-2xl mb-3">Vision</h3>
              <p className="text-white/90 leading-relaxed">
                IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.
              </p>
              <p className="mt-4 text-xs text-white/60">
                Source: <a href="https://www.ieee.org/about/vision-mission.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">ieee.org/about/vision-mission</a>
              </p>
            </div>
          </motion.article>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <img src={ieeeLogo} alt="IEEE" className="h-10 opacity-80" />
          <a
            href="https://www.ieee.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-ieee-navy font-semibold hover:text-ieee-blue transition-colors"
          >
            <FiGlobe size={18} />
            Visit IEEE.org
          </a>
        </motion.div>
      </div>
    </section>
  );
}
