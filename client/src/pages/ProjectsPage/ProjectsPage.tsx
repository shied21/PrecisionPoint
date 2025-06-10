import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
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
import Abaca from '@/assets/images/Abaca.jpg';
import aeonblue from '@/assets/images/aeonblue.jpg';
import amaia from '@/assets/images/amaia.jpg';
import avidadavao from '@/assets/images/avidadavao.jpg';
import mandaniT1 from '@/assets/images/mandaniT1.jpg';
import mandaniT2 from '@/assets/images/mandaniT2.jpg';
import monterazas from '@/assets/images/monterazas.jpg';
import parkpoint from '@/assets/images/parkpoint.jpg';
import solinea3 from '@/assets/images/solinea3.jpg';
import Threetechno from '@/assets/images/Threetechno.jpg';
import Twotechno from '@/assets/images/TwoTechno.jpg';
import mcdo from '@/assets/images/mcdo.jpg';
const ProjectsPage: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'finished' | 'ongoing'>('finished');

  // Projects data - based on the design in All Projects.png
  const projects = [
    {
      id: 1,
      title: 'SOLINEA',
      category: 'BUILDING',
      location: 'CEBU CITY',
      image: solinea
    },
    {
      id: 2,
      title: 'E BLOC 5',
      category: 'CENTRAL BLOC',
      location: 'CEBU CITY',
      image: ebloc5
    },
    {
      id: 3,
      title: 'E BLOC 6',
      category: 'CENTRAL BLOC',
      location: 'CEBU CITY',
      image: ebloc6
    },
    {
      id: 4,
      title: 'AYALA MALL',
      category: 'CENTRAL BLOC',
      location: 'CEBU CITY',
      image: blocmall
    },
    {
      id: 5,
      title: 'SEDA HOTEL',
      category: 'CENTRAL BLOC',
      location: 'CEBU CITY',
      image: blocseda
    },
    {
      id: 6,
      title: 'SUPERMART',
      category: 'LA NUEVA',
      location: 'CEBU CITY',
      image: lanueva
    },
    {
      id: 7,
      title: 'PARDO',
      category: 'ROADSTAR',
      location: 'CEBU CITY',
      image: roadstar
    },
    {
      id: 8,
      title: 'SKYRISE 4B',
      category: 'BUILDING',
      location: 'CEBU CITY',
      image: skyrise
    },
    {
      id: 9,
      title: 'SEVERO',
      category: 'HOSPITAL',
      location: 'BOGO CITY',
      image: severo
    },
    {
      id: 10,
      title: 'NITO TOWER 1',
      category: 'BUILDING',
      location: 'CEBU BUSINESS PARK',
      image: nito
    },
    {
      id: 11,
      title: 'METRO CEBU WATER DISCTRICT',
      category: 'BUILDING',
      location: 'CEBU CITY',
      image: mcwd
    },
    {
      id: 12,
      title: 'IMPERIAL PLACE',
      category: 'RESORT',
      location: 'CEBU CITY',
      image: imperial
    },
    {
      id: 13,
      title: 'ABREEZA TOWERS',
      category: 'TOWER 1',
      location: 'DAVAO CITY',
      image: avida
    },
    {
      id: 14,
      title: 'CAPITOL CENTRAL',
      category: 'MALL',
      location: 'BACOLOD CITY',
      image: bacolod
    },
    {
      id: 15,
      title: 'CEBU DOCTORS HOSPITAL',
      category: 'HOSPITAL',
      location: 'CEBU CITY',
      image: cdu
    },
    {
      id: 16,
      title: 'ORION',
      category: 'BUILDING',
      location: 'CEBU CITY',
      image: orion
    },
    {
      id: 17,
      title: 'HOP INN HOLIDAY',
      category: 'HOTEL',
      location: 'CEBU BUSINESS PARK',
      image: hopinn
    },
    {
      id: 18,
      title: 'E BLOC 4',
      category: 'CENTRAL BLOC',
      location: 'CEBU CITY',
      image: ebloc4
    },
    {
      id: 19,
      title: 'E BLOC 3',
      category: 'CENTRAL BLOC',
      location: 'CEBU CITY',
      image: ebloc3
    },
    {
      id: 20,
      title: 'E BLOC 2',
      category: 'CENTRAL BLOC',
      location: 'CEBU CITY',
      image: ebloc2
    },
    {
      id: 21,
      title: 'DAVAO ABREEZA',
      category: 'PODIUM',
      location: 'DAVAO CITY',
      image: davaopodium
    },
    {
      id: 22,
      title: 'MONTERRAZAS DE CEBU',
      category: 'RESORT',
      location: 'CEBU CITY',
      image: monterazas 
    },
    {
      id: 23,
      title: 'AEON BLUE TOWER',
      category: 'BUILDING',
      location: 'DAVAO CITY',
      image: aeonblue
    },
    {
      id: 24,
      title: 'AMAIA STEPS TWO CAPITOL CENTRAL',
      category: 'CONDOMINIUM',
      location: 'BACOLOD CITY',
      image: amaia
    },
    {
      id: 25,
      title: 'ABACA RESORT MACTAN', 
      category: 'RESORT',
      location: 'LAPU-LAPU CITY',
      image: Abaca
    },
    {
      id: 26,
      title: 'MANDANI BAY QUAY TOWER 2',
      category: 'RESIDENTIAL',
      location: 'CEBU CITY',
      image: mandaniT2
    },
    {
      id: 27,
      title: 'MANDANI BAY QUAY TOWER 1-3',
      category: 'RESIDENTIAL',
      location: 'CEBU CITY',
      image: mandaniT1
    },
    {
      id: 28,
      title: 'AVIDA ABREEZA TOWERS',
      category: 'RESIDENTIAL CONDOMINIUM',
      location: 'DAVAO CITY',
      image: avidadavao
    },
    {
      id: 29,
      title: 'MC DONALDS AYALA CENTER',
      category: 'RESTAURANT',
      location: 'CEBU CITY',
      image: mcdo
    },
    {
      id: 30,
      title: 'PARK POINT RESIDENCES',
      category: 'RESIDENTIAL',
      location: 'CEBU CITY',
      image: parkpoint
    },
    {
      id: 31,
      title: 'SOLINEA TOWERS CEBU',
      category: 'CONDOMINIUM',
      location: 'CEBU CITY',
      image: solinea3
    },
    {
      id: 32,
      title: 'THREE TECHNO PLACE',
      category: 'BUILDING',
      location: 'ILOILO CITY',
      image: Threetechno
    },
    {
      id: 33,
      title: 'TWO TECHNO PLACE',
      category: 'BUILDING',
      location: 'ILOILO CITY',
      image: Twotechno
    },
    {
      id: 34,
      title: 'SAVERS DEPOT',
      category: 'HARDWARE STORE',
      location: 'LAPU-LAPU CITY',
      image: parkpoint
    }
  ];

  // Filter projects based on active tab
  const filteredProjects = projects.filter(project => {
    if (activeTab === 'finished') {
      return project.id <= 21; // Assuming first 21 projects are finished
    } else {
      return project.id > 21; // Assuming projects after 21 are ongoing
    }
  });

  // Handle mouse hover functions for project cards
  const handleMouseEnter = (id: number) => {
    setActiveProject(id);
  };

  const handleMouseLeave = () => {
    setActiveProject(null);
  };

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

    const handleBackToProjects = (e: React.MouseEvent) => {
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
            scrollToSection('projects');
          }, 100);
        }
      }, 300);
  
      // Update URL without page reload
      window.history.pushState({}, '', '/#projects');
    };
    
  return (
    <div className="font-opensans text-darkGray min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced navigation buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Link href="/">
              <a className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-primary transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </a>
            </Link>
           {/*  <Link href="/#projects">
              <a className="inline-flex items-center text-gray-600 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                Projects Section
              </a>
            </Link>*/}
            <button
              onClick={handleBackToProjects}
              className="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              Projects Section
            </button>
          </div>

          {/* Tab headers */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold font-poppins text-[#377F8E] mb-2">PROJECTS</h1>
            <div 
              className="w-80 h-1 mx-auto mb-8"
              style={{
                background: "linear-gradient(to right, #44BFD9, #0F697C)"
              }}
            ></div>

            <div className="inline-flex space-x-4 bg-gray-200 rounded-full px-2 py-1">
              <button
              onClick={() => setActiveTab('finished')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 
                ${activeTab === 'finished' 
                ? 'bg-[#0F697C] text-white shadow-lg hover:bg-[#1a7d92]' 
                : 'text-gray-700 hover:bg-gray-300'
                }`}
              >
              Finished
              </button>
              <button
              onClick={() => setActiveTab('ongoing')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105
                ${activeTab === 'ongoing' 
                ? 'bg-[#0F697C] text-white shadow-lg hover:bg-[#1a7d92]' 
                : 'text-gray-700 hover:bg-gray-300'
                }`}
              >
              Ongoing
              </button>
            </div>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden relative group"
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-5 text-white z-10">
                    {project.category && (
                      <div className="text-sm opacity-80 mb-1">{project.category}</div>
                    )}
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    {project.location && (
                      <div className="text-sm mt-1">{project.location}</div>
                    )}
                  </div>
                  
                  {/* Centered view project button that appears on hover */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 z-20 ${activeProject === project.id ? 'opacity-100' : 'opacity-0'}`}>
                    <Link href={
                      project.id === 1 ? '/project/1':
                      project.id === 2 ? '/project/2' :
                      project.id === 3 ? '/project/3' :
                      project.id === 4 ? '/project/4' :
                      project.id === 5 ? '/project/5' :
                      project.id === 6 ? '/project/6' :
                      project.id === 7 ? '/project/7' :
                      project.id === 8 ? '/project/8' :
                      project.id === 9 ? '/project/9' :
                      project.id === 10 ? '/project/10' :
                      project.id === 11 ? '/project/11' :
                      project.id === 12 ? '/project/12' :
                      project.id === 13 ? '/project/13' :
                      project.id === 14 ? '/project/14' :
                      project.id === 15 ? '/project/15' :
                      project.id === 16 ? '/project/16' :
                      project.id === 17 ? '/project/17' :
                      project.id === 18 ? '/project/18' :
                      project.id === 19 ? '/project/19' :
                      project.id === 20 ? '/project/20' :
                      project.id === 21 ? '/project/21' :
                      project.id === 22 ? '/project/22' :
                      project.id === 23 ? '/project/23' :
                      project.id === 24 ? '/project/24' :
                      project.id === 25 ? '/project/25' :
                      project.id === 26 ? '/project/26' :
                      project.id === 27 ? '/project/27' :
                      project.id === 28 ? '/project/28' :
                      project.id === 29 ? '/project/29' :
                      project.id === 30 ? '/project/30' :
                      project.id === 31 ? '/project/31' :
                      project.id === 32 ? '/project/32' :
                      project.id === 33 ? '/project/33' :
                      project.id === 34 ? '/project/34' : '/'
                    }>
                      <a className="px-8 py-2 bg-black bg-opacity-30 text-white font-semibold rounded-full 
                                 backdrop-blur-sm border border-white border-opacity-80
                                 hover:bg-opacity-40 transition-all 
                                 transform hover:scale-105 shadow-lg inline-flex items-center">
                        View Project
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;