import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getRole } from "../Api/User";
import { AuthContext } from "../Context/UserContext";
import Nav from "../Pages/Shared/Nav";
import { FaInstalod, FaBell, FaCalendarPlus} from "react-icons/fa";


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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current dark:text-gray-400"
                    >
                      <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                    </svg>
                    <span>ALL USERS</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/allSellerReq"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current dark:text-gray-400"
                    >
                      <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                    </svg>
                    <span>ALL SELLER REQUESTS</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/allSeller"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current dark:text-gray-400"
                    >
                      <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                    </svg>
                    <span>ALL SELLER</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/reports"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current dark:text-gray-400"
                    >
                      <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                    </svg>
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
                 <FaBell/>
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
