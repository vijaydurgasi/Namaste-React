import { useState } from "react";
const Header = () => {
    const [btn_inout, setbtn_inout] = useState("Login");
    console.log("Header");
    return (
        <div className="header">
            <div className="logo-container">
                <img
             className="logo" 
             src= {new URL("../../images/logo.jpg", import.meta.url)} 
             alt="" style={{width: "200px"}}/>
                
            </div>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
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