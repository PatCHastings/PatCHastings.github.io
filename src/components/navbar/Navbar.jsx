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
        >
          Portfolio
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/linkedinwhite.png" alt="" />
          </a>
          <a href="#">
            <img src="/Github-Logo.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
