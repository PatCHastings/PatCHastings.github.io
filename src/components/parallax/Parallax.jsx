import "./parallax.scss";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type, toggleSection }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);
  const yBgMid = useTransform(scrollYProgress, [0, 1], ["10%", "60%"]);
  const yBgMax = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);

  return (
    <div className="parallax" ref={ref}>
      <motion.div
        className="mountainFar"
        style={{
          y: yBg,
          backgroundImage: `url("/4mountain.png")`,
        }}
      ></motion.div>
      <motion.div
        className="mountainMid"
        style={{
          y: yBgMid,
          backgroundImage: `url("/3mountain.png")`,
        }}
      ></motion.div>
      <motion.div
        className="mountainGray"
        style={{
          y: yBgMax,
          backgroundImage: `url("/2mountain.png")`,
        }}
      ></motion.div>
    </div>
  );
};

export default Parallax;
