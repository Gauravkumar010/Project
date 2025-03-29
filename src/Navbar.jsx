import React, { useState } from "react";
import { Link,useNavigate  } from 'react-router-dom';

import Home from "./component/Home";
import Shop from "./component/Shop";
import Login from "./component/Login";
import About from "./component/About";



import { FaSearch, FaShoppingBag, FaUserCircle } from "react-icons/fa";

const Navbar = () => {

  const [Open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (

    <nav className="sticky top-0 z-50 bg-white py-4 px-6 backdrop-invert-20 flex justify-between items-center shadow-md">
    {/* Logo */}
    <Link to="/">
    <div className="flex items-center space-x-2">
      <span className="text-3xl">🛒</span>
      <h1 className="text-2xl font-bold text-green-700">Art-Hub</h1>
    </div>
    </Link>

    {/* Navigation Links */}
    <ul className="hidden md:flex space-x-6 text-gray-700">
      <li className="hover:text-green-700 cursor-pointer hover:underline">
        <Link to="/"> Home </Link>
      </li>
      <li className="hover:text-green-700 cursor-pointer hover:underline">
        <Link to="/shop" > Shop </Link>
      </li>
      <li className="hover:text-green-700 cursor-pointer hover:underline">
        <Link to="/about"> About </Link>
      </li>
      <li className="hover:text-green-700 cursor-pointer hover:underline">
        <Link to="/contact"> Contact </Link>
      </li>
    </ul>

    {/* Search Bar */}
    <div className="hidden md:flex items-center border-b border-gray-400">
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent focus:outline-none px-2 py-1"
      />
      <FaSearch className="text-gray-500 ml-2" />
    </div>

    {/* Icons */}
    <div className="flex space-x-4 items-center">
      <FaUserCircle className="text-green-700 text-2xl cursor-pointer" />
      <span className="text-green-700 font-medium cursor-pointer">
        <Link to="/login"> Log In </Link>
      </span>
      <div className="relative">
        <FaShoppingBag className="text-green-700 text-2xl cursor-pointer" />
        <span className="absolute -top-2 -right-2 bg-green-700 text-white text-xs rounded-full px-2">
          0
        </span>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
