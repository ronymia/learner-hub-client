import axios from 'axios';
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Subjects = () => {
    const [subjectData, setSubjectData] = useState([]);

    useEffect(() => {
        axios.get('subject.json')
            .then(res => {
                const data = res.data;
                setSubjectData(data);
            })
            .catch(err => console.error(err));
    }, []);


    return (
        <section className="py-[30px] lg:px-[10%] md:my-12 my-3">
            <h1 className="text-center text-3xl text-dimBlack lg:text-4xl font-medium capitalize mb-[30px]">our popular subjects</h1>
            <div className="subjectGrid justify-center place-items-center">
                {
                    subjectData.map(subject =>
                        <div key={subject._id}
                            className="group bg-lightPrimary hover:bg-primary px-5 py-7 border border-solid border-primary cursor-pointer"
                        >
                            <img className="mb-2 " src={subject.subject_image} alt="" />
                            <h3 className="capitalize text-lg text-center py-[5px] text-dimBlack group-hover:text-white">{subject.name}</h3>
                            <p className="text-[15px] text-lightColor leading-relaxed text-center group-hover:text-lightWhite">{subject.module}</p>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Subjects;
