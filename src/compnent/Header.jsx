import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            {/* header  */}
            
            <div className='flex justify-around items-center py-4 bg-purple-100 '>
            <div className='text-3xl font-bold'>IT Job Hunt</div>
            <div className=''>
                <Link to="/" className='mr-4 text-2xl' href="">Home</Link>
                <Link className='mr-4 text-2xl' href="">Blog</Link>
                <Link className='mr-4 text-2xl' href="">Star Applying</Link>
                <Link to='applyedJOb'>Applyed JOb</Link>
            </div>
            <div>
                <button className='btn'>Star Applying</button>
            </div>
        </div>
        </div>
    );
};

export default Header;