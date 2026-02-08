import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiImage } from 'react-icons/fi';

/* ── build event list from gallery assets ── */
const galleryModules = import.meta.glob(
  '../assets/gallery/**/*.{jpg,jpeg,png,JPG,PNG}',
  { eager: true, import: 'default' }
);
const allEntries = Object.entries(galleryModules).map(([path, src]) => ({
  path: path.replace(/\\/g, '/'),
  src,
}));

function buildEvents() {
  const defs = [
    { id: 'design-pulse', name: 'Design Pulse', desc: 'Snapshot highlights from our design-focused event.', folder: 'design-pulse/' },
    { id: 'workshop-product-design', name: 'Workshop on Product Design', desc: 'Hands-on product design workshop sessions.', folder: 'workshop-product-design/' },
    { id: 'uiux', name: 'UI/UX Workshop', desc: 'Interactive UI/UX design and Figma workshop.', folder: 'uiux/' },
    { id: 'cresita', name: 'CRESCITA Pre-events', desc: 'Campus to Career & Intro to UI/UX pre-event sessions.', match: (p) => p.includes('cresita/') && (p.includes('Cresita') || p.includes('Campus') || p.includes('Intro to Ui')) },
    { id: 'solar', name: 'Solar Power Plant Workshop', desc: 'Design and commissioning of solar power plants.', match: (p) => p.includes('cresita/') && (p.includes('Design and Commission') || p.includes('Design and commisioning')) },
    { id: 'highlights', name: 'Branch Highlights', desc: 'General highlights and snapshots from our activities.', match: (p) => p.includes('cresita/') && (p.includes('Snapshots') || p.includes('WhatsApp')) },
    { id: 'general-events', name: 'Events & Collage', desc: 'Photos from various branch events and activities.', folder: 'events/' },
  ];

  const used = new Set();
  const events = [];

  defs.forEach((def) => {
    const items = allEntries.filter((e) => {
      if (used.has(e.path)) return false;
      if (def.folder) return e.path.includes(def.folder);
      if (def.match) return def.match(e.path);
      return false;
    });
    items.forEach((e) => used.add(e.path));
    if (items.length > 0) {
      events.push({
        id: def.id,
        name: def.name,
        desc: def.desc,
        preview: items[0].src,
        count: items.length,
        images: items.map((i) => i.src),
      });
    }
  });

  return events;
}

const GALLERY_EVENTS = buildEvents();

/* ── component ── */
export default function Gallery() {
  const [openEvent, setOpenEvent] = useState(null);
  const [viewIndex, setViewIndex] = useState(null);
  const scrollRef = useRef(null);

  const openGallery = useCallback((event) => {
    setOpenEvent(event);
    setViewIndex(null);
  }, []);

  const closeGallery = useCallback(() => {
    setOpenEvent(null);
    setViewIndex(null);
  }, []);

  const openImage = useCallback((idx) => setViewIndex(idx), []);
  const closeImage = useCallback(() => setViewIndex(null), []);
  const prevImage = useCallback(() => {
    if (openEvent && viewIndex !== null) {
      setViewIndex((viewIndex - 1 + openEvent.images.length) % openEvent.images.length);
    }
  }, [openEvent, viewIndex]);
  const nextImage = useCallback(() => {
    if (openEvent && viewIndex !== null) {
      setViewIndex((viewIndex + 1) % openEvent.images.length);
    }
  }, [openEvent, viewIndex]);

  return (
    <section id="gallery" className="relative py-20 lg:py-28 bg-ieee-light overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,46,105,0.04),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Event <span className="text-ieee-accent">Gallery</span>
          </h2>
          <p className="text-gray-600">
            Glimpses from our events, workshops, and team activities. Click any event to explore its photos.
          </p>
        </motion.div>

        {/* event cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_EVENTS.map((event, index) => (
            <motion.button
              key={event.id}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              onClick={() => openGallery(event)}
              className="group text-left rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-ieee-accent/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ieee-navy focus-visible:ring-offset-2"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src={event.preview}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-sm text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiImage size={14} />
                  {event.count} photos
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-gray-900 text-lg mb-1">{event.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{event.desc}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* ── event gallery modal ── */}
      <AnimatePresence>
        {openEvent && viewIndex === null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col"
          >
            {/* modal header */}
            <div className="shrink-0 flex items-center justify-between px-6 py-4">
              <div>
                <h3 className="font-display font-bold text-white text-xl">{openEvent.name}</h3>
                <p className="text-white/60 text-sm">{openEvent.count} photos</p>
              </div>
              <button
                type="button"
                onClick={closeGallery}
                className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Close gallery"
              >
                <FiX size={22} />
              </button>
            </div>

            {/* scrollable image grid */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 pb-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
                {openEvent.images.map((src, i) => (
                  <motion.button
                    key={i}
                    type="button"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(i * 0.03, 0.4), duration: 0.25 }}
                    onClick={() => openImage(i)}
                    className="aspect-square rounded-xl overflow-hidden bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ieee-accent hover:ring-2 hover:ring-ieee-accent/50 transition-all"
                  >
                    <img
                      src={src}
                      alt=""
                      className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-300"
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── single image viewer with prev/next ── */}
      <AnimatePresence>
        {openEvent && viewIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center"
          >
            {/* close */}
            <button
              type="button"
              onClick={closeImage}
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 z-10"
              aria-label="Close"
            >
              <FiX size={22} />
            </button>

            {/* counter */}
            <div className="absolute top-5 left-6 text-white/60 text-sm font-medium z-10">
              {viewIndex + 1} / {openEvent.images.length}
            </div>

            {/* prev */}
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Previous"
            >
              <FiChevronLeft size={24} />
            </button>

            {/* image */}
            <motion.img
              key={viewIndex}
              src={openEvent.images[viewIndex]}
              alt=""
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg select-none"
              draggable={false}
            />

            {/* next */}
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Next"
            >
              <FiChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
