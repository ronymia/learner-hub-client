import React from 'react';
import { Link } from 'react-router-dom';

const login = () => {
    return (
        <section className="w-full flex items-center justify-center my-10">
            <form className="borderBox p-5">
                <h3 className="text-[25px] uppercase text-dimBlack pb-1 block text-center">login now</h3>
                {/* email  */}
                <div className="flex flex-col items-start gap-1">
                    <label htmlFor="email" className="text-sm capitalize text-dimBlack font-medium">email</label>
                    <input type="email" placeholder="your email" className="outline-none w-[460px] h-14 borderBox py-3 px-4 placeholder:capitalize placeholder:text-lightColor" />
                </div>
                {/* password  */}
                <div className="flex flex-col items-start gap-1 mt-5 mb-2">
                    <label htmlFor="password" className=" text-sm capitalize text-dimBlack font-medium">password</label>
                    <input type="password" placeholder="your password" className="outline-none w-[460px] h-14 borderBox py-3 px-4 placeholder:capitalize placeholder:text-lightColor" />
                </div>
                {/* checkBox  */}
                <div className=" flex items-center justify-between">
                    <div className="flex items-center justify-center gap-1">
                        <input type="checkbox" name="" id="remember-me" />
                        <span >remember me</span>
                    </div>
                    <Link >forgot password?</Link>
                </div>
                <button type="submit" className="btn py-[10px] px-[30px] w-full mt-5 text-xl font-medium">
                    login
                </button>
            </form>
        </section >
    )
}

export default login;
