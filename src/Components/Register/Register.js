import React, { useContext } from 'react';
import { FaGoogle, FaUbuntu } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {
  const {register,updateUserInfo}=useContext(authContext)

  const handleRegister = (e) => {
    e.preventDefault()
    const form =e.target
    const fullName=form.fullName.value
    const email=form.email.value
    const password=form.password.value
    const photoURL=form.photoURL.value
    console.log(fullName,email,password,photoURL);
    register(email,password)
    .then(res=>{
      updateUserInfo(fullName,photoURL)
    })
    .catch(error=>console.log(error))

  }
  return (
    <div className='w-3/4 mx-auto'>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Register With your Email and password</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input required name='fullName' type="text" placeholder="full name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input required name='email' type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input required name='password' type="password" placeholder="password" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input required name='photoURL' type="text" placeholder="photoURL" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;