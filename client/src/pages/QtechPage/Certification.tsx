import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import Certificate1 from "../../assets/images/qtech-certificate1.png";
import Certificate2 from "../../assets/images/qtech-certificate2.png";
import Certificate3 from "../../assets/images/qtech-certificate3.png";
import Certificate4 from "../../assets/images/qtech-certificate4.png";
import CertCover from "../../assets/images/cert-cover.svg";
import CertFooter from "../../assets/images/cert-footer.png";

interface CertificationProps {
  className?: string;
}

const Certification: React.FC<CertificationProps> = ({ className }) => {

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.25, 3));
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDragStart({
      x: clientX - position.x,
      y: clientY - position.y
    });
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || scale <= 1) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setPosition({
      x: clientX - dragStart.x,
      y: clientY - dragStart.y
    });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (scale <= 1) {
      setPosition({ x: 0, y: 0 });
    }
  }, [scale]);

  const certificates = [
    { src: Certificate1, alt: "Certificate 1" },
    { src: Certificate2, alt: "Certificate 2" },
    { src: Certificate3, alt: "Certificate 3" },
    { src: Certificate4, alt: "Certificate 4" },
  ];

  return (
    <section className="relative w-full min-h-screen mb-10">
      <img 
        src={CertCover} 
        alt="Certification Cover" 
        className="absolute inset-0 w-full h-full lg:h-[650px] object-cover z-0"
      />
      
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row items-start gap-12">
        {/* Left Content */}
        <div className="max-w-[25rem] mx-auto text-center lg:mt-40">
          <h2 className="text-4xl font-bold text-[#0F697C] mb-3">CERTIFICATION</h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Our products meet globally recognized standards of quality and durability. Below are certifications that affirm our commitment to excellence and innovation.
          </p>
        </div>
      
        {/* Right Content 
        <div className="lg:w-1/2 w-full relative">*/}
        <div className="max-w-[25rem] mx-auto relative">
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="aspect-[4/6] cursor-pointer " onClick={() => setSelectedImage(0)}>
            <div className="relative w-full h-full rounded-lg bg-white p-2 shadow-md shadow-black/20 overflow-hidden">
              <img
                src={Certificate1}
                alt="Certificate 1"
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
            </div>
            <div className="aspect-[3/4] cursor-pointer " onClick={() => setSelectedImage(1)}>
            <div className="relative w-full h-full rounded-lg bg-white p-2 shadow-md shadow-black/20 overflow-hidden">
              <img
                src={Certificate2}
                alt="Certificate 2"
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
            </div>
            <div className="aspect-[3/4] cursor-pointer " onClick={() => setSelectedImage(2)}>
            <div className="relative w-full h-full rounded-lg bg-white p-2 shadow-md shadow-black/20 overflow-hidden">
              <img
                src={Certificate3}
                alt="Certificate 3"
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
            </div>
            <div className="aspect-[4/6] mt-[-2rem] lg:mt-[-2.3rem] cursor-pointer " onClick={() => setSelectedImage(3)}>
            <div className="relative w-full h-full rounded-lg bg-white p-2 shadow-md shadow-black/20 overflow-hidden">
              <img
                src={Certificate4}
                alt="Certificate 4"
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
            </div>
          </div>
          
          {/* Footer Image - Positioned at bottom */}
          <div className="absolute bottom-[2rem] left-0 right-0 z-10">
            <img 
              src={CertFooter} 
              alt="Certification Footer" 
              className="w-full object-contain rounded-lg shadow-md shadow-black/20"
            />
          </div>
        </div>
      </div>

        {/* Modal */}
        <Dialog open={selectedImage !== null} onOpenChange={() => {
          setSelectedImage(null);
          setScale(1);
        }}>
          <DialogContent className="max-w-[90vw] sm:max-w-[80vw] h-[85vh] p-0 mx-auto sm:mx-2">
            {/* Controls - Repositioned and resized for mobile */}
            <div className="absolute right-2 sm:right-4 top-2 sm:top-4 z-50 flex gap-1 sm:gap-2">
              <button
                onClick={handleZoomOut}
                className="rounded-full bg-black/50 p-1.5 sm:p-2 text-white hover:bg-black/70 transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
              <button
                onClick={handleReset}
                className="rounded-full bg-black/50 p-1.5 sm:p-2 text-white hover:bg-black/70 transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </button>
              <button
                onClick={handleZoomIn}
                className="rounded-full bg-black/50 p-1.5 sm:p-2 text-white hover:bg-black/70 transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
              <button
                onClick={() => {
                  setSelectedImage(null);
                  setScale(1);
                }}
                className="rounded-full bg-black/50 p-1.5 sm:p-2 text-white hover:bg-black/70 transition-colors"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
            
            <div className="relative w-full h-full flex items-center justify-center bg-black/90">
              <Carousel className="w-full h-full flex items-center justify-center" opts={{
                align: "center",
                loop: true,
                startIndex: selectedImage || 0
              }}>
                <CarouselContent className="h-full">
                  {certificates.map((cert, index) => (
                    <CarouselItem key={index} className="h-full pt-5 sm:pt-0">
                      <div className="flex h-full items-center justify-center p-2 sm:p-6">
                        <div className="relative w-full h-full flex items-center justify-center">
                          <img
                            src={cert.src}
                            alt={cert.alt}
                            className="max-h-[80vh] sm:max-h-[75vh] w-auto object-contain transition-transform duration-200 select-none mx-auto"
                            style={{ 
                              transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                              cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                              touchAction: 'none'
                            }}
                            onMouseDown={handleDragStart}
                            onMouseMove={handleDragMove}
                            onMouseUp={handleDragEnd}
                            onMouseLeave={handleDragEnd}
                            onTouchStart={handleDragStart}
                            onTouchMove={handleDragMove}
                            onTouchEnd={handleDragEnd}
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-1 sm:left-4 h-8 w-8 sm:h-12 sm:w-12 bg-black/50 hover:bg-white/70 text-white" />
                <CarouselNext className="right-1 sm:right-4 h-8 w-8 sm:h-12 sm:w-12 bg-black/50 hover:bg-white/70 text-white" />
              </Carousel>
            </div>
          </DialogContent>
        </Dialog>
    </section>
  );
};

export default Certification;