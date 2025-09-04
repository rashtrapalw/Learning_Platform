import React from "react";
import Slider from "react-slick";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";
import learnImg from "../assets/topic1.png";

const experts = [
  { id: 1, name: "Mr. Shakil", img: team1, desc: "The automated process all your website tasks." },
  { id: 2, name: "Mr. Arafat", img: team2, desc: "The automated process all your website tasks." },
  { id: 3, name: "Mr. Saiful", img: team3, desc: "The automated process all your website tasks." },
  { id: 4, name: "Mr. Urela", img: team4, desc: "The automated process all your website tasks." },
];

const ExpertsSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // show 4 experts at a time
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="container my-5 text-center">
      <h2 className="fw-bold mb-4" style={{ color: "#3b3b8f" }}>
        Community experts
      </h2>

      <Slider {...settings}>
        {experts.map((expert) => (
          <div key={expert.id} className="px-3">
            <div className="card border-0 bg-transparent">
              <div className="d-flex justify-content-center">
                <img
                    src={expert.img}
                    alt={expert.name}
                    className="rounded-circle border border-3 border-light shadow"
                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                    />

              </div>
              <div className="card-body">
                <h5 className="fw-bold mt-3" style={{ color: "#3b3b8f" }}>
                  {expert.name}
                </h5>
                <p className="text-muted small">{expert.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>



          <div className="container my-5">
       <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={learnImg}
            alt="Learning"
            className="img-fluid rounded shadow" style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* Right Content */}
        <div className="col-md-6">
          <h2
            className="fw-bold mb-3"
            style={{ color: "#3b3b8f", lineHeight: "1.4" }}
          >
            Take the next step toward <br />
            your personal and <br />
            professional goals with us.
          </h2>
          <p className="text-muted mb-4">
            The automated process all your website tasks. Discover tools and
            techniques to engage effectively with vulnerable children and young
            people.
          </p>
          <button
            className="btn px-4 py-2"
            style={{
              backgroundColor: "#f77f42",
              color: "#fff",
              borderRadius: "6px",
              fontWeight: "600",
            }}
          >
            Join Now For Free
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
