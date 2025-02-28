import React from "react";

// Import partner logos
import bupa from "../assets/Bupa.png";
import tawuniya from "../assets/Tawuniya-01.png";
import medgulf from "../assets/Medgulf.png";
import rajhi from "../assets/Al-Rajhi-Takaful.png";

// Define partners' logos
const partners = [
  { id: 1, name: "بوبا العربية", image: bupa },
  { id: 2, name: "التعاونية", image: tawuniya },
  { id: 3, name: "ميدغلف", image: medgulf },
  { id: 4, name: "تكافل الراجحي", image: rajhi },
  { id: 5, name: "بوبا العربية", image: bupa },
  { id: 6, name: "التعاونية", image: tawuniya },
];

const Partners = () => {
  return (
    <section className="py-20 bg-white font-['Almarai'] text-center overflow-hidden relative" id="partners">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#6B297A]">شركاؤنا</h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-600">
            نفخر بشراكتنا مع مجموعة من الشركات الرائدة في تقديم أفضل الخدمات
          </p>
        </div>

        {/* Logo Carousel with Infinite Scroll */}
        <div className="relative flex items-center justify-center">
          {/* Left & Right Gradient Transparency */}
          <div className="absolute inset-y-0 left-0 w-[10%] md:w-[15%] bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-[10%] md:w-[15%] bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

          {/* Infinite Scrolling Container */}
          <div className="w-full overflow-hidden">
            <div className="flex items-center space-x-8 animate-scroll">
              {/* Duplicate logos for seamless infinite effect */}
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="bg-white p-4 sm:p-6 border-2 border-transparent flex justify-center items-center rounded-[2rem]">
                  <img src={partner.image} alt={partner.name} className="h-16 sm:h-24 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Custom CSS for Infinite Scrolling */}
        <style>
          {`
            @keyframes scroll {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll {
              display: flex;
              flex-wrap: nowrap;
              width: max-content;
              animation: scroll 15s linear infinite;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default Partners;
