import { render } from "@testing-library/react";
import { CourseList } from ".";
import { screen } from "@testing-library/react";
import nock from "nock";
import { apiUrl } from "../../api-url";
import { MemoryRouter } from "react-router-dom";

describe("renders CourseList component", () => {
  it("should return a list of courses", async () => {
    //Setup
    const scope = nock(apiUrl)
      .defaultReplyHeaders({
        "access-control-allow-origin": "*",
        "access-control-allow-credentials": "true",
      })
      .get("/courses")
      .reply(200, [
        {
          id: 1,
          name: "Testing React Applications with Jest",
          path: "testing-react-applications-jest",
          length: "3",
          description:
            "In this course, Testing React Applications with Jest, you'll learn how to test React applications from the ground up. We'll learn how to install Jest and integrate it with a new or existing node application. We'll learn about running tests with Jest, but we'll also learn advanced techniques.",
          startDate: "2023-01-12T12:49:41.480Z",
        },
      ]);

    //Act
    render(
      <MemoryRouter>
        <CourseList />
      </MemoryRouter>
    );

    //Expect
    const courses = await screen.findAllByRole("listitem");
    expect(courses.length).toBeGreaterThan(0);
    expect(scope.pendingMocks.length).toBe(0); //Make sure that the mocks is called
  });
});
