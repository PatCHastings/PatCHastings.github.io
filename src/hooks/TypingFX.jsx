import { useState, useEffect } from "react";

const typingFX = (text, typingSpeed = 80) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const typeLetter = (index) => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        setTimeout(() => typeLetter(index + 1), typingSpeed);
      }
    };

    typeLetter(0);
  }, [text, typingSpeed]);

  return displayedText;
};

export default typingFX;
