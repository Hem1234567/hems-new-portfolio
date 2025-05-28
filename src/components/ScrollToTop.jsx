import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { animateScroll as scroll } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 400,
      easing: "ease-out",
      once: false,
    });

    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      AOS.refresh(); // Refresh AOS when component unmounts
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 600,
      smooth: "easeInOutQuad",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white z-50 shadow-lg transition-all duration-300 transform hover:scale-110"
        aria-label="Scroll to top"
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="100"
        data-aos-duration="500"
        data-aos-easing="ease-out-back"
        data-aos-anchor-placement="bottom-bottom"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    )
  );
};

export default ScrollToTop;
