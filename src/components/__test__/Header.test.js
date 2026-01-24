import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appstore from "../../../Redux/AppStore";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import "@testing-library/jest-dom";
import About from "../About";
import userEvent from "@testing-library/user-event";
import Contact from "../Contact";

it("should load Header component with Login Button", () => {

    render(
        <BrowserRouter>
            <Provider store={appstore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();

});

it("Testing cart items 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appstore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByRole("img", { name: /cart icon/i });

    expect(cartItems).toBeInTheDocument();

});


it("Testing Login and Logout onclick", async () => {
    render(
        <BrowserRouter>
            <Provider store={appstore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: /login/i });

    fireEvent.click(loginButton);

    const logoutButton = await screen.findByRole("button", { name: /logout/i });

    expect(logoutButton).toBeInTheDocument();

});

it("Testing About page rendering on click", async () => {
    const user = userEvent.setup();

    render(
        <MemoryRouter initialEntries={["/"]}>
            <Provider store={appstore}>
                <Header />
                <Routes>
                    <Route path="/" element={<div>Home Page</div>} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Provider>
        </MemoryRouter>
    );

    const aboutUsLink = screen.getByRole("link", { name: /about us/i });

    await user.click(aboutUsLink);

    expect(
        await screen.findByRole("heading", { name: /about us/i })
    ).toBeInTheDocument();
});


it("Testing Contact page rendering on click", async () => {
    const user = userEvent.setup();

    render(
        <MemoryRouter initialEntries={["/"]}>
            <Provider store={appstore}>
                <Header />
                <Routes>
                    <Route path="/" element={<div>Home Page</div>} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Provider>
        </MemoryRouter>
    );

    const contactLink = screen.getByRole("link", { name: /contact Us/i });

    await user.click(contactLink);

    expect(
        await screen.findByRole("heading", { name: /contact/i })
    ).toBeInTheDocument();
});