import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Skills() {
  return (
    <div>
      <section
        id="skills"
        className="skills mx-4 my-6 md:my-8 md:mx-6 lg:my-12 lg:mx-48"
      >
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="flex justify-center items-center text-center py-5 text-gray-200"
        >
          <div className="flex flex-col justify-center space-y-5">
            <h1 className="text-4xl lg:text-5xl">Skills</h1>
            <div className="grid grid-cols-2 md:grid-cols-3">
              {[
                "html",
                "css",
                "javascript",
                "react",
                "php",
                "mysql",
                "bootstrap",
                "tailwindcss",
                "photoshop",
                "premiere pro",
              ].map((skill) => (
                <div
                  className="skill transition-all hover:-translate-1 hover:scale-110 duration-500 flex justify-center flex-col items-center m-3 p-3 space-y-3"
                  key={skill}
                >
                  <img
                    key={skill}
                    src={`skill logo/${skill}.svg`}
                    className="w-14 md:w-16 lg:w-20 h-auto m-auto object-cover"
                    alt={`${skill}.svg`}
                  />
                  <p className="text-center">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Skills;
