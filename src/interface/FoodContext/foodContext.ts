import { ReactNode } from "react";
import { dataUSDI } from "../HomeI/StartTradingHomeI/StartTradingHomeType";

interface largestMoneyApi {
  _id: string;
  history: string[];
  largest: string;
  __v: number | string;
}

interface FoodContextI {
  largestMoneyApi?: largestMoneyApi  | null;
  fetchAmountData?: () => void;
  isLoadingMount?: boolean;

  isTrade: boolean;
  setIsTrade: React.Dispatch<React.SetStateAction<boolean>>;
  foldingCurrent: number;
  setFoldingCurrent: React.Dispatch<React.SetStateAction<number>>;
  isWaitingForCompletion: boolean;
  setisWaiting: React.Dispatch<React.SetStateAction<boolean>>;
  usdcurrent: dataUSDI | null
  setUsdcurrent: React.Dispatch<React.SetStateAction<dataUSDI | null>>;
}

interface FoodProviderPropsI {
  children: ReactNode;
}

interface IFetchFeesApi002 {
  HEADER: unknown;
  DATA: unknown;
  sapError?: boolean;
}

export type { FoodContextI, FoodProviderPropsI, IFetchFeesApi002, largestMoneyApi };
