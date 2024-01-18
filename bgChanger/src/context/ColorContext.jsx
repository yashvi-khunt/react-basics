import React, { useState } from "react";

const ColorContext = React.createContext();
const ColorContextProvider = ({ children }) => {
  const storedColor = localStorage.getItem("color");

  const [bgColor, setBgColor] = useState(storedColor || "olive");
  return (
    <ColorContext.Provider value={{ bgColor, setBgColor }}>
      {children}
    </ColorContext.Provider>
  );
};
export { ColorContext, ColorContextProvider };
