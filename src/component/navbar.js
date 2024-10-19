import React, { useState, useEffect } from 'react';
import '../App.css';
import '../css/navbar.css'; // Import the CSS file for animations

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`p-4 fixed w-full top-0 z-50 pr-24 transition duration-300 ease-in-out ${isScrolled ? 'bg-white shadow navbar-animate' : 'bg-transparent navbar-animate'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className={`text-2xl font-bold ml-36 ${isScrolled ? 'text-black' : 'text-white'}`}>GOG</div>

        {/* Burger Menu Icon */}
        <button 
          className="block md:hidden focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
        >
          <svg className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Menu Items */}
        <ul className={`hidden md:flex space-x-4 font-bold`}>
          <li><a href="#features" className={`hover:text-blue-600 ${isScrolled ? 'text-black' : 'text-white'}`}>Features</a></li>
          <li><a href="#pemesanan" className={`hover:text-blue-600 ${isScrolled ? 'text-black' : 'text-white'}`}>Pemesanan</a></li>
          <li><a href="#footer" className={`hover:text-blue-600 ${isScrolled ? 'text-black' : 'text-white'}`}>Footer</a></li>
        </ul>

        {/* Mobile Menu */}
        <ul className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-lg transform transition duration-300 ease-in-out ${isMenuOpen ? 'block navbar-animate' : 'hidden'}`}>
          <li><a href="#features" className="block px-4 py-2 text-black hover:bg-gray-200">Features</a></li>
          <li><a href="#pemesanan" className="block px-4 py-2 text-black hover:bg-gray-200">Pemesanan</a></li>
          <li><a href="#footer" className="block px-4 py-2 text-black hover:bg-gray-200">Footer</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
