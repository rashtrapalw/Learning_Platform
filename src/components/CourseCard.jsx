import React from "react";

const CourseCard = ({ courses }) => {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-5">Our Featured Courses</h2>

      <div className="row g-3">
        {courses.map((course) => (
          <div key={course.id} className="col-sm-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <img
                src={course.img}
                className="card-img-top img-fluid"
                alt={course.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <small className="text-muted">{course.category}</small>
                <h5 className="fw-bold mt-2">{course.title}</h5>
                <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                  {course.desc}
                </p>
                <div className="d-flex align-items-center mb-2">
                  <span className="text-warning me-2">{course.rating}</span>
                  <small className="text-muted">
                    ({course.rating}) based on {course.reviews}
                  </small>
                </div>
                <h6 className="fw-bold text-primary">{course.price}</h6>
              </div>
              <div className="card-footer bg-white border-0">
                <button className="btn btn-outline-primary w-100">
                  Find Out More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
