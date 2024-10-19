import React from 'react';
import Navbar from './component/navbar';
import Hero from './component/hero';
import Features from './component/features';
import CTA from './component/CTA';
import Footer from './component/footer';
import './App.css';
import Pemesanan from './component/pemesanan';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Pemesanan />
      <Footer />
    </div>
  );
}

export default App;
