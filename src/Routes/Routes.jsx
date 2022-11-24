
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import BikeInfo from "../Pages/Bikes/BikeInfo";
import BikesByTitle from "../Pages/Bikes/BikesByTitle";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Shared/Login";
import SignUp from "../Pages/Shared/SignUp";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        // errorElement: ,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: '/categories/:title',
                element: <BikesByTitle/>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.title}`)
            },
            {
                path: '/bike/:id',
                element: <BikeInfo></BikeInfo>,
                loader: ({params}) => fetch(`http://localhost:5000/bike/${params.id}`)
            },

        ]
    }
])

export default router