import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <Experience /> */}
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
