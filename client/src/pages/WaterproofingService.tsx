import React, { useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AreasWaterproofingProperty from '../components/AreasWaterproofingProperty';
import TypesofWaterproofing from '../components/TypesofWaterproofing';
import WaterproofingVideos from '../components/WaterproofingVideos';
import { cn } from '@/lib/utils';

import waterproofingImage from '@/assets/waterproofing1.png';
import checkmark from '@/assets/checkmark.svg';

interface WaterproofingProps {
  className?: string;
}

const applications = [
  { id: 1, name: 'Basements', icon: checkmark },
  { id: 2, name: 'Walls', icon: checkmark },
  { id: 3, name: 'Bathrooms', icon: checkmark },
  { id: 4, name: 'Kitchens', icon: checkmark },
  { id: 5, name: 'Balconies', icon: checkmark },
  { id: 6, name: 'Decks', icon: checkmark },
  { id: 7, name: 'Roofs', icon: checkmark },
  { id: 8, name: 'Water tanks', icon: checkmark },
  { id: 9, name: 'Swimming pools', icon: checkmark },
];

const materials = [
  { id: 1, name: 'Cementitious materials', icon: checkmark },
  { id: 2, name: 'Bituminous materials', icon: checkmark },
  { id: 3, name: 'Liquid waterproofing membranes', icon: checkmark },
  { id: 4, name: 'Polyurethane liquid membranes', icon: checkmark },
];

const WaterproofingService: React.FC<WaterproofingProps> = ({ className }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [location, setLocation] = useLocation();

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
      <main id="waterproofing">
        <div className={cn("py-4 px-5 bg-gray-50", className)}>
          <div className="flex space-x-4 mb-[0.8rem] mt-[4.7rem]">
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
              src={waterproofingImage}
              alt="Waterproofing"
            />

            <div className="flex flex-col items-center text-center px-2">
              <h1 className="text-3xl sm:text-4xl font-bold font-poppins text-[#177b8f] mb-4">
                WATERPROOFING
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                Waterproofing creates an impervious barrier on building surfaces like foundations,
                roofs, and walls to prevent water penetration and ensure durability.
              </p>

              <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 w-full">
                <div className="w-full max-w-sm mx-auto lg:mx-0 bg-white border-[3px] border-[#3ABFDB] rounded-xl p-4 shadow-md lg:self-stretch">
                  <h3 className="text-[#177b8f] text-lg sm:text-xl font-semibold uppercase text-center mb-4">
                    Common Materials
                  </h3>
                  <ul className="space-y-2 text-left">
                    {materials.map(({ id, name, icon }) => (
                      <li key={id} className="flex items-center gap-3 text-gray-800">
                        <img src={icon} alt="checkmark" className="w-5 h-5" />
                        <span>{name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full max-w-sm mx-auto lg:mx-0 bg-white border-[3px] border-[#3ABFDB] rounded-xl p-4 shadow-md flex flex-col justify-center">
                  <h3 className="text-[#177b8f] text-lg sm:text-xl font-semibold uppercase text-center mb-4">
                    Applications
                  </h3>
                  <ul className="space-y-2 text-left">
                    {applications.map(({ id, name, icon }) => (
                      <li key={id} className="flex items-center gap-3 text-gray-800">
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

        {/* Where Waterproofing Works Best */}
        <div className="py-12 px-4 text-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'Source Sans Pro', fontWeight: '700' }}
          >
            <span className="text-[#636363]">Where Waterproofing </span>
            <span className="text-[#29A6C0]">Works Best</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6 px-2">
            From safeguarding your walls to protecting your pools, our waterproofing solutions cover it all.
          </p>
          <AreasWaterproofingProperty className="mx-auto" />
        </div>

        {/* Types of Waterproofing */}
        <div className="py-12">
          <TypesofWaterproofing className="mx-auto" />
        </div>

        {/* Videos Section */}
        <div className="py-12 px-4">
          <WaterproofingVideos className="mx-auto" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default WaterproofingService;
