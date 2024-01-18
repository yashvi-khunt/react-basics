import React, { useState } from "react";

const ColorContext = React.createContext();
const ColorContextProvider = ({ children }) => {
  const storedColor = localStorage.getItem("color");
  const [bgColor, setBgColor] = useState(storedColor || "olive");
  const changeBgColor = (newColor) => {
    setBgColor(newColor);
    localStorage.setItem("color", newColor);
  };
  return (
    <ColorContext.Provider value={{ bgColor, setBgColor, changeBgColor }}>
      {children}
    </ColorContext.Provider>
  );
};
export { ColorContext, ColorContextProvider };
