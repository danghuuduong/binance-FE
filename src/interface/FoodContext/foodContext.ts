import { ReactNode } from "react";

interface FoodContextI {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
}

interface FoodProviderPropsI {
  children: ReactNode;
}

interface IFetchFeesApi002 {
  HEADER: unknown;
  DATA: unknown;
  sapError?: boolean;
}

export type { FoodContextI, FoodProviderPropsI, IFetchFeesApi002 };
