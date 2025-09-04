import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary"
      style={{ minHeight: "80px", paddingTop: "1rem", paddingBottom: "1rem" }}
    >
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/">
          <h2>Courses</h2>
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            {/* Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="blogDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Blog
              </a>
              <ul className="dropdown-menu" aria-labelledby="blogDropdown">
                <li>
                  <Link className="dropdown-item" to="/blog">Blog</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/blog-details">Blog Details</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/elements">Element</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

            {/* Buttons */}
            <li className="nav-item ms-lg-3">
              <Link className="btn btn-light" to="/join">Join</Link>
            </li>
            <li className="nav-item ms-lg-2">
              <Link className="btn btn-dark" to="/login">Log in</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
