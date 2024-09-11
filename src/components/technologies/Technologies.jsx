import "./technologies.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Csharp,
  Java,
  Javascript,
  Python,
  Sql,
  Spring,
  ReactIcon,
  Typescript,
  Aws,
  Html,
  Css,
  Sol,
} from "../svgLogos";

const variants = {
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
      staggerChildren: 0.15,
    },
  },
};

const technologies = [
  {
    //src: "/java-logo.png",
    Component: Java,
    alt: "Java",
    details: "Java: Write once, run anywhere.",
  },
  {
    //src: "/csharp-logo.png",
    Component: Csharp,
    alt: "C#",
    details:
      "C#: Capture-Codemodule-MX: network of custom code modules built to handle intake and processing of mortgage documents. I spear-headed the clean-code initiative to bring this large repository",
  },
  {
    //src: "/javascript-logo.png",
    Component: Javascript,
    alt: "JavaScript",
    details:
      "JavaScript: High-level, often just-in-time compiled, and multi-paradigm.",
  },
  {
    //src: "/python-logo.png",
    Component: Python,
    alt: "Python",
    details:
      "Python: An interpreted, high-level and general-purpose programming language.",
  },
  {
    //src: "/sql-logo.jpg",
    Component: Sql,
    alt: "SQL",
    details:
      "SQL: Domain-specific language used in programming and designed for managing data.",
  },
  {
    //src: "/typescript-logo.png",
    Component: Typescript,
    alt: "TypeScript",
    details: "TypeScript: JavaScript with syntax for types.",
  },
  {
    //src: "/react-logo.png",
    Component: ReactIcon,
    alt: "React",
    details: "React: A JavaScript library for building user interfaces.",
  },
  {
    //src: "/spring-logo.png",
    Component: Spring,
    alt: "Spring",
    details: "Spring Boot: Java framework for creating micro services.",
  },
  {
    Component: Aws,
    alt: "AWS",
    details: "AWS: Amazon Web Services.",
  },
  {
    Component: Html,
    alt: "HTML",
    details: "HTML: Hypertext Markup Language.",
  },
  {
    Component: Css,
    alt: "CSS",
    details: "CSS: Cascading Style Sheets.",
  },
  {
    Component: Sol,
    alt: "Solidity",
    details: "Solidity: Ethereum contract-oriented programming language.",
  },
];

const Technologies = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  return (
    <motion.div
      className="Technologies"
      variants={variants}
      initial="initial"
      //animate="animate"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Over 2 years programming experience; <br /> Focused on bleeding-edge
          technologies.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          {/* <img src="/chase.jpg" className="chasePic" alt="" /> */}
          <h1>
            Technologies <b>I've worked with:</b>
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="techIconContainer"
            variants={variants}
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedTech(tech)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <tech.Component />
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence>
        {selectedTech && (
          <motion.div
            className="techDetails"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <h2>{selectedTech.alt}</h2>
            <p>{selectedTech.details}</p>
            <button onClick={() => setSelectedTech(null)}>Close</button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Technologies;
