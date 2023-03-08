import React from "react";
import { Bars } from "react-loader-spinner";

export default function Bar() {
     return (
          <div className="h-screen flex justify-center items-center">
               <Bars
                    height="400px"
                    width="400px"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
               />
          </div>
     );
}
