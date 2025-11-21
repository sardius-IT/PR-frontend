"use client";

import { motion } from "framer-motion";

export default function GermanyExamPage() {
  return (
    <main className="relative text-white bg-[#0a0a0a] min-h-screen">

      {/* HEADER */}
      <section className="pt-24 pb-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Germany Language Exam{" "}
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
          The German Language Exam (Goethe / TELC) is required for Germany Study Visa,
          Work Visa, Job Seeker Visa, Nursing Jobs, and Permanent Residency (PR).
        </motion.p>
      </section>

      {/* WHAT IS THE EXAM */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          src="/grm.jpg"
          alt="Germany Exam"
          className="rounded-2xl border border-white/20 shadow-xl w-full h-auto object-cover"
        />

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 to-orange-300 text-transparent bg-clip-text">
            What is the German Language Exam?
          </h2>

          <p className="text-gray-300 mt-3 leading-relaxed text-sm md:text-base">
            The German Language Exam evaluates your ability to speak, read, write, 
            and understand German at levels from A1 to C2.
            <br /><br />
            It is required for Study Visa (A1–B2), Work Visa (B1–C1), Nursing Jobs 
            (B2), and PR (C1 recommended).
          </p>
        </motion.div>

      </section>

      {/* LEVELS SECTION */}
      <section className="py-16 md:py-20 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-300 via-yellow-300 to-orange-400 text-transparent bg-clip-text">
          German Language Levels (A1 – C2)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6 mt-10 max-w-7xl mx-auto">
          {[
            { level: "A1", desc: "Beginner – Simple sentences" },
            { level: "A2", desc: "Elementary – Basic communication" },
            { level: "B1", desc: "Intermediate – Work visa eligible" },
            { level: "B2", desc: "Upper Intermediate – Nursing jobs" },
            { level: "C1", desc: "Advanced – University level" },
            { level: "C2", desc: "Proficient – Near native" },
          ].map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center"
            >
              <h3 className="text-2xl font-bold">{l.level}</h3>
              <p className="text-gray-300 mt-2 text-sm md:text-base">{l.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* IMAGE SECTION */}
      <section className="p-4 flex justify-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          src="/germany Exam.png"
          alt="Learn German"
          className="rounded-2xl border border-white/20 shadow-xl 
                     w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] 
                     h-auto object-cover"
        />
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-20 text-center bg-[#111] px-4">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-orange-300 to-blue-400 bg-clip-text text-transparent">
          Our Germany Coaching Services
        </h2>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
          We provide German language coaching for A1 to B2 levels, exam registration support,
          and documentation assistance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 max-w-7xl mx-auto">

          {/* SERVICE 1 */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold">German Coaching</h3>
            <p className="text-gray-300 mt-2 text-sm md:text-base leading-relaxed">
              ✔ A1 to B2 Classes <br /> ✔ Daily Practice <br /> ✔ Speaking Sessions <br /> ✔ Mock Tests
            </p>
          </motion.div>

          {/* SERVICE 2 */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold">Exam Registration</h3>
            <p className="text-gray-300 mt-2 text-sm md:text-base leading-relaxed">
              ✔ Goethe Exam Booking <br /> ✔ TELC Registration <br /> ✔ Available Dates Info
            </p>
          </motion.div>

          {/* SERVICE 3 */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold">Required Documentation</h3>
            <p className="text-gray-300 mt-2 text-sm md:text-base leading-relaxed">
              ✔ Passport Help <br /> ✔ Exam Guidelines <br /> ✔ Certificate Support <br /> ✔ Visa Submission Help
            </p>
          </motion.div>

        </div>
      </section>

      {/* RULES */}
      <section className="py-16 md:py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-green-300 to-blue-300 text-transparent bg-clip-text">
          Germany Language Exam Rules
        </h2>

        <ul className="mt-10 space-y-4 text-gray-300 text-sm md:text-lg leading-relaxed px-2">
          <li>✔ Carry your original passport.</li>
          <li>✔ Reach 30 minutes early.</li>
          <li>✔ No electronic devices allowed.</li>
          <li>✔ Speaking test may be on a different day.</li>
          <li>✔ Follow examiner instructions strictly.</li>
          <li>✔ Answer only in German.</li>
        </ul>
      </section>

      {/* BAND SYSTEM */}
      <section className="py-16 md:py-20 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
          German CEFR Levels (A1 – C2)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 mt-10 max-w-7xl mx-auto">
          {[
            { score: "A1", meaning: "Beginner" },
            { score: "A2", meaning: "Elementary" },
            { score: "B1", meaning: "Intermediate" },
            { score: "B2", meaning: "Upper Intermediate" },
            { score: "C1", meaning: "Advanced" },
            { score: "C2", meaning: "Proficient" },
          ].map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold">{l.score}</h3>
              <p className="text-gray-300 mt-2 text-sm md:text-base">{l.meaning}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
