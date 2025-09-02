import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Import all partner logos dynamically
const partnerImages = import.meta.glob('../assets/partners/*');

const Partners = () => {
  const [partners, setPartners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load all partner logos
    Promise.all(
      Object.entries(partnerImages).map(async ([path, loader]) => {
        const image = await loader();
        return {
          id: path,
          name: path.split('/').pop().split('.')[0],
          image: image.default,
        };
      })
    ).then(loadedPartners => {
      setPartners(loadedPartners);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <section className="py-28 bg-white font-['Almarai']" id="partners">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 w-48 bg-gray-200 rounded mx-auto mb-4"></div>
              <div className="h-4 w-96 bg-gray-200 rounded mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-28 bg-white font-['Almarai'] overflow-hidden" id="partners">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl font-bold text-[#6B297A]">شركاء النجاح</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            نفتخر بشراكتنا مع أفضل شركات التأمين الصحي
          </p>
        </div>

        {/* Partners Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            className="partners-swiper px-4"
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <div className="group text-center py-4">
                  <div className="bg-white rounded-xl transition-all duration-300 hover:shadow-md hover:scale-105 p-6">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="h-16 w-auto mx-auto object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Swiper Styles */}
        <style>
          {`
            .partners-swiper {
              overflow: hidden;
              margin: 0 auto;
            }
            .partners-swiper .swiper-wrapper {
              transition-timing-function: linear !important;
            }
            .partners-swiper .swiper-slide {
              height: auto;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default Partners;

