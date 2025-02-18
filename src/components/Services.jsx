import React from "react";
import { FaBrain, FaUserMd, FaChild, FaMicrophone, FaWalking, FaHandsHelping } from "react-icons/fa";

const services = [
    {
        id: 1,
        title: "عيادة قياس وتشخيص اضطرابات الطفولة",
        icon: <FaBrain className="text-[#6B297A] text-3xl" />,
        bgColor: "bg-purple-100",
        textColor: "text-[#6B297A]",
        description: [
            "التقييم النفسي والادراكي",
            "(ADHD) تشخيص اضطرابات النمو ",
            "تقييم المشكلات السلوكية والانفعالية",
            "الفحص العصبي النفسي",
            "إعداد خطط التدخل والعلاج",
        ],
    },
    {
        id: 2,
        title: "عيادات التأهيل والعلاج النفسي",
        icon: <FaUserMd className="text-[#512DA8] text-3xl" />,
        bgColor: "bg-indigo-100",
        textColor: "text-[#512DA8]",
        description: [
            "التقييم النفسي لتحديد المشكلات السلوكية.",
            "العلاج السلوكي المعرفي (CBT).",
            "الاستشارات الأسرية والعلاج النفسي.",
        ],
    },
    {
        id: 3,
        title: "عيادات الاضطرابات النمائية وتعديل السلوك",
        icon: <FaChild className="text-[#D81B60] text-3xl" />,
        bgColor: "bg-pink-100",
        textColor: "text-[#D81B60]",
        description: [
            "التدخل المبكر لدعم الأطفال.",
            "العلاج السلوكي والمعرفي.",
            "تنمية المهارات الحياتية والاجتماعية.",
        ],
    },
    {
        id: 4,
        title: "عيادات اضطرابات النطق والكلام",
        icon: <FaMicrophone className="text-[#00796B] text-3xl" />,
        bgColor: "bg-teal-100",
        textColor: "text-[#00796B]",
        description: [
            "تقييم اضطرابات النطق والكلام",
            "تشخيص اضطرابات اللغة",
            "علاج اضطرابات الصوت",
        ],
    },
    {
        id: 5,
        title: "عيادات العلاج الطبيعي",
        icon: <FaWalking className="text-[#F57C00] text-3xl" />,
        bgColor: "bg-orange-100",
        textColor: "text-[#F57C00]",
        description: [
            "تقييم القدرات الحركية والوظيفية.",
            "علاج الإصابات العضلية والعظمية.",
            "العلاج الطبيعي لكبار السن.",
        ],
    },
    {
        id: 6,
        title: "عيادات العلاج الوظيفي",
        icon: <FaHandsHelping className="text-[#1976D2] text-3xl" />,
        bgColor: "bg-blue-100",
        textColor: "text-[#1976D2]",
        description: [
            "تقييم القدرات الوظيفية والحركية.",
            "تأهيل الأطفال ذوي الاحتياجات الخاصة.",
            "تهيئة بيئة منزلية وعملية مناسبة.",
        ],
    },
];

const Services = () => {
    return (
        <section className="py-16 bg-white font-['Almarai']" id="services">
            <div className="container mx-auto px-4">
                {/* عنوان القسم */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#6B297A]">خدماتنا</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-2">
                        نقدم مجموعة شاملة من الخدمات العلاجية والتأهيلية
                    </p>
                </div>

                {/* عرض الخدمات في شبكة */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="border border-gray-200 rounded-3xl shadow-md transition-all duration-300 p-6 w-full text-right hover:shadow-xl"
                        >
                            {/* أيقونة وعنوان الخدمة */}
                            <div className="flex flex-row-reverse items-center gap-4 mb-4">
                                <div className={`${service.bgColor} p-3 rounded-xl`}>
                                    {service.icon}
                                </div>
                                <h3 className={`text-[16px] font-bold ${service.textColor}`}>
                                    {service.title}
                                </h3>

                            </div>

                            {/* تفاصيل الخدمة */}
                            <ul className="list-none space-y-2 text-gray-700 text-right pr-4">
                                {service.description.map((point, idx) => (
                                    <li key={idx} className="flex items-center gap-2 justify-end">
                                        <span>{point}</span>
                                        <span className="text-green-600">✔</span>

                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
