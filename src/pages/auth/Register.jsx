import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <section className="w-full flex items-center justify-center my-10">
            <div className="borderBox p-5 flex flex-col items-center justify-center gap-6">
                <form className="">
                    <h3 className="text-[25px] uppercase text-dimBlack pb-1 block text-center">register now</h3>
                    {/* email  */}
                    <div className="flex flex-col items-start gap-1">
                        <label htmlFor="email" className="text-sm capitalize text-dimBlack font-medium">email</label>
                        <input type="email" placeholder="your email" className="outline-none w-[460px] h-14 borderBox py-3 px-4 placeholder:capitalize placeholder:text-lightColor" />
                    </div>
                    {/* password  */}
                    <div className="flex flex-col items-start gap-1 mt-5 mb-2">
                        <label htmlFor="password" className=" text-sm capitalize text-dimBlack font-medium">password</label>
                        <input type="password" placeholder="new password" className="outline-none w-[460px] h-14 borderBox py-3 px-4 placeholder:capitalize placeholder:text-lightColor" />
                    </div>
                    {/* confirm password  */}
                    <div className="flex flex-col items-start gap-1 mt-5 mb-2">
                        <label htmlFor="password" className=" text-sm capitalize text-dimBlack font-medium">password</label>
                        <input type="password" placeholder="confirm password" className="outline-none w-[460px] h-14 borderBox py-3 px-4 placeholder:capitalize placeholder:text-lightColor" />
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
                <h className="capitalize text-dimBlack">
                    already have an account
                    <Link
                        to={"/auth/login"}
                        className="text-primary font-medium hover:underline ml-2 uppercase"
                    >
                        login now
                    </Link>
                </h>
            </div>
        </section >
    )
}

export default Register;
