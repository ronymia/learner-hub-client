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
        <div>
            <h1 className='text-[35px] capitalize text-dimBlack mb-[30px] block text-center'>Expert Teachers</h1>
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
                        teacherData.map(teacher => <SwiperSlide className="group">
                            <div className="relative">
                                <img src={teacher.image} className="bg-lightPrimary group-hover:bg-primary peer" alt="" />
                                <div className="flex flex-row items-center justify-center gap-4 bg-[rgba(0,0,0,.8)] p-[20px] cursor-pointer absolute left-0 right-0 -bottom-[100px] peer-hover:bottom-0 hover:bottom-0">
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
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </>
        </div>
    );
};

export default Teacher;
