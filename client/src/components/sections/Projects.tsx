import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import nito from '@/assets/images/nito.jpg';
import ebloc5 from '@/assets/images/ebloc5.jpg';
import ebloc6 from '@/assets/images/ebloc6.jpg';
import blocmall from '@/assets/images/blocmall.jpg';
import blocseda from '@/assets/images/blocseda.jpg';
import lanueva from '@/assets/images/lanueva.jpg';
import roadstar from '@/assets/images/roadstar.jpg';
import skyrise from '@/assets/images/skyrise.jpg';
import severo from '@/assets/images/severo.jpg';
import solinea from '@/assets/images/solinea.jpg';
import mcwd from '@/assets/images/mcwd.jpg';
import imperial from '@/assets/images/imperial.jpg';
import avida from '@/assets/images/avida.jpg';
import bacolod from '@/assets/images/bacolod.jpg';
import cdu from '@/assets/images/cdu.jpg';
import orion from '@/assets/images/orion.jpg';
import hopinn from '@/assets/images/hopinn.jpg';
import ebloc4 from '@/assets/images/ebloc4.jpg';
import ebloc3 from '@/assets/images/ebloc3.jpg';
import ebloc2 from '@/assets/images/ebloc2.jpg';
import davaopodium from '@/assets/images/davaopodium.jpg';
import { ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'SOLINEA',
      category: 'BUILDING',
      location: 'CEBU CITY',
      image: solinea,
      alt: 'Solinea Building Project'
    },
    {
      id: 2,
      title: 'E BLOC 5',
      category: 'CENTRAL BLOC',
      location: 'CEBU CITY',
      image: ebloc5,
      alt: 'E Bloc 5 Central Bloc Project'
    },
    {
      id: 3,
      title: 'E BLOC 6',
      category: 'CENTRAL BLOC',
      location: 'CEBU CITY',
      image: ebloc6,
      alt: 'E Bloc 6 Central Bloc Project'
    },
    {
      id: 4,
      title: 'AYALA MALL',
      category: 'CENTRAL BLOC',
      location: 'CEBU CITY',
      image: blocmall,
      alt: 'Ayala Mall Central Bloc Project'
    },
    {
      id: 5,
      title: 'SEDA HOTEL',
      category: 'CENTRAL BLOC',
      location: 'CEBU CITY',
      image: blocseda,
      alt: 'Seda Hotel Central Bloc Project'
    },
    {
      id: 6,
      title: 'SUPERMART',
      category: 'LA NUEVA',
      location: 'CEBU CITY',
      image: lanueva,
      alt: 'Supermart La Nueva Project'
    },
    {
      id: 7,
      title: 'PARDO',
      category: 'ROADSTAR',
      location: 'CEBU CITY',
      image: roadstar,
      alt: 'Pardo Roadstar Project'
    },
    {
      id: 8,
      title: 'SKYRISE 4B',
      category: 'BUILDING',
      location: 'CEBU CITY',
      image: skyrise,
      alt: 'Skyrise 4B Building Project'
    },
    {
      id: 9,
      title: 'SEVERO',
      category: 'HOSPITAL',
      location: 'BOGO CITY',
      image: severo,
      alt: 'Severo Hospital Project'
    },
    {
      id: 10,
      title: 'NITO TOWER 1',
      category: 'BUILDING',
      location: 'CEBU BUSINESS PARK',
      image: nito,
      alt: 'Nito Tower 1 Project'
    },
    {
      id: 11,
      title: 'METRO CEBU WATER DISCTRICT',
      category: 'BUILDING',
      location: 'CEBU CITY',
      image: mcwd,
      alt: 'Metro Cebu Water District Building Project'
    },
    {
      id: 12,
      title: 'IMPERIAL PLACE',
      category: 'RESORT',
      location: 'CEBU CITY',
      image: imperial,
      alt: 'Imperial Place Resort Project'
    },
    {
      id: 13,
      title: 'ABRIZA TOWERS',
      category: 'TOWER 1',
      location: 'DAVAO CITY',
      image: avida,
      alt: 'Abriza Towers Tower 1 Project'
    },
    {
      id: 14,
      title: 'CAPITOL CENTRAL',
      category: 'MALL',
      location: 'BACOLOD CITY',
      image: bacolod,
      alt: 'Capitol Central Mall Project'
    },
    {
      id: 15,
      title: 'CEBU DOCTORS HOSPITAL',
      category: 'HOSPITAL',
      location: 'CEBU CITY',
      image: cdu,
      alt: 'Cebu Doctors Hospital Project'
    },
    {
      id: 16,
      title: 'ORION',
      category: 'BUILDING',
      location: 'CEBU CITY',
      image: orion,
      alt: 'Orion Building Project'
    },
    {
      id: 17,
      title: 'HOP INN HOLIDAY',
      category: 'HOTEL',
      location: 'CEBU BUSINESS PARK',
      image: hopinn,
      alt: 'Hop Inn Holiday Hotel Project'
    },
    {
      id: 18,
      title: 'E BLOC 4',
      category: 'CENTRAL BLOC',
      location: 'CEBU CITY',
      image: ebloc4,
      alt: 'E Bloc 4 Central Bloc Project'
    },
    {
      id: 19,
      title: 'E BLOC 3',
      category: 'CENTRAL BLOC',
      location: 'CEBU CITY',
      image: ebloc3,
      alt: 'E Bloc 3 Central Bloc Project'
    },
    {
      id: 20,
      title: 'E BLOC 2',
      category: 'CENTRAL BLOC',
      location: 'CEBU CITY',
      image: ebloc2,
      alt: 'E Bloc 2 Central Bloc Project'
    },
    {
      id: 21,
      title: 'DAVAO ABREEZA',
      category: 'PODIUM',
      location: 'DAVAO CITY',
      image: davaopodium,
      alt: 'Davao Abreeza Podium Project'
    },
  ];

  // Function to handle mouse enter
  const handleMouseEnter = (id: number) => {
    setActiveProject(id);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setActiveProject(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Faded Background Text */}
        <h2
          className="text-4xl md:text-6xl lg:text-7xl 
          font-bold font-poppins 
          tracking-wide select-none 
          absolute left-1/2 
          transform -translate-x-1/2 
          opacity-20 whitespace-nowrap
          translate-y-[-1rem] leading-[0.9]
          xs:translate-y-[-.6rem] xs:leading-normal
          sm:translate-y-[-1.4rem] sm:leading-normal
          md:translate-y-[-2.5rem] md:leading-normal
          lg:translate-y-[-3.2rem] lg:leading-normal"
          style={{
            background: "linear-gradient(to bottom, #0E5261, rgba(255,255,255,0.4))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          PROJECTS
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center text-[#377F8E] mb-12 relative">Projects</h2>

        {/* Full-screen Carousel */}
        <div className="relative mb-12 ">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {projects.map(project => (
                <CarouselItem key={project.id} className="xs:basis-full sm:basis-1/2 lg:basis-1/3 pl-4">
                  <div
                    className="relative rounded-lg shadow-lg overflow-hidden h-64 sm:h-72 lg:h-80 group"
                    onMouseEnter={() => handleMouseEnter(project.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                      src={project.image}
                      alt={project.alt || project.title} // Fallback to title if alt is not provided
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 transition-opacity duration-300 ${activeProject === project.id ? 'opacity-100' : 'opacity-70'}`}></div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-20 text-white">
                      {project.category && (
                        <div className="text-xs sm:text-sm opacity-80 mb-1">{project.category}</div>
                      )}
                      <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
                      {project.location && (
                        <div className="text-xs sm:text-sm mt-1">{project.location}</div>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}


            </CarouselContent>

            {/* Navigation Buttons 
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 sm:px-4">
              <CarouselPrevious className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 rounded-full shadow-lg bg-white/90 text-primary border-0 hover:bg-white hover:text-primary-dark" />
              <CarouselNext className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 rounded-full shadow-lg bg-white/90 text-primary border-0 hover:bg-white hover:text-primary-dark" />
            </div>*/}
            <CarouselPrevious className="left-2 shadow-lg bg-white/90 text-primary border-0 hover:bg-white hover:text-primary-dark" data-carousel-prev />
            <CarouselNext className="right-2 shadow-lg bg-white/90 text-primary border-0 hover:bg-white hover:text-primary-dark" data-carousel-next />
          </Carousel>
        </div>

        <div className="text-center mt-12 flex justify-center">
          <Link href="/projects">
            <Button
              className="bg-primary hover:bg-primaryDark text-white font-bold py-3 px-8 rounded-md shadow-md transition-all duration-300 hover:shadow-lg group flex items-center"
            >
              See All Projects
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
