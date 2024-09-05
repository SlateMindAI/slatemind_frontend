import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";  // Ensure the path is correct
import AboutPage from "./pages/AboutPage";  // Ensure the path is correct
import RoadmapSection from "./pages/RoadmapSection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} /> 
        {/* <Route path="/roadmap" element={<RoadmapSection />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
