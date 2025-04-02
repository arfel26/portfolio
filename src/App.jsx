// import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Services from "./components/Services";
import "./index.css";

function App() {
  return (
    <div className="bg-gray-950 space-y-8">
      <Navigation />
      <div className="space-y-8 md:space-y-16 lg:space-y-20">
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
