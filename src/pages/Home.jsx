import React from "react";
import Hero from "../assets/h1_hero.png";
import { Card } from "react-bootstrap";
import { Book, Person, Clock } from "react-bootstrap-icons"; // icons

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          minWidth: "100%",
          padding: "2rem 2rem 0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <div className="text-white text-start ps-5 " style={{marginLeft: "90px"}}>
          <h1 className="fw-bold" style={{ fontSize: "60px" }}>
            Welcome
          </h1>
          <h1 className="fw-bold" style={{ fontSize: "60px" }}>
            Learning Platform
          </h1>

          <p className="lead">
            Learn React, Java, AWS and more with our structured courses.
          </p>

          <button className="btn btn-danger btn-lg mt-3">Join For Free</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container-fluid py-5 mt-n5" style={{ marginTop: "-120px" }}>

        <div className="container">
          <div className="row text-center">
            {/* Block 1 */}
            <div className="col-md-4 mb-4">
              <Card className="h-100 shadow border-0 rounded-4 p-4">
                <Book size={50} className="text-primary mb-3" />
                <h5 className="fw-bold">60+ UX courses</h5>
                <p className="text-muted">
                  The automated process all your website tasks.
                </p>
              </Card>
            </div>

            {/* Block 2 */}
            <div className="col-md-4 mb-4">
              <Card className="h-100 shadow border-0 rounded-4 p-4">
                <Person size={50} className="text-success mb-3" />
                <h5 className="fw-bold">Expert instructors</h5>
                <p className="text-muted">
                  The automated process all your website tasks.
                </p>
              </Card>
            </div>

            {/* Block 3 */}
            <div className="col-md-4 mb-4">
              <Card className="h-100 shadow border-0 rounded-4 p-4">
                <Clock size={50} className="text-danger mb-3" />
                <h5 className="fw-bold">Life time access</h5>
                <p className="text-muted">
                  The automated process all your website tasks.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
