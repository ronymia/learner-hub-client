import React from 'react';
import { FaFacebookF, FaFacebookSquare, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
     return (
          <div className="flex flex-col items-center justify-center gap-6">
               <h4 className="capitalize font-medium text-sm">or sign in with</h4>

               <div className="flex flex-row items-center justify-center gap-6">
                    <button type="button" className="h-[45px] w-[45px] flex items-center justify-center">
                         <FaFacebookSquare className="text-4xl text-blue-900" />
                    </button>
                    <button type="button" className="h-[45px] w-[45px] flex items-center justify-center">
                         <FcGoogle className="text-4xl" />
                    </button>
                    <button type="button" className="h-[45px] w-[45px] flex items-center justify-center">
                         <FaGithub className="text-4xl " />
                    </button>
               </div>
          </div>
     );
};

export default SocialLogin;
