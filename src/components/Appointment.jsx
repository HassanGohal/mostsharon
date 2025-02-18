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
    birthdate: "",
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
    const message = `حجز موعد:%0Aالجنس: ${formData.gender}%0Aالاسم: ${formData.name}%0Aتاريخ الميلاد: ${formData.birthdate}%0Aرقم الجوال: ${formData.mobile}%0Aالعيادة: ${formData.clinic}%0Aالطبيب: ${formData.doctor}%0Aتاريخ الموعد: ${formData.appointmentDate}%0Aوقت الموعد: ${formData.appointmentTime}`;

    // Replace with your static WhatsApp number (include country code without the +)
    const whatsappNumber = "+966550303411"; // e.g., "15551234567"
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;

    // Open WhatsApp in a new tab/window
    window.open(url, "_blank");
  };

  return (
    <section
      className="relative py-16 text-white font-['Almarai'] rounded-3xl overflow-hidden bg-cover bg-center h-auto flex items-center"
      id="appointment"
      style={{ backgroundImage: `url(${backgroundImage})` }}
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
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-lg flex flex-col gap-4 p-6 w-full max-w-4xl mt-14"
        >
          {/* Patient Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Gender */}
            <div className="flex items-center px-4 py-2 rounded-lg w-full justify-end">
              <label className="flex items-center ml-4">
                <input
                  type="radio"
                  name="gender"
                  value="أنثى"
                  className="hidden peer"
                  checked={formData.gender === "أنثى"}
                  onChange={handleChange}
                />
                <span className="px-3 py-1 text-[#6B297A] border border-gray-300 rounded-lg cursor-pointer peer-checked:bg-[#6B297A] peer-checked:text-white">
                  أنثى
                </span>
              </label>
              <label className="flex items-center ml-4">
                <input
                  type="radio"
                  name="gender"
                  value="ذكر"
                  className="hidden peer"
                  checked={formData.gender === "ذكر"}
                  onChange={handleChange}
                />
                <span className="px-3 py-1 text-[#6B297A] border border-gray-300 rounded-lg cursor-pointer peer-checked:bg-[#6B297A] peer-checked:text-white">
                  ذكر
                </span>
              </label>
              <span className="text-gray-700 mx-4">الجنس</span>
              <FaVenusMars className="text-[#6B297A] ml-2 text-2xl" />
            </div>



            {/* Name */}
            <div className="flex items-center border border-gray-300 px-4 py-2 rounded-lg w-full">
              <input
                type="text"
                placeholder="الاسم"
                className="bg-transparent outline-none text-gray-700 w-full text-right text-sm"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <FaUser className="text-[#6B297A] ml-2 text-2xl" />
            </div>



            {/* Birthdate */}
            {/* Age Input Field */}
            <div className="flex items-center border border-gray-300 px-4 py-2 rounded-lg w-full">
              {/* Age Input */}
              <input
                type="number"
                className="bg-transparent outline-none text-gray-700 w-full text-right"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="العمر"
                min="1" // Prevent negative values
                required
              />

              {/* Age Icon */}
              <FaCalendarAlt className="text-[#6B297A] text-2xl ml-2" />
            </div>





            {/* Mobile Number */}
            <div className="flex items-center border border-gray-300 px-4 py-2 rounded-lg w-full">
              <input
                type="tel"
                placeholder="رقم الجوال"
                className="bg-transparent outline-none text-gray-700 w-full text-right text-sm"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              <FaPhone className="text-[#6B297A] ml-2 text-2xl" />

            </div>
          </div>

          {/* Appointment Details */}
          {/* Grid Container - Align Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-end text-right">

            {/* Clinic Selection */}
            <div className="flex items-center border border-gray-300 px-4 py-2 rounded-lg w-full flex-row-reverse">
              <select
                className="bg-transparent outline-none text-gray-700 w-full text-right text-sm"
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
              <FaClinicMedical className="text-[#6B297A] ml-2 text-2xl" />
            </div>

            {/* Doctor Selection */}
            <div className="flex items-center border border-gray-300 px-4 py-2 rounded-lg w-full flex-row-reverse">
              <select
                className="bg-transparent outline-none text-gray-700 w-full text-right text-sm"
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
              <FaUserMd className="text-[#6B297A] ml-2 text-2xl" />
            </div>

            {/* Appointment Date - Fully Right-Aligned */}
            <div className="relative w-full flex-row-reverse">
              {/* Clickable Wrapper */}
              <div
                className="flex items-center border border-gray-300 px-4 py-2 rounded-lg w-full cursor-pointer"
                onClick={() => document.getElementById("appointmentDate").showPicker()} // Opens Date Picker
              >
                {/* Date Input - Hides Default Icon & Aligns Right */}
                <input
                  type="date"
                  id="appointmentDate"
                  className="bg-transparent outline-none text-gray-700 w-full text-right cursor-pointer appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  required
                />
                {/* Custom Date Icon */}
                <FaCalendarAlt className="text-[#6B297A] text-2xl ml-2" />
              </div>
            </div>

          </div>



          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center bg-[#6B297A] text-white px-6 py-3 rounded-full hover:bg-[#C9E165] hover:text-[#6B297A] transition-all duration-300 w-full md:w-auto mt-4"
          >
            <FaSearch className="ml-2" />
            <span>احجز الآن</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Appointment;
