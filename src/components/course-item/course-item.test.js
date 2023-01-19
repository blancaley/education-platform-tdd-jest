import { render, screen } from "@testing-library/react";
import { CourseItem } from "./";
import { MemoryRouter } from "react-router-dom";

describe("Course Item", () => {
  it("should be a link", () => {
    render(
      <MemoryRouter>
        <CourseItem
          course={{
            id: 1,
            name: "Testing React Applications with Jest",
            path: "testing-react-applications-jest",
            length: "3",
            description:
              "In this course, Testing React Applications with Jest, you'll learn how to test React applications from the ground up. We'll learn how to install Jest and integrate it with a new or existing node application. We'll learn about running tests with Jest, but we'll also learn advanced techniques.",
            startDate: "2023-01-12T12:49:41.480Z",
          }}
        />
      </MemoryRouter>
    );
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
  });
});
