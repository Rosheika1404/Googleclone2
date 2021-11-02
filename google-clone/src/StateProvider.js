import React, { createContext, useContext, useReducer } from "react";

//Preparing the data layer
export const StateContext = createContext();


//the chlidren being referred is the <App /> on index.js
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Hook that allows us to pull information from the data layer 
export const useStateValue = () => useContext(StateContext);
