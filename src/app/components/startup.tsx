import React from 'react';
import ImageAccordion from './ui/imageAccordian';

const Startup = () => {
  const images = [
    { id: 1, src: '/images/image.png' },
    { id: 2, src: '/images/image_1.png' },
    { id: 3, src: '/images/image_2.png' },
    { id: 4, src: '/images/image_1.png' },
    { id: 5, src: '/images/image_2.png' },
    { id: 6, src: '/images/image.png' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-12 md:px-24 bg-gradient-to-r from-[#3a2c5d] via-[#4d3c74] to-[#1c2129]">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold text-center mb-20 text-[#B796FE]" 
            style={{ 
              fontFamily: 'Instrument Sans, Arial, sans-serif', 
              letterSpacing: '0.1em' 
            }}
        >
          OUR STARTUPS
        </h1>
      </div>

      {/* Grid layout for smaller screens */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:hidden w-full max-w-4xl gap-6">
        {images.map(image => (
          <div key={image.id} className="flex items-center justify-center h-40 bg-gray-200 rounded-lg">
            <img src={image.src} alt={`Startup ${image.id}`} className="w-full h-full object-cover rounded-lg" />
          </div>
        ))}
      </div>

      {/* ImageAccordion for screens larger than lg */}
      <div className="w-full max-w-4xl image-accordion-lg hidden lg:block">
        <ImageAccordion />
      </div>
    </div>
  );
};

export default Startup;

<style>
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400&display=swap');
</style>