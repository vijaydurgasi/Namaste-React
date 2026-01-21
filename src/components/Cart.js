import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../../Redux/cartSlice";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const deliveryFee = totalPrice >= 199 ? 0 : 40;

    return (
        <div className="min-h-screen bg-[#f2f2f2] flex justify-center pt-6">
            <div className="w-full max-w-[420px] bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden text-center">

                <div className="px-4 py-3 border-b border-gray-200">
                    <h2 className="text-base font-semibold text-gray-900">
                        Your Cart
                    </h2>
                    <p className="text-xs text-gray-500">
                        {cartItems.length} items added
                    </p>
                </div>

                {cartItems.length === 0 ? (
                    <div className="p-10 text-center text-gray-500 text-sm">
                        Your cart is empty 🛒
                    </div>
                ) : (
                    <>
                        <ul className="px-4 py-2 divide-y divide-gray-200">
                            {cartItems.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex justify-between items-center py-3"
                                >
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">
                                            {item.name}
                                            {item.quantity > 1 && (
                                                <span className="text-xs text-gray-500 ml-1">
                                                    × {item.quantity}
                                                </span>
                                            )}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            ₹{item.price}
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => dispatch(removeItem(item.id))}
                                        className="text-[11px] font-semibold text-orange-500 hover:underline"
                                    >
                                        REMOVE
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="px-4 py-4 border-t border-gray-200 bg-[#fafafa]">
                            <div className="flex justify-between text-sm mb-2">
                                <span>Item Total</span>
                                <span>₹{totalPrice}</span>
                            </div>

                            <div className="flex justify-between text-sm mb-2">
                                <span>Delivery Fee</span>
                                <span
                                    className={
                                        deliveryFee === 0
                                            ? "text-green-600 font-medium"
                                            : ""
                                    }
                                >
                                    {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                                </span>
                            </div>

                            <div className="flex justify-between font-semibold border-t pt-3 mt-3">
                                <span>To Pay</span>
                                <span>₹{totalPrice + deliveryFee}</span>
                            </div>

                            <button
                                onClick={() => dispatch(clearCart())}
                                className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold text-sm"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
