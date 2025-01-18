import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SpreadingGallery from './components/gallerydisplay';

function App() {
  return (
    <div className="min-h-screen bg-[#1b1f23]">
      <Hero />
      <Services />
      <Portfolio />
      <SpreadingGallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;