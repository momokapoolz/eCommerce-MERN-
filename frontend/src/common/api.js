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
    }
}

export default summaryAPI