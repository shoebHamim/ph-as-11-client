import React, { useContext } from 'react';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
  const { googleLogin,login } = useContext(authContext)
  const navigate=useNavigate()
  const handleGoogleLogin = () => {
    googleLogin()
    .then(res=>{
      navigate('/')
    })

  }
  const handleLogin=(e)=>{
    e.preventDefault()
    const form =e.target
    const email=form.email.value
    const password=form.password.value
    console.log(email,password);
    login(email,password)
    .then(res=>{
      form.reset()
      navigate('/')
      console.log(res)})
    .catch(error=>console.log(error))
  }
  return (
    <div className='w-3/4 mx-auto'>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Login With your Email and password or with Google to get access to Review</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' required type="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span  className="label-text">Password</span>
                </label>
                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              </form>
              {/* register? */}
              <label className="label">
                  <Link  to={'/register'} className="label-text-alt link link-hover">Don't have an Account? <span className='text-blue-600 font-bold'> Register</span> </Link>
                </label>

              {/* login with google section */}
              <div
                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
              >
                <p className="text-center font-semibold mx-4 mb-0">Or</p>
              </div>
              <div className='flex sm:flex-row flex-col gap-2 justify-center '>
                <button onClick={handleGoogleLogin} className="normal-case btn btn-outline ">
                  <FaGoogle className='mr-2'></FaGoogle> Login with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;
