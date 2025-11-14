"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function WorkVisaEnquiryPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    destination: "",
    experience: "",
    qualification: "",
    jobType: "",
    visaType: "",
    mode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Replace with your WhatsApp number (country code + number, no spaces or +)
    const whatsappNumber = "919876543210";

    // WhatsApp message
    const message = `
🧳 *New Work Visa Enquiry* 🧳

👤 Name: ${formData.fullName}
📧 Email: ${formData.email}
📱 Mobile: ${formData.mobile}

🌍 Destination Country: ${formData.destination}
💼 Job Type: ${formData.jobType}
🎓 Qualification: ${formData.qualification}
🧠 Experience: ${formData.experience}
🛂 Visa Type Interested: ${formData.visaType}
📞 Preferred Mode of Consultation: ${formData.mode}

Please reach out to assist this client with work visa support.
`;

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-white">
      <div className="max-w-6xl w-full rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 border border-white/10">
        {/* Left Section - Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="p-10"
        >
          <h1 className="text-3xl font-bold mb-3">
            Apply for <span className="text-blue-400">Work Visa</span> Today!
          </h1>
          <p className="text-gray-300 mb-8 text-sm">
            Fill in your details below and our visa experts will reach out via
            WhatsApp to guide you through the work visa process, eligibility,
            and documentation.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-200">
                Full Name*
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-400 rounded-md px-3 py-2 text-black focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-200">
                Email Address*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-400 rounded-md px-3 py-2 text-black focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            {/* Mobile */}
            <div className="flex gap-2">
              <input
                type="text"
                disabled
                value="+91"
                className="w-16 border border-gray-400 rounded-md px-3 py-2 bg-gray-200 text-gray-700"
              />
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                maxLength="10"
                pattern="[0-9]{10}"
                placeholder="Enter 10-digit mobile number"
                required
                className="flex-1 border border-gray-400 rounded-md px-3 py-2 text-black focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            {/* Destination & Job Type */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Destination Country*
                </label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border border-gray-400 rounded-md px-3 py-2 text-black focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  <option value="">Select</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Australia</option>
                  <option>Canada</option>
                  <option>New Zealand</option>
                  <option>Japan</option>
                  <option>Germany</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Job Type*
                </label>
                <select
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border border-gray-400 rounded-md px-3 py-2 text-black focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  <option value="">Select</option>
                  <option>Skilled</option>
                  <option>IT / Tech</option>
                  <option>Healthcare</option>
                  <option>Hospitality</option>
                  <option>Engineering</option>
                  <option>Others</option>
                </select>
              </div>
            </div>

            {/* Qualification & Experience */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Highest Qualification*
                </label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border border-gray-400 rounded-md px-3 py-2 text-black focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  <option value="">Select</option>
                  <option>Bachelor's Degree</option>
                  <option>Master's Degree</option>
                  <option>Diploma</option>
                  <option>PhD</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Total Experience*
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border border-gray-400 rounded-md px-3 py-2 text-black focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  <option value="">Select</option>
                  <option>0 - 1 Year</option>
                  <option>1 - 3 Years</option>
                  <option>3 - 5 Years</option>
                  <option>5+ Years</option>
                </select>
              </div>
            </div>

            {/* Visa Type & Mode */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Visa Type Interested*
                </label>
                <select
                  name="visaType"
                  value={formData.visaType}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border border-gray-400 rounded-md px-3 py-2 text-black focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  <option value="">Select</option>
                  <option>Skilled Work Visa</option>
                  <option>Temporary Work Visa</option>
                  <option>Business / Investor Visa</option>
                  <option>Post-Study Work Visa</option>
                  <option>Seasonal or Labor Visa</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Mode of Consultation*
                </label>
                <select
                  name="mode"
                  value={formData.mode}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border border-gray-400 rounded-md px-3 py-2 text-black focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  <option value="">Select</option>
                  <option>In-person</option>
                  <option>Online</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
            >
              FREE Counselling
            </button>
          </form>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-br from-blue-200 via-emerald-300 to-blue-100 flex items-center justify-center p-10"
        >
          <Image
            src="/main page.png"
            alt="Work Visa"
            width={600}
            height={600}
            className="object-contain drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
