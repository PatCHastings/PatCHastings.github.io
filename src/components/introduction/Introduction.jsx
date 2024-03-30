import "./introduction.scss";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import typingFX from "../../hooks/TypingFX";
import IDEContainer from "../IDEcontainer/IDEcontainer";

const Introduction = () => {
  const [showIDE, setShowIDE] = useState(false);

  const typedTextAboutMe = typingFX(
    "Hello! I have been coding professionally for over 1.5 years, and I love what I do!"
  );

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="introduction">
      <div className="topBar">
        <motion.h1
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
        >
          make the app appear onClick from desktop icon.
        </motion.h1>
        <div className="ide-wrapper">
          <button className="open-ide-button" onClick={() => setShowIDE(true)}>
            <img src="../../public/mycomputer.png" alt="Open IDE" />
            <p>about_me</p>
          </button>
          <AnimatePresence>
            {showIDE && (
              <IDEContainer onClose={() => setShowIDE(false)}>
                <p>// About_Me</p>
                <p>
                  console.log('Hello! I have been coding professionally for over
                  1.5 years, and I love what I do! ');
                </p>
                <pre>{typedTextAboutMe}</pre>
                {/* Add more content as needed */}
              </IDEContainer>
            )}
          </AnimatePresence>
        </div>
      </div>
      {/* <div className="columns">
        <motion.div // add clipPath for left side and css to contain it
          className="leftColumn"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.5 }} // Adjust delays as needed
        >
          <h2>Left Column Heading</h2>
          <pre>{typedTextLeft}</pre>
        </motion.div>
        <motion.div // add clipPath for right side
          className="rightColumn"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 1 }} // Adjust delays as needed
        >
          <h2>Right Column Heading</h2>
          <pre>{typedTextRight}</pre>
        </motion.div>
      </div> */}
    </div>
  );
};

export default Introduction;
