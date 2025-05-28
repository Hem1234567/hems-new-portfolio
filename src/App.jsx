import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import TechStack from "./components/TechStack";
import Certifications from "./components/Certifications";
import Timeline from "./components/Timeline";
import ContributionGraph from "./components/ContributionGraph";

function App() {
  return (
    <div className="relative">
      {/* Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 text-white">
        <Navbar />
        <Hero />
        <About />
        <TechStack/>
        <Certifications/>
        <Timeline/>
        <Projects />
        <ContributionGraph/>
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
