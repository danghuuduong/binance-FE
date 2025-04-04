import * as React from "react";
import { useEffect, useState } from "react";
import api from "../../../../api/axios";
import LoadDingPage from "../../../../common/components/loadingPage/LoadingPage";

interface User {
  name: string;
  email: string;
  usd: string;
  deathCount: string;
  totalOrders: string;
  profit:string;
}

const InfoUserTrading: React.FC = () => {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const fetchCandles = async () => {
      setIsLoading(true)
      try {
        const response = await api.get("/users");
        if (response?.status == 200) {
          setData(response?.data)
          setIsLoading(false)
        }
      } catch (error) {
        setIsLoading(false)
      }
    };

    fetchCandles(); // Gọi API khi component mount
  }, []);

  const userDetail = data?.length > 0 ? data[0] : null;

  return (
    <>
      {isLoading && <LoadDingPage />}
      <div className="text-2xl font-medium "> Thông tin ủa bạn</div>
      <div className="">
        <div className="text-grayTextCT mt-3">
          Name : <span className="text-green-500">{userDetail?.name}</span> 
        </div>
        <div className="text-grayTextCT mt-3">
          USD : <span className="text-green-500">{userDetail?.usd } $</span> 
        </div>

        <div className="text-grayTextCT mt-3">
          Profit : <span className="text-green-500">{userDetail?.profit } %</span>
        </div>
        <span className="text-grayTextCT">
          -------------------------------------------------
        </span>

        <div className="text-grayTextCT mt-3">
          Số lần chết Gà: <span className="text-red-500 mg-l-5">{userDetail?.deathCount } </span>
        </div>

        <div className="text-grayTextCT mt-3">
          Tổng vào lệnh: <span className="text-white mg-l-5">{userDetail?.totalOrders } </span>
        </div>
      </div>
    </>
  );
};

export default InfoUserTrading;
