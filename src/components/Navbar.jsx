import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = ['hero', 'about', 'services', 'team', 'gallery', 'partners', 'appointment'];
        const observerOptions = {
            root: null,
            rootMargin: '-45% 0px -45% 0px', // Only consider the middle 10% of the viewport
            threshold: 0.1, // Trigger when even a small part of the element enters the middle area
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                observer.observe(element);
            }
        });

        // Special case for hero section when at the very top
        const handleScroll = () => {
            if (window.scrollY < 100) {
                setActiveSection('hero');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call it initially

        return () => {
            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    observer.unobserve(element);
                }
            });
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            const offset = window.innerWidth < 768 ? 20 : 30;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
            setIsOpen(false); // Close mobile menu after clicking
        }
    };

    return (
        <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] bg-white text-zinc-900 rounded-full shadow-lg py-4 px-6 flex flex-row-reverse justify-between items-center z-50 font-['Almarai']">
            
            {/* Booking Button */}
            <button className={`hidden lg:block px-4 py-1.5 rounded-full transition duration-300 font-['Almarai'] ${activeSection === 'appointment' ? 'bg-[#C9E165] text-[#6B297A]' : 'bg-[#6B297A] text-white hover:bg-[#C9E165] hover:text-[#6B297A]'}`} href="#appointment" onClick={(e) => handleClick(e, 'appointment')}>
                احجز موعدك
            </button>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex gap-6 font-['Almarai']">
                <li>
                    <a className={`transition duration-300 ${activeSection === 'hero' ? 'text-[#C9E165]' : 'text-[#6B297A] hover:text-[#C9E165]'}`} href="#hero" onClick={(e) => handleClick(e, 'hero')}>
                        الصفحة الرئيسية
                    </a>
                </li>
                <li>
                    <a className={`transition duration-300 ${activeSection === 'about' ? 'text-[#C9E165]' : 'text-[#6B297A] hover:text-[#C9E165]'}`} href="#about" onClick={(e) => handleClick(e, 'about')}>
                        من نحن
                    </a>
                </li>
                <li>
                    <a className={`transition duration-300 ${activeSection === 'services' ? 'text-[#C9E165]' : 'text-[#6B297A] hover:text-[#C9E165]'}`} href="#services" onClick={(e) => handleClick(e, 'services')}>
                        الخدمات
                    </a>
                </li>
                <li>
                    <a className={`transition duration-300 ${activeSection === 'gallery' ? 'text-[#C9E165]' : 'text-[#6B297A] hover:text-[#C9E165]'}`} href="#gallery" onClick={(e) => handleClick(e, 'gallery')}>
                        معرض الصور
                    </a>
                </li>
                <li>
                    <a className={`transition duration-300 ${activeSection === 'team' ? 'text-[#C9E165]' : 'text-[#6B297A] hover:text-[#C9E165]'}`} href="#team" onClick={(e) => handleClick(e, 'team')}>
                        فريقنا 
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
                        <a className={`transition duration-300 ${activeSection === 'hero' ? 'text-[#C9E165]' : 'text-[#6B297A] hover:text-[#C9E165]'}`} href="#hero" onClick={(e) => handleClick(e, 'hero')}>
                            الصفحة الرئيسية
                        </a>
                    </li>

                    <li>
                        <a className={`transition duration-300 ${activeSection === 'about' ? 'text-[#C9E165]' : 'text-[#6B297A] hover:text-[#C9E165]'}`} href="#about" onClick={(e) => handleClick(e, 'about')}>
                            من نحن
                        </a>
                    </li>

                    <li>
                        <a className={`transition duration-300 ${activeSection === 'services' ? 'text-[#C9E165]' : 'text-[#6B297A] hover:text-[#C9E165]'}`} href="#services" onClick={(e) => handleClick(e, 'services')}>
                            الخدمات
                        </a>
                    </li>

                    <li>
                        <a className={`transition duration-300 ${activeSection === 'gallery' ? 'text-[#C9E165]' : 'text-[#6B297A] hover:text-[#C9E165]'}`} href="#gallery" onClick={(e) => handleClick(e, 'gallery')}>
                            معرض الصور
                        </a>
                    </li>

                    <li>
                        <a className={`transition duration-300 ${activeSection === 'team' ? 'text-[#C9E165]' : 'text-[#6B297A] hover:text-[#C9E165]'}`} href="#team" onClick={(e) => handleClick(e, 'team')}>
                            فريقنا
                        </a>
                    </li>

                    <li>
                        <button className={`px-4 py-1.5 rounded-full transition duration-300 ${activeSection === 'appointment' ? 'bg-[#C9E165] text-[#6B297A]' : 'bg-[#6B297A] text-white hover:bg-[#C9E165] hover:text-[#6B297A]'}`} onClick={(e) => handleClick(e, 'appointment')}>
                            احجز موعدك
                        </button>
                    </li>
                </ul>
            </div>

            {/* Logo */}
            <a href="#" onClick={(e) => handleClick(e, 'hero')}>
                <img className="h-10" src={Logo} alt="Logo" />
            </a>

            
        </nav>
    );
};

export default Navbar;
