import React, { useContext, useState } from 'react';
import loginImg from '../../assets/login.jpg';
import { Link } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);

    const handleSignup = event => {
        event.preventDefault();
        // Handle registration logic here
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(name, email, password, photoURL);


        //password checkinng
        if (password.length < 6) {
            toast.error("Password Can not be less then 6 charecter", {});
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error("Password must be one UpperCase Charecter", {});
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error("Password must be one LowerCase Charecter", {});
            return;
        }

        createUser(email, password)

            .then(result => {
                Swal.fire({
                    title: "Registration Successful!",
                    icon: "success",
                    draggable: true
                });

                const createdUser = result.user;
                console.log(createdUser);
                form.reset();
                const createdAt = result.user?.metadata?.creationTime;

                const user = { name, email, photoURL, createdAt }
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
            })


            .catch(error => {
                console.log(error);
                toast.error(error.message);
            });

    }
    return (
        <div className="hero bg-base-200 ">

            <div className="hero-content mt-7  flex-col lg:flex-row">

                <div className="text-center shadow-blue-900 shadow-2xl w-1/2 lg:text-left">

                    <img className='w-full rounded-2xl' src={loginImg} alt="Login" />
                </div>

                <form onSubmit={handleSignup} className="card bg-white pt-1  pl-5 pr-5 w-full max-w-sm shrink-0 shadow-blue-900 shadow-2xl">
                    <h1 className="text-5xl text-black font-bold text-center">Register now!</h1>
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label text-black pl-2 font-bold">Name</label>
                            <input type="text" className="input rounded-xl" name='name' placeholder="Name" />
                            <label className="label text-black pl-2 font-bold">Email</label>
                            <input type="email" className="input rounded-xl" name='email' placeholder="Email" />

                            {/* password field with show hide functionality */}
                            <label className="label text-black pl-2 font-bold">Password</label>
                            <div className="relative form-control ">
                                <input
                                    className="input rounded-xl"
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



                            <label className="label text-black pl-2 required font-bold">Photo URL</label>
                            <input type="text" className="input rounded-xl" name='photoURL'
                                placeholder="Photo URL" />

                            <button className="btn btn-neutral rounded-xl mt-4">Register</button>

                            <p className='text-black mt-4 pl-2 '>Already Have an Account? Please
                                <Link className='text-blue-800 font-bold' to="/login">  Login</Link>
                            </p>

                        </fieldset>
                    </div>
                </form>
            </div>
            <Toaster position="top-center" reverseOrder={false} />

        </div>
    );
};

export default Register;