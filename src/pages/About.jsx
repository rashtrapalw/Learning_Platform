import React from "react";
import { Book, Person, Clock } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      {/* Hero / Banner Section */}
      <div
        className="text-white d-flex align-items-centernn bg-primary"
        style={{
          
          minHeight: "40vh",
        }}
      >
        <div className="container text-center text-lg-start">
          <h1 className="fw-bold display-4">About us</h1>

          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active text-white" aria-current="page">
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-5">
        <div className="row text-center">
          {/* Block 1 */}
          <div className="col-12 col-md-4 mb-4">
            <Card className="h-100 shadow border-0 rounded-4 p-4">
              <Book size={50} className="text-primary mb-3" />
              <h5 className="fw-bold">60+ UX courses</h5>
              <p className="text-muted">
                The automated process all your website tasks.
              </p>
            </Card>
          </div>

          {/* Block 2 */}
          <div className="col-12 col-md-4 mb-4">
            <Card className="h-100 shadow border-0 rounded-4 p-4">
              <Person size={50} className="text-success mb-3" />
              <h5 className="fw-bold">Expert instructors</h5>
              <p className="text-muted">
                The automated process all your website tasks.
              </p>
            </Card>
          </div>

          {/* Block 3 */}
          <div className="col-12 col-md-4 mb-4">
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
    </>
  );
}

export default About;
