import React from "react";
import { FaTwitter, FaFacebookF, FaPinterestP } from "react-icons/fa";
import bookLogo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#3e3e99ff", color: "#fff", padding: "60px 0" }}
    >
      <div className="container">
        <div className="row">
          {/* Courses Column */}
          <div className="col-md-3 mb-4">
              {/* Logo */}
              <img
                src={bookLogo}
                alt="Courses Logo"
                style={{ width: "150px", height: "30px", marginRight: "10px" }}
              />


            <p style={{ fontSize: "14px",paddingTop: "30px" }}>
              The automated process starts as soon as your clothes go into the
              machine.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white fs-5">
                <FaTwitter />
              </a>
              <a href="#" className="text-white fs-5">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white fs-5">
                <FaPinterestP />
              </a>
            </div>
          </div>

          {/* Our solutions */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Our solutions</h5>
            <ul className="list-unstyled">
              <li>Design & creatives</li>
              <li>Telecommunication</li>
              <li>Restaurant</li>
              <li>Programing</li>
              <li>Architecture</li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Support</h5>
            <ul className="list-unstyled">
              <li>Design & creatives</li>
              <li>Telecommunication</li>
              <li>Restaurant</li>
              <li>Programing</li>
              <li>Architecture</li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Company</h5>
            <ul className="list-unstyled">
              <li>Design & creatives</li>
              <li>Telecommunication</li>
              <li>Restaurant</li>
              <li>Programing</li>
              <li>Architecture</li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="text-center mt-4" style={{ fontSize: "14px" }}>
          Copyright ©2025 All rights reserved | This template is made with{" "}
          <span style={{ color: "violet" }}>♥</span> by Colorlib
        </div>
      </div>
    </footer>
  );
};

export default Footer;
