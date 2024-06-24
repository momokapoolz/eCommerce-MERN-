import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { toast } from 'react-toastify'


import summaryAPI from '../common/api';
import Role from '../common/role'



const ChangeUserRole = ({ name, email, role, userId, onClose, callFunc }) => {
    const [userRole, setUserRole] = useState(role)

    const [openUpdateRole, setOpenUpdateRole] = useState(true)

    const handleOnChangeSelect = (e) => {
        setUserRole(e.target.value)

        console.log(e.target.value)
    }

    const updateUser = async () => {
        const fetchData = await fetch(summaryAPI.updateUser.url, {
            method: summaryAPI.updateUser.method,
            credentials: 'include',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                userId: userId,
                role: userRole
            })
        })

        const data = await fetchData.json()

        if (data.success) {
            toast.success(data.message)
            onClose()
            callFunc()
        }

        console.log("role updated", data)

        if (data.error) {
            toast.error(data.message)
        }
    }





    return (
        <div>


            <div className='fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-between items-center'>
                <div className='mx-auto bg-white shadow-md p-4 w-full max-w-sm'>

                    <button className='block ml-auto' onClick={onClose}>
                        <IoMdClose />
                    </button>

                    <h1 className='pb-4 text-lg font-medium'>Change User Role</h1>

                    <p>Name : {name}</p>
                    <p>Email : {email}</p>

                    <div className='flex items-center justify-between my-4'>
                        <p>Role :</p>
                        <select className='border px-4 py-1' value={userRole} onChange={handleOnChangeSelect}>
                            {
                                Object.values(Role).map(el => {
                                    return (
                                        <option value={el} key={el}>{el}</option>
                                    )
                                })
                            }
                        </select>
                    </div>


                    <button className='w-fit mx-auto block  py-1 px-3 rounded-full bg-red-600 text-white hover:bg-red-700' onClick={updateUser}>Change Role</button>
                </div>
            </div>
        </div>


    )
}

export default ChangeUserRole