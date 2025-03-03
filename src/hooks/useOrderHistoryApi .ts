import { useEffect, useState } from "react";
import api from "../api/axios";

const useOrderHistoryApi = (page?: number) => {
  const [data, setData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetchUseOrderHistoryApi = async (page: number) => {
    setIsLoading(true);
    setError(null);

    try {
      const { data: responseData } = await api.get("/order-history");
      console.log("responseData", responseData);

      if (responseData?.reversedtrades) {
        setData(responseData);
      }
    } catch (error) {
      console.error("Error fetching amount data:", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUseOrderHistoryApi(page = 1);
  }, []);

  return { data, isLoading, error, refetch: fetchUseOrderHistoryApi };
};

export { useOrderHistoryApi };
