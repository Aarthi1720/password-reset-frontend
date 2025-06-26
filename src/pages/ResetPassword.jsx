import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { token } = useParams(); //get token from URL
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://password-reset-backend-hcm1.onrender.com/api/reset-password/${token}`,
        { newPassword }
      );
      toast.success(res.data.message);
      navigate("/login"); //Go to login page after success
    } catch (error) {
      toast.error(error.response?.data?.message || "Token invalid or expired");
    }
  };
  return (
    <div
      className="container d-flex align-items-center justify-content-center min-vh-100"
      style={{ minHeight: "100vh" }}
    >
      <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "400px" }}>
        <h1 className="mb-4 text-center">Reset Your Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 form-group">
            <label className="fw-bold">New Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock"></i>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter your new password"
                value={newPassword}
                required
              />
              {/* Eye icon */}
              <span className="input-group-text" onClick={()=>setShowPassword(!showPassword)} style={{cursor: "pointer"}}>
                <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
              </span>
            </div>
          </div>
          <button type="submit" className="btn btn-success w-100">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
