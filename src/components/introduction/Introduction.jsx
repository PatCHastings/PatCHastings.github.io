import "./introduction.scss";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import typingFX from "../../hooks/TypingFX";
import IDEContainer from "../IDEcontainer/IDEcontainer";

const Introduction = () => {
  const [showIDE, setShowIDE] = useState(false);

  const typedTextAboutMe = typingFX(
    "I often find myself deep in thought; pondering how a great idea could be implemented."
  );

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const variantsZ = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      delay: 0.5,
      transition: {
        type: "tween",
        duration: 2.5,
        staggerChildren: 0.2,
      },
    },
  };

  const animate = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  };

  return (
    <div className="introduction">
      <div className="topBar">
        <motion.h1
          style={{ display: showIDE ? "none" : "block" }}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
        >
          I always strive to create beautiful and functional applications.
        </motion.h1>
        <motion.div animate={animate} className="ide-wrapper">
          <button
            className="open-ide-button"
            style={{ display: showIDE ? "none" : "block" }}
            onClick={() => setShowIDE(true)}
          >
            <img src="/mycomputer.png" alt="Open IDE" />
            <p>about_me</p>
          </button>
          <AnimatePresence>
            {showIDE && (
              <IDEContainer
                onClose={() => setShowIDE(false)}
                variants={variantsZ}
                animate="animate"
              >
                <p className="aboutMe">{/* About Me */}</p>
                <br />
                <p>
                  <motion.span
                    className="colorCase"
                    variants={variantsZ}
                    initial="initial"
                    animate="animate"
                    transition={{ type: "tween", duration: 1.0 }}
                  >
                    console.log(&apos;
                  </motion.span>
                  Hello! I am a Software Engineer with over 2 years exp and I
                  love what I do!
                </p>
                <br />
                <p>
                  <motion.span
                    className="colorCase"
                    variants={variantsZ}
                    initial="initial"
                    animate="animate"
                  >
                    console.log(&apos;
                  </motion.span>
                  I have a wonderful family, friends, and extremely positive
                  outlook on life!
                </p>
                <br />
                <p>
                  <motion.span
                    className="colorCase"
                    variants={variantsZ}
                    initial="initial"
                    animate="animate"
                  >
                    console.log(&apos;
                  </motion.span>
                  I have a huge appreciation for great video games, namely
                  oldschool RPGs and anything made by FromSoftware!;
                </p>
                <br />
                <p>
                  <motion.span
                    className="colorCase"
                    variants={variantsZ}
                    initial="initial"
                    animate="animate"
                  >
                    console.log(&apos;
                  </motion.span>
                  For years I have been fascinated with cryptocurrencies and
                  blockchain; the idea of value decentralized via computer
                  science unleashed on the internet is a concept I frequently
                  ponder and research.
                </p>
                <br />
                <pre className="typedTxt">{typedTextAboutMe}</pre>
                {/* Add more content as needed */}
              </IDEContainer>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
