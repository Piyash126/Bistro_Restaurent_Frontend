import React from 'react';

const SectionTitle = ({heading,subheading}) => {
    return (
        <div className='md:w-4/12 mx-auto mb-10 text-center'>
            <p className='text-yellow-600 mb-2'>---{subheading}---</p>
            <h3 className='text-4xl uppercase border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;