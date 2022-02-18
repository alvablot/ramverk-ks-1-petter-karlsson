import React, { useState } from "react";
import "../App.css";

function InputBox(props) {
  const [value, setValue] = useState(props.value);

  function handleChange(event) {
    const value = event.target.value;
    setValue(value);
  }
  function clear() {
    if (value === "") {
      return false;
    } else {
      props.add(value);
      setValue("");
    }
  }

  return (
    <div className="inputBox">
      <input
        className="textInput"
        type="text"
        onChange={handleChange}
        value={value}
      />
      <br />
      <button className="button" onClick={clear}>
        Lägg till uppgift
      </button>
    </div>
  );
}

export default InputBox;
