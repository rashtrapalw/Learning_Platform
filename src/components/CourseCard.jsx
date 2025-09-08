import React from "react";
import Slider from "react-slick";

const CourseCard = ({ courses }) => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,   // show 3 cards at a time
    slidesToScroll: 1, // move one by one
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 992, // for tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // for mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-5">Our Featured Courses</h2>

      <Slider {...settings}>
        {courses.map((course) => (
          <div key={course.id} className="px-2">
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
      </Slider>
    </div>
  );
};

export default CourseCard;
