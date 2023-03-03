import axios from 'axios';
import React, { useEffect, useState } from 'react';
//react icons 
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
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
                                   <div className="">
                                        <img src={review.image} className="bg-lightPrimary group-hover:bg-primary peer" alt="" />
                                   </div>
                              </SwiperSlide>)
                         }
                    </Swiper>
               </>
          </div>
     );
};

export default StudentsReview;
