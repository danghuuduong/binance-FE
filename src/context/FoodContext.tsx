import { createContext, useState } from "react";
import {
  FoodContextI,
  FoodProviderPropsI,
} from "../interface/FoodContext/foodContext";
import { useAmountApi } from "../hooks/useAmountApi";

const ThemeContext = createContext<FoodContextI>(null!);

const ContextWrap = ({ children }: FoodProviderPropsI) => {
  const { data: dataMount, isLoading: isLoadingMount, error, refetch: fetchAmountData } = useAmountApi();
  const [isTrade, setIsTrade] = useState<boolean>(false); // Bắt đầu trading
  const [foldingCurrent, setFoldingCurrent] = useState<number>(5);

  return (
    <ThemeContext.Provider value={{ isLoadingMount, dataMount, isTrade, setIsTrade, fetchAmountData, foldingCurrent, setFoldingCurrent, }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ContextWrap };
export default ThemeContext;
