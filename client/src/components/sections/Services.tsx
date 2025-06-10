import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import floorcoating from "../../assets/images/floorcoating.png";
import waterproofing from "../../assets/images/waterproofing.png";
import wallpainting from "../../assets/images/wallpainting.png";
import { Link } from "wouter";
//import "./Services.css"; 

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'FLOOR COATING AND DUSTPROOFING',
      description: 'Protect your floors with our premium coating solutions that prevent dust, extend floor life, and enhance appearance.',
      image: floorcoating,
      icon: 'fas fa-layer-group',
      link: '/floorcoating'
    },
    {
      id: 2,
      title: 'WATERPROOFING',
      description: 'Our superior waterproofing services seal and protect your building from water damage, ensuring long-term structural integrity.',
      image: waterproofing,
      icon: 'fas fa-tint',
      link: '/waterproofing'
    },
    {
      id: 3,
      title: 'PAINTING',
      description: 'Transform your spaces with our professional painting services that combine quality materials with expert application techniques.',
      image: wallpainting,
      icon: 'fas fa-paint-roller',
      link: '/painting'
    }
  ];

  return (
    <section id="services" className="py-12 pb-14 bg-white" style={{ scrollMarginTop: "1rem" }}> 
      <div className="max-w-screen-xl mx-auto px-4 text-center ">
        <div className="relative pt-8 sm:pt-9"> 
          <h2 className="
            text-4xl md:text-6xl lg:text-7xl 
            font-bold font-poppins 
            tracking-wide select-none 
            absolute left-1/2 
            transform -translate-x-1/2 
            opacity-20 whitespace-nowrap
            translate-y-[-1rem] leading-[1]
            xs:translate-y-[-.8rem] xs:leading-[1.2]
            sm:translate-y-[-1.6rem] sm:leading-[1.3]
            md:translate-y-[-2.5rem] md:leading-normal
            lg:translate-y-[-3.2rem] lg:leading-normal
            "
            style={{
              background: "linear-gradient(to bottom, #0E5261, rgba(255,255,255,0.4))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>WHAT WE CAN DO</h2>

          <h2 className="
              text-2xl sm:text-3xl md:text-4xl 
              font-bold font-poppins 
              text-center text-[#377F8E] 
              mb-4 relative z-1
            " 
            style={{
              lineHeight: "1.3"
            }}>What We Can Do  
          </h2>
          </div>
      </div>

      <div className="grid gap-6 mt-5 md:grid-cols-3 max-w-screen-xl mx-auto px-6 py-6"
       style={{
        alignItems: "center"
      }}>
        {services.map((service) => (
          <Link key={service.id} href={service.link} className="group">
            <Card className={`rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
              service.title === "WATERPROOFING" ? "md:h-[430px] md:transform md:scale-105 md:shadow-xl border-2 border-[#3ABFDB]" 
                : "h-[410px]"
            }sm:h-[420px]`}>
              <div className={`
                relative w-full  overflow-hidden
                ${service.title === "WATERPROOFING" ? "h-64" : "h-52"}
                sm:h-52 // All images same height on mobile
              `}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-colors"></div>
                <div className="absolute top-4 right-4 bg-teal-600 text-white rounded-full p-3 shadow-lg text-lg">
                  <i className={service.icon}></i>
                </div>
              </div>
              <CardContent className={`
                p-6
                ${service.title === "WATERPROOFING" ? "md:p-7" : "p-6"}
              `}>
                <h3 className={`
                  text-lg font-bold font-poppins mb-3 transition-colors
                  ${service.title === "WATERPROOFING" 
                    ? "text-[#177b8f] md:text-xl" 
                    : "text-gray-800"
                  }
                  group-hover:text-teal-600
                `}>
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
