"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* -------------------------------------------------------
   MAGIC CURSOR — UPDATED WITH FLYHIGH GRADIENT COLORS
   ------------------------------------------------------- */
function MagicCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="
        pointer-events-none fixed top-0 left-0 z-[999]
        w-5 h-5 rounded-full 
        bg-gradient-to-r from-[#77a7ff] via-[#f5c18b] to-[#b9b9b9]
        shadow-[0_0_25px_10px_rgba(255,200,140,0.35)]
      "
      animate={{ x: pos.x - 10, y: pos.y - 10 }}
      transition={{ type: 'spring', mass: 0.15 }}
    />
  );
}

/* -------------------------------------------------------
   AURORA BACKGROUND
   ------------------------------------------------------- */
function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#050505]" />

      <motion.div
        className="absolute top-[-15%] left-[-10%] w-[60vw] h-[60vw] bg-blue-500/25 blur-[200px] rounded-full"
        animate={{ x: [0, 50, -30, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-[-15%] right-[-10%] w-[55vw] h-[55vw] bg-orange-400/20 blur-[180px] rounded-full"
        animate={{ x: [0, -40, 30, 0], y: [0, 20, -25, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-[20%] right-[20%] w-[40vw] h-[40vw] bg-purple-500/20 blur-[180px] rounded-full"
        animate={{ x: [0, 20, -20, 0], y: [0, -25, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
      />
    </div>
  );
}

/* -------------------------------------------------------
   FULL PAGE
   ------------------------------------------------------- */
export default function Home() {
  const VISA_TYPES = ["Student Visa", "Work Visa", "Tourist Visa"];
  const COUNTRIES = [
    "United States",
    "United Kingdom",
    "Australia",
    "New Zealand",
    "Japan",
    "China",
  ];

  const [visaType, setVisaType] = useState(VISA_TYPES[0]);
  const [country, setCountry] = useState(COUNTRIES[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleWhatsAppSubmit = () => {
    if (!name || !phone)
      return alert("Please enter name & phone number.");

    const msg = `Hello PR Consultants,
I want a free consultation.

Name: ${name}
Phone: ${phone}
Visa Type: ${visaType}
Country: ${country}`;

    window.open(
      `https://wa.me/919000012345?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <main className="text-white relative overflow-hidden">
      <AuroraBackground />
      <MagicCursor />

      {/* HERO SECTION */}
      <section className="pt-28 pb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold"
        >
          Secure Your{" "}
          <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-300 text-transparent bg-clip-text">
            PR / Visa
          </span>{" "}
          with Experts
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-5 max-w-2xl mx-auto text-gray-300"
        >
          Ethical guidance for Student, Work, and Tourist visas — US, UK,
          Australia, New Zealand, Japan, and China.
        </motion.p>

        {/* CONSULTATION FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 max-w-3xl mx-auto bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20"
        >
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {VISA_TYPES.map((v) => (
              <button
                key={v}
                onClick={() => setVisaType(v)}
                className={`px-4 py-2 rounded-xl text-sm ${
                  visaType === v
                    ? "bg-white text-black"
                    : "bg-white/10 border border-white/20 text-white"
                }`}
              >
                {v}
              </button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <input
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="mt-4 flex flex-col md:flex-row gap-3">
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3"
            >
              {COUNTRIES.map((c) => (
                <option key={c} className="bg-black">
                  {c}
                </option>
              ))}
            </select>

            <button
              onClick={handleWhatsAppSubmit}
              className="px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-blue-400 transition"
            >
              Book Free Consultation
            </button>
          </div>
        </motion.div>
      </section>

      {/* STUDENT VISA */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          src="/vi-su.jpg"
          className="rounded-2xl border border-white/10"
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text">
            Student Visa
          </h2>
          <p className="text-gray-300 mt-3">
            Pursue your higher education with complete guidance.
          </p>

          <ul className="mt-4 text-gray-400 space-y-2">
            <li>✔ USA, UK, Australia, Canada & more</li>
            <li>✔ University shortlisting</li>
            <li>✔ Visa interview training</li>
          </ul>
        </motion.div>
      </section>

      {/* WORK VISA */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-300 text-transparent bg-clip-text">
            Work Visa
          </h2>
          <p className="text-gray-300 mt-3">
            Trusted work visa assistance for global job opportunities.
          </p>

          <ul className="mt-4 text-gray-400 space-y-2">
            <li>✔ Skilled migration</li>
            <li>✔ Job seeker visa support</li>
            <li>✔ Relocation guidance</li>
          </ul>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          src="/work-visa.jpg"
          className="rounded-2xl border border-white/10"
        />
      </section>

      {/* TOURIST VISA */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          src="/tourist.jpg"
          className="rounded-2xl border border-white/10"
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-300 to-yellow-300 text-transparent bg-clip-text">
            Tourist Visa
          </h2>
          <p className="text-gray-300 mt-3">
            Fast and simple tourist visa processing for your next trip.
          </p>

          <ul className="mt-4 text-gray-400 space-y-2">
            <li>✔ Fast approvals</li>
            <li>✔ Hassle-free documentation</li>
            <li>✔ Family & group visas</li>
          </ul>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-orange-300 to-blue-400 text-transparent bg-clip-text">
          Our Services
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto">
          {[{ icon: "🎓", title: "Study Abroad" },
            { icon: "💼", title: "Work Permits" },
            { icon: "🛂", title: "Permanent Residency" },
            { icon: "🌍", title: "Tourist Visa" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mt-3">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GOALS */}
      <section className="py-20 max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-300 text-transparent bg-clip-text">
          Our Goals
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-6 text-gray-300 leading-relaxed"
        >
          Our aim is to provide ethical, transparent, and fast visa assistance
          for students, professionals, and travellers worldwide.
        </motion.p>
      </section>

      {/* AWARDS */}
      <section className="py-20 text-center max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 text-transparent bg-clip-text">
          Awards & Reviews
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {[{ value: "10+", label: "Years of Experience" },
            { value: "1200+", label: "Successful Approvals" },
            { value: "4.9★", label: "Client Rating" },
            { value: "15+", label: "International Awards" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <h3 className="text-4xl font-bold">{s.value}</h3>
              <p className="text-gray-400 mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
