import React from "react";
import { FaSnapchat,FaWhatsapp, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logo-white.png"; // Adjust path to your logo
import rootLogo from "../assets/root-logo-white.svg";

const Footer = () => {
  return (
    <footer className="bg-[#6B297A] text-white py-4 font-['Almarai']">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 border-b border-[#C9E165] pb-4">
          {/* Logo & About */}
          <div className="md:w-1/3 text-center md:text-right flex flex-col items-center md:items-center">
            <img src={logo} alt="Logo" className="w-24 mb-4 " />
            <p className="text-gray-300 text-xs leading-tight max-w-xs">
            أول مركز طبي متخصص في العلاج والتأهيل الطبي الحديث يقدم رعاية صحية شاملة ومتفردة بإشراف نخبة من المستشارون

            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/3 text-center flex flex-col items-center justify-center">
            <h3 className="text-lg font-bold mb-4 text-[#C9E165]">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-[#C9E165] transition">من نحن</a></li>
              <li><a href="#services" className="hover:text-[#C9E165] transition">الخدمات</a></li>
              <li><a href="#appointment" className="hover:text-[#C9E165] transition">حجز موعد</a></li>
              <li><a href="tel:920023255" className="hover:text-[#C9E165] transition">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/3 text-center md:text-left flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-[#C9E165]">تواصل معنا</h3>
            <div className="space-y-1 w-full">
              <p className="flex items-center justify-center md:justify-start text-gray-300">
                <FaMapMarkerAlt className="mx-2" />
                <a href="https://maps.app.goo.gl/uqGybykRLTV5DD3L8" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9E165] transition">الرياض، المملكة العربية السعودية</a>
              </p>
              <p className="flex items-center justify-center md:justify-start text-gray-300">
                <FaPhone className="mx-2" />
                <a href="tel:920023255" className="hover:text-[#C9E165] transition">920023255</a>
              </p>
              <p className="flex items-center justify-center md:justify-start text-gray-300">
                <FaWhatsapp className="mx-2" />
                <a href="https://wa.me/966532213523" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9E165] transition">0532213523</a>
              </p>
              <p className="flex items-center justify-center md:justify-start text-gray-300">
                <FaEnvelope className="mx-2" />
                <a href="mailto:Contact@mustasharun.com" className="hover:text-[#C9E165] transition">Contact@mustasharun.com</a>
              </p>
            </div>
            {/* Social Media */}
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              <a href="https://snapchat.com/add/mustasharun" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#C9E165] rounded-full text-[#6B297A] hover:bg-white transition">
                <FaSnapchat />
              </a>
              <a href="https://x.com/mustasharun" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#C9E165] rounded-full text-[#6B297A] hover:bg-white transition">
                <FaTwitter />
              </a>
              <a href="https://instagram.com/mustasharun" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#C9E165] rounded-full text-[#6B297A] hover:bg-white transition">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center text-gray-300 mt-4 pt-2 text-xs tracking-wider">
          &copy; {new Date().getFullYear()} جميع الحقوق محفوظة | مستشارون
        </div>
        <div className="flex justify-center items-center mt-1 text-xs text-white gap-1">
          <span>Made by Root</span>
          <img src={rootLogo} alt="Root Logo" className="w-5 h-5" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
