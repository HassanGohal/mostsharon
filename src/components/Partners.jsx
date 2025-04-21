import React, { useEffect, useState } from "react";

// Import all partner logos dynamically
const partnerImages = import.meta.glob('../assets/partners/*');

const Partners = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    // Load all partner images
    Promise.all(
      Object.entries(partnerImages).map(async ([path, loader]) => {
        const image = await loader();
        return {
          id: path,
          name: path.split('/').pop().split('.')[0],
          image: image.default
        };
      })
    ).then(loadedPartners => {
      setPartners(loadedPartners);
    });
  }, []);

  return (
    <section className="bg-white py-8 font-['Almarai']" id="partners">
      <h2 className="text-center text-4xl mb-2 font-bold text-[#6B297A]">شركاؤنا</h2>
      <p className="text-center text-lg font-light text-gray-600 mb-8">
        نفخر بشراكتنا مع مجموعة من الشركات الرائدة في تقديم أفضل الخدمات
      </p>
      
      <div className="group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div className="animate-slide-left-infinite group-hover:[animation-play-state:paused] inline-block w-max">
          {partners.map((partner) => (
            <img
              key={partner.id}
              src={partner.image}
              alt={partner.name}
              className="mx-4 inline h-16 hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          ))}
        </div>

        {/* Duplicate for infinite effect */}
        <div className="animate-slide-left-infinite group-hover:[animation-play-state:paused] inline-block w-max">
          {partners.map((partner) => (
            <img
              key={`${partner.id}-dup`}
              src={partner.image}
              alt={partner.name}
              className="mx-4 inline h-16 hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes slide-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          .animate-slide-left-infinite {
            animation: slide-left 30s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Partners;
