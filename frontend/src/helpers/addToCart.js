// import summaryAPI from "../common/api"
// import { toast } from 'react-toastify'

// const addToCart = async(e,id) =>{
//     e?.stopPropagation()
//     e?.preventDefault()

//     const response = await fetch(summaryAPI.addToCart.url,{
//         method : summaryAPI.addToCart.method,
//         credentials : 'include',
//         headers : {
//             "content-type" : 'application/json'
//         },
//         body : JSON.stringify(
//             { productId : id }
//         )
//     })

//     const responseData = await response.json()

//     if(responseData.success){
//         toast.success(responseData.message)
//     }

//     if(responseData.error){
//         toast.error(responseData.message)
//     }


//     return responseData

// }


// export default addToCart

// //sua code trong file App.js va file header de them hieu ung jhi add to cart :)