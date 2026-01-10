import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btn_inout, setbtn_inout] = useState("Login");

    return (
        <div className="flex justify-between items- border border-black">
            <div className="logo-container">
                <img
                    className="w-[100px] h-[200px] object-cover mt-1 mb-1"
                    src={new URL("../../images/logo.jpg", import.meta.url)}
                    alt="" style={{ width: "200px" }} />

            </div>
            <div className="nav-items">
                <ul className="flex item-center gap-8 font-bold mt-24 mr-2">
                    <li className="no-underline text-black">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="no-underline text-black">
                        <Link to="/about">About Us</Link>
                    </li>

                    <li className="no-underline text-black">
                        <Link to="/contact">Contact Us</Link>
                    </li>

                    <li>Cart</li>

                    <button className=" relative -top-[3px] px-5 py-1 border rounded-md text-sm font-semibold cursor-pointer transition hover:bg-gray-100 " onClick={() => {
                        btn_inout === "Login" ? setbtn_inout("Logout") : setbtn_inout("Login");
                    }}
                    >{btn_inout}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;