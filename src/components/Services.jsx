import React from "react";

const services = [
    { id: 1, title: "علاج الاضطرابات النفسية", icon: "fas fa-brain" },
    { id: 2, title: "علاج المشاكل الزوجية", icon: "fas fa-ring" },
    { id: 3, title: "علاج المشاكل الأسرية", icon: "fas fa-users" },
    { id: 4, title: "العلاج السلوكي", icon: "fas fa-user-check" },
    { id: 5, title: "جلسات تأهيلية", icon: "fas fa-hands-helping" },
    { id: 6, title: "جلسات تطوير الذات", icon: "fas fa-lightbulb" },
];

const Services = () => {
    return (
        <section className="py-28 bg-white font-['Almarai']" id="services">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#6B297A]">خدماتنا</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                        نقدم مجموعة شاملة من الخدمات العلاجية والتأهيلية
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="flex gap-5 items-center justify-end p-4 border-2 border-gray-100 rounded-full hover:bg-[#FCFFF2] hover:text-[#6B297A] hover:border-[#6B297A] transition-all duration-300 cursor-pointer"
                        >
                            <span className="text-lg text-right font-semibold">{service.title}</span>
                            <div className="w-10 h-10 flex items-center justify-center bg-[#6B297A]/10 rounded-full group-hover:bg-[#C9E165] transition-all duration-300">
                                <i className={`${service.icon} text-[#6B297A] group-hover:text-white text-xl`}></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
