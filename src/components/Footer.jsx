import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logo.png"; // Adjust path to your logo

const Footer = () => {
  return (
    <footer className="bg-[#6B297A] text-white py-10 font-['Almarai']">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div className="text-center md:text-right">
            <img src={logo} alt="Logo" className="mx-auto md:mx-0 w-24 mb-4" />
            <p className="text-gray-300 text-sm leading-relaxed">
              نحن نلتزم بتقديم أفضل الخدمات الطبية بأعلى المعايير لضمان صحة وراحة عملائنا.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4 text-[#C9E165]">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-[#C9E165] transition">من نحن</a></li>
              <li><a href="#services" className="hover:text-[#C9E165] transition">الخدمات</a></li>
              <li><a href="#appointment" className="hover:text-[#C9E165] transition">حجز موعد</a></li>
              <li><a href="#contact" className="hover:text-[#C9E165] transition">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 text-[#C9E165]">تواصل معنا</h3>
            <p className="flex items-center justify-center md:justify-start text-gray-300">
              <FaMapMarkerAlt className="ml-2" /> الرياض، المملكة العربية السعودية
            </p>
            <p className="flex items-center justify-center md:justify-start text-gray-300">
              <FaPhone className="ml-2" /> 920012345
            </p>
            <p className="flex items-center justify-center md:justify-start text-gray-300">
              <FaEnvelope className="ml-2" /> info@company.com
            </p>
            {/* Social Media */}
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              <a href="#" className="p-2 bg-[#C9E165] rounded-full text-[#6B297A] hover:bg-white transition">
                <FaFacebookF />
              </a>
              <a href="#" className="p-2 bg-[#C9E165] rounded-full text-[#6B297A] hover:bg-white transition">
                <FaTwitter />
              </a>
              <a href="#" className="p-2 bg-[#C9E165] rounded-full text-[#6B297A] hover:bg-white transition">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-300 mt-8 border-t border-[#C9E165] pt-4">
          &copy; {new Date().getFullYear()} جميع الحقوق محفوظة | مستشارون
        </div>
      </div>
    </footer>
  );
};

export default Footer;
