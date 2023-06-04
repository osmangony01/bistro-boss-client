import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";



const Register = () => {
    const [passError, setPassError] = useState("");
    const { createUser, updateUserData } = useContext(AuthContext);

    const navigate = useNavigate();


    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        

        setPassError("");
        if (password.length < 6) {
            setPassError("At least 6 characters needed!!");
            return;
        }
        if (email === "" || password === "") {
            return;
        }

        createUser(email, password)
            .then(result => {
                const CreateUser = result.user;
                //console.log(CreateUser);
                form.reset();
                updateUserData(result.user, name)
                    .then(() => {
                        console.log('user name updated ...');
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
                navigate("/", { replace: true });
            })
            .catch(error => {
                console.log(error.message);
            })

        console.log(name, email, password);
    }

    return (
        // <div className='bg-slate-100  pt-10 pb-16'>
        //     <div className='w-2/5 max-sm:w-11/12 max-md:w-3/4 max-lg:w-1/2 bg-white mx-auto py-10 px-12 max-sm:px-4 shadow-2xl rounded-lg'>
        //         <h3 className='text-center text-3xl font-semibold'>Register your account</h3>
        //         <hr className='my-8' />
        //         <form action="" className='px-4' onSubmit={handleRegister}>
        //             <div className='mb-3'>
        //                 <label htmlFor="" className='block  mb-1.5'>Name</label>
        //                 <input type="text" name="name" className='input-control' placeholder='Enter your name' required />
        //             </div>
        //             <div className='mb-3'>
        //                 <label htmlFor="" className='block mb-1.5'>Email</label>
        //                 <input type="email" name="email" className='input-control' placeholder='Enter your email' required />
        //             </div>
        //             <div className='mb-3'>
        //                 <label htmlFor="" className='block  mb-1.5'>Password</label>
        //                 <input type="password" name="password" className='input-control' placeholder='Enter your password' required />
        //                 <small>{passError}</small>
        //             </div>
        //             <div className='mb-3'>
        //                 <label htmlFor="" className='block  mb-1.5' >Photo URL</label>
        //                 <input type="text" name="photo_url" className='input-control' placeholder='Enter photo url' required />
        //             </div>
        //             <button className='w-full py-1 mt-5 hover:bg-slate-800 text-lg font-semibold text-white bg-slate-600 rounded' >Register</button>
        //             <p className='mt-2 text-sm  text-slate-600 text-end'>Already have an account? <Link to="/login" className='text-orange-600'>Login</Link></p>
        //         </form>
        //     </div>
        // </div>

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" />
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                        <p className='mt-2 text-sm  text-slate-600 text-end'>Already have an account? <Link to="/login" className='text-orange-600'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;