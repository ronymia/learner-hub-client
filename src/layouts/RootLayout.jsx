import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../pages/Shared';

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootLayout;
