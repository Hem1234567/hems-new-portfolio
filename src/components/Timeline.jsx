import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiBriefcase, FiMapPin, FiClock, FiAward } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const Timeline = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const timelineData = [
    {
      type: "education",
      icon: FaGraduationCap,
      title: "Bachelor of Computer Science",
      company: "University of Technology",
      location: "Boston, MA",
      period: "2016 - 2020",
      duration: "4 years",
      description:
        "Graduated Magna Cum Laude with focus on software engineering and artificial intelligence.",
      achievements: [
        "GPA: 3.8/4.0",
        "Dean's List 6 semesters",
        "CS Department Award",
      ],
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
    },
    {
      type: "work",
      icon: FiBriefcase,
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      location: "Austin, TX",
      period: "2020 - 2022",
      duration: "2 years",
      description:
        "Developed scalable web applications using modern JavaScript frameworks and microservices architecture.",
      achievements: [
        "Built 10+ web applications",
        "Implemented CI/CD pipelines",
        "Improved code coverage to 90%",
      ],
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
    },
    {
      type: "work",
      icon: FiBriefcase,
      title: "Software Engineering Intern",
      company: "StartupXYZ",
      location: "Remote",
      period: "2019 - 2020",
      duration: "1 year",
      description:
        "Contributed to frontend development and gained experience with agile methodologies.",
      achievements: [
        "Shipped 5 features",
        "Fixed 50+ bugs",
        "Improved mobile performance",
      ],
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
    },
    {
      type: "work",
      icon: FiBriefcase,
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      duration: "2 years",
      description:
        "Leading development of cloud-native applications with React, Node.js, and AWS. Mentoring team of 5 developers.",
      achievements: [
        "40% performance improvement",
        "Led 3 major projects",
        "Reduced deployment time by 60%",
      ],
      color: "from-emerald-400 to-teal-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
    },
  ];

  return (
    <section id="timeline" className="py-20 relative overflow-hidden -z-10">
      <div className="absolute inset-0 bg-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-bold text-white mb-4">
            Career{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey through the years
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-blue-500 via-purple-500 to-pink-500" />

          {timelineData.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-center md:items-start mb-16`}
                data-aos={isEven ? "fade-right" : "fade-left"}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-black`}
                  >
                    <Icon className="text-white" size={24} />
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`w-full md:w-5/12 ${
                    isEven ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <div
                    className={`${item.bgColor} ${item.borderColor} border-2 rounded-2xl p-6 backdrop-blur-lg shadow-xl hover:scale-105 transform transition duration-300`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`px-3 py-1 bg-gradient-to-r ${item.color} text-white text-xs font-bold rounded-full`}
                      >
                        {item.type === "work" ? "WORK" : "EDUCATION"}
                      </span>
                      <span className="text-gray-400 text-sm flex items-center gap-1">
                        <FiClock size={12} />
                        {item.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-cyan-300 font-semibold mb-1">
                      {item.company}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <FiMapPin size={12} />
                        <span>{item.location}</span>
                      </div>
                      <span>{item.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">
                      {item.description}
                    </p>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                        <FiAward size={14} /> Achievements
                      </h4>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-gray-300 text-xs flex items-center gap-2"
                          >
                            <div
                              className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full`}
                            ></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
