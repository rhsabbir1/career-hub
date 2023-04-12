import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    BoltIcon,
    Bars3BottomRightIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div>
            {/* header  */}

            <div className='  md:flex md:justify-between px-8 justify-around  items-center py-4 bg-purple-100 '>
                <div className='text-3xl font-bold'>IT Job Hunt</div>
                <div className='hidden md:flex'>
                    <nav>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : 'defalt'} href="">Home</NavLink>

                        <NavLink className={({ isActive }) => isActive ? 'active' : 'defalt'} >Blog</NavLink>

                        <NavLink to='/chart' className={({ isActive }) => isActive ? 'active' : 'defalt'} >Statistics</NavLink>

                        <NavLink to='/applyedJOb' className={({ isActive }) => isActive ? 'active' : 'defalt'}>Applyed Job</NavLink>
                    </nav>
                    <div>
                        <button className='btn ml-40'>Star Applying</button>
                    </div>
                </div>
            </div>


            <div className='md:hidden'>
                {/* Dropdown Open Button */}
                <button
                    aria-label='Open Menu'
                    title='Open Menu'
                    onClick={() => setIsMenuOpen(true)}
                >
                    <Bars3BottomRightIcon className='w-5 text-gray-600' />
                </button>
                {isMenuOpen && (
                    <div className='absolute top-0 left-0 w-full z-10'>
                        <div className='p-5 bg-white border rounded shadow-sm'>
                            {/* Logo & Button section */}
                            <div className='flex items-center justify-between mb-4'>
                                <div>
                                    <h1 className='font-bold '>IT Job Hunt</h1>
                                </div>
                                {/* Dropdown menu close button */}
                                <div>
                                    <button
                                        aria-label='Close Menu'
                                        title='Close Menu'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <XMarkIcon className='w-5 text-gray-600' />
                                    </button>
                                </div>
                            </div>
                            {/* Mobile Nav Items Section */}
                            <nav>
                                <ul className='space-y-4'>
                                    <li>
                                        <Link to='/' className='default'>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/chart'
                                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                        >
                                            Statistics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/applyedJOb'
                                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                        >
                                            Applyed Job
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className='text-start'>
                                <button className='btn ml-40'>Star Applying</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;