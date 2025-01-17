"use client";
import React, { useState } from "react";

const ImageAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [nestedActiveIndex, setNestedActiveIndex] = useState<number | null>(null);
  
  const items = [
    {
      title: "Healthcare",
      images: [
        { src: "/images/JIVAN.png", href: "https://www.jivanhealth.in/aboutus" },
        { src: "/images/CITTAA.jpg", href: "https://cittaa.in/" },
        { src: "/images/Quinproc.jpeg", href: "https://quinproc.co.in/" },
        { src: "/images/LOGO_MEDxAI_Innovations.jpg", href: "https://www.medxai-innovations.com/" }
      ],
    },
    {
      title: "Robotics & Automation",
      images: [
        { src: "/images/MAFKIN ROBOTICS.jpeg", href: "https://www.mafkinrobotics.com/" },
        { src: "/images/Mechatronix India.jpeg", href: "https://www.mechonyx.com/" },
        { src: "/images/Centurion Mobility.jpeg", href: "https://centurionmobility.com/" },
        { src: "/images/Mechonix_D2R.png", href: "https://www.mechonyx.com/" },
        { src: "/images/STEMTEC_logo.jpg", href: "https://www.linkedin.com/company/stemtec-ai-robotics" }
      ],
    },
    {
      title: "Others",
      images: [
        { src: "/images/CRACKUBE LOGO JPG TRANSPARENT.png"},
        { src: "/images/FEYNMAN_TECHSOL.png" },
        { src: "/images/Chakaralaya Analytics.png"},
        { src: "/images/INICIOTEK.jpg"},
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="relative z-10 flex items-stretch justify-center">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative flex items-center justify-center overflow-hidden h-[450px] rounded-lg cursor-pointer transition-all duration-500 border ${
              activeIndex === index ? "w-full" : "w-[130px]"
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => {
              setActiveIndex(null);
              setNestedActiveIndex(null);
            }}
            onClick={() => {
              if (activeIndex !== null && nestedActiveIndex !== null) {
                const selectedImage = items[activeIndex].images[nestedActiveIndex];
                if ('href' in selectedImage && selectedImage.href) {
                  window.open(selectedImage.href, "_blank");
                }
              }
            }}
          >
            <div className="absolute inset-0 w-full h-full bg-black/20 transition-all duration-500" />
            
            {activeIndex === index && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full flex">
                  {item.images.map((image, idx) => (
                    <div
                      key={idx}
                      className={`relative transition-all duration-500 ${
                        nestedActiveIndex === idx ? "w-full" : "w-1/4"
                      } h-full`}
                      onMouseEnter={() => setNestedActiveIndex(idx)}
                      onMouseLeave={() => setNestedActiveIndex(null)}
                    >
                      <img
                        src={image.src}
                        alt={`${item.title} ${idx + 1}`}
                        className="h-full w-full object-contain bg-white"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div
              className={`absolute text-lg font-semibold text-white transition-all duration-500 ${
                activeIndex === index ? "rotate-0 top-8 hidden" : "-rotate-90"
              }`}
            >
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageAccordion;