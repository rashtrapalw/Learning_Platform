import React from "react";
import { FaCheck, FaPlay } from "react-icons/fa";

function SkillsSection() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-7">
            {/* Icon */}
            <div className="mb-3">
              <span
                className="d-inline-flex align-items-center justify-content-center rounded-circle"
                style={{
                  backgroundColor: "#9b5cff",
                  color: "#fff",
                  width: "50px",
                  height: "50px",
                }}
              >
                <FaPlay style={{ transform: "rotate(90deg)" }} />
              </span>
            </div>

            {/* Heading */}
            <h2 className="fw-bold text-primary mb-3">
              Learn new skills online with top educators
            </h2>

            {/* Description */}
            <p className="text-muted">
              The automated process all your website tasks. Discover tools and
              techniques to engage effectively with vulnerable children and
              young people.
            </p>

            {/* List */}
            <ul className="list-unstyled">
              <li className="mb-2">
                <FaCheck className="text-warning me-2" />
                Techniques to engage effectively with vulnerable children and
                young people.
              </li>
              <li className="mb-2">
                <FaCheck className="text-warning me-2" />
                Join millions of people from around the world learning together.
              </li>
              <li className="mb-2">
                <FaCheck className="text-warning me-2" />
                Online learning is as easy and natural as chatting with a group
                of friends.
              </li>
            </ul>
          </div>

          {/* Right Side Play Button */}
          <div className="col-md-5 text-center">
            <button
              className="btn rounded-circle"
              style={{
                backgroundColor: "#ff9557",
                width: "60px",
                height: "60px",
              }}
            >
              <FaPlay className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
