import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import AboutUs from '@/components/sections/AboutUs';
import Projects from '@/components/sections/Projects';
import { useLocation } from 'wouter';

const Home: React.FC = () => {
  const [, setLocation] = useLocation();
  
  // Handle hash navigation when coming from another page
  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash.substring(1);
    if (hash) {
      // Slight delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, []);
  
  return (
    <div className="font-opensans text-darkGray">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
