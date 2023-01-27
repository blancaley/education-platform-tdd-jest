import { render, screen } from "@testing-library/react";
import { AddProfessor } from ".";

describe("Add Professor", () => {
  it("should render a button", () => {
    render(<AddProfessor />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
