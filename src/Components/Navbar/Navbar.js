import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import logo from '../../images/camera.png'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(authContext)
  const hanldleLogout=()=>{
    logout()
    navigate("/")
  }
  console.log();
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link>Services</Link></li>

            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost normal-case text-xl">
            <img className='w-10 mr-2' src={logo} alt="" />
            ShootPro</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to={'/services'}>Services</Link></li>

          </ul>
        </div> 
         <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to={'/blog'}>Blog</Link></li>

          </ul>
        </div>
        {user?.uid &&
          <>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li><Link to={'/myreviews'}>My Reviews</Link></li>

              </ul>
            </div>  <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li><Link to={'/addservice'}>Add Services</Link></li>

              </ul>
            </div>
          </>
        }



        <div className="navbar-end">
          {user?.uid ?
          <>
          <button className='btn btn-outline btn-warning' onClick={hanldleLogout} >LogOut </button> 
        
          </>:
            <Link className="btn" to={'/login'}>Login</Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;