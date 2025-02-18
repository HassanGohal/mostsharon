import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import team1 from "../assets/team-osama.jpg";

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
                        slidesPerView={1} // Show only one image at a time
                        loop={true}
                        navigation={{ enabled: window.innerWidth > 640 }} // Disable navigation on mobile
                        modules={[Navigation]}
                        className="w-full"
                    >
                        {/* Swiper Slide */}
                        <SwiperSlide>
                            <div className="flex w-full justify-center overflow-hidden ">
                                <img
                                    src={team1}
                                    alt="Team Member"
                                    className="justify-center object-cover"
                                />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex w-full justify-center overflow-hidden ">
                                <img
                                    src={team1}
                                    alt="Team Member"
                                    className="justify-center object-cover"
                                />
                            </div>
                        </SwiperSlide>
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
