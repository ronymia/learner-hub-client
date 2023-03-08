import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

import SocialLogin from './SocialLogin';
import { useAuth } from '../../hooks/useAuth';
import { toast } from 'react-hot-toast';

const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    //auth context 
    const { createUser } = useAuth();

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
            })
            .catch(error => console.log(error))
    }

    // console.log(watch("email"));
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
                                required: "Please enter your email."
                            })}
                        />
                    </div>
                    {/* password  */}
                    <div className="flex flex-col items-start gap-1 mt-5 mb-2">
                        <label htmlFor="password" className=" text-sm capitalize text-dimBlack font-medium">password</label>
                        <input type="password"
                            className="outline-none w-[360px] md:w-[460px] h-14 borderBox py-3 px-4 placeholder:capitalize placeholder:text-lightColor"
                            placeholder="new password"
                            {...register("password", {
                                required: "Please enter new password."
                            })}
                        />
                    </div>
                    {/* confirm password  */}
                    <div className="flex flex-col items-start gap-1 mt-5 mb-2">
                        <label htmlFor="password" className=" text-sm capitalize text-dimBlack font-medium">password</label>
                        <input type="password"
                            className="outline-none w-[360px] md:w-[460px] h-14 borderBox py-3 px-4 placeholder:capitalize placeholder:text-lightColor"
                            placeholder="confirm password"
                            {...register("ConfirmPassword", {
                                required: "please type same password."
                            })}
                        />
                    </div>
                    {/* checkBox  */}
                    <div className="flex flex-row items-center gap-2 capitalize">
                        <input type="checkbox" name="" id="remember-me" />
                        <span >accept terms and condition</span>
                    </div>
                    <button type="submit" className="btn py-[10px] px-[30px] w-full mt-5 text-xl font-medium">
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
