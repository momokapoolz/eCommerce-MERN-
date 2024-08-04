import React, { useState } from 'react'
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import UpdateProduct from './updateProduct';
import DeleteProduct from './deleteProduct';


const ProductCard = ({
    data,
    fetchdata
}) => {
    const [editProduct, setEditProduct] = useState(false)
    const [deleteProduct, setDeleteProduct] = useState(false)




    return (
        <div className='bg-white p-4 rounded '>
            <div className='w-40'>
                <div className='w-32 h-32 flex justify-center items-center'>
                    <img src={data?.productImage[0]} className='mx-auto object-fill h-full' />
                </div>
                <h1 className='text-ellipsis line-clamp-2'>{data.name}</h1>

                <div>

                    <p className='font-semibold'>
                        {
                            data.price
                        }$

                    </p>

                    <div className='w-fit ml-auto p-2 bg-green-100 hover:bg-green-600 rounded-full hover:text-white cursor-pointer' onClick={() => setEditProduct(true)}>
                        <MdModeEditOutline />
                    </div>

                    <div className='w-fit ml-auto p-2 bg-red-100 hover:bg-red-600 rounded-full hover:text-white cursor-pointer' onClick={() => setDeleteProduct(true)}>
                        < MdDelete />
                    </div>
                </div>


            </div>

            {
                editProduct && (
                    <UpdateProduct productData={data} onClose={() => setEditProduct(false)} fetchdata={fetchdata} />
                )
            }

            {
                deleteProduct && (
                    <DeleteProduct productData={data} onClose={() => setEditProduct(false)} fetchdata={fetchdata} />
                )
            }



        </div>
    )
}

export default ProductCard