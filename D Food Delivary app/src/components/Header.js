import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btn_inout, setbtn_inout] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={new URL("../../images/logo.jpg", import.meta.url)}
                    alt="" style={{ width: "200px" }} />

            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link className="nav-links" to="/">Home</Link>
                    </li>

                    <li>
                        <Link className="nav-links" to="/about">About Us</Link>
                    </li>

                    <li>
                        <Link className="nav-links" to="/contact">Contact Us</Link>
                    </li>

                    <li>Cart</li>

                    <button className="login" onClick={() => {
                        btn_inout === "Login" ? setbtn_inout("Logout") : setbtn_inout("Login");
                    }}
                    >{btn_inout}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;