import React from 'react';
import { useLoaderData } from 'react-router-dom';


const DetailsJob = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h1>This is details </h1>
            <h1 className='text-7xl'>{data.Company_Name}</h1>
        </div>
    );
};

export default DetailsJob;