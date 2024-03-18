import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Feel free to reach me:</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>phastings82@gmail.com</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>phastings82@gmail.com</span>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
