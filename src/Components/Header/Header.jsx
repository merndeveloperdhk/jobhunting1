import { Link, NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import img from '../../assets/logo.svg'
import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const auth = getAuth(app);
const Header = () => {
  const [user, setUser] = useState(null);
  
  const handleLogOut = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
        console.log(result);
        
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  const navLinks = (
    <>
      {/* <NavLink to="/">Home</NavLink> */}
      <NavLink to="/">Shop</NavLink>     
      <Link to='/dashboard'>Dashboard</Link>
      {
        user ? <button
        className="btn btn-success w-1/12 mt-4 mx-auto block "
        onClick={handleLogOut}
      >
        Log Out
      </button> : <div className="flex gap-3">
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      </div>
      }
      
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to='/' className="flex">
          <img className="w-6" src={img} alt="" />
          <h1 className=" normal-case text-xl ml-2">My shop</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal flex gap-5">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/cart"  className="btn btn-sm text-xl"><FaCartArrowDown></FaCartArrowDown></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
