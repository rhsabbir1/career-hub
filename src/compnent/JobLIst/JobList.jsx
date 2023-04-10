import React, { useEffect, useState } from 'react';
import JobCatagory from './JobCatagory';

const JobList = () => {
    const [jobList , setJobList] = useState([]);

    useEffect(() => {
        fetch('Joblist.json')
            .then(res => res.json())
            .then(data => setJobList(data))
    }, [])
    return (
        <>
            <div className='text-center my-11 p-4'>
                <h1 className='text-4xl font-semibold my-2'>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid md:grid-cols-4 gap-8 w-4/5 mx-auto'>
                {
                    jobList.map(jobCatagory =><JobCatagory
                    key={jobCatagory.id}
                    jobCatagory={jobCatagory}
                    ></JobCatagory>)
                }
            </div>
        </>
    );
};

export default JobList;