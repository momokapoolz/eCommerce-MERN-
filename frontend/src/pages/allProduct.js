import React, { useState, useEffect } from 'react'
import summaryAPI from '../common/api';
import { toast } from 'react-toastify'

const AllProducts = () => {

    const [allProducts, setProducts] = useState([])
    const [openUpdateProducts, setOpenUpdateProducts] = useState(false)
    const [openAddProducts, setOpenAddProducts] = useState(false)

    return (
        <div>
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
                        allProducts.map((el, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{el?.name}</td>
                                    <td>{el?.email}</td>
                                    <td>{el?.role}</td>
                                    <td>
                                        <button className='bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white' onClick={() => {
                                            
                                            setOpenUpdateRole(true)

                                        }}><MdModeEdit /></button>
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
                        onClose={() => setOpenUpdateRole(false)}
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

export default AllProducts