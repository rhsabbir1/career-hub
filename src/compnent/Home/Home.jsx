import React from 'react';
import './Home.css'
import bannerImg from '../../../public/P3OLGJ1 copy 1.png'
import JobList from '../JobLIst/JobList';
import JobFeauter from '../JobFeauter/JobFeauter';

const Home = () => {
    return (
        <div>
            {/* banner container  */}
            <div className=' bg-purple-100 grid md:grid-cols-2 p-5 md:p-10 justify-center items-center'>
                <div>
                    <h1 className='md:text-8xl lg:text-8xl  text-5xl   my-3 font-semibold'>One Step Closer To Your  <span className='text-gradient'>Dream Job</span></h1>
                    <p className='text-2xl my-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn my-5'>Get Started</button>
                </div>
                <div>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
            {/* Job Category */}
            <JobList></JobList>
            {/* job features  */}
            <JobFeauter></JobFeauter>
        </div>
    );
};

export default Home;