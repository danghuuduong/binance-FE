import * as React from "react";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import { CandlestickDataI } from "../../../../interface/HomeI/candlestickDataI";
import Select from "../../../../common/components/select/Select";
import LoadDingPage from "../../../../common/components/loadingPage/LoadingPage";
import { formatNumber } from "../../../../common/utils/utilCovert";

const BtcTopHome: React.FC = () => {
  const [data, setData] = useState<CandlestickDataI | null>(null);
  const storedType = localStorage.getItem("candlestickType") || "1h";
  const [type, setType] = useState<string>(storedType);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [socket, setSocket] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const newSocket = io(import.meta.env.VITE_API_BASE_URL2, {
      withCredentials: true,
    });

    newSocket.on("connect_error", (err) => {
      console.error("not Socket connection error:", err);
      setIsLoading(false);
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    newSocket && setSocket(newSocket);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    newSocket.on("candleStick-RealTime", (data: any) => {
      setIsLoading(false);
      setData(data);
    });
    return () => {
      localStorage.removeItem("candlestickType");
      newSocket.disconnect();
    };
  }, []);

  const handleChange = (value: string) => {
    setIsLoading(true);
    setType(value);
    setData(null);
    localStorage.setItem("candlestickType", value);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    socket && socket.emit("changeTimeInterval", value);
  };
  const timeIntervals = [
    "1m",
    "3m",
    "5m",
    "15m",
    "30m",
    "1h",
    "2h",
    "4h",
    "6h",
    "8h",
    "12h",
    "1d",
    "3d",
    "1w",
    "1M",
  ];

  return (
    <>
      {isLoading && <LoadDingPage />}
      <div >
        {/* <div className="text-grayTextCT text-center mt-3">
          {data?.closeTime
            ? `${data?.openTime} ---> ${data?.closeTime}`
            : "MM/DD/YYYY, 00:00:00 PM ---> MM/DD/YYYY, 00:00:00 PM"}
        </div> */}

        <div className="flex justify-between items-center">
          

          <div className=" font-medium flex items-center">
            <span className="text-yellowCT text-xl">BTC : </span>
            <span className="text-primary  text-2xl ml-2">
              {data?.closePrice ? formatNumber(data.closePrice) : "-"}
            </span>
            <Select
              options={timeIntervals}
              value={type}
              onChange={handleChange}
            />
          </div>

         

          <div>
            <div className="text-grayTextCT">24h High</div>
            <div className="text-green-500">
              {data?.highPrice ? formatNumber(data.openPrice) : "-"}
            </div>
          </div>

          <div>
            <div className="text-grayTextCT">24h Low</div>
            <div className="text-red-500">
              {data?.lowPrice ? formatNumber(data.highPrice) : "-"}
            </div>
          </div>

          <div>
            <div className="text-grayTextCT">24h Volume(USDT)</div>
            <div className="text-red-500">
              {data?.lowPrice ? formatNumber(data.lowPrice) : "-"}
            </div>
          </div>

          <div>
            <div className="text-grayTextCT">Volume : </div>
            <div>{data?.volume || "-"}</div>
          </div>

          <div>
            <div className="text-grayTextCT">Type api</div>
            <div>{data?.type || "-"}</div>
          </div>

          <div>
            <div className="text-grayTextCT">Status</div>
            <div>{`${data?.statusTrading}`}</div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default BtcTopHome;
