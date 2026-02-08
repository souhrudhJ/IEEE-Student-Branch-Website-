import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { execom2025 } from '../data/execom2025';

export default function Team() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="execom" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,46,105,0.06),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            EXCOM <span className="text-ieee-accent">2025</span>
          </h2>
          <p className="text-gray-600">
            Meet the dedicated team driving innovation and excellence at IEEE SB STM.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 lg:gap-6">
          {execom2025.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-ieee-accent/30 transition-all duration-300"
            >
              <button
                type="button"
                onClick={() => setSelected(member)}
                className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ieee-navy focus-visible:ring-offset-2 rounded-2xl"
              >
                <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-ieee-navy/80 to-ieee-accent/60">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="font-display font-bold text-gray-900 text-sm truncate">{member.name}</p>
                  <p className="text-ieee-accent font-semibold text-xs mt-1">{member.position}</p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden"
            >
              <div className="aspect-square relative">
                <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg"
                  aria-label="Close"
                >
                  <FiX size={20} />
                </button>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display font-bold text-xl text-gray-900">{selected.name}</h3>
                <p className="text-ieee-accent font-semibold mt-1">{selected.position}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
