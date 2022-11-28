import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import BikeInfo from "../Pages/Bikes/BikeInfo";
import BikesByTitle from "../Pages/Bikes/BikesByTitle";
import Home from "../Pages/Home/Home";
import AllRequestedSeller from "../Pages/Private/AdminAccess/AllRequestedSeller";
import AllSeller from "../Pages/Private/AdminAccess/AllSeller";
import AllUsers from "../Pages/Private/AdminAccess/AllUsers";
import Reports from "../Pages/Private/AdminAccess/Reports";
import MyBookings from "../Pages/Private/MyBookings";
import Payment from "../Pages/Private/Payment";
import AddProducts from "../Pages/Private/Seller/AddProducts";
import MyProducts from "../Pages/Private/Seller/MyProducts";
import Blogs from "../Pages/Shared/Blogs";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Login from "../Pages/Shared/Login";
import SignUp from "../Pages/Shared/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/categories/:title",
        element: <BikesByTitle />,
        loader: ({ params }) =>
          fetch(
            `https://server-nine-black.vercel.app/categories/${params.title}`
          ),
      },
      {
        path: "/bike/:id",
        element: (
          <PrivateRoute>
            <BikeInfo />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-nine-black.vercel.app/bike/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <MyBookings />,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(`https://server-nine-black.vercel.app/bookings/${params.id}`),
      },
      {
        path: "/dashboard/allUsers",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/allSeller",
        element: <AllSeller />,
      },
      {
        path: "/dashboard/allSellerReq",
        element: <AllRequestedSeller />,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProducts />,
      },
      {
        path: "/dashboard/myProducts",
        element: <MyProducts />,
      },
      {
        path: "/dashboard/reports",
        element: <Reports />,
      },
    ],
  },
]);

export default router;
