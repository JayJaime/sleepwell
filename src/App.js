import React, { useLayoutEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cost from "./pages/Cost";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Schedule from "./pages/Schedule";
import Education from "./pages/Education";
import Nav from "./components/Navigation";
import "./App.css";

function App() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cost-and-eligibility" element={<Cost />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/sleep-apnea-education" element={<Education />} />
      </Routes>
    </div>
  );
}

export default App;
