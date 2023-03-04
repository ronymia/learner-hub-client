import React from 'react';
import { PageHeader } from '../components';
import ContactForm from '../components/ContactForm';
import FaqSection from '../components/FaqSection';
import GetInTouch from '../components/GetInTouch';

const Contact = () => {
    return (
        <section className="">
            <PageHeader heading={'Contact'} />
            <GetInTouch />
            <ContactForm />
            <FaqSection />
        </section>
    )
}

export default Contact;
