import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useContext } from "react";
import { firbaseContext } from "../MyContextComponents/FirebaseComponent";

import SignUp from "../Pages/SignUp";


const Layout = () => {
    const {myPopup}=useContext(firbaseContext)
    // console.log(myPopup)
    return (
        <div >
            <div className="w-4/5 mx-auto">
                <Header></Header>
                <Outlet></Outlet>
                {/* <div className=" absolute top-[200px]  left-0 right-0 bottom-0">
                    {myPopup? <Link><SignUp></SignUp></Link>:""}
                </div> */}
            </div>
        </div>
    );
};

export default Layout;