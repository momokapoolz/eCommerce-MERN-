import React, { useState } from 'react'
import { CgClose } from "react-icons/cg";
import { toast } from 'react-toastify'
import { IoMdClose } from "react-icons/io";

import summaryAPI from '../common/api';

const DeleteProduct = ({
    onClose,
    productData,
    fetchdata
}) => {

    const [data, setData] = useState({
        ...productData,
        name: productData?.name,
        brand: productData?.brand,
        category: productData?.category,
        productImage: productData?.productImage || [],
        price: productData?.price,
    })

    const [askDelete, setAskDelete] = useState(true)

    //logic
    const handleSubmit = async () => {
        //e.preventDefault()

        const response = await fetch(summaryAPI.deleteProduct.url, {
            method: summaryAPI.deleteProduct.method,
            credentials: 'include',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const responseData = await response.json()

        if (responseData.success) {
            toast.success(responseData?.message)
            onClose()
            fetchdata()
        }


        if (responseData.error) {
            toast.error(responseData?.message)
        }


    }
    return (
        <div>


            <div className='fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-between items-center'>
                <div className='mx-auto bg-white shadow-md p-4 w-full max-w-sm'>

                    <button className='block ml-auto' onClick={onClose}>
                        <IoMdClose />
                    </button>

                    <h1 className='pb-4 text-lg font-medium'>Are you sure?</h1>


                    <button className='w-fit mx-auto block  py-1 px-3 rounded-full bg-red-600 text-white hover:bg-red-700' onClick={handleSubmit}>Delete</button>
                </div>
            </div>

            
        </div>
    )
}

export default DeleteProduct