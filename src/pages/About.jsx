import React from 'react';
import { PageHeader } from '../components';
import AboutSummary from '../components/AboutSummary';
import Teacher from '../components/Teacher';

const About = () => {
    return (
        <section className="">
            <PageHeader />
            <AboutSummary />
            <Teacher />
        </section>
    )
}

export default About;
