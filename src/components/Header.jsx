import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { firbaseContext } from "../MyContextComponents/FirebaseComponent";


const Header = () => {
    const { spiUser, logoutUers } = useContext(firbaseContext)
    const handelLogout = () => {
        logoutUers()
        .then(() => {
            // setSpiUser("")
            // Sign-out successful.
        })
        .catch(() => {
            // An error happened.
        });
    }
    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <Link className="text-xl">daisyUI</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                
                    {spiUser ?
                        <div className="flex">
                            <p>{spiUser.email}</p>
                            <button onClick={handelLogout} className="btn btn-secondary">LogOut</button>
                        </div>
                        : <NavLink to="/signUp" className="text-green-600 border-gray-100 border-[0.2px] px-3 py-1">Sign Up</NavLink>}
                </div>
            </div>
        </div>
    );
};

export default Header;