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

const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16
];

const Gallery = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((current) => (current + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setActiveSlide((current) => (current + 1) % images.length);
    };

    const prevSlide = () => {
        setActiveSlide((current) => (current - 1 + images.length) % images.length);
    };

    return (
        <section className="py-28 bg-white font-['Almarai']" id="gallery">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#6B297A]">معرض الصور</h2>
                </div>

                {/* Carousel */}
                <div className="relative w-full max-w-5xl mx-auto" data-carousel="slide">
                    {/* Carousel wrapper */}
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-[32rem] border-4 border-[#6B297A] shadow-xl">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`absolute w-full h-full duration-700 ease-in-out transform ${index === activeSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                                data-carousel-item={index === activeSlide ? 'active' : ''}
                            >
                                <img
                                    src={image}
                                    className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                    alt={`gallery-${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Slider controls */}
                    <button
                        type="button"
                        className="absolute top-0 start-0 z-30 hidden sm:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hover:-translate-x-1 transition-transform duration-300"
                        onClick={prevSlide}
                    >
                        <span 
                            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#6B297A] text-white shadow-lg transform transition-all duration-300 group-hover:bg-[#C9E165] group-hover:text-[#6B297A] group-hover:scale-110"
                        >
                            <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button
                        type="button"
                        className="absolute top-0 end-0 z-30 hidden sm:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hover:translate-x-1 transition-transform duration-300"
                        onClick={nextSlide}
                    >
                        <span 
                            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#6B297A] text-white shadow-lg transform transition-all duration-300 group-hover:bg-[#C9E165] group-hover:text-[#6B297A] group-hover:scale-110"
                        >
                            <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
