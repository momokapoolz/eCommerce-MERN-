import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../pages/home'
import Login from '../pages/login'
import Signup from '../pages/signup'
import Forgotpassword from '../pages/forgotpassword'
import AdminPanel from '../pages/adminPanel'
import AllUsers from '../pages/allUser'
import AllProducts from '../pages/allProduct'
import CategoryProduct from '../pages/categoryProducts'
import ProductDetails from '../pages/productDetails'
import SearchProduct from '../pages/searchProduct'
import SortPrice from '../pages/sortPrice'


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
                path: "product-category/:categoryName",
                element: <CategoryProduct/>
            },
            {
                path:"forgot-password",
                element:<Forgotpassword/>
            },
            {
                path:"admin-panel",
                element:<AdminPanel/>,
                children: [
                    {
                        path: "all-users",
                        element: <AllUsers />
                    },{
                        path: "all-products",
                        element: <AllProducts/>,
                    }
                ]
            },
            {
                path:"product/:id",
                element:<ProductDetails />
                
            },
            {
                path: "search",
                element:<SearchProduct/>
            },
            {
                path: "sort-price",
                element:<SortPrice/>
            },
            
            
        ]

    }
])

export default router