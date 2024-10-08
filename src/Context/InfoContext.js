import React, { createContext, useState } from 'react';

const ElementContext = createContext();

const ElementProvider = ({ children }) => {
  const [value, setValue] = useState(0);
  const [type, setType] = useState(0);

  const changeValue = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const changeType = (newValue) => {
    console.log('Second value:', newValue);
    setType(newValue);
  };

  return (
    <ElementContext.Provider value={{ value, changeValue, type, changeType }}>
      {children}
    </ElementContext.Provider>
  );
};

export { ElementContext, ElementProvider };