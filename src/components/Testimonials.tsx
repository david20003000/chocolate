
import React, { useRef, useEffect } from 'react';
import { images } from '../assets/images';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  role, 
  quote, 
  avatar, 
  rating,
  delay 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Appear with delay animation
    const showCard = () => {
      setTimeout(() => {
        if (cardRef.current) {
          cardRef.current.classList.add('opacity-100', 'translate-y-0');
          cardRef.current.classList.remove('opacity-0', 'translate-y-8');
        }
      }, delay);
    };

    showCard();

    // Scroll reveal effect
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="bg-white rounded-xl shadow-lg p-6 transition-all duration-500 opacity-0 translate-y-8 hover:shadow-xl"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-chocolate-gold">
          <img 
            src={avatar} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-chocolate-dark">{name}</h4>
          <p className="text-sm text-chocolate-medium/70">{role}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "fill-chocolate-gold text-chocolate-gold" : "fill-gray-200 text-gray-200"}
          />
        ))}
      </div>
      
      <blockquote className="italic text-chocolate-medium">"{quote}"</blockquote>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const testimonials = [
    {
      name: "María García",
      role: "Visitante",
      quote: "Una experiencia increíble para toda la familia. Los talleres de bombones son divertidos y educativos. ¡Volveremos pronto!",
      avatar: images.avatar1,
      rating: 5,
      delay: 100
    },
    {
      name: "Carlos Mendoza",
      role: "Amante del chocolate",
      quote: "La degustación guiada me permitió descubrir sabores que nunca había experimentado. Los guías son verdaderos expertos.",
      avatar: images.avatar2,
      rating: 5,
      delay: 200
    },
    {
      name: "Elena Torres",
      role: "Visitante frecuente",
      quote: "Las exhibiciones son fascinantes y cambian regularmente. Cada visita es una nueva aventura en el mundo del chocolate.",
      avatar: images.avatar3,
      rating: 4,
      delay: 300
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-chocolate-cream/30 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container-custom">
        <div ref={sectionRef} className="text-center mb-16 reveal">
          <span className="inline-block bg-chocolate-medium/10 text-chocolate-medium px-4 py-1 rounded-full mb-4 text-sm tracking-wide font-medium">
            TESTIMONIOS
          </span>
          <h2 className="section-title">Lo Que Dicen Nuestros Visitantes</h2>
          <p className="section-subtitle">
            Descubre por qué nuestro museo es una experiencia imperdible según quienes ya nos han visitado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Testimonials;
