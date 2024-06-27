const backendDomain = 'http://localhost:8123'

const summaryAPI = {
    signUp : {
        url: `${backendDomain}/api/register`,
        method: "post"
    },

    LogIn: {
        url: `${backendDomain}/api/login`,
        method: "post"
    },
    Current_User: {
        url: `${backendDomain}/api/user-detail`,
        method: "get"
    },
    LogOut: {
        url:`${backendDomain}/api/user-logout`,
        method:"get"
    },
    getAllUser: {
        url:`${backendDomain}/api/all-users`,
        method:"get"
    },
    updateUser: {
        url: `${backendDomain}/api/update-user`,
        method: "put",
    },
    uploadProduct: {
        url: `${backendDomain}/api/upload-product`,
        method: "post",
    },
    updateProduct: {
        url: `${backendDomain}/api/update-product`,
        method: "put",
    },
    allProducts:{
        url: `${backendDomain}/api/all-products`,
        method: "get",
    },
    getAllProductByCategory:{
        url: `${backendDomain}/api/get-all-product-by-category`,
        method: 'get'
    },
    getProductsByCategory:{
        url: `${backendDomain}/api/get-products-by-category`,
        method: 'post'
    },
    getProductDetails:{
        url: `${backendDomain}/api/product-details`,
        method: 'post'
    }
}

export default summaryAPI