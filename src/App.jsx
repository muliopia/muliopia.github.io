import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/resume";
import Contact from "./components/Contact/contact"; // Check this path
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./App.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div
        className="bg-gray-900 bg-cover min-h-screen text-center"
        id={load ? "no-scroll" : "scroll"}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
