import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://password-reset-backend-hcm1.onrender.com/api/forgot-password",
        { email }
      );
      toast.success(res.data.message || "Reset Link sent! Check your email."); //show success message
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to send link");
    }
  };
  return (
    <div
      className="container d-flex align-items-center justify-content-center min-vh-100"
      style={{ minHeight: "100vh" }}
    >
      <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "400px" }}>
        <h1 className="mb-4 text-center">Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 form-group">
            <label className="fw-bold">Email</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-envelope"></i>
              </span>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your registered email"
                value={email}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-warning w-100">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
