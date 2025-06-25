import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">Welcome to Auth App</h1>
      <p className="lead">Please register or login to continue.</p>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <Link to={"/register"} className="btn btn-primary">
          Register
        </Link>
        <Link to={"/login"} className="btn btn-success">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
