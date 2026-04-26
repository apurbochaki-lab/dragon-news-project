import React from 'react';
import { GridLoader } from 'react-spinners';

const LoadingPage = () => {
    return (
        <div className='h-screen flex flex-col gap-5 items-center justify-center text-3xl font-bold'>
            Loading...
            <span><GridLoader /></span>
        </div>
    );
};

export default LoadingPage;