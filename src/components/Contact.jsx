import React, { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "emailjs-com";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize AOS when component mounts
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });

    // Refresh AOS when component updates
    AOS.refresh();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_xvf9z8s";
    const templateID = "template_nbj912v";
    const publicKey = "FoaMu74SF5ThvtMTY";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        toast.success("Thank you for your message. I'll get back to you soon!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message. Please try again later.");
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hem07042006@gmail.com",
      href: "mailto:hem07042006@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 7397306115",
      href: "tel:+91 7397306115",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Chennai, India",
      href: "https://maps.app.goo.gl/37XP1N1CiG1Cy9cD8",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Hem1234567", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/hem-kumar-1522672a0",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/_strange_.evil_07/",
      label: "Instagram",
    },
  ];

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <section
        id="contact"
        className="py-20 relative overflow-hidden"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Let's Work Together
              </h2>
              <p
                className="text-xl text-white/80 max-w-3xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Have a project in mind? I'd love to hear about it. Let's create
                something amazing together!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div
                className="glass-effect border border-white/20 rounded-lg p-8"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send Message
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className="bg-transparent p-8 rounded-xl shadow-lg space-y-6"
                >
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-transparent text-white border-2 border-amber-50 rounded-lg focus:outline-none"
                    required
                    data-aos="fade-up"
                    data-aos-delay="400"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-transparent text-white border-2 border-amber-50 rounded-lg focus:outline-none"
                    required
                    data-aos="fade-up"
                    data-aos-delay="450"
                  />
                  <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-transparent text-white border-2 border-amber-50 rounded-lg focus:outline-none"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  />
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-transparent text-white border-2 border-amber-50 rounded-lg focus:outline-none"
                    required
                    data-aos="fade-up"
                    data-aos-delay="550"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-orange-300 text-white py-2 rounded-lg font-semibold transition-colors"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div
                className="space-y-8"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div>
                  <h3
                    className="text-2xl font-bold text-white mb-6"
                    data-aos="fade-up"
                    data-aos-delay="350"
                  >
                    Get In Touch
                  </h3>
                  <p
                    className="text-white/80 text-lg leading-relaxed mb-8"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    I'm always open to discussing new opportunities, creative
                    projects, or potential collaborations. Feel free to reach
                    out through any of the channels below.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 glass-effect rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 group"
                      data-aos="fade-up"
                      data-aos-delay={450 + index * 50}
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                        <info.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">{info.title}</p>
                        <p className="text-white font-medium">{info.content}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="pt-8" data-aos="fade-up" data-aos-delay="600">
                  <h4 className="text-white text-lg font-semibold mb-4">
                    Follow Me
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transform hover:scale-110 transition-all duration-300"
                        data-aos="zoom-in"
                        data-aos-delay={650 + index * 100}
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
