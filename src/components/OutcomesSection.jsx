import React from "react";
import { FaCheck } from "react-icons/fa";
import About3 from "../assets/about3.png"; 

const OutcomesSection = () => {
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        {/* Left Image with responsive behavior */}
        <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
          <div className="w-100 d-flex justify-content-center">
            <img
              src={About3}
              alt="Learner"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "500px", height: "auto" }}
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="col-lg-6 col-md-12">
          <h2 className="fw-bold" style={{ color: "#3b3b8f" }}>
            Learner outcomes on courses <br /> you will take
          </h2>
          <ul className="list-unstyled mt-3">
            <li className="d-flex mb-2">
              <FaCheck className="text-warning me-2 flex-shrink-0" />
              <span>
                Techniques to engage effectively with vulnerable children and
                young people.
              </span>
            </li>
            <li className="d-flex mb-2">
              <FaCheck className="text-warning me-2 flex-shrink-0" />
              <span>
                Join millions of people from around the world learning together.
              </span>
            </li>
            <li className="d-flex">
              <FaCheck className="text-warning me-2 flex-shrink-0" />
              <span>
                Online learning is as easy and natural as face-to-face.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
