import React, { useState } from "react";
import { FiExternalLink, FiEye } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "doctor consultancy platform",
      category: "Full Stack",
      description:
        "A modern doctor consultancy platform built with React, Node.js, and Firebase. Features include user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "Firebase", "Stripe"],
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/11/464682390/AE/HP/NP/107569837/doctors-website-development-services.jpg",
      liveUrl: "https://preview--healthcare-palaver.lovable.app/",
      githubUrl: "https://github.com/subaporiki/healthcare-palaver.git",
      featured: true,
    },
    {
      id: 2,
      title: "3D Portfolio Website",
      category: "Frontend",
      description:
        "An interactive 3D portfolio website using Three.js and React. Includes animated 3D models, particle systems, and smooth transitions.",
      technologies: ["React", "Three.js", "Firebase", "JavaScript"],
      image: "https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg",
      liveUrl: "https://hemssportfolio.netlify.app/",
      githubUrl: "https://github.com/Hem1234567/Hem-s-Portfolio.git",
      featured: true,
    },
    {
      id: 3,
      title: "Hostel Management App",
      category: "Mobile",
      description:
        "A Hostel Management platform mobile app for Room management with real-time collaboration features and offline support.",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      image:
        "https://progressix.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-29-at-6.02.39-PM.jpeg",
      liveUrl: "https://hem1234567.github.io/HOSTEL/",
      githubUrl: "https://github.com/Hem1234567/HOSTEL.git",
      featured: false,
    },
    {
      id: 4,
      title: "AI Dashboard",
      category: "Data Visualization",
      description:
        "An analytics dashboard with AI-powered insights, real-time data visualization, and predictive analytics.",
      technologies: ["Vue.js", "Python", "Dialogflow"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Blockchain Voting System",
      category: "Blockchain",
      description:
        "A secure voting system built on blockchain technology ensuring transparency and immutability.",
      technologies: ["Solidity", "Web3.js", "Ethereum", "React"],
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Social Media Platform",
      category: "Full Stack",
      description:
        "A social media platform with real-time messaging, content sharing, and advanced privacy controls.",
      technologies: ["Next.js", "Socket.io", "PostgreSQL", "AWS"],
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
  ];

  const categories = [
    "All",
    "Full Stack",
    "Frontend",
    "Mobile",
    "Data Visualization",
    "Blockchain",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            Featured Projects
          </h2>
          <p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A showcase of my recent work, featuring innovative solutions and
            cutting-edge technologies
          </p>
        </div>

        {/* Category Buttons */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 
                ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-orange-400 text-white"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-300 dark:text-black hover:bg-gray-200 dark:hover:bg-gray-100 hover:shadow-2xl"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setActiveProject(index)}
              className="group overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-500 transform hover:-translate-y-2 bg-transparent rounded-lg"
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 flex gap-2 w-full justify-start">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex items-center px-3 py-1 bg-white text-black text-sm font-medium rounded hover:bg-gray-100">
                        <FiEye className="mr-1" /> Preview
                      </button>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex items-center px-3 py-1 border border-white text-white text-sm font-medium rounded hover:bg-white hover:text-black">
                        <FaGithub className="mr-1" /> Code
                      </button>
                    </a>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-400 font-semibold">
                    {project.category}
                  </span>
                  <FiExternalLink className="text-gray-200 group-hover:text-blue-600 transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gradient-to-r from-blue-200 to-orange-100 border-2 border-gray-200 bg-clip-text text-transparent  rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button className="px-6 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-blue-500 to-orange-400 text-white shadow-md transition-colors transition-transform transition-shadow duration-500 ease-in-out hover:from-blue-500 hover:to-orange-400 hover:shadow-2xl hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
