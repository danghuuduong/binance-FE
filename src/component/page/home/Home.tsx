import React from "react";
import InfoUserTrading from "./homeRow1/InfoUserTrading";
import ToDayTrading from "./homeRow1/ToDayTrading";
import Candlestick from "./homeRow1/Candlestick";
import ChartHome from "./homeRow2/homChart";

const Home: React.FC = () => {
  return (
    <div>
      {/* row1------------------------------------- */}
      <div className="grid grid-cols-12 gap-2  mt-2">
        <div className="col-span-4 rounded-lg bg-grayCT p-4">
          <Candlestick />
        </div>
        <div className="col-span-4 bg-grayCT rounded-lg p-4">
          <ToDayTrading />
        </div>
        <div className="col-span-4 bg-grayCT rounded-lg p-4">
          <InfoUserTrading />
        </div>
      </div>

      {/* row2 Chart------------------------------------- */}
      <div className="mt-2 bg-grayCT rounded-lg p-4 w-[50%]">
        <ChartHome />
      </div>
    </div>
  );
};

export default Home;
