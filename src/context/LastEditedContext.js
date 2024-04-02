import React, { createContext, useState, useContext } from 'react';

const LastEditedContext = createContext();

export const useLastEdited = () => useContext(LastEditedContext);

export const LastEditedProvider = ({ children }) => {
  const [lastEditedInGlobalNav, setLastEditedInGlobalNav] = useState(false);

  const setLastEdited = (value) => {
    setLastEditedInGlobalNav(value);
  };

  return (
    <LastEditedContext.Provider
      value={{ lastEditedInGlobalNav, setLastEdited }}
    >
      {children}
    </LastEditedContext.Provider>
  );
};
