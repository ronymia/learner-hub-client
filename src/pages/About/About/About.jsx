import React from 'react';
import { PageHeader } from '../../../components';
import AboutSummary from '../AboutSummary/AboutSummary';
import Teacher from '../Teacher/Teacher';
import StudentsReview from '../Testimonial/StudentsReview';

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
