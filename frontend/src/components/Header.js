import React from 'react'
import Logo from './Logo'

import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='h-16 shadow-md'>
            <div className='h-full container mx-auto flex items-center px-4 justify-between'>
                <div>
                    <Link to="/">
                        <Logo w={90} h={50} />
                    </Link>
                </div>



                <div className='flex items-center w-full justify-between max-w-sm border rounded-full focus-within: shadow-md'>
                    <input type='text' placeholder='  Search product here...' className='w-full outline-none' />
                    <div className='text-lg min-w-[50px] h-8 bg-blue-600 flex items-center justify-center rounded-r-full'>
                        <GrSearch />
                    </div>

                </div>



                <div className="flex items-center gap-5">
                    <div className='text-3xl'>
                        <FaRegCircleUser />
                    </div>


                    <div className='text-3xl'>
                        <span><FaShoppingCart /></span>
                        <div className='bg-red-600 text-white w-5 h-5 p-1 flex items-center justify-center rounded-full absolute top-0'>
                            <p className='text-sm'>0</p>
                        </div>
                    </div>


                    <div>
                        <Link to={'/login'}>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Login</button>
                        </Link>
                    </div>
                </div>
                
            </div>

        </header>

    )
}

export default Header