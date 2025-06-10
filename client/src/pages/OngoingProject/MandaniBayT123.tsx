import React, { useState } from 'react';
import { useRoute, Link } from 'wouter';
import { ArrowLeft, ArrowRight, MapPin, Calendar, User } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface ProjectDetailProps {}

const ProjectDetail: React.FC<ProjectDetailProps> = () => {
  const [, params] = useRoute('/project/:id');
  const projectId = params?.id || '1';

  // This would typically come from an API call based on projectId
  const project = {
    id: parseInt(projectId),
    title: 'MANDANI BAY TOWER 1, 2, 3',
    category: 'Commercial Building',
    location: 'Archbishop Reyes Avenue in Lahug, Cebu City',
    client: 'ABC Development Corporation',
    completionDate: 'June 2024',
    description: 'NITO TOWER 1 is a premier commercial building in the heart of Cebu City. This multi-story structure was designed with sustainability and modern aesthetics in mind. The project involved comprehensive waterproofing solutions for the foundation, podium decks, and roof areas, ensuring long-term protection against water damage and seepage. Our specialized teams deployed advanced membrane systems and protective coatings to safeguard the structure against the region\'s tropical climate conditions.',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1577593980495-8e7390156dca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519567770579-c2fc5c6ea601?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    services: [
      'Waterproofing Solutions',
      'Membrane Installation',
      'Protective Coatings',
      'Quality Assurance Testing'
    ]
  };

  return (
    <div className="font-opensans text-darkGray min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation buttons */}
          <div className="flex space-x-4 mb-8">
            <Link href="/projects">
              <a className="inline-flex items-center text-gray-600 hover:text-primary transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Projects
              </a>
            </Link>
          </div>

          {/* Project title */}
          <h1 className="text-4xl font-bold text-darkGray mb-2">{project.title}</h1>
          <div className="w-24 h-1 bg-primary mb-8"></div>

          {/* Project images carousel */}
          <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
            <Carousel className="w-full">
              <CarouselContent>
                {project.images.map((img, index) => (
                  <CarouselItem key={index} className="md:basis-1/1">
                    <div className="relative h-[50vh] w-full overflow-hidden rounded-lg">
                      <img 
                        src={img} 
                        alt={`${project.title} - Image ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          {/* Project information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Project Description</h2>
              <p className="text-gray-700 mb-6">{project.description}</p>

              <h3 className="text-xl font-bold mb-4">Services Provided</h3>
              <ul className="list-disc pl-5 mb-6">
                {project.services.map((service, index) => (
                  <li key={index} className="text-gray-700 mb-2">{service}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md h-fit">
              <h2 className="text-xl font-bold mb-4 border-b pb-2">Project Details</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <User size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Client</h4>
                    <p className="text-gray-700">{project.client}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-700">{project.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Completion Date</h4>
                    <p className="text-gray-700">{project.completionDate}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <div className="w-[18px] h-[18px] flex items-center justify-center">
                      <span className="text-sm">🏢</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Project Type</h4>
                    <p className="text-gray-700">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;