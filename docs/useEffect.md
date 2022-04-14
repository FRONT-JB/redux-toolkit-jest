```js
import React from "react";
import { render, screen } from "@testing-library/react";
import UseEffectRender from "../UseEffectRender";

describe("useEffect rednering", () => {
  it("Should render only after async functoin resolved", async () => {
    render(<UseEffectRender />);
    // after useEffect, I am Text is Null
    expect(screen.queryByText(/I am/)).toBeNull();
    // before useEffect I am Text Render
    expect(await screen.findByText(/I am/)).toBeInTheDocument();
  });
});
```
