import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import SocialLogin from './SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    //auth context 
    const { signInUser } = useAuth();

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
            })
            .catch(error => console.log(error))
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
                            className="outline-none md:w-[460px] h-14 borderBox py-3 px-4 placeholder:capitalize placeholder:text-lightColor  w-[360px]"
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
                            className="outline-none md:w-[460px] h-14 borderBox py-3 px-4 placeholder:capitalize placeholder:text-lightColor w-[360px]"
                            placeholder="your password"
                            {...register("password", {
                                required: "Please enter new password."
                            })}
                        />
                    </div>
                    {/* checkBox  */}
                    <div className=" flex items-center justify-between capitalize">
                        <div className="flex items-center justify-center gap-1">
                            <input type="checkbox" name="checkBox" />
                            <span >remember me</span>
                        </div>
                        <Link className="hover:underline">forgot password?</Link>
                    </div>
                    <button type="submit" className="btn py-[10px] px-[30px] w-full mt-5 text-xl font-medium">
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
