import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="call-text">
        Questions? Call <span>000-800-919-1694</span>
      </p>

      <div className="footer-links">
        <ul>
          <li>FAQ</li>
          <li>Media Centre</li>
          <li>Ways to Watch</li>
          <li>Cookie Preferences</li>
          <li>Speed Test</li>
        </ul>

        <ul>
          <li>Help Centre</li>
          <li>Investor Relations</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
          <li>Legal Notices</li>
        </ul>

        <ul>
          <li>Account</li>
          <li>Jobs</li>
          <li>Privacy</li>
          <li>Contact Us</li>
          <li>Only on Netflix</li>
        </ul>
      </div>

      <p className="country-text">Netflix India</p>
    </footer>
  );
};

export default Footer;
