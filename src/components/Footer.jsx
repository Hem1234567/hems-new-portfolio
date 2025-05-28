import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  const links = ["Home", "About", "Projects", "Contact"];

  return (
    <footer className="text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div data-aos="fade-up">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent mb-4">
                Portfolio
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Creating digital experiences that inspire and engage users
                through innovative design and development.
              </p>
            </div>

            {/* Quick Links */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
                Quick Links
              </h4>
              <nav className="space-y-2">
                {links.map((item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-white hover:text-blue-300 transition-colors duration-300"
                    data-aos="fade-up"
                    data-aos-delay={100 + index * 50}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
                Services
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li data-aos="fade-up" data-aos-delay="250">
                  Web Development
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  Mobile Apps
                </li>
                <li data-aos="fade-up" data-aos-delay="350">
                  UI/UX Design
                </li>
                <li data-aos="fade-up" data-aos-delay="400">
                  3D Experiences
                </li>
              </ul>
            </div>
          </div>

          <div
            className="border-t border-white pt-8 flex flex-col md:flex-row justify-between items-center"
            data-aos="fade-up"
          >
            <p className="text-white text-sm">
              © 2025 Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
