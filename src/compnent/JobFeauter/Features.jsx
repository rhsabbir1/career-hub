import React from 'react';

const Features = ({job}) => {
    const {company_Logo,job_title,Company_Name,shidule,remote_or_Onsite,Salary,Location} = job;
    return (
        <div className='border-2 p-4 rounded-md'>
            <img className='w-32 rounded-md' src={company_Logo} alt="" />
            <h2 className='font-bold mt-4'>{job_title}</h2>
            <p className='text-sm my-2'>{Company_Name}</p>
            <div className='flex gap-2 m-0'>
                <p className='border-2 p-1 rounded-md text-purple-800 font-semibold'>{remote_or_Onsite}</p>
                <p className='border-2 p-1 rounded-md text-purple-800 font-semibold'>{shidule}</p>
            </div>
            <div className='flex gap-4 mt-2'>
                <p>{Location}</p>
                <p>{Salary}</p>
            </div>
            <button className='btn mt-2'> View Details</button>
            
        </div>
    );
};

export default Features;