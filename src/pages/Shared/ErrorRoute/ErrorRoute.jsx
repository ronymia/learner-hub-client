import React from 'react';
import { useRouteError } from 'react-router-dom';
import errorRoute from '../../../assets/images/errorRoute.png';

export default function ErrorRoute() {
     let error = useRouteError();
     console.log(error);
     return (
          <div className="flex flex-col justify-center items-center">
               <figure>
                    <img src={errorRoute} alt="errorRoute"
                         className="w-3/4"
                    />
               </figure>
               <div className="">
                    <h1>Uh oh, something went terribly wrong 😩</h1>
                    <pre>{error || JSON.stringify(error)}</pre>
                    <button type='button'
                         className='btn bg-primary text-white py-[10px] px-[30px]'
                         onClick={() => (window.location.href = "/")}>
                         Click here to reload the app
                    </button>
               </div>
          </div>
     );
}
