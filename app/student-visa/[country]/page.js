"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useRef } from "react";
import FreeCounsellingPage from "../../free-counselling/page";
// ================== COUNTRY DATA ==================
const countryData = {
  "united-states": {
    title: "Study in the United States: A Guide for Indian Students",
    banner: "/American-Flag.jpg",
    about: `The United States remains the dream destination for Indian students. 
It offers world-class education, cutting-edge research facilities, and career opportunities that make it a leader in global education.`,
    highlights: [
      "Home to Ivy League and top-ranked global universities.",
      "Flexible programs with research and internship opportunities.",
      "Generous scholarships and assistantships for international students.",
      "Strong focus on innovation and entrepreneurship.",
      "OPT & STEM extension allowing work experience after studies.",
    ],
    costs: [
      { program: "Undergraduate", cost: "USD 20,000 – 45,000" },
      { program: "Masters", cost: "USD 25,000 – 50,000" },
      { program: "PhD", cost: "USD 28,000 – 55,000" },
      { program: "Community College", cost: "USD 12,000 – 25,000" },
    ],
    universities: [
      {
        name: "Harvard University",
        image: "/harvard.jpg",
        rank: "QS Rank: #5",
        students: "International Students: 21,000+",
        courses: ["MBA", "Law", "Medicine", "Public Policy"],
      },
      {
        name: "Massachusetts Institute of Technology (MIT)",
        image: "/mit.jpg",
        rank: "QS Rank: #1",
        students: "International Students: 11,000+",
        courses: ["Engineering", "AI", "Robotics", "Data Science"],
      },
      {
        name: "Stanford University",
        image: "/stanford.jpg",
        rank: "QS Rank: #3",
        students: "International Students: 15,000+",
        courses: ["Computer Science", "Design", "Business", "Economics"],
      },
      {
        name: "University of California, Berkeley",
        image: "/berkeley.jpg",
        rank: "QS Rank: #10",
        students: "International Students: 40,000+",
        courses: ["Engineering", "Law", "Environmental Science"],
      },
      {
        name: "Princeton University",
        image: "/princeton.jpg",
        rank: "QS Rank: #16",
        students: "International Students: 8,000+",
        courses: ["Economics", "Physics", "Public Affairs", "Mathematics"],
      },
    ],
  },

  "united-kingdom": {
    title: "Study in the United Kingdom: A Guide for Indian Students",
    banner: "/uk flag.jpeg",
    about: `The UK offers prestigious degrees, shorter course durations, and globally respected education in an English-speaking environment.`,
    highlights: [
      "1-year postgraduate degrees saving time and cost.",
      "Post-Study Work (Graduate Route) up to 2 years.",
      "Top universities like Oxford, Cambridge, and Imperial.",
      "Cultural diversity and strong Indian student presence.",
      "Scholarships like Chevening and GREAT Scholarships.",
    ],
    costs: [
      { program: "Undergraduate", cost: "GBP 12,000 – 25,000" },
      { program: "Masters", cost: "GBP 14,000 – 30,000" },
      { program: "PhD", cost: "GBP 15,000 – 32,000" },
    ],
    universities: [
      {
        name: "University of Oxford",
        image: "/oxford.jpg",
        rank: "QS Rank: #3",
        students: "International Students: 25,000+",
        courses: ["Law", "Medicine", "Humanities", "Economics"],
      },
      {
        name: "University of Cambridge",
        image: "/cambridge.jpg",
        rank: "QS Rank: #2",
        students: "International Students: 24,000+",
        courses: ["Engineering", "Architecture", "Mathematics"],
      },
      {
        name: "Imperial College London",
        image: "/imperial.jpg",
        rank: "QS Rank: #6",
        students: "International Students: 22,000+",
        courses: ["Medicine", "Engineering", "Business", "Data Science"],
      },
      {
        name: "University of Manchester",
        image: "/manchester.jpg",
        rank: "QS Rank: #32",
        students: "International Students: 40,000+",
        courses: ["Marketing", "Economics", "Engineering"],
      },
      {
        name: "London School of Economics (LSE)",
        image: "/lse.jpg",
        rank: "QS Rank: #45",
        students: "International Students: 11,000+",
        courses: ["Finance", "Economics", "Politics", "Sociology"],
      },
    ],
  },

  australia: {
    title: "Study in Australia: A Guide for Indian Students",
    banner: "/Australia flag.jpeg",
    about: `Australia continues to be one of the top choices for Indian students seeking a global education.`,
    highlights: [
      "8 Australian universities ranked in the world’s top 100.",
      "22,000+ courses across 1,100+ institutions.",
      "Globally recognised degrees with excellent career outcomes.",
      "Generous scholarships and government support.",
      "Post-study work options under bilateral agreements.",
    ],
    costs: [
      { program: "Diploma / Advanced Diploma", cost: "AUD 4,000 – 22,000" },
      { program: "Undergraduate", cost: "AUD 15,000 – 35,000" },
      { program: "Masters", cost: "AUD 20,000 – 42,000" },
      { program: "PhD", cost: "AUD 20,000 – 42,000" },
      { program: "English Courses", cost: "AUD 350 – 450 per week" },
    ],
    universities: [
      {
        name: "The University of Melbourne",
        image: "/melbourne.jpg",
        rank: "QS Rank: #37",
        students: "21,600+",
        courses: ["Business", "Law", "Science", "Medicine"],
      },
      {
        name: "Australian National University",
        image: "/anu.jpg",
        rank: "QS Rank: #34",
        students: "6,496",
        courses: ["Engineering", "Economics", "Public Policy"],
      },
      {
        name: "University of Queensland",
        image: "/queensland.jpg",
        rank: "QS Rank: #43",
        students: "21,574",
        courses: ["Pharmacy", "Environmental Science", "Biology"],
      },
      {
        name: "UNSW Sydney",
        image: "/unsw.jpg",
        rank: "QS Rank: #45",
        students: "22,300",
        courses: ["Computer Science", "Business", "Design"],
      },
      {
        name: "Monash University",
        image: "/monash.jpg",
        rank: "QS Rank: #42",
        students: "20,100",
        courses: ["Pharmacy", "Medicine", "Education", "IT"],
      },
    ],
  },

  "new-zealand": {
    title: "Study in New Zealand: A Guide for Indian Students",
    banner: "/New Zealand.jpeg",
    about: `New Zealand provides globally recognized education, post-study work rights, and a peaceful living environment.`,
    highlights: [
      "8 globally ranked public universities.",
      "Post-study work visa up to 3 years.",
      "Affordable cost of living and education.",
      "Safe and welcoming society.",
    ],
    costs: [
      { program: "Undergraduate", cost: "NZD 22,000 – 32,000" },
      { program: "Masters", cost: "NZD 26,000 – 37,000" },
      { program: "PhD", cost: "NZD 6,000 – 9,000 (subsidized)" },
    ],
    universities: [
      {
        name: "University of Auckland",
        image: "/auckland.jpg",
        rank: "QS Rank: #68",
        students: "40,000+",
        courses: ["Business", "Engineering", "Science"],
      },
      {
        name: "Victoria University of Wellington",
        image: "/victoria.jpg",
        rank: "QS Rank: #236",
        students: "22,000+",
        courses: ["Law", "Finance", "Public Policy"],
      },
      {
        name: "University of Otago",
        image: "/otago.jpg",
        rank: "QS Rank: #205",
        students: "20,000+",
        courses: ["Medicine", "Dentistry", "Health Sciences"],
      },
      {
        name: "Massey University",
        image: "/massey.jpg",
        rank: "QS Rank: #284",
        students: "30,000+",
        courses: ["Design", "Agriculture", "Technology"],
      },
      {
        name: "University of Canterbury",
        image: "/canterbury.jpg",
        rank: "QS Rank: #256",
        students: "17,000+",
        courses: ["Engineering", "Education", "Computer Science"],
      },
    ],
  },

  japan: {
    title: "Study in Japan: A Guide for Indian Students",
    banner: "/Japan.jpeg",
    about: `Japan provides world-class education, innovation, and technological advancement.`,
    highlights: [
      "Affordable tuition and cost of living.",
      "MEXT and JASSO scholarships for international students.",
      "Safe, modern, and technologically advanced society.",
    ],
    costs: [
      { program: "Undergraduate", cost: "JPY 535,000 – 1,200,000 / year" },
      { program: "Masters / PhD", cost: "JPY 550,000 – 1,200,000 / year" },
    ],
    universities: [
      {
        name: "University of Tokyo",
        image: "/tokyo.jpg",
        rank: "QS Rank: #28",
        students: "28,000+",
        courses: ["Engineering", "AI", "Physics", "Economics"],
      },
      {
        name: "Kyoto University",
        image: "/kyoto.jpg",
        rank: "QS Rank: #46",
        students: "23,000+",
        courses: ["Biology", "Chemistry", "Mathematics"],
      },
      {
        name: "Waseda University",
        image: "/waseda.jpg",
        rank: "QS Rank: #199",
        students: "45,000+",
        courses: ["Business", "Law", "Political Science"],
      },
      {
        name: "Osaka University",
        image: "/osaka.jpg",
        rank: "QS Rank: #80",
        students: "23,000+",
        courses: ["Medicine", "Engineering", "IT"],
      },
      {
        name: "Tohoku University",
        image: "/tohoku.jpg",
        rank: "QS Rank: #113",
        students: "18,000+",
        courses: ["Physics", "Robotics", "Science"],
      },
    ],
  },

  china: {
    title: "Study in China: A Guide for Indian Students",
    banner: "/China flag.jpeg",
    about: `China offers affordable education in MBBS, Engineering, and Business with globally recognized degrees.`,
    highlights: [
      "Low-cost education with global quality.",
      "MBBS programs in English for Indian students.",
      "CSC and provincial scholarships available.",
      "Strong India-China academic relations.",
    ],
    costs: [
      { program: "Undergraduate / MBBS", cost: "CNY 20,000 – 45,000" },
      { program: "Masters", cost: "CNY 25,000 – 50,000" },
      { program: "PhD", cost: "CNY 30,000 – 55,000" },
    ],
    universities: [
      {
        name: "Peking University",
        image: "/peking.jpg",
        rank: "QS Rank: #17",
        students: "32,000+",
        courses: ["Law", "Economics", "Engineering"],
      },
      {
        name: "Tsinghua University",
        image: "/tsinghua.jpg",
        rank: "QS Rank: #14",
        students: "36,000+",
        courses: ["Computer Science", "Architecture", "AI"],
      },
      {
        name: "Fudan University",
        image: "/fudan.jpg",
        rank: "QS Rank: #50",
        students: "30,000+",
        courses: ["Business", "Medicine", "Public Health"],
      },
      {
        name: "Zhejiang University",
        image: "/zhejiang.jpg",
        rank: "QS Rank: #44",
        students: "55,000+",
        courses: ["Mechanical Engineering", "Data Science"],
      },
      {
        name: "Shanghai Jiao Tong University",
        image: "/sjtu.jpg",
        rank: "QS Rank: #46",
        students: "41,000+",
        courses: ["Engineering", "Finance", "MBA"],
      },
    ],
  },
};

// ================== MAIN COMPONENT ==================
export default function CountryPage() {
  const { country } = useParams();
  const data = countryData[country];
  const topRef = useRef(null);

  if (!data)
    return (
      <div className="text-center text-white py-40 text-xl">
        Country information coming soon...
      </div>
    );

  const scrollToUniversities = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative text-white overflow-hidden">
      {/* Background Motion Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 5px)",
        }}
      ></div>

      {/* Hero Section */}
      <div className="relative h-[450px] flex items-center justify-center">
        <Image
          src={data.banner}
          alt={data.title}
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/80"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            {data.title}
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore opportunities to study in one of the world’s most dynamic
            education destinations.
          </p>
          <button
            onClick={scrollToUniversities}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full font-semibold hover:opacity-90 transition"
          >
            View Top Universities ↓
          </button>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-10 py-16">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-semibold mb-4">
            Why Choose Australia for Your Studies?
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">{data.about}</p>

          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {data.highlights.map((point, idx) => (
              <li key={idx} className="hover:text-blue-400 transition">
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Cost Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="text-2xl font-bold mb-4 text-blue-300">
            Estimated Annual Costs (AUD)
          </h3>
          <table className="w-full border border-white/10 text-gray-300 text-sm">
            <thead className="bg-white/10 text-white">
              <tr>
                <th className="p-3 text-left">Program Type</th>
                <th className="p-3 text-left">Approx Annual Tuition</th>
              </tr>
            </thead>
            <tbody>
              {data.costs.map((c, i) => (
                <tr
                  key={i}
                  className="border-t border-white/10 hover:bg-white/5 transition"
                >
                  <td className="p-3">{c.program}</td>
                  <td className="p-3">{c.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Top Universities Section */}
        <div ref={topRef}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-4xl font-bold mb-10 bg-gradient-to-r from-blue-300 via-cyan-400 to-blue-600 bg-clip-text text-transparent"
          >
            Top Universities in Australia
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {data.universities.map((uni, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/10 rounded-2xl border border-white/10 hover:bg-white/20 hover:scale-[1.03] transition-all duration-300 shadow-lg overflow-hidden flex flex-col justify-between"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={uni.image}
                    alt={uni.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {uni.name}
                  </h3>
                  <p className="text-sm text-gray-400">{uni.rank}</p>
                  <p className="text-sm text-gray-400">{uni.students}</p>

                  <div className="flex flex-wrap gap-2 my-3">
                    {uni.courses.map((c, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full"
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  <button className="mt-auto bg-gradient-to-r from-blue-300 via-cyan-400 to-blue-600 bg-clip-text text-transparent   text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-400 transition">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
         <FreeCounsellingPage/>
    </section>
  );
}
