import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Services() {
  return (
    <div>
      <section
        id="services"
        className="services mx-6 md:mx-auto md:w-11/12 lg:max-w-screen-2xl flex items-center justify-center"
      >
        <div className="grid grid-cols-1 w-full py-4 lg:py-16">
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.75 }}
            className="space-y-8"
          >
            <h1 className="text-4xl lg:text-5xl text-center text-gray-200">
              Services
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-900 transition-all hover:-translate-1 hover:scale-105 duration-500 rounded-md space-y-4 p-4 lg:p-6">
                <h1 className="title text-2xl lg:text-3xl text-gray-300">
                  Web Development & Design
                </h1>
                <div className="sub-title text-base md:text-xl lg:text-2xl space-y-2 text-gray-400">
                  <h1>• Frontend Web Development</h1>
                  <h1>• Backend Web Development</h1>
                  <h1>• UX/UI Design</h1>
                  <h1>• Website Redesign</h1>
                </div>
              </div>
              <div className="bg-gray-900 hover:-translate-1 hover:scale-105 duration-500 rounded-md space-y-4 p-4 lg:p-6">
                <h1 className="title text-2xl lg:text-3xl text-gray-300">
                  API & Integration Services
                </h1>
                <div className="sub-title text-base md:text-xl lg:text-2xl space-y-2 text-gray-400">
                  <h1>• API Development (RESTful)</h1>
                  <h1>• Third-Party API Integration</h1>
                  <h1>• IoT APIs</h1>
                </div>
              </div>
              <div className="bg-gray-900 hover:-translate-1 hover:scale-105 duration-500 rounded-md space-y-4 p-4 lg:p-6">
                <h1 className="title text-2xl lg:text-3xl text-gray-300">
                  Others
                </h1>
                <div className="sub-title text-base md:text-xl lg:text-2xl space-y-2 text-gray-400">
                  <h1>• MySQL & PL/SQL Development</h1>
                  <h1>• Oracle Fusion Data Modeling</h1>
                  <h1>• Oracle Fusion Reports</h1>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;
