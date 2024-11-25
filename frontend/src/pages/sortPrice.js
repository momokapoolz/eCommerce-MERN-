import React, { useState, useEffect } from 'react';
import axios from 'axios';

import summaryAPI from '../common/api';

function SortPrice() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSortedProducts = async () => {
            try {
                const response = await axios.get(summaryAPI.sortPrice.url);
                setProducts(response.data.data);
            } catch (err) {
                setError('Error occurred while sorting products.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchSortedProducts();
    }, []);

    return (
        <div className="sort-price">
            <h2>Sorted Products by Price</h2>

            {loading && <p>Loading...</p>}
            {error && <div className="error">{error}</div>}

            <div className="product-list">
                {products.length > 0 ? (
                    <ul>
                        {products.map((product) => (
                            <div className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex'>
                                <div className='bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px]'>
                                    <img src={product.productImage[0]} className='object-scale-down h-full hover:scale-110 transition-all' />
                                </div>
                                <div className='p-4 grid'>
                                    <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>{product?.productName}</h2>
                                    <p className='capitalize text-slate-500'>{product?.category}</p>
                                    <div className='flex gap-3'>
                                        <p>{(product?.price)}$</p>

                                    </div>
                                    <button className='text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 rounded-full' /*onClick={(e)=>handleAddToCart(e,product?._id)}*/>Add to Cart</button>
                                </div>
                            </div>
                        ))}
                    </ul>
                ) : (
                    !loading && <p>No products found.</p>
                )}
            </div>
        </div>
    );
}

export default SortPrice;
