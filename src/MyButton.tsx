import { useState } from "react";

export default function MyButton() {

    const [text, setText] = useState("Click me!");

    function handleClick() {
        setText("Clicked!");
        
    }

  return (
    <button onClick={handleClick}>{text}</button>

  );
}