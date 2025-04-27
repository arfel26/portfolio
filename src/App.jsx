// import React from "react";

import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <>
      <div className="bg-gray-950 space-y-8">
        <BrowserRouter basename="/portfolio/">
          <Navigation />
          <div className="space-y-8 md:space-y-16 lg:space-y-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<ContactMe />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
