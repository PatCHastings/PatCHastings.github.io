import "./testimonials.scss";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Derek Rymers",
    review: `I have had the privilege of working with Patrick for the better part
      of a year now, where he has impressed me on numerous occasions with
      his knowledge of both business and engineering principles, as well as
      his abilities to take on a leadership role within an agile context.`,
    avatar: "/path/to/avatar1.jpg",
  },
  {
    name: "Sam Purdum",
    review:
      "Patrick has come to the Chase team and hit the ground running. He continually works to learn more, improve his skills and is absolutely an asset to the team. He offers a levity that is unique and valuable, and he is fair and always tries to do great work. Thanks for all you do, Patrick, I enjoy working with you Immensely!",
    avatar: "/path/to/avatar2.jpg",
  },
  {
    name: "Adam Youngpeter",
    review:
      "Patrick has been integral in modifying the UI in one of our React projects...",
    avatar: "/path/to/avatar3.jpg",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <div className="main">
      <motion.div
        className="mySwiper"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div className="swiper-slide" key={index}>
            <div className="testimonials-profile-circle">
              <img
                src={testimonial.avatar}
                alt="avatar"
                className="testimonial-avatar"
              />
            </div>
            <h3 className="review-by">{testimonial.name}</h3>
            <p>{testimonial.review}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
