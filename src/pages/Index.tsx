
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Experiences from '../components/Experiences';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Scroll reveal effect for elements with 'reveal' class
    const reveals = document.querySelectorAll('.reveal');
    
    const revealCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };
    
    const observer = new IntersectionObserver(revealCallback, {
      threshold: 0.1
    });
    
    reveals.forEach(reveal => {
      observer.observe(reveal);
    });
    
    return () => {
      reveals.forEach(reveal => {
        observer.unobserve(reveal);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-chocolate-cream/10">
      <Navbar />
      <Hero />
      <Experiences />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
