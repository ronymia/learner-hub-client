import React from 'react';
import { PageHeader } from '../components';
import ContactForm from '../components/ContactForm';
import GetInTouch from '../components/GetInTouch';

const Contact = () => {
    return (
        <section className="">
            <PageHeader heading={'Contact'} />
            <GetInTouch />
            <ContactForm />
        </section>
    )
}

export default Contact;
