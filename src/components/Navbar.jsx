
import { NavLink } from 'react-router-dom';
import userDefaultPic from '../assets/user.png';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
  const{user,logOut}=useContext(AuthContext);
  const handleSignOut =()=>{
    logOut()
    .then()
    .catch()

  }



  const menus = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/add-product">Add Product</NavLink></li>
      <li><NavLink to="/my-cart">My Cart</NavLink></li>
      <li><NavLink to="/signup">Sign Up</NavLink></li>
    </>
  );

  return (
    <div className="navbar font-poppins bg-slate-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {menus}
          </ul>
        </div>
        <h1 className="font-cursive text-orange-500 normal-case text-2xl">Car Connect X</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menus}
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src= {userDefaultPic} />
        </div>
      </label>
      {
        user ?
        <li><NavLink onClick={handleSignOut} >Log out</NavLink></li>
        :
        <li><NavLink to="/login">Login</NavLink></li>
      }
      
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
