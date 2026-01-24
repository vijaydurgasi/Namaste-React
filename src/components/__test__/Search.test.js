import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../../../Utils/mockResTest.json";
import { BrowserRouter } from "react-router-dom";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("filters restaurant cards based on search input", async () => {
    render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    );

    const allCards = await screen.findAllByTestId("res-card");
    expect(allCards.length).toBe(3);

    const searchInput = await screen.findByTestId("search-input");
    const searchBtn = screen.getByRole("button", { name: /search/i });

    fireEvent.change(searchInput, { target: { value: "burger" } });
    fireEvent.click(searchBtn);

    const filteredCards = await screen.findAllByTestId("res-card");
    expect(filteredCards.length).toBe(1);
    expect(screen.getByText("Burger King")).toBeInTheDocument();
});



