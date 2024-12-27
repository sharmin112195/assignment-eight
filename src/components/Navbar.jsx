import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { getAddToCardList, getAddToWishList } from "../utitity";
import { countContext } from "../layouts/MainLayout";

const Navbar = () => {
  const [totalData,setTotalData] = useState([]);
  const [wishData,setWishData] = useState([])

  const {count} = useContext(countContext)
  useEffect(()=>{
    const storeData = getAddToCardList();
    setTotalData(storeData)
  },[count])
  useEffect(()=>{
    const storeWishData = getAddToWishList();
    setWishData(storeWishData)
  },[count])

  const location = useLocation();
  const navBar = {
    backgroundColor:
    location.pathname === "/" ? "rgba(149,56,226,1)" : "white",
    color: location.pathname === "/" ? "white" : "black",
  }

    return (
      <div className="flex justify-center items-center mt-4 mx-auto w-full px-4 md:px-10 z-50 fixed top-0">
        <div style={navBar} className="navbar items-center rounded-t-xl px-4 md:px-28 backdrop-blur-xl bg-white/30">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-4">
        <NavLink className={({isActive}) =>`font-bold ${isActive?'btn bg-purple-700 text-white':'btn'}`} to='/'>Home</NavLink>       
        <NavLink className={({isActive}) =>`font-bold ${isActive?'btn bg-purple-700 text-white':'btn'}`} to='/statistics' >Statistics</NavLink>
        <NavLink className={({isActive}) =>`font-bold ${isActive?'btn bg-purple-700 text-white':'btn'}`} to='/dashboard'>Dashboard</NavLink>
        <NavLink className={({isActive}) =>`font-bold ${isActive?'btn bg-purple-700 text-white':'btn'}`} to='/about'>About</NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal flex items-center gap-4">
    <NavLink className={({isActive}) =>`font-bold ${isActive?'btn':'text-black'}`} to='/'>Home</NavLink>       
        <NavLink className={({isActive}) =>`font-bold ${isActive?'btn':'text-black'}`} to='/statistics' >Statistics</NavLink>
        <NavLink className={({isActive}) =>`font-bold ${isActive?'btn':'text-black'}`} to='/dashboard'>Dashboard</NavLink>
        <NavLink className={({isActive}) =>`font-bold ${isActive?'btn':'text-black'}`} to='/about'>About</NavLink>
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <a className="btn bg-white rounded-full"><MdOutlineShoppingCart size={16} />{totalData.length}</a>
    <a className="btn bg-white rounded-full"><IoMdHeartEmpty  size={16} />{wishData.length}</a>
  </div>
</div>
</div>
    );
};

export default Navbar;