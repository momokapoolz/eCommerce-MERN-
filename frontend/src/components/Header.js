import React, { useState } from 'react'
import Logo from './Logo'

import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify'
import Role from '../common/role'

import summaryAPI from '../common/api';
import { setUserDetails } from '../store/userSlice';

const Header = () => {

    const user = useSelector(state => state?.user?.user)

    //console.log("user header", user)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [menuDisplay, setMenuDisplay] = useState(false)

    const handlelogout = async () => {
        const fetchData = await fetch(summaryAPI.LogOut.url, {
            method: summaryAPI.LogOut.method,
            credentials: 'include'
        })

        const data = await fetchData.json()

        if (data.success) {
            toast.success(data.message)
            dispatch(setUserDetails(null))
            navigate("/")
        }

        if (data.error) {
            toast.error(data.message)
        }



    }


    return (
        <header className='h-16 shadow-md'>
            <div className='h-full container mx-auto flex items-center px-4 justify-between'>
                <div>
                    <Link to="/">
                        <img src='../Full logo.png' w={90} h={50}></img>
                    </Link>
                </div>



                <div className='flex items-center w-full justify-between max-w-sm border rounded-full focus-within: shadow-md'>
                    <input type='text' placeholder='  Search product here...' className='w-full outline-none' />
                    <div className='text-lg min-w-[50px] h-8 bg-blue-600 flex items-center justify-center rounded-r-full'>
                        <GrSearch />
                    </div>

                </div>



                <div className="flex items-center gap-5">
                    <div className='text-3xl cursor-pointer relative flex justify-center' onClick={() => setMenuDisplay(preve => !preve)}>
                        {
                            user?._id && (
                                <div className='text-3xl'>
                                    {
                                        user?.profilePic ? (
                                            <img src={user?.profilePic} className='w-10 h-10 rounded-full'></img>
                                        ) : (
                                            <FaRegCircleUser />
                                        )
                                    }
                                </div>
                            )
                        }



                        {
                            menuDisplay && (
                                <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded' >
                                    <nav>

                                        {
                                            user?.role === Role.ADMIN && (
                                                <Link to={"/admin-panel"} className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2' onClick={() => setMenuDisplay(preve => !preve)}>Admin Panel</Link>
                                            )
                                        }
                                    </nav>
                                </div>
                            )
                        }


                    </div>



                    <div className='text-3xl'>
                        <span><FaShoppingCart /></span>
                        <div className='bg-red-600 text-white w-5 h-5 p-1 flex items-center justify-center rounded-full absolute top-0'>
                            <p className='text-sm'>0</p>
                        </div>
                    </div>


                    <div>
                        {
                            user?._id ? (
                                <button onClick={handlelogout} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'>Logout</button>
                            ) : (
                                <Link to={'/login'}>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Login</button>
                                </Link>
                            )
                        }
                    </div>

                </div>

            </div>

        </header>

    )
}

export default Header