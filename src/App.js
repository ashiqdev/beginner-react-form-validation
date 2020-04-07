import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [isValid, setIsValid] = useState(false);
  const onChangeHandler = e => {
    const inputValue = e.target.value;
    setText(inputValue);
    if (inputValue.includes("@")) setIsValid(true);
    else setIsValid(false);
  };

  const onClickHandler = () => {
    setText("");
  };
  return (
    <div className="App">
      <form>
        <input type="text" value={text} onChange={onChangeHandler} />
      </form>
      <button type="submit" onClick={onClickHandler} disabled={!isValid}>
        Email
      </button>
    </div>
  );
}
