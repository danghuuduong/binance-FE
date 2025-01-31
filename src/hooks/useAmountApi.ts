import { useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import api from "../api/axios";

const useAmountApi = () => {
  // const { data: SAPStatus, isSuccess, refetch } = useCheckInterface();

  //   useEffect(() => {
  //     refetch();
  //   }, [monthDate]);
  return useQuery(
    ["fees0002"],
    async () => {
      const { data } = await api.get("/candles/btc-usdt?limit=3&type=1m");
      console.log("🚀 ~ data:", data);
      return { data: data?.DATA, sapError: data?.sapError };
    },
    { enabled: true, refetchOnWindowFocus: false }
  );
};
export { useAmountApi };
