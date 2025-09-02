import React, { useState, useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import {
  FaCalendarAlt,
  FaPhone,
  FaVenusMars,
  FaUser,
  FaHospital,
  FaUserMd,
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

const clinicData = [
  {
    name: 'عيادة قياس وتشخيص اضطرابات الطفولة',
    staff: [
      { name: 'د. تهاني الجديعي', title: 'دكتورة', id: 'tahani' }
    ]
  },
  {
    name: 'عيادات التأهيل والعلاج النفسي السلوكي',
    staff: [
      { name: 'أ. منيرة القحطاني', title: 'أخصائية', id: 'monera' },
      { name: 'أ. أسامة قحل', title: 'أخصائي', id: 'osama' }
    ]
  },
  {
    name: 'عيادات الاضطرابات النمائية وتعديل السلوك',
    staff: [
      { name: 'أ. أمجاد عبدالله', title: 'أخصائية', id: 'amjad' }
    ]
  },
  {
    name: 'عيادات اضطرابات النطق والكلام',
    staff: [
      { name: 'أ. شرف الدين محمود', title: 'أخصائي', id: 'sharaf' },
      { name: 'أ. منار القحطاني', title: 'أخصائية', id: 'manar' }
    ]
  },
  {
    name: 'عيادات العلاج الطبيعي',
    staff: [
      { name: 'أ. أحمد فكري', title: 'دكتور', id: 'ahmad' }
    ]
  },
  {
    name: 'عيادات العلاج الوظيفي',
    staff: []
  }
];

// Convert clinic data to format needed for form
const clinics = clinicData.map(clinic => ({
  value: clinic.name,
  label: clinic.name,
  doctors: clinic.staff.map(person => person.name)
}));

const doctors = clinicData.flatMap(clinic => 
  clinic.staff.map(person => ({
    id: person.id,
    name: person.name,
    specialties: [clinic.name]
  }))
);

const Appointment = () => {
  const datePickerRef = useRef(null);

  useEffect(() => {
    if (datePickerRef.current) {
      const fp = flatpickr(datePickerRef.current, {
        theme: 'light',
        inline: false,
        monthSelectorType: 'static',
        dateFormat: 'Y-m-d',
        minDate: 'today',
        maxDate: new Date().fp_incr(30),
        disableMobile: false,
        clickOpens: true,
        closeOnSelect: true,
        locale: {
          firstDayOfWeek: 6,
          weekdays: {
            shorthand: ["أحد", "اثن", "ثلا", "أرب", "خمي", "جمع", "سبت"],
            longhand: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
          },
          months: {
            shorthand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            longhand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
          }
        },
        position: 'auto right',
        onChange: (selectedDates) => {
          if (selectedDates[0]) {
            handleChange({
              target: {
                name: 'appointmentDate',
                value: selectedDates[0].toISOString().split('T')[0]
              }
            });
          }
        }
      });
    }
    // Add custom styles to match our theme
    const style = document.createElement('style');
    style.innerHTML = `
      .flatpickr-calendar {
        direction: rtl;
        font-family: 'Almarai', sans-serif;
      }
      .flatpickr-months {
        direction: rtl;
      }
      .flatpickr-months .flatpickr-month {
        direction: rtl;
      }
      .flatpickr-calendar.arrowRight:after {
        right: unset;
        left: 22px;
      }
      .flatpickr-calendar.arrowRight:before {
        right: unset;
        left: 22px;
      }
      .flatpickr-prev-month {
        right: 0;
        left: unset !important;
      }
      .flatpickr-next-month {
        left: 0;
        right: unset !important;
      }
      .flatpickr-months .flatpickr-prev-month, .flatpickr-months .flatpickr-next-month {
        padding: 1px 10px;
      }
      .flatpickr-calendar.open {
        z-index: 999999 !important;
      }
      .flatpickr-day.selected, .flatpickr-day.selected:hover {
        background: #6B297A !important;
        border-color: #6B297A !important;
      }
      .flatpickr-day:hover {
        background: #C9E165 !important;
        border-color: #C9E165 !important;
        color: #6B297A !important;
      }
      .flatpickr-current-month .flatpickr-monthDropdown-months:hover,
      .flatpickr-current-month input.cur-year:hover {
        background: #f0f0f0;
      }
      .flatpickr-calendar.arrowTop:after {
        border-bottom-color: #fff;
      }
      .flatpickr-current-month {
        font-family: 'Almarai', sans-serif;
      }
      .flatpickr-weekday {
        font-family: 'Almarai', sans-serif;
      }
      .flatpickr-calendar.open ~ div input {
        border-color: #6B297A !important;
        box-shadow: 0 0 0 1px #6B297A !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const [showClinics, setShowClinics] = useState(true);
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
    if (!formData.mobile) {
      errs.mobile = "رقم الجوال مطلوب";
    } else if (formData.mobile.length !== 9 && formData.mobile.length !== 10) {
      errs.mobile = "رقم الجوال غير صحيح - يجب أن يكون 9 أو 10 أرقام";
    } else if (formData.mobile.length === 9 && !formData.mobile.startsWith('5')) {
      errs.mobile = "رقم الجوال غير صحيح - يجب أن يبدأ بـ 5";
    } else if (formData.mobile.length === 10 && !formData.mobile.startsWith('05')) {
      errs.mobile = "رقم الجوال غير صحيح - يجب أن يبدأ بـ 05";
    }
    if (!formData.clinic) errs.clinic = "يرجى اختيار العيادة";
    if (!formData.doctor) errs.doctor = "يرجى اختيار الطبيب";
    if (!formData.appointmentDate) errs.appointmentDate = "يرجى اختيار التاريخ";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    if (name === "mobile") {
      // حذف كل شيء ما عدا الأرقام
      newValue = value.replace(/[^0-9]/g, "");
      // تحديد الحد الأقصى للطول
      if (newValue.length > 10) {
        newValue = newValue.slice(0, 10);
      }
      // إضافة 0 في البداية إذا بدأ الرقم بـ 5
      if (newValue.startsWith('5') && newValue.length === 9) {
        newValue = '0' + newValue;
      }
      // حذف 0 من البداية إذا كان المستخدم يريد إدخال رقم من 9 خانات
      if (newValue.startsWith('0') && value.length < newValue.length) {
        newValue = newValue.slice(1);
      }
    }
    setFormData(prev => ({
      ...prev,
      [name]: newValue
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
              <div className="flex items-center rounded-lg overflow-hidden hover:border-[#6B297A] transition-colors duration-200 group focus-within:border-[#6B297A] border border-gray-300">
                <div className="px-3 py-2.5 bg-gray-50 border-l border-gray-300 group-hover:border-[#6B297A] group-focus-within:border-[#6B297A] transition-colors duration-200">
                  <FaUser className="text-[#6B297A] w-5 h-5 group-hover:scale-110 group-focus-within:scale-110 transition-transform duration-200" />
                </div>
                <input
                  type="text"
                  placeholder="الاسم"
                  className="bg-gray-50 text-gray-900 text-sm focus:ring-0 focus:outline-none block w-full p-2.5 text-right placeholder-gray-900"
                  name="name"
                  value={formData.name}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === '' || /^[\u0600-\u06FF\sa-zA-Z\s]*$/.test(value)) {
                      handleChange(e);
                    }
                  }}
                  pattern="[\u0600-\u06FFa-zA-Z\s]+"
                  aria-label="الاسم"
                  aria-describedby={errors.name ? "name-error" : undefined}
                  required
                  dir="rtl"
                  autoFocus
                />
              </div>
              {errors.name && (
                <span id="name-error" className="text-red-600 text-xs mt-1" role="alert">{errors.name}</span>
              )}
            </div>
            {/* Gender */}
            <div className="flex flex-col w-full">
              <div className="flex items-center rounded-lg overflow-hidden hover:border-[#6B297A] transition-colors duration-200 group focus-within:border-[#6B297A] border border-gray-300">
                <div className="px-3 py-2.5 bg-gray-50 border-l border-gray-300 group-hover:border-[#6B297A] group-focus-within:border-[#6B297A] transition-colors duration-200">
                  <FaVenusMars className="text-[#6B297A] w-5 h-5 group-hover:scale-110 group-focus-within:scale-110 transition-transform duration-200" />
                </div>
                <select
                  name="gender"
                  className="bg-gray-50 text-gray-900 text-sm focus:ring-0 focus:outline-none block w-full p-2.5 text-right appearance-none placeholder-gray-500"
                  value={formData.gender}
                  onChange={handleChange}
                  aria-label="الجنس"
                  aria-describedby={errors.gender ? "gender-error" : undefined}
                  required
                  dir="rtl"
                >
                  <option value="">الجنس</option>
                  <option value="ذكر">ذكر</option>
                  <option value="أنثى">أنثى</option>
                </select>
              </div>
              {errors.gender && (
                <span id="gender-error" className="text-red-600 text-xs mt-1" role="alert">{errors.gender}</span>
              )}
            </div>
            {/* Age */}
            <div className="flex flex-col w-full">
              <div className="flex items-center rounded-lg overflow-hidden hover:border-[#6B297A] transition-colors duration-200 group focus-within:border-[#6B297A] border border-gray-300">
                <div className="px-3 py-2.5 bg-gray-50 border-l border-gray-300 group-hover:border-[#6B297A] group-focus-within:border-[#6B297A] transition-colors duration-200">
                  <FaCalendarAlt className="text-[#6B297A] w-5 h-5 group-hover:scale-110 group-focus-within:scale-110 transition-transform duration-200" />
                </div>
                <input
                  type="text"
                  inputMode="numeric"
                  id="age"
                  name="age"
                  className="bg-gray-50 text-gray-900 text-sm focus:ring-0 focus:outline-none block w-full p-2.5 text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder-gray-900"
                  value={formData.age}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === '' || (/^\d+$/.test(value) && parseInt(value) >= 1)) {
                      handleChange(e);
                    }
                  }}
                  placeholder="العمر"
                  aria-label="العمر"
                  aria-describedby={errors.age ? "age-error" : undefined}
                  required
                  dir="rtl"
                />
              </div>
              {errors.age && (
                <span id="age-error" className="text-red-600 text-xs mt-1" role="alert">{errors.age}</span>
              )}
            </div>
            {/* Mobile */}
            <div className="flex flex-col w-full">
              <div className="flex items-center rounded-lg overflow-hidden hover:border-[#6B297A] transition-colors duration-200 group focus-within:border-[#6B297A] border border-gray-300">
                <div className="px-3 py-2.5 bg-gray-50 border-l border-gray-300 group-hover:border-[#6B297A] group-focus-within:border-[#6B297A] transition-colors duration-200">
                  <FaPhone className="text-[#6B297A] w-5 h-5 group-hover:scale-110 group-focus-within:scale-110 transition-transform duration-200" />
                </div>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="bg-gray-50 text-gray-900 text-sm focus:ring-0 focus:outline-none block w-full p-2.5 text-right placeholder-gray-900"
                  placeholder="رقم الجوال"
                  value={formData.mobile}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value)) {
                      handleChange(e);
                    }
                  }}
                  required
                  dir="rtl"
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
              <div className="flex items-center rounded-lg overflow-hidden hover:border-[#6B297A] transition-colors duration-200 group focus-within:border-[#6B297A] border border-gray-300">
                <div className="px-3 py-2.5 bg-gray-50 border-l border-gray-300 group-hover:border-[#6B297A] group-focus-within:border-[#6B297A] transition-colors duration-200">
                  <FaHospital className="text-[#6B297A] w-5 h-5 group-hover:scale-110 group-focus-within:scale-110 transition-transform duration-200" />
                </div>
                <select
                  id="clinic"
                  name="clinic"
                  className="bg-gray-50 text-gray-900 text-sm focus:ring-0 focus:outline-none block w-full p-2.5 text-right appearance-none placeholder-gray-500"
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

              </div>
              {errors.clinic && (
                <span id="clinic-error" className="text-red-600 text-xs mt-1" role="alert">{errors.clinic}</span>
              )}
            </div>
            {/* Doctor */}
            <div className="flex flex-col w-full">
              <div className="flex items-center rounded-lg overflow-hidden hover:border-[#6B297A] transition-colors duration-200 group focus-within:border-[#6B297A] border border-gray-300">
                <div className="px-3 py-2.5 bg-gray-50 border-l border-gray-300 group-hover:border-[#6B297A] group-focus-within:border-[#6B297A] transition-colors duration-200">
                  <FaUserMd className="text-[#6B297A] w-5 h-5 group-hover:scale-110 group-focus-within:scale-110 transition-transform duration-200" />
                </div>
                <select
                  id="doctor"
                  name="doctor"
                  className="bg-gray-50 text-gray-900 text-sm focus:ring-0 focus:outline-none block w-full p-2.5 text-right appearance-none placeholder-gray-500"
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
              </div>
              {errors.doctor && (
                <span id="doctor-error" className="text-red-600 text-xs mt-1" role="alert">{errors.doctor}</span>
              )}
            </div>
            {/* Appointment Date */}
            <div className="flex flex-col w-full md:col-span-2">
              <div className="relative w-full">
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden group hover:border-[#6B297A] focus-within:border-[#6B297A] transition-colors duration-200">
                  <div className="px-3 py-2.5 bg-gray-50 border-l border-gray-300 group-hover:border-[#6B297A] group-focus-within:border-[#6B297A] transition-colors duration-200">
                    <svg className="w-5 h-5 text-[#6B297A] group-hover:scale-110 group-focus-within:scale-110 transition-transform duration-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      readOnly
                      ref={datePickerRef}
                      value={formData.appointmentDate ? `${formatDateToArabic(formData.appointmentDate)} - ${new Date(formData.appointmentDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}` : ''}
                      placeholder="اختر التاريخ"
                      className="block w-full px-4 py-2.5 text-right bg-gray-50 text-gray-900 text-sm focus:ring-0 focus:outline-none placeholder-black cursor-pointer"
                      aria-label="تاريخ الموعد"
                      aria-describedby={errors.appointmentDate ? "date-error" : undefined}
                      required
                      dir="rtl"
                    />
                  </div>
                </div>
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