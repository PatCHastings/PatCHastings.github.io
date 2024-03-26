import "./navbar.scss";
import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

// https://www.linkedin.com/in/PatCHastings
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <motion.div className="social">
          <motion.a
            href="https://www.linkedin.com/in/PatCHastings"
            whileHover={{ scale: 1.1 }}
          >
            <img src="/linkedinwhite.png" alt="" />
          </motion.a>
          <motion.a
            href="https://patchastings.github.io/"
            whileHover={{ scale: 1.1 }}
          >
            <img src="/Github-Logo.png" alt="" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
