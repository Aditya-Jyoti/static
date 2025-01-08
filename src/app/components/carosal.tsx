// "use client";
// import React, { useEffect, useState } from "react";

// const ImageCarousel = () => {
//   // Initialize with proper public directory path
//   const imagesInit = Array.from(
//     { length: 9 },
//     (_, i) => `/images/eventimages/${i + 1}.jpg`
//   );

//   const [images, setImages] = useState(imagesInit);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [imagesLoaded, setImagesLoaded] = useState(
//     Array(imagesInit.length).fill(false)
//   );
//   const [hasError, setHasError] = useState(false);

//   // Preload images and track their loading status
//   useEffect(() => {
//     const preloadImages = () => {
//       const imagePromises = images.map((src, index) => {
//         return new Promise((resolve) => {
//           const img = new Image();
//           img.src = src;
//           img.onload = () => {
//             setImagesLoaded((prev) => {
//               const newState = [...prev];
//               newState[index] = true;
//               return newState;
//             });
//           };
//           img.onerror = () => {
//             setHasError(true);
//           };
//         });
//       });

//       Promise.all(imagePromises);
//     };

//     preloadImages();
//   }, [images]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       if (imagesLoaded.some((loaded) => loaded)) {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//       }
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [images.length, imagesLoaded]);

//   const handlePrev = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   if (hasError) {
//     return (
//       <div className="w-full max-w-[600px] h-[300px] flex items-center justify-center bg-gray-100 rounded-lg">
//         <p className="text-gray-500">Failed to load images</p>
//       </div>
//     );
//   }

//   if (!imagesLoaded.some((loaded) => loaded)) {
//     return (
//       <div className="w-full max-w-[600px] h-[300px] flex items-center justify-center bg-gray-100 rounded-lg">
//         <p className="text-gray-500">Loading images...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-full max-w-[600px] h-[300px] overflow-hidden rounded-lg">
//       <div
//         className="absolute flex transition-transform duration-700 ease-in-out h-full"
//         style={{
//           transform: `translateX(-${currentIndex * 100}%)`,
//           width: `${images.length * 100}%`,
//         }}
//       >
//         {images.map((image, index) => (
//           <div key={index} className="relative w-full h-full flex-shrink-0">
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="absolute w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       <button
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full w-8 h-8 shadow-lg transition-colors text-xl font-bold"
//         onClick={handlePrev}
//         aria-label="Previous slide"
//       >
//         ‹
//       </button>

//       <button
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full w-8 h-8 shadow-lg transition-colors text-xl font-bold"
//         onClick={handleNext}
//         aria-label="Next slide"
//       >
//         ›
//       </button>

//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={`w-2 h-2 rounded-full transition-colors ${
//               currentIndex === index ? "bg-white" : "bg-white/50"
//             }`}
//             onClick={() => setCurrentIndex(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;
