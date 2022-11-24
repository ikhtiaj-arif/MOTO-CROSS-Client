
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
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
                path: '/categories',
                element: <SignUp/>
            },

        ]
    }
])

export default router