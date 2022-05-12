import React, { useLayoutEffect, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import Home from "./pages/Home";
import Cost from "./pages/Cost";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Schedule from "./pages/Schedule";
import Education from "./pages/Education";
import Nav from "./components/Navigation";
import "./App.css";
const MEASUREMENT_ID = "G-MS39CCGTTQ"; // OUR_TRACKING_ID

ReactGA.initialize(TRACKING_ID);

function App() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
