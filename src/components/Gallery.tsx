
import React, { useRef, useEffect, useState } from 'react';
import { images } from '../assets/images';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const galleryImages = [
    { src: images.gallery1, alt: "Exhibición de chocolates de diferentes orígenes" },
    { src: images.gallery2, alt: "Taller de elaboración de bombones" },
    { src: images.gallery3, alt: "Degustación de chocolate premium" },
    { src: images.gallery4, alt: "Esculturas artísticas de chocolate" },
    { src: images.gallery5, alt: "Historia interactiva del cacao" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToImage = (index: number) => {
    if (galleryRef.current) {
      const scrollAmount = galleryRef.current.scrollWidth / galleryImages.length * index;
      galleryRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % galleryImages.length;
    scrollToImage(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    scrollToImage(newIndex);
  };

  // Handle automatic scrolling with touch detection
  useEffect(() => {
    const gallery = galleryRef.current;
    let touchStartX = 0;
    let touchEndX = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        nextImage();
      } else if (touchEndX - touchStartX > 50) {
        prevImage();
      }
    };
    
    if (gallery) {
      gallery.addEventListener('touchstart', handleTouchStart);
      gallery.addEventListener('touchend', handleTouchEnd);
    }
    
    return () => {
      if (gallery) {
        gallery.removeEventListener('touchstart', handleTouchStart);
        gallery.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [currentIndex]);

  return (
    <section id="gallery" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div ref={sectionRef} className="text-center mb-12 reveal">
          <span className="inline-block bg-chocolate-medium/10 text-chocolate-medium px-4 py-1 rounded-full mb-4 text-sm tracking-wide font-medium">
            NUESTRA GALERÍA
          </span>
          <h2 className="section-title">Momentos Dulces</h2>
          <p className="section-subtitle">
            Explora las maravillas de nuestro museo a través de esta selección de imágenes
          </p>
        </div>

        <div className="relative">
          {/* Gallery Navigation Buttons */}
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg text-chocolate-dark hover:scale-110 transition-all duration-300"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg text-chocolate-dark hover:scale-110 transition-all duration-300"
            aria-label="Imagen siguiente"
          >
            <ChevronRight size={24} />
          </button>

          {/* Gallery Carousel */}
          <div 
            ref={galleryRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 pb-6 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="min-w-full sm:min-w-[80%] md:min-w-[60%] lg:min-w-[40%] snap-center px-2"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg group">
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-chocolate-medium text-center">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-chocolate-medium scale-125' : 'bg-chocolate-cream'
                }`}
                aria-label={`Ver imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
