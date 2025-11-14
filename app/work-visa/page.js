"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FreeCounsellingPage from "../free-work-visa/page";
export default function WorkVisaPage() {
  return (
    <section className="bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-white min-h-screen py-20">
      {/* Hero Section */}
      <div className="relative h-[450px] flex items-center justify-center">
        <Image
          src="/work-visa.jpg"
          alt="Work Visa"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-yellow-300 to-blue-400 bg-clip-text text-transparent mb-4">
            Work Visa Guidance
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Unlock your global career opportunities with expert visa support and
            end-to-end assistance from <span className="text-blue-400">FlyHigh PR</span>.
          </p>
        </motion.div>
      </div>

      {/* Page Content */}
      <div className="container mx-auto px-6 md:px-10 py-16 space-y-20">
        {/* 1️⃣ Types of Work Visas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-300">
            Types of Work Visas
          </h2>
          <p className="text-gray-300 mb-6">
            Each country offers various work visa options depending on your
            purpose, skills, and employment type. Here are the major categories:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Skilled Worker Visa",
                desc: "For professionals with job offers in specialized fields such as IT, engineering, or healthcare.",
              },
              {
                title: "Temporary Work Visa",
                desc: "For individuals taking short-term contracts, seasonal work, or project-based jobs.",
              },
              {
                title: "Business / Investor Visa",
                desc: "For entrepreneurs and investors establishing or investing in international businesses.",
              },
              {
                title: "Post-Study Work Visa",
                desc: "For graduates seeking to work abroad after completing higher education.",
              },
              {
                title: "Intra-Company Transfer Visa",
                desc: "For employees transferring between branches of the same company globally.",
              },
              {
                title: "Work Holiday Visa",
                desc: "For young professionals seeking short-term employment and travel opportunities.",
              },
            ].map((visa, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 border border-white/10 rounded-2xl p-6 hover:bg-white/20 transition"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-300">
                  {visa.title}
                </h3>
                <p className="text-gray-300">{visa.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 2️⃣ Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-green-300">
            Benefits of a Work Visa
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>Earn international work experience and higher income.</li>
            <li>Opportunity for permanent residency in many countries.</li>
            <li>Access to healthcare, benefits, and professional growth.</li>
            <li>Exposure to global culture and working environments.</li>
            <li>Ability to sponsor dependents (in many visa types).</li>
          </ul>
        </motion.div>

        {/* 3️⃣ Application Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-orange-300">
            Work Visa Application Process
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-300">
            <li>Secure a valid job offer or sponsorship from an employer abroad.</li>
            <li>Gather required documents (passport, qualifications, experience, offer letter, etc.).</li>
            <li>Submit visa application and pay applicable processing fees.</li>
            <li>Attend biometrics and/or visa interview (if required).</li>
            <li>Receive your work visa and start planning relocation.</li>
          </ol>
          <p className="mt-4 text-gray-400 italic">
            💡 Tip: Processing time varies by country — typically 4 to 12 weeks.
          </p>
        </motion.div>

        {/* 4️⃣ Our Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-cyan-300">
            Our Work Visa Assistance Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Personalized eligibility assessment & country selection.",
              "Document verification and visa file preparation.",
              "Job search and employer tie-up support (for select countries).",
              "Interview preparation and pre-departure guidance.",
              "Filing visa applications with accuracy and tracking progress.",
              "Post-arrival support including accommodation guidance.",
            ].map((service, i) => (
              <div
                key={i}
                className="flex items-start space-x-3 bg-white/10 rounded-xl p-4"
              >
                <span className="text-blue-400 text-xl">✔</span>
                <p className="text-gray-300">{service}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 5️⃣ Rules & Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-yellow-300">
            General Rules & Requirements
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>Must hold a valid passport with at least 6 months validity.</li>
            <li>Proof of job offer or sponsorship from an approved employer.</li>
            <li>Educational and professional qualifications required by the job role.</li>
            <li>Clean background check and medical examination (in most cases).</li>
            <li>Demonstration of sufficient funds or employer support.</li>
            <li>Compliance with work rights, duration limits, and visa conditions.</li>
          </ul>
        </motion.div>

        {/* 6️⃣ Processing Time & Cost */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-pink-300">
            Processing Time & Cost
          </h2>
          <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
            <p className="text-gray-300 mb-2">
              ⏳ <strong>Processing Time:</strong> 4 – 12 weeks (depends on country & visa type)
            </p>
            <p className="text-gray-300 mb-2">
              💰 <strong>Visa Fees:</strong> USD 150 – 600 (varies by country)
            </p>
            <p className="text-gray-300">
              🧾 <strong>Service Charges:</strong> Contact{" "}
              <span className="text-blue-400">FlyHigh PR</span> for transparent
              pricing and customized visa assistance packages.
            </p>
          </div>
        </motion.div>
      </div>
      <FreeCounsellingPage/>
    </section>
  );
}
