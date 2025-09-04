import React from "react";
import { Link } from "react-router-dom";

// ✅ Import images (Vite way, from src/assets)
import featured1 from "../assets/featured1.png";
import featured2 from "../assets/featured2.png";
import featured3 from "../assets/featured3.png";
// import featured4 from "../assets/featured4.png";
// import featured5 from "../assets/featured5.png";
// import featured6 from "../assets/featured6.png";

const courseImages = [
  { img: featured1, title: "Course 1", price: "$135" },
  { img: featured2, title: "Course 2", price: "$140" },
  { img: featured3, title: "Course 3", price: "$99" },
  // { img: featured4, title: "Course 4", price: "$199" },
  // { img: featured5, title: "Course 5", price: "$120" },
  // { img: featured6, title: "Course 6", price: "$175" },
];

function Courses() {
  return (
    <main>
      {/* ✅ Hero Section */}
      <section className="slider-area slider-area2">
        <div className="single-slider slider-height2">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-11 col-md-12">
                <div className="hero_caption hero_caption2">
                  <h1>Our courses</h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Services</a>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Featured Courses */}
      <section className="courses-area section-padding40 fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="section-tittle text-center mb-55">
                <h2>Our featured courses</h2>
              </div>
            </div>
          </div>

          <div className="row">
            {courseImages.map((course, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="properties properties2 mb-30">
                  <div className="properties__card">
                    <div className="properties__img overlay1">
                      <a href="#">
                        <img
                          src={course.img}
                          alt={course.title}
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="properties__caption">
                      <p>User Experience</p>
                      <h3>
                        <a href="#">{course.title}</a>
                      </h3>
                      <p>
                        The automated process all your website tasks. Discover
                        tools and techniques to engage effectively with
                        vulnerable children and young people.
                      </p>
                      <div className="properties__footer d-flex justify-content-between align-items-center">
                        <div className="restaurant-name">
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half"></i>
                          </div>
                          <p>
                            <span>(4.5)</span> based on 120
                          </p>
                        </div>
                        <div className="price">
                          <span>{course.price}</span>
                        </div>
                      </div>
                      <a href="#" className="border-btn border-btn2">
                        Find out more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Load More Button */}
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="section-tittle text-center mt-40">
                <a href="#" className="border-btn">
                  Load More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Courses;
