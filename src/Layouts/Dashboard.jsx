import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getRole } from "../Api/User";
import { AuthContext } from "../Context/UserContext";
import Nav from "../Pages/Shared/Nav";
import { FaInstalod, FaBell, FaCalendarPlus,FaUsers, FaUserClock, FaUserCheck,FaRegEdit} from "react-icons/fa";


const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);

  useEffect(() => {
    setLoading(true);
    getRole(user?.email)
      .then((data) => {
        // console.log(data);
        setRole(data);
        setLoading(false);
      })
      .finally(setLoading(false));
  }, [user?.email]);

  if (loading) {
    return <div>spinner.....</div>;
  }

  return (
    <div>
      <Nav></Nav>

      <label
        htmlFor="dashboard-drawer"
        className="btn btn-primary drawer-button md:hidden"
      >
        Open drawer
      </label>
      <div className="drawer drawer-mobile mt-20">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="divide-y divide-gray-700"></div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <div className="h-full p-3 space-y-2 w-60 bg-gray-300">
          <div className="flex items-center p-2 space-x-4">
            <img
              src={user?.photoUrl}
              alt=""
              className="w-12 h-12 rounded-full dark:bg-gray-500"
            />
            <div>
              <h2 className="text-lg font-semibold">{user?.displayName}</h2>
              <span className="flex items-center space-x-1"></span>
            </div>
          </div>
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="bg-gray-300 text-gray-800 ">
              <Link
                to="/dashboard"
                href="#"
                className="flex items-center text-center font-bold p-2 rounded-md"
              >
                <span>Dashboard</span>
              </Link>
            </li>
            {role === "admin" && (
              <>
                <li>
                  <Link
                    to="/dashboard/allUsers"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300"
                  >
                   <FaUsers/>
                    <span>ALL USERS</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/allSellerReq"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300"
                  >
                    <FaUserClock/>
                    <span>ALL SELLER REQUESTS</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/allSeller"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300"
                  >
                    <FaUserCheck/>
                    <span>ALL SELLER</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/reports"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300"
                  >
                    <FaBell/>
                    <span>REPORTED ITEMS</span>
                  </Link>
                </li>
              </>
            )}
            {role === "seller" && (
              <>
                <li>
                  <Link
                    to="/dashboard/myProducts"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300"
                  >
                <FaInstalod/>
                    <span>MY PRODUCTS</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/addProduct"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300"
                  >
                  <FaCalendarPlus/>
                    <span>ADD A PRODUCT</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300"
                  >
                 <FaRegEdit/>
                    <span>Orders</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
