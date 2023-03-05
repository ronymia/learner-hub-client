import React from 'react';
import { PageHeader } from '../../../components';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
    return (
        <section className="">
            <PageHeader heading="Our Courses" />
            <CourseCard />
        </section>
    )
}

export default Courses;
