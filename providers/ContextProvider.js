"use client";
import React, { useState } from "react";
import { createContext } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  // Firebase removed - using empty state
  const [profileData] = useState({ name: "My Name" });
  const [categories] = useState({ en: [], ar: [] });
  const [products] = useState([]);
  const [contacts] = useState([]);
  const [admins] = useState([]);
  const [articles] = useState([]);

  return (
    <Context.Provider
      value={{
        profileData,
        categories,
        products,
        contacts,
        admins,
        articles,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
