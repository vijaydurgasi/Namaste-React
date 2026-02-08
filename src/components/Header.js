import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Utils/UserContext";
import useOnlineStatus from "../../Utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { CART_URL } from "../../Utils/constant";

const Header = () => {

    const [btn_inout, setbtn_inout] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);
    //  console.log(loggedInUser, "User logn");

    const cartItems = useSelector((store) => store.cart.items);

    const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

    return (
        <div className="flex justify-between items- border border-black bg-slate-100 shadow-sm">
            <div className="logo-container">
                <img
                    className="w-[100px] h-[200px] object-cover mt-1 mb-1 ml-1 rounded-2xl"
                    src="https://res.cloudinary.com/df1ebqujt/image/upload/v1769318118/logo.png"
                    alt="App Logo" style={{ width: "200px" }} />

            </div>
            <div className="nav-items">
                <ul className="flex item-center gap-8 font-bold mt-24 mr-2">

                    <li > onlineStatus : {onlineStatus ? "🟢" : "🔴"}</li>

                    <li className="no-underline text-black">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="no-underline text-black">
                        <Link to="/about">About Us</Link>
                    </li>

                    <li className="no-underline text-black">
                        <Link to="/contact">Contact Us</Link>
                    </li>

                    <li>
                        <Link to="/cart">
                            <img
                                src={CART_URL}
                                className="w-6 h-6 object-contain inline-block cursor-pointer"
                                alt="Cart Icon"
                            />
                            ({totalItems})
                        </Link>
                    </li>

                    <button className=" relative -top-[3px] px-5 py-1 border rounded-md text-sm font-semibold cursor-pointer transition hover:bg-gray-100 " onClick={() => {
                        btn_inout === "Login" ? setbtn_inout("Logout") : setbtn_inout("Login");
                    }}
                    >{btn_inout}</button>

                    {/* <li className="font-bold">{loggedInUser}</li> */}

                </ul>
            </div>
        </div>
    )
};

export default Header;