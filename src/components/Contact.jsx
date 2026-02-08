import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiInstagram, FiSend } from 'react-icons/fi';

const contactInfo = [
  {
    icon: FiMapPin,
    label: 'Visit Us',
    value: 'IEEE SB STM, St. Thomas College of Engineering and Technology',
    sub: 'Sivapuram P.O, Mattannur (via), Kannur - 670 702, Kerala, India',
    href: null,
  },
  {
    icon: FiMail,
    label: 'Email',
    value: 'ieeesb@stthomaskannur.ac.in',
    sub: null,
    href: 'mailto:ieeesb@stthomaskannur.ac.in',
  },
  {
    icon: FiInstagram,
    label: 'Instagram',
    value: '@ieeesbstm',
    sub: 'Follow us for updates and highlights',
    href: 'https://www.instagram.com/ieeesbstm/',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ieee-light to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,98,155,0.06),transparent_50%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ieee-navy/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-ieee-navy/10 text-ieee-navy text-sm font-semibold mb-4">
            Get in Touch
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Contact <span className="text-ieee-accent">Us</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Have questions about membership, events, or collaboration? We’d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="group relative"
            >
              <div className="h-full rounded-2xl bg-white p-6 sm:p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:border-ieee-accent/20 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-ieee-accent/5 rounded-bl-full transition-colors group-hover:bg-ieee-accent/10" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-ieee-navy to-ieee-blue text-white mb-5 shadow-lg shadow-ieee-navy/20 group-hover:scale-105 transition-transform duration-300">
                    <item.icon size={24} strokeWidth={2} />
                  </div>
                  <h3 className="font-display font-bold text-gray-900 text-lg mb-2">{item.label}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-ieee-navy hover:text-ieee-accent font-semibold text-base break-all transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium text-gray-800 text-base leading-snug">{item.value}</p>
                  )}
                  {item.sub && (
                    <p className="text-gray-500 text-sm mt-2 leading-relaxed">{item.sub}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <a
            href="mailto:ieeesb@stthomaskannur.ac.in"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-ieee-navy text-white font-semibold rounded-2xl hover:bg-ieee-blue transition-all duration-300 shadow-lg shadow-ieee-navy/25 hover:shadow-xl hover:shadow-ieee-navy/30 hover:-translate-y-0.5"
          >
            <FiSend size={20} />
            Send an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
