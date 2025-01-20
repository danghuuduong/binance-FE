import { createContext, useState } from "react";
import {
  FoodContextI,
  FoodProviderPropsI,
} from "../interface/FoodContext/foodContext";

const ThemeContext = createContext<FoodContextI>(null!);

const ContextWrap = ({ children }: FoodProviderPropsI) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <ThemeContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ContextWrap };
export default ThemeContext;
