import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";




const HeroSlider = () => {
    const [sliderData, setSliderData] = useState([]);

    useEffect(() => {
        axios.get('/heroSlider.json')
            .then(res => {
                const sliderData = res.data;
                setSliderData(sliderData);
            })
            .catch(err => console.error(err));
    }, []);



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

                {
                    sliderData.map(slider =>
                        <SwiperSlide key={slider._id}
                            className="relative"
                        >
                            <img src={slider.slider_image} alt="#" />
                            <div className="absolute w-[200px] lg:w-[500px] top-6 lg:top-1/4 left-12 lg:left-32 ">
                                <h3 className="text-white text-base lg:text-5xl capitalize font-semibold lg:leading-normal">
                                    {slider.title}
                                </h3>
                                <p className="text-lightWhite py-1 lg:py-5 lg:leading-loose text-[10px] lg:text-base">
                                    {slider.summary}
                                </p>
                                <Link to="/courses" className="btn px-2 lg:px-[30px] py-[4px] lg:py-[10px] text-[10px] lg:text-lg">get started</Link>
                            </div>
                        </SwiperSlide>
                    )
                }

            </Swiper>
        </>
    );
}


export default HeroSlider;