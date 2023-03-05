import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


const Courses = () => {
    const [heroCourseData, setHeroCourseData] = useState([]);

    useEffect(() => {
        axios.get('heroCourses.json')
            .then(res => {
                const data = res.data;
                setHeroCourseData(data);
            })
    }, []);


    return (
        <section className="py-[30px] lg:px-[10%] overflow-hidden">
            <h1 className="text-center text-3xl text-dimBlack lg:text-4xl font-medium capitalize mb-[30px]"> our popular courses </h1>

            <>
                <Swiper
                    slidesPerView={2}
                    // centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
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
                        heroCourseData.map(heroCourse => <SwiperSlide
                            key={heroCourse._id}
                            className="group"
                        >
                            <div className="bg-lightPrimary cursor-pointer relative">
                                <div className="p-5 peer">
                                    <img className="w-full mb-4" src={heroCourse.image} alt="Course" />
                                    <h3 className="capitalize text-xl text-center text-dimBlack font-semibold">
                                        {heroCourse.title}
                                    </h3>
                                </div>
                                <div className="absolute bg-primary text-center px-7.5 py-5  left-0 right-0  -bottom-[100%] peer-hover:bottom-0 hover:bottom-0"
                                >
                                    <h3 className="capitalize text-xl text-center text-white font-semibold">{heroCourse.title}
                                    </h3>
                                    <p className="py-[10px] px-0 text-lightWhite text-[15px]">
                                        {heroCourse.summary}
                                    </p>
                                    <Link className="btn btn-sm md:btn-lg hover:bg-dimBlack" to="/courses">Read More</Link>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </>
        </section>
    );
};

export default Courses;
