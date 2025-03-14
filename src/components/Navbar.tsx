
import React, { useState, useEffect } from 'react';
import { images } from '../assets/images';
import { MenuIcon, X } from 'lucide-react';

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Experiencias', href: '#experiences' },
    { name: 'Galería', href: '#gallery' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-chocolate-medium rounded-full overflow-hidden">
            <img 
              src={images.logo} 
              alt="Museo de Chocolates Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className={`font-playfair font-bold text-xl md:text-2xl ${isScrolled ? 'text-chocolate-dark' : 'text-white text-shadow'}`}>
            Mundo de Chocolate
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-all duration-300 hover:text-chocolate-gold ${
                isScrolled ? 'text-chocolate-medium hover:text-chocolate-dark' : 'text-white hover:text-chocolate-cream'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className={`${isScrolled ? 'bg-chocolate-medium text-white' : 'bg-white/20 backdrop-blur-sm text-white border border-white/30'} 
            py-2 px-4 rounded-md hover:bg-chocolate-dark hover:text-white transition-all duration-300`}
          >
            Reserva tu visita
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-chocolate-dark' : 'text-white'} size={28} />
          ) : (
            <MenuIcon className={isScrolled ? 'text-chocolate-dark' : 'text-white'} size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden py-0'
      }`}>
        <div className="container-custom flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-chocolate-medium hover:text-chocolate-dark py-2 font-medium border-b border-chocolate-cream/50"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="chocolate-btn text-center mt-2"
          >
            Reserva tu visita
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
