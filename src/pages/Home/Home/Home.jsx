import React from 'react';
import Carousel from '../Carousel/Carousel';
import Courses from '../PopularCourse/Courses';
import Subjects from '../PopularSubject/Subjects';

const Home = () => {
    return (
        <div>
            <Carousel />
            <Subjects />
            <Courses />
        </div>
    );
};

export default Home;
