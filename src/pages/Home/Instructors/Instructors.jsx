import axios from "axios";
import { useQuery } from "@tanstack/react-query";


export default function Instructors() {

     const { data: instructors } = useQuery({
          queryKey: ["expertInstutors"],
          queryFn: async () => {
               const { data } = await axios.get('instructor.json');
               return data;
          }
     });

     return (
          <section className="py-[30px] lg:px-[5%]">
               <h1 className='text-4xl text-[#413960] uppercase font-bold mb-[30px] block text-center'>
                    our Expert Instructors
               </h1>
               <div className="grid grid-cols-3 gap-x-6 gap-y-8">
                    {
                         instructors?.map(instructor =>
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
