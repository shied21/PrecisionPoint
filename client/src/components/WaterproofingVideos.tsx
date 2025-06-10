import React from 'react';

interface WaterproofingVideosProps {
  className?: string;
}

const WaterproofingVideos: React.FC<WaterproofingVideosProps> = ({ className }) => {
  const videos = [
    {
      id: "kMVUEeWuqLE",
      title: "Waterproofing Video 1"
    },
    {
      id: "bIJCPRPH0-Q",
      title: "Waterproofing Video 2"
    }
  ];

  return (
    <section className={`py-16 px-4 bg-gradient-to-b from-gray-50 to-white ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4"
            style={{fontFamily:"Source Sans Pro", fontWeight:"700", fontSize:"32px"}}>
            <span className="text-[#636363]">Waterproofing in Action: </span>
            <span className="text-[#29A6C0]">Polyurea Solutions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore real-world applications of advanced polyurea waterproofing through these project showcases.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
          {videos.map((video) => (
            <div 
              key={video.id}
              className="relative aspect-video rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] hover:shadow-xl"
              style={{
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden"
              }}
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&autohide=1&showinfo=0`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                style={{
                  border: "none",
                  borderRadius: "0.75rem"
                }}
              />
            </div>
          ))}
        </div>

        {/* Optional Call to Action 
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Watch our expert team demonstrate professional waterproofing techniques and solutions.
          </p>
        </div>*/}
      </div>
    </section>
  );
};

export default WaterproofingVideos;