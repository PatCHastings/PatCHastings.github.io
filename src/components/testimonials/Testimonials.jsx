import "./testimonials.scss";
import { motion } from "framer-motion";
import typingFX from "../../hooks/TypingFX";

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
      staggerChildren: 0.2,
    },
  },
};

const variantsY = {
  initial: {
    x: 0,
    y: -100,
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

const testimonials = [
  {
    name: "Derek Rymers",
    role: "Software Engineer",
    review: `I have had the privilege of working with Patrick for the better part of a year now, where he has impressed me on numerous occasions with his knowledge of both business and engineering principles, as well as his abilities to take on a leadership role within an agile context.`,
    avatar: "/derek.png",
  },
  {
    name: "Sam Purdum",
    role: "Agility Lead",
    review: `Patrick has come to the Chase team and hit the ground running. He continually works to learn more, improve his skills and is absolutely an asset to the team. He offers a levity that is unique and valuable, and he is fair and always tries to do great work. Thanks for all you do, Patrick, I enjoy working with you Immensely!`,
    avatar: "/sam.jfif",
  },
  {
    name: "Adam Youngpeter",
    role: "Software Engineer",
    review: `Patrick has been integral in modifying the UI in one of our React projects. Whenever we face an issue with the UI, he is quick to make an update so we can get it in for UAT testing and approval. Patrick is always willing to help and brings a great attitude to work every day.`,
    avatar: "/adam.jfif",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="topBar">
        <h1>Testimonials</h1>
      </div>
      <motion.div
        className="columns"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className={`column column-${index + 1}`}
            variants={variants}
            initial="initial"
            whileInView="animate"
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="testimonial-avatar"
            />
            <h2>{testimonial.name}</h2>
            <h3>{testimonial.role}</h3>
            {/* Using motion.pre for the typing effect with initial visibility */}
            <motion.pre
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.5 }} // Staggered effect
            >
              {typingFX(testimonial.review)}
            </motion.pre>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
