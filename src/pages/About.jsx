import React from 'react';
import { PageHeader } from '../components';
import AboutSummary from '../components/AboutSummary';
import StudentsReview from '../components/StudentsReview';
import Teacher from '../components/Teacher';

const About = () => {
    return (
        <section className="">
            <PageHeader heading="About us" />
            <AboutSummary />
            <Teacher />
            <StudentsReview />
        </section>
    )
}

export default About;
