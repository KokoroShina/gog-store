import React from 'react';
import heroBg from '../assets/hai.jpg'; // Import background image
import '../css/hero.css'; // Import the CSS file

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-cover bg-center relative"
      style={{ 
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      {/* Overlay to slightly darken the background image */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Text Content: Positioned at the bottom center */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-slide-in" // Adjusted for bottom center
      >
        <h1 className="text-6xl font-extrabold text-white drop-shadow-lg text-center">
          GOG-Store
        </h1>
      </div>
    </section>
  );
};

export default Hero;
