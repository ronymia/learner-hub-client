import axios from "axios";
import { useEffect, useState } from "react";


export default function Instructors() {
     const [instructors, setInstructors] = useState([]);
     useEffect(() => {
          axios.get('instructor.json')
               .then(res => {
                    const data = res.data;
                    setInstructors(data);
               })
               .catch(err => console.error(err));
     }, []);

     console.log(instructors);

     return (
          <section className="py-[30px] lg:px-[5%]">
               <h1 className='text-[35px] capitalize text-dimBlack mb-[30px] block text-center'>
                    our Instructors
               </h1>
               <div className="grid grid-cols-3 gap-x-6 gap-y-8">
                    {
                         instructors.map(instructor =>
                              <div key={instructor._id}
                                   className=""
                              >
                                   <img
                                        src={instructor.image}
                                        alt=""
                                        className="bg-lightPrimary"
                                   />
                                   <div className="flex flex-row items-center justify-between px-2 mt-2">
                                        <p>{instructor.name}</p>
                                        <p>{instructor.specialty}</p>
                                   </div>
                              </div>
                         )
                    }
               </div>
          </section>
     );
};
