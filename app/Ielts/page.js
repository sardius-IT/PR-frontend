"use client";

import { motion } from "framer-motion";

export default function IELTSPage() {
  return (
    <main className="relative text-white bg-[#0a0a0a] min-h-screen">

      {/* HEADER */}
      <section className="pt-24 pb-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
        >
          IELTS Exam{" "}
          <span className="bg-gradient-to-r from-blue-400 via-orange-300 to-blue-400 text-transparent bg-clip-text">
            Complete Guide
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 max-w-xl md:max-w-3xl mx-auto text-gray-300 text-sm sm:text-base leading-relaxed px-2"
        >
          IELTS is the most trusted English proficiency test accepted by universities,
          employers, and immigration authorities worldwide.
        </motion.p>
      </section>

      {/* WHAT IS IELTS */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          src="/ielts.jpg"
          alt="IELTS Exam"
          className="rounded-2xl border border-white/20 shadow-xl w-full h-auto object-cover"
        />

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 to-orange-300 text-transparent bg-clip-text">
            What is IELTS?
          </h2>

          <p className="text-gray-300 mt-3 leading-relaxed text-sm md:text-base">
            IELTS evaluates your English skills in Listening, Reading, Writing, and Speaking.
            <br /><br />
            It is required for higher studies, work visas, and PR applications in countries like:
            UK, USA, Canada, Australia, New Zealand, and more.
          </p>
        </motion.div>

      </section>

      {/* MODULES */}
      <section className="py-16 md:py-20 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-300 via-yellow-300 to-orange-400 text-transparent bg-clip-text">
          IELTS Exam Modules
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10 max-w-7xl mx-auto">
          {[
            { title: "Listening", desc: "4 sections • 40 questions • 30 minutes" },
            { title: "Reading", desc: "3 sections • 40 questions • 60 minutes" },
            { title: "Writing", desc: "2 tasks • 60 minutes" },
            { title: "Speaking", desc: "3 rounds • 11–14 minutes" },
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-5 sm:p-6 bg-white/5 border border-white/10 rounded-2xl"
            >
              <h3 className="text-xl md:text-2xl font-bold">{m.title}</h3>
              <p className="text-gray-300 mt-2 text-sm md:text-base">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* IMAGE SECTION */}
     <section className="p-4 flex justify-center">
  <motion.img
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    src="/ielts exam.jpg"
    alt="IELTS Exam Info"
    className="rounded-2xl border border-white/20 shadow-xl 
               w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] 
               h-auto object-cover"
  />
</section>


      {/* OUR SERVICES */}
      <section className="py-16 md:py-20 text-center bg-[#111] px-4">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-orange-300 to-blue-400 bg-clip-text text-transparent">
          Our IELTS Services
        </h2>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
          We provide complete IELTS coaching, exam registration, and documentation support.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 max-w-7xl mx-auto">

          {/* SERVICE 1 */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold">IELTS Coaching</h3>
            <p className="text-gray-300 mt-2 text-sm md:text-base leading-relaxed">
              ✔ Daily Classes <br /> ✔ Speaking Practice <br /> ✔ Mock Tests <br /> ✔ Expert Trainers
            </p>
          </motion.div>

          {/* SERVICE 2 */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold">IELTS Exam Registration</h3>
            <p className="text-gray-300 mt-2 text-sm md:text-base leading-relaxed">
              ✔ Slot Booking (IDP/BC) <br /> ✔ Available Dates <br /> ✔ CB & PB Guidance
            </p>
          </motion.div>

          {/* SERVICE 3 */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold">Required Documentation</h3>
            <p className="text-gray-300 mt-2 text-sm md:text-base leading-relaxed">
              ✔ Passport Check <br /> ✔ Test Instructions <br /> ✔ TRF Support <br /> ✔ University Help
            </p>
          </motion.div>

        </div>
      </section>

      {/* RULES */}
      <section className="py-16 md:py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-green-300 to-blue-300 text-transparent bg-clip-text">
          IELTS Exam Rules & Guidelines
        </h2>

        <ul className="mt-10 space-y-4 text-gray-300 text-sm md:text-lg leading-relaxed px-2">
          <li>✔ Carry your original passport.</li>
          <li>✔ Reach 30 minutes early.</li>
          <li>✔ No electronics allowed.</li>
          <li>✔ Speaking test may be on another day.</li>
          <li>✔ No extra time in Listening test.</li>
          <li>✔ Answers must be in English only.</li>
          <li>✔ Follow invigilator instructions.</li>
        </ul>
      </section>

      {/* BAND SCORE */}
      <section className="py-16 md:py-20 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
          IELTS Band Score System
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10 max-w-6xl mx-auto">
          {[
            { score: "Band 9", meaning: "Expert User" },
            { score: "Band 8", meaning: "Very Good User" },
            { score: "Band 7", meaning: "Good User" },
            { score: "Band 6", meaning: "Competent User" },
          ].map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl"
            >
              <h3 className="text-3xl md:text-4xl font-bold">{b.score}</h3>
              <p className="text-gray-300 mt-2 text-sm md:text-base">{b.meaning}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
