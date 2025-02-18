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
import { Autoplay } from "swiper/modules"; // Corrected import

import "swiper/css";
import "swiper/css/autoplay";  // This line ensures autoplay styles load

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
                </div>

                {/* Swiper Carousel */}
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3} // Default: 3 slides per view
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    modules={[Autoplay]}
                    className="w-full"
                    breakpoints={{
                        320: { slidesPerView: 1 }, // Mobile: Show 1 image
                        640: { slidesPerView: 1 }, // Small screens: 1 image
                        768: { slidesPerView: 2 }, // Tablets: Show 2 images
                        1024: { slidesPerView: 3 }, // Large screens: 3 images
                    }}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="border-4 border-[#6B297A] rounded-lg overflow-hidden shadow-lg h-96">
                                <img
                                    src={image}
                                    alt={`gallery-${index}`}
                                    className="w-full object-cover h-96"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
};

export default Gallery;
