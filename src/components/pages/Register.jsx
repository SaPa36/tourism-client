import React, { useContext } from 'react';
import loginImg from '../../assets/login.jpg';
import { Link } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignup = event => {
        event.preventDefault();
        // Handle registration logic here
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        console.log(name, email, password);


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
                const createdUser = result.user;
                console.log(createdUser);
                form.reset();
                const createdAt = result.user?.metadata?.creationTime;

                const user = { name, email, createdAt }
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
            });

    }
    return (
        <div className="hero bg-base-200 ">

            <div className="hero-content mt-7  flex-col lg:flex-row">

                <div className="text-center shadow-blue-900 shadow-2xl w-1/2 lg:text-left">

                    <img className='w-full rounded-2xl' src={loginImg} alt="Login" />
                </div>

                <form onSubmit={handleSignup} className="card bg-white pt-3 pb-3 pl-5 pr-5 w-full max-w-sm shrink-0 shadow-blue-900 shadow-2xl">
                    <h1 className="text-5xl text-black font-bold text-center">Register now!</h1>
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label text-black pl-2 font-bold">Name</label>
                            <input type="text" className="input rounded-xl" name='name' placeholder="Name" />
                            <label className="label text-black pl-2 font-bold">Email</label>
                            <input type="email" className="input rounded-xl" name='email' placeholder="Email" />
                            <label className="label text-black pl-2 font-bold">Password</label>
                            <input type="password" className="input rounded-xl" name='password' placeholder="Password" />

                            <button className="btn btn-neutral rounded-xl mt-4">Register</button>
                            <p className='text-black mt-4 pl-2 '>Already Have an Account? Please
                                <Link className='text-blue-800 font-bold' to="/login">  Login</Link></p>
                        </fieldset>
                    </div>
                </form>
            </div>
             <Toaster position="top-center" reverseOrder={false} />

        </div>
    );
};

export default Register;