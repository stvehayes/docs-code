// HostnameContext.js
import React, { createContext, useState } from 'react';

const HostnameContext = createContext();

export const HostnameProvider = ({ children }) => {
  const [hostname, setHostname] = useState('HOSTNAME');

  const updateHostname = (newHostname) => {
    setHostname(newHostname);
  };

  return (
    <HostnameContext.Provider value={{ hostname, updateHostname }}>
      {children}
    </HostnameContext.Provider>
  );
};

export const useHostname = () => React.useContext(HostnameContext);
