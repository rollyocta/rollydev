import { useEffect } from "react";

const RevealOnScroll = ({ children, className = "reveal" }) => {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${className}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // Only unobserve if element exists
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((el) => {
      if (el instanceof Element) observer.observe(el); // check element type
    });

    return () => {
      elements.forEach((el) => {
        if (el instanceof Element) observer.unobserve(el); // safe cleanup
      });
    };
  }, [className]);

  return children;
};

export default RevealOnScroll;