import React from "react";
import bupa from "../assets/Bupa.png";
import tawuniya from "../assets/Tawuniya-01.png";
import medgulf from "../assets/Medgulf.png";
import rajhi from "../assets/Al-Rajhi-Takaful.png"; // Temporary logos

const partners = [
  { id: 1, name: "بوبا العربية", image: bupa },
  { id: 2, name: "التعاونية", image: tawuniya },
  { id: 3, name: "ميدغلف", image: medgulf },
  { id: 4, name: "تكافل الراجحي", image: rajhi },
  { id: 5, name: "بوبا العربية", image: bupa },
  { id: 6, name: "التعاونية", image: tawuniya },
];

const Partners = () => {
  return (
    <section className="py-16 bg-white font-['Almarai'] text-center" id="partners">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#6B297A]">شركاؤنا</h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-600">
            نفخر بشراكتنا مع مجموعة من الشركات الرائدة في تقديم أفضل الخدمات
          </p>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-[2rem] p-6 border-2 border-transparent hover:border-[#C9E165] transform hover:-translate-y-2 transition-all duration-300 flex justify-center items-center"
            >
              <img src={partner.image} alt={partner.name} className="h-32 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
