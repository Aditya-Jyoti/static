"use client";
import React, { useState } from "react";

const ImageAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = [
    { title: "Item 1", image: "/images/image.png" },
    { title: "Item 2", image: "/images/image_1.png" },
    { title: "Item 3", image: "/images/image_2.png" },
  ];

  return (
    <div className="relative z-10 flex items-center justify-center">
      {items.map((item, index) => (
        <div
          key={index}
          className={`relative flex items-center justify-center overflow-hidden h-[450px] rounded-lg cursor-pointer bg-cover bg-center transition-all duration-500 ${
            activeIndex === index ? "w-full" : "w-[130px]"
          }`}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        >
          {/* Title */}
          <div
            className={`absolute text-lg font-semibold text-white transition-all duration-500 ${
              activeIndex === index
                ? "rotate-0 opacity-100 visible"
                : "rotate-[-90deg] text-center"
            }`}
            style={{ top: activeIndex === index ? '0' : '50%' }}
          >
            {item.title}
          </div>

          {/* Content */}
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-lg font-semibold text-[#6CEDFF] transition-opacity duration-500 ${
              activeIndex === index
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg opacity-0" 
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageAccordion;
