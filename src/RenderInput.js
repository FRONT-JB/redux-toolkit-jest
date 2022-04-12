import React, { useState } from "react";

const RenderInput = ({ outputConsole }) => {
  const [input, setInput] = useState("");

  const outputValue = () => {
    if (input) {
      outputConsole(input);
    }
  };

  const updateValue = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter"
        value={input}
        onChange={updateValue}
      />
      <button type="button" onClick={outputValue}>
        Console
      </button>
    </div>
  );
};

export default RenderInput;
