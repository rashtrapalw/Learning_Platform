import React from "react";
import { FaCheck } from "react-icons/fa";
import About3 from "../assets/about3.png"; 
const OutcomesSection = () => {
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        {/* Left Image with blob shape */}
        <div className="col-md-6 text-center position-relative">
          <div
            style={{
            //   background: "linear-gradient(135deg, #fce3ff 0%, #c8b6ff 100%)",
            //   borderRadius: "50% 30% 50% 30% / 40% 60% 40% 60%",
              width: "500px",
              height: "350px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <img
              src={About3}
              alt="Learner"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="col-md-6">
          <h2 style={{ color: "#3b3b8f" }}>
            Learner outcomes on courses <br /> you will take
          </h2>
          <ul className="list-unstyled mt-3">
            <li className="d-flex mb-2">
              <FaCheck className="text-warning me-2" />
              <span>
                Techniques to engage effectively with vulnerable children and
                young people.
              </span>
            </li>
            <li className="d-flex mb-2">
              <FaCheck className="text-warning me-2" />
              <span>
                Join millions of people from around the world learning together.
              </span>
            </li>
            <li className="d-flex">
              <FaCheck className="text-warning me-2" />
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
