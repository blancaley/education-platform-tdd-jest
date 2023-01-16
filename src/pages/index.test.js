import { render } from "@testing-library/react";
import { Home } from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Home />, div);
});
