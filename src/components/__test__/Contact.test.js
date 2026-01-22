import Contact from "../Contact"
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Testing contact component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
});
