// IDEContainer.jsx
import React from "react";
import { motion } from "framer-motion";
import "./IDEContainer.scss";

const IDEContainer = ({ onClose, children }) => {
  const lineNumbers = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <motion.div
      className="ide-container"
      initial={{ scale: 0, rotate: 5, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      exit={{ scale: 0, rotate: -5, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="ide-header">
        <div className="ide-tabs">
          <button className="ide-tab active">Tab 1</button>
          <button className="ide-tab">Tab 2</button>
          {/* Add more tabs as needed */}
        </div>
        <button className="ide-close" onClick={onClose}>
          x
        </button>
      </div>
      <div className="ide-content">
        <div className="ide-line-numbers">
          {lineNumbers.map((number) => (
            <div key={number} className="ide-line-number">
              {number}
            </div>
          ))}
        </div>
        <div className="ide-main-content">{children}</div>
      </div>
    </motion.div>
  );
};

export default IDEContainer;
