
import React, { useEffect, useRef } from 'react';
import ExperienceCard from './ExperienceCard';
import { images } from '../assets/images';
import { CakeSlice, Award, IceCream, Candy } from 'lucide-react';

const Experiences = () => {
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

  const experiencesData = [
    {
      title: "Degustación guiada de chocolates de origen",
      description: "Prueba chocolates de diferentes regiones del mundo y aprende a distinguir sus sabores y aromas únicos.",
      icon: <Candy className="h-6 w-6" />,
      image: images.tasting,
      delay: 100
    },
    {
      title: "Talleres de elaboración de bombones",
      description: "Aprende a crear tus propios bombones artesanales con la guía de nuestros maestros chocolateros.",
      icon: <CakeSlice className="h-6 w-6" />,
      image: images.workshop,
      delay: 200
    },
    {
      title: "Historia interactiva del cacao",
      description: "Viaja a través de los siglos y descubre el fascinante recorrido del cacao desde sus orígenes hasta la actualidad.",
      icon: <Award className="h-6 w-6" />,
      image: images.history,
      delay: 300
    },
    {
      title: "Exhibiciones de arte en chocolate",
      description: "Admira impresionantes esculturas y obras de arte creadas por artistas chocolateros internacionales.",
      icon: <IceCream className="h-6 w-6" />,
      image: images.art,
      delay: 400
    },
  ];

  return (
    <section id="experiences" className="section-padding bg-chocolate-cream/30 relative">
      <div className="container-custom">
        <div ref={sectionRef} className="text-center mb-16 reveal">
          <span className="inline-block bg-chocolate-medium/10 text-chocolate-medium px-4 py-1 rounded-full mb-4 text-sm tracking-wide font-medium">
            NUESTRAS EXPERIENCIAS
          </span>
          <h2 className="section-title">Experiencias Inolvidables</h2>
          <p className="section-subtitle">
            Sumérgete en el maravilloso mundo del chocolate a través de nuestras experiencias sensoriales diseñadas para todos los sentidos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiencesData.map((experience, index) => (
            <ExperienceCard 
              key={index}
              title={experience.title}
              description={experience.description}
              icon={experience.icon}
              image={experience.image}
              delay={experience.delay}
            />
          ))}
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-chocolate-dark/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Experiences;
