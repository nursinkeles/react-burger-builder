import React, { createContext, useState } from "react";

export const HamburgerContext = createContext();

const HamburgerContextProvider = (props) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const getCalculatedTotalPrice = () => {
    return selectedIngredients
      .reduce((acc, item) => {
        acc += item.count * item.price;
        return acc;
      }, 0)
      .toFixed(2);
  };
  return (
    <HamburgerContext.Provider
      value={{
        selectedIngredients,
        setSelectedIngredients,
        getCalculatedTotalPrice,
      }}
    >
      {props.children}
    </HamburgerContext.Provider>
  );
};

export default HamburgerContextProvider;
