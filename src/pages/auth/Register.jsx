import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

import SocialLogin from './SocialLogin';
import { useAuth } from '../../hooks/useAuth';
import { toast } from 'react-hot-toast';

const Register = () => {
    const navigate = useNavigate();
    //auth context 
    const { createUser } = useAuth();
    const [loginError, setLoginError] = useState('');
    const [condition, setCondition] = useState(true);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    //form event handler
    const onSubmit = data => {
        const { email, password, confirmPassword } = data;

        //createing new user
        createUser(email, password)
            .then(result => {
                const user = result.user;
                if (user) {
                    // reset();
                    toast.success('Successfully create Account');
                    navigate("/");
                }
            }).catch(error => {
                const errorCode = error.code;

                if (errorCode) {
                    switch (errorCode) {
                        case 'auth/user-not-found':
                            setLoginError('User not founded');
                            break;
                        case 'auth/invalid-email':
                            setLoginError('Invalid email provided, please provide a valid email')
                            break;

                        case 'auth/wrong-password':
                            setLoginError('Wrong password');
                            break;

                        default:
                            setLoginError('Something is wrong');
                    }
                }
            });
    }

    console.log({ condition });
    return (
        <section className="w-full flex items-center justify-center my-10">
            <div className="borderBox p-3 md:p-5 flex flex-col items-center justify-center gap-6">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h3 className="text-[25px] uppercase text-dimBlack pb-1 block text-center">register now</h3>
                    {/* email  */}
                    <div className="flex flex-col items-start gap-1">
                        <label htmlFor="email" className="text-sm capitalize text-dimBlack font-medium">email</label>
                        <input type="email"
                            className="outline-none w-[360px] md:w-[460px] h-14 borderBox py-3 px-4 placeholder:capitalize placeholder:text-lightColor"
                            placeholder="your email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Your Email is required"
                                },
                                pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: "Provide a valid Email"
                                }
                            })}
                        />
                        {/* error message  */}
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {loginError && <span className="label-text-alt text-red-500">{loginError}</span>}
                        </label>
                    </div>
                    {/* password  */}
                    <div className="flex flex-col items-start gap-1 mt-5 mb-2">
                        <label htmlFor="password" className=" text-sm capitalize text-dimBlack font-medium">password</label>
                        <input type="password"
                            className="outline-none w-[360px] md:w-[460px] h-14 borderBox py-3 px-4 placeholder:capitalize placeholder:text-lightColor"
                            placeholder="new password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Your Password is required"
                                },
                                minLength: {
                                    value: 6,
                                    message: "Must be 6 character or longer"
                                }
                            })}
                        />
                        {/* error message   */}
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {loginError && <span className="label-text-alt text-red-500">{loginError}</span>}
                        </label>
                    </div>
                    {/* confirm password  */}
                    <div className="flex flex-col items-start gap-1 mt-5 mb-2">
                        <label htmlFor="password" className=" text-sm capitalize text-dimBlack font-medium">password</label>
                        <input type="password"
                            className="outline-none w-[360px] md:w-[460px] h-14 borderBox py-3 px-4 placeholder:capitalize placeholder:text-lightColor"
                            placeholder="confirm password"
                            {...register("ConfirmPassword", {
                                required: {
                                    value: true,
                                    message: "Your Password is required"
                                },
                                minLength: {
                                    value: 6,
                                    message: "Must be 6 character or longer"
                                }
                            })}
                        />
                        {/* error message   */}
                        <label className="label">
                            {errors.ConfirmPassword?.type === 'required' && <span className="label-text-alt text-red-500">{errors.ConfirmPassword.message}</span>}
                            {errors.ConfirmPassword?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.ConfirmPassword.message}</span>}
                            {loginError && <span className="label-text-alt text-red-500">{loginError}</span>}
                        </label>
                    </div>
                    {/* checkBox  */}
                    <div className="flex flex-row items-center gap-2 capitalize">
                        <input type="checkbox"
                            onClick={() => setCondition(!condition)}
                        />
                        <span >accept terms and condition</span>
                    </div>
                    <button type="submit"
                        className={`btn py-[10px] px-[30px] w-full mt-5 text-xl font-medium ${condition && "bg-green-400 hover:bg-green-400 hover:text-primary"}`}
                        disabled={condition ? true : false}
                    >
                        register
                    </button>
                </form>
                {/* navigate to login page */}
                <h3 className="capitalize text-dimBlack">
                    already have an account
                    <Link
                        to={"/auth/login"}
                        className="text-primary font-medium hover:underline ml-2 uppercase"
                    >
                        login now
                    </Link>
                </h3>
                {/* social logion */}
                <SocialLogin />
            </div>
        </section >
    )
}

export default Register;
