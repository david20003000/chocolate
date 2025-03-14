
import React from 'react';
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-chocolate-dark text-white relative">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">Mundo de Chocolate</h3>
            <p className="text-white/80 mb-4">
              Un espacio único donde el arte, la historia y el sabor se fusionan para ofrecer una experiencia sensorial inolvidable.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80">Calle Chocolate 123, Ciudad Dulce</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80">+123 456 7890</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80">info@mundodechocolate.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 flex-shrink-0" />
                <div className="text-white/80">
                  <p>Lun - Vie: 10:00 - 19:00</p>
                  <p>Sáb - Dom: 09:00 - 20:00</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-chocolate-gold transition-colors duration-300">Inicio</a>
              </li>
              <li>
                <a href="#experiences" className="text-white/80 hover:text-chocolate-gold transition-colors duration-300">Experiencias</a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-chocolate-gold transition-colors duration-300">Galería</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-chocolate-gold transition-colors duration-300">Testimonios</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-chocolate-gold transition-colors duration-300">Contacto</a>
              </li>
            </ul>
          </div>
          
          {/* Location Map */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">Ubicación</h3>
            <div className="rounded-md overflow-hidden h-40 bg-white/10">
              {/* Embed map would go here in production */}
              <div className="w-full h-full flex items-center justify-center bg-chocolate-medium/50">
                <MapPin size={24} />
                <span className="ml-2">Mapa interactivo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {currentYear} Mundo de Chocolate. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white/70 text-sm hover:text-white transition-colors duration-300">
              Políticas de Privacidad
            </a>
            <a href="#" className="text-white/70 text-sm hover:text-white transition-colors duration-300">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
