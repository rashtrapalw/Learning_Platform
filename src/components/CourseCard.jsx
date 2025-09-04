import React from "react";
import featured1 from "../assets/featured1.png";
import featured2 from "../assets/featured2.png";
import featured3 from "../assets/featured3.png";

const CourseCard = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-5">Our Featured Courses</h2>

      <div
        id="courseCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#courseCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#courseCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <div className="row g-3">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={featured1}
                    className="card-img-top img-fluid"
                    alt="Course 1"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <small className="text-muted">User Experience</small>
                    <h5 className="fw-bold mt-2">
                      Fundamental of UX for Application Design
                    </h5>
                    <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                      The automated process all your website tasks. Discover
                      tools and techniques to engage effectively with children
                      and young people.
                    </p>
                    <div className="d-flex align-items-center mb-2">
                      <span className="text-warning me-2">★★★★☆</span>
                      <small className="text-muted">(4.5) based on 120</small>
                    </div>
                    <h6 className="fw-bold text-primary">$135</h6>
                  </div>
                  <div className="card-footer bg-white border-0">
                    <button className="btn btn-outline-primary w-100">
                      Find Out More
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={featured2}
                    className="card-img-top img-fluid"
                    alt="Course 2"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <small className="text-muted">User Experience</small>
                    <h5 className="fw-bold mt-2">
                      Fundamental of UX for Application Design
                    </h5>
                    <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                      The automated process all your website tasks. Discover
                      tools and techniques to engage effectively with children
                      and young people.
                    </p>
                    <div className="d-flex align-items-center mb-2">
                      <span className="text-warning me-2">★★★★☆</span>
                      <small className="text-muted">(4.5) based on 120</small>
                    </div>
                    <h6 className="fw-bold text-primary">$135</h6>
                  </div>
                  <div className="card-footer bg-white border-0">
                    <button className="btn btn-outline-primary w-100">
                      Find Out More
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={featured3}
                    className="card-img-top img-fluid"
                    alt="Course 3"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <small className="text-muted">User Experience</small>
                    <h5 className="fw-bold mt-2">
                      Fundamental of UX for Application Design
                    </h5>
                    <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                      The automated process all your website tasks. Discover
                      tools and techniques to engage effectively with children
                      and young people.
                    </p>
                    <div className="d-flex align-items-center mb-2">
                      <span className="text-warning me-2">★★★★☆</span>
                      <small className="text-muted">(4.5) based on 120</small>
                    </div>
                    <h6 className="fw-bold text-primary">$135</h6>
                  </div>
                  <div className="card-footer bg-white border-0">
                    <button className="btn btn-outline-primary w-100">
                      Find Out More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Slide */}
          <div className="carousel-item">
            <div className="row g-3">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={featured1}
                    className="card-img-top img-fluid"
                    alt="Course 4"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <small className="text-muted">User Experience</small>
                    <h5 className="fw-bold mt-2">
                      Fundamental of UX for Application Design
                    </h5>
                    <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                      Same description for second slide course.
                    </p>
                    <div className="d-flex align-items-center mb-2">
                      <span className="text-warning me-2">★★★★☆</span>
                      <small className="text-muted">(4.5) based on 120</small>
                    </div>
                    <h6 className="fw-bold text-primary">$135</h6>
                  </div>
                  <div className="card-footer bg-white border-0">
                    <button className="btn btn-outline-primary w-100">
                      Find Out More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#courseCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#courseCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
