import { ReactNode } from "react";

interface DataMount {
  _id: string;
  history: string[];
  largest: string;
  __v: number | string;
}

interface FoodContextI {
  dataMount?: DataMount  | null;
  fetchAmountData?: () => void;
  isLoadingMount?: boolean;

  isTrade: boolean;
  setIsTrade: React.Dispatch<React.SetStateAction<boolean>>;
  foldingCurrent: number;
  setFoldingCurrent: React.Dispatch<React.SetStateAction<number>>;
  isWaitingForCompletion: boolean;
  setisWaiting: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FoodProviderPropsI {
  children: ReactNode;
}

interface IFetchFeesApi002 {
  HEADER: unknown;
  DATA: unknown;
  sapError?: boolean;
}

export type { FoodContextI, FoodProviderPropsI, IFetchFeesApi002, DataMount };
