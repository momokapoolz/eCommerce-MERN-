import React from 'react'


import summaryAPI from '../common/api'

const FetchGetProductsByCategory = async(category) => {
    const response = await fetch(summaryAPI.getProductsByCategory.url,{
        method : summaryAPI.getProductsByCategory.method,
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify({
            category : category
        })
    })

    const dataResponse = await response.json()

    return dataResponse
}

export default FetchGetProductsByCategory