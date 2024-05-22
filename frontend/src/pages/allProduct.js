import React, { useState, useEffect } from 'react'
import summaryAPI from '../common/api';
import { toast } from 'react-toastify'

import { MdModeEdit } from "react-icons/md";



import UpdateProduct from '../components/updateProduct'

import UploadProduct from '../components/uploadProduct'

const AllProducts = () => {

    const [allProducts, setProducts] = useState([])
    const [openUpdateProducts, setOpenUpdateProducts] = useState(false)
    const [openAddProducts, setOpenAddProducts] = useState(false)

    const [updateProductDetails,setUpdateProductDetails] = useState({
        name : "",
        category : "",
        brand : "",
        price : ""
    })


    const fetchAllProduct = async () => {
        const fetchallProducts = await fetch(summaryAPI.allProducts.url, {
            method: 'GET',
            credentials: 'include'
        })

        const data = await fetchallProducts.json()

        if (data.success) {
            setProducts(data.data); // day chinh la ly do tai sao all user o duoi html lai dung duoc
        }

        if (data.error) {
            toast.error(data.message)
        }

    }

    useEffect(() => {
        fetchAllProduct()
    }, [])



    return (
        <div>

            <div className='bg-white py-2 px-4 flex justify-between items-center'>
                <h2 className='font-bold text-lg'>All Product</h2>
                <button className='border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all py-1 px-3 rounded-full ' onClick={() => setOpenAddProducts(true)}>Upload Product</button>
            </div>

            <table className='w-full userTable'>
                <thead>
                    <tr className='bg-black text-white'>
                        <th>Product Name</th>
                        <th>Product Brand</th>
                        <th>Product Category</th>
                        <th>Product Price</th>
                        <th>Product Image</th>
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

                                            setOpenUpdateProducts(true)
                                            setUpdateProductDetails(el)

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
                openUpdateProducts && (
                    <UpdateProduct
                        onClose={() => setOpenUpdateProducts(false)}
                        name={updateProductDetails.name}
                        category={updateProductDetails.category}
                        brand={updateProductDetails.brand}
                        price={updateProductDetails.price}
                        callFunc={fetchAllProduct}
                    />
                )
            }

            {
                openAddProducts && (
                    <UploadProduct
                        onClose={() => setOpenAddProducts(false)}
                    
                    />
                )
            }
        </div>
    )
}

export default AllProducts