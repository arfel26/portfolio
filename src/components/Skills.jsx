import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Skills() {
  const frontendDevSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Vite.js",
    "Bootstrap",
    "TailwindCSS",
  ];

  const backendDevSkills = [
    "Node.js",
    "Express.js",
    "Authentication (JWT, OAuth)",
    "PHP",
  ];

  const webDesignSkills = ["Figma", "Photoshop", "Canva"];

  const databaseSkills = ["MySQL", "PL/SQL", "SQL"];

  const otherSkills = [
    "RESTful API",
    "IoT API",
    "API Integration",
    "Git",
    "Oracle Fusion Data Modeling",
    "Oracle Fusion Reports",
    "Premiere Pro",
  ];

  return (
    <div>
      <section
        id="skills"
        className="skills mx-6 md:mx-auto md:w-11/12 lg:max-w-screen-2xl flex flex-wrap items-center justify-center"
      >
        <div className="grid grid-cols-1 w-full py-4 text-gray-200">
          <div className="space-y-8">
            <motion.h1
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.75 }}
              className="text-4xl lg:text-5xl text-center"
            >
              Skills
            </motion.h1>
            <div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="skills space-y-4 md:space-y-6 lg:space-y-10"
            >
              <motion.div
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.75 }}
                className="frontend-dev flex flex-col space-y-2"
              >
                <h1 className="text-2xl lg:text-3xl mx-2 md:mx-4 text-gray-300">
                  Frontend Development
                </h1>
                <div className="fe-skills flex flex-wrap justify-start text-base md:text-xl lg:text-2xl">
                  {frontendDevSkills.map((frontendDevSkill) => (
                    <h1 className="px-4 py-2 transition-all hover:-translate-1 hover:scale-110 border-2 border-blue-700 duration-500 cursor-pointer rounded-md m-2 ">
                      {frontendDevSkill}
                    </h1>
                  ))}
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.75 }}
                className="backend-dev flex flex-col space-y-2"
              >
                <h1 className="text-2xl lg:text-3xl mx-2 md:mx-4 text-gray-300">
                  Backend Development
                </h1>
                <div className="fe-skills flex flex-wrap justify-start text-base md:text-xl lg:text-2xl">
                  {backendDevSkills.map((backendDevSkill) => (
                    <h1 className="px-4 py-2 transition-all hover:-translate-1 hover:scale-110 border-2 border-blue-700 duration-500 cursor-pointer rounded-md m-2">
                      {backendDevSkill}
                    </h1>
                  ))}
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.75 }}
                className="database flex flex-col space-y-2"
              >
                <h1 className="text-2xl lg:text-3xl mx-2 md:mx-4 text-gray-300">
                  Database Management
                </h1>
                <div className="fe-skills flex flex-wrap justify-start text-base md:text-xl lg:text-2xl">
                  {databaseSkills.map((databaseSkill) => (
                    <h1 className="px-4 py-2 transition-all hover:-translate-1 hover:scale-110 border-2 border-blue-700 duration-500 cursor-pointer rounded-md m-2">
                      {databaseSkill}
                    </h1>
                  ))}
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.75 }}
                className="web-design flex flex-col space-y-2"
              >
                <h1 className="text-2xl lg:text-3xl mx-2 md:mx-4 text-gray-300">
                  UX/UI
                </h1>
                <div className="fe-skills flex flex-wrap justify-start text-base md:text-xl lg:text-2xl">
                  {webDesignSkills.map((webDesignSkill) => (
                    <h1 className="px-4 py-2 transition-all hover:-translate-1 hover:scale-110 border-2 border-blue-700 duration-500 cursor-pointer rounded-md m-2">
                      {webDesignSkill}
                    </h1>
                  ))}
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.75 }}
                className="others flex flex-col space-y-2"
              >
                <h1 className="text-2xl lg:text-3xl mx-2 md:mx-4 text-gray-300">
                  Other
                </h1>
                <div className="fe-skills flex flex-wrap justify-start text-base md:text-xl lg:text-2xl">
                  {otherSkills.map((otherSkills) => (
                    <h1 className="px-4 py-2 transition-all hover:-translate-1 hover:scale-110 border-2 border-blue-700 duration-500 cursor-pointer rounded-md m-2">
                      {otherSkills}
                    </h1>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
