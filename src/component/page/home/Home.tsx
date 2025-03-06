import React from "react";
import TradingViewWidget from "./homeRow1/TradingViewWidget";
import HomeLineChart from "./homeRow2/LineChartHome";
import BXHTopHome from "./topBX/BXHTopHome";
import StartTrading from "./homeRow2/startTradingHome/StartTrading";
import BtcTopHome from "./homeRow1/BtcTopHome";
import CandlestickHistory from "../emaCrossHistory/EmaCrossHistory";
import LineChartHome from "./homeRow2/LineChartHome";

const Home: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-2 mt-2">
        <div className="col-span-9">
          <div className="w-full bg-grayCT rounded-lg mt-2 p-4">
            <BtcTopHome />
          </div>

          <div className="w-full bg-grayCT rounded-lg p-4 mt-4">
            <TradingViewWidget />
          </div>
        </div>

        <div className=" bg-grayCT rounded-lg col-span-3 px-4 py-4 mt-2">
          <StartTrading />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-2 mt-2">
        <div className="bg-grayCT rounded-lg col-span-12 pt-4  pb-6 px-4 h-[690px]">
          <CandlestickHistory />
        </div>

         {/* <div className=" bg-grayCT rounded-lg col-span-6 py-4 pl-20">
          <BXHTopHome />
        </div> */}

        <div className="bg-grayCT rounded-lg col-span-12 p-4">
          <LineChartHome />
        </div> 
      </div>
    </>
  );
};

export default Home;
