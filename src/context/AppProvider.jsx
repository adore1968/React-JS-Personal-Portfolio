import { React, createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleClick = () => {
    setToggle(false);
  };

  return (
    <AppContext.Provider value={{ toggle, handleToggle, handleClick }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};
