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
            "التقييم النفسي الشامل",
            "العلاج النفسي الفردي",
            "العلاج السلوكي المعرفي (CBT)",
            "التأهيل النفسي للأطفال والمراهقين",
            "العلاج الأسري والاستشارات الزوجية",
        ],
    },
    {
        id: 3,
        title: "عيادات الاضطرابات النمائية وتعديل السلوك",
        icon: <FaChild className="text-[#D81B60] text-3xl" />,
        bgColor: "bg-pink-100",
        textColor: "text-[#D81B60]",
        description: [
            "التقييم والتشخيص الشامل",
            "تشخيص اضطرابات النمو العصبي",
            "تقييم وتأهيل اضطرابات التعلم",
            "التدخل المبكر للأطفال",
            "علاج وتأهيل اضطرابات التواصل",
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
            "تأهيل حالات اضطرابات البلع",
            "تدريب على مهارات التواصل الاجتماعي",
        ],
    },
    {
        id: 5,
        title: "عيادات العلاج الطبيعي",
        icon: <FaWalking className="text-[#F57C00] text-3xl" />,
        bgColor: "bg-orange-100",
        textColor: "text-[#F57C00]",
        description: [
            "التقييم الحركي والوظيفي",
            "علاج الإصابات العضلية والعظمية",
            "إعادة التأهيل بعد العمليات الجراحية",
            "علاج اضطرابات الجهاز العصبي",
            "تأهيل الأطفال ذوي الإعاقات الحركية",
        ],
    },
    {
        id: 6,
        title: "عيادات العلاج الوظيفي",
        icon: <FaHandsHelping className="text-[#1976D2] text-3xl" />,
        bgColor: "bg-blue-100",
        textColor: "text-[#1976D2]",
        description: [
            "تقييم القدرات الوظيفية والحركية",
            "تأهيل الأطفال ذوي الاحتياجات الخاصة",
            "تحسين المهارات الحركية الدقيقة",
            "تأهيل مرضى الأعصاب والجلطات الدماغية",
            "العلاج الحسي للأطفال",
        ],
    },
];

const Services = () => {
    return (
        <section className="py-28 bg-white font-['Almarai']" id="services">
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
                            className="group bg-white p-8 rounded-3xl shadow-md border border-gray-200 transition-all duration-300 flex flex-col items-end text-center hover:shadow-xl"
                            >
                            {/* أيقونة وعنوان الخدمة */}
                            <div className="flex flex-row-reverse items-center gap-4 mb-4">
                            <div className={`${service.bgColor} p-3 rounded-xl`}>
                                    {service.icon}
                                </div>
                                <h3 className={`text-[16px] font-bold items-center  ${service.textColor}`}>
                                    {service.title}
                                </h3>

                            </div>

                            {/* تفاصيل الخدمة */}
                            <ul className="list-none space-y-2 text-gray-700 text-right pr-16">
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
