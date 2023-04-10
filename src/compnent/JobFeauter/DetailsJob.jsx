import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb } from '../../Utilites/Utilities';


const DetailsJob = () => {
    const data = useLoaderData()
     
    const applyedJob = (data)=>{

        addToDb(data.id)
    }

   
    return (
        <div>
            {/* banner  */}
            <div className='h-48 bg-purple-200 flex text-center items-center justify-center'>
                <h1 className='text-4xl font-semibold'>Job Details</h1>
            </div>
            <div className='p-4 w-4/5  mx-auto mt-20 rounded-sm grid md:grid-cols-2 gap-12'>
                <div>
                    <h1 className='mb-2'><span className='font-bold'>Job Description</span> : {data.job_Description}</h1>
                    <h1><span className='font-bold'>Job Description</span> : {data.job_Responsibility}</h1>
                    <h1 className='font-bold mt-2'>Educational Requirements:</h1>
                    <p>{data.educational_Requirements}</p>
                    <h1 className='font-bold mt-2'>Experiences:</h1>
                    <p>{data.experiences}  Years in this field.</p>
                </div>
                <div>
                    <div className=' w-3/5 bg-pruple-200  bg-purple-200 p-4 rounded-md'>
                        <h1 className='font-bold text-2xl my-2'>Job Details</h1>
                        <h1 className='my-2'><span className='font-bold'>Salary</span> : {data.Salary}(per month)</h1>
                        <h1 className='my2'><span className='font-bold'>Job Title</span> : {data.job_title}</h1>
                        <h1 className='font-bold text-2xl my-2'>Contact Information</h1>
                       
                        <h1 className='mt-2'><span className='font-bold'>Phone</span> : {data.phone}</h1>
                        <h1 className='mt-2'><span className='font-bold'>Email</span> : {data.email}</h1>
                        <h1 className='mt-2'><span className='font-bold'>Address</span> : {data.Location}</h1>

                    </div>
                    <div className='my-2 w-3/5'>
                        <button onClick={() => applyedJob(data)} className='btn w-full'>Apply Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DetailsJob;