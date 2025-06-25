import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const handleChange = (e)=>{
     setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            // console.log(formData);
            const res = await axios.post("http://localhost:5000/api/register", formData);
            toast.success(res.data.message);
            setFormData({
                name: "", email: "", password:""
            });
            navigate("/login");
        } catch (error) {
            toast.error(error.response?.data?.message || "Registration failed");
        }
    }
    return (
        <div className='container d-flex align-items-center justify-content-center min-vh-100' style={{minHeight: "100vh"}}>
            <div className='card p-4 shadow-lg w-100' style={{maxWidth:"400px"}}>
                <h1 className='mb-4 text-center'>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-3 form-group'>
                    <label className='fw-bold'>Name</label>
                    <div className='input-group'>
                        <span className='input-group-text'><i className='bi bi-person'></i></span>
                        <input
                    type='text'
                    name='name'
                    className='form-control'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Enter your name'
                    required
                    />
                    </div>
                </div>
                <div className='mb-3 form-group'>
                    <label className='fw-bold'>Email</label>
                    <div className='input-group'>
                        <span className='input-group-text'><i className='bi bi-envelope'></i></span>
                        <input
                    type='email'
                    name='email'
                    className='form-control'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Enter your email'
                    required
                    />
                    </div>
                </div>
                <div className='mb-3 form-group'>
                    <label className='fw-bold'>Password</label>
                    <div className='input-group'>
                        <span className='input-group-text'><i className='bi bi-lock'></i></span>
                        <input
                    type='password'
                    name='password'
                    className='form-control'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Enter your password'
                    required
                    />
                    </div>
                </div>
                <button type='submit' className='btn btn-primary w-100'>Register</button>
                <Link to={"/login"}>Already have an account?Login</Link>
            </form>
            </div>
        </div>
    );
};

export default Register;