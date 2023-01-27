import { render, screen } from "@testing-library/react";
import { AddCourse } from ".";

describe("Add Course", () => {
  it("should render an input", () => {
    render(<AddCourse />);
    const nameInput = screen.getByLabelText("Course Name");
    expect(nameInput).toBeInTheDocument();
  });
});
