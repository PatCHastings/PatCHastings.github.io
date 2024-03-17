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

      <div className="formContainer"></div>
      <form>
        <input type="text" required placeholder="Name" />
        <input type="email" required placeholder="Name" />
        <textarea rows={8} placeholder="Message" />
        <button></button>
      </form>
    </div>
  );
};

export default Contact;
