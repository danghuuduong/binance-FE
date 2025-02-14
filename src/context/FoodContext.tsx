import { createContext, useState } from "react";
import {
  FoodContextI,
  FoodProviderPropsI,
} from "../interface/FoodContext/foodContext";
import { useAmountApi } from "../hooks/useAmountApi";

const ThemeContext = createContext<FoodContextI>(null!);

const ContextWrap = ({ children }: FoodProviderPropsI) => {
  const { data: dataMount, isLoading: isLoadingMount, error, refetch: fetchAmountData } = useAmountApi();
  const [foldingCurrent, setFoldingCurrent] = useState<number>(1);
  const [isTrade, setIsTrade] = useState<boolean>(false); // Bắt đầu trading
    const [isWaitingForCompletion, setisWaiting] = useState<boolean>(false); // Chờ để kết thúc lệnh
  

  return (
    <ThemeContext.Provider value={{ isLoadingMount, dataMount, isTrade, setIsTrade, fetchAmountData, foldingCurrent, setFoldingCurrent, isWaitingForCompletion,setisWaiting}}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ContextWrap };
export default ThemeContext;
