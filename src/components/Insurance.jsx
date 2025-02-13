import React from "react";
import bupa from "../assets/Bupa.png";
import tawuniya from "../assets/Tawuniya-01.png";
import medgulf from "../assets/Medgulf.png";
import rajhi from "../assets/Al-Rajhi-Takaful.png";
import backgroundImage from "../assets/innsurance-bg.jpg"; // Add your background image

const insuranceCompanies = [
  { id: 1, name: "بوبا العربية", image: bupa },
  { id: 2, name: "التعاونية", image: tawuniya },
  { id: 3, name: "ميدغلف", image: medgulf },
  { id: 4, name: "تكافل الراجحي", image: rajhi },
];

const Insurance = () => {
  return (
    <section
      className="relative py-16 text-white font-['Almarai'] rounded-3xl overflow-hidden bg-cover bg-center"
      id="insurance"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Set background image
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">شركات التأمين المعتمدة</h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto text-[#C9E165]">
            نفخر بشراكتنا مع أفضل شركات التأمين لتقديم خدمة متميزة
          </p>
        </div>

        {/* Insurance Logos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {insuranceCompanies.map((company) => (
            <div
              key={company.id}
              className="bg-white rounded-[2rem] p-8 transform hover:-translate-y-2 transition-all duration-300 group border-4 border-transparent hover:border-[#C9E165]"
            >
              <div className="relative h-40 flex items-center justify-center mb-4">
                <img
                  src={company.image}
                  alt={company.name}
                  className="h-48 w-auto object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-[#6B297A] font-bold text-xl mb-2">
                  {company.name}
                </h3>
                <div className="h-0.5 w-12 bg-[#C9E165] mx-auto mb-4 transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insurance;
