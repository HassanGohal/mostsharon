import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Import team images
import teamAhmad from "../assets/team/team-ahmad.png";
import teamAmjad from "../assets/team/team-amjad.png";
import teamManar from "../assets/team/team-manar.png";
import teamMonera from "../assets/team/team-monera.png";
import teamOsama from "../assets/team/team-osama.png";
import teamSharaf from "../assets/team/team-sharaf.png";

const Team = () => {
  return (
    <section className="py-28 bg-white font-['Almarai']" id="team">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#6B297A]">فريقنا</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            نخبة من الأخصائيين المؤهلين لتقديم أفضل رعاية طبية وتأهيلية
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative w-full">
          <Swiper
            slidesPerView={1} // Show one image at a time
            loop={true}
            autoplay={{ delay: 3000 }} // Auto-slide every 3 seconds
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="w-full relative"
          >
            {[
              { img: teamAhmad },
              { img: teamAmjad },
              { img: teamManar },
              { img: teamMonera },
              { img: teamOsama },
              { img: teamSharaf },
            ].map((member, index) => (
              <SwiperSlide key={index}>
                <div className="flex w-full flex-col items-center justify-center overflow-hidden">
                  <img 
                    src={member.img} 
                    alt="Team Member"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Swiper Navigation Styles */}
          <style>
            {`
              @media (max-width: 640px) {
                .swiper-button-next, .swiper-button-prev {
                  display: none !important; /* Hide arrows on mobile */
                }
              }

              .swiper-button-next, .swiper-button-prev {
                color: #6B297A !important; /* Change arrow color */
                font-size: 24px !important; /* Increase arrow size */
              }

              .swiper-button-next:hover, .swiper-button-prev:hover {
                color: #C9E165 !important; /* Change color on hover */
              }
            `}
          </style>
        </div>
      </div>
    </section>
  );
};

export default Team;
