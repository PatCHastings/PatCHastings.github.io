import React, { useState } from "react";
import Image from "next/image";
import styles from "/styles/Home.module.css";

const InteractiveImage = ({ src, alt, details }) => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const toggleDetail = () => setIsDetailOpen(!isDetailOpen);

  // Adjusted detail box className for animation
  let detailBoxClass = `detailBox fixed inset-0 z-50 bg-gray-500 rounded-lg bg-opacity-90 p-4 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
    isDetailOpen ? "scale-50 opacity-90" : "scale-0 opacity-0"
  }`;

  return (
    <div className="relative group" onClick={toggleDetail}>
      {/* Image Container */}
      <div className="w-32 h-32 overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <Image
          src={src}
          alt={alt}
          className="w-full h-full rounded-lg object-cover" // Adjusted for proper scaling
          layout="fill"
        />
        {!isDetailOpen && (
          <div className="absolute inset-0 rounded-lg flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <span className="text-white text-sm">See my exp</span>
          </div>
        )}
      </div>

      {/* Detail Box */}
      <div className={`${styles.detailBox}  ${detailBoxClass}`}>
        <p className="detailText text-3xl">{details}</p>
        <button
          className="mt-4 px-4 py-2"
          onClick={(e) => {
            e.stopPropagation(); // Prevents click from bubbling to parent
            toggleDetail();
          }}
        ></button>
      </div>
    </div>
  );
};

export default InteractiveImage;
