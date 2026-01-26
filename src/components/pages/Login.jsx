import React from 'react';
import loginImg from '../../assets/login.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero bg-base-200 ">
            
            <div className="hero-content mt-7  flex-col lg:flex-row">
                
                <div className="text-center shadow-blue-900 shadow-2xl w-1/2 lg:text-left">
                    
                    <img className='w-full rounded-2xl' src={loginImg} alt="Login" />
                </div>
                <div className="card bg-white pt-8 pb-8 pl-5 pr-5 w-full max-w-sm shrink-0 shadow-blue-900 shadow-2xl">
                    <h1 className="text-5xl text-black font-bold text-center">Login now!</h1>
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label text-black">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label text-black">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover text-black">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                            <p className='text-black mt-4'>Are You New Here? Please 
                                 <Link className='text-blue-500 font-bold' to="/register">  Register</Link></p>
                        </fieldset>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Login;