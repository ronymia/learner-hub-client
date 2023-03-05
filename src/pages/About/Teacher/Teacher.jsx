import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//react icons 
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";



const Teacher = () => {
    const [teacherData, setTeacherData] = useState([]);
    useEffect(() => {
        axios.get('teacher.json')
            .then(res => {
                const data = res.data;
                setTeacherData(data);
            })
            .catch(err => console.error(err));
    }, []);


    return (
        <div className="py-[30px] lg:px-[10%]">
            <h1 className='text-[35px] capitalize text-dimBlack mb-[30px] block text-center'>Expert Teachers</h1>
            <>
                <Swiper
                    // slidesPerView={1}
                    // centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        }
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        teacherData.map(teacher => <SwiperSlide
                            key={teacher._id}
                            className="group"
                        >
                            <div className="relative">
                                <img src={teacher.image} className="bg-lightPrimary group-hover:bg-primary peer" alt="" />
                                <div className="flex flex-row items-center justify-center gap-4 bg-[rgba(0,0,0,.8)] p-[20px] cursor-pointer absolute left-0 right-0 -bottom-[100px] peer-hover:bottom-[35px] hover:bottom-[35px]">
                                    <Link>
                                        < FaFacebookF className="text-[30px]  my-[10] mx-[10px] text-white hover:text-primary" />
                                    </Link>
                                    <Link>
                                        < FaTwitter className="text-[30px]  my-[10] mx-[10px] text-white hover:text-primary" />
                                    </Link>
                                    <Link>
                                        < FaInstagram className="text-[30px]  my-[10] mx-[10px] text-white hover:text-primary" />
                                    </Link>
                                    <Link>
                                        < FaLinkedin className="text-[30px]  my-[10] mx-[10px] text-white hover:text-primary" />
                                    </Link>
                                </div>
                                <div className="flex flex-row items-center justify-between px-2 mt-2">
                                    <h4>{teacher.name}</h4>
                                    <h4>{teacher.specialty}</h4>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </>
        </div>
    );
};

export default Teacher;
