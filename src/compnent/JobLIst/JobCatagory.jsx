import React from 'react';

const JobCatagory = ({jobCatagory}) => {
    return (
        <div className='h-52 bg-slate-200 p-5 rounded-md '>
            <img className='md:w-2/5 w-40 h-16 md:h-22 rounded-md' src={jobCatagory.picture} alt="" />
            <div className='mt-10'>
                <h2 className='text-xl'>{jobCatagory.name}</h2>
                <p>{jobCatagory.vacancy} + Jobs Available</p>
            </div>
        </div>
    );
};

export default JobCatagory;