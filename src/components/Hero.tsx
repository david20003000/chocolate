
import React, { useEffect, useRef } from 'react';
import { images } from '../assets/images';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollValue = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollValue * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToExperiences = () => {
    const experiencesSection = document.getElementById('experiences');
    if (experiencesSection) {
      experiencesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images.hero})` }}
    >
      {/* Chocolate drip effect */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <div className="chocolate-drip"></div>
      </div>

      <div className="container-custom text-center z-10 pt-16">
        <div className="animate-fade-in">
          <span className="inline-block bg-chocolate-gold/80 text-white px-4 py-1 rounded-full mb-4 text-sm tracking-wide font-medium">
            EXPERIENCIA SENSORIAL ÚNICA
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow">
            Mundo de Chocolate:
            <br />
            <span className="text-chocolate-cream">Una Experiencia Sensorial</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 text-shadow">
            Descubre la historia, el arte y el sabor del chocolate en nuestro museo interactivo
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#contact" className="chocolate-btn bg-chocolate-medium/90 hover:bg-chocolate-medium">
              Reserva tu visita
            </a>
            <a href="#gallery" className="chocolate-btn-outline border-white/80 text-white hover:bg-white/20 hover:text-white">
              Ver galería
            </a>
          </div>
        </div>
        
        <button 
          onClick={scrollToExperiences}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={36} className="stroke-white" />
        </button>
      </div>

      {/* Decorative overlay at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-chocolate-dark/80 to-transparent"></div>
    </section>
  );
};

export default Hero;
