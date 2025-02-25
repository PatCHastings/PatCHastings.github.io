import "./portfolio.scss";
import { motion, useAnimation } from "framer-motion";
import React, { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "FormIT Software",
    description:
      "Cloud-based client aqquisition platform utilizing AI tools to streamline software solutions. Built with React, Node.js, PostgreSQL, and AWS.",
    imageUrl: "/formit.png",
  },
  {
    id: 2,
    title: "Crypto Investment CRM",
    description:
      "crypto investment reporting portal designed for managers and investors to track asset holdings, manage investments, and view real-time asset price updates. User authentication, role-based access control, portfolio management, price feed updates, and fund financials tracking.",
    imageUrl: "/cryptoPortal.png",
  },
  {
    id: 3,
    title: "D&D React Spring MVC",
    description:
      "turn-based RPG combat system built with Java Spring Boot for the backend, handling game logic and combat flow, and React.js for the frontend, interacting via REST APIs to display combat results and player actions in real-time.",
    imageUrl: "/dnd.png",
  },
  {
    id: 4,
    title: "Everyhuman Resources Website",
    description:
      "React, Material-UI, and Recharts, smooth animations and section transitions using the Intersection Observer API. Inventory management system enables users to add, categorize, and update product details, which are displayed in real-time across the site.",
    imageUrl: "/reactWebsite.png",
    link: "https://everyhuman-resource.vercel.app/",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "My personal portfolio website built with React.JS and Framer Motion.",
    imageUrl: "/portfolio-site.png",
  },
  {
    id: 6,
    title: "TreasureBlox",
    description:
      "ERC-20 & ERC-721 smart contract. Play-to-earn resource mining blockchain game.",
    imageUrl: "/TreasureBlox.png",
  },
];

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Update the state based on screen width to detect mobile devices
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  const overlayVariants = {
    initial: { scale: 1 },
    animate: { scale: 1.1 },
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const variantsY = {
    initial: {
      x: 0,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="layout">
      <h1>Projects</h1>
      <div className="portfolio-container">
        {" "}
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="portfolio-item"
            whileHover={{ scale: 1.1 }}
            whileInView={isMobile === true ? { scale: 1.1 } : { scale: 1 }}
            onClick={() => handleClick(project.id)}
          >
            <img src={project.imageUrl} alt="Project" />
            <motion.div
              className="overlay"
              variants={overlayVariants}
              initial="hidden"
              animate={selectedId === project.id ? "visible" : "hidden"}
              whileHover="visible"
              transition={{ duration: 0.5 }}
            >
              <h3>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p>{project.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
