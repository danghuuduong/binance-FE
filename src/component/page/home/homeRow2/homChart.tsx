import React, { useEffect, useState } from "react";
import { TEChart } from "tw-elements-react";
import { VolumI } from "../../../../interface/HomeI/candlestickDataI";
import api from "../../../../api/axios";
const ChartHome: React.FC = () => {
  const [candles, setCandles] = useState<VolumI[]>([]); // Dữ liệu cây nến

  useEffect(() => {
    // Hàm gọi API
    const fetchCandles = async () => {
      try {
        const response = await api.get("/candles/btc-usdt?limit=20&type=1m");
        if (response?.status === 200) {
          setCandles(response.data);
        }
      } catch (error) {
        console.log("Error volume data:", error);
      }
    };
  
    // Gọi API lần đầu tiên khi component mount
    fetchCandles();
  
    // Đặt interval gọi API mỗi 10 giây
    const intervalId = setInterval(fetchCandles, 10000); // 10000ms = 10s
  
    // Cleanup: Hủy interval khi component unmount hoặc khi không cần nữa
    return () => clearInterval(intervalId);
  }, []);  // [] để useEffect chỉ chạy 1 lần khi component mount

  const dataVolumeAndPrices: any[] = candles?.map((vl) => {
    console.log("🚀 ~ dataVolumeAndPrices ~ vl:", vl);

    const volume = Number(vl.volume);
    const volumeData = isNaN(volume) ? 0 : Math.round(Number(vl.volume) * 1000);

    const volumeColor =
      vl.close > vl.open ? "rgba(35, 108, 83, 1)" : "rgba(135, 48, 63, 1)";

    return { volumeData, volumeColor };
  });

  console.log(dataVolumeAndPrices);
  return (
    <div className="">
      <div className="text-2xl font-medium ">Volume </div>
      <TEChart
        type="bar"
        data={{
          labels: [...dataVolumeAndPrices.map((vl) => vl.volumeData)],
          datasets: [
            {
              label: "Traffic",
              data: [...dataVolumeAndPrices.map((vl) => vl.volumeData)],
              backgroundColor: [...dataVolumeAndPrices.map((vl) => vl.volumeColor)],
            },
          ],
        }}
      />
    </div>
  );
};

export default ChartHome;
