import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import { FaOutdent, FaChevronDown } from "react-icons/fa";
import TrActionBtn from "../../Components/TrActionBtn";

const Nav = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logOutUser()
      .then(() => {})
      .catch(() => {});
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
       <a href="#add">Featcher </a>
      </li>
      <li>
       <a href="#info">Stats </a>
      </li>
      <li>
       <a href="#category">Categories</a>
      </li>
      <li tabindex="0">
          <a class="justify-between">
            Parent
            <FaChevronDown/>
          </a>
          <ul class="p-2 z-10 bg-base-100 rounded-md">
            <li><a href="#service">Service </a></li>
            <li><a href="#seller">Team</a></li>
            <li><a href="#testimonial">testimonial</a></li>
          </ul>
        </li>
   
  
    
      

    
    </>
  );

  return (
    <div className="navbar py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 font-medium shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}

            <li>
        {user?.uid ? (
          <>
           <Link to="/dashboard">Dashboard</Link>
            <Link onClick={handleLogout} className="btn btn-outline btn-accent">
              LogOut
            </Link>
            <label htmlFor="dashboard-drawer" className=" drawer-button md:hidden">
          <FaOutdent className="w-4 h-4 mr-3" />
        </label>
          </>
        ) : (
          <>
          <TrActionBtn
          title='  Log In'>

            <Link to="/login" >
            
            </Link>
          </TrActionBtn>
          </>
        )}
      </li>


          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          MotoCross
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-medium p-0">{menuItems}     
        </ul>
      </div>
      <ul className="navbar-end hidden lg:flex">
      <li>
        {user?.uid ? (
          <>
           <Link to="/dashboard">Dashboard</Link>
            <Link onClick={handleLogout} className="btn btn-outline btn-accent">
              LogOut
            </Link>
            <label htmlFor="dashboard-drawer" className=" drawer-button md:hidden">
          <FaOutdent className="w-4 h-4 mr-3" />
        </label>
          </>
        ) : (
          <>
         

            <Link to="/login" >
            <TrActionBtn
          title='Log In'/>
            </Link>
         
          </>
        )}
      </li>
        
       
      </ul>
    </div>
  );
};

export default Nav;
