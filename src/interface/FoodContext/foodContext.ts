import { ReactNode } from "react";

interface DataMount {
  _id: string;
  history: string[];
  largest: string;
  __v: number | string;
}

interface FoodContextI {
  dataMount?: DataMount  | null;
  isLoadingMount?: boolean;
  fetchAmountData?: () => void;
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
