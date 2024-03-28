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
          <a href="https://www.linkedin.com/in/PatCHastings">
            <motion.img
              src="/linkedinwhite.png"
              alt=""
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            />
          </a>
          <a href="https://patchastings.github.io/">
            <motion.img
              src="/Github-Logo.png"
              alt=""
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
