import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const achievements = [
  {
    date: '2023',
    title: 'Branch established',
    description: 'IEEE SB STM inaugurated in December 2023',
  },
  {
    date: '2023-2025',
    title: 'Active participation',
    description: '30+ active members and 17+ events organized',
  },
  {
    date: '2024-2025',
    title: 'Workshops & training',
    description: 'Design Pulse, CRESCITA pre-events, Solar workshops, UI/UX and Product Design workshops',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-20 lg:py-28 bg-ieee-navy text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(0,174,239,0.08),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-lg bg-white/10 text-white/90 text-sm font-semibold mb-4">
            Our Progress
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Achievements & Recognitions
          </h2>
          <p className="text-white/70">
            Milestones and recognitions of IEEE SB STM. Add competition wins, awards, and accolades as they come.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {achievements.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 lg:p-7 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-ieee-accent/20 text-ieee-accent">
                  <FiAward size={24} strokeWidth={2} />
                </div>
                <span className="text-sm text-white/50 font-medium">{item.date}</span>
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">{item.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-white/60 text-sm"
        >
          Have an achievement to add? Contact the Execom or update this section with competition wins and awards.
        </motion.p>
      </div>
    </section>
  );
}
