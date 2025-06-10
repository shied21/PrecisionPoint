import React from "react";
import aboutUsCover from '../../assets/images/aboutus_cover.png';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 relative" style={{overflow:"hidden", scrollMarginTop: "1rem"}}>

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-5">
        {/* Faded Background Text */}
          <h2 
          className="text-4xl md:text-6xl lg:text-7xl 
          font-bold font-poppins 
          tracking-wide select-none 
          absolute left-1/2 
          transform -translate-x-1/2 
          opacity-20 whitespace-nowrap
          translate-y-[-1rem] leading-[1]
          xs:translate-y-[-.6rem] xs:leading-[1.1]
          sm:translate-y-[-1.5rem] sm:leading-[1.2]
          md:translate-y-[-2.5rem] md:leading-normal
          lg:translate-y-[-3.2rem] lg:leading-normal"
          style={{
              background: "linear-gradient(to bottom, #0E5261, rgba(255,255,255,0.4))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ABOUT US
          </h2>
          
          {/* Main Heading */}
          <h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-poppins text-center text-[#377F8E] mb-8 sm:mb-12 relative whitespace-nowrap"
            style={{
              lineHeight: "1.3"
            }}>
            About Us
          </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Text Content with Line */}
          <div className="relative">
            {/* Gradient Line */}
            <div 
              className="hidden md:block absolute -left-1 lg:-left-3 h-full w-[3px] bg-gradient-to-b from-[#B3E55D] to-[#1F6F80]"
            />
            
            {/* Text Content with left padding for line */}
            <div className="md:pl-4 lg:pl-6">
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Leading the Visayas and Mindanao regions in innovative PP-R hot & cold piping systems, waterproofing, and floor coating services since 1999.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                As pioneers in fusion-type hot & cold waterline systems, we later expanded into waterproofing with bitumen-based and cementitious solutions. Over the years, we've grown to offer comprehensive services, ensuring top-quality solutions for all your waterproofing and floor coating needs.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Our main office and warehouse are conveniently located at W70, Mandaue North Central, Castilex Compound, ML Quezon St., Cabancalan, Mandaue City, Cebu, Philippines.
              </p>
            </div>
          </div>
          
          {/* Image Section with Gradient Background */}
          <div className="relative w-full h-full px-4 sm:px-6 lg:px-0">
            {/* Decorative Rectangle Shape */}
            <div 
              className="absolute 
                top-[10%] 
                left-[5%] 
                w-[90%] 
                h-[90%] 
                rounded-[25px] 
                opacity-80
                transform
                -rotate-2
                transition-all
                duration-300
                ease-in-out"
              style={{
                background: "linear-gradient(to bottom, #207C8F 0%, #D1F690 100%)",
              }}
            />
            
              {/* Image Container */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <img 
                className="w-full h-auto object-cover transform rotate-2 transition-all duration-300 hover:rotate-0"
                src={aboutUsCover}
                alt="Construction site with city skyline"
                style={{
                  maxWidth: "95%",
                  marginInline: "auto"
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="mt-16 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto px-6 py-8">
          {/* Mission */}
          <div className="relative 
          bg-white 
          p-8 
          rounded-lg 
          shadow-lg 
          border 
          border-gray-100
          transition-all
          duration-300
          ease-in-out
          hover:scale-[1.02]
          hover:shadow-xl
          hover:border-[#16a286]
          hover:border-[3px]
          group">
            <h3 className="font-poppins 
            text-3xl 
            font-bold 
            text-center 
            text-[#023E4A]
            group-hover:text-[#16a286]
            transition-colors
            duration-300
            mb-6">MISSION</h3>
            <p className="text-[#023E4A] text-center text-lg leading-relaxed">
              Precision Point aims to be the top choice for designers and builders, providing innovative solutions tailored to their construction needs. We ensure satisfaction through premium products, efficient execution, and unwavering attention to detail.
            </p>
          </div>
          {/* Vision */}
          <div className="relative 
          bg-white 
          p-8 
          rounded-lg 
          shadow-lg 
          border 
          border-gray-100
          transition-all
          duration-300
          ease-in-out
          hover:scale-[1.02]
          hover:shadow-xl
          hover:border-[#16a286]
          hover:border-[3px]
          group">
            <h3 className="font-poppins 
            text-3xl 
            font-bold 
            text-center 
            text-[#023E4A]
            group-hover:text-[#16a286]
            transition-colors
            duration-300
            mb-6">VISION</h3>
            <p className="text-[#023E4A] text-center text-lg leading-relaxed">
              To expand nationally, serving clients across the Philippines while upholding excellence and integrity. Guided by our faith, Precision Point strives to be a blessing to our customers, employees, and the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
