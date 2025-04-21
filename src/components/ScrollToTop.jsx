import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768); // Common breakpoint for mobile devices
  };

  // Show buttons when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle smooth scroll to appointment section
  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Initial check for mobile
    checkMobile();
    
    // Set up event listeners
    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <>
      {/* Fixed Bottom Navigation Bar */}
      <div className="fixed bottom-6 w-full flex justify-between items-center px-6 z-50 pointer-events-none">
        {/* Scroll to Top Button (Left Side) - always visible */}
        <div className="pointer-events-auto">
          <div
            onClick={scrollToTop}
            className="cursor-pointer bg-[#C9E165] hover:bg-[#8b3a9e] text-white p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <IoIosArrowUp size={20} />
          </div>
        </div>
        {/* Booking Button (Right Side) - always visible on mobile */}
        <div className="pointer-events-auto">
          {isMobile && (
            <button 
              className="bg-[#6B297A] text-white px-4 py-2 rounded-full hover:bg-[#C9E165] hover:text-[#6B297A] transition-all duration-300 font-['Almarai'] text-sm shadow-lg"
              onClick={(e) => handleClick(e, 'appointment')}
            >
              احجز موعدك
            </button>
          )}
        </div>
      </div>
      
      {/* Bottom Divider - only on mobile */}
      {isMobile && <div className="fixed bottom-0 left-0 w-full h-1 bg-[#C9E165] rounded-full z-40"></div>}
    </>
  );
};

export default ScrollToTop;