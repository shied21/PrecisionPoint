import React from "react";
import TextLoop from "react-text-loop"; // Ensure TextLoop is imported correctly
import { Button } from "@/components/ui/button";
import precisionPointCover from "@/assets/images/PrecisionPoint_Cover.png";

const Hero: React.FC = () => {
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -40;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-0 relative" style={{overflow: 'hidden'}}>
      <div className="relative h-[740px] bg-cover bg-center" style={{
        backgroundImage: `url(${precisionPointCover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        marginTop: '0px',
        overflowX: 'hidden'
      }}>
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        {/* Content Container */}
        <div className="absolute inset-0 container mx-auto px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-20 z-30">
          <div className="relative h-full flex flex-col justify-center max-w-[700px]">
            {/* Gradient Line */}
            <div className="hidden md:block absolute -left-4 lg:-left-8 top-1/2 -translate-y-1/2 h-[275px] w-[3px] bg-gradient-to-b from-[#B3E55D] to-[#1F6F80]"></div>

            {/* Content */}
            <h1 className="font-poppins text-white text-xl sm:text-2xl font-bold leading-tight mb-4">
              Innovative solutions designed to be
            </h1>
            
            <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-b from-[#B3E55D] to-[#1F6F80] bg-clip-text text-transparent">
              <TextLoop interval={2300} springConfig={{ stiffness: 180, damping: 12 }}>
                <span className="block bg-gradient-to-b from-[#B3E55D] to-[#1F6F80] bg-clip-text text-transparent">
                  WATERPROOF
                </span>
                <span className="block bg-gradient-to-b from-[#B3E55D] to-[#1F6F80] bg-clip-text text-transparent">
                  DURABLE
                </span>
                <span className="block bg-gradient-to-b from-[#B3E55D] to-[#1F6F80] bg-clip-text text-transparent">
                  RELIABLE
                </span>
              </TextLoop>
            </div>
            
            <p className="text-white text-base sm:text-lg md:text-xl max-w-xl mb-8 mt-4">
              The leading company in the Visayas and Mindanao region that specializes in the modern PP-R hot & cold waterline piping system and waterproofing & floor coating services.
            </p>
            
            <div className="w-[700px]">
              <Button 
                className="bg-[#83BF68] hover:bg-[#75AC5D] text-white font-bold py-2.5 px-5 sm:py-3 sm:px-6 rounded-[999px] text-sm sm:text-base"
                onClick={() => handleNavClick('about')}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
