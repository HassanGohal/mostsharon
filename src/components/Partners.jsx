import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import bupa from "../assets/Bupa.png";
import tawuniya from "../assets/Tawuniya-01.png";
import medgulf from "../assets/Medgulf.png";
import rajhi from "../assets/Al-Rajhi-Takaful.png";

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
    <section className="py-16 bg-white font-['Almarai'] text-center relative overflow-hidden" id="partners">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#6B297A]">شركاؤنا</h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-600">
            نفخر بشراكتنا مع مجموعة من الشركات الرائدة في تقديم أفضل الخدمات
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="relative w-full">
          {/* Left & Right Gradients */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

          <Swiper
            slidesPerView={4} // Show 2 items by default
            spaceBetween={20} 
            loop={true}
            autoplay={{  }}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            modules={[Autoplay]}
             speed={1200}
            className="relative"
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id} className="flex justify-center items-center">
                <div className="bg-white rounded-[2rem] p-6 border-2 border-transparent  transform transition-all duration-300 flex justify-center items-center">
                  <img src={partner.image} alt={partner.name} className="h-32 w-auto object-contain" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Partners;
