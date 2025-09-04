import React from "react";

// Import images
import topic1 from "../assets/topic1.png";
import topic2 from "../assets/topic2.png";
import topic3 from "../assets/topic3.png";
import topic4 from "../assets/topic4.png";
import topic5 from "../assets/topic5.png";
import topic6 from "../assets/topic6.png";
import topic7 from "../assets/topic7.png";
import topic8 from "../assets/topic8.png";

const subjects = [
  { id: 1, title: "PROGRAMING", img: topic1 },
  { id: 2, title: "PROGRAMING", img: topic2 },
  { id: 3, title: "PROGRAMING", img: topic3 },
  { id: 4, title: "PROGRAMING", img: topic4 },
  { id: 5, title: "PROGRAMING", img: topic5 },
  { id: 6, title: "PROGRAMING", img: topic6 },
  { id: 7, title: "PROGRAMING", img: topic7 },
  { id: 8, title: "PROGRAMING", img: topic8 },
];

const SubjectsSection = () => {
  return (
    <section className="container my-5 text-center">
      <h2 className="fw-bold mb-4" style={{ color: "#3b3b8f" }}>
        Explore top subjects
      </h2>

      {/* Grid */}
      <div className="row g-4 justify-content-center">
        {subjects.map((subj) => (
          <div className="col-6 col-md-3" key={subj.id}>
            <div
              className="subject-card position-relative rounded overflow-hidden"
              style={{ cursor: "pointer" }}
            >
              <img
                src={subj.img}
                alt={subj.title}
                className="img-fluid w-100"
                style={{ height: "150px", objectFit: "cover" }}
              />
              <div
                className="position-absolute top-50 start-50 translate-middle text-white fw-bold"
                style={{
                  fontSize: "1rem",
                  textShadow: "0px 0px 6px rgba(0,0,0,0.6)",
                }}
              >
                {subj.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-4">
        <button
          className="btn btn-outline-warning px-4"
          style={{ borderRadius: "8px", fontWeight: "500" }}
        >
          View More Subjects
        </button>
      </div>
    </section>
  );
};

export default SubjectsSection;
