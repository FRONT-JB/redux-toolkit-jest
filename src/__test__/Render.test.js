import React from "react";
import { render, screen } from "@testing-library/react";
import Render from "../Render";

describe("Rendering", () => {
  it("Should render all the elements correctly", () => {
    // https://github.com/A11yance/aria-query#elements-to-roles
    render(<Render />);
    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
    expect(screen.getAllByRole("button")[0]).toBeTruthy();
    expect(screen.getAllByRole("button")[1]).toBeTruthy();
    expect(screen.getByText("Udemy")).toBeTruthy();
    expect(screen.queryByText("Udeeeeeeemy")).toBeNull();
    expect(screen.getByTestId("copyright")).toBeTruthy();
  });
});
