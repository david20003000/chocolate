
import React, { useRef, useEffect } from 'react';

interface ExperienceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  delay: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
  title, 
  description, 
  icon, 
  image,
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
      { threshold: 0.2 }
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
      className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-xl opacity-0 translate-y-8"
    >
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate-dark/70 to-transparent z-10"></div>
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-4 left-4 bg-chocolate-gold/80 rounded-full p-3 z-20 text-white">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-chocolate-dark mb-2">{title}</h3>
        <p className="text-chocolate-medium/80">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
