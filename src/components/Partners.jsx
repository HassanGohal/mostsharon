import React, { useEffect, useState } from "react";

// Import all partner logos dynamically
const partnerImages = import.meta.glob('../assets/partners/*');

const Partners = () => {
  const [partners, setPartners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load all partner images
    Promise.all(
      Object.entries(partnerImages).map(async ([path, loader]) => {
        const image = await loader();
        return {
          id: path,
          name: path.split('/').pop().split('.')[0],
          image: image.default,
        };
      })
    ).then(loadedPartners => {
      setPartners(loadedPartners);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <section className="bg-white py-8 font-['Almarai']" id="partners">
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6B297A]"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-14 md:py-24 bg-white font-['Almarai']" id="partners">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 mb-4 mb-md-5">
          <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
            <h2 className="text-[32px] font-bold mb-6 text-[#6B297A]">
              شركاؤنا
            </h2>
            <p className="text-lg leading-relaxed opacity-80 md:px-12 text-gray-600">
              نفخر بشراكتنا مع مجموعة من الشركات الرائدة في تقديم أفضل الخدمات
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 lg:gap-8">
          {partners.map((partner) => (
            <div className="col-span-12 lg:col-span-4 mt-8" key={partner.id}>
              <div className="group text-center duration-300">
                <div className="shadow-md px-8 py-10 rounded-xl bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="h-28 w-auto mx-auto object-contain hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

