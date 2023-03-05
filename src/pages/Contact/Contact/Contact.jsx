import React from 'react';
import { PageHeader } from '../../../components';
import FAQ from '../FAQ/FAQ';
import ContactInfo from '../ContactInfo/ContactInfo';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
    return (
        <section className="">
            <PageHeader heading={'Contact'} />
            <ContactInfo />
            <ContactForm />
            <FAQ />
        </section>
    )
}

export default Contact;
