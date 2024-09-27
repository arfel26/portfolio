import React, { useState } from "react";
import Resume from "../../public/Resume.pdf";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
      <nav className="navigation text-gray-200 bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/">
            <span className="self-center text-2xl font-semibold whitespace-nowrap transition-all hover:-translate-1 hover:text-blue-700 duration-500">
              Arianne Manibo
            </span>
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`md:block w-full md:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3 transition-all hover:-translate-1 hover:text-blue-700 duration-500"
                  onClick={handleScroll}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block py-2 px-3 transition-all hover:-translate-1 hover:text-blue-700 duration-500"
                  onClick={handleScroll}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 px-3 transition-all hover:-translate-1 hover:text-blue-700 duration-500"
                  onClick={handleScroll}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 px-3 transition-all hover:-translate-1 hover:text-blue-700 duration-500"
                  onClick={handleScroll}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href={Resume}
                  className="block py-2 px-3 transition-all hover:-translate-1 hover:text-blue-700 duration-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
