import React, { useState } from "react";
import backgroundImage from "../assets/booking-bg.svg";
import {
  FaSearch,
  FaCalendarAlt,
  FaUserMd,
  FaClinicMedical,
  FaPhone,
  FaVenusMars,
  FaUser,
} from "react-icons/fa";

const Appointment = () => {
  const [formData, setFormData] = useState({
    gender: "",
    name: "",
    age: "",
    mobile: "",
    clinic: "",
    doctor: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  // Update form data state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // On form submit, open WhatsApp with pre-filled message
  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the message (using %0A for line breaks)
    const message = `حجز موعد:%0Aالجنس: ${formData.gender}%0Aالاسم: ${formData.name}%0Aالعمر: ${formData.age}%0Aرقم الجوال: ${formData.mobile}%0Aالعيادة: ${formData.clinic}%0Aالطبيب: ${formData.doctor}%0Aتاريخ الموعد: ${formData.appointmentDate}`;

    // Replace with your static WhatsApp number (include country code without the +)
    const whatsappNumber = "+966550303411";
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;

    // Open WhatsApp in a new tab/window
    window.open(url, "_blank");
  };

  return (
    <section
      className="relative py-10 md:py-16 text-white font-['Almarai'] rounded-3xl overflow-hidden bg-cover bg-center min-h-[80vh] flex items-center"
      id="appointment"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Background Overlay (Hidden on Mobile) */}
      <div className="absolute inset-0 bg-cover bg-center md:block hidden" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center lg:items-end text-right w-full">
        {/* Text Section - Right Aligned */}
        <div className="w-full lg:w-1/2 text-center lg:text-right">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">احجز موعدك الآن</h2>
          <p className="text-base md:text-lg mt-2 md:mt-4 text-[#C9E165]">
            حدد تفاصيل الموعد واحصل على استشارة مخصصة بسهولة
          </p>
        </div>

        {/* Booking Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl md:rounded-3xl shadow-lg flex flex-col gap-3 md:gap-4 p-4 md:p-6 w-full max-w-4xl mt-8 md:mt-14"
        >
          {/* Patient Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">



            {/* Name */}
            <div className="flex items-center border border-gray-300 px-3 py-2 rounded-lg w-full">
              <input
                type="text"
                placeholder="الاسم"
                className="bg-transparent outline-none text-gray-700 w-full text-right text-sm md:text-base"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <FaUser className="text-[#6B297A] ml-1 md:ml-2 text-xl md:text-2xl" />
            </div>
            {/* Gender */}
            <div className="flex items-center px-3 py-2 rounded-lg w-full justify-end">
              <label className="flex items-center ml-2 md:ml-4">
                <input
                  type="radio"
                  name="gender"
                  value="أنثى"
                  className="hidden peer"
                  checked={formData.gender === "أنثى"}
                  onChange={handleChange}
                />
                <span className="px-2 py-1 text-sm md:text-base text-[#6B297A] border border-gray-300 rounded-lg cursor-pointer peer-checked:bg-[#6B297A] peer-checked:text-white">
                  أنثى
                </span>
              </label>
              <label className="flex items-center ml-2 md:ml-4">
                <input
                  type="radio"
                  name="gender"
                  value="ذكر"
                  className="hidden peer"
                  checked={formData.gender === "ذكر"}
                  onChange={handleChange}
                />
                <span className="px-2 py-1 text-sm md:text-base text-[#6B297A] border border-gray-300 rounded-lg cursor-pointer peer-checked:bg-[#6B297A] peer-checked:text-white">
                  ذكر
                </span>
              </label>
              <span className="text-gray-700 mx-2 md:mx-4 text-sm md:text-base">الجنس</span>
              <FaVenusMars className="text-[#6B297A] ml-1 md:ml-2 text-xl md:text-2xl" />
            </div>
            {/* Age */}
            <div className="flex items-center border border-gray-300 px-3 py-2 rounded-lg w-full">
              <input
                type="number"
                className="bg-transparent outline-none text-gray-700 w-full text-right text-sm md:text-base"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="العمر"
                min="1"
                required
              />
              <FaCalendarAlt className="text-[#6B297A] text-xl md:text-2xl ml-1 md:ml-2" />
            </div>

            {/* Mobile Number */}

            <div className="flex items-center border border-gray-300 px-3 py-2 rounded-lg w-full">
              <input
                type="tel"
                placeholder="رقم الجوال"
                className="bg-transparent outline-none text-gray-700 w-full text-right text-sm md:text-base"
                name="mobile"
                value={formData.mobile}
                onChange={(e) => {
                  // Only allow digits
                  const value = e.target.value.replace(/\D/g, '');
                  setFormData((prev) => ({
                    ...prev,
                    mobile: value,
                  }));
                }}
                pattern="^05\d{8}$"
                title="رقم الجوال يجب أن يكون 10 أرقام ويبدأ بـ 05"
                maxLength={10}
                required
              />
              <FaPhone className="text-[#6B297A] ml-1 md:ml-2 text-xl md:text-2xl" />
            </div>
          </div>

          {/* Appointment Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {/* Clinic Selection */}
            <div className="flex items-center border border-gray-300 px-3 py-2 rounded-lg w-full flex-row-reverse">
              <FaClinicMedical className="text-[#6B297A] ml-1 md:ml-2 text-xl md:text-2xl" />
              <select
                className="bg-transparent outline-none text-gray-700 w-full text-right text-sm md:text-base"
                name="clinic"
                value={formData.clinic}
                onChange={handleChange}
                required
                dir="rtl"
              >
                <option value="">العيادة</option>
                <option value="العيادة 1">العيادة 1</option>
                <option value="العيادة 2">العيادة 2</option>
              </select>
            </div>

            {/* Doctor Selection */}
            <div className="flex items-center border border-gray-300 px-3 py-2 rounded-lg w-full flex-row-reverse">
              <FaUserMd className="text-[#6B297A] ml-1 md:ml-2 text-xl md:text-2xl" />
              <select
                className="bg-transparent outline-none text-gray-700 w-full text-right text-sm md:text-base"
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                required
                dir="rtl"
              >
                <option value="">الطبيب</option>
                <option value="د. محمد">د. محمد</option>
                <option value="د. علي">د. علي</option>
              </select>
            </div>

            {/* Appointment Date */}
            <div className="flex items-center border border-gray-300 px-3 py-2 rounded-lg w-full flex-row-reverse md:col-span-2">
              <FaCalendarAlt className="text-[#6B297A] text-xl md:text-2xl ml-1 md:ml-2" />
              <input
                type="date"
                id="appointmentDate"
                className="bg-transparent outline-none text-gray-700 w-full text-right cursor-pointer appearance-none [&::-webkit-calendar-picker-indicator]:opacity-100 text-sm md:text-base"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center bg-[#6B297A] text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-[#C9E165] hover:text-[#6B297A] transition-all duration-300 w-full mt-2 md:mt-4 text-sm md:text-base"
          >
            <span>احجز الآن</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Appointment;