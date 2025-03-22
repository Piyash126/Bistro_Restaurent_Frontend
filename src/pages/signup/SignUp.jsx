import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../components/socialLogin/SocialLogin';

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        //create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                console.log(res);

                                if (res.status===200) {

                                    console.log("User Added to the Database!!");
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "Your work has been saved",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                        // .then(res => {
                        //     if (res.data.insertedId) {
                        //         console.log("User Added to the Database!!");
                        //         reset();

                        //     }
                        // })

                    })
                    .catch(error => console.log(error))
            })

    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss || Sign UP</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name?.type === "required" && (
                                    <span className="text-red-600">Password is required</span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input placeholder="PhotoURL" className="input input-bordered" {...register("photoURL", { required: true })} />
                                {errors.photoURL && <span className='text-red-600'>Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" />
                                {errors.email?.type === "required" && (
                                    <span className="text-red-600">Email is required</span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/ })} name="password" placeholder="Password" className="input input-bordered" />
                                {errors.password?.type === "required" && (
                                    <span className="text-red-600">Password is required</span>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <span className="text-red-600">Password must be at least 6 characters</span>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <span className="text-red-600">Password must not exceed 20 characters</span>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <span className="text-red-600">Password must include one uppercase letter, one lowercase letter, and one special character</span>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="SignUp" className="btn btn-primary" />
                            </div>
                            <SocialLogin></SocialLogin>
                        </form>
                        <p><small>ALready have an account?<Link to="/login">Login</Link></small></p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default SignUp;