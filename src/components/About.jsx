import React from "react";

const About = () => {
    return (
        <section className=" py-16 bg-white font-['Almarai']" id="about">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12 mt-12">
                    <h2 className="text-4xl font-bold text-[#6B297A]">
                        من <span className="text-[#C9E165]">نحن؟</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
                        نحن أول مركز طبي مرخص في التأهيل الطبي الحديث في المنطقة الوسطى، نقدم خدمات شاملة
                        ومتكاملة في مجالات العلاج الطبيعي، العلاج الوظيفي، العلاج النفسي، التغذية الإكلينيكية، علاج التخاطب،
                        والتأهيل الشامل، بإشراف فريق طبي متخصص يضمن أعلى معايير الجودة.
                    </p>
                </div>

                {/* About Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Vision Card */}
                    <div className="group bg-white p-8 rounded-3xl shadow-lg border-2 border-transparent hover:bg-[#6B297A] hover:text-white hover:border-[#C9E165] transition-all duration-300 flex flex-col items-center text-center">
                        {/* Icon with Animation */}
                        <div className="w-16 h-16 flex items-center justify-center bg-[#6B297A]/10 rounded-full group-hover:bg-[#C9E165] transition-all duration-300 mb-4 animate-bounce">
                            <i className="fas fa-eye text-3xl text-[#6B297A] group-hover:text-white transition-all duration-300"></i>
                        </div>
                        {/* Title */}
                        <h3 className="text-xl font-bold text-[#6B297A] group-hover:text-[#C9E165] transition-all mb-2">
                            رؤيتنا
                        </h3>
                        {/* Description */}
                        <p className="text-gray-600 group-hover:text-white transition-all text-center">
                            أن نكون الرواد في مجال التأهيل الطبي الحديث، مقدمين حلولًا مبتكرة وشاملة تعيد
                            للمرضى قدرتهم على العيش بجودة حياة عالية.
                        </p>
                    </div>

                    {/* Goal Card */}
                    <div className="group bg-white p-8 rounded-3xl shadow-lg border-2 border-transparent hover:bg-[#6B297A] hover:text-white hover:border-[#C9E165] transition-all duration-300 flex flex-col items-center text-center">
                        {/* Icon with Animation */}
                        <div className="w-16 h-16 flex items-center justify-center bg-[#6B297A]/10 rounded-full group-hover:bg-[#C9E165] transition-all duration-300 mb-4 animate-bounce">
                            <i className="fas fa-bullseye text-3xl text-[#6B297A] group-hover:text-white transition-all duration-300"></i>
                        </div>
                        {/* Title */}
                        <h3 className="text-xl font-bold text-[#6B297A] group-hover:text-[#C9E165] transition-all mb-2">
                            هدفنا
                        </h3>
                        {/* Description */}
                        <p className="text-gray-600 group-hover:text-white transition-all text-center">
                            تمكين الأفراد من استعادة قدراتهم الوظيفية والنفسية بأفضل صورة ممكنة، من خلال
                            توفير بيئة علاجية شاملة وأدوات متطورة بإشراف خبراء متخصصين.
                        </p>
                    </div>

                    {/* Mission Card */}
                    <div className="group bg-white p-8 rounded-3xl shadow-lg border-2 border-transparent hover:bg-[#6B297A] hover:text-white hover:border-[#C9E165] transition-all duration-300 flex flex-col items-center text-center">
                        {/* Icon with Animation */}
                        <div className="w-16 h-16 flex items-center justify-center bg-[#6B297A]/10 rounded-full group-hover:bg-[#C9E165] transition-all duration-300 mb-4 animate-bounce">
                            <i className="fas fa-comment-alt text-3xl text-[#6B297A] group-hover:text-white transition-all duration-300"></i>
                        </div>
                        {/* Title */}
                        <h3 className="text-xl font-bold text-[#6B297A] group-hover:text-[#C9E165] transition-all mb-2">
                            رسالتنا
                        </h3>
                        {/* Description */}
                        <p className="text-gray-600 group-hover:text-white transition-all text-center">
                            تقديم خدمات طبية وتأهيلية بأعلى المعايير المهنية، مع الالتزام برعاية شاملة
                            تعزز صحة الأفراد وتساهم في تحقيق التعافي الكامل.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
