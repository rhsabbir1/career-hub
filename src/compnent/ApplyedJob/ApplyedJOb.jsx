import React, { useEffect, useState } from 'react';
import { getjobCart } from '../../Utilites/Utilities';
import ApplyJobs from './ApplyJobs';

const ApplyedJOb = () => {
    const [applyJobs, setApplyJOb] = useState([])
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('JobFeatures.json')
            .then(res => res.json())
            .then(data => setJobs(data.slice(0, 4)))
    }, [])

    

    useEffect(() => {
        const job = getjobCart()
        const storeApplyedJob = []
        for(let id in job) {
            const addJob = jobs.find(job => job.id === id)
            if (addJob) {
                const quantity = job[id];
                addJob.quantity = quantity;
                storeApplyedJob.push(addJob)
            }
        }
        setApplyJOb(storeApplyedJob)

    }, [jobs])

    return (
        <>
            <div className='h-48 bg-purple-200 flex text-center items-center justify-center'>
                <h1 className='text-4xl font-semibold'>Applied Jobs</h1>
            </div>
            <div className='w-3/5 mx-auto mt-20'>
                {
                    applyJobs.map(job => <ApplyJobs
                    key={job.id}
                    job={job}
                    ></ApplyJobs>)
                }
            </div>
            
        </>
    );
};

export default ApplyedJOb;