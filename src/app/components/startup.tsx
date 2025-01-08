import React from "react";
import ImageAccordion from "./ui/imageAccordian";

const Startup = () => {
  const sections = [
    { name: 'Healthcare', id: 'healthcare' },
    { name: 'Robotics & Automation', id: 'robotics' },
    { name: 'Others', id: 'others' },
  ];

  const images = [
    { id: 1, src: '/images/JIVAN.png', section: 'healthcare', href: 'https://www.jivanhealth.in/aboutus' },
    { id: 2, src: '/images/CITTAA.jpg', section: 'healthcare', href: 'https://cittaa.in/' },
    { id: 3, src: '/images/Quinproc.jpeg', section: 'healthcare', href: 'https://quinproc.co.in/' },
    { id: 4, src: '/images/LOGO_MEDxAI_Innovations.jpg', section: 'healthcare', href: 'https://www.medxai-innovations.com/' },
    { id: 5, src: '/images/MAFKIN ROBOTICS.jpeg', section: 'robotics', href: 'https://www.mafkinrobotics.com/' },
    { id: 6, src: '/images/Mechatronix India.jpeg', section: 'robotics', href: 'https://www.mechonyx.com/' },
    { id: 7, src: '/images/Centurion Mobility.jpeg', section: 'robotics', href: 'https://centurionmobility.com/' },
    { id: 8, src: '/images/STEMTEC_logo.jpg', section: 'robotics', href: 'https://www.linkedin.com/company/stemtec-ai-robotics' },
    { id: 9, src: '/images/CRACKUBE LOGO JPG TRANSPARENT.png', section: 'others', href: '' },
    { id: 10, src: '/images/FEYNMAN_TECHSOL.png', section: 'others', href: '' },
    { id: 11, src: '/images/Chakaralaya Analytics.png', section: 'others', href: '' },
    { id: 12, src: '/images/INICIOTEK.jpg', section: 'others', href: '' },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <h1
          className="text-4xl font-bold text-center mb-18 text-white"
          style={{
            fontFamily: 'Instrument Sans, Arial, sans-serif',
            letterSpacing: '0.1em',
          }}
        >
          OUR STARTUPS
        </h1>
      </div>

      {/* Sections with grids */}
      {sections.map((section, index) => (
        <div
          key={index}

          className="w-screen  max-w-4xl mb-10 lg:hidden text-center"
        >
          <h2 className="text-3xl font-semibold text-white mb-6">
            {section.name}
          </h2>

          {/* Grid layout for smaller screens */}
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:hidden">

            {images
              .filter((image) => image.section === section.id)
              .map((image, idx) => (
                <a
                  key={idx}
                  href={image.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-40 bg-gray-200 rounded-lg"
                >
                  <img
                    src={image.src}
                    alt={`Startup ${image.id}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </a>
              ))}

          </div>
        </div>
      ))}

      {/* ImageAccordion for screens larger than lg */}
      <div className="w-full max-w-4xl image-accordion-lg hidden lg:block mt-10">
        <ImageAccordion />
      </div>
    </div>
  );
};

export default Startup;

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400&display=swap');
</style>;
