"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function TouristVisaPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    destination: "",
    travelPurpose: "",
    duration: "",
    travelDate: "",
    mode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919876543210"; // ✅ Replace with your number
    const message = `
🌍 *New Tourist Visa Enquiry* 🌍

👤 Name: ${formData.fullName}
📧 Email: ${formData.email}
📱 Mobile: ${formData.mobile}
🗺 Destination Country: ${formData.destination}
🎯 Travel Purpose: ${formData.travelPurpose}
🕒 Duration: ${formData.duration}
📅 Travel Date: ${formData.travelDate}
💬 Mode: ${formData.mode}
    `;

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="bg-black min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl w-full rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 border border-white/10 bg-gradient-to-br from-[#101010] via-[#0a0a0a] to-[#1a1a1a]">
        {/* Left Section - Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="p-10"
        >
          <h1 className="text-3xl font-bold mb-2 text-white">
            Apply for <span className="text-yellow-400">Tourist Visa</span> Today!
          </h1>
          <p className="text-gray-300 mb-8 text-sm">
            Fill in your details and our experts will reach out to you via WhatsApp
            to help you with your tourist visa process, requirements, and guidance.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Full Name*
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none text-black"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Email Address*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none text-black"
              />
            </div>

            {/* Mobile */}
            <div className="flex gap-2">
              <input
                type="text"
                disabled
                value="+91"
                className="w-16 border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-black"
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
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none text-black"
              />
            </div>

            {/* Destination & Purpose */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Destination Country*
                </label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-black focus:ring-2 focus:ring-yellow-400 outline-none"
                >
                  <option value="">Select</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Australia</option>
                  <option>Canada</option>
                  <option>Dubai</option>
                  <option>Singapore</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Purpose of Visit*
                </label>
                <select
                  name="travelPurpose"
                  value={formData.travelPurpose}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-black focus:ring-2 focus:ring-yellow-400 outline-none"
                >
                  <option value="">Select</option>
                  <option>Holiday</option>
                  <option>Family Visit</option>
                  <option>Medical</option>
                  <option>Business</option>
                  <option>Conference</option>
                </select>
              </div>
            </div>

            {/* Duration & Date */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Duration of Stay*
                </label>
                <input
                  type="text"
                  name="duration"
                  placeholder="e.g. 15 days"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-black focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Planned Travel Date*
                </label>
                <input
                  type="date"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-black focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
            </div>

            {/* Mode of Consultation */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Mode of Consultation*
              </label>
              <select
                name="mode"
                value={formData.mode}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-black focus:ring-2 focus:ring-yellow-400 outline-none"
              >
                <option value="">Select</option>
                <option>Online</option>
                <option>In-person</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:opacity-90 text-black font-semibold py-3 rounded-md mt-4"
            >
              Send Enquiry via WhatsApp
            </button>
          </form>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-br from-green-200 via-cyan-400 to-blue-200 flex items-center justify-center p-10"
        >
          <Image
            src="/visa-tu.png"
            alt="Tourist Visa Illustration"
            width={500}
            height={500}
            className="object-contain drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
