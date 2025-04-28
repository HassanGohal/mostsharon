import React from "react";
import img1 from "../assets/Gallery_pics/1.jpeg";
import img2 from "../assets/Gallery_pics/2.jpeg";
import img4 from "../assets/Gallery_pics/3.jpeg";
import img3 from "../assets/Gallery_pics/4.jpeg";
import img5 from "../assets/Gallery_pics/5.jpeg";
import img6 from "../assets/Gallery_pics/6.jpeg";
import img7 from "../assets/Gallery_pics/7.jpeg";
import img8 from "../assets/Gallery_pics/8.jpeg";
import img9 from "../assets/Gallery_pics/9.jpeg";
import img10 from "../assets/Gallery_pics/10.jpeg";
import img11 from "../assets/Gallery_pics/11.jpeg";
import img12 from "../assets/Gallery_pics/12.jpeg";
import img13 from "../assets/Gallery_pics/13.jpeg";
import img14 from "../assets/Gallery_pics/14.jpeg";
import img15 from "../assets/Gallery_pics/15.jpeg";
import img16 from "../assets/Gallery_pics/16.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16
];

const Gallery = () => {
    return (
        <section className="py-28 bg-white font-['Almarai']" id="gallery">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#6B297A]">معرض الصور</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                        نقدم لكم لمحة عن مركزنا وخدماتنا من خلال هذه الصور
                    </p>
                </div>

                {/* Gallery Grid with Swiper */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={true}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 2,
                            },
                        }}
                        className="mySwiper"
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative group overflow-hidden rounded-xl">
                                    <img
                                        src={image}
                                        alt={`Gallery Image ${index + 1}`}
                                        className="w-full h-[300px] md:h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-[#6B297A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Swiper Styles */}
                    <style>
                        {`
                            .swiper {
                                padding: 20px 0;
                            }

                            @media (max-width: 768px) {
                                .swiper-button-next, .swiper-button-prev {
                                    display: none !important;
                                }
                            }
                        `}
                    </style>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
