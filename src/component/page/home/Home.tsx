import React from "react";
import Candlestick from "./homeRow1/BtcHome";
import HomeVolumeBarChart from "./homeRow1/VolumeBarChartHome";
import HomeLineChart from "./homeRow2/LineChartHome";
import BXHTopHome from "./topBX/BXHTopHome";
import StartTradingHome from "./homeRow2/startTradingHome/StartTradingHome";

const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-2 mt-2">
      
      <div className="col-span-9">
        <div className="grid grid-cols-12 gap-2 ">
          <div className="col-span-6 rounded-lg bg-grayCT py-4 pl-20">
            <Candlestick />
          </div>
          <div className="col-span-6 bg-grayCT rounded-lg p-4">
            <HomeVolumeBarChart />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 mt-2">
          <div className=" bg-grayCT rounded-lg col-span-6 py-4 pl-20">
          <StartTradingHome />
          </div>

          <div className=" bg-grayCT rounded-lg col-span-6 p-4">
          <HomeLineChart />
          </div>
        </div>

      </div>


      <div className=" bg-grayCT rounded-lg col-span-3 p-4">
        <BXHTopHome />
      </div>

    </div>
  );
};

export default Home;
