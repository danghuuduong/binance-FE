import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { formatNumber } from "../../../common/utils/abc";
import { CandlestickDataI, SocketMessageI } from "../../../interface/HomeI/candlestickDataI";

const Candlestick: React.FC = () => {
  const [data, setData] = useState<CandlestickDataI | null>(null);
  const storedType = localStorage.getItem("candlestickType") || "1m";
  const [type, setType] = useState<string>(storedType);
  const [socket, setSocket] = useState<any | null>(null);

  useEffect(() => {
    const newSocket = io(import.meta.env.REACT_APP_SOCKET_URL as string, { withCredentials: true })
    newSocket && setSocket(newSocket);
    newSocket.on("candleStick-RealTime", (data: any) => setData(data))
    return () => {
      localStorage.removeItem("candlestickType");
      newSocket.disconnect();
    };
  }, []);

  const handleChange = (value: string) => {
    setType(value);
    setData(null)
    localStorage.setItem("candlestickType", value)
    socket && socket.emit("changeTimeInterval", value);
  };
  const timeIntervals = [
    "1m", "3m", "5m", "15m", "30m", "1h", "2h", "4h", "6h", "8h", "12h", "1d", "3d", "1w", "1M"
  ];

  return (
    <div className="">
      <div className="flex">
        <span className="text-2xl font-medium">BTC/USDT </span>
        <form className="max-w-sm">
          <select
            id="time-interval-select"
            className="rounded-lg p-1 dark:bg-gray-700"
            value={type} 
            onChange={(e) => handleChange(e.target.value)} 
          >
            {timeIntervals.map((interval) => (
              <option key={interval} value={interval}>
                {interval}
              </option>
            ))}
          </select>
        </form>
      </div>
      {data?.closeTime ? data?.closeTime : "MM/DD/YYYY, 00:00:00 PM"}
      <div>
        <h1>
          <span className="text-gray">BTC : </span>
          <span className="text-primary">
            {data?.closePrice ? formatNumber(data.closePrice) : "-"}
          </span>
        </h1>
        <div className="mg-t-15">
          <span className="text-gray">HighPrice : </span>
          <span className="text-success">
            {data?.highPrice ? formatNumber(data.highPrice) : "-"}
          </span>
        </div>
        <div className="mg-t-15">
          <span className="text-gray">LowPrice : </span>
          <span className="text-error">
            {data?.lowPrice ? formatNumber(data.lowPrice) : "-"}
          </span>
        </div>

        <div className="mg-t-15">
          <span className="text-gray">Volume : </span>
          <span>
            {(data?.volume || "-")}
          </span>
        </div>
        <div className="mg-t-15">
          <span className="text-gray">Type api : </span>
          <span>
            {data?.type || "-"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Candlestick;
