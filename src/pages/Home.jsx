import React from 'react';
import { HeroCourses, HeroSlider, Subjects } from '../components';

const Home = () => {
    return (
        <div>
            <HeroSlider />
            <Subjects />
            <HeroCourses />
        </div>
    )
}

export default Home;
