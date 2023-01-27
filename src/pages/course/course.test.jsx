import { render, screen } from "@testing-library/react";
import { Courses } from ".";

describe("Course", () => {
  const setup = () => render(<Courses />);
  it("should have a heading", () => {
    setup();
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
