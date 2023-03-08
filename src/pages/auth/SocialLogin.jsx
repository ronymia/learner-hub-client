import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { toast } from 'react-hot-toast';
import { FaFacebookSquare, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';

const googleProvider = new GoogleAuthProvider();

const SocialLogin = () => {
     const navigate = useNavigate();
     const { providerLogin } = useAuth();

     const googleHandle = () => {
          providerLogin(googleProvider)
               .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    if (user) {
                         toast.success('Successfully Login');
                         navigate("/");
                    }
               }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
               });
     }

     return (
          <div className="flex flex-col items-center justify-center gap-6">
               <h4 className="capitalize font-medium text-sm">or sign in with</h4>

               <div className="flex flex-row items-center justify-center gap-6">
                    <button type="button" className="h-[45px] w-[45px] flex items-center justify-center">
                         <FaFacebookSquare className="text-4xl text-blue-900" />
                    </button>
                    <button type="button"
                         className="h-[45px] w-[45px] flex items-center justify-center"
                         onClick={googleHandle}
                    >
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
