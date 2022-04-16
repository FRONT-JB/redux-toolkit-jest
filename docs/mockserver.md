**[[Testing] 03. Screen — getBy\*](https://olaf-go.medium.com/testing-03-screen-getby-bb96787d2d4b)**

<br />

```js
import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import MockServer from "../MockServer";

const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ username: "Bred dummy" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

describe("Mocking API", () => {
  it("[Fetch success] Should display fetched data correctly and button disabled", async () => {
    render(<MockServer />);
    fireEvent.click(screen.getByRole("button"));
    expect(await screen.findByText("Bred dummy")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveAttribute("disabled");
  });
  it("[Fetch failure]Should display error message, no render heading and button abled", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users/1",
        (req, res, ctx) => {
          return res(ctx.status(404));
        }
      )
    );
    render(<MockServer />);
    fireEvent.click(screen.getByRole("button"));
    expect(await screen.findByTestId("error")).toHaveTextContent(
      "Fetching Failed !"
    );
    expect(screen.queryByRole("heading")).toBeNull();
    expect(screen.getByRole("button")).not.toHaveAttribute("disabled");
  });
});
```
