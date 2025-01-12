import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { CandlestickDataI } from "../../../../interface/HomeI/candlestickDataI";
import { formatNumber } from "../../../../common/utils/abc";
import Select from "../../../../common/components/select/Select";

const BtcHome: React.FC = () => {
  const [data, setData] = useState<CandlestickDataI | null>(null);
  console.log("🚀 ~ data:", data)
  const storedType = localStorage.getItem("candlestickType") || "1m";
  const [type, setType] = useState<string>(storedType);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const newSocket = io(import.meta.env.VITE_API_BASE_URL2, {
      withCredentials: true,
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    newSocket && setSocket(newSocket);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    newSocket.on("candleStick-RealTime", (data: any) => setData(data));
    return () => {
      localStorage.removeItem("candlestickType");
      newSocket.disconnect();
    };
  }, []);

  const handleChange = (value: string) => {
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
    <div className="">
      <div className="text-2xl font-medium ">BTC/USDT </div>
      <div className="text-grayTextCT text-center mt-3">
        {data?.closeTime
          ? `${data?.openTime} ---> ${data?.closeTime}`
          : "MM/DD/YYYY, 00:00:00 PM ---> MM/DD/YYYY, 00:00:00 PM"}
      </div>

      <div>
        <div className="flex items-center  mt-4">
          <span className="text-grayTextCT">Time Span : </span>
          <Select
            options={timeIntervals}
            value={type}
            onChange={handleChange}
          />
        </div>

        <div className="mt-3 text-6xl font-medium ">
          <span className="text-yellowCT text-5xl">BTC : </span>
          <span className="text-primary">
            {data?.closePrice ? formatNumber(data.closePrice) : "-"}
          </span>
        </div>
        <div className="mt-3">
          <span className="text-grayTextCT">OpenPrice (O) : </span>
          <span className="text-green-500">
            {data?.highPrice ? formatNumber(data.openPrice) : "-"}
          </span>
        </div>

        <div className="mt-3">
          <span className="text-grayTextCT">HighPrice (H) : </span>
          <span className="text-red-500">
            {data?.lowPrice ? formatNumber(data.highPrice) : "-"}
          </span>
        </div>

        <div className="mt-3">
          <span className="text-grayTextCT">LowPrice (L) : </span>
          <span className="text-red-500">
            {data?.lowPrice ? formatNumber(data.lowPrice) : "-"}
          </span>
        </div>

        <div className="mt-3">
          <span className="text-grayTextCT">ClosePrice (C) : </span>
          <span className="text-red-500">
            {data?.lowPrice ? formatNumber(data.closePrice) : "-"}
          </span>
        </div>

        <div className="mt-3">
          <span className="text-grayTextCT">Volume : </span>
          <span>{data?.volume || "-"}</span>
        </div>
        <div className="mt-3">
          <span className="text-grayTextCT">Type api : </span>
          <span>{data?.type || "-"}</span>

          <span className="text-grayTextCT ml-10">statusTrading : </span>
          <span>{`${data?.statusTrading}`}</span>

        </div>
      </div>
    </div>
  );
};

export default BtcHome;
