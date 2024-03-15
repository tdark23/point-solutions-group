import React from "react";
import { Link } from "react-router-dom";
import { footerElements } from "../utils/footer";
import { socialNetworks } from "../utils/socialNetworks";
import "./../styles/components/footer.css";
import logo from "./../assets/images/pslogoweb.png";

const Footer = () => {

  return (
    <footer className="footer-section">
      <div className="space" />
      <div className="footer-footer-top">
        <Link to="/" className="logo-link-wrapper" href="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        {footerElements.map((element) => (
          <div className="footer-wrapper" key={element.id}>
            <h5> {element.title} </h5>
            {element.sub.map((subtitle) => (
              <div className="footer-link-wrapper" key={subtitle.name}>
                <a
                  className="footer-link"
                  href={subtitle.link}
                >
                  {subtitle.name}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-line" />
      <div className="footer-footer-bottom">
        <p>© 2024 POINT SOLUTIONS GROUP. All Rights Reserved. </p>
        <div className="footer-flex">
          {socialNetworks.map((social) => (
            <a className="icon-container" href={social.link}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
