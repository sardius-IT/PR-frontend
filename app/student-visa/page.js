"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FreeCounsellingPage from "../free-counselling/page";
const countries = [
  {
    name: "United States",
    image: "/American-Flag.jpg",
    description:
      "Study at world-class universities like Harvard, MIT, and Stanford. We assist with F1 Visa, university shortlisting, SOPs, and documentation.",
  },
  {
    name: "United Kingdom",
    image: "/uk flag.jpeg",
    description:
      "Get guided for Tier-4 Student Visa applications. We help you with CAS letters, university selection, and pre-departure orientation.",
  },
  {
    name: "Australia",
    image: "/Australia flag.jpeg",
    description:
      "Apply confidently for your Subclass 500 visa. Our experts help you choose top Australian universities and prepare visa documents flawlessly.",
  },
  {
    name: "New Zealand",
    image: "/New Zealand.jpeg",
    description:
      "Pursue globally recognized education in New Zealand with post-study work options. We simplify the Student Visa process for you.",
  },
  {
    name: "Japan",
    image: "/Japan.jpeg",
    description:
      "Explore Japan’s unique education culture with scholarships and English-taught programs. We guide you through COE and visa filing.",
  },
  {
    name: "China",
    image: "/China flag.jpeg",
    description:
      "Study MBBS, Engineering, or Business in top-ranked Chinese universities. We handle admission, JW202 form, and visa application.",
  },
];

export default function StudentVisaPage() {
  return (
    <section className="relative pt-32 pb-20 text-white bg-gradient-to-r from-[#644d39] via-[#130e0e] to-[#271919] overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 5px)",
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
      
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Study Abroad with Confidence
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed">
            At <strong>FlyHigh PR Consultancy</strong>, we provide end-to-end
            guidance for your international education journey. From choosing the
            right university to visa approval, we’re with you every step of the
            way.
          </p>
        </motion.div>

        {/* Countries Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {countries.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/10 hover:bg-white/20 transition"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-cover opacity-90 hover:opacity-100 transition"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-blue-300 mb-2">
                  {c.name}
                </h2>
                <p className="text-gray-200 mb-4">{c.description}</p>
                <a
                  href={`/student-visa/${c.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-block mt-3 text-sm font-semibold text-blue-400 border border-blue-400 px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-black transition"
                >
                  Explore Universities →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Section */}
        <div className="mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent"
          >
            Our Expert Student Visa Services
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "University Shortlisting",
                desc: "We analyze your profile and recommend top global universities aligned with your academic and career goals.",
                icon: "🎓",
              },
              {
                title: "Visa Application & Documentation",
                desc: "We guide you through offer letters, SOPs, and complete visa documentation for seamless approval.",
                icon: "🛂",
              },
              {
                title: "Scholarship & Financial Aid",
                desc: "Our counselors help you find and apply for scholarships, bursaries, and grants available across top universities.",
                icon: "💰",
              },
              {
                title: "Pre-Departure Assistance",
                desc: "From flight booking to accommodation and travel insurance, we ensure you are ready for your international journey.",
                icon: "✈️",
              },
              {
                title: "Career Counseling",
                desc: "Get personalized career guidance and course selection advice to match your aspirations and market trends.",
                icon: "🧭",
              },
              {
                title: "Post-Study Support",
                desc: "We help you explore post-study work visa options and long-term immigration opportunities in your chosen country.",
                icon: "🌍",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/10 p-8 rounded-2xl border border-white/20 hover:bg-white/20 hover:scale-[1.03] transition-all duration-300 flex flex-col items-center"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <FreeCounsellingPage/>
      </div>
    </section>
  );
}
