import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [tree, setTree] = useState(null);

  return (
    <UserContext.Provider value={{ username, setUsername, tree, setTree }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
