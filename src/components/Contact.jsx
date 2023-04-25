import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "../styles/ContactStyles.css";

function Contact() {
  return (
    <section id="contact">
      <div className="contact__container">
        <div className="contact__container-content">
          <h3>Let's work together...</h3>
          <p>How do you take your coffee?</p>
        </div>
        <div className="contact__container-icons">
          <a
            href="https://www.linkedin.com/in/josé-gómez-8a6067246/"
            target="_blank"
          >
            <span>
              <FaLinkedin className="icon" style={{ color: "white" }} />
              Linkedin
            </span>
          </a>

          <a href="https://github.com/adore1968" target="_blank">
            <span>
              <FaGithub className="icon" />
              Github
            </span>
          </a>
          <a href="https://twitter.com/adore_1986" target="_blank">
            <span>
              <FaTwitter className="icon" />
              Twitter
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
