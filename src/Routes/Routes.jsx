
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import BikeInfo from "../Pages/Bikes/BikeInfo";
import BikesByTitle from "../Pages/Bikes/BikesByTitle";
import Home from "../Pages/Home/Home";
import AllSeller from "../Pages/Private/AdminAccess/AllSeller";
import AllUsers from "../Pages/Private/AdminAccess/AllUsers";
import Reports from "../Pages/Private/AdminAccess/Reports";
import MyBookings from "../Pages/Private/MyBookings";
import AddProducts from "../Pages/Private/Seller/AddProducts";
import MyProducts from "../Pages/Private/Seller/MyProducts";
import Login from "../Pages/Shared/Login";
import SignUp from "../Pages/Shared/SignUp";
import PrivateRoute from "./PrivateRoute";


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
                element: <PrivateRoute><BikeInfo/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/bike/${params.id}`)
            }
        ]  
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard/></PrivateRoute>,
        children: [
            {
                path: '/dashboard/myBookings',
                element: <MyBookings/>
            },
            {
                path: '/dashboard/allUsers',
                element: <AllUsers/>
            },
            {
                path: '/dashboard/allSeller',
                element: <AllSeller/>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProducts/>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProducts/>
            },
            {
                path: '/dashboard/reports',
                element: <Reports/>
            },
        ]
    }

])

export default router