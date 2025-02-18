import React, { useState } from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] bg-white  text-zinc-900  rounded-full shadow-lg py-4 px-6 flex justify-between items-center z-50 font-['Almarai']">
            
            {/* Booking Button */}
            <button className="hidden lg:block bg-[#6B297A] text-white px-4 py-1.5 rounded-full hover:bg-[#C9E165] hover:text-[#6B297A] transition duration-300 font-['Almarai']" href="#appointment" onClick={(e) => handleClick(e, 'appointment')}>
                احجز موعدك
            </button>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex gap-6 font-['Almarai']">
                <li>
                    <a className="text-[#6B297A] hover:text-[#C9E165] transition duration-300" href="#team" onClick={(e) => handleClick(e, 'team')}>
                        فريقنا 
                    </a>
                </li>
                <li>
                    <a className="text-[#6B297A] hover:text-[#C9E165] transition duration-300" href="#gallery" onClick={(e) => handleClick(e, 'gallery')}>
                        معرض الصور
                    </a>
                </li>
                <li>
                    <a className="text-[#6B297A] hover:text-[#C9E165] transition duration-300" href="#services" onClick={(e) => handleClick(e, 'services')}>
                        الخدمات
                    </a>
                </li>
                <li>
                    <a className="text-[#6B297A] hover:text-[#C9E165] transition duration-300" href="#about" onClick={(e) => handleClick(e, 'about')}>
                        من نحن
                    </a>
                </li>
                <li>
                    <a className="text-[#6B297A] hover:text-[#C9E165] transition duration-300" href="#header" onClick={(e) => handleClick(e, 'header')}>
                        الصفحة الرئيسية
                    </a>
                </li>
            </ul>

            {/* Hamburger Menu Button (Mobile) */}
            <button
                className="block lg:hidden focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="space-y-1">
                    <div className={`h-0.5 w-7 bg-[#6B297A]  transition transform ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                    <div className={`h-0.5 w-7 bg-[#6B297A]  transition ${isOpen ? "opacity-0" : ""}`} />
                    <div className={`h-0.5 w-7 bg-[#6B297A] transition transform ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
                </div>
            </button>

            {/* Mobile Menu */}
            <div
                className={`absolute top-20 rounded-3xl left-0 w-full bg-white shadow-md transform transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} font-['Almarai']`}
            >
                <ul className="flex flex-col items-center gap-6 py-6">
                    <li>
                        <a className="font-medium text-[#6B297A] hover:text-[#C9E165] transition duration-300" href="#service" onClick={(e) => handleClick(e, 'service')}>
                            الخدمات
                        </a>
                    </li>
                    <li>
                        <a className="text-[#6B297A] hover:text-[#C9E165] transition duration-300" href="#about" onClick={(e) => handleClick(e, 'about')}>
                            من نحن
                        </a>
                    </li>
                    <li>
                        <a className="text-[#6B297A] hover:text-[#C9E165] transition duration-300" href="#header" onClick={(e) => handleClick(e, 'header')}>
                            الصفحة الرئيسية
                        </a>
                    </li>
                    <li>
                        <button className="bg-[#6B297A] text-white px-4 py-1.5 rounded-full hover:bg-[#C9E165] hover:text-[#6B297A] transition duration-300">
                            احجز موعدك
                        </button>
                    </li>
                </ul>
            </div>

            {/* Logo */}
            <a href="#" onClick={(e) => handleClick(e, 'header')}>
                <img className="h-10" src={Logo} alt="Logo" />
            </a>

            
        </nav>
    );
};

export default Navbar;
