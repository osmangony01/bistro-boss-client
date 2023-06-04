import { useNavigate } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate("/", { replace: true });
            })
            .catch(error => console.log(error.message))
    }


    const navItem = <>
        <li><ActiveLink to="/">Home</ActiveLink></li>
        <li><ActiveLink to="/menu">Our Menu</ActiveLink></li>
        <li><ActiveLink to="/order/salad">Order Food</ActiveLink></li>
        {!user && <li><ActiveLink to="/login">Login</ActiveLink></li>}
       {user && <li><ActiveLink to="/">Sign Out</ActiveLink></li>}

    </>

    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>


    );
};

export default Navbar;