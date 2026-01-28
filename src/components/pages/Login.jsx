import React, { useContext, useState } from 'react';
import loginImg from '../../assets/login.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import Swal from 'sweetalert2';


const Login = () => {

    const { signInUser, googleSignIn } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                toast.success("Login Successfully");
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(location.state?.from?.pathname || "/");


                const user = {
                    email,
                    lastLoggedAt: result.user?.metadata?.lastSignInTime
                }

                //update user info in the server
                fetch('https://tourism-server-rose.vercel.app/users', {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    });


            })
            .catch(error => {
                Swal.fire({
                    title: "Login Failed!",
                    icon: "error",
                    draggable: true
                });
            });

    }

    //google sign in handler
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(location.state?.from?.pathname || "/");
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="hero bg-base-200 ">

            <div className="hero-content mt-7  flex-col lg:flex-row">

                <div className="text-center shadow-blue-900 shadow-2xl w-1/2 lg:text-left">

                    <img className='w-full rounded-2xl' src={loginImg} alt="Login" />
                </div>
                <form onSubmit={handleLogin} className="card bg-white pt-8 pb-8 pl-5 pr-5 w-full max-w-sm shrink-0 shadow-blue-900 shadow-2xl">
                    <h1 className="text-5xl text-black font-bold text-center">Login Now!</h1>
                    <div className="card-body">
                        <fieldset className="fieldset">

                            <label className="label text-black pl-2 font-bold">Email</label>
                            <input type="email" className="input rounded-xl" name='email' placeholder="Email" />
                            <label className="label text-black pl-2 font-bold">Password</label>
                            <div className="relative form-control ">
                                <input
                                    className="input  rounded-xl"
                                    placeholder="Password"
                                    type={showPass ? "text" : "password"}
                                    name="password"
                                    id=""
                                    required
                                />
                                <p
                                    className="absolute top-4 right-2"
                                    onClick={() => setShowPass(!showPass)}
                                >
                                    {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
                                </p>
                            </div>

                            <button className="btn btn-neutral rounded-xl mt-4">Login</button>
                            <p className='text-black mt-4 pl-2 '>Are You New? Please
                                <Link className='text-blue-800 font-bold' to="/register">  Register</Link></p>
                        </fieldset>
                    </div>
                    {/* Google */}
                    <button onClick={handleGoogleSignIn} className="btn bg-black rounded-2xl ml-5 mr-5 text-white ">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>


                </form>
            </div>

        </div>
    );
};

export default Login;