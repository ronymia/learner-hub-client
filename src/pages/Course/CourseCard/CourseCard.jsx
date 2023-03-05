import React from 'react';
import { FaBook, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import courseImg from '../../../assets/images/course/course-2-1.jpg';


const CourseCard = () => {
     const courses = [1, 2, 3, 4, 6, 7, 8, 9];

     return (
          <section className="py-[30px] lg:px-[10%]">
               <h1 className="block text-center mb-7 text-[30px] capitalize text-dimBlack"> our famous courses </h1>

               <div className="courseContainer">
                    {
                         courses.map(course =>
                              <div className="group ">
                                   <figure className="h-[250px] overflow-hidden relative">
                                        <img src={courseImg} className="h-full w-full object-cover group-hover:scale-110" alt="" />
                                        <h3 className="capitalize text-dimBlack bg-white py-2 px-6 absolute top-[10px] left-[10px]">development</h3>
                                   </figure>
                                   <div className="p-5 text-center borderBox">
                                        <h3 className="text-xl text-dimBlack capitalize">choose what's best for you!</h3>
                                        <p className="py-2 px-0 text-base leading-loose text-lightColor">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!</p>

                                        <Link className="btn py-2 px-5">read more</Link>

                                        <div className="flex flex-row items-start justify-between mt-5 pt-5 border-t border-primary">
                                             <span className="capitalize text-dimBlack text-[15px] flex flex-row gap-2 items-center justify-center">
                                                  <FaBook className="text-primary" />  12 modules
                                             </span>
                                             <span className="capitalize text-dimBlack text-[15px] flex flex-row gap-2 items-center justify-center">
                                                  <FaClock className="text-primary" /> 6 hours
                                             </span>
                                        </div>
                                   </div>
                              </div>
                         )
                    }
               </div>
          </section>
     );
};

export default CourseCard;
