import React, { useEffect, useState } from "react";

const Parallax = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    setOffsetY(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        transform: `translateY(-${offsetY * 0.3}px)`,
        height: "100vh", // Adjust height as needed
        background: "url(/rolling-hills.jpg) no-repeat center center fixed",
        backgroundSize: "cover",
        position: "absolute",
        height: "2000px",
        top: 0,
        left: 0,
        right: 0,
        zIndex: -1,
      }}
    />
  );
};

export default Parallax;
