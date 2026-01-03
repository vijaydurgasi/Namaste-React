import { useEffect, useState } from "react";

const Contact = () => {

const [name, setName] = useState("");

const [email, setEmail] = useState("");

const [message, setMessage] = useState("");

const [detailsSent, setdetailsSent] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    setdetailsSent("true");

    setTimeout(() => setdetailsSent(false), 2000);

};

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      <p className="contact-text">
        We’d love to hear from you! Whether you have questions, feedback, or
        suggestions, feel free to reach out.
      </p>

      <div className="contact-info">
        <p>
          <strong>Name:</strong> Vijay Durgasi
        </p>
        <p>
          <strong>Email:</strong> vijaydurgasi@example.com
        </p>
        <p>
          <strong>Location:</strong> Hyderabad, India
        </p>
      </div>

      <h2 className="contact-subtitle">Get in Touch</h2>

      <form className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          className="contact-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Your Email"
          className="contact-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Your Message"
          className="contact-textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button className="contact-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
