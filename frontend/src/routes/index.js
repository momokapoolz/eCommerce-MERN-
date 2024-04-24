import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../pages/home'
import Login from '../pages/login'
import Signup from '../pages/signup'
import Forgotpassword from '../pages/forgotpassword'


const router = createBrowserRouter ([
    {
        path: "/",
        element: <App/>,
        children : [
            {
                path : "",
                element: <Home/>
            },
            {
                path : "login",
                element: <Login/>
            },
            {
                path : "sign-up", 
                element: <Signup />

            },
            {
                path:"forgot-password",
                element:<Forgotpassword/>
            }
        ]

    }
])

export default router