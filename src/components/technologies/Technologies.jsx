import "./technologies.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const technologies = [
  {
    src: "/java-logo.png",
    alt: "Java",
    details: "Java: Write once, run anywhere.",
  },
  {
    src: "/csharp-logo.png",
    alt: "C#",
    details:
      "C#: Capture-Codemodule-MX: network of custom code modules built to handle intake and processing of mortgage documents. I spear-headed the clean-code initiative to bring this large repository",
  },
  {
    src: "/javascript-logo.png",
    alt: "JavaScript",
    details:
      "JavaScript: High-level, often just-in-time compiled, and multi-paradigm.",
  },
  {
    src: "/python-logo.png",
    alt: "Python",
    details:
      "Python: An interpreted, high-level and general-purpose programming language.",
  },
  {
    src: "/sql-logo.jpg",
    alt: "SQL",
    details:
      "SQL: Domain-specific language used in programming and designed for managing data.",
  },
  {
    src: "/typescript-logo.png",
    alt: "TypeScript",
    details: "TypeScript: JavaScript with syntax for types.",
  },
  {
    src: "/react-logo.png",
    alt: "React",
    details: "React: A JavaScript library for building user interfaces.",
  },
  {
    src: "/spring-logo.png",
    alt: "Spring",
    details: "Spring Boot: Java framework for creating micro services.",
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
          Methodical mind resolved to solve; <br /> a producer of solutions.
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
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            className="techIconContainer"
            variants={variants}
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedTech(tech)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={tech.src} alt={tech.name} />
            <h2>{tech.name}</h2>
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
            <h2>{selectedTech.name}</h2>
            <p>{selectedTech.description}</p>
            <button onClick={() => setSelectedTech(null)}>Close</button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Technologies;
