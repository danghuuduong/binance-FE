import React, { useState, useEffect } from 'react';

// Định nghĩa kiểu dữ liệu cho một cây nến
interface CandlestickData {
    open: string;
    close: string;
    high: string;
    low: string;
    volume: string;
    timestamp: string,
}

const CandlestickHistory: React.FC = () => {
    const [candles, setCandles] = useState<CandlestickData[]>([]);  // Dữ liệu cây nến
    const [loading, setLoading] = useState<boolean>(true);  // Trạng thái đang tải dữ liệu
    console.log("candles", candles);

    useEffect(() => {
        // Hàm gọi API
        const fetchCandles = async () => {
            try {
                const response = await fetch('http://localhost:3000/candles/btc-usdt?limit=3&type=1m');
                const data = await response.json();
                setCandles(data);  // Cập nhật danh sách nến
                setLoading(false);  // Đổi trạng thái khi hoàn thành
            } catch (error) {
                console.error('Error fetching candlestick data:', error);
                setLoading(false);
            }
        };

        fetchCandles();  // Gọi API khi component mount
    }, []);

    // Nếu đang tải, hiển thị Loading...
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>BTC/USDT Candlestick History (Last 3 candles)</h1>
            <>
                {candles.map((candle, index) => {
                    return <div key={candle.timestamp}>
                        <div>Open Time {candle.timestamp}</div>
                        <div>Open Price {candle.open}</div>
                        <div>Close Price {candle.close}</div>
                        <div>High Price {candle.high}</div>
                        <div>Low Price {candle.low}</div>
                        <div>Volume {candle.volume}</div>
                    </div>
                })}
            </>
        </div>
    );
};

export default CandlestickHistory;
