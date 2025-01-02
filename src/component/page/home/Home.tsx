import React from "react";
import InfoUserTrading from "./homeRow1/InfoUserTrading";
import ToDayTrading from "./homeRow1/ToDayTrading";
import Candlestick from "./homeRow1/Candlestick";
import HomeVolumeBarChart from "./homeRow2/homeVolumeBarChart";
import HomeLineChart from "./homeRow2/homeLineChart";
import HomeTopUSD from "./homeRow2/homeTopUSD";

const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-2 mt-2">
      
      <div className="col-span-9">
        <div className="grid grid-cols-12 gap-2 ">
          <div className="col-span-6 rounded-lg bg-grayCT p-4">
            <Candlestick />
          </div>
          <div className="col-span-6 bg-grayCT rounded-lg p-4">
          <HomeVolumeBarChart />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 mt-2">
          <div className=" bg-grayCT rounded-lg col-span-6 p-4">
            
            <HomeLineChart />
          </div>

          <div className=" bg-grayCT rounded-lg col-span-6 p-4">
          <ToDayTrading />
          </div>
        </div>

      </div>


      <div className=" bg-grayCT rounded-lg col-span-3 p-4">
        <HomeTopUSD />
      </div>

    </div>
  );
};

export default Home;
