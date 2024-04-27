import React from "react";
import '../styles/Contact.css';
import config from "../config";

const Contact = () => {
    return (
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form action={config.formSpreeEndpoint} method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  };
  
  export default Contact;