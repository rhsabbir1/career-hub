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

    const remoteJOb = ()=>{
        const remote = applyJobs.filter(job => job.remote_or_Onsite === 'Remote')
        setApplyJOb(remote)
    }
    
    const fullTime = () =>{
        const fullTimejob = applyJobs.filter(job => job.shidule === 'Fulltime')
        setApplyJOb(fullTimejob)
    }

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
            <div className='w-4/5 text-end mt-10 '>
                <button className='btn mr-2' onClick={()=> remoteJOb()}>Remote</button>
                <button className='btn' onClick={()=> fullTime()}>Full Time</button>
            </div>
            <div className='w-3/5 mx-auto mt-5'>
                {
                    applyJobs.map(job => <ApplyJobs
                    key={job.id}
                    job={job}
                    remoteJOb={remoteJOb}
                    ></ApplyJobs>)
                }
            </div>
            
        </>
    );
};

export default ApplyedJOb;