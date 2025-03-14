
import React, { useState, useRef, useEffect } from 'react';
import { images } from '../assets/images';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{9,15}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!name.trim()) {
      setError('Por favor, ingresa tu nombre.');
      return;
    }
    
    if (!validatePhone(phone)) {
      setError('Por favor, ingresa un número de teléfono válido.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName('');
      setPhone('');
      
      // Reset form after some time
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="section-padding relative bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: `linear-gradient(rgba(46, 21, 3, 0.8), rgba(46, 21, 3, 0.8)), url(${images.formBg})` 
      }}
    >
      <div className="container-custom">
        <div ref={sectionRef} className="text-center mb-16 reveal">
          <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full mb-4 text-sm tracking-wide font-medium">
            CONTACTO
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
            Reserva Tu Experiencia
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-8 md:mb-12 max-w-3xl mx-auto">
            Déjanos tus datos y te contactaremos para organizar tu visita al mundo mágico del chocolate
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-500 hover:scale-105">
            {!isSubmitted ? (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-chocolate-dark font-medium mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className="w-full p-3 border border-chocolate-cream rounded-md focus:outline-none focus:ring-2 focus:ring-chocolate-medium"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-chocolate-dark font-medium mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Tu número de contacto"
                    className="w-full p-3 border border-chocolate-cream rounded-md focus:outline-none focus:ring-2 focus:ring-chocolate-medium"
                  />
                </div>
                
                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full chocolate-btn bg-chocolate-medium flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Procesando...
                    </span>
                  ) : (
                    "¡Quiero mi experiencia de chocolate!"
                  )}
                </button>
                
                <p className="text-chocolate-medium/70 text-sm text-center mt-4">
                  Te contactaremos pronto para confirmar tu visita
                </p>
              </form>
            ) : (
              <div className="text-center py-8 animate-fade-in">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-chocolate-dark mb-2">¡Solicitud Enviada!</h3>
                <p className="text-chocolate-medium">
                  Gracias por tu interés. Nos pondremos en contacto contigo muy pronto para coordinar tu visita.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Decorative chocolate drips */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <div className="chocolate-drip"></div>
      </div>
    </section>
  );
};

export default ContactForm;
