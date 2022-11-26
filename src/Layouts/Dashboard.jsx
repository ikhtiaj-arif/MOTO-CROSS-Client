import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getRole } from "../Api/User";
import { AuthContext } from "../Context/UserContext";
import Nav from "../Pages/Shared/Nav";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);

  useEffect(() => {
    setLoading(true);
    getRole(user?.email).then((data) => {
      console.log(data);
      setRole(data);
      setLoading(false);
    });
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
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

          <h1>{user?.email}</h1>

          <ul className="menu p-4 w-80  text-base-content">
            <li>
              <Link to="/dashboard/myBookings">My Bookings</Link>
            </li>
            {role === "admin" && (
              <>
                <li>
                  <Link to="/dashboard/allUsers">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/allSeller">All Seller</Link>
                </li>
              </>
            )}
            {role === "seller" && (
              <>
                <li>
                  <Link to="/dashboard/myProducts">My Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/addProduct">Add Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/">All buyers</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
