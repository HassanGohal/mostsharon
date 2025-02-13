import React from "react";
import backgroundImage from "../assets/booking-bg.svg"; // Background Image
import { FaSearch, FaCalendarAlt, FaUserMd, FaClinicMedical, FaPhone, FaVenusMars, FaUser } from "react-icons/fa"; // Icons

const Appointment = () => {
  return (
    <section
      className="relative py-16 text-white font-['Almarai'] rounded-3xl overflow-hidden bg-cover bg-center h-auto flex items-center"
      id="appointment"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Background Image
    >
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center lg:items-end text-right">

        {/* Text Section - Right Aligned */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-6xl font-bold">احجز موعدك الآن</h2>
          <p className="text-lg mt-4 text-[#C9E165]">
            حدد تفاصيل الموعد واحصل على استشارة مخصصة بسهولة
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-3xl shadow-lg flex flex-col gap-4 p-6 w-full max-w-4xl mt-14">

          {/* Patient Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">



            {/* Gender */}
            <div className="flex items-center  px-4 py-2 rounded-lg w-full justify-end">
              <label className="flex items-center ml-4">
                <input type="radio" name="gender" value="male" className="hidden peer" />
                <span className="px-3 py-1 text-[#6B297A] border border-gray-300 rounded-lg cursor-pointer peer-checked:bg-[#6B297A] peer-checked:text-white">
                  ذكر
                </span>
              </label>
              <label className="flex items-center ml-4">
                <input type="radio" name="gender" value="female" className="hidden peer" />
                <span className="px-3 py-1 text-[#6B297A] border border-gray-300 rounded-lg cursor-pointer peer-checked:bg-[#6B297A] peer-checked:text-white">
                  أنثى
                </span>
              </label>
              <span className="text-gray-700 mx-4">الجنس</span>

              <FaVenusMars className="text-[#6B297A] ml-2 text-2xl" />
            </div>



            {/* Name */}
            <div className="flex items-center border border-gray-300 px-4 py-2 rounded-lg w-full">
              <input type="text" placeholder="الاسم" className="bg-transparent outline-none text-gray-700 w-full text-right" />
              <FaUser className="text-[#6B297A] ml-2 text-2xl" />
            </div>

            {/* Birthdate */}
            <div className="flex items-center border border-gray-300 px-4 py-2 rounded-lg w-full">
              <FaCalendarAlt className="text-[#6B297A] ml-2 text-2xl" />
              <input type="date" className="bg-transparent outline-none text-gray-700 w-full" />
            </div>

            {/* Mobile Number */}
            <div className="flex items-center border border-gray-300 px-4 py-2 rounded-lg w-full">
              <FaPhone className="text-[#6B297A] ml-2 text-2xl" />
              <input type="tel" placeholder="رقم الجوال" className="bg-transparent outline-none text-gray-700 w-full" />
            </div>

          </div>

          {/* Appointment Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

            {/* Clinic Selection */}
            <div className="flex items-center border border-gray-300 px-4 py-2 rounded-lg w-full">
              <FaClinicMedical className="text-[#6B297A] ml-2 text-2xl" />
              <select className="bg-transparent outline-none text-gray-700 w-full">
                <option>العيادة</option>
                <option>العيادة 1</option>
                <option>العيادة 2</option>
              </select>
            </div>

            {/* Doctor Selection */}
            <div className="flex items-center border border-gray-300 px-4 py-2 rounded-lg w-full">
              <FaUserMd className="text-[#6B297A] ml-2 text-2xl" />
              <select className="bg-transparent outline-none text-gray-700 w-full">
                <option>الطبيب</option>
                <option>د. محمد</option>
                <option>د. علي</option>
              </select>
            </div>

            {/* Date Selection */}
            <div className="flex items-center border border-gray-300 px-4 py-2 rounded-lg w-full">
              <FaCalendarAlt className="text-[#6B297A] ml-2 text-2xl" />
              <input type="date" className="bg-transparent outline-none text-gray-700 w-full" />
            </div>

            {/* Time Selection */}
            <div className="flex items-center border border-gray-300 px-4 py-2 rounded-lg w-full">
              <FaCalendarAlt className="text-[#6B297A] ml-2 text-2xl" />
              <input type="time" className="bg-transparent outline-none text-gray-700 w-full" />
            </div>

          </div>

          {/* Search Button */}
          <button className="flex items-center justify-center bg-[#6B297A] text-white px-6 py-3 rounded-full hover:bg-[#C9E165] hover:text-[#6B297A] transition-all duration-300 w-full md:w-auto mt-4">
            <FaSearch className="ml-2" />
            <span>احجز الآن</span>
          </button>

        </div>

      </div>
    </section>
  );
};

export default Appointment;
