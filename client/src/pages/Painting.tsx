import React, { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AreasWaterproofingProperty from '../components/AreasWaterproofingProperty';
import TypesofWaterproofing from '../components/TypesofWaterproofing';
import { cn } from '@/lib/utils';

import paintingImage from '@/assets/images/wallpaint.png';
import checkmark from '@/assets/checkmark.svg';
import rectangle371 from '@/assets/rectangle-371.svg';
import rectangle390 from '@/assets/rectangle-390.svg';
import service11 from '@/assets/service-11.png';
import service21 from '@/assets/service-21.png';
import service31 from '@/assets/service-31.png';

interface PaintingProps {
  className?: string;
}

const applications = [
  { id: 1, name: 'Industrial', icon: checkmark },
  { id: 2, name: 'Warehouses', icon: checkmark },
  { id: 3, name: 'Garages', icon: checkmark },
  { id: 4, name: 'Automotive', icon: checkmark },
];

const features = [
  { id: 1, name: 'Durability', icon: checkmark },
  { id: 2, name: 'Chemical resistance', icon: checkmark },
  { id: 3, name: 'Hardness', icon: checkmark },
  { id: 4, name: 'Impact resistance', icon: checkmark },
];

const Painting: React.FC<PaintingProps> = ({ className }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 30; // header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

 /* const handleBackToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation('/#services');

    setTimeout(() => {
      scrollToSection('services');
    }, 100);
  };*/

  const handleBackToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // First scroll to top of page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Then navigate and scroll to services section
    setTimeout(() => {
      const homeElement = document.getElementById('home');
      if (homeElement) {
        homeElement.scrollIntoView({ behavior: 'instant' });
        setTimeout(() => {
          scrollToSection('services');
        }, 100);
      }
    }, 300);

    // Update URL without page reload
    window.history.pushState({}, '', '/#services');
  };
  
  return (
    <>
      <Navbar />
      <main id="floorcoating">
      <div  className={cn('py-4 px-6 bg-gray-50', className)}>
        <div className="flex space-x-4 mb-4 mt-20"
        style={{marginTop: "70px"}}>
          <button
              onClick={handleBackToServices}
              className="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Services
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <img
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] max-w-5xl rounded-[2rem] object-cover shadow-lg"
            src={paintingImage}
            alt="Painting"
          />
          <div className="flex flex-col items-center text-center px-2">
            <h1 className="text-3xl sm:text-4xl font-bold font-poppins text-[#177b8f] mb-4">PAINTING</h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
            Epoxy floor coatings are a durable, impact-resistant solution created by combining epoxy resin and 
            polyamine hardener, forming a rigid plastic material that bonds to most surfaces.
            </p>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 w-full">
                <div className="w-full max-w-sm mx-auto lg:mx-0 bg-white border-[3px] border-[#3ABFDB] rounded-xl p-4 shadow-md">
                        <h3 className="text-[#177b8f] text-lg sm:text-xl font-semibold uppercase text-center mb-4">Applications</h3>
                    <ul className="space-y-2 text-left">
                    {applications.map(({ id, name, icon }) => (
                        <li key={id} className="flex items-center gap-3 text-gray-800">
                        <img src={icon} alt="checkmark" className="w-5 h-5" />
                        <span>{name}</span>
                        </li>
                    ))}
                    </ul>
                </div>
              
              <div className="w-full max-w-sm mx-auto lg:mx-0 bg-white border-[3px] border-[#3ABFDB] rounded-xl p-4 shadow-md">
                <h3 className="text-[#177b8f] text-xl font-semibold uppercase text-center mb-4">Features</h3>
                <ul className="space-y-2 text-left">
                  {features.map(({ id, name, icon }) => (
                    <li key={id} className="flex items-center gap-3 text-gray-800"
                    style={{textAlign: "left"}}>
                      <img src={icon} alt="checkmark" className="w-5 h-5" />
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4"
        style={{fontFamily:"Source Sans Pro", fontWeight:"700", fontSize:"32px"}}>
          <span style={{ color: '#636363' }}>Where Painting </span>
          <span style={{ color: '#29A6C0' }}>Works Best</span>
        </h2>
        <p className="text-gray-600 max-w-7xl mx-auto mb-6" style={{ maxWidth: "56rem" }}>
          From safeguarding your walls to protecting your pools, our waterproofing solutions cover it all
        </p>
        <AreasWaterproofingProperty className="mx-auto" />
        
      </div>
      
      </main>
      <Footer />
      
    </>
  );
};

export default Painting;
