import React from "react";
import { Link, Outlet } from "react-router-dom";
import Nav from "../Pages/Shared/Nav";

const Dashboard = () => {
  return (
    <div>
      <Nav></Nav>
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
          <ul className="menu p-4 w-80  text-base-content">
            <li>
              <Link to="/dashboard/myBookings">My Bookings</Link>
            </li>
            <li>
              <Link to="/dashboard/allUsers">All Users</Link>
            </li>

            {/*conditional routes for seller */}
            {/*conditional routes for admin */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
