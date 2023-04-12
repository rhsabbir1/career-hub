import React from 'react';
import { Link } from 'react-router-dom';

const ApplyJobs = ({ job }) => {
    return (
        <>
            <div>
                <button></button>
                <button></button>
            </div>
            <div>
                <div className='flex items-center justify-between border-2 rounded-md p-2 '>
                    <div className='flex gap-8'>
                        <img className='h-24  w-48 object-cover' src={job.company_Logo} alt="" />
                        <div>
                            <h1 className='font-bold mb-4'>{job.job_title}</h1>
                            <div className='flex gap-4'>
                                <p className='border-2 p-1 rounded-md text-purple-800 font-semibold'>{job.remote_or_Onsite}</p>
                                <p className='border-2 p-1 rounded-md text-purple-800 font-semibold'>{job.shidule}</p>
                            </div>
                            <div className='flex gap-4 my-4'>
                                <p>{job.Location}</p>
                                <p>{job.Salary}</p>
                            </div>
                        </div>
                    </div>
                    <div>

                        <Link to={`../details/${job.id}`} className='btn mt-2'>
                            View Details
                        </Link>


                    </div>

                </div>
            </div>
        </>
    );
};

export default ApplyJobs;