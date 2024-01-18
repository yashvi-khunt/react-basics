import React from "react";
import ColorButton from "./ColorButton";
import ColorPicker from "./ColorPicker";
import { useContext, useState } from "react";
import { ColorContext, ColorContextProvider } from "../context/ColorContext";
function Background() {
  const { bgColor } = useContext(ColorContext);
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: bgColor }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <ColorButton color="Red" />
            <ColorButton color="Green" />
            <ColorButton color="Blue" />
            <ColorButton color="Olive" />
            <ColorButton color="Gray" />
            <ColorButton color="Yellow" textColor="black" />
            <ColorButton color="Pink" textColor="black" />
            <ColorButton color="Purple" />
            <ColorButton color="Lavender" textColor="black" />
            <ColorButton color="White" textColor="black" />
            <ColorButton color="Black" />
            <ColorPicker />
          </div>
        </div>
      </div>
    </>
  );
}

export default Background;
