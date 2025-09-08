import React from "react";

function Login() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?nature,water')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Glassmorphism Card */}
      <div
        style={{
          width: "350px",
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(12px)",
          borderRadius: "12px",
          padding: "30px 25px",
          color: "white",
          boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
          position: "relative",
          textAlign: "center",
        }}
      >
        {/* Avatar Circle */}
        <div
          style={{
            width: "70px",
            height: "70px",
            background: "linear-gradient(135deg, #6a11cb, #2575fc)",
            borderRadius: "50%",
            margin: "-55px auto 15px auto",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.4)",
          }}
        ></div>

        <h2 style={{ marginBottom: "25px", fontWeight: "bold" }}>Login Here</h2>

        {/* Email */}
        <div className="mb-3 text-start">
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
            padding: "10px",
            border: "none",
            transition: "0.3s",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "#2575fc";
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
