import React from "react";
import { FaCode, FaPalette, FaBolt, FaUsers } from "react-icons/fa";

const About = () => {
  const skills = [
    {
      icon: <FaCode size={24} />,
      title: "Development",
      description:
        "Full-stack development with modern frameworks and technologies",
      technologies: ["React", "JavaScript", "Node.js", "Python"],
    },
    {
      icon: <FaPalette size={24} />,
      title: "Design",
      description:
        "UI/UX design with focus on user experience and visual appeal",
      technologies: ["Figma", "Canva", "Illustrator"],
    },
    {
      icon: <FaBolt size={24} />,
      title: "3D & Animation",
      description: "Creating immersive 3D experiences and smooth animations",
      technologies: ["Three.js", "Blender"],
    },
    {
      icon: <FaUsers size={24} />,
      title: "Collaboration",
      description:
        "Working effectively in teams and communicating with stakeholders",
      technologies: ["Git", "Project Management"],
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent"
              data-aos="fade-up"
            >
              About Me
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto font-bold"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              I'm a passionate developer who loves creating beautiful,
              functional, and user-friendly digital experiences. With expertise
              in both frontend and backend technologies, I bring ideas to life
              through code.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p
                className="text-gray-300 leading-relaxed text-xl font-semibold"
                data-aos="fade-right"
              >
                With over 2 years of experience in web development, I specialize
                in creating modern, responsive applications that provide
                exceptional user experiences. My journey started with a
                curiosity about how websites work, and it has evolved into a
                passion for crafting digital solutions.
              </p>
              <p
                className="text-gray-300 leading-relaxed text-xl font-semibold"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                I believe in the power of clean code, intuitive design, and
                continuous learning. Whether it's a complex web application or a
                simple landing page, I approach every project with attention to
                detail and a commitment to excellence.
              </p>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30"></div>
                <div className="relative group w-60 h-60 mx-auto rounded-full overflow-visible">
                  {/* Circle Base (optional shadow) */}
                  <div className="w-full h-full rounded-full overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                    <img
                      src="/avatar-default.jpg"
                      alt="Base"
                      className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />
                  </div>

                  {/* Enlarged Hover Image */}
                  <img
                    src="/avatar-hologram.png"
                    alt="Hover Hologram"
                    className="absolute top-1/2 left-1/2 w-40 h-46 -translate-x-1/2 -translate-y-1/2 object-contain opacity-0 group-hover:opacity-100 group-hover:scale-[1.8] group-hover:-translate-y-[80%] transition-all duration-700 ease-out z-30 pointer-events-none"
                  />
                </div>

                <div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center animate-bounce"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  ⚡
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center animate-bounce"
                  style={{ animationDelay: "2s" }}
                  data-aos="zoom-in"
                  data-aos-delay="600"
                >
                  🎨
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-transparent rounded-lg p-6 text-center "
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-orange-400 rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {skill.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gradient-to-r from-blue-200 to-orange-100 border-2 border-gray-200 bg-clip-text text-transparent  rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
