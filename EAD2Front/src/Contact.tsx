import React from "react";
import "./Contact.css"; // Import the external CSS file

export default function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-subheading">
        We’d love to hear from you! Please fill out the form below:
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            
            className="form-textarea"
            placeholder="Write your message here"
          ></textarea>
        </div>
        <button type="submit" className="contact-button">
          Submit
        </button>
      </form>
    </div>
  );
}
