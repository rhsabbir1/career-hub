import React from 'react';

const Header = () => {
    return (
        <div>
            {/* header  */}
            
            <div className='flex justify-around items-center py-4 bg-purple-100 '>
            <div className='text-3xl font-bold'>IT Job Hunt</div>
            <div className=''>
                <a className='mr-4 text-2xl' href="">Home</a>
                <a className='mr-4 text-2xl' href="">Blog</a>
                <a className='mr-4 text-2xl' href="">Star Applying</a>
            </div>
            <div>
                <button className='btn'>Star Applying</button>
            </div>
        </div>
        </div>
    );
};

export default Header;