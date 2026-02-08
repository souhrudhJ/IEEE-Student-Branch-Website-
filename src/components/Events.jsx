import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar } from 'react-icons/fi';

import posterCresita from '../assets/posters/Cresita Pre event - Campus to Career.jpeg';
import posterCresitaUx from '../assets/posters/Cresita Pre event - Intro to Ui_Ux.jpeg';
import posterDesignPulse from '../assets/posters/Design pulse.png';
import posterProductDesign from '../assets/posters/Product design.png';
import posterSolar1 from '../assets/posters/Components, Design and Commissioning of Solar Power Plant 1.png';
import posterDevSprint from '../assets/posters/DevSprint.png';
import posterExecom from '../assets/posters/Execom.png';
import posterFigma from '../assets/posters/Figma.png';
import posterPath from '../assets/posters/path to internationalism.png';

const events = [
  { title: 'CRESCITA Pre-event: Campus to Career', date: 'Pre-event', description: 'Bridge from campus to industry with career insights and networking.', image: posterCresita, tag: 'Workshop' },
  { title: 'CRESCITA Pre-event: Intro to UI/UX', date: 'Pre-event', description: 'Introduction to user interface and user experience design.', image: posterCresitaUx, tag: 'Workshop' },
  { title: 'Design Pulse', date: '2025', description: 'Design-focused event highlighting product and visual design.', image: posterDesignPulse, tag: 'Event' },
  { title: 'Product Design Workshop', date: 'Workshop', description: 'Hands-on workshop on product design principles and tools.', image: posterProductDesign, tag: 'Workshop' },
  { title: 'Solar Power Plant – Design & Commissioning', date: 'Technical', description: 'Components, design, and commissioning of solar power plants.', image: posterSolar1, tag: 'Workshop' },
  { title: 'DevSprint', date: 'Hackathon', description: 'Coding sprint and development challenge for students.', image: posterDevSprint, tag: 'Hackathon' },
  { title: 'Execom Training', date: 'Leadership', description: 'Training and onboarding for executive committee members.', image: posterExecom, tag: 'Training' },
  { title: 'Figma Workshop', date: 'Workshop', description: 'Learn design and prototyping with Figma.', image: posterFigma, tag: 'Workshop' },
  { title: 'Path to Internationalism', date: 'Talk', description: 'Exploring global opportunities and IEEE international presence.', image: posterPath, tag: 'Talk' },
];

export default function Events() {
  return (
    <section id="events" className="relative py-20 lg:py-28 bg-ieee-navy text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_20%_80%,rgba(0,174,239,0.12),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-4">
            What We Do
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Events & Activities
          </h2>
          <p className="text-white/70">
            Workshops, hackathons, technical talks, and leadership programs throughout the year.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event, index) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-white/5">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-ieee-accent/90 text-white text-xs font-semibold">
                  {event.tag}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
                  <FiCalendar size={14} />
                  <span>{event.date}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2 line-clamp-2">
                  {event.title}
                </h3>
                <p className="text-sm text-white/70 line-clamp-2">{event.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
