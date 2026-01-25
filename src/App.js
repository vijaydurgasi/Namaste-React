import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";

import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appstore from "../Redux/AppStore";
import "../index.css";

/* ---------------- App Layout ---------------- */

const AppLayout = () => {
    return (
        <Provider store={appstore}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </Provider>
    );
};

/* ---------------- Router ---------------- */

const appRouter = createHashRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
