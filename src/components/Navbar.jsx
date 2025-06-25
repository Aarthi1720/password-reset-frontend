import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
   const {token} = useContext(AuthContext);
   const {logout} = useContext(AuthContext);
   const navigate = useNavigate();

   const handleLogout= ()=>{
      logout();
      toast.success("Logged out");
      navigate("/login");
   }
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark px-3'>
            <div className='container-fluid'>
               <Link to={"/"} className='navbar-brand'>User Auth</Link>
            {/* Hamburger toggle for mobile */}
            <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navMenu"><span className='navbar-toggler-icon'></span></button>
            
            {/* Collpasible links */}
            <div className='collapse navbar-collapse justify-content-end' id="navMenu">
             <ul className='navbar-nav ms-auto gap-3'>
                {token ? (
                   <li className='nav-item'>
                   <button onClick={handleLogout} className='bg-white btn btn-link text-black'>Logout</button>
                </li>
                ) : (
                  <>
                  <li className='nav-item'>
                   <Link to={"/register"} className='text-white'>Register</Link>
                </li>
                <li className='nav-item'>
                   <Link to={"/login"} className='text-white'>Login</Link>
                </li>
                  </>
                )}
             </ul>
            </div>

            </div>
        </nav>
    );
};

export default Navbar;