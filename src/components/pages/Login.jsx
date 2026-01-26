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
                <form className="card bg-white pt-8 pb-8 pl-5 pr-5 w-full max-w-sm shrink-0 shadow-blue-900 shadow-2xl">
                    <h1 className="text-5xl text-black font-bold text-center">Login Now!</h1>
                    <div className="card-body">
                        <fieldset className="fieldset">
                            
                            <label className="label text-black pl-2 font-bold">Email</label>
                            <input type="email" className="input rounded-xl" name='email' placeholder="Email" />
                            <label className="label text-black pl-2 font-bold">Password</label>
                            <input type="password" className="input rounded-xl" name='password' placeholder="Password" />

                            <button className="btn btn-neutral rounded-xl mt-4">Login</button>
                            <p className='text-black mt-4 pl-2 '>Are You New? Please
                                <Link className='text-blue-800 font-bold' to="/register">  Register</Link></p>
                        </fieldset>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;