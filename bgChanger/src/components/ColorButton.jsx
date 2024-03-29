import React, { useContext, useState } from "react";
import { ColorContext } from "../context/ColorContext";

function ColorButton({ color, textColor = "white" }) {
  const { changeBgColor } = useContext(ColorContext);
  const changeColor = () => {
    changeBgColor(color);
    // localStorage.setItem("color", color);
  };
  return (
    <>
      <button
        className={`outline-none px-4 py-1 rounded-full shadow-lg text-${textColor}`}
        style={{ backgroundColor: color }}
        onClick={changeColor}
      >
        {color}
      </button>
    </>
  );
}

export default ColorButton;
