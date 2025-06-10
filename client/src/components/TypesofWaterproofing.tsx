import React from 'react';
import service11 from '@/assets/service-11.png';
import service21 from '@/assets/service-21.png';
import service31 from '@/assets/service-31.png';

interface TypesofWaterproofingProps {
  className?: string;
}

const TypesofWaterproofing: React.FC<TypesofWaterproofingProps> = ({ className }) => {
  return (
    <section className={`relative w-full overflow-hidden py-8 px-4 ${className}`}>
      {/* Diagonal Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bottom-0 bg-[#0C5978]" 
          style={{ 
            clipPath: 'polygon(0 15%, 100% 95%, 100% 100%, 0% 100%)',
          }} 
        />
      </div>

      {/* Header and Subtitle Container */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col items-center lg:items-end lg:pr-16 relative">
          <div className="flex items-center gap-6">
            <h2 className="text-3xl font-bold mb-4 text-center lg:text-right"
              style={{fontFamily:"Source Sans Pro", fontWeight:"700", fontSize:"32px"}}>
              <span className="text-[#636363]">Types of </span> <br/>
              <span className="text-[#29A6C0]">Waterproofing Methods</span>
            </h2>
            <div 
              className="hidden lg:block h-20 w-1"
              style={{
                background: "linear-gradient(to bottom, #44BFD9, #0F697C)"
              }}
            ></div>
          </div>
        </div>
        {/* Mobile Subtitle */}
        <div className="lg:hidden items-center text-center mt-8 z-99">
          <p className="text-[#3E3E40] text-base z-99">
            Discover three proven methods to protect your building from water damage.
          </p>
        </div>
        
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto relative">
        {/* Desktop Layout (Stair-like) */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Subtitle for desktop */}
            <div className="absolute left-0 bottom-0 flex items-center gap-6 mb-12">
              <div className="hidden lg:block h-20 w-1 bg-white"></div>
              <p className="text-white text-xl max-w-xs">
                Discover three proven methods to protect your building from water damage.
              </p>
              
            </div>
            {/* Cards */}
            <div className="grid gap-6 relative">
              {/* Card 1 */}
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl ml-6"
              style={{boxShadow: "1px 3px 8px rgba(0, 0, 0, 0.15)"}}>
                <div className="flex gap-6">
                  <div className="w-40 h-48 flex-shrink-0">
                    <div className="w-full h-full rounded-lg bg-cover bg-center"
                      style={{ backgroundImage: `url(${service11})` }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#177B8F] text-xl font-semibold uppercase mb-4">
                      Cementitious Waterproofing
                    </h3>
                    <p className="text-[#3E3E40] text-base">
                      A rigid or semi-flexible solution ideal for toilets and internal wet areas, unaffected by sunlight or weathering.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
                <div className="bg-white rounded-lg shadow-md p-6 max-w-xl ml-[25%]"
                style={{boxShadow: "1px 3px 8px rgba(0, 0, 0, 0.15)"}}>
                <div className="flex gap-6">
                  <div className="w-40 h-48 flex-shrink-0">
                    <div className="w-full h-full rounded-lg bg-cover bg-center"
                      style={{ backgroundImage: `url(${service21})` }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#177B8F] text-xl font-semibold uppercase mb-4">
                      Liquid Waterproofing Membrane
                    </h3>
                    <p className="text-[#3E3E40] text-base">
                      A flexible, rubbery coating with elongation up to 280%, applied using a spray, roller, or trowel for durable protection.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl ml-[50%]"
              style={{boxShadow: "1px 3px 8px rgba(0, 0, 0, 0.15)"}}>
                <div className="flex gap-6">
                  <div className="w-40 h-48 flex-shrink-0">
                    <div className="w-full h-full rounded-lg bg-cover bg-center"
                      style={{ backgroundImage: `url(${service31})` }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#177B8F] text-xl font-semibold uppercase mb-4">
                      Bituminous Membrane Waterproofing
                    </h3>
                    <p className="text-[#3E3E40] text-base">
                      Perfect for low-sloped roofs, with self-adhesive and torch-on membranes providing weather resistance and durability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (Centered) */}
        <div className="lg:hidden space-y-6">
          {[
            { image: service11, title: "Cementitious Waterproofing", description: "A rigid or semi-flexible solution ideal for toilets and internal wet areas, unaffected by sunlight or weathering." },
            { image: service21, title: "Liquid Waterproofing Membrane", description: "A flexible, rubbery coating with elongation up to 280%, applied using a spray, roller, or trowel for durable protection." },
            { image: service31, title: "Bituminous Membrane Waterproofing", description: "Perfect for low-sloped roofs, with self-adhesive and torch-on membranes providing weather resistance and durability." }
          ].map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 mx-auto max-w-sm"
            style={{boxShadow: "1px 3px 8px rgba(0, 0, 0, 0.15)"}}>
              <div className="flex flex-col items-center">
                <div className="w-full h-48 mb-4">
                  <div className="w-full h-full rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url(${card.image})` }}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-[#177B8F] text-lg font-semibold uppercase mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#3E3E40] text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypesofWaterproofing;