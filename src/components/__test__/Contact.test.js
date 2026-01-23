import Contact from "../Contact"
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Testing contact component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
});

test("Testing the Button", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
});

test("Testing the placeholder i.e Your Name", () => {
    render(<Contact />);

    const nameInput = screen.getByPlaceholderText("Your Name");

    expect(nameInput).toBeInTheDocument();
});


test("Show multiple input boxes", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(3);
});