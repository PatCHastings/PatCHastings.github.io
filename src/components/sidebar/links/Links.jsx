import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggeredChildren: 0.05,
      staggeredDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },

  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = [
    "Homepage",
    "Introduction",
    "Technologies",
    "Portfolio",
    "Testimonials",
    "Contact",
  ];

  const handleClick = (e, id) => {
    e.preventDefault();

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Element not found:", id);
    }
  };

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => handleClick(e, item)}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
