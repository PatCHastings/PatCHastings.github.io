import React, { useEffect, useState, useRef } from "react";

const SmoothScroll = ({ sectionIds }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollTimeoutRef = useRef(null); // Ref to store the timeout ID

  useEffect(() => {
    const handleWheel = (e) => {
      // Clear any existing timeout to reset the scroll lock period if the user tries to scroll again
      if (scrollTimeoutRef.current !== null) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Prevent default scrolling behavior and handle the scroll event after a slight delay
      e.preventDefault();
      scrollTimeoutRef.current = setTimeout(() => processScrollEvent(e), 150); // Process scroll event after a delay
    };

    const processScrollEvent = (e) => {
      const direction = e.deltaY > 0 ? 1 : -1; // Determine the scroll direction
      let nextIndex = currentIndex + direction;
      nextIndex = Math.max(0, Math.min(nextIndex, sectionIds.length - 1)); // Clamp the nextIndex within the bounds

      // Only proceed if the index has changed and the target section exists
      if (nextIndex !== currentIndex) {
        const nextSection = document.getElementById(sectionIds[nextIndex]);
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
          setCurrentIndex(nextIndex);
          // Re-enable scrolling after the smooth scroll duration
          scrollTimeoutRef.current = setTimeout(() => {
            scrollTimeoutRef.current = null;
          }, 600); // Match this with your smooth scroll duration
        }
      } else {
        // Reset scrollTimeoutRef if no scrolling is needed, allowing immediate further scrolls
        scrollTimeoutRef.current = null;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      // Clear the timeout if the component is unmounted during a scroll
      if (scrollTimeoutRef.current !== null) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [currentIndex, sectionIds]);

  return null;
};

export default SmoothScroll;
