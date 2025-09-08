import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-3">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold fs-3" to="/">
          Courses
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-lg-center text-center text-lg-start gap-3">
            <li className="nav-item">
              <Link className="nav-link active fw-semibold" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/courses">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/about">
                About
              </Link>
            </li>

            {/* Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-semibold"
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
                  <Link className="dropdown-item" to="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/blog-details">
                    Blog Details
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/elements">
                    Element
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/contact">
                Contact
              </Link>
            </li>

            {/* Buttons */}
            <li className="nav-item ms-lg-3">
              <Link className="btn btn-light px-4 py-2 fw-bold" to="/join">
                Join
              </Link>
            </li>
            <li className="nav-item ms-lg-2">
              <Link
                className="btn btn-dark px-4 py-2 fw-bold"
                style={{ fontSize: "1rem", borderRadius: "30px" }}
                to="/login"
              >
                Log in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
