import React from 'react'
import { useParams } from 'react-router-dom'


const CategoryProducts = () => {
    const params = useParams()
    console.log("catergory", params)

    return (
        <div>
            {params?.categoryName}
        </div>
    )
}

export default CategoryProducts