import { motion } from "framer-motion";

const Test = () => {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 100,
      transition: { delay: i * 0.5 },
    }),
    hidden: { opacity: 0 },
  };

  const items = ["patrick", "hastings", "the", "king", "of", "the", "north"];

  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item) => (
          <motion.li variants={variants} key={item} custom={i}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
