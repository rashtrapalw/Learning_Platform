import React from "react";
import { Link } from "react-router-dom";
import courseData from "../data/courseData";

function Courses() {
  return (
    <>
      {/* Banner / Hero */}
      <div
        className="text-white d-flex align-items-center bg-primary"
        style={{
          
          minHeight: "40vh",
        }}
      >
        <div className="container text-center text-lg-start">
          <h1 className="fw-bold display-4" style={{ marginTop: "150PX" }}>Our Courses</h1>

          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-left">
              <li className="breadcrumb-item">
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
             <li className="breadcrumb-item">
                <Link to="/" className="text-white text-decoration-none">
                  Services
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-5">Our Featured Courses</h2>
        <div className="row g-4">
          {courseData.map((course) => (
            <div key={course.id} className="col-12 col-md-6 col-lg-4">
              <div
                className="card h-100 shadow-sm border-0"
                style={{ borderRadius: "15px", overflow: "hidden" }}
              >
                {/* Image */}
                <img
                  src={course.img}
                  className="card-img-top"
                  alt={course.title}
                  style={{ height: "220px", objectFit: "cover" }}
                />

                {/* Card Body */}
                <div className="card-body">
                  {/* Category */}
                  <p className="text-muted mb-1" style={{ fontSize: "0.85rem" }}>
                    {course.category}
                  </p>

                  {/* Title */}
                  <h5 className="fw-bold">{course.title}</h5>

                  {/* Description */}
                  <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                    {course.desc}
                  </p>

                  {/* Date */}
                  {course.date && (
                    <p className="text-muted mb-2" style={{ fontSize: "0.85rem" }}>
                      📅 {course.date}
                    </p>
                  )}

                  {/* Rating & Reviews */}
                  {course.rating && (
                    <div className="d-flex align-items-center mb-3">
                      <span className="text-warning fw-bold me-2">
                        ⭐ {course.rating}
                      </span>
                      <small className="text-muted">
                        ({course.reviews} reviews)
                      </small>
                    </div>
                  )}

                  {/* Price */}
                  {course.price && (
                    <h6 className="fw-bold text-primary">{course.price}</h6>
                  )}
                </div>

                {/* Footer Button */}
                <div className="card-footer bg-white border-0 text-center">
                  <button className="btn btn-outline-primary px-4 rounded-pill">
                    Find Out More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;

