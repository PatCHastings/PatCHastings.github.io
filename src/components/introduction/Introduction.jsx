import "./introduction.scss";
import React, { useState } from "react";
import { motion } from "framer-motion";
import typingFX from "../../hooks/TypingFX";

const Introduction = () => {
  const typedTextLeft = typingFX(
    "This is the left column text.\nHere's some more detail."
  );
  const typedTextRight = typingFX(
    "And this text is for the right column.\nExplore more here."
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
          Introduction
        </motion.h1>
      </div>
      <div className="columns">
        <motion.div
          className="leftColumn"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.5 }} // Adjust delays as needed
        >
          <h2>Left Column Heading</h2>
          <pre>{typedTextLeft}</pre>
        </motion.div>
        <motion.div
          className="rightColumn"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 1 }} // Adjust delays as needed
        >
          <h2>Right Column Heading</h2>
          <pre>{typedTextRight}</pre>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
