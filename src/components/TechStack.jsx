import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaAws,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
  SiGraphql,
} from "react-icons/si";

const TechStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    { icon: FaReact, name: "React", color: "#61DAFB", proficiency: 95 },
    {
      icon: FaJsSquare,
      name: "JavaScript",
      color: "#F7DF1E",
      proficiency: 90,
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind",
      color: "#06B6D4",
      proficiency: 92,
    },
    { icon: FaGitAlt, name: "Git", color: "#F05032", proficiency: 95 },
    { icon: FaFigma, name: "Figma", color: "#F24E1E", proficiency: 70 },
    { icon: FaPython, name: "Python", color: "#3776AB", proficiency: 82 },
    { icon: FaNodeJs, name: "Node.js", color: "#339933", proficiency: 88 },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248", proficiency: 80 },

    { icon: FaDocker, name: "Docker", color: "#2496ED", proficiency: 78 },
    { icon: FaAws, name: "AWS", color: "#FF9900", proficiency: 80 },
  ];

  return (
    <section id="tech-stack" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Tech{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies I work with to build amazing digital experiences
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 50, rotateY: -90 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.2 },
                }}
                className="group cursor-pointer perspective-1000"
              >
                <div className="relative">
                  {/* Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                    style={{ backgroundColor: tech.color }}
                  ></div>

                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 group-hover:border-slate-600/50 transition-all duration-300 h-40 flex flex-col items-center justify-center transform-gpu">
                    <Icon
                      className="mb-3 transition-all duration-300 group-hover:scale-110"
                      size={48}
                      style={{ color: tech.color }}
                    />
                    <h3 className="text-white font-semibold text-sm text-center mb-2">
                      {tech.name}
                    </h3>

                    {/* Proficiency Bar */}
                    <div className="w-full bg-slate-700 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: tech.color }}
                        initial={{ width: 0 }}
                        animate={
                          inView ? { width: `${tech.proficiency}%` } : {}
                        }
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      />
                    </div>
                    <span className="text-gray-400 text-xs mt-1">
                      {tech.proficiency}%
                    </span>

                    {/* Hover Lines */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                      <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
                      <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { value: "10+", label: "Technologies" },
              { value: "5+", label: "Years Experience" },
              { value: "30+", label: "Projects Built" },
              { value: "90%", label: "Avg Proficiency" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
