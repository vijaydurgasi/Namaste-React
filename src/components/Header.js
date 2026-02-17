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
        <header className="w-full bg-slate-100 shadow-sm border-b">
            <div className="flex items-center justify-between 
                    px-3 sm:px-5 md:px-8 
                    py-2 sm:py-3">

                <Link to="/" className="flex-shrink-0">
                    <img
                        src="https://res.cloudinary.com/df1ebqujt/image/upload/v1769318118/logo.png"
                        alt="App Logo"
                        className="w-24 sm:w-36 md:w-36 h-auto object-contain rounded-xl"
                    />
                </Link>

                <div className="flex items-center 
                      gap-4 sm:gap-6 md:gap-8 
                      font-semibold 
                      text-xs sm:text-sm md:text-base">

                    <span>
                        {onlineStatus ? "🟢" : "🔴"} onlinestatus
                    </span>

                    <Link to="/" className="hover:text-orange-500 whitespace-nowrap">
                        Home
                    </Link>

                    <Link to="/about" className="hover:text-orange-500 whitespace-nowrap">
                        About
                    </Link>

                    <Link to="/contact" className="hover:text-orange-500 whitespace-nowrap">
                        Contact
                    </Link>

                    <Link to="/cart" className="flex items-center gap-1 whitespace-nowrap">
                        <img
                            src={CART_URL}
                            className="w-5 sm:w-6 md:w-7 h-auto"
                            alt="Cart"
                        />
                        <span>{totalItems}</span>
                    </Link>

                    <button
                        onClick={() =>
                            setbtn_inout(btn_inout === "Login" ? "Logout" : "Login")
                        }
                        className="px-3 sm:px-4 
                     py-1 
                     border rounded-md 
                     text-xs sm:text-sm md:text-base
                     hover:bg-gray-100 transition"
                    >
                        {btn_inout}
                    </button>

                </div>
            </div>
        </header>
    );


};

export default Header;