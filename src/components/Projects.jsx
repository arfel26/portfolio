import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Projects() {
  return (
    <div>
      <section
        id="projects"
        className="projects mx-4 my-6 md:my-8 md:mx-6 lg:my-12 lg:mx-48"
      >
        <div className="text-gray-200 space-y-5 p-5">
          <motion.h1
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="text-4xl lg:text-5xl text-center"
          >
            Projects
          </motion.h1>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 md:p-3 lg:p-5 gap-5"
          >
            <div className="border-4 border-blue-700">
              <img src="isabook.png" alt="" />
            </div>
            <div className="md:p-3 space-y-2 md:space-y-4 text-justify">
              <h1 className="text-xl md:text-3xl">Isabook</h1>
              <div className="">
                <div className="flex flex-wrap space-x-2">
                  {["React", "TailwindCSS"].map((progLanguage) => (
                    <h1 className="text-lg py-1 px-2 rounded-lg bg-blue-700 transition-all hover:-translate-1 hover:bg-blue-600 duration-300 cursor-pointer mr-2 my-2 lg:me-3">
                      {progLanguage}
                    </h1>
                  ))}
                </div>
              </div>
              <p className="text-lg md:text-2xl">
                Isabook is an online platform that acts like a digital library,
                allowing users to browse and access information about a wide
                range of books. Users can search for titles, and read synopsis.
                Isabook aims to make it easy for readers to discover new books,
                and connect with their favorite genres, all in one convenient
                place.
              </p>
              <a
                href="https://arfel26.github.io/isabook/"
                target="_blank"
                className=""
              >
                <button className="border-2 border-blue-700 p-2 text-lg md:text-xl my-4 transition-all hover:-translate-1 hover:bg-blue-600 duration-300 rounded-md">
                  Live
                </button>
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 md:p-3 lg:p-5 gap-5"
          >
            <div className="border-4 border-blue-700">
              <img src="donate4ne.png" alt="" />
            </div>
            <div className="md:p-3 space-y-2 md:space-y-4 text-justify">
              <h1 className="text-xl md:text-3xl">Donate4NE</h1>
              <div className="">
                <div className="flex flex-wrap ">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "AJAX (using jQuery)",
                    "PHP",
                    "MySql",
                    "Bootstrap",
                  ].map((progLanguage) => (
                    <h1 className="text-lg py-1 px-2 rounded-lg bg-blue-700 transition-all hover:-translate-1 hover:bg-blue-600 duration-300 cursor-pointer mr-2 my-2 lg:me-3">
                      {progLanguage}
                    </h1>
                  ))}
                </div>
              </div>
              <p className="text-lg md:text-2xl">
                Donate4NE is a cross-platform management donation application
                for non-government organization in Nueva Ecija. It connects
                donors with those in need, making it easy to give items and
                raise funds. The platform helps collect and distribute essential
                items and allows NGOs to run fundraising campaigns.
              </p>
              <a
                href="https://drive.google.com/file/d/15BXpLGdQJ6U0_B5zv-JJZJFx4oEbUM7U/view?usp=drive_link"
                target="_blank"
                className=""
              >
                <button className="border-2 border-blue-700 p-2 text-lg md:text-xl my-4 transition-all hover:-translate-1 hover:bg-blue-600 duration-300 rounded-md ">
                  Walkthrough
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
