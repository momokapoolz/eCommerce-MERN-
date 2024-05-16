import React, { useState, useEffect } from 'react'
import summaryAPI from '../common/api';
import { toast } from 'react-toastify'
import { MdModeEdit } from "react-icons/md";


import ChangeUserRole from '../components/ChangeUserRole';


const AllUsers = () => {

    const [allUser, setAllUsers] = useState([])
    const [openUpdateRole,setOpenUpdateRole] = useState(false)
    const [updateUserDetails,setUpdateUserDetails] = useState({
        email : "",
        name : "",
        role : "",
        _id  : ""
    })


    const fetchAllUsers = async () => {
        const fetchData = await fetch(summaryAPI.getAllUser.url, {
            method: summaryAPI.getAllUser.method,
            credentials: 'include'
        })

        const data = await fetchData.json()

        if (data.success) {
            setAllUsers(data.data); // day chinh la ly do tai sao all user o duoi html lai dung duoc
        }

        if (data.error) {
            toast.error(data.message)
        }

    }


    useEffect(() => {
        fetchAllUsers()
    }, [])

    return (
        <div className='bg-white pb-4'>
            <table className='w-full userTable'>
                <thead>
                    <tr className='bg-black text-white'>
                        <th>Sr.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        allUser.map((el, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{el?.name}</td>
                                    <td>{el?.email}</td>
                                    <td>{el?.role}</td>
                                    <td>
                                        <button className='bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white' onClick={()=>{
                                        setUpdateUserDetails(el)
                                        setOpenUpdateRole(true)

                                    }}><MdModeEdit/></button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            {
            openUpdateRole && (
                <ChangeUserRole 
                    onClose={()=>setOpenUpdateRole(false)} 
                    name={updateUserDetails.name}
                    email={updateUserDetails.email}
                    role={updateUserDetails.role}
                    userId={updateUserDetails._id}
                    callFunc={fetchAllUsers}
                />
            )      
        }

        </div>
    )
}

export default AllUsers