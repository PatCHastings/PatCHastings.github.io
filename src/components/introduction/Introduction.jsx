import "./introduction.scss";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Introduction = () => {
  const [isTyping, setIsTyping] = useState(false);

  return (
    <motion.div
      className="aboutMe"
      animate={{ opacity: isTyping ? 1 : 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>My Roadmap:</h2>

      <h3>2024:</h3>
    </motion.div>
  );
};

export default Introduction;
