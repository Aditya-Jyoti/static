"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface CarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, 3000);

    return () => clearInterval(timer);
  }, [totalImages]);

  const getStyle = (offset: number) => {
    const translateX = offset * 100; // Offset-based positioning
    const scale = 1 - Math.abs(offset) * 0.2; // Scale down distant images
    const opacity = 1 - Math.abs(offset) * 0.3; // Reduce opacity for distant images
    const zIndex = 5 - Math.abs(offset); // Adjust z-index

    return {
      transform: `translateX(${translateX}%) scale(${scale})`,
      opacity,
      zIndex,
    };
  };

  return (
    <div id="gallery" className="relative h-96 my-12 overflow-hidden ">
      <div className="relative flex h-full w-full items-center justify-center">
        {images.map((image, index) => {
          const offset = (index - currentIndex + totalImages) % totalImages;
          const adjustedOffset =
            offset > totalImages / 2 ? offset - totalImages : offset;

          return (
            <div
              key={index}
              className="absolute h-72 w-72 rounded-lg object-cover shadow-xl transition-all duration-700 ease-in-out"
              style={getStyle(adjustedOffset)}
            >
              <Image
                src={`/car/${image}`}
                alt={`Slide ${index + 1}`}
                className="h-full w-full rounded-lg object-cover"
                width={250}
                height={250}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;
