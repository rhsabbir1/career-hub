import React, { useEffect, useState } from 'react';
import Features from './Features';

const JobFeauter = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('JobFeatures.json')
            .then(res => res.json())
            .then(data => setJobs(data))
            
    }, [])

    




    return (
        <div>
            <div className='text-center my-11 p-4'>
                <h1 className='text-4xl font-semibold my-2'>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='w-3/5 mx-auto grid md:grid-cols-2 gap-4'>
                {
                    jobs.map(job => <Features
                        key={job.id}
                        job={job}
                    ></Features>)
                }
            </div>
            <div className='text-center m-10'>
                <button onClick={()=>showAllJObs()} className='btn'>Show All</button>
            </div>
        </div>
    );
};

export default JobFeauter;