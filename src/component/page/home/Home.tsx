import React from "react";
import TradingViewWidget from "./homeRow1/TradingViewWidget";
import StartTrading from "./homeRow2/startTradingHome/StartTrading";
import LineChartHome from "./homeRow2/LineChartHome";
import RealTimeSocket from "./homeRow1/RealTimeSocket";

const Home: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-2 mt-2">
        <div className="col-span-9 bg-grayCT rounded-lg p-4 mt-2">
          <TradingViewWidget />
        </div>

        <div className=" bg-grayCT rounded-lg col-span-3 px-4 py-4 mt-2">
          <StartTrading />
        </div>
      </div>

      <div className="grid grid-cols-12 bg-grayCT rounded-lg col-span-12 my-4">
        <div className="bg-grayCT rounded-lg col-span-12 p-4 px-32">
          <RealTimeSocket />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-2 mt-2">
        <div className="bg-grayCT rounded-lg col-span-12 p-4">
          <LineChartHome />
        </div>
      </div>
    </>
  );
};

export default Home;
