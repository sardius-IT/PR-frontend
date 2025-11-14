"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function FreeCounsellingPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    destination: "",
    startTime: "",
    office: "",
    mode: "",
    level: "",
    fund: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Replace this with your consultancy’s WhatsApp number (with country code, no spaces or +)
    const whatsappNumber = "919876543210";

    // Message format for WhatsApp
    const message = `
📘 *New Counselling Enquiry* 📘

👤 Name: ${formData.firstName} ${formData.lastName}
📧 Email: ${formData.email}
📱 Mobile: ${formData.mobile}
🌏 Study Destination: ${formData.destination}
📅 Start Time: ${formData.startTime}
🏢 Nearest Office: ${formData.office}
💬 Mode of Counselling: ${formData.mode}
🎓 Study Level: ${formData.level}
💰 Funding: ${formData.fund}

Please reach out to this student for counselling assistance.
    `;

    // Encode message and open WhatsApp chat
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="min-h-screen  flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl w-full rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* Left Section - Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="p-10"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Get <span className="text-purple-200">FREE Counselling</span> Today!
          </h1>
          <p className="text-gray-100 mb-8 text-sm">
            Enter your details and our expert will reach out to you via WhatsApp
            to discuss your plans. All our services are free!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white">
                  First name*
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium  text-white">
                  Last name*
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none text-black"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium  text-white">
                Email address*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none text-black"
              />
            </div>

            {/* Mobile */}
            <div className="flex gap-2">
              <input
                type="text"
                disabled
                value="+91"
                className="w-16 border border-gray-300 rounded-md px-3 py-2 bg-gray-100  text-black"
              />
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                maxLength="10"
                pattern="[0-9]{10}"
                placeholder="Enter your 10-digit mobile number"
                required
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none text-black"
              />
            </div>

            {/* Study Details */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium  text-white">
                  Preferred study destination*
                </label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none text-black"
                >
                  <option value="">Select</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Australia</option>
                  <option>Canada</option>
                  <option>New Zealand</option>
                  <option>Japan</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium  text-white ">
                  When would you like to start?*
                </label>
                <select
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none text-black"
                >
                  <option value="">Select</option>
                  <option>Jan 2026</option>
                  <option>May 2026</option>
                  <option>Sep 2026</option>
                </select>
              </div>
            </div>

            {/* Additional Details */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium  text-white">
                  Nearest Office*
                </label>
                <select
                  name="office"
                  value={formData.office}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none text-black"
                >
                  <option value="">Select</option>
                  <option>Hyderabad</option>
                  <option>Bangalore</option>
                  <option>Delhi</option>
                  <option>Mumbai</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium  text-white">
                  Preferred mode of counselling*
                </label>
                <select
                  name="mode"
                  value={formData.mode}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none text-black"
                >
                  <option value="">Select</option>
                  <option>In-person</option>
                  <option>Online</option>
                </select>
              </div>
            </div>

            {/* Study level + Funding */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white">
                  Preferred study level*
                </label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none text-black"
                >
                  <option value="">Select</option>
                  <option>Undergraduate</option>
                  <option>Postgraduate</option>
                  <option>PhD</option>
                  <option>Diploma</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white">
                  How would you fund your education?*
                </label>
                <select
                  name="fund"
                  value={formData.fund}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none text-black"
                >
                  <option value="">Select</option>
                  <option>Self-Funded</option>
                  <option>Education Loan</option>
                  <option>Scholarship</option>
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
            src="/study abroad.png"
            alt="Student"
            width={400}
            height={400}
            className="object-contain drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
