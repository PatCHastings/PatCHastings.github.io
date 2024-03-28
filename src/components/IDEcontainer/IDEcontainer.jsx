import React, { useState } from "react";
import "./IDEContainer.scss";

const IDEContainer = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);
  const lineNumbers = Array.from({ length: 20 }, (_, i) => i + 1);

  if (!isVisible) return null;

  return (
    <div className="ide-container">
      <div className="ide-header">
        <div className="ide-tabs">
          <button className="ide-tab active">Tab 1</button>
          <button className="ide-tab">Tab 2</button>
          {/* Add more tabs as needed */}
        </div>
        <button className="ide-close" onClick={() => setIsVisible(false)}>
          X
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
    </div>
  );
};

export default IDEContainer;
