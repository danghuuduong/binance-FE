import React, { useState, useEffect } from "react";
import api from "../api/axios";

// Định nghĩa kiểu dữ liệu cho một cây nến
interface CandlestickData {
  open: string;
  close: string;
  high: string;
  low: string;
  volume: string;
  timestamp: string;
}

const CandlestickHistory: React.FC = () => {
  const [candles, setCandles] = useState<CandlestickData[]>([]); // Dữ liệu cây nến
  const [loading, setLoading] = useState<boolean>(true); // Trạng thái đang tải dữ liệu

  useEffect(() => {
    // Hàm gọi API
    const fetchCandles = async () => {
      try {
        const response = await api.get("/candles/btc-usdt?limit=3&type=1m");
        console.log("🚀 ~ fetchCandles ~ response:", response);
        if (response?.status == 200) {
          setCandles(response.data);
        }
        setLoading(false);
      } catch (error) {
        console.log("Error fetching candlestick data:", error);
        setLoading(false);
      }
    };

    fetchCandles(); // Gọi API khi component mount
  }, []);

  // Nếu đang tải, hiển thị Loading...
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>BTC/USDT Candlestick History (Last 3 candles)</h1>
      <>
        {candles.map((candle) => {
          return (
            <div key={candle.timestamp}>
              <div>Open Time {candle.timestamp}</div>
              <div>Open Price {candle.open}</div>
              <div>Close Price {candle.close}</div>
              <div>High Price {candle.high}</div>
              <div>Low Price {candle.low}</div>
              <div>Volume {candle.volume}</div>
              ---------------------------------------------------
            </div>
          );
        })}
      </>
    </div>
  );
};

export default CandlestickHistory;
