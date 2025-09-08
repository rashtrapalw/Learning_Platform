import React from "react";
import BgVideo from "../assets/bgvideo.mp4";
import Loder from "../assets/loder.png";

function Login() {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={BgVideo} type="video/mp4" />
      </video>

      {/* Glassmorphism Card */}
      <div
        style={{
          width: "450px",
          background: "rgba(0, 0, 0, 0.45)",
          borderRadius: "12px",
          padding: "40px 30px",
          color: "white",
          boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
          position: "relative",
          textAlign: "center",
        //   backdropFilter: "blur(6px)",
        }}
      >
        {/* Avatar Circle */}
        <div
          style={{
            width: "80px",
            height: "80px",
            backgroundImage: `url(${Loder})`,
            backgroundSize: "60%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "50%",
            margin: "-70px auto 15px auto",
            boxShadow: "0px 5px 20px rgba(0,0,0,0.5)",
            backgroundColor: "white",
          }}
        ></div>

        <h2 style={{ marginBottom: "25px", fontWeight: "bold" }}>Login Here</h2>

        {/* Email */}
        <div className="mb-4 text-start">
          <label style={{ fontWeight: "600" }}>Email</label>
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            style={{
              background: "transparent",
              border: "none",
              borderBottom: "1px solid #ccc",
              borderRadius: "0",
              color: "white",
            }}
          />
        </div>

        {/* Password */}
        <div className="mb-4 text-start">
          <label style={{ fontWeight: "600" }}>Password</label>
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            style={{
              background: "transparent",
              border: "none",
              borderBottom: "1px solid #ccc",
              borderRadius: "0",
              color: "white",
            }}
          />
        </div>

        {/* Login Button */}
        <button
          className="w-100 mb-3"
          style={{
            background: "white",
            color: "black",
            fontWeight: "bold",
            borderRadius: "30px",
            padding: "12px",
            border: "none",
            transition: "0.3s",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "linear-gradient(to right, #4facfe, #e996f6)";
            e.target.style.color = "white";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "white";
            e.target.style.color = "black";
          }}
        >
          Login
        </button>

        {/* Links */}
        <div style={{ fontSize: "0.9rem" }}>
          <a
            href="#"
            style={{
              color: "#fff",
              textDecoration: "underline",
              display: "block",
              marginBottom: "10px",
            }}
          >
            Forget Password
          </a>
          <a
            href="#"
            style={{
              color: "#fff",
              textDecoration: "underline",
            }}
          >
            Registration
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
