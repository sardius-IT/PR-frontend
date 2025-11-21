"use client";

import { motion } from "framer-motion";

export default function FullStackJavaPage() {
  return (
    <main className="relative text-white bg-[#0a0a0a] min-h-screen">

      {/* HEADER SECTION */}
      <section className="pt-24 pb-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Full Stack Java Development{" "}
          <span className="bg-gradient-to-r from-blue-400 via-orange-300 to-blue-400 text-transparent bg-clip-text">
            Complete Mastery Program
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 max-w-xl md:max-w-3xl mx-auto text-gray-300 text-sm sm:text-base leading-relaxed"
        >
          Master Java, Spring Boot, APIs, MySQL, React.js, and complete real-time 
          full-stack projects with professional coaching & hands-on coding.
        </motion.p>
      </section>

      {/* WHAT IS FULL STACK JAVA */}
      <section className="max-w-6xl mx-auto px-4 py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          src="/java.jpg"
          alt="Full Stack Java"
          className="rounded-2xl border border-white/20 shadow-xl w-full h-auto object-cover"
        />

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 to-orange-300 text-transparent bg-clip-text">
            What is Full Stack Java Development?
          </h2>

          <p className="text-gray-300 mt-3 leading-relaxed text-sm md:text-base">
            Full Stack Java Developers build both the **frontend** and **backend** of 
            web applications.  
            They work with Java, Spring Boot, REST APIs, databases, cloud deployment, 
            and UI frameworks like React.js.
          </p>
        </motion.div>

      </section>

      {/* JAVA PROGRAMMING CLASSES */}
      <section className="py-16 md:py-20 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-300 text-transparent bg-clip-text">
          Java Programming – Classes & Methods
        </h2>

        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Below are the core programming topics covered in our Java OOP and backend training.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-7xl mx-auto">

          {/* CLASS 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl"
          >
            <h3 className="text-xl font-bold">1️⃣ Java Classes & Objects</h3>
            <p className="text-gray-300 mt-2 text-sm md:text-base leading-relaxed">
              ✔ Class Structure <br />
              ✔ Constructors <br />
              ✔ Object Creation <br />
              ✔ this & super keywords
            </p>
          </motion.div>

          {/* CLASS 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl"
          >
            <h3 className="text-xl font-bold">2️⃣ OOP Methods</h3>
            <p className="text-gray-300 mt-2 text-sm md:text-base leading-relaxed">
              ✔ Static & Instance Methods <br />
              ✔ Method Overloading <br />
              ✔ Method Overriding <br />
              ✔ Access Modifiers
            </p>
          </motion.div>

          {/* CLASS 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl"
          >
            <h3 className="text-xl font-bold">3️⃣ Inheritance & Polymorphism</h3>
            <p className="text-gray-300 mt-2 text-sm md:text-base leading-relaxed">
              ✔ Single/Multilevel Inheritance <br />
              ✔ Abstraction <br />
              ✔ Interfaces <br />
              ✔ Polymorphism Concepts
            </p>
          </motion.div>

          {/* CLASS 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl"
          >
            <h3 className="text-xl font-bold">4️⃣ Collections Framework</h3>
            <p className="text-gray-300 mt-2 text-sm md:text-base">
              ✔ ArrayList <br />
              ✔ HashMap <br />
              ✔ HashSet <br />
              ✔ Iterators & Streams
            </p>
          </motion.div>

          {/* CLASS 5 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl"
          >
            <h3 className="text-xl font-bold">5️⃣ Exception & File Handling</h3>
            <p className="text-gray-300 mt-2 text-sm md:text-base">
              ✔ try–catch–finally <br />
              ✔ Custom Exceptions <br />
              ✔ FileReader / FileWriter <br />
              ✔ Serialization
            </p>
          </motion.div>

          {/* CLASS 6 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl"
          >
            <h3 className="text-xl font-bold">6️⃣ Java 8+ Features</h3>
            <p className="text-gray-300 mt-2 text-sm md:text-base">
              ✔ Lambda Expressions <br />
              ✔ Stream API <br />
              ✔ Functional Interfaces <br />
              ✔ Optional Class
            </p>
          </motion.div>

        </div>
      </section>

      {/* FULL STACK TOPICS */}
      <section className="py-16 md:py-20 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text">
          Full Stack Modules Covered
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="text-xl font-bold">Frontend Development</h3>
            <p className="text-gray-300 mt-3 text-sm md:text-base leading-relaxed">
              ✔ HTML5, CSS3, JavaScript <br />
              ✔ React.js (Hooks, Routing) <br />
              ✔ Responsive UI Designs
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="text-xl font-bold">Backend Development</h3>
            <p className="text-gray-300 mt-3 text-sm md:text-base leading-relaxed">
              ✔ Core Java + Advanced Java <br />
              ✔ Spring Boot REST APIs <br />
              ✔ Authentication & JWT
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="text-xl font-bold">Database + Deployment</h3>
            <p className="text-gray-300 mt-3 text-sm md:text-base leading-relaxed">
              ✔ MySQL & JPA/Hibernate <br />
              ✔ Postman & API Testing <br />
              ✔ Deployment (AWS/Render)
            </p>
          </motion.div>

        </div>
      </section>

      {/* PLACEMENT SERVICES */}
      <section className="py-16 md:py-20 text-center bg-[#111] px-4">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-300 text-transparent bg-clip-text">
          Placement & Career Support
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">

          <motion.div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="text-xl font-bold">Resume Building</h3>
            <p className="text-gray-300 mt-2">
              ✔ ATS Friendly Resume  
            </p>
          </motion.div>

          <motion.div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="text-xl font-bold">Interview Preparation</h3>
            <p className="text-gray-300 mt-2">
              ✔ Java + SQL + Spring Questions  
            </p>
          </motion.div>

          <motion.div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="text-xl font-bold">Live Projects</h3>
            <p className="text-gray-300 mt-2">
              ✔ Real-time CRUD Projects  
            </p>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
