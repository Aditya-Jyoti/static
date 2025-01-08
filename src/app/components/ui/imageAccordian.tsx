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
        {src:"LOGO_MEDxAI_Innovations.jpg", href:"https://www.medxai-innovations.com/"}
      ],
    },
    {
      title: "Robotics & Automation",
      images: [
        { src: "/images/MAFKIN ROBOTICS.jpeg", href: "https://www.mafkinrobotics.com/" },
        { src: "/images/Mechatronix India.jpeg", href: "https://www.mechonyx.com/" },
        { src: "/images/Centurion Mobility.jpeg", href: "https://centurionmobility.com/" },
        { src: "/images/STEMTEC_logo.jpg", href: "https://www.linkedin.com/company/stemtec-ai-robotics" }
      ],
    },
    {
      title: "Others",
      images: [
        { src: "/images/CRACKUBE LOGO JPG TRANSPARENT.png", href: "" },
        { src: "FEYNMAN TECHSOL.png", href: "" },
        { src: "/images/Chakaralaya Analytics.png", href:"" },
        {src:"images/INCIOTEK.jpg", href:''},
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="relative z-10 flex items-center justify-center space-x-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative flex items-center justify-center overflow-hidden h-[450px] rounded-lg cursor-pointer transition-all duration-500 border object-contain ${
              activeIndex === index ? "w-full" : "w-[130px]"
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => {
              setActiveIndex(null);
              setNestedActiveIndex(null);
            }}
            onClick={() => {
              if (activeIndex !== null && nestedActiveIndex !== null) {
                window.open(items[activeIndex].images[nestedActiveIndex].href, "_blank");
              }
            }}
          >
            <div className="absolute inset-0 w-full h-full transition-all duration-500" />
            
            {activeIndex === index && (
              <div className="absolute top-16 right-25 flex flex-row gap-2">
                {item.images.map((image, idx) => (
                  <div
                    key={idx}
                    className={`relative flex-shrink-0 transition-all duration-500 ${
                      nestedActiveIndex === idx ? "w-80 h-96" : "w-32 h-64"
                    } rounded-lg overflow-hidden bg-gray-200`}
                    onMouseEnter={() => setNestedActiveIndex(idx)}
                    onMouseLeave={() => setNestedActiveIndex(null)}
                  >
                    <img
                      src={image.src}
                      alt={`${item.title} ${idx + 1}`}
                      className="h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            <div
              className={`absolute text-lg font-semibold text-white transition-all duration-500 ${
                activeIndex === index ? "rotate-0 top-8 " : "rotate-[-90deg]"
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