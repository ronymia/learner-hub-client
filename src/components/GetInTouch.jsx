import React from 'react';
import { FaClock, FaPhone, FaEnvelope, FaMap } from 'react-icons/fa';


const GetInTouch = () => {
     const touch = [
          {
               _id: 1,
               icon: <FaClock />,
               title: 'opening hours :',
               detail: '00:07am to 00:06pm'
          },
          {
               _id: 2,
               icon: <FaPhone />,
               title: 'Phone :',
               detail: '+123-456-7890'
          },
          {
               _id: 3,
               icon: <FaEnvelope />,
               title: 'Email :',
               detail: 'programming@hero.com'
          },
          {
               _id: 4,
               icon: <FaMap />,
               title: 'Address :',
               detail: 'darussalam,mirpur,dhaka-1217'
          }
     ];

     return (
          <section className="py-[30px] lg:px-[10%]">
               <h1 className="block text-center mb-7 text-[30px] capitalize text-dimBlack">get in touch</h1>
               <div className="grid md:grid-cols-4 grid-cols-2 items-center justify-center md:gap-5 gap-3">
                    {
                         touch.map(tt =>
                              <div class="borderBox bg-lightPrimary py-7 px-2 flex flex-col items-center justify-center gap-1">
                                   <figure className="h-16 w-16 bg-primary rounded-[50%] text-3xl text-white flex items-center justify-center">
                                        {tt.icon}
                                   </figure>
                                   <h3 className="capitalize text-dimBlack text-xl mt-3">{tt.title}</h3>
                                   <p className="text-[15px] text-lightColor leading-loose">{tt.detail}</p>
                              </div>
                         )
                    }
               </div>
          </section>
     );
};

export default GetInTouch;
