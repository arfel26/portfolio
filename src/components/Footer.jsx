import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Footer() {
  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };
  return (
    <div>
      <footer className="mx-auto w-full p-4 py-6 lg:py-8 bg-slate-900 text-gray-200 text-lg">
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.75 }}
          className="flex justify-center items-center flex-col space-y-3"
        >
          <ul className="hidden md:flex md:space-x-8">
            <li>
              <a
                href="#about"
                className="transition-all hover:-translate-1 hover:text-blue-700 duration-500"
                onClick={handleScroll}
              >
                About
              </a>
            </li>
            <li>
              {" "}
              <a
                href="#skills"
                className="transition-all hover:-translate-1 hover:text-blue-700 duration-500"
                onClick={handleScroll}
              >
                Skills
              </a>
            </li>
            <li>
              {" "}
              <a
                href="#projects"
                className="transition-all hover:-translate-1 hover:text-blue-700 duration-500"
                onClick={handleScroll}
              >
                Projects
              </a>
            </li>
            <li>
              {" "}
              <a
                href="#contact"
                className="transition-all hover:-translate-1 hover:text-blue-700 duration-500"
                onClick={handleScroll}
              >
                Contact
              </a>
            </li>
            z
          </ul>
          <hr className="hidden md:w-[70%] ld:w-[40%]" />
          <ul>
            <li className="text-gray-400 text-center">
              © 2024 Arianne Felize O. Manibo. All rights reserved.
            </li>
          </ul>
        </motion.div>
      </footer>
    </div>
  );
}

export default Footer;
