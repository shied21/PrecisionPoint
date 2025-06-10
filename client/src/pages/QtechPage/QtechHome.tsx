import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import central_bloc_6 from "../../assets/images/central_bloc_6.jpg";
import QtechAdvantage from "../../assets/images/qtech-advantage.jpg";
import QtechApplication from "../../assets/images/qtech-application.jpg";
import QtechFeature from "../../assets/images/qtech-feature.jpg";
import qtechHero1 from "../../assets/images/qtech-hero1.png";
import qtechHero2 from "../../assets/images/qtech-hero2.png";
import qtechHero3 from "../../assets/images/qtech-hero3.png";
import qtechHero4 from "../../assets/images/qtech-hero4.png";
import qtechHero5 from "../../assets/images/qtech-hero5.png";
import Certification from './Certification';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { type CarouselApi } from "@/components/ui/carousel";

interface CarouselItemProps {
  isSelected?: boolean;
  src: string;
  alt: string;
}

const CarouselSlide: React.FC<CarouselItemProps> = ({ isSelected = false, src, alt }) => (
  <div 
    className="relative h-[60vh]" // Fixed height container
  >
    <div 
      className={`
        absolute inset-0 transition-all duration-500 rounded-lg overflow-hidden
        ${isSelected 
          ? 'opacity-100 transform scale-100 z-10' 
          : 'opacity-50 transform scale-75'
        }
      `}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

const QtechHome: React.FC = () => {

  const [activeSection, setActiveSection] = useState('about'); 

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

// Add scroll handler function
/*const scrollToServices = () => {
  const servicesSection = document.getElementById('services-section');
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  }
};
const scrollToAbout = () => {
  const aboutProduct = document.getElementById('about-product');
  if (aboutProduct) {
    aboutProduct.scrollIntoView({ behavior: 'smooth' });
  }
};*/

// Scroll functions
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Scroll event listener to update active section
useEffect(() => {
  const handleScroll = () => {
    const aboutSection = document.getElementById('about-product');
    const qualitySection = document.getElementById('services-section');
    
    if (aboutSection && qualitySection) {
      const aboutRect = aboutSection.getBoundingClientRect();
      const qualityRect = qualitySection.getBoundingClientRect();
      const headerOffset = 100;

      if (aboutRect.top <= headerOffset && qualityRect.top > headerOffset) {
        setActiveSection('about');
      } else if (qualityRect.top <= headerOffset) {
        setActiveSection('quality');
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

const carouselRef = useRef<HTMLDivElement>(null);
  
const [currentIndex, setCurrentIndex] = useState(0);
const [api, setApi] = React.useState<CarouselApi>();

React.useEffect(() => {
  if (!api) return;

  api.on("select", () => {
    setCurrentIndex(api.selectedScrollSnap());
  });
}, [api]);

useEffect(() => {
  const interval = setInterval(() => {
    const nextButton = carouselRef.current?.querySelector('[data-carousel-next]');
    if (nextButton instanceof HTMLElement) {
      nextButton.click();
    }
  }, 3000);

  return () => clearInterval(interval);
}, []);

  return (
    <div className="font-sourcesans text-darkGray min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 bg-gray-50">
        <div >
         
         {/* Hero Section */}
         <section className="text-center mb-16 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
            
            {/* Sub Navbar */}
            {/*<div className="flex justify-center items-center space-x-8 border-gray-500 py-4">
              <button onClick={scrollToAbout} className="text-[#377F8E] font-semibold hover:text-[#6acde1] transition duration-300">
                About the Product
              </button>
              <span className="text-gray-300">|</span>
              <button onClick={scrollToServices} className="text-[#377F8E] font-semibold hover:text-[#6acde1] transition duration-300">
                Quality
              </button>
            </div>*/}
            <div className="inline-flex space-x-4 bg-gray-200 rounded-full px-2 py-1">
              <button
                onClick={() => scrollToSection('about-product')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 
                  ${activeSection === 'about' 
                  ? 'bg-[#0F697C] text-white shadow-lg hover:bg-[#1a7d92]' 
                  : 'text-gray-700 hover:bg-gray-300'
                  }`}
              >
                About the Product
              </button>
              <button
                onClick={() => scrollToSection('services-section')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105
                  ${activeSection === 'quality' 
                  ? 'bg-[#0F697C] text-white shadow-lg hover:bg-[#1a7d92]' 
                  : 'text-gray-700 hover:bg-gray-300'
                  }`}
              >
                Quality
              </button>
            </div>
          </section>

         {/*Our Product */}
        <section id="about-product" className="mb-16 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8"
          style={{scrollMarginTop: "80px"}}>
            <h1 className="text-5xl font-bold text-[#377F8E] mb-12 text-center">OUR PRODUCT</h1>
            
            {/* Text Content with Divider */}
            <div className="relative flex flex-col lg:flex-row justify-between gap-8 mb-12">
              {/* Left Paragraph */}
              <div className="flex-1 lg:pr-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  QTech pioneered the development of innovative pipe systems and continues 
                  to set new industry standards. Our commitment to quality has resulted in 
                  the creation of cutting-edge solutions that meet the diverse needs of our 
                  customers across various sectors.
                </p>
              </div>

              {/* Center Divider */}
              <div className="hidden lg:block w-px bg-gradient-to-b from-[#44BFD9] to-[#0F697C] self-stretch"></div>
              
              {/* Right Paragraph */}
              <div className="flex-1 lg:pl-8">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    We specialize in manufacturing high-performance pipe systems that combine 
                    durability, efficiency, and sustainability. Our products are designed to 
                    withstand demanding conditions while providing reliable, long-term 
                    performance.
                  </p>
                </div>
            </div>
          </section>
         

          {/* Carousel Section */}
          <section className="mb-16 overflow-hidden max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
            <Carousel ref={carouselRef}
              className="w-full"
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
                containScroll: false,
              }}>
              <CarouselContent className="-ml-4 items-center">
                {[
                  { src: qtechHero1, alt: "QTech Hero 1" },
                  { src: qtechHero2, alt: "QTech Hero 2" },
                  { src: qtechHero3, alt: "QTech Hero 3" },
                  { src: qtechHero4, alt: "QTech Hero 4" },
                  { src: qtechHero5, alt: "QTech Hero 5" }
                ].map((image, index) => (
                  <CarouselItem 
                    key={index} 
                    className="pl-4 md:basis-3/4 lg:basis-2/3"
                  >
                    <CarouselSlide 
                      src={image.src} 
                      alt={image.alt} 
                      isSelected={index === currentIndex} 
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" data-carousel-prev />
              <CarouselNext className="right-2" data-carousel-next />
            </Carousel>
          </section>

          {/* Services Section */}
          <section id="services-section" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8"
          style={{scrollMarginTop: "80px"}}>
            {/* QTECH Advantage Card */}
            <div className="relative h-80 bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer">
              <img
                src={QtechAdvantage}
                alt="QTECH ADVANTAGE"
                className="w-full h-full object-cover"
              />
              {/* Title Overlay - Initially visible at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent">
                <h3 className="absolute bottom-6 left-0 w-full text-center text-white text-[30px] font-bold transition-all duration-500 group-hover:opacity-0"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  QTECH ADVANTAGE
                </h3>
              </div>
              {/* Hover content */}
              <div className="absolute inset-0 bg-[#0C5868]/70 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <div className="p-6 h-full flex flex-col justify-start">
                  <h3 className="absolute top-6 left-0 w-full text-center text-white text-[24px] font-bold transition-all duration-500"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                    QTECH ADVANTAGE
                  </h3>
                  <p className="text-sm mt-[4rem]">
                    The QTech Advantage offers exceptional features, including anti-corrosive and non-scaling properties, high-temperature resistance, effective heat preservation for energy savings, excellent chemical resistance, and a long service life.
                  </p>
                </div>
              </div>
            </div>

            {/* Field of Application Card */}
            <div className="relative h-80 bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer">
              <img
                src={QtechApplication}
                alt="FIELD OF APPLICATION"
                className="w-full h-full object-cover"
              />
              {/* Title Overlay - Initially visible at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent">
                <h3 className="absolute bottom-6 left-0 w-full text-center text-white text-[30px] font-bold transition-all duration-500 group-hover:opacity-0"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  FIELD OF APPLICATION
                </h3>
              </div>
              {/* Hover content */}
              <div className="absolute inset-0 bg-[#0C5868]/70 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <div className="p-6 h-full flex flex-col justify-start">
                  <h3 className="absolute top-6 left-0 w-full text-center text-white text-[24px] font-bold transition-all duration-500"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                      FIELD OF APPLICATION
                  </h3>
                  <p className="text-sm mt-[4rem]">
                    The QTech product is ideal for a variety of applications, including pipe networks for swimming pool facilities, conveyors for industrial water 
                    and chemical materials, compressed air pipelines, rainwater utilization systems, residential hot and cold water lines, and other agricultural and industrial pipelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Features Card */}
            <div className="relative h-80 bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer">
              <img
                src={QtechFeature}
                alt="FEATURES"
                className="w-full h-full object-cover"
              />
              {/* Title Overlay - Initially visible at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent">
                <h3 className="absolute bottom-6 left-0 w-full text-center text-white text-[30px] font-bold transition-all duration-500 group-hover:opacity-0"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  FEATURES
                </h3>
              </div>
              {/* Hover content */}
              <div className="absolute inset-0 bg-[#0C5868]/70 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <div className="p-6 h-full flex flex-col justify-start">
                  <h3 className="absolute top-6 left-0 w-full text-center text-white text-[24px] font-bold transition-all duration-500"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                      FEATURES
                  </h3>
                  <p className="text-sm mt-[4rem]">
                    This product boasts excellent sanitation properties, a lightweight yet high-strength design, and easy, reliable fixings for enhanced usability.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Certification Section */}
          <div className="mb-10">
          <Certification className="mx-auto" />
          </div>

          {/* Video Section */}
          <section id="about-product" className="mb-16 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8"> 
                <div className="w-full max-w-2xl mx-auto">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg" >
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://player.vimeo.com/video/107446266?h=e074a0b9d2&title=0&byline=0&portrait=0"
                      title="QTech Product Video"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      style={{
                        border: "none",
                        borderRadius: "1rem"
                      }}
                    />
                  </div>
                </div>
          </section>

          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QtechHome;