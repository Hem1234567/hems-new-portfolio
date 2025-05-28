import React from "react";
import GitHubCalendar from "react-github-calendar";
import { FiTrendingUp, FiGitCommit, FiActivity, FiZap } from "react-icons/fi";

const ContributionGraph = () => {
  const username = "Hem1234567"; // replace with your GitHub username

  const stats = [
    {
      icon: FiGitCommit,
      label: "Total Contributions",
      value: "36",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: FiZap,
      label: "Current Streak",
      value: "36",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: FiTrendingUp,
      label: "Longest Streak",
      value: "36",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FiActivity,
      label: "Active Days",
      value: "100",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="contributions"
      className="py-20 relative overflow-hidden bg-transparent -z-10"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mb-6 shadow-2xl">
            <FiActivity className="text-white" size={40} />
          </div>
          <h2 className="text-6xl font-extrabold text-white mb-6">
            Code{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Activity
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A year of consistent coding and contributions
          </p>
        </div>

        {/* Stats Row */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-center max-w-5xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {stats.map((stat, index) => (
            <div key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div
                className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full mb-3 shadow-lg`}
              >
                <stat.icon size={20} className="text-white" />
              </div>
              <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* GitHub Calendar */}
        <div
          className="max-w-6xl mx-auto bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-3xl p-6 border border-gray-700/50 shadow-2xl text-white"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <GitHubCalendar
            username={username}
            blockSize={12}
            blockMargin={4}
            colorScheme="dark"
            fontSize={14}
            showTotalCount={true}
            hideColorLegend={false}
          />
        </div>
      </div>
    </section>
  );
};

export default ContributionGraph;
