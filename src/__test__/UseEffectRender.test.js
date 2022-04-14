import React from "react";
import { render, screen } from "@testing-library/react";
import UseEffectRender from "../UseEffectRender";

describe("useEffect rednering", () => {
  it("Should render only after async functoin resolved", async () => {
    render(<UseEffectRender />);
    expect(screen.queryByText(/I am/)).toBeNull();
    expect(await screen.findByText(/I am/)).toBeInTheDocument();
  });
});
