import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

// Định nghĩa kiểu dữ liệu nến (candlestick)
interface CandlestickData {
  openTime: string;
  openPrice: string;
  closePrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
}

const Candlestick: React.FC = () => {
  const [candlestick, setCandlestick] = useState<CandlestickData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Kết nối tới WebSocket của NestJS backend
    const socket = io('http://localhost:3001', {
      withCredentials: true,
    });

    // Lắng nghe sự kiện 'candlestick' từ backend và cập nhật state
    socket.on('candlestick', (data: CandlestickData) => {
      setCandlestick(data);
      setLoading(false);
    });

    // Cleanup khi component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  // Nếu đang tải, hiển thị "Loading..."
  if (loading) {
    return <div>Loading...</div>;
  }

  // Hàm định dạng giá trị số với dấu phẩy (,) và dấu chấm (.)
  const formatNumber = (value: string) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(parseFloat(value));
  };

  return (
    <div>
      <h1>Realtime BTC/USDT Candlestick</h1>
      <div>
        <p><strong>Open Time:</strong> {candlestick?.openTime}</p>
        <p><strong>Open Price:</strong> {formatNumber(candlestick?.openPrice || '0')}</p>
        <p><strong>Close Price:</strong> {formatNumber(candlestick?.closePrice || '0')}</p>
        <p><strong>High Price:</strong> {formatNumber(candlestick?.highPrice || '0')}</p>
        <p><strong>Low Price:</strong> {formatNumber(candlestick?.lowPrice || '0')}</p>
        <p><strong>Volume:</strong> {formatNumber(candlestick?.volume || '0')}</p>
      </div>
    </div>
  );
};

export default Candlestick;
