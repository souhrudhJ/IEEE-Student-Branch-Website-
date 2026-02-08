import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiUsers, FiBook, FiAward } from 'react-icons/fi';
import sbLogo from '../assets/logos/SB Logo.png';

const infoCards = [
  { icon: FiCalendar, label: 'Established', value: 'December 2023' },
  { icon: FiMapPin, label: 'Location', value: 'Kannur, Kerala' },
  { icon: FiUsers, label: 'Active Members', value: '30+' },
  { icon: FiBook, label: 'Societies', value: '3 Active' },
];

export default function AboutSB() {
  return (
    <section id="about-sb" className="relative py-20 lg:py-28 bg-ieee-light overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_80%_60%,rgba(0,46,105,0.06),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-ieee-navy/10 text-ieee-navy text-sm font-semibold">
              About Our Branch
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900">
              IEEE Student Branch
              <span className="block text-ieee-navy">STM Kannur</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The IEEE Student Branch of St. Thomas College of Engineering and Technology (IEEE SB STM) was inaugurated in <strong>December 2023</strong>. We foster technical excellence and innovation on campus through events, workshops, and collaboration aligned with IEEE's mission.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Under the guidance of our Branch Counsellor, <strong className="text-ieee-accent">Dr. Sreekesh Namboodiri T</strong>, we organize workshops, expert talks, competitions, and collaborative projects that prepare students for the industry and research.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our branch is part of the <strong>IEEE Kerala Section</strong> and <strong>IEEE Region 10 (Asia Pacific)</strong>, giving members access to global networking and opportunities that empower future leaders in technology.
            </p>

            {/* Branch Counsellor profile card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-2"
            >
              <div className="rounded-2xl bg-white shadow-lg border border-gray-100 overflow-hidden max-w-md hover:shadow-xl hover:border-ieee-accent/20 transition-all duration-300">
                <div className="p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-ieee-navy to-ieee-blue flex items-center justify-center text-white shadow-md">
                    <FiAward size={40} strokeWidth={1.5} />
                  </div>
                  <div className="text-center sm:text-left flex-1 min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ieee-accent mb-1">Branch Counsellor</p>
                    <h3 className="font-display font-bold text-xl text-gray-900">Dr. Sreekesh Namboodiri T</h3>
                    <p className="text-sm text-gray-600 mt-1">St. Thomas College of Engineering & Technology</p>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">Guiding the branch in technical excellence, industry connect, and IEEE initiatives.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <div className="grid grid-cols-2 gap-4">
              {infoCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-ieee-navy/10 transition-all text-center"
                >
                  <card.icon className="mx-auto text-ieee-accent mb-3" size={28} strokeWidth={1.5} />
                  <p className="text-sm text-gray-500 font-medium">{card.label}</p>
                  <p className="font-display font-bold text-gray-900 text-lg mt-1">{card.value}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <img src={sbLogo} alt="IEEE SB STM Logo" className="w-48 h-48 object-contain opacity-90" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
