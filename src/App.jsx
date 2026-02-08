import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutIEEE from './components/AboutIEEE';
import AboutSB from './components/AboutSB';
import Team from './components/Team';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Achievements from './components/Achievements';
import Membership from './components/Membership';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutIEEE />
        <AboutSB />
        <Team />
        <Events />
        <Gallery />
        <Achievements />
        <Membership />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
