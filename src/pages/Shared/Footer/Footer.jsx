import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
// import logo 
import logo from '../../../assets/logo/logo.svg';

const Footer = () => {
    return (
        <section className="grid grid-cols-1 px-4  gap-5 lg:grid-cols-4 py-[50px] lg:px-[10%] bg-lightPrimary pb-24">
            <div className="">
                <div className="flex items-center gap-5">
                    <img className="h-[40px]" src={logo} alt="logo" />
                    <h3 className="capitalize text-[22px] text-dimBlack font-medium px-0 py-[10px]">Learner Hub</h3>
                </div>

                <p className="text-lightColor text-[15px] px-0 py-[10px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, voluptatem.</p>

                <div className="w-full flex flex-row gap-5 mt-[10px]">
                    <Link className="h-[45px] w-[45px] bg-primary hover:bg-dimBlack flex justify-center items-center" to="#">
                        <FaFacebookSquare className="text-2xl text-white" />
                    </Link>
                    <Link className="h-[45px] w-[45px] bg-primary hover:bg-dimBlack flex justify-center items-center" to="#">
                        <FaTwitter className="text-2xl text-white" />
                    </Link>
                    <Link className="h-[45px] w-[45px] bg-primary hover:bg-dimBlack flex justify-center items-center" to="#">
                        <FaInstagram className="text-2xl text-white" />
                    </Link>
                    <Link className="h-[45px] w-[45px] bg-primary hover:bg-dimBlack flex justify-center items-center" to="#">
                        <FaLinkedin className="text-2xl text-white" />
                    </Link>
                </div>
            </div>

            <div className="flex flex-col">
                <h3 className="capitalize text-[22px] text-dimBlack font-medium px-0 py-[10px]">quick links</h3>
                <Link className="footerLink" to="#">Home</Link>
                <Link className="footerLink" to="#">About</Link>
                <Link className="footerLink" to="#">Course</Link>
                <Link className="footerLink" to="#">contact</Link>
            </div>

            <div className="flex flex-col">
                <h3 className="capitalize text-[22px] text-dimBlack font-medium px-0 py-[10px]">Useful Links</h3>
                <Link className="footerLink" to="#">help center</Link>
                <Link className="footerLink" to="#">ask questions</Link>
                <Link className="footerLink" to="#">send feedback</Link>
                <Link className="footerLink" to="#">private policy</Link>
                <Link className="footerLink" to="#">terms of use</Link>
            </div>

            <div className="box">
                <h3 className="capitalize text-[22px] text-dimBlack font-medium px-0 py-2.5" >newsletter</h3>
                <p className="text-lightColor text-md px-0 py-2.5">subscribe for latest upadates</p>
                <form>
                    <input type="text" name="" id=""
                        placeholder="your email address"
                        className="outline-none w-full py-3 px-3.5 text-base mb-2.5 border border-primary"
                    />
                    <input className="btn btn-lg" type="button" value="Subscribe" />
                </form>
            </div>
        </section>
    )
}

export default Footer;
