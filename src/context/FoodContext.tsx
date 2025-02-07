import { createContext, useState } from "react";
import {
  FoodContextI,
  FoodProviderPropsI,
} from "../interface/FoodContext/foodContext";
import { useAmountApi } from "../hooks/useAmountApi";

const ThemeContext = createContext<FoodContextI>(null!);

const ContextWrap = ({ children }: FoodProviderPropsI) => {
  const { data: dataMount, isLoading:isLoadingMount, error, refetch: fetchAmountData } = useAmountApi();

  return (
    <ThemeContext.Provider value={{ isLoadingMount, dataMount,fetchAmountData }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ContextWrap };
export default ThemeContext;
