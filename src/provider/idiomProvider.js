import React, { createContext, useContext, useState } from 'react';

const IdiomContext = createContext();

export const IdiomProvider = ({ children }) => {
  const [idiom, setIdiom] = useState('pt'); 

  return (
    <IdiomContext.Provider value={{ idiom, setIdiom }}>
      {children}
    </IdiomContext.Provider>
  );
};

export const useIdiom = () => {
  const context = useContext(IdiomContext);
  if (!context) {
    throw new Error('useIdiom must be used within an IdiomProvider');
  }
  return context;
};
