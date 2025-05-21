import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { HiExternalLink } from "react-icons/hi";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div>
      <section
        id="projects"
        className="projects mx-6 md:mx-auto md:w-11/12 lg:max-w-screen-2xl flex flex-wrap items-center justify-center"
      >
        <div className="text-gray-200 space-y-5">
          <motion.h1
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.75 }}
            className="text-4xl lg:text-5xl text-center"
          >
            Projects
          </motion.h1>
          <div className="projects">
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.75 }}
              className="grid grid-cols-1 lg:grid-cols-2 md:p-3 lg:p-5 gap-4"
            >
              <div className="border-4 border-blue-700 m-auto">
                <img src="ulamgen.png" alt="" />
              </div>
              <div className="md:p-3 space-y-2 md:space-y-4 text-justify">
                <h1 className="text-xl md:text-3xl">Ulam Generator</h1>
                <div className="flex flex-wrap justify-start text-base md:text-xl lg:text-2xl">
                  {[
                    "React.js (Vite.js)",
                    "Node.js (Express.js)",
                    "TailwindCSS",
                  ].map((progLanguage) => (
                    <h1 className="text-lg px-2 py-1 transition-all hover:-translate-1 hover:scale-110 border-2 border-blue-700 duration-500 cursor-pointer rounded-md ml-0 mr-3 my-1">
                      {progLanguage}
                    </h1>
                  ))}
                </div>
                <p className="text-lg md:text-2xl">
                  A web app that suggests Filipino dishes based on the
                  ingredients you have at home. Simply input your available
                  ingredients, click "Generate Dish," and the app will recommend
                  meals you can cook — complete with ingredients and recipe
                  links.
                </p>
                <div className="buttons space-x-3">
                  <a
                    href="https://drive.google.com/file/d/1ZxVTRn9xYjfMKxub-233cE5-6yUaSsmB/view?usp=sharing"
                    target="_blank"
                    className=""
                  >
                    <button className="flex items-center text-center py-2 px-4 text-lg md:text-xl my-4 transition-all hover:-translate-1 bg-blue-700 hover:bg-blue-800 hover:scale-110 duration-500 rounded-md">
                      <HiExternalLink className="me-2" />
                      <span>Walkthrough</span>
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.75 }}
              className="grid grid-cols-1 lg:grid-cols-2 md:p-3 lg:p-5 gap-4"
            >
              <div className="border-4 border-blue-700 m-auto">
                <img src="smartaccess.png" alt="" />
              </div>
              <div className="md:p-3 space-y-2 md:space-y-4 text-justify">
                <h1 className="text-xl md:text-3xl">
                  Automated Guest Access System
                </h1>
                <div className="flex flex-wrap justify-start text-base md:text-xl lg:text-2xl">
                  {[
                    "React.js (Vite.js)",
                    "Node.js (Express.js)",
                    "MySql",
                    "NodeMailer",
                    "TailwindCSS",
                  ].map((progLanguage) => (
                    <h1 className="text-lg px-2 py-1 transition-all hover:-translate-1 hover:scale-110 border-2 border-blue-700 duration-500 cursor-pointer rounded-md ml-0 mr-3 my-1">
                      {progLanguage}
                    </h1>
                  ))}
                </div>
                <p className="text-lg md:text-2xl">
                  A web-based system that integrates Tuya IoT, Cloudbeds, and
                  Lodgify APIs to automate guest access in hotels and rental
                  properties. The platform retrieves guest check-in and
                  check-out details, generates a time-based smart lock code
                  using Tuya IoT, and automatically sends the code via email to
                  the guest.
                </p>
                {/* <div className="buttons space-x-3">
                <a
                  href="https://drive.google.com/file/d/15BXpLGdQJ6U0_B5zv-JJZJFx4oEbUM7U/view?usp=drive_link"
                  target="_blank"
                  className=""
                >
                  <button className="flex items-center text-center py-2 px-4 text-lg md:text-xl my-4 transition-all hover:-translate-1 bg-blue-700 hover:bg-blue-800 hover:scale-110 duration-500 rounded-md">
                    <HiExternalLink className="me-2" />
                    <span>Walkthrough</span>
                  </button>
                </a>
              </div> */}
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.75 }}
              className="grid grid-cols-1 lg:grid-cols-2 md:p-3 lg:p-5 gap-4"
            >
              <div className="border-4 border-blue-700 m-auto">
                <img src="guessgame.png" alt="" />
              </div>
              <div className="md:p-3 space-y-2 md:space-y-4 text-justify">
                <h1 className="text-xl md:text-3xl">Guessing Game</h1>
                <div className="flex flex-wrap justify-start text-base md:text-xl lg:text-2xl">
                  {["React.js (Vite.js)", "TailwindCSS"].map((progLanguage) => (
                    <h1 className="text-lg px-2 py-1 transition-all hover:-translate-1 hover:scale-110 border-2 border-blue-700 duration-500 cursor-pointer rounded-md ml-0 mr-3 my-1">
                      {progLanguage}
                    </h1>
                  ))}
                </div>
                <p className="text-lg md:text-2xl">
                  A sweet and simple guessing game made just for my girlfriend
                  on Valentine's Day. Once she guesses the special word, a
                  heartfelt Valentine’s proposal will be revealed!
                </p>
                <div className="flex buttons space-x-3">
                  <a
                    href="https://github.com/arfel26/guess-game"
                    target="_blank"
                    className=""
                  >
                    <button className="flex items-center text-center py-2 px-4 text-lg md:text-xl my-4 transition-all hover:-translate-1 bg-blue-700 hover:bg-blue-800 hover:scale-110 duration-500 rounded-md">
                      <FaCode className="me-2" />
                      <span>Code</span>
                    </button>
                  </a>
                  <a
                    href="https://arfel26.github.io/guess-game/"
                    target="_blank"
                    className=""
                  >
                    <button className="flex items-center text-center py-2 px-4 text-lg md:text-xl my-4 transition-all hover:-translate-1 bg-blue-700 hover:bg-blue-800 hover:scale-110 duration-500 rounded-md">
                      <HiExternalLink className="me-2" />
                      <span>Live</span>
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.75 }}
              className="grid grid-cols-1 lg:grid-cols-2 md:p-3 lg:p-5 gap-4"
            >
              <div className="border-4 border-blue-700 m-auto">
                <img src="donate4ne.png" alt="" />
              </div>
              <div className="md:p-3 space-y-2 md:space-y-4 text-justify">
                <h1 className="text-xl md:text-3xl">Donate4NE</h1>
                <div className="flex flex-wrap justify-start text-base md:text-xl lg:text-2xl">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "AJAX (using jQuery)",
                    "PHP",
                    "MySql",
                    "Bootstrap",
                  ].map((progLanguage) => (
                    <h1 className="text-lg px-2 py-1 transition-all hover:-translate-1 hover:scale-110 border-2 border-blue-700 duration-500 cursor-pointer rounded-md ml-0 mr-3 my-1">
                      {progLanguage}
                    </h1>
                  ))}
                </div>
                <p className="text-lg md:text-2xl">
                  A donation management application for Non-Government
                  Organizations (NGOs) in Nueva Ecija. It connects donors with
                  those in need, making it easy to donate items and raise funds.
                  The platform helps in collecting and distributing essential
                  items and allows NGOs to run fundraising campaigns.
                </p>
                <div className="buttons space-x-3">
                  <a
                    href="https://drive.google.com/file/d/15BXpLGdQJ6U0_B5zv-JJZJFx4oEbUM7U/view?usp=drive_link"
                    target="_blank"
                    className=""
                  >
                    <button className="flex items-center text-center py-2 px-4 text-lg md:text-xl my-4 transition-all hover:-translate-1 bg-blue-700 hover:bg-blue-800 hover:scale-110 duration-500 rounded-md">
                      <HiExternalLink className="me-2" />
                      <span>Walkthrough</span>
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.75 }}
              className="grid grid-cols-1 lg:grid-cols-2 md:p-3 lg:p-5 gap-4"
            >
              <div className="border-2 border-blue-700 p-2 m-auto">
                <a
                  href="https://drive.google.com/drive/folders/1_NnZMW4zRyHO1a6Zp7ZV_8yRDG54Ip85?usp=drive_link"
                  target="_blank"
                  className=""
                >
                  <img
                    src="design/game-vault.png"
                    className="transition-all hover:-translate-1 hover:scale-95 duration-1000"
                    alt=""
                  />
                </a>
              </div>
              <div className="border-2 border-blue-700 p-2 m-auto">
                <a
                  href="https://drive.google.com/drive/folders/1MOLecE-Yt8OOF88jnMbQSz3T1UjSPbRy?usp=drive_linkg"
                  target="_blank"
                  className=""
                >
                  <img
                    src="design/isa-portfolio.png"
                    className="transition-all hover:-translate-1 hover:scale-95 duration-1000"
                    alt=""
                  />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.75 }}
            className="flex justify-center md:p-3 lg:p-5"
          >
            <Link to="/projects">
              <button className="flex items-center text-center py-2 px-4 text-lg md:text-xl my-4 transition-all hover:-translate-1 bg-blue-700 hover:bg-blue-800 hover:scale-110 duration-500 rounded-md">
                <HiExternalLink className="me-2" />
                <span>More Projects</span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
