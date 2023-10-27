import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu, HiX } from "react-icons/hi";

// import logo 
import logo from '../../../assets/logo/logo.svg';

const navLink = [
     {
          id: 1,
          to: '/',
          title: 'Home'
     },
     {
          id: 2,
          to: '/intructor',
          title: 'Instructor'
     },
     {
          id: 3,
          to: '/classes',
          title: 'Classes'
     },
     {
          id: 4,
          to: '/dashboard',
          title: 'Dashboard'
     }
]

export default function Header() {
     const [toggle, setToggle] = useState(false);

     return (
          <header className="flex items-center justify-between px-6 md:px-20 py-2 md:py-3 bg-white drop-shadow-lg z-50 sticky top-0 left-0 right-0 backdrop-blur-sm bg-white/30">
               {/* logo section  */}
               <div className="flex items-center gap-5">
                    <figure className="h-8 md:h-9">
                         <img className="h-full" src={logo} alt="logo" />
                    </figure>
                    <h2 className="capitalize text-[22px] text-dimBlack font-medium px-0 py-2.5 font-russsoOne">Learner Hub</h2>
               </div>
               {/* nav link  */}
               <nav className="hidden md:flex items-center gap-4 text-lg font-grotesk">
                    {
                         navLink.map(link =>
                              <NavLink
                                   key={link.id}
                                   className={({ isActive }) => isActive ? "text-primary font-medium" : "hover:text-primary"}
                                   to={link.to}>
                                   {link.title}
                              </NavLink>)
                    }
                    <div className="">
                         <Link to="/auth/login"
                              className="inline-flex border border-primary bg-lightPrimary cursor-pointer capitalize py-2 px-5 text-primary"
                         >
                              Login
                         </Link>
                    </div>
               </nav>

               {/* responsive navbar      */}
               <nav className="md:hidden">
                    <div className="text-3xl"
                         onClick={() => setToggle(!toggle)}
                    >
                         {
                              toggle ? <HiX /> : <HiMenu />
                         }
                    </div>
                    <div className={`
                ${!toggle ? "hidden" : "flex"} absolute top-[80px] right-1 z-[999] w-2/4 justify-center py-4
                 rounded-md shadow-md shadow-primary/20 transition-all`}
                    >
                         <div className="flex flex-col items-center gap-4 text-lg font-grotesk">
                              {
                                   navLink.map(link =>
                                        <NavLink
                                             key={link.id}
                                             className={({ isActive }) => isActive ? "text-primary font-medium" : "hover:text-primary"}
                                             to={link.to}>
                                             {link.title}
                                        </NavLink>)
                              }
                              <Link className="btn py-2 px-5" to="/auth/login">Login</Link>
                         </div>
                    </div>
               </nav>

          </header>
     )
}