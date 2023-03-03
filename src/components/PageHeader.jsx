import React from 'react';

const PageHeader = ({ heading }) => {
    return (
        <div className="heading-link flex items-center justify-center">
            <h1 className="text-4xl font-medium text-dimBlack">{heading}</h1>
        </div >
    )
}

export default PageHeader;
