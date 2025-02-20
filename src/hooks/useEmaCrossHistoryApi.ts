import { useEffect, useState } from "react";
import api from "../api/axios";
import { DataEmaCrossHistoryArrayI, DataEmaCrossHistoryI } from "../interface/HomeI/EmaCrossHistoryI/EmaCrossHistoryI";




const useEmaCrossHistoryApi = (page: number) => {
  const [data, setData] = useState<DataEmaCrossHistoryI | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetchEmaCrossHistory = async (page: number) => {
    setIsLoading(true);
    setError(null);

    try {
      const { data: responseData } = await api.get("/emaCrossHistory", {
        params: {
          page: page || 0,
          limit: 10,
        },
      });
      console.log("responseData",responseData);
      
      if (responseData?.status == "ok") {
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
    fetchEmaCrossHistory(page);
  }, []);

  return { data, isLoading, error, refetch: fetchEmaCrossHistory };
};

export { useEmaCrossHistoryApi };
