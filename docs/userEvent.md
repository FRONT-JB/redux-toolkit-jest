```js
import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import RenderInput from "../RenderInput";

afterEach(() => cleanup());

describe("Rendering Input", () => {
  it("Should render all the elements correctly", () => {
    render(<RenderInput />);
    expect(screen.getByRole("button")).toBeTruthy();
    expect(screen.getByPlaceholderText("Enter")).toBeTruthy();
  });
});

describe("Input form onChange event", () => {
  it("Should update input value correctly", () => {
    render(<RenderInput />);
    const inputValue = screen.getByPlaceholderText("Enter");
    fireEvent.change(inputValue, { target: { value: "test" } });
    expect(inputValue.value).toBe("test");
  });
});

describe("Console button conditiaonally triggerd", () => {
  it("Should not trigger output function", () => {
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);
    fireEvent.click(screen.getByRole("button"));
    // RenderInput 내부에 조건문을 통해 input값이 있을때만 행동하기 때문에 아래의 조건이 통과한다
    expect(outputConsole).not.toHaveBeenCalled();
  });
  it("Should trigger output function", () => {
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);
    const inputValue = screen.getByPlaceholderText("Enter");
    fireEvent.change(inputValue, { target: { value: "test" } });
    fireEvent.click(screen.getByRole("button"));
    expect(outputConsole).toHaveBeenCalled();
  });
});
```
