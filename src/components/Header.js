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
            <div className="px-4 md:px-8 py-3">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between">

                    {/* ================== MOBILE TOP ROW ================== */}
                    <div className="flex items-center justify-between w-full md:w-auto">

                        {/* Logo */}
                        <Link to="/" className="flex-shrink-0">
                            <img
                                src="https://res.cloudinary.com/df1ebqujt/image/upload/v1769318118/logo.png"
                                alt="App Logo"
                                className="w-32 md:w-44 h-auto object-contain"
                            />
                        </Link>

                        {/* Mobile Cart + Login */}
                        <div className="flex items-center gap-3 md:hidden">

                            <Link to="/cart" className="flex items-center gap-1">
                                <img
                                    src={CART_URL}
                                    className="w-5 h-auto"
                                    alt="Cart"
                                />
                                <span className="font-semibold">{totalItems}</span>
                            </Link>

                            <button
                                onClick={() =>
                                    setbtn_inout(btn_inout === "Login" ? "Logout" : "Login")
                                }
                                className="px-3 py-1 border rounded-md text-sm transition duration-200 hover:bg-orange-500 hover:text-white hover:border-orange-500"
                            >
                                {btn_inout}
                            </button>

                        </div>
                    </div>

                    {/* ================== MOBILE NAVIGATION ================== */}
                    <div className="flex items-center justify-between mt-3 text-sm font-medium md:hidden">
                        <div className="flex items-center gap-4">
                            <Link to="/" className="hover:text-orange-500">Home</Link>
                            <Link to="/about" className="hover:text-orange-500">About</Link>
                            <Link to="/contact" className="hover:text-orange-500">Contact</Link>
                        </div>
                    </div>

                    {/* ================== DESKTOP NAVIGATION ================== */}
                    <div className="hidden md:flex items-center gap-6 text-base font-medium">

                        <Link to="/" className="hover:text-orange-500">Home</Link>
                        <Link to="/about" className="hover:text-orange-500">About</Link>
                        <Link to="/contact" className="hover:text-orange-500">Contact</Link>

                        <Link to="/cart" className="flex items-center gap-1">
                            <img
                                src={CART_URL}
                                className="w-6 h-auto"
                                alt="Cart"
                            />
                            <span className="font-semibold">{totalItems}</span>
                        </Link>

                        <button
                            onClick={() =>
                                setbtn_inout(btn_inout === "Login" ? "Logout" : "Login")
                            }
                            className="px-3 py-1 border rounded-md text-sm transition duration-200 hover:bg-orange-500 hover:text-white hover:border-orange-500"
                        >
                            {btn_inout}
                        </button>

                    </div>

                </div>

            </div>
        </header>
    );


};

export default Header;