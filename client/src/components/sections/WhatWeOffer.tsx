import React from "react";

const WhatWeOffer: React.FC = () => {
  const offerings = [
    {
      id: 1,
      title: 'WATER PROOFING',
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'FLOOR COATING & DUST PROOFING',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'WALL PAINTING',
      image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="offer" className="py-16 bg-primary bg-opacity-10 relative">
      <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center text-secondary mb-12">What We Offer</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Precision Point offers tailored solutions to protect and enhance your spaces, combining long-lasting guarantee with exceptional quality for every project.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map(offer => (
            <div key={offer.id} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out hover:shadow-lg">
              <div 
                className="h-64 bg-cover bg-center" 
                style={{ backgroundImage: `url('${offer.image}')` }}
              ></div>
              <div className="p-6 bg-primary">
                <h3 className="font-poppins text-xl font-semibold text-white mb-2">{offer.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
