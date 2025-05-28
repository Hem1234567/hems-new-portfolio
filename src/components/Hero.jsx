import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Hem's Resume.pdf";
    link.download = "Hemkumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socials = [
    { icon: Github, href: "https://github.com/Hem1234567" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hem-kumar-1522672a0" },
    { icon: Mail, href: "#contact" },
  ];

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden"
    >
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/30 rounded-lg floating-animation"
          data-aos="zoom-in"
          data-aos-delay="200"
        ></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-purple-500/30 rounded-full floating-animation"
          style={{ animationDelay: "2s" }}
          data-aos="zoom-in"
          data-aos-delay="400"
        ></div>
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-yellow-400/30 rounded-lg floating-animation"
          style={{ animationDelay: "4s" }}
          data-aos="zoom-in"
          data-aos-delay="600"
        ></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-pink-500/30 rounded-full floating-animation"
          style={{ animationDelay: "1s" }}
          data-aos="zoom-in"
          data-aos-delay="800"
        ></div>

        <div
          className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-white/20 rounded-lg rotate-slow"
          data-aos="fade-up"
          data-aos-delay="300"
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-blue-400/40 rounded-full rotate-slow"
          style={{ animationDirection: "reverse" }}
          data-aos="fade-up"
          data-aos-delay="500"
        ></div>
      </div>

      {/* Main Content */}
      <div className="z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold" data-aos="fade-up">
          Hi, I'm Hemkumar
        </h1>
        <p
          className="mt-4 text-xl md:text-2xl flipping-text"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span>Creative Full-Stack Developer</span>
          <span>Creative UI/UX Designer</span>
          <span>Tech Enthusiast</span>
        </p>

        {/* Buttons */}
        <div
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="#projects"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            View My Work
          </a>
          <button
            onClick={handleResumeDownload}
            className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            Download Resume
          </button>
        </div>

        {/* Social Icons */}
        <div
          className="mt-6 flex justify-center space-x-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transform hover:scale-110 transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay={800 + index * 100}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
