import React from 'react';
import { useLoaderData } from 'react-router-dom';


const DetailsJob = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            {/* banner  */}
            <div className='h-48 bg-purple-200 flex text-center items-center justify-center'>
                <h1 className='text-4xl font-semibold'>Job Details</h1>
            </div>
            <div className='p-4 w-4/5 border-2 mx-auto mt-20 rounded-sm grid md:grid-cols-2'>
                <div>
                    <h1 className='mb-2'><span className='font-bold'>Job Description</span> : {data.job_Description}</h1>
                    <h1><span className='font-bold'>Job Description</span> : {data.job_Responsibility}</h1>
                    <h1 className='font-bold mt-2'>Educational Requirements:</h1>
                    <p>{data.educational_Requirements}</p>
                    <h1 className='font-bold mt-2'>Experiences:</h1>
                    <p>{data.experiences}  Years in this field.</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsJob;