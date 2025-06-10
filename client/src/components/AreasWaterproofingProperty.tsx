import React, { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
// Import images
import wallsImage from "@/assets/walls1.png";
import terraceImage from "@/assets/terrace0.png";
import basementImage from "@/assets/basement0.png";
import slabImage from "@/assets/slab0.png";
import deckImage from "@/assets/deck0.png";
import tankImage from "@/assets/tank0.png";
import portableReservoirImage from "@/assets/portable-reservoir0.png";
import poolsImage from "@/assets/pools0.png";
import planterBoxImage from "@/assets/planter-box1.png";

//import "./AreasWaterproofingProperty.css";

interface IAreasWaterproofingPropertyProps {
  property1?: "default" | "variant-2" | "variant-3" | "variant-4" | "variant-5";
  className?: string;
}

const AreasWaterproofingProperty = ({
  property1 = "default",
  className,
  ...props
}: IAreasWaterproofingPropertyProps): JSX.Element => {

  // Define variantsClassName based on property1
  const variantsClassName = `property-1-${property1}`;

  // Slides array
  const slides = [
    { image: wallsImage, title: "Walls" },
    { image: terraceImage, title: "Terrace / Balcony / Canopy / Roof Deck" },
    { image: basementImage, title: "Basement / Wall & Matting" },
    { image: slabImage, title: "Ground Slabs" },
    { image: deckImage, title: "Landscape Deck" },
    { image: tankImage, title: "Tanks & Cisterns" },
    { image: portableReservoirImage, title: "Portable Water Reservoirs" },
    { image: poolsImage, title: "Swimming Pools" },
    { image: planterBoxImage, title: "Planter Box" },
  ];

  // Create extended slides array for infinite loop
  const extendedSlides = [...slides, ...slides, ...slides];

  const [currentSlide, setCurrentSlide] = useState(slides.length);// Start from middle set
  const [isTransitioning, setIsTransitioning] = useState(false); 

  const silentReset = (position: number) => {
    setIsTransitioning(false);
    setCurrentSlide(position);
    setTimeout(() => setIsTransitioning(true), 50);
  };
  
  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentSlide(prev => {
      const next = prev + 1;
      // If we reach the end of last set
      if (next >= slides.length * 2) {
        // Silently reset to first set
        setTimeout(() => silentReset(slides.length), 500);
        return next;
      }
      return next;
    });
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Calculate transform based on screen size
  const getTransformValue = () => {
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth < 640;
      const slideWidth = isMobile ? 100 : (window.innerWidth < 1024 ? 50 : 33.333);
      return `translateX(-${currentSlide * slideWidth}%)`;
    }
    return `translateX(-${currentSlide * 100}%)`;
  };

  return (
    <div 
      className={cn(
        "w-full overflow-hidden relative py-4 sm:py-6",
        className,
        variantsClassName
      )} 
      {...props}
    >
      <div className="w-full overflow-hidden relative mx-auto max-w-[90%] sm:max-w-none sm:-mx-4 lg:mx-0">
        <div
          className="flex transition-all duration-500 ease-in-out"
          style={{
            transform: getTransformValue(),
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
          }}
        >
          {extendedSlides.map((item, index) => (
            <div 
              key={index} 
              className="
                relative 
                flex-none 
                w-full 
                sm:w-1/2 
                lg:w-1/3 
                px-4
                sm:px-4
                transition-transform 
                duration-300 
                transform 
                hover:scale-[1.02]
              "
            >
              <div className="
                relative 
                overflow-hidden 
                rounded-xl 
                shadow-lg 
                aspect-[4/3]
                group
                mx-auto
                max-w-md
                sm:max-w-none
              ">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="
                    w-full 
                    h-full 
                    object-cover 
                    transition-transform 
                    duration-500 
                    group-hover:scale-110
                  "
                />
                <div className="
                  absolute 
                  inset-x-0 
                  bottom-0 
                  p-3 
                  bg-gradient-to-t 
                  from-black/70 
                  to-transparent
                ">
                  <h3 className="
                    text-white 
                    text-center 
                    font-semibold 
                    text-sm 
                    sm:text-base 
                    lg:text-lg
                    font-sans
                    line-clamp-2
                  ">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AreasWaterproofingProperty;