import { Select } from "antd";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { formatNumber } from "../../../common/utils/abc";

// Định nghĩa kiểu dữ liệu nến (data)
interface CandlestickData {
  openTime: string;
  openPrice: string;
  closePrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  closeTime: string;
}

const Candlestick: React.FC = () => {
  const [data, setData] = useState<CandlestickData | null>(null);
  const [type, setType] = useState<string>("1m");
  const [loading, setLoading] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    // Kết nối WebSocket khi component được mount
    const newSocket = io("http://localhost:3001", {
      withCredentials: true,
    });
    setSocket(newSocket);

    // Lắng nghe dữ liệu nến từ backend
    newSocket.on("candleStick-RealTime", (data: CandlestickData) => {
      setData(data);
      setLoading(false);
    });

    // Dọn dẹp kết nối WebSocket khi component unmount
    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleChange = (value: string) => {
    setType(value);
    if (socket) {
      // Gửi yêu cầu thay đổi khoảng thời gian (type) đến backend khi người dùng chọn mới
      socket.emit("changeTimeInterval", value);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>
        BTC/USDT
        <Select
          defaultValue={type}
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "1m", label: "1m" },
            { value: "3m", label: "3m" },
            { value: "5m", label: "5m" },
            { value: "15m", label: "15m" },
            { value: "30m", label: "30m" },
            { value: "1h", label: "1h" },
            { value: "2h", label: "2h" },
            { value: "4h", label: "4h" },
            { value: "6h", label: "6h" },
            { value: "8h", label: "8h" },
            { value: "12h", label: "12h" },
            { value: "1d", label: "1d" },
            { value: "2d", label: "2d" },
            { value: "3d", label: "3d" },
            { value: "1w", label: "1w" },
            { value: "1M", label: "1M" },
            { value: "1y", label: "1y" },
          ]}
        />
      </h1>
      {data?.closeTime}
      <div>
        <h1>
          <span className="text-gray">BTC : </span>
          <span className="text-primary">
            {formatNumber(data?.closePrice || "-")}
          </span>
        </h1>
        <h4>
          <span className="text-gray">24h High : </span>
          <span className="text-success">
            {formatNumber(data?.highPrice || "-")}
          </span>
        </h4>
        <h4>
          <span className="text-gray">24h Low : </span>
          <span className="text-error">
            {formatNumber(data?.lowPrice || "-")}
          </span>
        </h4>
      </div>
    </div>
  );
};

export default Candlestick;
