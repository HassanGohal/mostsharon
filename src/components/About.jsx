import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <section className="py-16 bg-white font-['Almarai']" id="about">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-[#6B297A]">
            من <span className="text-[#C9E165]">نحن؟</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
            نحن أول مركز طبي مرخص في التأهيل الطبي الحديث في المنطقة الوسطى،
            نقدم خدمات شاملة ومتكاملة في مجالات العلاج الطبيعي، العلاج
            الوظيفي، العلاج النفسي، التغذية الإكلينيكية، علاج التخاطب،
            والتأهيل الشامل، بإشراف فريق طبي متخصص يضمن أعلى معايير الجودة.
          </p>
        </motion.div>

        {/* About Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision Card */}
          <motion.div
            className="group bg-white p-8 rounded-3xl shadow-xl border-2 border-transparent  hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center bg-[#6B297A]/10 rounded-full">
              <i className="fas fa-eye text-3xl text-[#6B297A]"></i>
            </div>
            {/* Title */}
            <h3 className="text-xl font-bold text-[#6B297A] mt-4">رؤيتنا</h3>
            {/* Description */}
            <p className="text-gray-600 text-center mt-2">
              أن نكون الرواد في مجال التأهيل الطبي الحديث، مقدمين حلولًا
              مبتكرة وشاملة تعيد للمرضى قدرتهم على العيش بجودة حياة عالية.
            </p>
          </motion.div>

          {/* Goal Card */}
          <motion.div
            className="group bg-white p-8 rounded-3xl shadow-xl border-2 border-transparent  hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center bg-[#6B297A]/10 rounded-full">
              <i className="fas fa-bullseye text-3xl text-[#6B297A]"></i>
            </div>
            {/* Title */}
            <h3 className="text-xl font-bold text-[#6B297A] mt-4">هدفنا</h3>
            {/* Description */}
            <p className="text-gray-600 text-center mt-2">
              تمكين الأفراد من استعادة قدراتهم الوظيفية والنفسية بأفضل صورة
              ممكنة، من خلال توفير بيئة علاجية شاملة وأدوات متطورة بإشراف
              خبراء متخصصين.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="group bg-white p-8 rounded-3xl shadow-xl border-2 border-transparent  hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center bg-[#6B297A]/10 rounded-full">
              <i className="fas fa-comment-alt text-3xl text-[#6B297A]"></i>
            </div>
            {/* Title */}
            <h3 className="text-xl font-bold text-[#6B297A] mt-4">رسالتنا</h3>
            {/* Description */}
            <p className="text-gray-600 text-center mt-2">
              تقديم خدمات طبية وتأهيلية بأعلى المعايير المهنية، مع الالتزام
              برعاية شاملة تعزز صحة الأفراد وتساهم في تحقيق التعافي الكامل.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
