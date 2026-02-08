import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiExternalLink, FiUsers, FiAward, FiBook } from 'react-icons/fi';

const benefits = [
  'Access to IEEE Xplore Digital Library (with membership)',
  'Networking with professionals and students globally',
  'Participation in conferences, workshops, and competitions',
  'Leadership and volunteer opportunities',
  'Career resources and job opportunities',
  'Recognition and credibility in technical fields',
];

export default function Membership() {
  return (
    <section id="membership" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(0,46,105,0.06),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-ieee-navy/10 text-ieee-navy text-sm font-semibold mb-4">
              Join Us
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
              IEEE Membership
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Become part of the world's largest technical professional organization. Student membership offers reduced rates and opens doors to resources, communities, and opportunities that support your growth as an engineer.
            </p>
            <ul className="space-y-3 mb-8">
              {benefits.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <FiCheck className="text-ieee-accent shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.ieee.org/membership/join/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-ieee-navy text-white font-semibold rounded-xl hover:bg-ieee-blue transition-colors shadow-lg shadow-ieee-navy/25"
              >
                Join IEEE
                <FiExternalLink size={18} />
              </a>
              <a
                href="mailto:ieeesb@stthomaskannur.ac.in"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
              >
                Contact SB for Help
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: FiUsers, value: '30+', label: 'Active Members' },
              { icon: FiAward, value: 'IEEE', label: 'Global Recognition' },
              { icon: FiBook, value: '17+', label: 'Events per Year' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-ieee-light border border-gray-100 p-6 text-center"
              >
                <stat.icon className="mx-auto text-ieee-accent mb-2" size={28} />
                <div className="font-display font-bold text-2xl text-ieee-navy">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
