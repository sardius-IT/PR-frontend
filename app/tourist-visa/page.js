"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FreeCounsellingPage from "../free-tourist-visa/page";
export default function TouristVisaPage() {
  return (
    <section className="bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-white min-h-screen py-20">
      {/* Hero Section */}
      <div className="relative h-[450px] flex items-center justify-center">
        <Image
          src="/work-visa.jpg"
          alt="Tourist Visa"
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
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
            Tourist Visa Guidance
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Travel the world with confidence — <span className="text-blue-400">FlyHigh PR</span> helps you get your tourist or visitor visa quickly and smoothly.
          </p>
        </motion.div>
      </div>

      {/* Page Content */}
      <div className="container mx-auto px-6 md:px-10 py-16 space-y-20">
        {/* 1️⃣ Types of Tourist Visas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-300">
            Types of Tourist Visas
          </h2>
          <p className="text-gray-300 mb-6">
            Depending on your travel purpose and duration, the following are the main types of tourist and visitor visas:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Short-Term Tourist Visa",
                desc: "Issued for leisure travel, sightseeing, or visiting family and friends — typically valid for 30–90 days.",
              },
              {
                title: "Multiple Entry Visa",
                desc: "Allows multiple entries over a year or longer period for frequent travelers and business tourists.",
              },
              {
                title: "Transit Visa",
                desc: "Required if you are passing through a country on your way to another destination and leaving the airport transit area.",
              },
              {
                title: "Business Visitor Visa",
                desc: "For individuals visiting abroad for short business meetings, conferences, or trade events.",
              },
              {
                title: "Group / Family Visit Visa",
                desc: "For family members or groups traveling together under one application.",
              },
              {
                title: "Medical Visit Visa",
                desc: "For those seeking medical treatment or accompanying a patient abroad for healthcare.",
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
            Benefits of a Tourist Visa
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>Explore new countries and experience global cultures.</li>
            <li>Meet family and friends living abroad.</li>
            <li>Attend events, tourism activities, and festivals.</li>
            <li>Enjoy easy, short-term travel with simple documentation.</li>
            <li>Some countries allow limited business activities during your visit.</li>
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
            Tourist Visa Application Process
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-300">
            <li>Choose your travel destination and check visa requirements.</li>
            <li>Prepare necessary documents such as passport, photos, and financial proof.</li>
            <li>Submit your application online or at the visa application center.</li>
            <li>Schedule biometrics or an interview (if required).</li>
            <li>Receive your visa and travel confirmation within the given timeline.</li>
          </ol>
          <p className="mt-4 text-gray-400 italic">
            💡 Processing timelines depend on the destination — generally 5 to 15 working days.
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
            Our Tourist Visa Assistance Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Expert consultation on destination-specific visa requirements.",
              "Document verification and visa file preparation.",
              "Filling and submission of visa application forms.",
              "Guidance on travel insurance and financial proofs.",
              "Interview and biometric appointment scheduling.",
              "End-to-end tracking until visa decision.",
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
            Rules & Requirements
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>Your passport must be valid for at least 6 months beyond your intended stay.</li>
            <li>Provide proof of financial stability and return travel tickets.</li>
            <li>Medical insurance may be mandatory for certain destinations.</li>
            <li>Overstaying or working on a tourist visa is strictly prohibited.</li>
            <li>Follow the specific visa conditions and duration limits set by each country.</li>
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
              ⏳ <strong>Processing Time:</strong> 5 – 15 working days (depending on country)
            </p>
            <p className="text-gray-300 mb-2">
              💰 <strong>Visa Fees:</strong> USD 50 – 200 (country-specific)
            </p>
            <p className="text-gray-300">
              🧾 <strong>Service Charges:</strong> Contact{" "}
              <span className="text-blue-400">FlyHigh PR</span> for transparent pricing and complete visa support.
            </p>
          </div>
        </motion.div>
      </div>
      <FreeCounsellingPage/>
    </section>
  );
}
