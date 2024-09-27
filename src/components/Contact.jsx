import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bb5ec668-6eae-4163-bc07-772aec87d4db");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div>
      <section
        id="contact"
        className="contact mx-4 my-6 md:my-8 md:mx-6 lg:my-12 lg:mx-48"
      >
        <div className="flex flex-col p-5 text-gray-200 space-y-5">
          <motion.h1
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            exit="hidden"
            viewport={{ once: false, amount: 0.5 }}
            className="text-4xl lg:text-5xl text-center"
          >
            Contact
          </motion.h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-2 lg:gap-5">
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="left md:p-3 lg:p-5"
            >
              <ul className="space-y-5">
                <li className="text-2xl text-justify">
                  I’m excited to collaborate on your next project or explore job
                  opportunities. If you’re looking for freelance work, let’s
                  build something amazing together!
                </li>
                <li className="flex text-lg items-center space-x-3">
                  <svg
                    className="w-8 h-8 text-gray-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.896.896 0 0 0-.629.256.868.868 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.896.896 0 0 0 4.89 16H9l3 4 3-4h4.111a.896.896 0 0 0 .629-.256.868.868 0 0 0 .26-.619v-9.25a.868.868 0 0 0-.26-.619.896.896 0 0 0-.63-.256Z"
                    />
                  </svg>
                  <p>felizearianne26@gmail.com</p>
                </li>

                <li className="space-x-5">
                  <a
                    href="https://www.linkedin.com/in/arianne-felize-o-manibo-825a5a288/"
                    target="_blank"
                  >
                    <button className="linked-in rounded-full border-2 border-blue-700 m-auto p-2 transition-all hover:-translate-1 hover:bg-blue-600 duration-300">
                      <svg
                        class="w-6 h-6 md:w-8 md:h-8 text-gray-200"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                          clip-rule="evenodd"
                        />
                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                      </svg>
                    </button>
                  </a>
                  <a
                    href="https://www.instagram.com/ariannefelize/"
                    target="_blank"
                  >
                    <button className="instagram rounded-full border-2 border-blue-700 m-auto p-2 transition-all hover:-translate-1 hover:bg-blue-600 duration-300">
                      <svg
                        class="w-6 h-6 md:w-8 md:h-8 text-gray-200"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </a>
                </li>
              </ul>
            </motion.div>
            <hr className="block md:hidden" />
            {/* <div> */}{" "}
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="right form md:p-3 lg:p-5"
            >
              <form onSubmit={onSubmit} className="space-y-4 lg:space-y-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-2 rounded-md text-black"
                />
                <textarea
                  name="message"
                  id=""
                  placeholder="Message"
                  className="w-full p-2 rounded-md min-h-56 max-h-64 text-black"
                ></textarea>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="border-2 border-blue-700 p-2 rounded-md transition-all hover:-translate-1 hover:bg-blue-600 duration-300"
                  >
                    Send
                  </button>
                </div>
              </form>
            </motion.div>
            {/* </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
