import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      {/* Banner / Hero */}
      <div
        className="text-white d-flex align-items-center bg-primary"
        style={{
      
          minHeight: "40vh",
        }}
      >
        <div className="container text-left">
          <h1 className="fw-bold display-5" style={{ marginTop: "150PX" }}>Contact us</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-left">
              <li className="breadcrumb-item">
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active text-white" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Google Map */}
      <div className="container-fluid px-0">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219104.3335816005!2d73.6981553041223!3d18.52454504095413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1757327867049!5m2!1sen!2sin"
        width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy" ></iframe>
        {/* <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094115!2d144.95373531531685!3d-37.8162797797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f2d1fb%3A0xf0456d2db3f3b6e!2sMelbourne%20CBD!5e0!3m2!1sen!2sau!4v1600416442625!5m2!1sen!2sau"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe> */}
      </div>

      {/* Contact Form & Info */}
      <div className="container py-5">
        <div className="row">
          {/* Form */}
          <div className="col-md-8 mb-4">
            <h3 className="fw-bold mb-4">Get in Touch</h3>
            <form>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Enter Message"
                ></textarea>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Subject"
                />
              </div>
              <button type="submit" className="btn btn-primary px-4">
                Send
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li className="mb-4">
                <strong>📍 Address:</strong>
                <br />
                Buttonwood, California,
                <br />
                Rosemead, CA 91770
              </li>
              <li className="mb-4">
                <strong>📞 Phone:</strong>
                <br />
                +1 253 565 2365
                <br />
                Mon to Fri 9am to 6pm
              </li>
              <li>
                <strong>✉️ Email:</strong>
                <br />
                support@colorlib.com
                <br />
                Send us your query anytime!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
