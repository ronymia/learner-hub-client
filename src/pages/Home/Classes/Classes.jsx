import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import photos1 from "../../../assets/images/MorderPyschology.png";


export default function Classes() {

     const { data: classes } = useQuery({
          queryKey: ["popularClasses"],
          queryFn: async () => {
               const { data } = await axios.get('classes.json');
               return data;
          }
     });


     return (
          <section className="my-20 grid grid-cols-1 justify-items-center px-20">
               <h1 className="text-4xl text-[#413960] font-bold uppercase">
                    Popular <span className="text-[#21B573]">Classes</span>
               </h1>

               <div className="grid grid-cols-3 justify-items-center justify-center gap-x-5 gap-y-7">
                    {
                         classes?.map(subject => (
                              <div className="w-[370px] rounded-2xl shadow-xl px-5 py-6 grid grid-cols-1 gap-y-3 bg-lightPrimary"
                                   key={subject._id}
                              >
                                   <figure className="w-[330] h-[235]">
                                        <img src={photos1} alt="" />
                                   </figure>
                                   <div className="grid grid-cols-1 justify-items-center gap-y-1">
                                        <h3 className="text-2xl font-medium text-[#413960] mx-auto">
                                             {subject.subject}
                                        </h3>
                                        <h6 className="text-[#585859]">
                                             Instruction by {subject.instructor}
                                        </h6>
                                   </div>
                                   <div className="flex flex-row items-center justify-between">
                                        <button type="button"
                                             className="bg-[#21B573] px-2 py-1 rounded-lg text-white capitalize font-medium"
                                        >
                                             Enroll now
                                        </button>
                                        <p className="text-xs text-[#daa520] font-medium text-center">Registration Closed <br /> {subject.registrationClosed}</p>
                                   </div>
                                   <div className="flex flex-row items-center justify-between text-[#585859]">
                                        <p>Start {subject.classStart}</p>
                                        <p>{subject.seats} seats</p>
                                   </div>
                              </div>
                         ))
                    }
               </div>

          </section>
     )
}
