import { ReactNode } from "react";

interface FoodContextI {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
}

interface FoodProviderPropsI {
  children: ReactNode;
}
export type { FoodContextI,FoodProviderPropsI };
