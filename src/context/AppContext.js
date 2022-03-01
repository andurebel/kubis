import { createContext, useState } from "react";
import json from "../data.json";

export const AppContext = createContext();

const { data } = json;

export const AppContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState(false);
  return (
    <AppContext.Provider
      value={{ searchTerm, setSearchTerm, data, selected, setSelected }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
