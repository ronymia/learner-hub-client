import React from 'react';

import aboutImg from '../assets/images/about-img.jpg';
import abutIcon1 from '../assets/images/about-icon-1.png';
import abutIcon2 from '../assets/images/about-icon-2.png';
import abutIcon3 from '../assets/images/about-icon-3.png';

const AboutSummary = () => {
    const about = [
        {
            _id: 1,
            title: "courses",
            number: "350+",
            image: abutIcon1
        },
        {
            _id: 2,
            title: "students",
            number: "1200+",
            image: abutIcon2
        },
        {
            _id: 3,
            title: "awards",
            number: "10+",
            image: abutIcon3
        }
    ]

    return (
        <section className="flex  justify-center gap-7 py-[30px] lg:px-[10%]">
            <div className="w-full h-full">
                <img src={aboutImg} alt="about" />
            </div>
            <div className="">
                <h1 className="text-[30px] text-dimBlack">We Have Best Courses For You</h1>
                <p className='text-[15px] py-[10px] px-0 text-lightColor'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic magnam fugit exercitationem neque, quae laboriosam natus. Ut maxime assumenda facere ea quasi accusamus dolores delectus tempora animi, expedita iste
                </p>
                <div className="flex  gap-5">
                    {
                        about.map(ab =>
                            <div
                                key={ab._id}
                                className="border border-primary py-[30px] px-[20px] bg-lightPrimary flex items-center justify-center mt-4"
                            >
                                <div className='h-[130px] w-[140px] flex flex-col items-center justify-center'>
                                    <img src={ab.image} alt="" />
                                    <h2 className='py-[5px] px-0 text-[30px] text-lightColor'>{ab.number}</h2>
                                    <h4 className='text-[15px] text-dimBlack'>{ab.title}</h4>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </section>
    )
}

export default AboutSummary;
