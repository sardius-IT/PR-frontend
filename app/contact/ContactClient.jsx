"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // WhatsApp submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your real WhatsApp number (no + or spaces)
    const whatsappNumber = "919876543210";

    const message = `
📩 *New Enquiry from FlyHigh PR Website*

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
💬 Message: ${formData.message}
    `;

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-white min-h-screen py-20 px-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
          Contact FlyHigh PR
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Have questions or need a consultation? We’re here to help you craft
          the perfect communication and marketing strategy for your brand.
        </p>
      </motion.div>

      {/* Main Grid Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-300">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md text-black outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md text-black outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-300">
                Mobile Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your 10-digit mobile number"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                maxLength="10"
                required
                className="w-full p-3 rounded-md text-black outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-300">
                Your Message
              </label>
              <textarea
                name="message"
                placeholder="Type your message..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="w-full p-3 rounded-md text-black outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-black font-semibold py-3 rounded-md hover:opacity-90 transition"
            >
              Send Message on WhatsApp
            </button>
          </form>
        </motion.div>

        {/* Right Column - Info + Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="bg-white/10 border border-white/10 rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
              Get in Touch
            </h3>

            <p className="text-gray-300 mb-2">
              📍 <strong>Address:</strong> FlyHigh PR Consultancy, Road No. 12,
              Banjara Hills, Hyderabad, Telangana - 500034
            </p>

            <p className="text-gray-300 mb-2">
              📞 <strong>Phone:</strong>{" "}
              <a
                href="tel:+919876543210"
                className="text-blue-400 hover:underline"
              >
                +91 98765 43210
              </a>
            </p>

            <p className="text-gray-300 mb-4">
              📧 <strong>Email:</strong>{" "}
              <a
                href="mailto:info@flyhighpr.com"
                className="text-blue-400 hover:underline"
              >
                info@flyhighpr.com
              </a>
            </p>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              className="inline-block mt-5 bg-gradient-to-r from-green-400 to-green-600 text-black px-5 py-2.5 rounded-full font-semibold hover:opacity-90 transition"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.442237973149!2d78.4282073!3d17.4240343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b8b02bba81%3A0xdda17d2a12e53b63!2sBanjara%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1731476954000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
