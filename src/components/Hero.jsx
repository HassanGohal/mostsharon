import React from "react";
import headerImage from "../assets/Header.jpg"; // Importing image

const Hero = () => {
  return (
    <header
      className="relative flex items-center justify-center text-white bg-center bg-cover bg-fixed h-[100vh] font-['Almarai']"
      style={{ backgroundImage: `url(${headerImage})` }} // Use imported image
      id="header"
    >
      <div className="relative text-center px-6 z-10 top-20">
        <p className="text-3xl sm:text-4xl font-bold mb-2 animate-fadeIn font-['Almarai']">
          كل لحظة في حياتنا تفرق
        </p>

        <h1 className="text-4xl sm:text-6xl font-bold py-4 text-[#C9E165] animate-slideUp font-['Almarai']">
          مستشارون من جد يفرق
        </h1>

        {/* Booking Button */}
        <button className="mt-6 bg-[#6B297A] text-white px-6 py-3 rounded-full hover:bg-[#C9E165] hover:text-[#6B297A] transition-all duration-300  font-['Almarai']">
          احجز موعدك
        </button>
      </div>
      <div className="absolute bottom-0 w-full h-1 bg-[#C9E165] rounded-full"></div>

    </header>
  );
};

export default Hero;
