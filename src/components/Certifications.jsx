import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiAward,
  FiStar,
  FiCalendar,
  FiExternalLink,
  FiCheck,
} from "react-icons/fi";

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: "AWS Solutions Architect",
      provider: "Amazon Web Services",
      date: "2023",
      level: "Professional",
      skills: ["Cloud Architecture", "EC2", "S3", "Lambda"],
      color: "orange",
      verified: true,
      url: "https://example.com/aws-certificate.pdf",
    },
    {
      title: "React Developer",
      provider: "Meta",
      date: "2023",
      level: "Advanced",
      skills: ["React", "Hooks", "Context", "Testing"],
      color: "blue",
      verified: true,
      url: "https://example.com/react-certificate.pdf",
    },
    {
      title: "Google Cloud Engineer",
      provider: "Google Cloud",
      date: "2022",
      level: "Professional",
      skills: ["GCP", "Kubernetes", "DevOps", "Monitoring"],
      color: "green",
      verified: true,
      url: "https://example.com/gcp-certificate.pdf",
    },
    {
      title: "Full Stack JavaScript",
      provider: "freeCodeCamp",
      date: "2022",
      level: "Intermediate",
      skills: ["Node.js", "Express", "MongoDB", "APIs"],
      color: "purple",
      verified: true,
      url: "https://example.com/fullstack-certificate.pdf",
    },
  ];

  // Color utility functions
  const getColorClasses = (color) => {
    const colors = {
      orange: "from-orange-500 to-red-500",
      blue: "from-blue-500 to-cyan-500",
      green: "from-green-500 to-emerald-500",
      purple: "from-purple-500 to-pink-500",
    };
    return colors[color] || colors.blue;
  };

  const getGlowColor = (color) => {
    const glowColors = {
      orange: "0 0 15px rgba(245, 158, 11, 0.7)",
      blue: "0 0 15px rgba(59, 130, 246, 0.7)",
      green: "0 0 15px rgba(16, 185, 129, 0.7)",
      purple: "0 0 15px rgba(139, 92, 246, 0.7)",
    };
    return glowColors[color] || glowColors.blue;
  };

  const getColorHex = (color, opacity = 1) => {
    const colors = {
      orange: `rgba(245, 158, 11, ${opacity})`,
      blue: `rgba(59, 130, 246, ${opacity})`,
      green: `rgba(16, 185, 129, ${opacity})`,
      purple: `rgba(139, 92, 246, ${opacity})`,
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      id="certifications"
      className="py-20 relative overflow-hidden bg-transparent"
      style={{ zIndex: 10 }}
    >
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, type: "spring" }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 shadow-2xl"
          >
            <FiAward className="text-white" size={40} />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Professional{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Industry-recognized credentials that validate my expertise
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: getGlowColor(cert.color),
                transition: { duration: 0.3 },
              }}
              className="group relative z-10"
            >
              <div
                className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-${cert.color}-500 transition-all duration-500 h-full`}
              >
                {cert.verified && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-green-500/20 px-3 py-1 rounded-full border border-green-500/30">
                    <FiCheck size={12} className="text-green-400" />
                    <span className="text-xs text-green-400 font-semibold">
                      Verified
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${getColorClasses(
                      cert.color
                    )} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <FiAward size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400 font-medium">{cert.provider}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-200">
                      <div className="flex items-center gap-1">
                        <FiCalendar size={14} />
                        <span>{cert.date}</span>
                      </div>
                      <div
                        className={`px-2 py-1 bg-gradient-to-r ${getColorClasses(
                          cert.color
                        )} bg-opacity-20 rounded-full text-xs font-semibold`}
                      >
                        {cert.level}
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="text-sm font-semibold text-gray-400 mb-3">
                  Key Skills
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className={`w-full py-3 bg-gradient-to-r ${getColorClasses(
                    cert.color
                  )} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_var(--glow-color)]`}
                  style={{ "--glow-color": getColorHex(cert.color, 0.5) }}
                >
                  <FiExternalLink size={18} /> View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center">
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-gray-900 rounded-xl shadow-xl p-6 max-w-4xl w-full z-[999] relative mx-4"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-white text-xl hover:text-gray-300 transition-colors"
              >
                ✕
              </button>
              <h2 className="text-white text-2xl mb-4 font-semibold">
                {selectedCert.title}
              </h2>
              <div className="w-full h-[70vh] bg-gray-800 rounded-lg flex items-center justify-center">
                <iframe
                  src={selectedCert.url}
                  title="Certificate"
                  className="w-full h-full rounded-lg"
                  style={{ border: "none" }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    const fallback = document.createElement("div");
                    fallback.className = "p-4 text-white text-center";
                    fallback.innerHTML = `<p>Certificate preview unavailable</p><a href="${selectedCert.url}" target="_blank" class="text-blue-400 hover:underline">View certificate directly</a>`;
                    e.target.parentNode.appendChild(fallback);
                  }}
                />
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
