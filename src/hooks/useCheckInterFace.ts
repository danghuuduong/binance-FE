import { useEffect, useState } from "react";
import api from "../api/axios";
import { largestMoneyApi } from "../interface/FoodContext/foodContext";



const useCheckInterFace = () => {
  const [data, setData] = useState<largestMoneyApi | null>(null); // Lưu trữ dữ liệu từ API
  const [isLoading, setIsLoading] = useState(false); // Trạng thái loading
  const [error, setError] = useState<unknown>(null); // Lưu trữ lỗi nếu có

  // Hàm gọi API
  const fetchAmountData = async () => {
    setIsLoading(true); // Bắt đầu loading
    setError(null); // Reset lỗi trước khi gọi API

    try {
      const { data: responseData } = await api.get("/amount");
      if (responseData?.length > 0) {
        setData(responseData[0]);
      }
    } catch (error) {
      console.error("Error fetching amount data:", error);
      setError(error); // Lưu lỗi vào state
    } finally {
      setIsLoading(false); // Kết thúc loading
    }
  };

  // Gọi API khi component được mount
  useEffect(() => {
    fetchAmountData();
  }, []);

  // Trả về dữ liệu, trạng thái loading và lỗi
  return { data, isLoading, error, refetch: fetchAmountData };
};

export { useCheckInterFace };
