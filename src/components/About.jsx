import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function About() {
  return (
    <div>
      <section
        id="about"
        className="about mx-6 md:mx-auto md:w-11/12 lg:max-w-screen-2xl flex items-center justify-between"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 gap-4 md:h-[40vh] lg:h-[60vh]">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="left flex justify-center items-center p-2"
          >
            <img
              src="gradpic.jpeg"
              className="w-full h-auto max-w-[300px] max-h-[300px] lg:max-w-[500px] lg:max-h-[500px] p-3 lg:p-5 rounded-full border-4 border-blue-700"
              alt="Grad pic"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="right flex flex-col justify-center p-2 space-y-2 md:space-y-3 lg:col-span-2 lg:p-7 text-base md:text-xl lg:text-2xl"
          >
            <h1 className="text-gray-400">Hello! My name is</h1>
            <h1 className="text-gray-200 text-3xl md:text-4xl">
              Arianne Felize Manibo
            </h1>
            <h1 className="text-blue-700">Associate Software Engineer</h1>
            <p className="text-gray-200 text-justify">
              With expertise in HTML, CSS, JavaScript, React.js, Vite.js,
              Node.js, Express.js, SQL (MySQL, PL/SQL), and PHP. Skilled in API
              integrations, responsive web development, Oracle Fusion Data
              Modeling & Reports, and UX/UI design. Passionate about learning
              and solving complex challenges.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
