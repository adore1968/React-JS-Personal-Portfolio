import React from "react";
import "../styles/FooterStyles.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer__container">
        <div className="footer__container-left">
          <p>
            **This is just a fake portfolio. All the projects and contact
            details given are not real.
          </p>
        </div>
        <div className="footer__container-right">
          <p>© Created for freeCodeCamp </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
