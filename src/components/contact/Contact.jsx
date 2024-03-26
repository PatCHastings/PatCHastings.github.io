import "./contact.scss";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  //const ref = useRef();
  const formRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  //const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_f5l1gov", "template_458h9sb", formRef.current, {
        publicKey: "XpgxYGB3Q8M4F4A5I",
      })
      .then(
        (result) => {
          setSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Lets connect:</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>phastings82@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+1 614 787 5568</span>
        </motion.div>
      </motion.div>

      <div className="formContainer">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          //transition={{ delay: 4, duration: 1 }}
        >
          <input
            type="text"
            required
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            required
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            rows={8}
            placeholder="Message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
