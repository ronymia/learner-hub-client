import axios from 'axios';
import React, { useEffect, useState } from 'react';
//react icons 
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { Link } from 'react-router-dom';



const StudentsReview = () => {
     const [reviewData, setReviewData] = useState([]);
     useEffect(() => {
          axios.get('studentsReview.json')
               .then(res => {
                    const data = res.data;
                    setReviewData(data);
               })
               .catch(err => console.error(err));
     }, []);

     console.log(reviewData)

     return (
          <div className="py-[30px] lg:px-[10%]">
               <h1 className='text-[35px] capitalize text-dimBlack mb-[30px] block text-center'>Our Students Review</h1>
               <>
                    <Swiper
                         slidesPerView={3}
                         spaceBetween={30}
                         pagination={{
                              clickable: true,
                         }}
                         modules={[Pagination]}
                         className="mySwiper"
                    >
                         {
                              reviewData.map(review => <SwiperSlide
                                   key={review._id}
                              >
                                   <div className="w-full h-full flex flex-col items-center justify-center">
                                        <p className="reviewText">
                                             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.
                                        </p>
                                        <figure className="h-[70px] w-[70px]">
                                             <img src={review.image} className="object-cover bg-cover bg-center w-full rounded-[50%]" alt="" />
                                        </figure>
                                        <h3 className="px-0 mt-2 mb-1 text-[22px] capitalize text-dimBlack">John Doe</h3>
                                        <div className="flex flex-row gap-1">
                                             <FaStar className="text-primary" />
                                             <FaStar className="text-primary" />
                                             <FaStar className="text-primary" />
                                             <FaStar className="text-primary" />
                                             <FaStarHalfAlt className="text-primary" />
                                        </div>
                                   </div>
                              </SwiperSlide>)
                         }
                    </Swiper>
               </>
          </div>
     );
};

export default StudentsReview;
