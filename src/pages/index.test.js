import { render } from "@testing-library/react";
import { Home } from ".";
import { BrowserRouter } from "react-router-dom";

describe("Home page exists", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
      div
    );
  });
});
