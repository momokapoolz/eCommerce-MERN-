import React, { useState } from 'react';
import axios from 'axios';
import summaryAPI from '../common/api';

function ProductSearch() {
    const [keyword, setKeyword] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(summaryAPI.searchProduct.url, { keyword });
            setResults(response.data.data);
        } catch (err) {
            setError('Error occurred while searching for products.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="product-search">
            <h2>Search Products</h2>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter keyword..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </form>

            {error && <div className="error">{error}</div>}


            <div className="results">
                {results.length > 0 ? (
                    <ul>
                        {results.map((product) => (
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

export default ProductSearch;
