import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaUserMd,
  FaClinicMedical,
  FaPhone,
  FaVenusMars,
  FaUser,
} from "react-icons/fa";

// Toast component for confirmation
const Toast = ({ message, onClose }) => (
  <div className="fixed top-6 right-6 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg z-50">
    {message}
    <button className="ml-4 text-white font-bold" onClick={onClose}>✕</button>
  </div>
);

const initialForm = {
  gender: "",
  name: "",
  age: "",
  mobile: "",
  clinic: "",
  doctor: "",
  appointmentDate: "",
};

const clinics = [
  { value: "العيادة 1", label: "العيادة 1", doctors: ["د. محمد", "د. علي"] },
  { value: "العيادة 2", label: "العيادة 2", doctors: ["د. أحمد", "د. فاطمة"] },
];

const Appointment = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  // Format date to Arabic
  const formatDateToArabic = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('ar-SA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Filter doctors based on selected clinic
  const doctorOptions = clinics.find(c => c.value === formData.clinic)?.doctors || [];

  // Validation logic
  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "الاسم مطلوب";
    if (!formData.gender) errs.gender = "يرجى اختيار الجنس";
    if (!formData.age || +formData.age < 1) errs.age = "العمر غير صحيح";
    if (!/^05\d{8}$/.test(formData.mobile)) errs.mobile = "رقم الجوال يجب أن يكون 10 أرقام ويبدأ بـ 05";
    if (!formData.clinic) errs.clinic = "يرجى اختيار العيادة";
    if (!formData.doctor) errs.doctor = "يرجى اختيار الطبيب";
    if (!formData.appointmentDate) errs.appointmentDate = "يرجى اختيار التاريخ";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "mobile" ? value.replace(/\D/g, "") : value,
    }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  // Handle clinic change to reset doctor
  const handleClinicChange = (e) => {
    setFormData(prev => ({
      ...prev,
      clinic: e.target.value,
      doctor: "",
    }));
    setErrors(prev => ({ ...prev, clinic: undefined, doctor: undefined }));
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    // Format WhatsApp message
    const message = `حجز موعد:%0Aالجنس: ${formData.gender}%0Aالاسم: ${formData.name}%0Aالعمر: ${formData.age}%0Aرقم الجوال: ${formData.mobile}%0Aالعيادة: ${formData.clinic}%0Aالطبيب: ${formData.doctor}%0Aتاريخ الموعد: ${formData.appointmentDate}`;
    const whatsappNumber = "+966550303411";
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;

    // Simulate network delay for UX
    setTimeout(() => {
      window.open(url, "_blank");
      setSubmitting(false);
      setToast("تم إرسال طلب الحجز بنجاح! سنتواصل معك قريبًا.");
      setFormData(initialForm);
    }, 1200);
  };

  return (
    <section
      className="relative py-8 md:py-16 text-white font-['Almarai'] rounded-3xl overflow-hidden h-auto md:min-h-[80vh] flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center bg-[#6B297A] mt-20 md:mt-24"
      id="appointment"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center w-full">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-right">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center">احجز موعدك الآن</h2>
          <p className="text-base md:text-lg mt-2 md:mt-4 text-[#C9E165] text-center mb-8">
            حدد تفاصيل الموعد واحصل على استشارة مخصصة بسهولة
          </p>
          <div className="bg-[#5B2268] p-6 rounded-2xl shadow-lg mx-auto mb-8 w-full max-w-4xl" dir="rtl">
            <h3 className="text-xl font-bold mb-6 text-[#C9E165] text-center">أوقات العمل</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="py-2">
                <p className="font-bold mb-2">الأحد - الخميس</p>
                <p className="text-[#C9E165]">2 مساءً - 10 مساءً</p>
              </div>
              <div className="border-y md:border-y-0 md:border-x border-[#C9E165]/20 py-4 md:py-2">
                <p className="font-bold mb-2">السبت</p>
                <p className="text-[#C9E165]">2 مساءً - 8 مساءً</p>
              </div>
              <div className="py-2">
                <p className="font-bold mb-2">الجمعة</p>
                <p className="text-red-300">مغلق</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl md:rounded-3xl shadow-lg flex flex-col gap-3 md:gap-4 p-4 md:p-6 w-full max-w-4xl mt-8 md:mt-14"
          dir="rtl"
          aria-label="نموذج حجز موعد"
        >
          {/* Patient Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {/* Name */}
            <div className="flex flex-col w-full">
              <div className="flex items-center border border-gray-300 px-3 py-2 rounded-lg">
<FaUser className="text-[#6B297A] ml-1 md:ml-2 text-xl md:text-2xl" />
<input
                  type="text"
                  placeholder="الاسم"
                  className="bg-transparent outline-none text-gray-700 w-full text-right text-sm md:text-base"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-label="الاسم"
                  aria-describedby={errors.name ? "name-error" : undefined}
                  required
                  autoFocus
                />
              </div>
              {errors.name && (
                <span id="name-error" className="text-red-600 text-xs mt-1" role="alert">{errors.name}</span>
              )}
            </div>
            {/* Gender */}
            <div className="flex flex-col w-full">
              <div className="flex items-center px-3 py-2 rounded-lg w-full justify-start">
              <span className="text-gray-700 mx-2 md:mx-4 text-sm md:text-base">الجنس</span>
              <FaVenusMars className="text-[#6B297A] ml-1 md:ml-2 text-xl md:text-2xl" />
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
              </div>
              {errors.gender && (
                <span className="text-red-600 text-xs mt-1" role="alert">{errors.gender}</span>
              )}
            </div>
            {/* Age */}
            <div className="flex flex-col w-full">
              <div className="flex items-center border border-gray-300 px-3 py-2 rounded-lg">
              <FaCalendarAlt className="text-[#6B297A] text-xl md:text-2xl ml-1 md:ml-2" />
                <input
                  type="number"
                  className="bg-transparent outline-none text-gray-700 w-full text-right text-sm md:text-base"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="العمر"
                  min="1"
                  aria-label="العمر"
                  aria-describedby={errors.age ? "age-error" : undefined}
                  required
                />
              </div>
              {errors.age && (
                <span id="age-error" className="text-red-600 text-xs mt-1" role="alert">{errors.age}</span>
              )}
            </div>
            {/* Mobile */}
            <div className="flex flex-col w-full">
              <div className="flex items-center border border-gray-300 px-3 py-2 rounded-lg">
              <FaPhone className="text-[#6B297A] ml-1 md:ml-2 text-xl md:text-2xl" />
                <input
                  type="tel"
                  placeholder="رقم الجوال"
                  className="bg-transparent outline-none text-gray-700 w-full text-right text-sm md:text-base"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  pattern="^05\d{8}$"
                  title="رقم الجوال يجب أن يكون 10 أرقام ويبدأ بـ 05"
                  maxLength={10}
                  aria-label="رقم الجوال"
                  aria-describedby={errors.mobile ? "mobile-error" : undefined}
                  required
                />
              </div>
              {errors.mobile && (
                <span id="mobile-error" className="text-red-600 text-xs mt-1" role="alert">{errors.mobile}</span>
              )}
            </div>
          </div>

          {/* Appointment Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {/* Clinic */}
            <div className="flex flex-col w-full">
              <div className="flex items-center border border-gray-300 px-3 py-2 rounded-lg flex-row-reverse">
                <select
                  className="bg-transparent outline-none text-gray-700 w-full text-right text-sm md:text-base"
                  name="clinic"
                  value={formData.clinic}
                  onChange={handleClinicChange}
                  aria-label="العيادة"
                  aria-describedby={errors.clinic ? "clinic-error" : undefined}
                  required
                  dir="rtl"
                >
                  <option value="">العيادة</option>
                  {clinics.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
                <FaClinicMedical className="text-[#6B297A] ml-1 md:ml-2 text-xl md:text-2xl" />
              </div>
              {errors.clinic && (
                <span id="clinic-error" className="text-red-600 text-xs mt-1" role="alert">{errors.clinic}</span>
              )}
            </div>
            {/* Doctor */}
            <div className="flex flex-col w-full">
              <div className="flex items-center border border-gray-300 px-3 py-2 rounded-lg flex-row-reverse">
                <select
                  className="bg-transparent outline-none text-gray-700 w-full text-right text-sm md:text-base"
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  aria-label="الطبيب"
                  aria-describedby={errors.doctor ? "doctor-error" : undefined}
                  required
                  dir="rtl"
                  disabled={!formData.clinic}
                >
                  <option value="">الطبيب</option>
                  {doctorOptions.map((doc) => (
                    <option key={doc} value={doc}>{doc}</option>
                  ))}
                </select>
                <FaUserMd className="text-[#6B297A] ml-1 md:ml-2 text-xl md:text-2xl" />
              </div>
              {errors.doctor && (
                <span id="doctor-error" className="text-red-600 text-xs mt-1" role="alert">{errors.doctor}</span>
              )}
            </div>
            {/* Appointment Date */}
            <div className="flex flex-col w-full md:col-span-2">
              <div className="relative w-full">
                <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                  <svg className="w-5 h-5 text-[#6B297A]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
                </div>
                <input
                  type="date"
                  id="appointmentDate"
                  className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-[#6B297A] focus:border-[#6B297A] block w-full pe-10 p-2.5 text-right"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  aria-label="تاريخ الموعد"
                  aria-describedby={errors.appointmentDate ? "date-error" : undefined}
                  required
                  dir="rtl"
                  style={{ colorScheme: 'light' }}
                  placeholder="اختر التاريخ"
                />
                {formData.appointmentDate && (
                  <div className="absolute inset-0 pointer-events-none flex items-center pe-10 justify-end">
                    <span className="text-gray-700">{formatDateToArabic(formData.appointmentDate)}</span>
                  </div>
                )}
              </div>
              {errors.appointmentDate && (
                <span id="date-error" className="text-red-600 text-xs mt-1" role="alert">{errors.appointmentDate}</span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className={`flex items-center justify-center bg-[#6B297A] text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-[#C9E165] hover:text-[#6B297A] transition-all duration-300 w-full mt-2 md:mt-4 text-sm md:text-base ${submitting ? "opacity-60 cursor-not-allowed" : ""}`}
            aria-busy={submitting}
          >
            {submitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
                جاري الإرسال...
              </span>
            ) : (
              <span>احجز الآن</span>
            )}
          </button>
        </form>
        {toast && <Toast message={toast} onClose={() => setToast(null)} />}
      </div>
    </section>
  );
};

export default Appointment;
