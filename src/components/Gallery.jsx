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

import { useState, useEffect } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16
];

const Gallery = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((current) => (current + 2) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setActiveSlide((current) => (current + 2) % images.length);
    };

    const prevSlide = () => {
        setActiveSlide((current) => (current - 2 + images.length) % images.length);
    };

    return (
        <section className="py-28 bg-white font-['Almarai']" id="gallery">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#6B297A]">معرض الصور</h2>
                </div>

                {/* Carousel */}
                <div className="relative w-full max-w-5xl mx-auto px-4 md:px-12">
                    <div className="flex justify-center gap-8 w-full">
                        {/* Single Image Container for Mobile */}
                        <div className="relative w-full max-w-2xl block md:hidden" data-carousel="slide">
                            <div className="relative h-64 overflow-hidden rounded-lg border-4 border-[#6B297A] shadow-xl">
                                <img
                                    src={images[activeSlide]}
                                    className="absolute w-full h-full object-cover object-center"
                                    alt={`gallery-${activeSlide + 1}`}
                                />
                            </div>
                        </div>

                        {/* Two Image Containers for Desktop */}
                        <div className="hidden md:flex justify-center gap-8 w-full">
                            {/* First Image */}
                            <div className="relative w-full max-w-xl" data-carousel="slide">
                                <div className="relative h-80 overflow-hidden rounded-lg border-4 border-[#6B297A] shadow-xl">
                                    <img
                                        src={images[activeSlide]}
                                        className="absolute w-full h-full object-cover object-center"
                                        alt={`gallery-${activeSlide + 1}`}
                                    />
                                </div>
                            </div>

                            {/* Second Image */}
                            <div className="relative w-full max-w-xl" data-carousel="slide">
                                <div className="relative h-80 overflow-hidden rounded-lg border-4 border-[#6B297A] shadow-xl">
                                    <img
                                        src={images[(activeSlide + 1) % images.length]}
                                        className="absolute w-full h-full object-cover object-center"
                                        alt={`gallery-${((activeSlide + 1) % images.length) + 1}`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slider controls - Hidden on mobile, visible on desktop */}
                    <button
                        type="button"
                        className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-16 z-30 cursor-pointer focus:outline-none"
                        onClick={prevSlide}
                    >
                        <IoChevronBackOutline className="w-10 h-10 text-[#6B297A] hover:text-[#C9E165] transition-colors duration-300" />
                        <span className="sr-only">Previous</span>
                    </button>
                    <button
                        type="button"
                        className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-16 z-30 cursor-pointer focus:outline-none"
                        onClick={nextSlide}
                    >
                        <IoChevronForwardOutline className="w-10 h-10 text-[#6B297A] hover:text-[#C9E165] transition-colors duration-300" />
                        <span className="sr-only">Next</span>
                    </button>

                    {/* Custom Navigation Styles */}
                    <style>
                        {`
                            @media (max-width: 768px) {
                                .gallery-button-next, .gallery-button-prev {
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
