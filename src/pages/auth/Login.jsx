import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import SocialLogin from './SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    //auth context 
    const { signInUser } = useAuth();
    const [loginError, setLoginError] = useState('');
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();


    //form event handler
    const onSubmit = data => {
        const { email, password } = data;

        // user login
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                if (user) {
                    // reset();
                    toast.success('Successfully Login');
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


    return (
        <section className="w-full flex flex-col items-center justify-center my-10">
            <div className="borderBox p-3 md:p-5 flex flex-col items-center justify-center gap-6">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h3 className="text-[25px] uppercase text-dimBlack pb-1 block text-center">login now</h3>
                    {/* email  */}
                    <div className="flex flex-col items-start gap-1">
                        <label htmlFor="email" className="text-sm capitalize text-dimBlack font-medium">email</label>
                        <input type="email"
                            className={`outline-none md:w-[460px] h-14 borderBox py-3 px-4 placeholder:capitalize placeholder:text-lightColor  w-[360px] ${loginError && "border-red-500"}`}
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
                            className={`${loginError && "border-red-500"} outline-none md:w-[460px] h-14 borderBox py-3 px-4 placeholder:capitalize placeholder:text-lightColor w-[360px] `}
                            placeholder="your password"
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
                    {/* checkBox  */}
                    <div className=" flex items-center justify-end capitalize">
                        {/* <div className="flex items-center justify-center gap-1">
                            <input type="checkbox" name="checkBox" />
                            <span >remember me</span>
                        </div> */}
                        <Link className="hover:underline">forgot password?</Link>
                    </div>
                    <button type="submit"
                        className="btn py-[10px] px-[30px] w-full mt-5 text-xl font-medium"
                        disabled
                    >
                        login
                    </button>
                </form>
                {/* navigate to register page */}
                <h3 className="capitalize text-dimBlack">
                    don't have an account ?
                    <Link
                        to={"/auth/register"}
                        className="text-primary font-medium hover:underline ml-2 uppercase"
                    >
                        register now
                    </Link>
                </h3>
                {/* social login  */}
                <SocialLogin />
            </div>
        </section >
    )
}

export default Login;
