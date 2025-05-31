// context/PreviewContext.jsx
import React, { createContext, useContext, useState } from "react";

const PreviewContext = createContext();

export const PreviewProvider = ({ children }) => {
  const [mode, setMode] = useState("normal"); // "mobile", "normal", "full"

  return (
    <PreviewContext.Provider value={{ mode, setMode }}>
      {children}
    </PreviewContext.Provider>
  );
};

export const usePreview = () => useContext(PreviewContext);