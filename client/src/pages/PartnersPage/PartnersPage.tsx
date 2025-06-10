import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './partnersPage.css';
import Qtech from '@/assets/images/qtech2-logo.png';
import Sika from '@/assets/images/sika-logo.png';
import Sealbond from '@/assets/images/sealbond-logo.png';
import ValliZaban from '@/assets/images/vallizaban-logo.png';
import Bostik from '@/assets/images/bostik-logo.jpg';



const PartnersPage: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  
  const partners = [
    {
      id: 1,
      name: 'Valli Zabban',
      logo: ValliZaban,
      description: 'Valli Zabban is a leading company in the sector of bitumen transformation for road pavings and building waterproofing, is now eighty years old. With high quality of its products and services, is a global partner for public bodies and for building contractors which are specialized in the sectors of road infrastructures and building waterproofing.'
    },
    {
      id: 2,
      name: 'Bostik',
      logo: Bostik,
      description: 'Bostik, manufacturer of many of the world’s finest commercial-grade construction and repair adhesive and sealant products, is bringing its expertise to the consumer market – giving it solutions for hardwood flooring installation, tile and stone installation, and all around general-purpose, heavy-duty, adhesive needs.'
    },
    {
      id: 3,
      name: 'Sika Philippines, Inc.',
      logo: Sika,
      description: 'Sika is a specialty chemicals company with a leading position in the development and production of systems and products for bonding, sealing, damping, reinforcing, and protecting in the building sector and motor vehicle industry. Sika has subsidiaries in more than 100 countries around the world and manufactures in over 300 factories. The company generates annual sales of over CHF 8 billion.'
    },
    {
      id: 4,
      name: 'Sealbond Chemical Industries, Inc.',
      logo: Sealbond,
      description: 'Sealbond Chemical Industries Inc. is a Filipino-owned company established in 1986. They manufacture construction chemicals like waterproofing compounds, admixtures, epoxy systems, grouts, adhesives, and specialty products. With over three decades of experience, they provide high-quality solutions for the construction industry throughout the Philippines.'
    },
    {
      id: 5,
      name: 'QTech Pipes',
      logo: Qtech,
      description: 'QTech specializes in PP-R Hot & Cold Waterline Systems for construction projects. Their innovative piping solutions offer superior durability, chemical resistance, and hygiene for residential and commercial applications. QTech products are engineered to perform reliably under various temperature and pressure conditions while maintaining water purity.'
    }
  ];

  const handleFlip = (partnerId: number) => {
    setFlippedCards(prev => {
      const newFlipped = new Set(prev);
      if (newFlipped.has(partnerId)) {
        newFlipped.delete(partnerId);
      } else {
        newFlipped.add(partnerId);
      }
      return newFlipped;
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-opensans text-darkGray min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced navigation buttons */}
          <div className="flex space-x-4 mb-8">
            <Link href="/">
              <a className="inline-flex items-center text-gray-600 hover:text-primary transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </a>
            </Link>
           {/*  <Link href="/#partners">
              <a className="inline-flex items-center text-gray-600 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                Associates Section
              </a>
            </Link>*/}
          </div>

          {/* Page title */}
          <h1 className="text-4xl font-bold font-poppins text-center text-[#377F8E] mb-2">ASSOCIATES</h1>
          <div 
              className="w-80 h-1 mx-auto mb-8"
              style={{
                background: "linear-gradient(to right, #44BFD9, #0F697C)"
              }}
            ></div>          
          {/* Partners grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div key={partner.id} className="partner-card">
                <div 
                  className="partner-card-inner"
                  style={{ transform: flippedCards.has(partner.id) ? 'rotateY(180deg)' : '' }}
                >
                  {/* Front of card */}
                  <div className="partner-card-front bg-white rounded-lg shadow-md p-6 flex flex-col">
                    <div className="flex-grow flex items-center justify-center">
                      <div className="h-40 w-full flex items-center justify-center mb-6">
                        <img 
                          src={partner.logo} 
                          alt={`${partner.name} logo`}
                          className="max-h-full max-w-full object-contain" 
                        />
                      </div>
                    </div>
                    <div className="mt-auto">
                      <button 
                        onClick={() => handleFlip(partner.id)}
                        className="inline-flex items-center justify-center px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 rounded-full"
                      >
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className="partner-card-back bg-white rounded-lg shadow-md p-6 flex flex-col">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-4">{partner.name}</h3>
                      <p className="text-gray-700">{partner.description}</p>
                    </div>
                    <div className="mt-auto">
                      <button 
                        onClick={() => handleFlip(partner.id)}
                        className="inline-flex items-center justify-center px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 rounded-full"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        Back
                      </button>
                    </div>
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

export default PartnersPage;