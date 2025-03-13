import { createContext, useState } from "react";
import {
  FoodContextI,
  FoodProviderPropsI,
} from "../interface/FoodContext/foodContext";
import { useAmountHistoryChangeApi } from "../hooks/useAmountHistoryChangeApi";
import { dataUSDI } from "../interface/HomeI/StartTradingHomeI/StartTradingHomeType";
import { useCheckInterFace } from "../hooks/useCheckInterFace";

const ThemeContext = createContext<FoodContextI>(null!);

const ContextWrap = ({ children }: FoodProviderPropsI) => {
  //API
  const { data: largestMoneyApi, isLoading: isLoadingMount, error, refetch: fetchAmountData } = useAmountHistoryChangeApi();
  const { data: dataInterface, } = useCheckInterFace();
  // State
  const [foldingCurrent, setFoldingCurrent] = useState<number>(1);
  const [isTrade, setIsTrade] = useState<boolean>(false);
  const [isWaitingForCompletion, setisWaiting] = useState<boolean>(false);
  const [usdcurrent, setUsdcurrent] = useState<dataUSDI | null>(null);

  return (
    <ThemeContext.Provider
      value={{
        isLoadingMount, largestMoneyApi, fetchAmountData,
        foldingCurrent, setFoldingCurrent, isTrade, setIsTrade, isWaitingForCompletion, setisWaiting,
        usdcurrent, setUsdcurrent,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ContextWrap };
export default ThemeContext;
