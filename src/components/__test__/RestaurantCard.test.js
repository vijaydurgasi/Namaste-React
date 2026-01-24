import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../../../Utils/mockResTest.json"
import "@testing-library/jest-dom";

it("should render RestaurantCard component", () => {
    render(
        <RestaurantCard
            resData={{
                info: {
                    name: "Theobroma",
                    cloudinaryImageId: "test-img",
                    cuisines: ["Desserts"],
                    avgRating: 4.5,
                },
            }}
        />
    );

    const name = screen.getByText("Theobroma");
    expect(name).toBeInTheDocument();
});

