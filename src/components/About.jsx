import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function About() {
  return (
    <div>
      <section
        id="about"
        className="about mx-4 my-6 md:my-8 md:mx-6 lg:my-12 lg:mx-48"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 lg:py-0">
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.75 }}
            className="left flex justify-center items-center"
          >
            <img
              src="../public/gradpic.JPEG"
              className="w-full h-auto max-w-[300px] max-h-[300px] lg:max-w-[500px] lg:max-h-[500px] p-3 lg:p-5 rounded-full border-4 border-blue-700"
              alt=""
            />
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.75 }}
            className="right flex flex-col justify-center p-2 space-y-2 md:space-y-3 lg:col-span-2 lg:p-7 text-base lg:text-2xl lg:h-[60vh]"
          >
            <h1 className="text-gray-400">Hello! My name is</h1>
            <h1 className="text-gray-200 text-3xl md:text-4xl">
              Arianne Felize Manibo
            </h1>
            <h1 className="text-blue-700">Web Developer</h1>
            <p className="text-gray-200 text-justify">
              A passionate Junior Web Developer Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Repellendus repudiandae maiores
              eaque qui architecto, saepe nesciunt consectetur quam temporibus
              at? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
