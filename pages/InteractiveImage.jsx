import React, { useState } from "react";
import Image from "next/image";

const InteractiveImage = ({ src, alt, details }) => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const toggleDetail = () => setIsDetailOpen(!isDetailOpen);

  return (
    <div className="relative group">
      {/* Image Container */}
      <div
        className="w-32 h-32 overflow-hidden rounded-lg shadow-lg cursor-pointer"
        onClick={toggleDetail}
      >
        <Image src={src} alt={alt} layout="responsive" />
        <div className="absolute inset-0 rounded-lg flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <span className="text-white text-sm">View Details</span>
        </div>
      </div>

      {/* Detail Box */}
      {isDetailOpen && (
        <div className="absolute inset-0 bg-white bg-opacity-90 p-4 flex flex-col items-center justify-center">
          <p>{details}</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={toggleDetail}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default InteractiveImage;
