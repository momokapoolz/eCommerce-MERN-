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
    }
    
}

export default summaryAPI