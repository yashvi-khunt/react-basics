import React, { useContext } from "react";
import { ColorContext } from "../context/ColorContext";

function ColorPicker() {
  const { changeBgColor } = useContext(ColorContext);
  const changeColor = (colorEl) => {
    const color = colorEl.target.value;
    changeBgColor(color);
    // localStorage.setItem("color", color);
  };
  return (
    <>
      <input
        className="outline-none px-4 py-1 rounded-full shadow-lg"
        type="color"
        onInput={changeColor.bind(this)}
      />
    </>
  );
}

export default ColorPicker;
