import { createContext, useState } from "react";
import {
  FoodContextI,
  FoodProviderPropsI,
} from "../interface/FoodContext/foodContext";
import { useAmountHistoryChangeApi } from "../hooks/useAmountHistoryChangeApi";

const ThemeContext = createContext<FoodContextI>(null!);

const ContextWrap = ({ children }: FoodProviderPropsI) => {
  //API
  const { data: largestMoneyApi, isLoading: isLoadingMount, error, refetch: fetchAmountData } = useAmountHistoryChangeApi();
  // State
  const [foldingCurrent, setFoldingCurrent] = useState<number>(1);
  const [isTrade, setIsTrade] = useState<boolean>(false);
  const [isWaitingForCompletion, setisWaiting] = useState<boolean>(false);

  return (
    <ThemeContext.Provider
      value={{
        isLoadingMount, largestMoneyApi, fetchAmountData,
        foldingCurrent, setFoldingCurrent, isTrade, setIsTrade, isWaitingForCompletion, setisWaiting,

      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ContextWrap };
export default ThemeContext;
