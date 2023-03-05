import React from 'react';
import { HeroCourses } from '../../../components';
import Carousel from '../Carousel/Carousel';
import Subjects from '../PopularSubject/Subjects';

const Home = () => {
    return (
        <div>
            <Carousel />
            <Subjects />
            <HeroCourses />
        </div>
    );
};

export default Home;
