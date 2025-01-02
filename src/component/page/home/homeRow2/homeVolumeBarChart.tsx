import React, { useEffect, useState } from "react";
import { TEChart } from "tw-elements-react";
import { VolumI } from "../../../../interface/HomeI/candlestickDataI";
import api from "../../../../api/axios";
const homeVolumeBarChart: React.FC = () => {
  const [candles, setCandles] = useState<VolumI[]>([]); // Dữ liệu cây nến

  useEffect(() => {
    const fetchCandles = async () => {
      try {
        const response = await api.get("/candles/btc-usdt?limit=33&type=1m");
        if (response?.status === 200) {
          setCandles(response.data);
        }
      } catch (error) {
        console.log("Error volume data:", error);
      }
    };

    fetchCandles();
    const intervalId = setInterval(fetchCandles, 60000); 
    return () => clearInterval(intervalId);
  }, []); 

  const dataVolumeAndPrices: { volumeData: number, volumeColor: string }[] = candles?.map((vl) => {
    const volume = Number(vl.volume);
    const volumeData = isNaN(volume) ? 0 : Math.round(Number(vl.volume) * 1000);
    const volumeColor =
      vl.close > vl.open ? "rgba(35, 108, 83, 1)" : "rgba(135, 48, 63, 1)";

    return { volumeData, volumeColor };
  });

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

export default homeVolumeBarChart;
