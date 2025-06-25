import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://password-reset-backend-hcm1.onrender.com/api/login",
        formData
      );
      const token = res.data.token;
      login(token); //Save token to localStorage + context
      toast.success(res.data.message);
      setFormData({ email: "", password: "" });
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };
  return (
    <div
      className="container d-flex align-items-center justify-content-center min-vh-100"
      style={{ minHeight: "100vh" }}
    >
      <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "400px" }}>
        <h1 className="mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 form-group">
            <label className="fw-bold">Email</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-envelope"></i>
              </span>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="mb-3 form-group">
            <label className="fw-bold">Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock"></i>
              </span>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
          <div className="d-flex justify-content-between mt-3">
            <Link to={"/register"}>Don't have an account?Register</Link>
            <Link to={"/forgot-password"}>Forgot Password</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
