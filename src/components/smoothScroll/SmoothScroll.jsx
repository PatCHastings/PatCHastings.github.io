import React, { useEffect, useState, useRef } from "react";

const SmoothScroll = ({ sectionIds }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollTimeoutRef.current !== null) {
        clearTimeout(scrollTimeoutRef.current);
      }

      e.preventDefault();
      scrollTimeoutRef.current = setTimeout(() => processScrollEvent(e), 150);
    };

    const processScrollEvent = (e) => {
      const direction = e.deltaY > 0 ? 1 : -1; // Determine the scroll direction
      let nextIndex = currentIndex + direction;
      nextIndex = Math.max(0, Math.min(nextIndex, sectionIds.length - 1));

      if (nextIndex !== currentIndex) {
        const nextSection = document.getElementById(sectionIds[nextIndex]);
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
          setCurrentIndex(nextIndex);

          scrollTimeoutRef.current = setTimeout(() => {
            scrollTimeoutRef.current = null;
          }, 600); // Match this with smooth scroll duration
        }
      } else {
        scrollTimeoutRef.current = null;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);

      if (scrollTimeoutRef.current !== null) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [currentIndex, sectionIds]);

  return null;
};

export default SmoothScroll;
