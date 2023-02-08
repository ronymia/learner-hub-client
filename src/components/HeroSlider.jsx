import React from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import slider1 from '../assets/images/slider/home-slide-1.jpg';
import slider2 from '../assets/images/slider/home-slide-2.jpg';
import slider3 from '../assets/images/slider/home-slide-3.jpg';


const HeroSlider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="w-full"
            >
                <SwiperSlide className="relative">
                    <img src={slider1} alt="#" />
                    <div className="absolute w-[200px] lg:w-[500px] top-6 lg:top-1/4 left-12 lg:left-32 ">
                        <h3 className="text-white text-base lg:text-5xl capitalize font-semibold lg:leading-normal">
                            the best courses you will find find here!
                        </h3>
                        <p className="text-lightWhite py-1 lg:py-5 lg:leading-loose text-[10px] lg:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit labore dolore unde, quidem corrupti?
                        </p>
                        <Link to="#" className="btn px-2 lg:px-[30px] py-[4px] lg:py-[10px] text-[10px] lg:text-lg">get started</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={slider2} alt="" />
                    <div className="absolute w-[200px] lg:w-[500px] top-6 lg:top-1/4 left-12 lg:left-32 ">
                        <h3 className="text-white text-base lg:text-5xl capitalize font-semibold lg:leading-normal">
                            the best courses you will find find here!
                        </h3>
                        <p className="text-lightWhite py-1 lg:py-5 lg:leading-loose text-[10px] lg:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas impedit labore dolore unde, quidem corrupti?
                        </p>
                        <Link to="#" className="btn px-2 lg:px-[30px] py-[4px] lg:py-[10px] text-[10px] lg:text-lg">get started</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={slider3} alt="" />
                    <div className="absolute w-[200px] lg:w-[500px] top-6 lg:top-1/4 left-12 lg:left-32 ">
                        <h3 className="text-white text-base lg:text-5xl capitalize font-semibold lg:leading-normal">
                            the best courses you will find find here!
                        </h3>
                        <p className="text-lightWhite py-1 lg:py-5 lg:leading-loose text-[10px] lg:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit labore dolore unde, quidem corrupti?
                        </p>
                        <Link to="#" className="btn px-2 lg:px-[30px] py-[4px] lg:py-[10px] text-[10px] lg:text-lg">get started</Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}


export default HeroSlider;